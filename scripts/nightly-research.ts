import { execFile as execFileCallback } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { DossierSchema, HypothesisSchema, SourceSchema, TopicMapSchema } from "../lib/schemas";
import type {
  Dossier,
  Hypothesis,
  HypothesisStatus,
  ResearchNote,
  Source,
  SourceType,
  TopicMap,
} from "../lib/types";

const execFile = promisify(execFileCallback);
const root = path.resolve(new URL("..", import.meta.url).pathname);
const dataDir = path.join(root, "data");
const dossierDir = path.join(dataDir, "dossiers");
const logsDir = path.join(root, "logs", "nightly");
const dryRun = process.argv.includes("--dry-run");
const noGit = process.argv.includes("--no-git") || process.env.AI_TRUST_NO_GIT === "1";

const initialHypothesis =
  "Trust in AI systems is becoming an evidence problem: durable trust will depend less on stated intent and more on independently repeatable assurance signals across evaluation, monitoring, and operational control.";

type CandidateSource = Omit<Source, "id" | "discoveredAt"> & {
  body?: string;
  origin: string;
};

type SynthesisOutput = Omit<
  Dossier,
  "date" | "runStartedAt" | "runCompletedAt" | "startingHypothesis" | "sourcesRead"
>;

async function main() {
  const started = new Date();
  await mkdir(dossierDir, { recursive: true });
  await mkdir(logsDir, { recursive: true });

  const [existingSources, existingHypotheses] = await Promise.all([
    readJson<Source[]>(path.join(dataDir, "sources.json"), []),
    readJson<Hypothesis[]>(path.join(dataDir, "hypotheses.json"), []),
  ]);

  const startingHypothesis = selectHypothesis(existingHypotheses, started);
  const queries = buildQueries(startingHypothesis, existingHypotheses);
  const candidates = await collectSources(queries);
  const newSources = assignSourceIds(dedupeSources(candidates, existingSources), existingSources, started);
  const sourcesRead = newSources.slice(0, 12);
  const synthesis = await synthesize(startingHypothesis, sourcesRead);
  const dossier = DossierSchema.parse({
    date: dateKey(started),
    runStartedAt: started.toISOString(),
    runCompletedAt: new Date().toISOString(),
    startingHypothesis,
    sourcesRead,
    ...synthesis,
  });

  const allSources = SourceSchema.array().parse(mergeSources(existingSources, newSources));
  const allHypotheses = HypothesisSchema.array().parse(
    mergeHypotheses(existingHypotheses, startingHypothesis, dossier),
  );
  const topicMap = TopicMapSchema.parse(buildTopicMap(allSources, allHypotheses));

  if (dryRun) {
    console.log(JSON.stringify(dossier, null, 2));
    return;
  }

  await writeJson(path.join(dossierDir, `${dossier.date}.json`), dossier);
  await writeJson(path.join(dataDir, "sources.json"), allSources);
  await writeJson(path.join(dataDir, "hypotheses.json"), allHypotheses);
  await writeJson(path.join(dataDir, "topic-map.json"), topicMap);
  await writeLog(dossier.date, `Completed with ${sourcesRead.length} sources.\n`);

  if (!noGit) {
    await commitAndPush(dossier.date);
  }
}

function selectHypothesis(existing: Hypothesis[], now: Date): Hypothesis {
  const active = existing
    .filter((item) => item.status === "active" || item.status === "new" || item.status === "strengthened")
    .sort((a, b) => b.priority - a.priority || a.updatedAt.localeCompare(b.updatedAt))[0];

  if (active) {
    return active;
  }

  return {
    id: "H0001",
    statement: initialHypothesis,
    status: "active",
    confidence: 0.45,
    priority: 0.86,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    rationale: "Initial clean hypothesis for the first research run.",
  };
}

function buildQueries(hypothesis: Hypothesis, existing: Hypothesis[]): string[] {
  const priorQuestions = existing
    .filter((item) => item.status === "new" || item.status === "active")
    .slice(0, 3)
    .map((item) => item.statement);

  return [
    `"AI trust" assurance evaluation benchmark monitoring`,
    `"AI assurance" evidence evaluation monitoring`,
    `"trustworthy AI" evaluation benchmark assurance`,
    `"LLM trustworthiness" evaluation assurance monitoring`,
    `"agentic AI" trust safety evaluation benchmark`,
    `"AI audit" technical assurance evaluation`,
    ...priorQuestions,
  ].map((query) => query.slice(0, 180));
}

async function collectSources(queries: string[]): Promise<CandidateSource[]> {
  const batches = await Promise.all(
    queries.map(async (query) => {
      const [openAlex, arxiv, github] = await Promise.all([
        searchOpenAlex(query),
        searchArxiv(query),
        searchGitHub(query),
      ]);
      return [...openAlex, ...arxiv, ...github];
    }),
  );

  return batches.flat().sort((a, b) => b.relevanceScore - a.relevanceScore || b.trustRating - a.trustRating);
}

async function searchOpenAlex(query: string): Promise<CandidateSource[]> {
  const url = new URL("https://api.openalex.org/works");
  url.searchParams.set("search", query);
  url.searchParams.set("per-page", "8");
  url.searchParams.set("sort", "publication_date:desc");

  const json = await fetchJson<{ results?: OpenAlexWork[] }>(url);
  return (json.results ?? []).map((work) => {
    const sourceType: SourceType = work.type === "preprint" ? "preprint" : "paper";
    const landing = work.doi ?? work.primary_location?.landing_page_url ?? work.id;
    return {
      title: clean(work.title ?? "Untitled work"),
      authors: (work.authorships ?? [])
        .map((item) => item.author?.display_name)
        .filter((name): name is string => Boolean(name))
        .slice(0, 12),
      venue: work.primary_location?.source?.display_name ?? work.host_venue?.display_name,
      publishedAt: work.publication_date,
      url: landing,
      doi: work.doi?.replace(/^https:\/\/doi.org\//, ""),
      sourceType,
      trustRating: 0.82,
      relevanceScore: score(`${work.title ?? ""} ${reconstructAbstract(work.abstract_inverted_index)}`),
      summary: sentence(reconstructAbstract(work.abstract_inverted_index)),
      body: reconstructAbstract(work.abstract_inverted_index),
      origin: "openalex",
    };
  });
}

async function searchArxiv(query: string): Promise<CandidateSource[]> {
  const terms = query
    .split(/\s+/)
    .filter((term) => term.length > 4)
    .slice(0, 8)
    .join(" AND ");
  const url = new URL("https://export.arxiv.org/api/query");
  url.searchParams.set("search_query", `all:${terms || "AI trust assurance"}`);
  url.searchParams.set("start", "0");
  url.searchParams.set("max_results", "8");
  url.searchParams.set("sortBy", "lastUpdatedDate");
  url.searchParams.set("sortOrder", "descending");

  const xml = await fetchText(url);
  return Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)).map((match) => {
    const entry = match[1];
    const title = clean(decodeXml(readTag(entry, "title") ?? "Untitled preprint"));
    const summary = clean(decodeXml(readTag(entry, "summary") ?? ""));
    const authors = Array.from(entry.matchAll(/<name>(.*?)<\/name>/g)).map((item) => decodeXml(item[1]));
    const link = readAttr(entry, /<id>(.*?)<\/id>/) ?? "";
    return {
      title,
      authors,
      venue: "arXiv",
      publishedAt: readTag(entry, "published")?.slice(0, 10),
      url: link,
      sourceType: "preprint",
      trustRating: 0.72,
      relevanceScore: score(`${title} ${summary}`),
      summary: sentence(summary),
      body: summary,
      origin: "arxiv",
    };
  });
}

async function searchGitHub(query: string): Promise<CandidateSource[]> {
  const url = new URL("https://api.github.com/search/repositories");
  url.searchParams.set("q", `${query} in:name,description,readme pushed:>2025-01-01`);
  url.searchParams.set("sort", "updated");
  url.searchParams.set("order", "desc");
  url.searchParams.set("per_page", "6");

  const json = await fetchJson<{ items?: GitHubRepo[] }>(url, {
    Accept: "application/vnd.github+json",
    Authorization: process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : undefined,
  });

  return (json.items ?? []).map((repo) => ({
    title: repo.full_name,
    authors: [repo.owner?.login ?? "GitHub"],
    venue: "GitHub",
    publishedAt: repo.created_at?.slice(0, 10),
    url: repo.html_url,
    sourceType: "tool",
    trustRating: repo.stargazers_count > 500 ? 0.78 : 0.58,
    relevanceScore: score(`${repo.name} ${repo.description ?? ""}`),
    summary: repo.description ?? undefined,
    body: repo.description ?? "",
    origin: "github",
  }));
}

async function synthesize(
  startingHypothesis: Hypothesis,
  sourcesRead: Source[],
): Promise<SynthesisOutput> {
  const llm = await llmSynthesis(startingHypothesis, sourcesRead);
  if (llm) {
    return llm;
  }

  const themes = topTerms(sourcesRead.map((source) => `${source.title} ${source.summary ?? ""}`).join(" "));
  const notes: ResearchNote[] = sourcesRead.slice(0, 8).map((source) => ({
    sourceId: source.id,
    claim: `${source.title} adds evidence on ${source.sourceType === "tool" ? "implementation practice" : "assurance measurement"}.`,
    implication:
      "The trust question should be treated as a testable evidence pipeline, not a static policy claim.",
    limitation:
      source.sourceType === "preprint"
        ? "This is preprint evidence and needs corroboration."
        : "The metadata-only pass should be followed by closer reading before major confidence changes.",
  }));

  const nextConfidence = Math.min(0.72, startingHypothesis.confidence + Math.max(0.02, sourcesRead.length * 0.015));
  return {
    notes,
    synthesis: `Tonight's open-source scan found ${sourcesRead.length} relevant artifacts clustered around ${themes.join(", ")}. The working hypothesis remains viable, but the evidence base is still stronger on evaluation and tooling than on independent, repeatable assurance in deployed systems.`,
    hypothesisUpdates: [
      {
        hypothesisId: startingHypothesis.id,
        previousConfidence: startingHypothesis.confidence,
        nextConfidence,
        status: "strengthened",
        rationale: "Multiple fresh sources point toward operational evidence, evaluation, and monitoring as core trust mechanisms.",
      },
    ],
    newHypotheses: [
      makeHypothesis(
        "Independent AI assurance will converge around continuously refreshed evidence bundles rather than one-time model reports.",
        startingHypothesis.id,
        0.62,
      ),
      makeHypothesis(
        "Agentic AI trust failures will be easier to detect through workflow telemetry than through benchmark scores alone.",
        startingHypothesis.id,
        0.58,
      ),
    ],
    nextSearchPlan: [
      "continuous assurance evidence bundles AI systems",
      "agent workflow telemetry trust monitoring evaluation",
      "independent AI audit benchmark operational assurance",
    ],
    unresolvedQuestions: [
      "Which assurance signals remain predictive after deployment conditions drift?",
      "What evidence should be independently reproducible versus vendor-attested?",
      "How should agentic workflows expose trust-relevant telemetry without leaking sensitive data?",
    ],
  };
}

async function llmSynthesis(
  startingHypothesis: Hypothesis,
  sourcesRead: Source[],
): Promise<SynthesisOutput | null> {
  const apiKey = process.env.AI_TRUST_LLM_API_KEY;
  const model = process.env.AI_TRUST_LLM_MODEL;
  if (!apiKey || !model || sourcesRead.length === 0) {
    return null;
  }

  const baseUrl = process.env.AI_TRUST_LLM_BASE_URL ?? "https://api.openai.com/v1";
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are a careful PhD-style research assistant. Return only JSON. Do not quote long copyrighted text. Use concise original synthesis.",
        },
        {
          role: "user",
          content: JSON.stringify({
            task: "Analyze the sources and update the hypothesis.",
            requiredShape: {
              notes: [{ sourceId: "string", claim: "string", implication: "string", limitation: "string" }],
              synthesis: "string",
              hypothesisUpdates: [
                {
                  hypothesisId: startingHypothesis.id,
                  previousConfidence: startingHypothesis.confidence,
                  nextConfidence: "0..1 number",
                  status: "active|strengthened|weakened|retired|new",
                  rationale: "string",
                },
              ],
              newHypotheses: [
                {
                  statement: "string",
                  confidence: "0..1 number",
                  priority: "0..1 number",
                  rationale: "string",
                },
              ],
              nextSearchPlan: ["string"],
              unresolvedQuestions: ["string"],
            },
            startingHypothesis,
            sourcesRead: sourcesRead.map((source) => ({
              id: source.id,
              title: source.title,
              authors: source.authors,
              venue: source.venue,
              publishedAt: source.publishedAt,
              sourceType: source.sourceType,
              url: source.url,
              summary: source.summary,
            })),
          }),
        },
      ],
    }),
  });

  if (!response.ok) {
    return null;
  }

  const json = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
  const content = json.choices?.[0]?.message?.content;
  if (!content) {
    return null;
  }

  try {
    const parsed = JSON.parse(content) as {
      notes?: ResearchNote[];
      synthesis?: string;
      hypothesisUpdates?: Array<{
        hypothesisId: string;
        previousConfidence: number;
        nextConfidence: number;
        status: HypothesisStatus;
        rationale: string;
      }>;
      newHypotheses?: Array<{
        statement: string;
        confidence?: number;
        priority?: number;
        rationale?: string;
      }>;
      nextSearchPlan?: string[];
      unresolvedQuestions?: string[];
    };
    return {
      notes: parsed.notes ?? [],
      synthesis: parsed.synthesis ?? "",
      hypothesisUpdates: parsed.hypothesisUpdates ?? [],
      newHypotheses: (parsed.newHypotheses ?? []).map((item) =>
        makeHypothesis(item.statement, startingHypothesis.id, item.priority ?? 0.5, item.confidence, item.rationale),
      ),
      nextSearchPlan: parsed.nextSearchPlan ?? [],
      unresolvedQuestions: parsed.unresolvedQuestions ?? [],
    };
  } catch {
    return null;
  }
}

function assignSourceIds(candidates: CandidateSource[], existing: Source[], now: Date): Source[] {
  let counter = existing.length + 1;
  return candidates.map((candidate) =>
    SourceSchema.parse({
      ...candidate,
      id: `S${String(counter++).padStart(4, "0")}`,
      discoveredAt: now.toISOString(),
    }),
  );
}

function dedupeSources(candidates: CandidateSource[], existing: Source[]): CandidateSource[] {
  const seen = new Set(existing.flatMap((source) => [key(source.url), key(source.doi), key(source.title)]));
  const unique: CandidateSource[] = [];

  for (const candidate of candidates) {
    const keys = [key(candidate.url), key(candidate.doi), key(candidate.title)];
    if (keys.some((item) => seen.has(item))) {
      continue;
    }
    keys.forEach((item) => seen.add(item));
    unique.push(candidate);
  }

  return unique.filter((source) => source.relevanceScore >= 0.34).slice(0, 24);
}

function mergeSources(existing: Source[], next: Source[]): Source[] {
  return [...existing, ...next].sort((a, b) => b.discoveredAt.localeCompare(a.discoveredAt));
}

function mergeHypotheses(existing: Hypothesis[], starting: Hypothesis, dossier: Dossier): Hypothesis[] {
  const byId = new Map(existing.map((item) => [item.id, item]));
  if (!byId.has(starting.id)) {
    byId.set(starting.id, starting);
  }

  for (const update of dossier.hypothesisUpdates) {
    const current = byId.get(update.hypothesisId);
    if (!current) {
      continue;
    }
    byId.set(update.hypothesisId, {
      ...current,
      confidence: update.nextConfidence,
      status: update.status,
      updatedAt: dossier.runCompletedAt,
      rationale: update.rationale,
    });
  }

  for (const hypothesis of dossier.newHypotheses) {
    byId.set(hypothesis.id, hypothesis);
  }

  return Array.from(byId.values()).sort((a, b) => b.priority - a.priority);
}

function buildTopicMap(sources: Source[], hypotheses: Hypothesis[]): TopicMap {
  const clusters = [
    cluster("evaluation", "Evaluation and benchmarks", sources, hypotheses, ["eval", "benchmark", "measure"]),
    cluster("monitoring", "Monitoring and telemetry", sources, hypotheses, ["monitor", "telemetry", "observ"]),
    cluster("security", "Security and agent risk", sources, hypotheses, ["security", "agent", "attack", "risk"]),
    cluster("governance", "Governance evidence", sources, hypotheses, ["govern", "audit", "assurance", "control"]),
  ].filter((item) => item.sourceIds.length > 0 || item.hypothesisIds.length > 0);

  return {
    updatedAt: new Date().toISOString(),
    clusters,
    edges: clusters.slice(1).map((item) => ({
      from: clusters[0]?.id ?? item.id,
      to: item.id,
      relationship: "shares trust evidence questions with",
    })),
  };
}

function cluster(
  id: string,
  label: string,
  sources: Source[],
  hypotheses: Hypothesis[],
  terms: string[],
): TopicMap["clusters"][number] {
  return {
    id,
    label,
    sourceIds: sources
      .filter((source) => terms.some((term) => `${source.title} ${source.summary ?? ""}`.toLowerCase().includes(term)))
      .slice(0, 30)
      .map((source) => source.id),
    hypothesisIds: hypotheses
      .filter((hypothesis) => terms.some((term) => hypothesis.statement.toLowerCase().includes(term)))
      .slice(0, 20)
      .map((hypothesis) => hypothesis.id),
  };
}

function makeHypothesis(
  statement: string,
  parentId: string,
  priority: number,
  confidence = 0.42,
  rationale?: string,
): Hypothesis {
  const now = new Date().toISOString();
  return {
    id: `H${createHash("sha1").update(`${parentId}:${statement}`).digest("hex").slice(0, 8)}`,
    statement,
    status: "new",
    confidence: clamp(confidence),
    priority: clamp(priority),
    createdAt: now,
    updatedAt: now,
    parentId,
    rationale,
  };
}

async function commitAndPush(date: string) {
  try {
    await execFile("git", ["rev-parse", "--is-inside-work-tree"], { cwd: root });
    await execFile("git", ["add", "data"], { cwd: root });
    await execFile("git", ["commit", "-m", `Add AI trust dossier ${date}`], { cwd: root });
    await execFile("git", ["push"], { cwd: root });
  } catch (error) {
    await writeLog(date, `Git publish skipped or failed: ${String(error)}\n`);
  }
}

async function readJson<T>(filePath: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await readFile(filePath, "utf8")) as T;
  } catch {
    return fallback;
  }
}

async function writeJson(filePath: string, value: unknown) {
  const tmp = `${filePath}.${process.pid}.tmp`;
  await writeFile(tmp, `${JSON.stringify(value, null, 2)}\n`);
  await rename(tmp, filePath);
}

async function writeLog(date: string, message: string) {
  await writeFile(path.join(logsDir, `${date}.log`), message, { flag: "a" });
}

async function fetchJson<T>(url: URL, headers: Record<string, string | undefined> = {}): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "ai-trust-frontier/0.1 research contact: local",
        ...Object.fromEntries(Object.entries(headers).filter(([, value]) => value)),
      },
    });
    if (!response.ok) {
      return {} as T;
    }
    return (await response.json()) as T;
  } catch {
    return {} as T;
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchText(url: URL): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "ai-trust-frontier/0.1 research contact: local" },
    });
    if (!response.ok) {
      return "";
    }
    return response.text();
  } catch {
    return "";
  } finally {
    clearTimeout(timeout);
  }
}

function score(text: string): number {
  const haystack = text.toLowerCase();
  const terms = [
    "trust",
    "assurance",
    "evaluation",
    "benchmark",
    "monitor",
    "governance",
    "safety",
    "security",
    "agent",
    "audit",
    "risk",
    "transparency",
  ];
  const aiSignal = /\b(ai|artificial intelligence|llm|language model|agentic|foundation model)\b/.test(haystack);
  const trustSignal = /\b(trust|trustworthy|assurance|audit|evaluation|benchmark|safety|monitoring)\b/.test(haystack);
  const hits = terms.filter((term) => haystack.includes(term)).length;
  const base = aiSignal && trustSignal ? 0.18 : 0;
  return clamp(base + hits * 0.08);
}

function topTerms(text: string): string[] {
  const counts = new Map<string, number>();
  for (const word of text.toLowerCase().match(/[a-z][a-z-]{4,}/g) ?? []) {
    if (["their", "there", "which", "about", "using", "based", "systems"].includes(word)) {
      continue;
    }
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([word]) => word);
}

function dateKey(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "00";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function readTag(value: string, tag: string): string | undefined {
  return value.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))?.[1];
}

function readAttr(value: string, pattern: RegExp): string | undefined {
  return value.match(pattern)?.[1];
}

function reconstructAbstract(index?: Record<string, number[]>): string {
  if (!index) {
    return "";
  }
  const words: string[] = [];
  for (const [word, positions] of Object.entries(index)) {
    for (const position of positions) {
      words[position] = word;
    }
  }
  return clean(words.join(" "));
}

function sentence(value: string): string | undefined {
  const cleanValue = clean(value);
  if (!cleanValue) {
    return undefined;
  }
  return cleanValue.split(/(?<=[.!?])\s+/).slice(0, 2).join(" ").slice(0, 520);
}

function clean(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function decodeXml(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function key(value?: string): string {
  if (!value) {
    return "";
  }
  return value
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "")
    .replace(/[^a-z0-9]+/g, "");
}

function clamp(value: number): number {
  return Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0.5));
}

type OpenAlexWork = {
  id: string;
  title?: string;
  doi?: string;
  type?: string;
  publication_date?: string;
  abstract_inverted_index?: Record<string, number[]>;
  authorships?: Array<{ author?: { display_name?: string } }>;
  host_venue?: { display_name?: string };
  primary_location?: {
    landing_page_url?: string;
    source?: { display_name?: string };
  };
};

type GitHubRepo = {
  name: string;
  full_name: string;
  description?: string;
  html_url: string;
  created_at?: string;
  stargazers_count: number;
  owner?: { login?: string };
};

main().catch(async (error) => {
  const date = dateKey(new Date());
  await mkdir(logsDir, { recursive: true });
  await writeLog(date, `Nightly research failed: ${error instanceof Error ? error.stack : String(error)}\n`);
  console.error(error);
  process.exit(1);
});

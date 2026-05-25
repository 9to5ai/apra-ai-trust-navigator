import fs from "node:fs";
import path from "node:path";
import {
  DossierSchema,
  HypothesisSchema,
  SourceSchema,
  TopicMapSchema,
} from "@/lib/schemas";
import type { Dossier, Hypothesis, Source, TopicMap } from "@/lib/types";

const root = process.cwd();
const dataDir = path.join(root, "data");
const dossierDir = path.join(dataDir, "dossiers");

function readJson<T>(filePath: string, fallback: T): T {
  if (!fs.existsSync(filePath)) {
    return fallback;
  }

  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

export function getSources(): Source[] {
  const raw = readJson<Source[]>(path.join(dataDir, "sources.json"), []);
  return SourceSchema.array().parse(raw);
}

export function getHypotheses(): Hypothesis[] {
  const raw = readJson<Hypothesis[]>(path.join(dataDir, "hypotheses.json"), []);
  return HypothesisSchema.array().parse(raw);
}

export function getTopicMap(): TopicMap {
  const raw = readJson<TopicMap>(path.join(dataDir, "topic-map.json"), {
    updatedAt: null,
    clusters: [],
    edges: [],
  });
  return TopicMapSchema.parse(raw);
}

export function getDossiers(): Dossier[] {
  if (!fs.existsSync(dossierDir)) {
    return [];
  }

  return fs
    .readdirSync(dossierDir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .reverse()
    .map((file) =>
      DossierSchema.parse(
        JSON.parse(fs.readFileSync(path.join(dossierDir, file), "utf8")),
      ),
    );
}

export function getDossier(date: string): Dossier | null {
  const filePath = path.join(dossierDir, `${date}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return DossierSchema.parse(JSON.parse(fs.readFileSync(filePath, "utf8")));
}

export function getLatestDossier(): Dossier | null {
  return getDossiers()[0] ?? null;
}

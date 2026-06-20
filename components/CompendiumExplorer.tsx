"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Brain,
  ClipboardList,
  Filter,
  Landmark,
  Search,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Users,
  Workflow,
} from "lucide-react";
import {
  audienceOptions,
  boardQuestions,
  controlLibrary,
  publicationHighlights,
  roadmap,
  topicOptions,
} from "@/lib/compendium";

const accentClass: Record<string, string> = {
  teal: "card-accent teal",
  violet: "card-accent violet",
  amber: "card-accent amber",
  red: "card-accent red",
  blue: "card-accent blue",
  green: "card-accent green",
};

export function CompendiumExplorer() {
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState<(typeof audienceOptions)[number]["id"]>("all");
  const [topic, setTopic] = useState<(typeof topicOptions)[number]["id"]>("all");

  const filteredControls = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return controlLibrary.filter((card) => {
      const matchesAudience = audience === "all" || card.audience.includes(audience);
      const matchesTopic = topic === "all" || card.topics.includes(topic);
      if (!matchesAudience || !matchesTopic) return false;
      if (!needle) return true;
      const haystack = [
        card.standard,
        card.title,
        card.summary,
        ...card.whatAPRAExpects,
        ...card.practicalControls,
        ...card.evidence,
        ...card.aiImplications,
        ...card.links.map((link) => link.label),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [audience, query, topic]);

  const aiControls = controlLibrary.filter((card) => card.topics.includes("ai")).length;
  const sectorCards = controlLibrary.filter((card) => card.topics.includes("sector")).length;
  const controlBullets = controlLibrary.reduce(
    (sum, card) => sum + card.whatAPRAExpects.length + card.practicalControls.length + card.aiImplications.length,
    0,
  );

  return (
    <main className="page compendium-page">
      <section className="hero panel">
        <div className="hero-copy">
          <p className="eyebrow">APRA AI Trust Navigator</p>
          <h1>APRA AI compliance, made concrete</h1>
          <p className="lead">
            This is a working crosswalk from APRA's prudential standards and latest publications into
            controls, evidence, board questions, and sector-specific action items. No slogans, no
            policy theater.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#publications">
              Review APRA publications
              <ArrowUpRight size={16} />
            </a>
            <a className="button secondary" href="#standards">
              Open the control library
              <ClipboardList size={16} />
            </a>
          </div>

          <div className="signal-strip" aria-label="What the app covers">
            <article className="signal-card">
              <span className="signal-badge">Coverage</span>
              <h3>{controlLibrary.length} control blocks</h3>
              <p>Cross-industry standards plus the major sector overlays that matter in practice.</p>
            </article>
            <article className="signal-card">
              <span className="signal-badge">AI risk</span>
              <h3>{aiControls} AI-linked controls</h3>
              <p>Board oversight, vendor concentration, resilience, and security all sit in the same frame.</p>
            </article>
            <article className="signal-card">
              <span className="signal-badge">Evidence</span>
              <h3>{controlBullets} concrete requirements</h3>
              <p>The app turns standards language into things you can actually collect, test, and show APRA.</p>
            </article>
            <article className="signal-card">
              <span className="signal-badge">Sector overlays</span>
              <h3>{sectorCards} regulated-entity paths</h3>
              <p>ADI, insurer, superannuation, and private health insurance lenses all stay visible.</p>
            </article>
          </div>
        </div>

        <aside className="hero-rail">
          <div className="panel stats-panel compact">
            <div className="metric-stack">
              <div className="metric-row">
                <span className="metric-label">Publication updates</span>
                <span className="metric-value">{publicationHighlights.length}</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Cross-industry standards</span>
                <span className="metric-value">6</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Sector overlays</span>
                <span className="metric-value">4</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Board questions</span>
                <span className="metric-value">{boardQuestions.length}</span>
              </div>
            </div>
          </div>

          <div className="panel compact focus-panel">
            <div className="panel-title-row">
              <TriangleAlert size={18} />
              <h2>What APRA is really asking for</h2>
            </div>
            <ul className="list compact-list">
              <li>AI inventory, owners, and concentration risk visibility.</li>
              <li>Board challenge that can keep up with fast-moving technology.</li>
              <li>Operational resilience, security, and vendor fallback paths.</li>
              <li>Evidence folders that survive an examiner's follow-up questions.</li>
            </ul>
          </div>

          <div className="panel compact focus-panel">
            <div className="panel-title-row">
              <Sparkles size={18} />
              <h2>Latest APRA signal</h2>
            </div>
            <p className="prose">
              APRA says governance, risk management, assurance, and operational resilience are not
              keeping pace with AI adoption. That is the operating problem this app solves.
            </p>
          </div>
        </aside>
      </section>

      <section className="section intro-grid" id="overview">
        <article className="panel intro-card">
          <p className="eyebrow">The short version</p>
          <h2>Make the control story provable</h2>
          <p className="prose">
            APRA does not need a manifesto. It needs a clear chain from board oversight to control
            owner to evidence. If you cannot show the chain, the control does not really exist.
          </p>
        </article>
        <article className="panel intro-card">
          <p className="eyebrow">The AI problem</p>
          <h2>AI crosses every control line at once</h2>
          <p className="prose">
            One use case can touch cyber, privacy, procurement, third-party reliance, data quality,
            operational risk, remuneration, and board oversight. A single control owner is not enough.
          </p>
        </article>
        <article className="panel intro-card">
          <p className="eyebrow">The new governance line</p>
          <h2>APRA wants stronger boards, not just more reporting</h2>
          <p className="prose">
            The governance review is about clearer accountability, skills, conflicts, and fit and proper
            discipline. The AI letter shows why that matters right now.
          </p>
        </article>
      </section>

      <section className="section" id="publications">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Latest APRA publications</p>
            <h2>The publications that change how you should run the controls</h2>
          </div>
          <p className="section-lead">
            These are the documents to brief the board on first. They change the operating model, not
            just the language.
          </p>
        </div>

        <div className="source-atlas-grid">
          {publicationHighlights.map((item) => (
            <article className={`panel source-atlas-card ${accentClass[item.accent ?? "teal"]}`} key={item.id}>
              <div className="library-card-head">
                <span className="signal-badge">{item.date}</span>
                <span className="category-tag">{item.id.replace(/-/g, " ")}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="prose">{item.summary}</p>
              <div className="mini-panel-list">
                <div>
                  <h4 className="category-tag">Why it matters</h4>
                  <ul className="mini-list">
                    {item.whyItMatters.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="category-tag">What to do now</h4>
                  <ul className="mini-list">
                    {item.action.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="link-row">
                <a href={item.href} rel="noreferrer" target="_blank">
                  Open source <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="standards">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Control library</p>
            <h2>The standards crosswalk, filtered by entity and topic</h2>
          </div>
          <p className="section-lead">
            Choose the entity type you care about, then trim the list by topic. Search works across
            standards, controls, evidence, and AI implications.
          </p>
        </div>

        <div className="library-tools panel compact">
          <div className="category-bar" aria-label="Select regulated entity">
            {audienceOptions.map((item) => (
              <button
                aria-pressed={audience === item.id}
                className={audience === item.id ? "category-chip active" : "category-chip"}
                key={item.id}
                onClick={() => setAudience(item.id)}
                type="button"
              >
                <Landmark size={14} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="category-bar" aria-label="Filter by topic">
            {topicOptions.map((item) => (
              <button
                aria-pressed={topic === item.id}
                className={topic === item.id ? "category-chip active" : "category-chip"}
                key={item.id}
                onClick={() => setTopic(item.id)}
                type="button"
              >
                <Filter size={14} />
                {item.label}
              </button>
            ))}
          </div>

          <label className="search-box" htmlFor="apra-search">
            <Search size={16} />
            <input
              id="apra-search"
              name="apra-search"
              placeholder="Search standards, controls, evidence, or APRA publication references"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <div className="results-note" aria-live="polite">
            {filteredControls.length} of {controlLibrary.length} control blocks shown
          </div>
        </div>

        <div className="library-grid">
          {filteredControls.map((card) => (
            <article className={`panel library-card ${accentClass[card.accent ?? "teal"]}`} key={card.id}>
              <div className="library-card-head">
                <span className="signal-badge">{card.standard}</span>
                <span className="category-tag">{card.audience.join(" / ")}</span>
              </div>
              <h3>{card.title}</h3>
              <p className="prose">{card.summary}</p>

              <div className="mini-panel-list">
                <div>
                  <h4 className="category-tag">What APRA expects</h4>
                  <ul className="mini-list">
                    {card.whatAPRAExpects.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="category-tag">Controls to implement</h4>
                  <ul className="mini-list">
                    {card.practicalControls.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="category-tag">Evidence to keep</h4>
                  <ul className="mini-list">
                    {card.evidence.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="category-tag">AI implications</h4>
                  <ul className="mini-list">
                    {card.aiImplications.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="link-row">
                {card.links.map((link) => (
                  <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section grid-two-wide" id="plan">
        <article className="panel roadmap-panel">
          <div className="panel-title-row">
            <Workflow size={18} />
            <h2>How to get from policy language to a live operating model</h2>
          </div>
          <div className="roadmap">
            {roadmap.map((step) => (
              <div className="roadmap-step" key={step.id}>
                <div className="roadmap-marker" />
                <div>
                  <h3>{step.title}</h3>
                  <p className="prose">{step.description}</p>
                  <div className="link-row">
                    {step.evidence.map((item) => (
                      <span className="pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel live-panel">
          <div className="panel-title-row">
            <ShieldCheck size={18} />
            <h2>Board pack structure that survives scrutiny</h2>
          </div>
          <ul className="bullets">
            <li>One page summary with the use-case inventory, criticality, and risk tier.</li>
            <li>One page on the standard crosswalk with named owners and due dates.</li>
            <li>One page on incidents, exceptions, concentration, and remediation.</li>
            <li>One page on vendor dependencies, exit paths, and manual fallback.</li>
            <li>One page on what changed since the last meeting.</li>
          </ul>

          <div className="panel-title-row" style={{ marginTop: 18 }}>
            <BadgeCheck size={18} />
            <h2>What good looks like</h2>
          </div>
          <p className="prose">
            The board can explain the AI inventory, the top risks, the mitigation status, the fallback
            path, and the next review date without reading a policy deck.
          </p>
        </article>
      </section>

      <section className="section" id="questions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Board challenge</p>
            <h2>The questions APRA, the board, and internal audit will ask</h2>
          </div>
          <p className="section-lead">
            If these answers are hard to produce, the control system is not mature enough yet.
          </p>
        </div>

        <div className="question-stack">
          {boardQuestions.map((item) => (
            <details className="question-item" key={item.question}>
              <summary>
                <span className="panel-title-row">
                  <Users size={16} />
                  {item.question}
                </span>
              </summary>
              <p>{item.answerFrame}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="panel compact focus-panel">
          <div className="panel-title-row">
            <Brain size={18} />
            <h2>Use this app as the briefing layer, not the finish line</h2>
          </div>
          <p className="prose">
            The next useful step is to turn this into a working board pack, control register, and
            evidence checklist for the exact entity type you care about.
          </p>
        </div>
      </section>
    </main>
  );
}

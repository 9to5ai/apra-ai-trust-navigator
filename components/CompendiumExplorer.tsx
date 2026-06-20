"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Brain,
  BookOpenText,
  ClipboardList,
  FileText,
  Landmark,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Users,
  Workflow,
} from "lucide-react";
import {
  apraClauseAtlas,
  handbookPillars,
  type APRAClauseAtlasEntry,
} from "@/lib/apra-clauses";
import {
  boardQuestions,
  controlLibrary,
  publicationHighlights,
  roadmap,
} from "@/lib/compendium";

const accentClass: Record<string, string> = {
  teal: "card-accent teal",
  violet: "card-accent violet",
  amber: "card-accent amber",
  red: "card-accent red",
  blue: "card-accent blue",
  green: "card-accent green",
};

function countClauses(entry: APRAClauseAtlasEntry) {
  return entry.sections.reduce((sum, section) => sum + section.items.length, 0);
}

function clauseExcerpt(text: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > 190 ? `${clean.slice(0, 190)}...` : clean;
}

function clauseKey(standardId: string, itemId: string) {
  return `${standardId}:${itemId}`;
}

export function CompendiumExplorer() {
  const [pillar, setPillar] = useState(handbookPillars[0].id);
  const [standardId, setStandardId] = useState(apraClauseAtlas[0].id);
  const [query, setQuery] = useState("");
  const [activeClause, setActiveClause] = useState("");

  const allClauseCount = useMemo(
    () => apraClauseAtlas.reduce((sum, entry) => sum + countClauses(entry), 0),
    [],
  );
  const allSectionCount = useMemo(
    () => apraClauseAtlas.reduce((sum, entry) => sum + entry.sectionCount, 0),
    [],
  );

  const visibleStandards = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return apraClauseAtlas.filter((entry) => {
      if (entry.pillar !== pillar) return false;
      if (!needle) return true;
      const haystack = [
        entry.code,
        entry.title,
        entry.summary,
        ...entry.sections.map((section) => section.title),
        ...entry.sections.flatMap((section) => section.items.map((item) => item.text)),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [pillar, query]);

  const selectedStandard = useMemo(() => {
    return (
      visibleStandards.find((entry) => entry.id === standardId) ??
      visibleStandards[0] ??
      apraClauseAtlas.find((entry) => entry.id === standardId) ??
      apraClauseAtlas[0]
    );
  }, [standardId, visibleStandards]);

  const selectedOverview = useMemo(
    () => controlLibrary.find((card) => card.id === selectedStandard.id),
    [selectedStandard.id],
  );

  const filteredSections = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return selectedStandard.sections
      .map((section) => {
        const items = section.items.filter((item) => {
          if (!needle) return true;
          const text = [selectedStandard.code, selectedStandard.title, section.title, item.number, item.text]
            .join(" ")
            .toLowerCase();
          return text.includes(needle);
        });
        return { ...section, items };
      })
      .filter((section) => section.items.length > 0);
  }, [query, selectedStandard]);

  const flatClauses = useMemo(
    () => filteredSections.flatMap((section) => section.items.map((item) => ({ section: section.title, ...item }))),
    [filteredSections],
  );

  const activeClauseItem = useMemo(() => {
    const [standard, itemId] = activeClause.split(":");
    if (standard !== selectedStandard.id) return flatClauses[0] ?? null;
    return flatClauses.find((item) => item.id === itemId) ?? flatClauses[0] ?? null;
  }, [activeClause, flatClauses, selectedStandard.id]);

  const selectedPillar = handbookPillars.find((item) => item.id === pillar) ?? handbookPillars[0];

  return (
    <main className="page compendium-page">
      <section className="hero panel">
        <div className="hero-copy">
          <p className="eyebrow">APRA AI Trust Navigator</p>
          <h1>APRA AI compliance, clause by clause</h1>
          <p className="lead">
            This version is built around APRA's Prudential Handbook. Pick a pillar, drill into a standard,
            and open the numbered clauses that sit behind the policy language.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#handbook">
              Open the handbook map
              <BookOpenText size={16} />
            </a>
            <a className="button secondary" href="#clauses">
              Browse the clause atlas
              <ClipboardList size={16} />
            </a>
          </div>

          <div className="signal-strip" aria-label="What the app covers">
            <article className="signal-card">
              <span className="signal-badge">Pillars</span>
              <h3>{handbookPillars.length} handbook pillars</h3>
              <p>Governance, risk management, recovery and resolution, reporting, and the business model pillars.</p>
            </article>
            <article className="signal-card">
              <span className="signal-badge">Standards</span>
              <h3>{apraClauseAtlas.length} standards</h3>
              <p>The app now opens each APRA standard as a browsable document with section-level navigation.</p>
            </article>
            <article className="signal-card">
              <span className="signal-badge">Clauses</span>
              <h3>{allClauseCount} numbered clauses</h3>
              <p>Each clause is parseable, searchable, and tied back to controls, evidence, and board questions.</p>
            </article>
            <article className="signal-card">
              <span className="signal-badge">Sections</span>
              <h3>{allSectionCount} section groups</h3>
              <p>Authority, application, interpretation, operative obligations, appendices, and attachments stay visible.</p>
            </article>
          </div>
        </div>

        <aside className="hero-rail">
          <div className="panel stats-panel compact">
            <div className="metric-stack">
              <div className="metric-row">
                <span className="metric-label">Latest APRA publications</span>
                <span className="metric-value">{publicationHighlights.length}</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Most clause-dense standard</span>
                <span className="metric-value">CPS 510</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Current pillar</span>
                <span className="metric-value">{selectedPillar.title}</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Visible standards</span>
                <span className="metric-value">{visibleStandards.length}</span>
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
              <h2>Handbook framing</h2>
            </div>
            <p className="prose">
              The Prudential Handbook is the navigator. The standards are the obligations. The clauses are
              what the entity needs to satisfy and evidence in practice.
            </p>
          </div>
        </aside>
      </section>

      <section className="section intro-grid" id="handbook">
        <article className="panel intro-card">
          <p className="eyebrow">The handbook map</p>
          <h2>Use the handbook to orient the work</h2>
          <p className="prose">
            APRA organises its prudential framework into pillars. All industries share governance, risk management,
            recovery and resolution, and reporting. Banking and insurance also bring financial resilience, while
            superannuation uses the business operations pillar.
          </p>
        </article>

        <article className="panel handbook-summary-card">
          <div className="panel-title-row">
            <Layers3 size={18} />
            <h2>How APRA groups the obligations</h2>
          </div>
          <ul className="mini-list tight">
            <li>Core standards set foundational requirements.</li>
            <li>Supporting standards add more detail for narrower risks or industries.</li>
            <li>Guidance lives in practice guides, letters, FAQs, and information papers.</li>
            <li>The site now treats the handbook as the first filter, not an afterthought.</li>
          </ul>
        </article>
      </section>

      <section className="section pillar-grid-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Choose a pillar</p>
            <h2>Switch the site around APRA's framework, not around random topic cards</h2>
          </div>
          <p className="section-lead">
            The active pillar filters the standards list and the clause atlas below. Click a pillar to reframe the whole
            view.
          </p>
        </div>

        <div className="pillar-grid">
          {handbookPillars.map((item) => {
            const active = item.id === pillar;
            return (
              <button
                className={active ? "panel pillar-card active" : "panel pillar-card"}
                key={item.id}
                onClick={() => {
                  setPillar(item.id);
                  const nextStandard = apraClauseAtlas.find((entry) => entry.pillar === item.id)?.id ?? apraClauseAtlas[0].id;
                  setStandardId(nextStandard);
                  setActiveClause("");
                  setQuery("");
                }}
                type="button"
              >
                <div className="library-card-head">
                  <span className="signal-badge">{item.standards.length ? `${item.standards.length} standards` : "framework"}</span>
                  <span className="category-tag">{item.id.replace(/-/g, " ")}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="prose">{item.summary}</p>
                <p className="pillar-note">{item.note}</p>
                <div className="pillar-standard-row">
                  {item.standards.length ? (
                    item.standards.map((standard) => (
                      <span className="pill" key={standard}>
                        {standard.toUpperCase()}
                      </span>
                    ))
                  ) : (
                    <span className="pill">cross-industry spine</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section" id="clauses">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Clause atlas</p>
            <h2>Browse the APRA standard clauses in a live document view</h2>
          </div>
          <p className="section-lead">
            Search runs across the standard title, section headings, clause numbers, and the clause text itself.
          </p>
        </div>

        <div className="library-tools panel compact clause-tools">
          <div className="category-bar" aria-label="Select regulated entity">
            {handbookPillars.map((item) => (
              <button
                aria-pressed={item.id === pillar}
                className={item.id === pillar ? "category-chip active" : "category-chip"}
                key={item.id}
                onClick={() => {
                  setPillar(item.id);
                  const nextStandard = apraClauseAtlas.find((entry) => entry.pillar === item.id)?.id ?? apraClauseAtlas[0].id;
                  setStandardId(nextStandard);
                  setActiveClause("");
                }}
                type="button"
              >
                <Landmark size={14} />
                <span>{item.title}</span>
              </button>
            ))}
          </div>

          <label className="search-box" htmlFor="apra-search">
            <Search size={16} />
            <input
              id="apra-search"
              name="apra-search"
              placeholder="Search clause text, section headings, or APRA reference numbers"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveClause("");
              }}
            />
          </label>

          <div className="results-note clause-results-note" aria-live="polite">
            {visibleStandards.length} standards visible, {selectedStandard.sectionCount} sections in the open standard, {countClauses(selectedStandard)} clauses inside it.
            {query ? (
              <button className="text-button" onClick={() => setQuery("")} type="button">
                Clear search
              </button>
            ) : null}
          </div>
        </div>

        <div className="clause-shell">
          <aside className="panel clause-rail">
            <div className="panel-title-row">
              <FileText size={18} />
              <h2>Standards in this pillar</h2>
            </div>
            <div className="standard-stack">
              {visibleStandards.length ? (
                visibleStandards.map((entry) => {
                  const active = entry.id === selectedStandard.id;
                  return (
                    <button
                      className={active ? "standard-chip active" : "standard-chip"}
                      key={entry.id}
                      onClick={() => {
                        setStandardId(entry.id);
                        setActiveClause("");
                      }}
                      type="button"
                    >
                      <div className="standard-chip-top">
                        <strong>{entry.code}</strong>
                        <span>{countClauses(entry)} clauses</span>
                      </div>
                      <span>{entry.title}</span>
                    </button>
                  );
                })
              ) : (
                <div className="empty-state compact">
                  <p>No standards matched this search in the current pillar.</p>
                  <p>Clear the search or choose a different pillar.</p>
                </div>
              )}
            </div>
          </aside>

          <article className="panel clause-panel">
            <div className="clause-panel-head">
              <div>
                <div className="library-card-head">
                  <span className="signal-badge">{selectedStandard.code}</span>
                  <span className="category-tag">{selectedPillar.title}</span>
                </div>
                <h3>{selectedStandard.title}</h3>
                <p className="prose">{selectedStandard.summary}</p>
              </div>
              <div className="clause-panel-links">
                <a href={selectedStandard.href} rel="noreferrer" target="_blank">
                  Open APRA source
                  <ArrowUpRight size={14} />
                </a>
                <a href="#handbook">
                  Back to handbook
                </a>
              </div>
            </div>

            {selectedOverview ? (
              <div className="overview-grid">
                <div>
                  <h4 className="category-tag">What APRA expects</h4>
                  <ul className="mini-list">
                    {selectedOverview.whatAPRAExpects.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="category-tag">Controls to implement</h4>
                  <ul className="mini-list">
                    {selectedOverview.practicalControls.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="category-tag">Evidence to keep</h4>
                  <ul className="mini-list">
                    {selectedOverview.evidence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}

            <div className="clause-sections">
              {filteredSections.length ? (
                filteredSections.map((section, sectionIndex) => {
                  const defaultOpen =
                    !query && sectionIndex < 3 ||
                    section.items.some((item) => clauseKey(selectedStandard.id, item.id) === activeClause);
                  return (
                    <details className="clause-section" key={`${selectedStandard.id}-${section.title}`} open={defaultOpen}>
                      <summary>
                        <div>
                          <strong>{section.title}</strong>
                          <span>{section.items.length} clauses</span>
                        </div>
                        <span className="summary-hint">Expand section</span>
                      </summary>
                      <div className="clause-grid">
                        {section.items.map((item) => {
                          const active = clauseKey(selectedStandard.id, item.id) === activeClause || (!activeClause && sectionIndex === 0 && item === section.items[0]);
                          return (
                            <button
                              className={active ? "clause-card active" : "clause-card"}
                              key={item.id}
                              onClick={() => setActiveClause(clauseKey(selectedStandard.id, item.id))}
                              type="button"
                            >
                              <div className="clause-card-head">
                                <span className="signal-badge">Clause {item.number}</span>
                                <span className="category-tag">{section.title}</span>
                              </div>
                              <p>{clauseExcerpt(item.text)}</p>
                            </button>
                          );
                        })}
                      </div>
                    </details>
                  );
                })
              ) : (
                <div className="empty-state">
                  <h4>No clauses matched.</h4>
                  <p>Try a broader search or switch to another standard.</p>
                </div>
              )}
            </div>

            {activeClauseItem ? (
              <div className="clause-detail panel compact">
                <div className="panel-title-row">
                  <ShieldCheck size={18} />
                  <h2>Selected clause</h2>
                </div>
                <div className="clause-detail-head">
                  <span className="signal-badge">Clause {activeClauseItem.number}</span>
                  <span className="category-tag">{activeClauseItem.section}</span>
                </div>
                <p className="clause-detail-text">{activeClauseItem.text}</p>
                {selectedOverview ? (
                  <div className="clause-detail-grid">
                    <div>
                      <h4 className="category-tag">What this means for AI</h4>
                      <ul className="mini-list">
                        {selectedOverview.aiImplications.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="category-tag">Source links</h4>
                      <div className="link-row wrap">
                        {selectedOverview.links.map((link) => (
                          <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                            {link.label}
                            <ArrowUpRight size={14} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </article>
        </div>
      </section>

      <section className="section" id="publications">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Latest APRA publications</p>
            <h2>The publications that change how you should run the controls</h2>
          </div>
          <p className="section-lead">
            These are the documents to brief the board on first. They change the operating model, not just the language.
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
            <BadgeCheck size={18} />
            <h2>What good looks like</h2>
          </div>
          <ul className="bullets">
            <li>One page summary with the use-case inventory, criticality, and risk tier.</li>
            <li>One page on the clause crosswalk with named owners and due dates.</li>
            <li>One page on incidents, exceptions, concentration, and remediation.</li>
            <li>One page on vendor dependencies, exit paths, and manual fallback.</li>
            <li>One page on what changed since the last meeting.</li>
          </ul>

          <div className="panel-title-row" style={{ marginTop: 18 }}>
            <Users size={18} />
            <h2>Board challenge</h2>
          </div>
          <div className="question-stack compact">
            {boardQuestions.slice(0, 3).map((item) => (
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
            The next useful step is to turn this into a working board pack, control register, and evidence checklist
            for the exact entity type you care about.
          </p>
        </div>
      </section>
    </main>
  );
}

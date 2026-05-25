import { DossierSummary, SourceList } from "@/components/DossierSummary";
import { getDossiers, getHypotheses, getLatestDossier, getSources } from "@/lib/data";
import { formatDate, percent } from "@/lib/format";

export default function Home() {
  const latest = getLatestDossier();
  const dossiers = getDossiers();
  const sources = getSources();
  const hypotheses = getHypotheses();
  const active = hypotheses.filter((item) => item.status === "active" || item.status === "new");

  if (!latest) {
    return (
      <main className="page">
        <section className="empty">
          <div>
            <p className="eyebrow">No dossiers yet</p>
            <h1>First run pending</h1>
            <p className="lead">
              The archive will populate after the first nightly research run completes.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="masthead">
        <div>
          <p className="eyebrow">Latest dossier / {formatDate(latest.date)}</p>
          <h1>{latest.startingHypothesis.statement}</h1>
          <p className="lead">{latest.synthesis}</p>
        </div>
        <aside className="panel compact">
          <div className="metric-stack">
            <div className="metric-row">
              <span className="metric-label">Dossiers</span>
              <span className="metric-value">{dossiers.length}</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Sources</span>
              <span className="metric-value">{sources.length}</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Active hypotheses</span>
              <span className="metric-value">{active.length}</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Confidence</span>
              <span className="metric-value">{percent(latest.startingHypothesis.confidence)}</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="grid section">
        <div className="span-8 stack">
          <h2>Research Notes</h2>
          {latest.notes.map((note) => (
            <article className="dossier-card" key={`${note.sourceId}-${note.claim}`}>
              <span className="pill">{note.sourceId}</span>
              <h3>{note.claim}</h3>
              <p className="prose">{note.implication}</p>
              <p className="muted">{note.limitation}</p>
            </article>
          ))}
        </div>
        <aside className="span-4 stack">
          <div className="panel compact">
            <h2>Next Questions</h2>
            <ul className="list">
              {latest.unresolvedQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
          <div className="panel compact">
            <h2>Search Plan</h2>
            <ul className="list">
              {latest.nextSearchPlan.map((query) => (
                <li key={query}>{query}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="section">
        <h2>Sources Read</h2>
        <SourceList dossier={latest} />
      </section>

      <section className="section">
        <h2>Recent Dossiers</h2>
        <div className="stack">
          {dossiers.slice(1, 4).map((dossier) => (
            <DossierSummary dossier={dossier} key={dossier.date} />
          ))}
        </div>
      </section>
    </main>
  );
}

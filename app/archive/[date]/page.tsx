import { notFound } from "next/navigation";
import { SourceList } from "@/components/DossierSummary";
import { getDossier, getDossiers } from "@/lib/data";
import { formatDate, percent } from "@/lib/format";

export function generateStaticParams() {
  return getDossiers().map((dossier) => ({ date: dossier.date }));
}

export default async function DossierPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const dossier = getDossier(date);

  if (!dossier) {
    notFound();
  }

  return (
    <main className="page">
      <section className="masthead">
        <div>
          <p className="eyebrow">Dossier / {formatDate(dossier.date)}</p>
          <h1>{dossier.startingHypothesis.statement}</h1>
          <p className="lead">{dossier.synthesis}</p>
        </div>
        <aside className="panel compact">
          <div className="metric-stack">
            <div className="metric-row">
              <span className="metric-label">Sources</span>
              <span className="metric-value">{dossier.sourcesRead.length}</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Confidence</span>
              <span className="metric-value">{percent(dossier.startingHypothesis.confidence)}</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="grid section">
        <div className="span-8 stack">
          <h2>Notes</h2>
          {dossier.notes.map((note) => (
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
            <h2>Hypothesis Updates</h2>
            <ul className="list">
              {dossier.hypothesisUpdates.map((update) => (
                <li key={update.hypothesisId}>
                  {update.status}: {percent(update.previousConfidence)} to{" "}
                  {percent(update.nextConfidence)}. {update.rationale}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel compact">
            <h2>Unresolved</h2>
            <ul className="list">
              {dossier.unresolvedQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="section">
        <h2>Sources</h2>
        <SourceList dossier={dossier} />
      </section>
    </main>
  );
}

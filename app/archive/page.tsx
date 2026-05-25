import { DossierSummary } from "@/components/DossierSummary";
import { getDossiers } from "@/lib/data";

export default function ArchivePage() {
  const dossiers = getDossiers();

  return (
    <main className="page">
      <section className="masthead">
        <div>
          <p className="eyebrow">Archive</p>
          <h1>Nightly dossiers</h1>
          <p className="lead">
            Chronological record of hypotheses, readings, updates, and next questions.
          </p>
        </div>
      </section>
      <div className="stack">
        {dossiers.map((dossier) => (
          <DossierSummary dossier={dossier} key={dossier.date} />
        ))}
      </div>
    </main>
  );
}

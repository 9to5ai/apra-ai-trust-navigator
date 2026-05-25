import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { compactUrl, formatDate, percent } from "@/lib/format";
import type { Dossier } from "@/lib/types";

export function DossierSummary({ dossier }: { dossier: Dossier }) {
  return (
    <article className="dossier-card">
      <div className="status-row">
        <span className="pill green">{formatDate(dossier.date)}</span>
        <span>{dossier.sourcesRead.length} sources</span>
        <span>{dossier.newHypotheses.length} new hypotheses</span>
      </div>
      <h3>
        <Link href={`/archive/${dossier.date}`}>{dossier.startingHypothesis.statement}</Link>
      </h3>
      <p className="prose">{dossier.synthesis}</p>
      <Link className="pill" href={`/archive/${dossier.date}`}>
        Open dossier <ArrowUpRight size={14} />
      </Link>
    </article>
  );
}

export function SourceList({ dossier }: { dossier: Dossier }) {
  return (
    <div className="stack">
      {dossier.sourcesRead.map((source) => (
        <article className="source-card" key={source.id}>
          <div className="source-meta">
            <span className="pill">{source.sourceType}</span>
            <span>{source.publishedAt ? formatDate(source.publishedAt) : "No date"}</span>
            <span>{compactUrl(source.url)}</span>
            <span>Relevance {percent(source.relevanceScore)}</span>
          </div>
          <h3>
            <a href={source.url} rel="noreferrer" target="_blank">
              {source.title}
            </a>
          </h3>
          {source.summary ? <p className="prose">{source.summary}</p> : null}
        </article>
      ))}
    </div>
  );
}

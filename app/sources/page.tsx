import { getSources } from "@/lib/data";
import { compactUrl, formatDate, percent } from "@/lib/format";

export default function SourcesPage() {
  const sources = getSources().sort((a, b) => b.discoveredAt.localeCompare(a.discoveredAt));

  return (
    <main className="page">
      <section className="masthead">
        <div>
          <p className="eyebrow">Library</p>
          <h1>Source register</h1>
          <p className="lead">
            Papers, preprints, tools, benchmarks, standards, and primary-source artifacts.
          </p>
        </div>
      </section>
      <div className="table-list">
        {sources.map((source) => (
          <article className="source-card" key={source.id}>
            <div className="source-meta">
              <span className="pill">{source.sourceType}</span>
              <span>{source.publishedAt ? formatDate(source.publishedAt) : "No date"}</span>
              <span>{compactUrl(source.url)}</span>
              <span>Trust {percent(source.trustRating)}</span>
              <span>Relevance {percent(source.relevanceScore)}</span>
            </div>
            <h3>
              <a href={source.url} rel="noreferrer" target="_blank">
                {source.title}
              </a>
            </h3>
            <p className="muted">{source.authors.slice(0, 8).join(", ")}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

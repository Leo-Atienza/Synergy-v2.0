import { Section } from "@/components/Section";
import { CANDIDATE_SOURCE_LINKS, SOURCE_LINKS, TECH_STACK } from "@/lib/content";
import { EvidenceTag } from "@/components/EvidenceTag";
import { ArrowUpRight } from "@/components/icons";

export function SourcesSection() {
  return (
    <Section
      eyebrow="Sources and stack"
      title="The receipts page is part of the argument."
      lead="Every public claim is tied to a source and marked verified, modelled, or pending. The page is deliberately plain so anyone can trace the work."
    >
      <div className="source-stack-grid">
        <div className="source-list">
          <h3>Core data sources</h3>
          {SOURCE_LINKS.map((s) => (
            <article className="source-row" key={s.label}>
              <div>
                <EvidenceTag tag={s.status} />
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label} <ArrowUpRight size={12} />
                </a>
              </div>
              <p>{s.note}</p>
            </article>
          ))}
        </div>
        <div className="stack-list">
          <h3>Technical stack</h3>
          {TECH_STACK.map((t) => (
            <div key={t.label}>
              <strong>{t.label}</strong>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="candidate-source-list">
        <h3>Candidate building receipts</h3>
        <p>These links back the names, addresses, and public/community roles in the seed list.</p>
        <div>
          {CANDIDATE_SOURCE_LINKS.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              <EvidenceTag tag={s.status} />
              <span>{s.label}</span>
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

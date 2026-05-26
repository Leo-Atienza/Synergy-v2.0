import { Section } from "@/components/Section";
import { EVIDENCE } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function EvidenceSection() {
  return (
    <Section
      eyebrow="Prior art"
      title="The pieces already exist — Sanctuary connects them."
      lead="A refuge network, a hub framework, faith buildings on solar, and a tax credit built for tax-exempt owners. None invented here; each is sourced."
    >
      <div className="card-grid card-grid-2">
        {EVIDENCE.map((e) => (
          <article className="card" key={e.label}>
            <h3>{e.label}</h3>
            <p>{e.body}</p>
            <a className="card-src" href={e.source.url} target="_blank" rel="noreferrer">
              {e.source.name} <ArrowUpRight size={12} />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

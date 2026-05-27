import { Section } from "@/components/Section";
import { EVIDENCE } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function EvidenceSection() {
  return (
    <Section
      eyebrow="Evidence"
      title="Public buildings already become emergency infrastructure."
      lead="Peel has a local shelter-access gap. Ontario storms show recreation centres and community buildings becoming charging, shower, warmth, and information points. Sanctuary does not claim they are ready today. It ranks what to verify first."
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

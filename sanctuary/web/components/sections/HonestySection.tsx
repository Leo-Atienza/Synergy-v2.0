import { Section } from "@/components/Section";
import { REAL_VS_ESTIMATED } from "@/lib/content";
import { EvidenceTag } from "@/components/EvidenceTag";

export function HonestySection() {
  return (
    <Section
      eyebrow="Real vs estimated"
      title="The labels are part of the product."
      lead="A judge can trust this because it never hides what it does not know. Every value on screen is verified, modelled, or pending, and says which."
    >
      <div className="card-grid card-grid-3">
        {REAL_VS_ESTIMATED.map((r) => (
          <article className={`card honesty-card honesty-${r.tag}`} key={r.label}>
            <EvidenceTag tag={r.tag} />
            <h3>{r.label}</h3>
            <p>{r.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

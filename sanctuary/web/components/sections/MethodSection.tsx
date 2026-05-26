import { Section } from "@/components/Section";
import { HVI_INDICATORS, METHOD_ROWS } from "@/lib/content";
import { EvidenceTag } from "@/components/EvidenceTag";

export function MethodSection() {
  return (
    <Section
      eyebrow="How it works"
      title="Five weights answer one decision."
      lead="If Peel can harden only five trusted buildings first, Sanctuary ranks which sites to investigate. The score is a planning screen, not an engineering study."
    >
      <div className="indicator-grid">
        {HVI_INDICATORS.map((ind) => (
          <article className="card card-quiet" key={ind.label}>
            <h3>{ind.label}</h3>
            <p>{ind.body}</p>
          </article>
        ))}
      </div>

      <div className="method-table" role="table" aria-label="Scoring weights">
        <div className="method-row method-head" role="row">
          <span role="columnheader">Factor</span>
          <span role="columnheader">Weight</span>
          <span role="columnheader">Evidence</span>
          <span role="columnheader">What it measures</span>
        </div>
        {METHOD_ROWS.map((r) => (
          <div className="method-row" role="row" key={r.label}>
            <span className="method-label" role="cell">
              {r.label}
            </span>
            <span className="method-weight tnum" role="cell">
              {r.weight}
            </span>
            <span role="cell">
              <EvidenceTag tag={r.status} />
            </span>
            <span className="method-desc" role="cell">
              {r.desc}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

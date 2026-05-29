import { Section } from "@/components/Section";
import { GRID_RESILIENCE_NOTE, HVI_INDICATORS, METHOD_ROWS, SITE_AUDIT_CHECKS, WEIGHTING_NOTE } from "@/lib/content";
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

      <div className="future-upgrade-intro">
        <p className="eyebrow">Where the weights come from</p>
        <p>{WEIGHTING_NOTE}</p>
      </div>

      <div className="future-upgrade-intro">
        <p className="eyebrow">What a site audit verifies</p>
        <ol className="planning-checks">
          {SITE_AUDIT_CHECKS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ol>
      </div>

      <p className="scale-note">{GRID_RESILIENCE_NOTE}</p>
    </Section>
  );
}

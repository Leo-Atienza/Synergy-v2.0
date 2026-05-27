import { Section } from "@/components/Section";
import { DATA_LAYERS, DATA_LOADING } from "@/lib/content";
import { EvidenceTag } from "@/components/EvidenceTag";

// "Where did the data come from, and is it hardcoded?" — answered literally.
// The table maps each shipped GeoJSON to its public source + record count; the
// note below states the static-snapshot architecture in plain language for judges.
export function DataPipelineSection() {
  return (
    <Section
      eyebrow="Where the data comes from"
      title="Real public data, frozen into the page."
      lead="Four map layers, each a snapshot of a named public source. Nothing here is generated or guessed — and nothing is fetched live while you browse."
    >
      <div className="prov-table" role="table" aria-label="Map layers and their sources">
        <div className="prov-row prov-head" role="row">
          <span role="columnheader">Map layer</span>
          <span role="columnheader">Records</span>
          <span role="columnheader">Where it came from</span>
          <span role="columnheader">Evidence</span>
        </div>
        {DATA_LAYERS.map((l) => (
          <div className="prov-row" role="row" key={l.layer}>
            <span className="prov-layer" role="cell">
              {l.layer}
              <code>{l.file}</code>
            </span>
            <span className="prov-count tnum" role="cell">
              {l.count}
            </span>
            <span className="prov-origin" role="cell">
              {l.origin}
            </span>
            <span role="cell">
              <EvidenceTag tag={l.status} />
            </span>
          </div>
        ))}
      </div>

      <div className="prov-note">
        <p className="prov-note-eyebrow">{DATA_LOADING.heading}</p>
        <p>{DATA_LOADING.body}</p>
        <p className="prov-note-sub">{DATA_LOADING.estimatesNote}</p>
      </div>
    </Section>
  );
}

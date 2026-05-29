import { Section } from "@/components/Section";
import { ARCGIS_WEB_MAP } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

// The ArcGIS web map is the judged artifact; this site is its backup. The iframe
// is the only network item on the page and stays lazy, below the fold.
export function ArcgisSection() {
  return (
    <Section
      eyebrow="Primary artifact"
      title="The primary deliverable is the ArcGIS web map."
      lead="It carries the live Peel HVI layer, the candidate points, and the ranked view. This site explains it and stands in if the live map is slow to load."
    >
      <a className="inline-link" href={ARCGIS_WEB_MAP} target="_blank" rel="noreferrer">
        Open the live ArcGIS web map <ArrowUpRight size={13} />
      </a>
      <div className="artifact-frame">
        <iframe title="Sanctuary ArcGIS web map" src={ARCGIS_WEB_MAP} loading="lazy" />
      </div>
    </Section>
  );
}

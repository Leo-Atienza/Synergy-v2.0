import { readFileSync } from "node:fs";
import { join } from "node:path";

import { toHub, type Hub, type HubGeo } from "@/lib/hubs";
import { projectMap, type HviGeo, type FacilityGeo } from "@/lib/map";
import { Masthead } from "@/components/Masthead";
import { Hero } from "@/components/Hero";
import { ScrollStage } from "@/components/ScrollStage";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { HonestySection } from "@/components/sections/HonestySection";
import { EvidenceSection } from "@/components/sections/EvidenceSection";
import { FutureSection } from "@/components/sections/FutureSection";
import { ArcgisSection } from "@/components/sections/ArcgisSection";
import { SourcesSection } from "@/components/sections/SourcesSection";
import { QaSection } from "@/components/sections/QaSection";
import { Footer } from "@/components/Footer";

type BaseGeo = { type: "FeatureCollection"; features: { geometry: unknown }[] };

// Build-time data load. process.cwd() is sanctuary/web at build; the files stay
// only in public/. This deletes the old runtime fetch/useEffect/loading branches
// — the map is fully offline and the candidate data is inlined as props.
function loadJson<T>(file: string): T {
  return JSON.parse(readFileSync(join(process.cwd(), "public", file), "utf8")) as T;
}
// Optional layers (committed once their fetch script has run) load safely so the
// build never breaks if a public/ file is absent — the map just omits that layer.
function loadJsonSafe<T>(file: string, fallback: T): T {
  try {
    return loadJson<T>(file);
  } catch {
    return fallback;
  }
}

export default function Page() {
  const base = loadJson<BaseGeo>("peel-fsa.geojson");
  const hvi = loadJson<HviGeo>("peel-hvi.geojson");
  const facilities = loadJsonSafe<FacilityGeo>("peel-facilities.geojson", { type: "FeatureCollection", features: [] });
  const hubs: Hub[] = loadJson<HubGeo>("candidate-hubs.geojson")
    .features.map(toHub)
    .sort((a, z) => a.rank - z.rank);
  // Project once, at build — the client island receives path strings + projected
  // points + the real HVI choropleth + facilities (all server-side via d3-geo).
  const mapData = projectMap(base, hubs, hvi, facilities);

  return (
    <main className="page">
      <Masthead />
      <Hero />
      <ProblemSection />

      <section id="decision" className="decision-wrap reveal" aria-labelledby="decision-title">
        <div className="section-head">
          <p className="eyebrow">The decision</p>
          <h2 id="decision-title">From a heat map to five named buildings.</h2>
          <p className="section-lead">
            Scroll the map: heat risk, the shelter gap, ten trusted candidates, then the five Peel should harden first —
            ending on Malton. Click any pin or row to interrogate the score.
          </p>
        </div>
        <ScrollStage mapData={mapData} hubs={hubs} />
      </section>

      <MethodSection />
      <HonestySection />
      <EvidenceSection />
      <FutureSection />
      <ArcgisSection />
      <SourcesSection />
      <QaSection />
      <Footer />
    </main>
  );
}

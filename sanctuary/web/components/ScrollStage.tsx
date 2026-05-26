"use client";

import { useState } from "react";
import type { Hub } from "@/lib/hubs";
import { HVI_COLORS } from "@/lib/hubs";
import type { FeatureCollectionLike } from "@/lib/map";
import { LazyMotion, domAnimation, useReducedMotion, STEP } from "@/lib/motion";
import { MapStage } from "@/components/MapStage";
import { DetailPanel } from "@/components/DetailPanel";
import { RankedList } from "@/components/RankedList";
import { CandidateTable } from "@/components/CandidateTable";
import { EVIDENCE_ICON } from "@/components/icons";

type Base = FeatureCollectionLike & { features: { geometry: unknown }[] };

// The one client island. Owns selectedRank (and, from step 6, currentStep).
// Everything else on the page is a server component.
export function ScrollStage({ base, hubs }: { base: Base; hubs: Hub[] }) {
  const reduced = useReducedMotion() ?? false;
  const [selectedRank, setSelectedRank] = useState(1);
  const top5 = hubs.slice(0, 5);
  const selected = hubs.find((h) => h.rank === selectedRank) ?? hubs[0];

  // Left/Right arrows cycle the five (Up/Down stay free for page scroll).
  const cycle = (dir: 1 | -1) => {
    setSelectedRank((r) => {
      const i = top5.findIndex((h) => h.rank === r);
      const base = i === -1 ? 0 : i;
      const next = (base + dir + top5.length) % top5.length;
      return top5[next].rank;
    });
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        className="stage"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            cycle(1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            cycle(-1);
          }
        }}
      >
        <div className="map-wrap">
          <MapStage
            base={base}
            hubs={hubs}
            selectedRank={selectedRank}
            onSelect={setSelectedRank}
            currentStep={STEP.ZOOM}
            live={false}
            reduced={reduced}
          />
          <MapLegend />
        </div>

        <aside className="rail">
          <DetailPanel key={selected.rank} hub={selected} reduced={reduced} />
          <RankedList hubs={top5} selectedRank={selectedRank} onSelect={setSelectedRank} />
        </aside>
      </div>

      <div className="explore-table">
        <CandidateTable hubs={hubs} selectedRank={selectedRank} onSelect={setSelectedRank} />
      </div>
    </LazyMotion>
  );
}

// The map overlay: HVI ramp + the honesty evidence key, always on screen with
// the map. Icon + text, never colour alone.
function MapLegend() {
  const Verified = EVIDENCE_ICON.verified;
  const Modelled = EVIDENCE_ICON.modelled;
  const Pending = EVIDENCE_ICON.pending;
  return (
    <div className="legend">
      <span className="legend-head">Heat Vulnerability Index</span>
      {[5, 4, 3, 2, 1].map((q) => (
        <span className="legend-row" key={q}>
          <span className="legend-sw" style={{ background: HVI_COLORS[q] }} />
          <span className="tnum">{q}</span>
        </span>
      ))}
      <span className="legend-row">
        <span className="legend-ring" />
        modelled 500 m
      </span>
      <div className="legend-key">
        <span className="legend-row legend-row-v">
          <Verified size={13} /> verified
        </span>
        <span className="legend-row legend-row-m">
          <Modelled size={13} /> modelled
        </span>
        <span className="legend-row legend-row-p">
          <Pending size={13} /> pending
        </span>
      </div>
    </div>
  );
}

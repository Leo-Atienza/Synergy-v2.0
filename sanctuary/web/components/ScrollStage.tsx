"use client";

import { useEffect, useState } from "react";
import type { Hub } from "@/lib/hubs";
import { HVI_COLORS } from "@/lib/hubs";
import type { MapData } from "@/lib/map-constants";
import { LazyMotion, domAnimation, useReducedMotion, STEP } from "@/lib/motion";
import { STEPS } from "@/lib/content";
import { useScrollSteps } from "@/hooks/useScrollSteps";
import { MapStage } from "@/components/MapStage";
import { DetailPanel } from "@/components/DetailPanel";
import { RankedList } from "@/components/RankedList";
import { CandidateTable } from "@/components/CandidateTable";
import { EVIDENCE_ICON } from "@/components/icons";
import type { CandidatePlanningContext, PlanningChecklist, PlanningChecklistFile } from "@/lib/planning-assistant";
import { fallbackChecklistFor } from "@/lib/planning-assistant";

type ChecklistState = {
  status: "idle" | "loading" | "ready" | "error";
  checklist?: PlanningChecklist;
};

function planningContextFromHub(hub: Hub): CandidatePlanningContext {
  return {
    rank: hub.rank,
    name: hub.name,
    address: hub.address,
    typeLabel: hub.typeLabel,
    municipality: hub.municipality,
    hvi: hub.hvi,
    exposure: hub.exposure,
    sensitivity: hub.sensitivity,
    adaptiveCapacity: hub.adaptiveCapacity,
    roofClass: hub.roofClass,
    facility: hub.facility,
    trustLabel: hub.trustLabel,
    reachablePopulation: hub.reachablePopulation,
    sourceUrl: hub.sourceUrl,
  };
}

// The one client island. Owns selectedRank + the scroll step.
// `live` (desktop + motion-OK) turns on the sticky scrollytelling; otherwise the
// same DOM reflows (CSS) into a stacked, fully-readable explore view — the
// reduced-motion / no-JS / mobile fallback. The map never unmounts between them.
export function ScrollStage({ mapData, hubs }: { mapData: MapData; hubs: Hub[] }) {
  const reduced = useReducedMotion() ?? false;
  const [live, setLive] = useState(false);
  const [selectedRank, setSelectedRank] = useState(1);
  const [checklists, setChecklists] = useState<Record<number, ChecklistState>>({});
  const { containerRef, step } = useScrollSteps(live);

  const top5 = hubs.slice(0, 5);
  const selected = hubs.find((h) => h.rank === selectedRank) ?? hubs[0];
  const selectedChecklist = checklists[selected.rank] ?? { status: "idle" };
  const mapStep = live ? step : STEP.ZOOM;

  // Upgrade to the pinned experience only on a wide viewport with motion allowed.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const update = () => setLive(!reduced && mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduced]);

  // Left/Right arrows cycle the five (Up/Down stay free for page scroll).
  const cycle = (dir: 1 | -1) => {
    setSelectedRank((r) => {
      const i = top5.findIndex((h) => h.rank === r);
      const next = ((i === -1 ? 0 : i) + dir + top5.length) % top5.length;
      return top5[next].rank;
    });
  };

  const loadChecklist = async (hub: Hub) => {
    const cached = checklists[hub.rank];
    if (cached?.status === "loading" || cached?.status === "ready") return;

    setChecklists((current) => ({ ...current, [hub.rank]: { status: "loading" } }));

    try {
      const response = await fetch("/planning-checklists.json", { cache: "force-cache" });
      if (!response.ok) throw new Error("Static checklist not available.");
      const data = (await response.json()) as PlanningChecklistFile;
      const checklist = data.checklists[String(hub.rank)] ?? fallbackChecklistFor(planningContextFromHub(hub));
      setChecklists((current) => ({ ...current, [hub.rank]: { status: "ready", checklist } }));
    } catch {
      setChecklists((current) => ({
        ...current,
        [hub.rank]: { status: "error", checklist: fallbackChecklistFor(planningContextFromHub(hub)) },
      }));
    }
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        className="decision-stage"
        data-live={live}
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
        <div className="scroll-map">
          <div className="map-wrap">
            <MapStage
              fsaPaths={mapData.fsaPaths}
              points={mapData.points}
              zoom={mapData.zoom}
              hubs={hubs}
              selectedRank={selectedRank}
              onSelect={setSelectedRank}
              currentStep={mapStep}
              live={live}
              reduced={reduced}
            />
            <MapLegend />
          </div>
        </div>

        <div className="scroll-steps" ref={containerRef}>
          {STEPS.map((s, i) => (
            <section className="scroll-step" key={s.eyebrow} data-step={i} data-active={live && step === i} aria-label={s.eyebrow}>
              <p className="eyebrow">{s.eyebrow}</p>
              <h3 className="scroll-step-title">{s.title}</h3>
              <p className="scroll-step-body">{s.body}</p>
              {i === STEP.ZOOM && (
                <div className="scroll-decision">
                  <DetailPanel
                    key={selected.rank}
                    hub={selected}
                    reduced={reduced}
                    planningChecklist={selectedChecklist.checklist}
                    planningStatus={selectedChecklist.status}
                    onRequestChecklist={() => loadChecklist(selected)}
                  />
                  <RankedList hubs={top5} selectedRank={selectedRank} onSelect={setSelectedRank} />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <div className="explore-table">
        <p className="explore-head">All ten candidates · click to inspect</p>
        <CandidateTable hubs={hubs} selectedRank={selectedRank} onSelect={setSelectedRank} />
      </div>
    </LazyMotion>
  );
}

// Map overlay: HVI ramp + the honesty evidence key (icon + text, never colour alone).
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

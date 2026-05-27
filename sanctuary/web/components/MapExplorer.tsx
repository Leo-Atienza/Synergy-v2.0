"use client";

import { useEffect, useState } from "react";
import type { Hub } from "@/lib/hubs";
import type { MapData } from "@/lib/map-constants";
import { LazyMotion, domAnimation, useReducedMotion, STEP } from "@/lib/motion";
import { STEPS } from "@/lib/content";
import { MapStage } from "@/components/MapStage";
import { MapLegend } from "@/components/MapLegend";
import { DetailPanel } from "@/components/DetailPanel";
import { RankedList } from "@/components/RankedList";
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

// The /map client island. The same MapStage engine as the Overview scroll story,
// but rendered with live={false} so pan/zoom/pinch/wheel/tract-click are ALWAYS
// live (the interactivity that the scrollytelling gates off). A side rail holds
// the selected candidate's honesty panel + the ranked five + the optional
// "Play the decision" tour, which temporarily drives the map through the
// RISK → GAP → CANDIDATES → DEAL → ZOOM beats and ends on Malton.
export function MapExplorer({ mapData, hubs }: { mapData: MapData; hubs: Hub[] }) {
  const reduced = useReducedMotion() ?? false;
  const [selectedRank, setSelectedRank] = useState(1);
  const [step, setStep] = useState<number>(STEP.ZOOM);
  const [touring, setTouring] = useState(false);
  const [resetSignal, setResetSignal] = useState(0);
  const [checklists, setChecklists] = useState<Record<number, ChecklistState>>({});

  const top5 = hubs.slice(0, 5);
  const selected = hubs.find((h) => h.rank === selectedRank) ?? hubs[0];
  const selectedChecklist = checklists[selected.rank] ?? { status: "idle" };

  // During the tour the map runs in `live` mode (step-driven cinematic + fly-to);
  // otherwise it is the free-explore state and currentStep is irrelevant.
  const live = touring;

  const startTour = () => {
    setResetSignal((n) => n + 1); // snap pan/zoom + layers + tract to a clean frame
    setSelectedRank(1);
    setStep(STEP.RISK);
    setTouring(true);
  };
  const endTour = () => {
    setTouring(false);
    setStep(STEP.ZOOM);
  };

  // Advance the tour through the five beats, then hand control back: the map only
  // gates off pan/zoom/click while `touring`, so the tour MUST release it on finish
  // or the map stays frozen on Malton (the reported bug). Reduced-motion: jump
  // straight to the final Malton state and release immediately (no autoplay to watch).
  // Cleared if the tour is exited mid-run.
  useEffect(() => {
    if (!touring) return;
    if (reduced) {
      setStep(STEP.ZOOM);
      setSelectedRank(1);
      setTouring(false);
      return;
    }
    const beats: { step: number; at: number }[] = [
      { step: STEP.RISK, at: 0 },
      { step: STEP.GAP, at: 1700 },
      { step: STEP.CANDIDATES, at: 3400 },
      { step: STEP.DEAL, at: 5100 },
      { step: STEP.ZOOM, at: 7000 },
    ];
    const timers = beats.map((b) =>
      setTimeout(() => {
        setStep(b.step);
        if (b.step === STEP.ZOOM) setSelectedRank(1);
      }, b.at),
    );
    // After the fly-to lands on Malton (~7.9s) and holds, end the tour so the user
    // can pan/zoom again. The map eases back to the full interactive frame.
    timers.push(setTimeout(() => setTouring(false), 9000));
    return () => timers.forEach(clearTimeout);
  }, [touring, reduced]);

  // A user picking a hub (pin, ranked row) exits the tour and selects it.
  const handleSelect = (rank: number) => {
    setSelectedRank(rank);
    if (touring) endTour();
  };

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
        className="map-explorer"
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
        <div className="map-explorer-stage">
          <MapStage
            fsaPaths={mapData.fsaPaths}
            points={mapData.points}
            zoom={mapData.zoom}
            hubs={hubs}
            selectedRank={selectedRank}
            onSelect={handleSelect}
            currentStep={live ? step : STEP.ZOOM}
            live={live}
            reduced={reduced}
            resetSignal={resetSignal}
          />
          <MapLegend />
        </div>

        <aside className="map-explorer-rail" aria-label="Map guide and the ranked decision">
          <div className="rail-intro">
            <h1 className="rail-title">Peel&rsquo;s heat, building by building.</h1>
            <p className="rail-sub">
              Pan and zoom the map. Click a census tract for its real exposure, sensitivity, and adaptive-capacity
              quintiles — or a pin for a candidate hub&rsquo;s honest first-pass score.
            </p>
          </div>

          <div className="rail-tour" data-touring={touring}>
            {!touring ? (
              <>
                <button type="button" className="cta rail-tour-play" onClick={startTour}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play the decision
                </button>
                <p className="rail-tour-cap">
                  Watch the case build: heat risk, the shelter gap, ten trusted candidates, the five to harden first, then
                  Malton.
                </p>
              </>
            ) : (
              <>
                <div className="rail-tour-now">
                  <span className="eyebrow">{STEPS[step].eyebrow}</span>
                  <button type="button" className="rail-tour-exit" onClick={endTour}>
                    Explore freely
                  </button>
                </div>
                <p className="rail-tour-title">{STEPS[step].title}</p>
              </>
            )}
          </div>

          <h2 className="vh">Selected candidate hub</h2>
          <DetailPanel
            key={selected.rank}
            hub={selected}
            reduced={reduced}
            planningChecklist={selectedChecklist.checklist}
            planningStatus={selectedChecklist.status}
            onRequestChecklist={() => loadChecklist(selected)}
          />

          <RankedList hubs={top5} selectedRank={selectedRank} onSelect={handleSelect} />
        </aside>
      </div>
    </LazyMotion>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { Hub } from "@/lib/hubs";
import { HVI_COLORS, HVI_LABEL } from "@/lib/hubs";
import {
  W,
  H,
  ZOOM_IDENTITY,
  VIEW_IDENTITY,
  ZOOM_STEP,
  clampView,
  zoomAt,
  type BaseLayer,
  type HviTract,
  type LayerKey,
  type LayerState,
  type MapPoint,
  type ViewTransform,
} from "@/lib/map-constants";
import { m, STEP, EASE_POP, EASE_CALM, dealDelay } from "@/lib/motion";
import { MapControls } from "@/components/MapControls";

// The one signature map. Renders precomputed (build-time) path strings + projected
// points — no d3-geo in the browser. It now draws a REAL HVI census-tract choropleth
// (replacing the old fake glow), a toggleable public-facilities layer, hand-rolled
// pan/zoom, and a tract-click readout of real sub-quintiles — while keeping the
// deal-the-five scrollytelling + candidate select intact. `live` is true only during
// active, motion-OK scrollytelling; otherwise it renders the calm "explore" state
// (also the reduced-motion / no-JS / mobile fallback).
export function MapStage({
  fsaPaths: base,
  points,
  zoom,
  hubs,
  selectedRank,
  onSelect,
  currentStep,
  live,
  reduced,
  resetSignal,
}: {
  fsaPaths: BaseLayer;
  points: MapPoint[];
  zoom: { x: number; y: number; scale: number };
  hubs: Hub[];
  selectedRank: number;
  onSelect: (rank: number) => void;
  currentStep: number;
  live: boolean;
  reduced: boolean;
  // Optional: a parent bumps this to snap pan/zoom + layers + tract back to
  // defaults (the /map "Play the decision" tour resets to a clean frame).
  resetSignal?: number;
}) {
  const xy = useMemo(() => new Map(points.map((p) => [p.rank, p])), [points]);

  // Map-local interaction state — never touches ScrollStage (the parallel agent's file).
  const [view, setView] = useState<ViewTransform>(VIEW_IDENTITY);
  const [layers, setLayers] = useState<LayerState>({ heat: true, facilities: true, candidates: true, rings: true, flood: true });
  const [tract, setTract] = useState<HviTract | null>(null);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const drag = useRef<{ id: number; x: number; y: number; moved: boolean } | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchPrev = useRef<number | null>(null);

  const explore = !live;
  const s = currentStep;

  // Layer opacity: scrollytelling-driven when live, calm when exploring; each gated
  // by its toggle (× boolean) so a user can switch any layer off in explore mode.
  const heat = (layers.heat ? 1 : 0) * (explore ? 0.62 : s === STEP.RISK ? 1 : s === STEP.GAP ? 0.5 : 0.28);
  const facOpacity = (layers.facilities ? 1 : 0) * (explore ? 0.9 : s === STEP.GAP ? 1 : 0);
  // Flood is a context overlay outside the heat-focused scroll story: shown only in
  // explore mode (and only when toggled on), never during the deal-the-five sequence.
  const floodOp = (layers.flood ? 1 : 0) * (explore ? 0.55 : 0);
  const pinsOn = layers.candidates && (explore ? true : s >= STEP.CANDIDATES);
  const ringsOp = (layers.rings ? 1 : 0) * (explore ? 0.5 : s === STEP.CANDIDATES ? 0.85 : s >= STEP.DEAL ? 0.4 : 0);
  const dealt = !explore && s >= STEP.DEAL;

  const zoomT = !explore && s === STEP.ZOOM ? zoom : ZOOM_IDENTITY;
  const t0 = reduced ? { duration: 0 } : undefined;
  const top5 = hubs.filter((h) => h.rank <= 5);

  // --- hand-rolled pan + zoom (no dependency) ---
  const ptToViewBox = (clientX: number, clientY: number) => {
    const r = svgRef.current?.getBoundingClientRect();
    if (!r || r.width === 0) return { x: W / 2, y: H / 2 };
    return { x: ((clientX - r.left) / r.width) * W, y: ((clientY - r.top) / r.height) * H };
  };

  const onPointerDown = (e: ReactPointerEvent<SVGSVGElement>) => {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false };
  };
  const onPointerMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // two-finger pinch zoom
    if (pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchPrev.current && pinchPrev.current > 0) {
        const mid = ptToViewBox((a.x + b.x) / 2, (a.y + b.y) / 2);
        setView((v) => zoomAt(v, dist / pinchPrev.current!, mid.x, mid.y));
      }
      pinchPrev.current = dist;
      if (drag.current) drag.current.moved = true;
      return;
    }

    // single-pointer drag to pan
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const r = svgRef.current?.getBoundingClientRect();
    const sx = r && r.width ? W / r.width : 1;
    const sy = r && r.height ? H / r.height : 1;
    if (Math.abs(e.clientX - d.x) + Math.abs(e.clientY - d.y) > 3) d.moved = true;
    const dx = (e.clientX - d.x) * sx;
    const dy = (e.clientY - d.y) * sy;
    d.x = e.clientX;
    d.y = e.clientY;
    setView((v) => clampView({ ...v, x: v.x + dx, y: v.y + dy }));
  };
  const onPointerEnd = (e: ReactPointerEvent<SVGSVGElement>) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinchPrev.current = null;
    // keep drag.current (with `moved`) so a trailing click can read it; the next
    // pointerdown resets it.
  };

  // Native wheel listener (non-passive) so preventDefault works without a console
  // warning. Explore-only — never hijacks the sticky scroll during the story.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const onWheel = (e: WheelEvent) => {
      if (live) return;
      e.preventDefault();
      const p = ptToViewBox(e.clientX, e.clientY);
      setView((v) => zoomAt(v, e.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP, p.x, p.y));
    };
    svg.addEventListener("wheel", onWheel, { passive: false });
    return () => svg.removeEventListener("wheel", onWheel);
  }, [live]);

  // Imperative reset from a parent: when resetSignal changes (after mount), snap
  // the user pan/zoom, layer toggles, and tract selection back to defaults so a
  // driven sequence (the /map tour) starts from a clean frame.
  const skipFirstReset = useRef(true);
  useEffect(() => {
    if (resetSignal === undefined) return;
    if (skipFirstReset.current) {
      skipFirstReset.current = false;
      return;
    }
    setView(VIEW_IDENTITY);
    setLayers({ heat: true, facilities: true, candidates: true, rings: true, flood: true });
    setTract(null);
  }, [resetSignal]);

  const toggle = (k: LayerKey) => setLayers((p) => ({ ...p, [k]: !p[k] }));
  const doZoom = (factor: number) => setView((v) => zoomAt(v, factor, W / 2, H / 2));
  const adjusted = view.scale !== 1 || view.x !== 0 || view.y !== 0;

  // The choropleth is the heavy layer (282 tracts); memoize so panning — which only
  // changes the outer transform — doesn't re-reconcile every path each pointer move.
  const choropleth = useMemo(
    () =>
      base.tracts.map((t) => (
        <path
          key={t.ctuid}
          d={t.d}
          className={`hvi-tract${tract?.ctuid === t.ctuid ? " hvi-tract-sel" : ""}`}
          fill={t.q ? HVI_COLORS[t.q] : "#1a2937"}
          onClick={() => {
            if (drag.current?.moved) return;
            setTract(t);
          }}
        />
      )),
    [base.tracts, tract?.ctuid],
  );

  return (
    <>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="map-svg"
        role="group"
        aria-label="Map of Peel Region: a heat-vulnerability choropleth by census tract, with ten candidate resilience hubs ranked by heat vulnerability. Malton Community Centre and Library ranks first."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onPointerLeave={onPointerEnd}
        style={{ touchAction: "pan-y", cursor: adjusted ? "grab" : "default" }}
      >
        {/* outer USER pan/zoom group (hand-rolled, default identity) */}
        <g transform={`translate(${view.x} ${view.y}) scale(${view.scale})`}>
          {/* inner SCROLLYTELLING fly-to group. Motion animates this <g>'s scale and
              writes its OWN transform-origin (50% 50%) — a transformOrigin set in style
              here is silently ignored. So pin transform-box to the view-box, which makes
              that 50% 50% a stable (W/2, H/2) centre pivot, and let lib/map.ts compute
              the fly-to translate for that centre pivot. Malton then lands dead centre;
              the previous 0,0-origin math left it stranded in the top-left corner. */}
          <m.g
            initial={false}
            animate={zoomT}
            transition={reduced ? { duration: 0 } : { duration: 0.9, ease: EASE_CALM }}
            style={{ transformBox: "view-box" }}
          >
            {/* faint Peel outline (context boundary) */}
            {base.outline.map((d, i) => (
              <path key={`fsa-${i}`} d={d} className="fsa" />
            ))}

            {/* REAL HVI heat choropleth — replaces the fake radial glow */}
            <m.g initial={false} animate={{ opacity: heat }} transition={t0 ?? { duration: 0.7, ease: EASE_CALM }}>
              {choropleth}
            </m.g>

            {/* TRCA regulatory floodplain (riverine, Humber / Etobicoke / Mimico) — a
                non-interactive context overlay, so the heat tracts under it stay clickable */}
            <m.g
              initial={false}
              animate={{ opacity: floodOp }}
              transition={t0 ?? { duration: 0.6, ease: EASE_CALM }}
              style={{ pointerEvents: "none" }}
            >
              {base.flood.map((d, i) => (
                <path key={`flood-${i}`} d={d} className="flood-poly" />
              ))}
            </m.g>

            {/* Official / public facilities — the shelter-gap "current network" */}
            <m.g
              initial={false}
              animate={{ opacity: facOpacity }}
              transition={t0 ?? { duration: 0.5, ease: EASE_CALM }}
              style={{ pointerEvents: "none" }}
            >
              {base.facilities.map((f, i) => (
                <circle key={`fac-${i}`} cx={f.x} cy={f.y} r={5} className="facility-dot">
                  <title>{f.kind ? `${f.name} · ${f.kind}` : f.name}</title>
                </circle>
              ))}
            </m.g>

            {/* Modelled 500 m catchment rings (top five) */}
            {top5.map((h) => {
              const p = xy.get(h.rank);
              if (!p) return null;
              const sel = h.rank === selectedRank;
              return (
                <m.circle
                  key={`catchment-${h.rank}`}
                  cx={p.x}
                  cy={p.y}
                  r={p.r}
                  className={`catchment ${sel ? "catchment-sel" : ""}`}
                  initial={false}
                  animate={{ opacity: sel ? Math.max(ringsOp, layers.rings ? 0.7 : 0) : ringsOp }}
                  transition={t0 ?? { duration: 0.5, ease: EASE_CALM }}
                />
              );
            })}

            {/* Candidate pins */}
            {hubs.map((h) => {
              const p = xy.get(h.rank);
              if (!p) return null;
              const sel = h.rank === selectedRank;
              const isTop5 = h.rank <= 5;
              const recede = dealt && !isTop5;
              const opacity = !pinsOn ? 0 : recede ? 0.16 : 1;
              // Wider win/lose contrast so the "deal" reads as a ranking: the five
              // assert (pop via EASE_POP overshoot), the other five visibly recede.
              const scale = recede ? 0.72 : dealt && isTop5 ? 1.16 : 1;
              return (
                <m.g
                  key={h.rank}
                  className={`pin ${sel ? "pin-sel" : ""}`}
                  role="button"
                  tabIndex={pinsOn ? 0 : -1}
                  aria-label={`Select ${h.name}, rank ${h.rank}, HVI ${h.hvi}`}
                  onClick={() => {
                    if (drag.current?.moved) return;
                    onSelect(h.rank);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelect(h.rank);
                    }
                  }}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  initial={false}
                  animate={{ opacity, scale }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : {
                          duration: 0.45,
                          ease: dealt && isTop5 ? EASE_POP : EASE_CALM,
                          delay: dealt ? dealDelay(Math.min(h.rank, 5)) : 0,
                        }
                  }
                >
                  <circle cx={p.x} cy={p.y} r={sel ? 13 : 9} fill={HVI_COLORS[h.hvi]} className="pin-dot" />
                  {isTop5 && (
                    <text x={p.x} y={p.y} className="pin-rank tnum" dy="0.35em">
                      {h.rank}
                    </text>
                  )}
                  {/* single string child — React 19 drops multi-child <title> in SSR (hydration mismatch) */}
                  <title>{`${h.name} · HVI ${h.hvi} (${HVI_LABEL[h.hvi]})`}</title>
                </m.g>
              );
            })}
          </m.g>
        </g>
      </svg>

      <MapControls
        layers={layers}
        onToggle={toggle}
        onZoomIn={() => doZoom(ZOOM_STEP)}
        onZoomOut={() => doZoom(1 / ZOOM_STEP)}
        onReset={() => setView(VIEW_IDENTITY)}
        canReset={adjusted}
        tract={tract}
        onCloseTract={() => setTract(null)}
        facilityCount={base.facilities.length}
      />
    </>
  );
}

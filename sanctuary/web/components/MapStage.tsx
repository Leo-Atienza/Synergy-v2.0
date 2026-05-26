"use client";

import { useMemo } from "react";
import type { Hub } from "@/lib/hubs";
import { HVI_COLORS, HVI_LABEL } from "@/lib/hubs";
import { W, H, makeProjection, makePath, catchmentRadius, zoomTo, ZOOM_IDENTITY, type FeatureCollectionLike } from "@/lib/map";
import { m, STEP, EASE_POP, EASE_CALM, dealDelay } from "@/lib/motion";

type Base = FeatureCollectionLike & { features: { geometry: unknown }[] };

// The one signature map. `live` is true only during active, motion-OK
// scrollytelling; otherwise the map renders the calm "explore everything" state,
// which is also the reduced-motion / no-JS / mobile fallback.
export function MapStage({
  base,
  hubs,
  selectedRank,
  onSelect,
  currentStep,
  live,
  reduced,
}: {
  base: Base;
  hubs: Hub[];
  selectedRank: number;
  onSelect: (rank: number) => void;
  currentStep: number;
  live: boolean;
  reduced: boolean;
}) {
  const proj = useMemo(() => makeProjection(base), [base]);
  const pathGen = useMemo(() => makePath(proj), [proj]);
  const top5 = hubs.slice(0, 5);
  const malton = hubs.find((h) => h.rank === 1) ?? hubs[0];

  const explore = !live;
  const s = currentStep;
  const heat = explore ? 0.24 : s === STEP.RISK ? 1 : s === STEP.GAP ? 0.55 : 0.24;
  const official = explore ? 0 : s === STEP.GAP ? 1 : 0;
  const pinsOn = explore ? true : s >= STEP.CANDIDATES;
  const rings = explore ? 0.5 : s === STEP.CANDIDATES ? 0.85 : s >= STEP.DEAL ? 0.4 : 0;
  const dealt = !explore && s >= STEP.DEAL;

  // Transform-only pan+zoom to Malton at the ZOOM step (live only).
  const maltonPt = proj([malton.lon, malton.lat]);
  const zoom = !explore && s === STEP.ZOOM && maltonPt ? zoomTo(maltonPt[0], maltonPt[1], 1.9) : ZOOM_IDENTITY;
  const t0 = reduced ? { duration: 0 } : undefined;

  // The two community-centre-libraries stand in as sparse "official" anchors.
  const officialPins = hubs.filter((h) => h.typeLabel.toLowerCase().includes("library"));

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="map-svg"
      role="img"
      aria-label="Map of Peel Region with ten candidate resilience hubs ranked by heat vulnerability; Malton Community Centre and Library ranks first."
    >
      <defs>
        <radialGradient id="heatGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d8392b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#d8392b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <m.g initial={false} animate={zoom} transition={reduced ? { duration: 0 } : { duration: 0.9, ease: EASE_CALM }}>
        {/* Base geography */}
        {base.features.map((f, i) => (
          <path key={i} d={pathGen(f as never) ?? ""} className="fsa" />
        ))}

        {/* Heat-risk glow over the top-quintile pockets */}
        <m.g initial={false} animate={{ opacity: heat }} transition={t0 ?? { duration: 0.7, ease: EASE_CALM }} style={{ pointerEvents: "none" }}>
          {hubs
            .filter((h) => h.hvi >= 4)
            .map((h) => {
              const pt = proj([h.lon, h.lat]);
              if (!pt) return null;
              return <circle key={`glow-${h.rank}`} cx={pt[0]} cy={pt[1]} r={h.hvi === 5 ? 46 : 30} fill="url(#heatGlow)" />;
            })}
        </m.g>

        {/* Sparse official anchors — shown only in the GAP step */}
        <m.g initial={false} animate={{ opacity: official }} transition={t0 ?? { duration: 0.5, ease: EASE_CALM }} style={{ pointerEvents: "none" }}>
          {officialPins.map((h) => {
            const pt = proj([h.lon, h.lat]);
            if (!pt) return null;
            return (
              <g key={`official-${h.rank}`}>
                <circle cx={pt[0]} cy={pt[1]} r={18} className="official-ring" />
                <circle cx={pt[0]} cy={pt[1]} r={6} className="official-dot" />
              </g>
            );
          })}
        </m.g>

        {/* Modelled 500 m catchment rings (top five) */}
        {top5.map((h) => {
          const pt = proj([h.lon, h.lat]);
          if (!pt) return null;
          const sel = h.rank === selectedRank;
          return (
            <m.circle
              key={`catchment-${h.rank}`}
              cx={pt[0]}
              cy={pt[1]}
              r={catchmentRadius(proj, h.lon, h.lat)}
              className={`catchment ${sel ? "catchment-sel" : ""}`}
              initial={false}
              animate={{ opacity: sel ? Math.max(rings, 0.7) : rings }}
              transition={t0 ?? { duration: 0.5, ease: EASE_CALM }}
            />
          );
        })}

        {/* Candidate pins */}
        {hubs.map((h) => {
          const pt = proj([h.lon, h.lat]);
          if (!pt) return null;
          const sel = h.rank === selectedRank;
          const isTop5 = h.rank <= 5;
          const recede = dealt && !isTop5;
          const opacity = !pinsOn ? 0 : recede ? 0.2 : 1;
          const scale = recede ? 0.82 : dealt && isTop5 ? 1.12 : 1;
          return (
            <m.g
              key={h.rank}
              className={`pin ${sel ? "pin-sel" : ""}`}
              role="button"
              tabIndex={pinsOn ? 0 : -1}
              aria-label={`Select ${h.name}, rank ${h.rank}, HVI ${h.hvi}`}
              onClick={() => onSelect(h.rank)}
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
                  : { duration: 0.45, ease: dealt && isTop5 ? EASE_POP : EASE_CALM, delay: dealt ? dealDelay(Math.min(h.rank, 5)) : 0 }
              }
            >
              <circle cx={pt[0]} cy={pt[1]} r={sel ? 13 : 9} fill={HVI_COLORS[h.hvi]} className="pin-dot" />
              {isTop5 && (
                <text x={pt[0]} y={pt[1]} className="pin-rank tnum" dy="0.35em">
                  {h.rank}
                </text>
              )}
              <title>
                {h.name} — HVI {h.hvi} ({HVI_LABEL[h.hvi]})
              </title>
            </m.g>
          );
        })}
      </m.g>
    </svg>
  );
}

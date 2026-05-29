"use client";

import { useEffect, useState } from "react";
import { HVI_COLORS } from "@/lib/hubs";
import type { LayerState } from "@/lib/map-constants";
import { EVIDENCE_ICON } from "@/components/icons";

// Map overlay: the layer key(s) + the honesty evidence key (icon + text, never colour
// alone). Extracted out of ScrollStage so both the Overview scroll map and the full /map
// page render the same component. Collapsible — a header button folds it to a compact
// pill so the map stays the focus. Default expanded on desktop, collapsed on mobile (set
// after mount; the legend is an absolutely positioned overlay, so collapsing causes no
// layout shift). The open/close transition is CSS (grid-rows), so prefers-reduced-motion
// makes it instant via the global media query.
//
// Two modes:
//   • No `layers` prop (the home scroll story): the static heat-only HVI ramp. Unchanged.
//   • With `layers` (the /map explorer): a compact key per ACTIVE data layer — heat, winter,
//     and flood each get their own swatch/ramp, so the legend "changes depending on the
//     layer". The verified/modelled/pending honesty key is always shown (sacred).
export function MapLegend({ layers }: { layers?: LayerState }) {
  const Verified = EVIDENCE_ICON.verified;
  const Modelled = EVIDENCE_ICON.modelled;
  const Pending = EVIDENCE_ICON.pending;

  const [open, setOpen] = useState(true);

  // Collapse by default on a narrow viewport to reclaim space on the full map.
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) setOpen(false);
  }, []);

  const dynamic = layers !== undefined;

  const honestyKey = (
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
  );

  const ringRow = (
    <span className="legend-row">
      <span className="legend-ring" />
      modelled 500 m
    </span>
  );

  // Compact ramp/swatch rows for the dynamic /map legend.
  const heatRamp = (
    <div className="legend-layer">
      <span className="legend-layer-label">Heat vulnerability (HVI)</span>
      <span className="legend-ramp">
        <span className="tnum legend-ramp-end">1</span>
        <span className="legend-ramp-strip legend-ramp-heat" aria-hidden="true" />
        <span className="tnum legend-ramp-end">5</span>
      </span>
    </div>
  );
  const winterRamp = (
    <div className="legend-layer">
      <span className="legend-layer-label">Winter / energy burden</span>
      <span className="legend-ramp">
        <span className="tnum legend-ramp-end">1</span>
        <span className="legend-ramp-strip legend-ramp-winter" aria-hidden="true" />
        <span className="tnum legend-ramp-end">5</span>
      </span>
    </div>
  );
  const floodSwatch = (
    <div className="legend-layer">
      <span className="legend-layer-label">Flood (regulated floodplain)</span>
      <span className="legend-row">
        <span className="legend-sw legend-sw-flood" />
        riverine, TRCA
      </span>
    </div>
  );

  return (
    <div className="legend" data-open={open}>
      <button
        type="button"
        className="legend-toggle"
        aria-expanded={open}
        aria-controls="legend-body"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="legend-head">{dynamic ? "Legend" : "Heat Vulnerability Index"}</span>
        <svg className="legend-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className="legend-body" id="legend-body">
        <div className="legend-body-inner">
          {!dynamic ? (
            <>
              {[5, 4, 3, 2, 1].map((q) => (
                <span className="legend-row" key={q}>
                  <span className="legend-sw" style={{ background: HVI_COLORS[q] }} />
                  <span className="tnum">{q}</span>
                </span>
              ))}
              {ringRow}
            </>
          ) : (
            <>
              {layers?.heat && heatRamp}
              {layers?.winter && winterRamp}
              {layers?.flood && floodSwatch}
              {layers?.rings && ringRow}
            </>
          )}
          {honestyKey}
        </div>
      </div>
    </div>
  );
}

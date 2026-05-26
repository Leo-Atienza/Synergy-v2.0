"use client";

import { useEffect, useState } from "react";
import { HVI_COLORS } from "@/lib/hubs";
import { EVIDENCE_ICON } from "@/components/icons";

// Map overlay: the HVI quintile ramp + the honesty evidence key (icon + text,
// never colour alone). Extracted out of ScrollStage so both the Overview scroll
// map and the full /map page render the same legend. Collapsible — a header
// button folds it to a compact pill so the map stays the focus. Default expanded
// on desktop, collapsed on mobile (set after mount; the legend is an absolutely
// positioned overlay, so collapsing causes no layout shift). The open/close
// transition is CSS (grid-rows), so prefers-reduced-motion makes it instant via
// the global media query.
export function MapLegend() {
  const Verified = EVIDENCE_ICON.verified;
  const Modelled = EVIDENCE_ICON.modelled;
  const Pending = EVIDENCE_ICON.pending;

  const [open, setOpen] = useState(true);

  // Collapse by default on a narrow viewport to reclaim space on the full map.
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) setOpen(false);
  }, []);

  return (
    <div className="legend" data-open={open}>
      <button
        type="button"
        className="legend-toggle"
        aria-expanded={open}
        aria-controls="legend-body"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="legend-head">Heat Vulnerability Index</span>
        <svg className="legend-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className="legend-body" id="legend-body">
        <div className="legend-body-inner">
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
      </div>
    </div>
  );
}

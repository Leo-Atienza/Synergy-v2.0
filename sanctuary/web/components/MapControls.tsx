"use client";

import { useEffect, useState } from "react";
import type { HviTract, LayerKey, LayerState } from "@/lib/map-constants";
import { HVI_COLORS, HVI_LABEL } from "@/lib/hubs";
import { MAP_LAYERS } from "@/lib/content";
import { EvidenceTag } from "@/components/EvidenceTag";
import { Crosshair } from "@/components/icons";

// Map chrome owned by MapStage (NOT ScrollStage): layer toggles that double as a
// legend, zoom +/− / reset, and the tract-click readout of REAL HVI sub-quintiles.
// Rendered as a sibling of the SVG inside .map-wrap, so it overlays the map without
// a wrapper div (the existing HVI-ramp legend stays where ScrollStage renders it).
export function MapControls({
  layers,
  onToggle,
  onZoomIn,
  onZoomOut,
  onReset,
  canReset,
  tract,
  onCloseTract,
  facilityCount,
}: {
  layers: LayerState;
  onToggle: (k: LayerKey) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  canReset: boolean;
  tract: HviTract | null;
  onCloseTract: () => void;
  facilityCount: number;
}) {
  // Facilities toggle only appears once the facilities layer is actually loaded.
  const shown = MAP_LAYERS.filter((l) => l.key !== "facilities" || facilityCount > 0);

  // Layer panel folds away so the map stays the focus. Default expanded on
  // desktop, collapsed on mobile (set after mount — it's an absolutely
  // positioned overlay, so collapsing causes no layout shift).
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) setOpen(false);
  }, []);

  return (
    <>
      <div className="map-controls">
        <div className="mc-zoom" role="group" aria-label="Zoom map">
          <button type="button" className="mc-btn" onClick={onZoomIn} aria-label="Zoom in">
            <span aria-hidden="true">+</span>
          </button>
          <button type="button" className="mc-btn" onClick={onZoomOut} aria-label="Zoom out">
            <span aria-hidden="true">−</span>
          </button>
          <button type="button" className="mc-btn" onClick={onReset} disabled={!canReset} aria-label="Reset map view">
            <Crosshair size={15} />
          </button>
        </div>
        <div className="mc-layers" data-open={open}>
          <button
            type="button"
            className="mc-layers-head"
            aria-expanded={open}
            aria-controls="mc-layers-list"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="mc-layers-title">Layers</span>
            <svg className="mc-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="mc-layers-body" id="mc-layers-list">
            <div className="mc-layers-inner" role="group" aria-label="Toggle map layers">
              {shown.map((l) => (
                <button
                  key={l.key}
                  type="button"
                  className="mc-layer"
                  aria-pressed={layers[l.key]}
                  data-on={layers[l.key]}
                  onClick={() => onToggle(l.key)}
                >
                  <span className={`mc-sw mc-sw-${l.key}`} aria-hidden="true" />
                  <span className="mc-layer-label">{l.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {tract && (
        <div className="tract-readout" role="status" aria-live="polite">
          <button className="tract-close" type="button" onClick={onCloseTract} aria-label="Close tract details">
            <span aria-hidden="true">×</span>
          </button>
          <span className="tract-eyebrow">
            Census tract {tract.ctuid}
            {tract.phdz ? ` · zone ${tract.phdz}` : ""}
          </span>
          <div className="tract-hvi">
            <span className="tract-q tnum" style={{ background: tract.q ? HVI_COLORS[tract.q] : "#243140" }}>
              {tract.q ?? "·"}
            </span>
            <span className="tract-hvi-label">{tract.q ? `HVI ${tract.q} · ${HVI_LABEL[tract.q]}` : "HVI · no data"}</span>
          </div>
          <dl className="tract-subs">
            <div>
              <dt>Exposure</dt>
              <dd className="tnum">{tract.exposure ?? "n/a"}</dd>
            </div>
            <div>
              <dt>Sensitivity</dt>
              <dd className="tnum">{tract.sensitivity ?? "n/a"}</dd>
            </div>
            <div>
              <dt>Adaptive capacity</dt>
              <dd className="tnum">{tract.adaptivity ?? "n/a"}</dd>
            </div>
          </dl>
          <div className="tract-foot">
            <EvidenceTag tag="verified">Peel HVI{tract.municipality ? ` · ${tract.municipality}` : ""}</EvidenceTag>
          </div>
        </div>
      )}
    </>
  );
}

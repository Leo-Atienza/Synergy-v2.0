"use client";

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
        <div className="mc-layers" role="group" aria-label="Toggle map layers">
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
              {tract.q ?? "—"}
            </span>
            <span className="tract-hvi-label">{tract.q ? `HVI ${tract.q} · ${HVI_LABEL[tract.q]}` : "HVI · no data"}</span>
          </div>
          <dl className="tract-subs">
            <div>
              <dt>Exposure</dt>
              <dd className="tnum">{tract.exposure ?? "—"}</dd>
            </div>
            <div>
              <dt>Sensitivity</dt>
              <dd className="tnum">{tract.sensitivity ?? "—"}</dd>
            </div>
            <div>
              <dt>Adaptive capacity</dt>
              <dd className="tnum">{tract.adaptivity ?? "—"}</dd>
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

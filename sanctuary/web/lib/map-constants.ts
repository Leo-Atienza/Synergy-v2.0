// d3-free map constants + types, safe to import from the client island (keeps
// d3-geo, which lives in lib/map.ts, out of the browser bundle).

export const W = 760;
export const H = 720;

export type MapPoint = { rank: number; x: number; y: number; r: number };

// A projected HVI census tract: the SVG path + its REAL quintile fields (1..5, or
// null for a no-data tract). Drives the choropleth fill and the tract-click readout.
export type HviTract = {
  d: string;
  q: number | null; // Index_Qnt — overall HVI quintile
  exposure: number | null; // Exposure_Qnt
  sensitivity: number | null; // Sensitivity_Qnt
  adaptivity: number | null; // Adaptivity_Qnt
  phdz: string | null;
  municipality: string | null;
  ctuid: string;
};

// A projected official/public facility (the "current network" / shelter-gap layer).
export type Facility = { x: number; y: number; name: string; kind: string };

// The projected base geometry, bundled. NOTE: this rides the existing `fsaPaths`
// prop channel into MapStage. ScrollStage (owned by the parallel agent, not edited
// here) forwards exactly mapData.fsaPaths/points/zoom, so the new HVI + facility
// layers travel inside this bundle to stay in the SSR HTML (no runtime fetch) without
// having to add a prop to ScrollStage.
export type BaseLayer = {
  outline: string[]; // faint Peel context boundary (FSA polygons)
  tracts: HviTract[]; // the real HVI heat choropleth
  facilities: Facility[]; // official/public facilities
};

export type MapData = {
  fsaPaths: BaseLayer;
  points: MapPoint[];
  // Transform-only pan+zoom that lands Malton at the viewport centre (scrollytelling).
  zoom: { x: number; y: number; scale: number };
};

export const ZOOM_IDENTITY = { x: 0, y: 0, scale: 1 } as const;

// Toggleable map layers (keys mirror lib/content.ts MAP_LAYERS).
export type LayerKey = "heat" | "facilities" | "candidates" | "rings";
export type LayerState = Record<LayerKey, boolean>;

// ---------------------------------------------------------------------------
// Hand-rolled pan + zoom (no dependency). Operates on a user-controlled OUTER
// transform group, composed over the scrollytelling fly-to. All in viewBox px.
// ---------------------------------------------------------------------------
export type ViewTransform = { x: number; y: number; scale: number };
export const VIEW_IDENTITY: ViewTransform = { x: 0, y: 0, scale: 1 };
export const ZOOM_MIN = 1; // never zoom out past the fitted frame
export const ZOOM_MAX = 6;
export const ZOOM_STEP = 1.55; // +/- button and wheel multiplier

export const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

// Clamp a view so the scaled WxH content can never be panned off the frame.
// At scale s the content spans s·W; keeping [0,W] covered means x ∈ [W−s·W, 0].
export function clampView(v: ViewTransform): ViewTransform {
  const scale = clamp(v.scale, ZOOM_MIN, ZOOM_MAX);
  return {
    scale,
    x: clamp(v.x, W - scale * W, 0),
    y: clamp(v.y, H - scale * H, 0),
  };
}

// Zoom by `factor` toward focal point (cx,cy) — in viewBox px — keeping that point
// fixed on screen. Screen(p) = view + scale·p, so to hold cx fixed: x' = cx − k·(cx − x).
export function zoomAt(v: ViewTransform, factor: number, cx: number, cy: number): ViewTransform {
  const scale = clamp(v.scale * factor, ZOOM_MIN, ZOOM_MAX);
  const k = scale / v.scale;
  return clampView({ x: cx - k * (cx - v.x), y: cy - k * (cy - v.y), scale });
}

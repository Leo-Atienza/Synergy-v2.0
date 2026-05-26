// Pure map projection + geometry helpers (extracted verbatim in behaviour from
// the original page.tsx). No React, no side effects — safe to share between the
// client island and any build-time use.

import { geoMercator, geoPath, type GeoProjection, type GeoPath } from "d3-geo";

// SVG user-space dimensions. The viewBox is fixed at "0 0 W H"; pan/zoom happens
// via a transform on the content group, so nothing animates width/top/left.
export const W = 760;
export const H = 720;

export type FeatureCollectionLike = {
  type: "FeatureCollection";
  features: unknown[];
};

// Fit the Mercator projection to the Peel base geometry so candidate lon/lat
// land in the right place. 24px inset matches the original.
export function makeProjection(base: FeatureCollectionLike): GeoProjection {
  return geoMercator().fitExtent(
    [
      [24, 24],
      [W - 24, H - 24],
    ],
    base as never,
  );
}

export function makePath(proj: GeoProjection): GeoPath {
  return geoPath(proj);
}

// Pixel radius of a modelled 500 m catchment, from a ~0.0045° north offset.
// Floored at 14px so it never collapses to a dot at this projection scale.
export function catchmentRadius(proj: GeoProjection, lon: number, lat: number): number {
  const center = proj([lon, lat]);
  const north = proj([lon, lat + 0.0045]);
  if (!center || !north) return 0;
  return Math.max(14, Math.abs(center[1] - north[1]));
}

// Transform that pans+zooms the content group so a point lands at the viewport
// centre at scale `k`. With transform-origin 0,0 the composite is T(x,y)·S(k):
// a point p maps to (x + k·px, y + k·py); solving for centre gives x,y below.
// Returned as Motion-friendly { x, y, scale } so the zoom is transform-only.
export function zoomTo(px: number, py: number, k: number): { x: number; y: number; scale: number } {
  return { x: W / 2 - k * px, y: H / 2 - k * py, scale: k };
}

export const ZOOM_IDENTITY = { x: 0, y: 0, scale: 1 } as const;

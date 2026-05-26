// d3-free map constants + types, safe to import from the client island (keeps
// d3-geo, which lives in lib/map.ts, out of the browser bundle).

export const W = 760;
export const H = 720;

export type MapPoint = { rank: number; x: number; y: number; r: number };
export type MapData = {
  fsaPaths: string[];
  points: MapPoint[];
  // Transform-only pan+zoom that lands Malton at the viewport centre.
  zoom: { x: number; y: number; scale: number };
};

export const ZOOM_IDENTITY = { x: 0, y: 0, scale: 1 } as const;

// Map projection — computed ONCE at build in the RSC shell (server only; this
// module imports d3-geo). The client island receives plain serializable path
// strings + projected points from lib/map-constants, so d3-geo never ships to
// the browser and the projection never runs at hydration.

import { geoMercator, geoPath } from "d3-geo";
import type { Hub } from "./hubs";
import { W, H, type MapData, type MapPoint } from "./map-constants";

const round = (n: number) => Math.round(n * 100) / 100;

export function projectMap(base: { features: unknown[] }, hubs: Hub[]): MapData {
  const proj = geoMercator().fitExtent(
    [
      [24, 24],
      [W - 24, H - 24],
    ],
    base as never,
  );
  const path = geoPath(proj);

  const fsaPaths = base.features.map((f) => path(f as never) ?? "");

  // Each hub's projected centre + the pixel radius of a modelled 500 m catchment
  // (a ~0.0045° north offset), floored at 14px.
  const points: MapPoint[] = hubs.map((h) => {
    const pt = proj([h.lon, h.lat]) ?? [0, 0];
    const north = proj([h.lon, h.lat + 0.0045]) ?? pt;
    return { rank: h.rank, x: round(pt[0]), y: round(pt[1]), r: round(Math.max(14, Math.abs(pt[1] - north[1]))) };
  });

  const malton = points.find((p) => p.rank === 1) ?? points[0];
  const k = 1.9;
  const zoom = { x: round(W / 2 - k * malton.x), y: round(H / 2 - k * malton.y), scale: k };

  return { fsaPaths, points, zoom };
}

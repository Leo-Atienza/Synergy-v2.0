// Map projection — computed ONCE at build in the RSC shell (server only; this
// module imports d3-geo). The client island receives plain serializable path
// strings + projected points from lib/map-constants, so d3-geo never ships to
// the browser and the projection never runs at hydration.

import { geoMercator, geoPath } from "d3-geo";
import type { Hub } from "./hubs";
import { W, H, type MapData, type MapPoint, type BaseLayer, type HviTract, type Facility } from "./map-constants";

const round = (n: number) => Math.round(n * 100) / 100;
// Round every coordinate in an SVG path to 1 decimal px — visually lossless at this
// scale, and it roughly halves the path-string payload serialized to the client.
const roundPath = (d: string) => d.replace(/-?\d+\.\d+/g, (m) => String(Math.round(parseFloat(m) * 10) / 10));

type HviProps = {
  CTUID: string;
  Index_Qnt: number | null;
  Exposure_Qnt: number | null;
  Sensitivity_Qnt: number | null;
  Adaptivity_Qnt: number | null;
  PHDZ: string | null;
  Municipality: string | null;
};
export type HviGeo = { type?: string; features: { type?: string; properties: HviProps; geometry: unknown }[] };
type FacilityProps = { name?: string; kind?: string; type?: string };
export type FacilityGeo = {
  type?: string;
  features: { type?: string; properties: FacilityProps; geometry: { coordinates: [number, number] } }[];
};

export function projectMap(
  base: { features: unknown[] },
  hubs: Hub[],
  hvi?: HviGeo,
  facilities?: FacilityGeo,
): MapData {
  const proj = geoMercator().fitExtent(
    [
      [24, 24],
      [W - 24, H - 24],
    ],
    base as never,
  );
  const path = geoPath(proj);

  const outline = base.features.map((f) => roundPath(path(f as never) ?? ""));

  // Real HVI choropleth: each census tract projected to a path + its true quintiles.
  const tracts: HviTract[] = (hvi?.features ?? [])
    .map((f) => ({
      d: roundPath(path(f as never) ?? ""),
      q: f.properties.Index_Qnt,
      exposure: f.properties.Exposure_Qnt,
      sensitivity: f.properties.Sensitivity_Qnt,
      adaptivity: f.properties.Adaptivity_Qnt,
      phdz: f.properties.PHDZ,
      municipality: f.properties.Municipality,
      ctuid: f.properties.CTUID,
    }))
    .filter((t) => t.d.length > 0);

  // Official/public facilities (shelter-gap layer), projected to in-frame points.
  const projFacilities: Facility[] = (facilities?.features ?? [])
    .map((f) => {
      const [lon, lat] = f.geometry.coordinates;
      const pt = proj([lon, lat]) ?? [0, 0];
      return {
        x: round(pt[0]),
        y: round(pt[1]),
        name: f.properties.name ?? "",
        kind: f.properties.kind ?? f.properties.type ?? "facility",
      };
    })
    .filter((p) => p.x > 0 && p.y > 0 && p.x < W && p.y < H);

  const fsaPaths: BaseLayer = { outline, tracts, facilities: projFacilities };

  // Each hub's projected centre + the pixel radius of a modelled 500 m catchment
  // (a ~0.0045° north offset), floored at 14px.
  const points: MapPoint[] = hubs.map((h) => {
    const pt = proj([h.lon, h.lat]) ?? [0, 0];
    const north = proj([h.lon, h.lat + 0.0045]) ?? pt;
    return { rank: h.rank, x: round(pt[0]), y: round(pt[1]), r: round(Math.max(14, Math.abs(pt[1] - north[1]))) };
  });

  const malton = points.find((p) => p.rank === 1) ?? points[0];
  const k = 1.9;
  // Fly-to transform that lands Malton at the viewBox centre. Motion animates the
  // <g> scale and writes its OWN transform-origin (50% 50%); on a view-box
  // transform-box that resolves to (W/2, H/2) — the centre, not the (0,0) origin.
  // So the translate is computed for a CENTRE pivot: t = k·(centre − malton).
  // (Computing it for a 0,0 pivot instead leaves Malton in the top-left corner.)
  // See the fly-to group in MapStage.tsx.
  const zoom = { x: round(k * (W / 2 - malton.x)), y: round(k * (H / 2 - malton.y)), scale: k };

  return { fsaPaths, points, zoom };
}

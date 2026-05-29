// Build-time map data load — SERVER ONLY. This module imports node:fs and (via
// lib/map) d3-geo, so it can never be bundled into a client component; both the
// Overview hook (app/page.tsx) and the full Map page (app/map/page.tsx) call it
// so the fs read + d3-geo projection run exactly once, at build, in the RSC shell.
// The client island receives only serialized path strings + projected points.

import { readFileSync } from "node:fs";
import { join } from "node:path";

import { toHub, type Hub, type HubGeo } from "@/lib/hubs";
import { projectMap, type HviGeo, type FacilityGeo, type FloodGeo } from "@/lib/map";
import type { MapData } from "@/lib/map-constants";

type BaseGeo = { type: "FeatureCollection"; features: { geometry: unknown }[] };

// process.cwd() is sanctuary/web at build; the GeoJSON lives only in public/.
function loadJson<T>(file: string): T {
  return JSON.parse(readFileSync(join(process.cwd(), "public", file), "utf8")) as T;
}
// Optional layers load safely so the build never breaks if a public/ file is
// absent — the map just omits that layer.
function loadJsonSafe<T>(file: string, fallback: T): T {
  try {
    return loadJson<T>(file);
  } catch {
    return fallback;
  }
}

export function loadMapData(): { mapData: MapData; hubs: Hub[] } {
  const base = loadJson<BaseGeo>("peel-fsa.geojson");
  const hvi = loadJson<HviGeo>("peel-hvi.geojson");
  const facilities = loadJsonSafe<FacilityGeo>("peel-facilities.geojson", { type: "FeatureCollection", features: [] });
  const flood = loadJsonSafe<FloodGeo>("peel-flood.geojson", { type: "FeatureCollection", features: [] });
  const hubs: Hub[] = loadJson<HubGeo>("candidate-hubs.geojson")
    .features.map(toHub)
    .sort((a, z) => a.rank - z.rank);
  const mapData = projectMap(base, hubs, hvi, facilities, flood);
  return { mapData, hubs };
}

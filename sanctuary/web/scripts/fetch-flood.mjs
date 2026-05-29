// scripts/fetch-flood.mjs
//
// Provenance + one-shot fetch for the REAL flood layer: TRCA's regulatory
// floodline polygons in Peel. Run once, commit the result static so the showcase
// map stays fully offline (no runtime fetch) and the flood overlay is traceable
// to the public source.
//
//   Source service : Toronto and Region Conservation Authority (TRCA) —
//                     "Flood and Heat Vulnerable Areas in Peel", layer 6
//                     = Floodline TRCA Polygon.
//                     https://maps.trca.ca/hostingserver/rest/services/Hosted/
//                     Flood_and_Heat_Vulnerable_Areas_in_Peel_WFL1/FeatureServer/6
//   What it is      : the regulatory floodplain — the greater of the Regional
//                     Storm (Hurricane Hazel, 1954) or the 100-year flood, the
//                     MNRF standard TRCA regulates to. RIVERINE only (along
//                     watercourses), NOT urban / pluvial (storm-sewer) flooding.
//   Coverage        : 295 polygons across the three TRCA watersheds inside Peel:
//                     Humber River (164), Etobicoke Creek (101), Mimico Creek (30).
//                     The Credit River watershed (west Peel) is Credit Valley
//                     Conservation's jurisdiction and is NOT in this layer.
//   Fields kept     : floodplain (Engineered | Estimated — how the floodline was
//                     derived), watershed. OBJECTID + Shape_* dropped as noise.
//   Simplification  : maxAllowableOffset (server-side Douglas-Peucker, in 4326
//                     degrees) + geometryPrecision. Floodplain corridors do not
//                     need sub-block precision for a region-scale overlay.
//
//   Run             : node scripts/fetch-flood.mjs    (cwd = sanctuary/web)
//   Output          : public/peel-flood.geojson
//
// Cross-check after a refresh: the script asserts a non-empty result near the
// known count (295) and prints the per-watershed distribution.

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { geoArea } from "d3-geo";

const SERVICE =
  "https://maps.trca.ca/hostingserver/rest/services/Hosted/Flood_and_Heat_Vulnerable_Areas_in_Peel_WFL1/FeatureServer/6";

const OUT_FIELDS = ["floodplain", "watershed"];
const MAX_OFFSET = 0.0007; // ~78 m, in degrees (outSR 4326) — matches the HVI layer (~1px at map scale, visually lossless)
const PRECISION = 5; // ~1 m coordinate precision
const PAGE = 2000; // service maxRecordCount; Peel flood = 295 polygons -> one page

// Normalize polygon winding for d3-geo. ArcGIS f=geojson emits RFC-7946 right-hand-rule
// (CCW exterior); d3-geo reads winding SPHERICALLY (the opposite convention), so it treats
// each of these polygons as "the whole sphere MINUS this sliver" -> the flood overlay paints
// the entire map blue. Fix: flip each polygon component (its exterior + holes together, which
// preserves their relative winding) whenever d3's OWN geoArea says it encloses more than a
// hemisphere. geoArea is the exact oracle the renderer uses — a planar/approximate shoelace
// sign misclassifies a handful of large or near-degenerate rings and leaves them inverted.
const TWO_PI = 2 * Math.PI;
const rewindPolygon = (rings) => {
  if (geoArea({ type: "Polygon", coordinates: rings }) > TWO_PI) rings.forEach((r) => r.reverse());
};
const rewindGeometry = (g) => {
  if (g.type === "Polygon") rewindPolygon(g.coordinates);
  else if (g.type === "MultiPolygon") g.coordinates.forEach(rewindPolygon);
};

async function fetchPage(offset) {
  const params = new URLSearchParams({
    where: "1=1",
    outFields: OUT_FIELDS.join(","),
    outSR: "4326",
    f: "geojson",
    geometryPrecision: String(PRECISION),
    maxAllowableOffset: String(MAX_OFFSET),
    returnGeometry: "true",
    resultOffset: String(offset),
    resultRecordCount: String(PAGE),
  });
  const res = await fetch(`${SERVICE}/query?${params}`);
  if (!res.ok) throw new Error(`flood fetch failed: ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (json.error) throw new Error(`ArcGIS error: ${JSON.stringify(json.error)}`);
  return json;
}

async function main() {
  const features = [];
  for (let offset = 0; ; offset += PAGE) {
    const page = await fetchPage(offset);
    const got = page.features ?? [];
    features.push(...got);
    if (got.length < PAGE) break; // last page
  }
  if (features.length === 0) throw new Error("No flood features returned — service shape changed?");

  // Curate props: keep only floodplain + watershed; drop OBJECTID/Shape noise.
  const cleaned = features
    .filter((f) => f.geometry && f.geometry.coordinates)
    .map((f) => ({
      type: "Feature",
      properties: {
        floodplain: f.properties.floodplain ?? null,
        watershed: f.properties.watershed ?? null,
      },
      geometry: f.geometry,
    }));

  // Rewind to d3-geo-friendly winding (see rewindGeometry) so the overlay draws
  // riverine corridors, not a full-frame wash.
  for (const f of cleaned) rewindGeometry(f.geometry);

  const fc = { type: "FeatureCollection", name: "peel_flood_trca", features: cleaned };
  const out = join(process.cwd(), "public", "peel-flood.geojson");
  writeFileSync(out, JSON.stringify(fc));

  // --- self-verification ---
  const byWatershed = {};
  for (const f of cleaned) byWatershed[f.properties.watershed] = (byWatershed[f.properties.watershed] ?? 0) + 1;
  const sizeKb = (JSON.stringify(fc).length / 1024).toFixed(0);
  console.log(`wrote public/peel-flood.geojson — ${cleaned.length} polygons, ${sizeKb} KB`);
  console.log("  per-watershed:", byWatershed);
  if (cleaned.length < 250 || cleaned.length > 320) {
    throw new Error(`Expected ~295 flood polygons, got ${cleaned.length} — refusing to ship.`);
  }
  console.log(`  OK: ${cleaned.length} polygons (expected ~295).`);
}

main().catch((err) => {
  console.error("fetch-flood failed:", err.message);
  process.exit(1);
});

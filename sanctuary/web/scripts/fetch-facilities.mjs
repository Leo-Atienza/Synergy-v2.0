// scripts/fetch-facilities.mjs
//
// Provenance + one-shot fetch for the shelter-gap "current network" layer: Peel's
// official public recreation BUILDINGS (community centres, arenas, pools), from
// Statistics Canada's Open Database of Recreational & Sport Facilities (ODRSF).
// Run once, commit static so the showcase map stays fully offline.
//
//   Source  : ODRSF (Statistics Canada, catalogue 21260002), via its public ArcGIS
//             FeatureLayer mirror, layer 0:
//             https://services.arcgis.com/wjcPoefzjpzCgffS/arcgis/rest/services/
//             Sports_Recreation_Facilities_gdb/FeatureServer/0
//   Item    : https://www.arcgis.com/home/item.html?id=4814caea658941bb8596a342cd171269
//   Licence : Open Government Licence — Canada.
//   Scope   : CSD_Name IN (Mississauga, Brampton, Caledon) = Peel Region, AND
//             ODRSF_facility_type IN (community centre, arena, pool) — the indoor
//             civic buildings that are realistic cooling / gathering spaces. Peel's
//             24,550 ODRSF "trail" rows + sports fields / playgrounds are excluded.
//   Coords  : ODRSF ships Latitude/Longitude (WGS84) — no geocoding needed.
//   Dedupe  : co-located facilities (a complex with a community centre + arena + pool
//             at one site) collapse to one marker on a ~110 m grid; the community-
//             centre name wins the tie. Names are VERBATIM from ODRSF (no fabrication).
//   Honesty : this is the official RECREATION network, not a list of designated
//             cooling centres — the map labels the layer "Public facilities". ODRSF
//             already covers Mississauga civic facilities, so a separate scrape of the
//             City of Mississauga locations page is unnecessary (it cross-checks).
//
//   Run     : node scripts/fetch-facilities.mjs   (cwd = sanctuary/web)
//   Output  : public/peel-facilities.geojson   (reused by Cursor's planning assistant)

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const SVC =
  "https://services.arcgis.com/wjcPoefzjpzCgffS/arcgis/rest/services/Sports_Recreation_Facilities_gdb/FeatureServer/0";
const TYPES = ["community centre", "arena", "pool"];
const KIND = { "community centre": "Community centre", arena: "Arena", pool: "Pool" };
const RANK = { "community centre": 0, arena: 1, pool: 2 }; // name preference on a shared site

async function fetchRows() {
  const params = new URLSearchParams({
    where: `CSD_Name IN ('Mississauga','Brampton','Caledon') AND ODRSF_facility_type IN (${TYPES.map((t) => `'${t}'`).join(",")})`,
    outFields: "Facility_Name,ODRSF_facility_type,City,Latitude,Longitude",
    returnGeometry: "false",
    f: "json",
    resultRecordCount: "1000",
  });
  const res = await fetch(`${SVC}/query?${params}`);
  if (!res.ok) throw new Error(`ODRSF fetch failed: ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (json.error) throw new Error(`ArcGIS error: ${JSON.stringify(json.error)}`);
  return (json.features ?? []).map((f) => f.attributes);
}

const clean = (s) => (s || "").trim();
const titleCase = (c) => (c ? c.charAt(0).toUpperCase() + c.slice(1).toLowerCase() : "");

async function main() {
  const rows = await fetchRows();
  if (rows.length === 0) throw new Error("No ODRSF features returned — service shape changed?");

  const byKey = new Map();
  for (const a of rows) {
    const lat = Number(a.Latitude);
    const lon = Number(a.Longitude);
    const name = clean(a.Facility_Name);
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || name.length < 3) continue;
    const key = `${lat.toFixed(3)},${lon.toFixed(3)}`; // ~110 m grid
    const cur = { name, type: a.ODRSF_facility_type, lat, lon, city: titleCase(a.City) };
    const prev = byKey.get(key);
    if (!prev || RANK[cur.type] < RANK[prev.type]) byKey.set(key, cur);
  }
  const sites = [...byKey.values()];

  const fc = {
    type: "FeatureCollection",
    features: sites.map((s) => ({
      type: "Feature",
      properties: { name: s.name, kind: KIND[s.type] ?? s.type, municipality: s.city },
      geometry: { type: "Point", coordinates: [Math.round(s.lon * 1e5) / 1e5, Math.round(s.lat * 1e5) / 1e5] },
    })),
  };
  writeFileSync(join(process.cwd(), "public", "peel-facilities.geojson"), JSON.stringify(fc));

  const byCity = {};
  for (const s of sites) byCity[s.city] = (byCity[s.city] ?? 0) + 1;
  console.log(`✓ wrote public/peel-facilities.geojson — ${sites.length} sites (from ${rows.length} ODRSF rows)`);
  console.log(`  by municipality:`, byCity);
  console.log(`  sample:`, sites.slice(0, 4).map((s) => `${s.name} (${KIND[s.type]})`).join(" · "));
}

main().catch((e) => {
  console.error("✗ fetch-facilities failed:", e.message);
  process.exit(1);
});

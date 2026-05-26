// scripts/fetch-hvi.mjs
//
// Provenance + one-shot fetch for the REAL heat layer: Peel's Heat Vulnerability
// Index (HVI) by census tract (2021). Run once, commit the result static so the
// showcase map stays fully offline (no runtime fetch) and every quintile on screen
// is traceable to the public source.
//
//   Source service : Region of Peel — Extreme Heat Vulnerability Index
//                     https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/
//                     Extreme_Heat_Vulnerability_Index/FeatureServer/0
//   Item page       : https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2
//   Geography       : 282 Statistics Canada census tracts covering Peel Region
//                     (Mississauga, Brampton, Caledon), 2021 boundaries.
//   Fields kept     : CTUID (census tract id), Index_Qnt (overall HVI quintile 1-5),
//                     Exposure_Qnt, Sensitivity_Qnt, Adaptivity_Qnt (the three HVI
//                     dimensions, each 1-5), PHDZ (Peel Health Data Zone),
//                     Municipality. Quintile 5 = most vulnerable.
//   Note            : quintiles are REAL service values — never fabricated. The
//                     Nrm (normalized 0-1) and Shape__* fields are dropped as noise.
//
//   Simplification  : maxAllowableOffset=0.0007 (~78 m, in outSR=4326 degrees) +
//                     geometryPrecision=5 (~1 m). Done server-side by ArcGIS, so no
//                     mapshaper / extra dependency is needed. Census-tract fills do
//                     not need sub-block precision for a region-scale choropleth.
//
//   Run             : node scripts/fetch-hvi.mjs    (cwd = sanctuary/web)
//   Output          : public/peel-hvi.geojson
//
// Cross-check after a refresh: Malton's tract CTUID 5350530.01 (PHDZ M-04) must be
// Index_Qnt 5. The script asserts this and prints the quintile distribution.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const SERVICE =
  "https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Extreme_Heat_Vulnerability_Index/FeatureServer/0";

const OUT_FIELDS = ["CTUID", "Index_Qnt", "Exposure_Qnt", "Sensitivity_Qnt", "Adaptivity_Qnt", "PHDZ", "Municipality"];
const MAX_OFFSET = 0.0007; // ~78 m, in degrees (outSR 4326)
const PRECISION = 5; // ~1 m coordinate precision
const PAGE = 2000; // service maxRecordCount; Peel is 282 tracts → one page

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
  if (!res.ok) throw new Error(`HVI fetch failed: ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (json.error) throw new Error(`ArcGIS error: ${JSON.stringify(json.error)}`);
  return json;
}

const toQnt = (v) => {
  const n = Number(v);
  return Number.isInteger(n) && n >= 1 && n <= 5 ? n : null; // null = no-data tract
};

async function main() {
  const features = [];
  for (let offset = 0; ; offset += PAGE) {
    const page = await fetchPage(offset);
    const got = page.features ?? [];
    features.push(...got);
    if (got.length < PAGE) break; // last page
  }
  if (features.length === 0) throw new Error("No features returned — service shape changed?");

  // Curate props: keep only the seven fields, coerce quintiles to clean ints.
  const cleaned = features.map((f) => ({
    type: "Feature",
    properties: {
      CTUID: f.properties.CTUID,
      Index_Qnt: toQnt(f.properties.Index_Qnt),
      Exposure_Qnt: toQnt(f.properties.Exposure_Qnt),
      Sensitivity_Qnt: toQnt(f.properties.Sensitivity_Qnt),
      Adaptivity_Qnt: toQnt(f.properties.Adaptivity_Qnt),
      PHDZ: f.properties.PHDZ ?? null,
      Municipality: f.properties.Municipality ?? null,
    },
    geometry: f.geometry,
  }));

  const fc = { type: "FeatureCollection", features: cleaned };
  const out = join(process.cwd(), "public", "peel-hvi.geojson");
  writeFileSync(out, JSON.stringify(fc));

  // --- self-verification ---
  const dist = {};
  for (const f of cleaned) dist[f.properties.Index_Qnt] = (dist[f.properties.Index_Qnt] ?? 0) + 1;
  const malton = cleaned.find((f) => f.properties.CTUID === "5350530.01");
  const sizeKb = (JSON.stringify(fc).length / 1024).toFixed(0);

  console.log(`✓ wrote public/peel-hvi.geojson — ${cleaned.length} tracts, ${sizeKb} KB`);
  console.log(`  HVI quintile distribution:`, dist);
  if (!malton) throw new Error("Malton tract CTUID 5350530.01 missing — refusing to ship.");
  console.log(`  Malton (CTUID 5350530.01, PHDZ ${malton.properties.PHDZ}): Index_Qnt=${malton.properties.Index_Qnt}`);
  if (malton.properties.Index_Qnt !== 5) {
    throw new Error(`Malton tract must be quintile 5, got ${malton.properties.Index_Qnt} — refusing to ship.`);
  }
  console.log(`  ✓ Malton = quintile 5 (verified against the service).`);
}

main().catch((err) => {
  console.error("✗ fetch-hvi failed:", err.message);
  process.exit(1);
});

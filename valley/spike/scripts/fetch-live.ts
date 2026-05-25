import { fetchLatestFuelMix } from "../src/ieso.ts";

// Proves the riskiest external dependency: can we actually pull Ontario grid data?
const r = await fetchLatestFuelMix();

console.log("\n  T I D E  —  live IESO data probe\n");
console.log(`  reachable  : ${r.ok ? "YES" : "NO"}`);
console.log(`  bytes recv : ${r.bytes}`);
console.log(`  note       : ${r.note}`);
if (r.mix) {
  console.log(`  latestHour : ${r.latestHour ?? "?"}`);
  console.log(`  mix (MW)   : ${Object.entries(r.mix).map(([k, v]) => `${k} ${v}`).join("  ")}`);
  console.log(`  intensity  : ${r.intensity?.toFixed(1)} gCO2/kWh`);
}
if (!r.ok) {
  console.log(`\n  (Non-fatal: the product falls back to cached data — exactly this path.)`);
}
console.log("");

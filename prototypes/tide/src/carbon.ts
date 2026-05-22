import type { FuelMix, FuelType } from "./types.ts";

// Lifecycle emission factors, gCO2eq/kWh. IPCC AR5 (2014) WG3 Annex III medians.
// GAS = combined-cycle median; OTHER assumed oil/fossil-heavy (conservative upper bound).
//
// Production note (verified 2026-05-22): these are AVERAGE factors. A defensible build switches
// to MARGINAL factors — the generator that actually ramps when you add/shed load. For Ontario
// the marginal factor is ~150 gCO2/kWh vs the ~50 g/kWh grid average (TAF, 2015 IESO basis), so
// the on-peak hour you shift AWAY from is dirtier than the average implies. Electricity Maps
// discontinued its marginal product in 2025 — compute marginal yourself from the IESO hourly
// fuel mix (see ieso.ts). Average is fine for the spike; the COST saving is exact regardless.
export const EMISSION_FACTORS: Record<FuelType, number> = {
  NUCLEAR: 12,
  HYDRO: 24,
  WIND: 11,
  SOLAR: 41,
  GAS: 490,
  BIOFUEL: 230,
  OTHER: 700,
};

/** Grid carbon intensity (gCO2/kWh) for one hour's fuel mix. */
export function intensityFromMix(mix: FuelMix): number {
  let energy = 0;
  let emissions = 0;
  for (const fuel of Object.keys(mix) as FuelType[]) {
    const mw = mix[fuel] ?? 0;
    energy += mw;
    emissions += mw * EMISSION_FACTORS[fuel];
  }
  return energy > 0 ? emissions / energy : 0;
}

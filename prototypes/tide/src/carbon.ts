import type { FuelMix, FuelType } from "./types.ts";

// Lifecycle emission factors, gCO2eq/kWh. IPCC AR5 (2014) WG3 Annex III medians.
// GAS = combined-cycle median; OTHER assumed oil/fossil-heavy (conservative upper bound).
// Production note: a defensible build would switch to MARGINAL factors (what actually
// ramps when you add/shed load), not these average factors. Average is fine for the spike.
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

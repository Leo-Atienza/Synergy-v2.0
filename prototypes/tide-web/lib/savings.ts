import type { WindowChoice } from "@/lib/types";

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

export interface RunSaving {
  dollarsSaved: number;
  kgCO2Saved: number;
}

export function perRun(chosen: WindowChoice, baseline: WindowChoice): RunSaving {
  return {
    dollarsSaved: round(baseline.costDollars - chosen.costDollars),
    kgCO2Saved: round((baseline.carbonGrams - chosen.carbonGrams) / 1000),
  };
}

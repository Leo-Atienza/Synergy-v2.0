import type { WindowChoice } from "./types.ts";

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

export interface RunSaving {
  dollarsSaved: number;
  kgCO2Saved: number;
}

/** What Tide saved on a single run vs the naive "charge on plug-in" baseline. */
export function perRun(chosen: WindowChoice, baseline: WindowChoice): RunSaving {
  return {
    dollarsSaved: round(baseline.costDollars - chosen.costDollars),
    kgCO2Saved: round((baseline.carbonGrams - chosen.carbonGrams) / 1000),
  };
}

export interface Scenario {
  name: string;
  perRunDollars: number;
  runsPerYear: number;
  annualDollars: number;
}

// On-peak -> overnight delta on the ULO plan: the cleanest headline number.
const DELTA_ONPEAK_OVERNIGHT = 0.391 - 0.039; // = $0.352 / kWh

/** Annualized savings if each load shifts off the 4–9pm on-peak block to overnight. */
export function annualScenarios(): Scenario[] {
  const s = (name: string, kwhPerRun: number, runsPerYear: number, delta = DELTA_ONPEAK_OVERNIGHT): Scenario => {
    const perRunDollars = round(kwhPerRun * delta);
    return { name, perRunDollars, runsPerYear, annualDollars: round(perRunDollars * runsPerYear) };
  };
  return [
    s("EV full charge (~50 kWh, L2)", 50, 100),
    s("EV nightly top-up (~9 kWh, L1)", 9, 250),
    s("Window AC overnight pre-cool (~6 kWh)", 6, 120),
    s("Dishwasher (~1.5 kWh)", 1.5, 260),
    s("Dehumidifier (~5 kWh)", 5, 180),
  ];
}

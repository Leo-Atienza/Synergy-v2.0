// Shared types for the Tide viability spike.

export type FuelType =
  | "NUCLEAR"
  | "GAS"
  | "HYDRO"
  | "WIND"
  | "SOLAR"
  | "BIOFUEL"
  | "OTHER";

/** Megawatts produced by each fuel in one hour. */
export type FuelMix = Record<FuelType, number>;

export type RatePlan = "ULO" | "TOU" | "TIERED";

/** One hour of the grid: the fuel mix plus everything derived from it. */
export interface HourSample {
  hour: number; // 0..23
  mix: FuelMix;
  intensity: number; // gCO2/kWh, derived from mix
  priceULO: number; // $/kWh on the ULO plan
  priceTOU: number; // $/kWh on the TOU plan
}

export interface DayProfile {
  date: string;
  weekday: boolean;
  hours: HourSample[]; // length 24
}

/** A shiftable load the user plugs into Tide. */
export interface Load {
  name: string;
  watts: number; // power draw while running
  durationHours: number; // how long it needs to run
  earliestHour: number; // can't start before this (absolute hour; 18 = 6pm plug-in)
  deadlineHour: number; // must finish by this (absolute; may exceed 24 = next morning)
}

/** The optimizer's answer: when to run. */
export interface WindowChoice {
  startHour: number; // 0..23, for display
  endHour: number; // 0..23, for display
  startAbsHour: number; // absolute index in the horizon (>=24 means next day)
  costDollars: number;
  carbonGrams: number;
  score: number; // cost + lambda * carbonKg
}

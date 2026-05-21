export type FuelType =
  | "NUCLEAR"
  | "GAS"
  | "HYDRO"
  | "WIND"
  | "SOLAR"
  | "BIOFUEL"
  | "OTHER";

export type FuelMix = Record<FuelType, number>;

export type RatePlan = "ULO" | "TOU" | "TIERED";

export interface HourSample {
  hour: number;
  mix: FuelMix;
  intensity: number;
  priceULO: number;
  priceTOU: number;
}

export interface DayProfile {
  date: string;
  weekday: boolean;
  hours: HourSample[];
}

export interface Load {
  name: string;
  watts: number;
  durationHours: number;
  earliestHour: number;
  deadlineHour: number;
}

export interface WindowChoice {
  startHour: number;
  endHour: number;
  startAbsHour: number;
  costDollars: number;
  carbonGrams: number;
  score: number;
}

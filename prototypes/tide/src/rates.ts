import type { RatePlan } from "./types.ts";

// Ontario OEB Regulated Price Plan. Dollars per kWh. Verified against the OEB 2026-05-22.
// Prices are now set ANNUALLY: this schedule holds Nov 1 2025 – Oct 31 2026. The May 1 2026
// switch changed only TOU on-peak TIMING (-> midday, chasing A/C load) and the Tiered threshold
// (1000 -> 600 kWh/mo). ULO prices AND windows are unchanged year-round. Refresh next Nov 1.
// Source: https://www.oeb.ca/consumer-information-and-protection/electricity-rates
export const ULO_RATES = {
  overnight: 0.039, // every day 23:00–07:00
  weekendOffPeak: 0.098, // weekends/holidays 07:00–23:00
  midPeak: 0.157, // weekdays 07:00–16:00 and 21:00–23:00
  onPeak: 0.391, // weekdays 16:00–21:00  <-- ~10x the overnight rate
};

export const TOU_RATES = {
  offPeak: 0.098,
  midPeak: 0.157,
  onPeak: 0.203,
};

export interface Price {
  dollars: number;
  period: string;
}

export function uloPrice(hour: number, weekday: boolean): Price {
  if (hour >= 23 || hour < 7) return { dollars: ULO_RATES.overnight, period: "overnight" };
  if (!weekday) return { dollars: ULO_RATES.weekendOffPeak, period: "weekend" };
  if (hour >= 16 && hour < 21) return { dollars: ULO_RATES.onPeak, period: "ON-PEAK" };
  return { dollars: ULO_RATES.midPeak, period: "mid-peak" };
}

export function touPrice(hour: number, weekday: boolean): Price {
  // Simplified summer TOU schedule (the spike's headline plan is ULO).
  if (!weekday || hour >= 19 || hour < 7) return { dollars: TOU_RATES.offPeak, period: "off-peak" };
  if (hour >= 11 && hour < 17) return { dollars: TOU_RATES.onPeak, period: "on-peak" };
  return { dollars: TOU_RATES.midPeak, period: "mid-peak" };
}

export function priceAt(hour: number, weekday: boolean, plan: RatePlan): Price {
  const h = ((Math.floor(hour) % 24) + 24) % 24;
  if (plan === "TOU") return touPrice(h, weekday);
  if (plan === "TIERED") return { dollars: 0.12, period: "tiered" }; // Tier 1 flat (12.0¢; 600 kWh/mo summer, 1000 winter)
  return uloPrice(h, weekday);
}

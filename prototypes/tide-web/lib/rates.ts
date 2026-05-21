import type { RatePlan } from "@/lib/types";

// Ontario OEB Regulated Price Plan, effective Nov 1 2025 – Apr 30 2026 ($/kWh).
export const ULO_RATES = {
  overnight: 0.039,
  weekendOffPeak: 0.098,
  midPeak: 0.157,
  onPeak: 0.391,
};

export const TOU_RATES = { offPeak: 0.098, midPeak: 0.157, onPeak: 0.203 };

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
  if (!weekday || hour >= 19 || hour < 7) return { dollars: TOU_RATES.offPeak, period: "off-peak" };
  if (hour >= 11 && hour < 17) return { dollars: TOU_RATES.onPeak, period: "on-peak" };
  return { dollars: TOU_RATES.midPeak, period: "mid-peak" };
}

export function priceAt(hour: number, weekday: boolean, plan: RatePlan): Price {
  const h = ((Math.floor(hour) % 24) + 24) % 24;
  if (plan === "TOU") return touPrice(h, weekday);
  if (plan === "TIERED") return { dollars: 0.114, period: "tiered" };
  return uloPrice(h, weekday);
}

import type { DayProfile, Load, WindowChoice } from "./types.ts";

// THE BRAIN. Pure functions, no I/O, fully unit-testable.

export interface Slot {
  absHour: number; // absolute hour index (may exceed 23 for the next day)
  price: number; // $/kWh
  intensity: number; // gCO2/kWh
}

/**
 * Assemble the feasible timeline from plug-in (earliest) to deadline, wrapping past
 * midnight. Spike assumption: the same day profile repeats for the next day — fine
 * for an overnight charge; production would fetch the real next-day forecast.
 */
export function buildHorizon(day: DayProfile, load: Load, plan: "ULO" | "TOU"): Slot[] {
  const slots: Slot[] = [];
  for (let h = load.earliestHour; h <= load.deadlineHour; h++) {
    const idx = ((h % 24) + 24) % 24;
    const sample = day.hours[idx]!;
    slots.push({
      absHour: h,
      price: plan === "TOU" ? sample.priceTOU : sample.priceULO,
      intensity: sample.intensity,
    });
  }
  return slots;
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Pick the contiguous run-window minimizing (cost + lambda * carbonKg).
 * lambda is a shadow carbon price in $/kg CO2: 0 = pure cost, higher = greener.
 */
export function chooseWindow(slots: Slot[], load: Load, lambda = 0): WindowChoice {
  const kw = load.watts / 1000;
  const dur = Math.ceil(load.durationHours);
  let best: WindowChoice | null = null;

  for (let i = 0; i + dur <= slots.length; i++) {
    let cost = 0;
    let grams = 0;
    for (let j = i; j < i + dur; j++) {
      cost += kw * slots[j]!.price;
      grams += kw * slots[j]!.intensity;
    }
    const score = cost + lambda * (grams / 1000);
    if (!best || score < best.score) {
      const startAbs = slots[i]!.absHour;
      best = {
        startHour: startAbs % 24,
        endHour: (slots[i + dur - 1]!.absHour + 1) % 24,
        startAbsHour: startAbs,
        costDollars: round(cost),
        carbonGrams: Math.round(grams),
        score,
      };
    }
  }
  if (!best) throw new Error("infeasible: window longer than the available horizon");
  return best;
}

/** The naive baseline: start the instant you plug in and run straight through. */
export function baselineNow(slots: Slot[], load: Load): WindowChoice {
  const kw = load.watts / 1000;
  const dur = Math.min(Math.ceil(load.durationHours), slots.length);
  let cost = 0;
  let grams = 0;
  for (let j = 0; j < dur; j++) {
    cost += kw * slots[j]!.price;
    grams += kw * slots[j]!.intensity;
  }
  return {
    startHour: slots[0]!.absHour % 24,
    endHour: (slots[dur - 1]!.absHour + 1) % 24,
    startAbsHour: slots[0]!.absHour,
    costDollars: round(cost),
    carbonGrams: Math.round(grams),
    score: cost,
  };
}

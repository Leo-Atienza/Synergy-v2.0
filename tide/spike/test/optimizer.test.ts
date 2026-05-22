import { test } from "node:test";
import assert from "node:assert/strict";
import { buildHorizon, chooseWindow, baselineNow } from "../src/optimizer.ts";
import { loadSampleDay } from "../src/ieso.ts";
import type { Load } from "../src/types.ts";

const ev: Load = {
  name: "ev",
  watts: 1440,
  durationHours: 6,
  earliestHour: 18,
  deadlineHour: 31,
};

test("optimizer picks an overnight (cheapest) window, not the plug-in hour", () => {
  const day = loadSampleDay();
  const horizon = buildHorizon(day, ev, "ULO");
  const smart = chooseWindow(horizon, ev, 0);
  const start = smart.startHour;
  // Overnight band is 23:00–07:00.
  assert.ok(start >= 23 || start <= 1, `expected an overnight start, got ${start}:00`);
});

test("the smart window is cheaper than charging on plug-in", () => {
  const day = loadSampleDay();
  const horizon = buildHorizon(day, ev, "ULO");
  const naive = baselineNow(horizon, ev);
  const smart = chooseWindow(horizon, ev, 0);
  assert.ok(
    smart.costDollars < naive.costDollars,
    `smart $${smart.costDollars} should beat naive $${naive.costDollars}`,
  );
});

test("raising lambda never increases carbon", () => {
  const day = loadSampleDay();
  const horizon = buildHorizon(day, ev, "ULO");
  const costOnly = chooseWindow(horizon, ev, 0);
  const greener = chooseWindow(horizon, ev, 1.0);
  assert.ok(greener.carbonGrams <= costOnly.carbonGrams + 1e-6);
});

test("infeasible window throws", () => {
  const day = loadSampleDay();
  const tooLong: Load = { ...ev, durationHours: 100 };
  const horizon = buildHorizon(day, tooLong, "ULO");
  assert.throws(() => chooseWindow(horizon, tooLong, 0));
});

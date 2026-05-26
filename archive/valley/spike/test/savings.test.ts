import { test } from "node:test";
import assert from "node:assert/strict";
import { annualScenarios, perRun } from "../src/savings.ts";
import type { WindowChoice } from "../src/types.ts";

test("EV full charge saves $17.60/run (50 kWh x $0.352 delta)", () => {
  const ev = annualScenarios().find((s) => s.name.includes("EV full"));
  assert.ok(ev);
  assert.equal(ev.perRunDollars, 17.6);
});

test("perRun computes positive savings when baseline costs more", () => {
  const chosen: WindowChoice = {
    startHour: 0, endHour: 6, startAbsHour: 24, costDollars: 0.34, carbonGrams: 300, score: 0.34,
  };
  const baseline: WindowChoice = {
    startHour: 18, endHour: 24, startAbsHour: 18, costDollars: 2.2, carbonGrams: 900, score: 2.2,
  };
  const r = perRun(chosen, baseline);
  assert.equal(r.dollarsSaved, 1.86);
  assert.equal(r.kgCO2Saved, 0.6);
});

test("every scenario has a positive annual number", () => {
  for (const s of annualScenarios()) {
    assert.ok(s.annualDollars > 0, `${s.name} should save money`);
  }
});

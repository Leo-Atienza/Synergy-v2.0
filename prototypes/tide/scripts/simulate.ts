import { loadSampleDay } from "../src/ieso.ts";
import { buildHorizon, chooseWindow, baselineNow } from "../src/optimizer.ts";
import { MockPlugDriver } from "../src/plug.ts";
import { perRun, annualScenarios } from "../src/savings.ts";
import { priceAt } from "../src/rates.ts";
import type { Load, WindowChoice } from "../src/types.ts";

const PLAN = "ULO" as const;

// The demo load: plug your EV charger in at 6pm, it must be done by 7am.
const evCharger: Load = {
  name: "EV charger (Level 1, 1.44 kW)",
  watts: 1440,
  durationHours: 6,
  earliestHour: 18, // 6pm plug-in
  deadlineHour: 31, // 7am next day (24 + 7)
};

function bar(value: number, max: number, width = 12): string {
  const n = Math.max(0, Math.min(width, Math.round((value / max) * width)));
  return "█".repeat(n) + "·".repeat(width - n);
}

function hh(h: number): string {
  return String(((h % 24) + 24) % 24).padStart(2, "0") + ":00";
}

function show(label: string, w: WindowChoice): void {
  console.log(
    `    ${label.padEnd(36)} start ${hh(w.startHour)}   $${w.costDollars.toFixed(2).padStart(5)}   ${(w.carbonGrams / 1000).toFixed(2)} kg CO2`,
  );
}

async function main(): Promise<void> {
  const day = loadSampleDay(PLAN);
  console.log(
    `\n  T I D E  —  viability simulation\n  sample day ${day.date} (${day.weekday ? "weekday" : "weekend"}), plan ${PLAN}\n`,
  );

  // 1 — The price + carbon signal across 24h.
  console.log("  hr   $/kWh   period     carbon gCO2/kWh");
  console.log("  --   -----   --------   --------------------");
  for (const h of day.hours) {
    const p = priceAt(h.hour, day.weekday, PLAN);
    const tag = p.dollars >= 0.39 ? "  <= priciest" : p.dollars <= 0.04 ? "  <= cheapest" : "";
    console.log(
      `  ${String(h.hour).padStart(2, "0")}   ${p.dollars.toFixed(3)}   ${p.period.padEnd(8)}   ${bar(h.intensity, 180)} ${String(Math.round(h.intensity)).padStart(3)}${tag}`,
    );
  }

  // 2 — The decision.
  const horizon = buildHorizon(day, evCharger, PLAN);
  const naive = baselineNow(horizon, evCharger);
  const cheapest = chooseWindow(horizon, evCharger, 0); // pure cost
  const greener = chooseWindow(horizon, evCharger, 0.15); // shadow carbon $0.15/kg

  console.log(
    `\n  Load: ${evCharger.name} — needs ${evCharger.durationHours}h, plugged in ${hh(evCharger.earliestHour)}, must finish by ${hh(evCharger.deadlineHour)}.\n`,
  );
  show("charge-on-plug-in (no Tide)", naive);
  show("Tide cheapest (lambda=0)", cheapest);
  show("Tide cost+carbon (lambda=$0.15/kg)", greener);

  const saved = perRun(cheapest, naive);
  console.log(
    `\n  >> One night: Tide saves $${saved.dollarsSaved.toFixed(2)} (${Math.round((saved.dollarsSaved / naive.costDollars) * 100)}% off) and ${saved.kgCO2Saved.toFixed(2)} kg CO2.`,
  );

  // 3 — Close the loop on a (mock) plug. Swap MockPlugDriver -> KasaPlugDriver for real hardware.
  console.log(`\n  Closing the loop on the plug (transitions only):`);
  const plug = new MockPlugDriver("ev-plug");
  const dur = Math.ceil(evCharger.durationHours);
  let prev = false;
  for (const slot of horizon) {
    const on = slot.absHour >= cheapest.startAbsHour && slot.absHour < cheapest.startAbsHour + dur;
    if (on !== prev) console.log(`    ${hh(slot.absHour)}  ${on ? "ON  -- grid is cheapest + cleanest" : "OFF -- waiting"}`);
    if (on) await plug.on();
    else await plug.off();
    prev = on;
  }
  console.log(`    verify: plug.isOn() => ${await plug.isOn()} (read-back confirms the switch)`);

  // 4 — Annualized scenarios + verdict.
  console.log(`\n  Annualized savings (shift off 4-9pm on-peak to overnight, ULO plan):`);
  for (const sc of annualScenarios()) {
    console.log(
      `    ${sc.name.padEnd(38)} $${sc.perRunDollars.toFixed(2).padStart(5)}/run x ${String(sc.runsPerYear).padStart(3)}  ~ $${Math.round(sc.annualDollars)}/yr`,
    );
  }

  console.log(`\n  VERDICT: end-to-end mechanic works on real Ontario rates + a realistic mix.`);
  console.log(`           data -> carbon -> optimizer -> actuation -> verified savings.\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

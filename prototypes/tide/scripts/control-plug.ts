import { fetchLatestFuelMix, loadSampleDay } from "../src/ieso.ts";
import { buildHorizon, chooseWindow } from "../src/optimizer.ts";
import { KasaPlugDriver } from "../src/plug-kasa.ts";
import type { Load } from "../src/types.ts";

// Drive a REAL TP-Link Kasa plug. The last viability risk: hardware on a real LAN.
//   npm i tplink-smarthome-api          (already a dep once you've run this)
//   npm run plug -- 192.168.1.50        (your plug's LAN IP)
// It fetches the live grid, computes today's cheapest+cleanest window, and switches
// the plug for the CURRENT hour. Safe + one-shot — no infinite loop.

const host = process.argv[2] ?? process.env.TIDE_PLUG_IP;

const load: Load = {
  name: "demo load",
  watts: 1440,
  durationHours: 6,
  earliestHour: 18,
  deadlineHour: 31,
};

async function main(): Promise<void> {
  if (!host) {
    console.error("\n  usage: npm run plug -- <plug-ip>   e.g.  npm run plug -- 192.168.1.50\n");
    process.exit(1);
  }
  console.log(`\n  T I D E  —  real plug control  ->  ${host}\n`);

  const day = loadSampleDay();
  const horizon = buildHorizon(day, load, "ULO");
  const win = chooseWindow(horizon, load, 0);

  const live = await fetchLatestFuelMix();
  console.log(`  live grid : ${live.ok ? `${live.intensity?.toFixed(1)} gCO2/kWh` : live.note}`);
  console.log(`  plan      : run ${String(win.startHour).padStart(2, "0")}:00 for ${load.durationHours}h (cheapest + cleanest)`);

  let plug: KasaPlugDriver;
  try {
    plug = await KasaPlugDriver.connect(host);
  } catch (err) {
    console.error(`\n  could not reach a plug at ${host}: ${(err as Error).message}`);
    console.error(`  (install the driver first:  npm i tplink-smarthome-api )\n`);
    process.exit(2);
  }

  const nowHour = new Date().getHours();
  const dur = Math.ceil(load.durationHours);
  let inWindow = false;
  for (let k = 0; k < dur; k++) {
    if ((win.startAbsHour + k) % 24 === nowHour) inWindow = true;
  }

  try {
    if (inWindow) {
      await plug.on();
      console.log(`  it is ${String(nowHour).padStart(2, "0")}:00 — inside the window -> PLUG ON`);
    } else {
      await plug.off();
      console.log(`  it is ${String(nowHour).padStart(2, "0")}:00 — outside the window -> PLUG OFF (waiting)`);
    }
    console.log(`  verify    : plug.isOn() => ${await plug.isOn()}\n`);
  } catch (err) {
    console.error(`  reached the plug but could not switch it: ${(err as Error).message}\n`);
    process.exit(3);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

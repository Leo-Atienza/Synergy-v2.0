import { fetchLatestFuelMix, loadSampleDay } from "../src/ieso.ts";
import { buildHorizon, chooseWindow } from "../src/optimizer.ts";
import { KasaPlugDriver } from "../src/plug-kasa.ts";
import { ShellyPlugDriver } from "../src/plug-shelly.ts";
import type { PlugDriver } from "../src/plug.ts";
import type { Load } from "../src/types.ts";

// Drive a REAL plug. The last viability risk: hardware on a real LAN.
//   npm run plug -- 192.168.8.50            (Shelly — recommended, zero deps, local RPC)
//   npm run plug -- 192.168.1.50 kasa       (Kasa — needs `npm i tplink-smarthome-api`)
// It fetches the live grid, computes today's cheapest+cleanest window, and switches
// the plug for the CURRENT hour. Safe + one-shot — no infinite loop.

const host = process.argv[2] ?? process.env.TIDE_PLUG_IP;
const driverKind = (process.argv[3] ?? process.env.TIDE_PLUG ?? "shelly").toLowerCase();

const load: Load = {
  name: "demo load",
  watts: 1440,
  durationHours: 6,
  earliestHour: 18,
  deadlineHour: 31,
};

async function main(): Promise<void> {
  if (!host) {
    console.error("\n  usage: npm run plug -- <plug-ip> [shelly|kasa]   e.g.  npm run plug -- 192.168.8.50\n");
    process.exit(1);
  }
  console.log(`\n  T I D E  —  real plug control  ->  ${driverKind} @ ${host}\n`);

  const day = loadSampleDay();
  const horizon = buildHorizon(day, load, "ULO");
  const win = chooseWindow(horizon, load, 0);

  const live = await fetchLatestFuelMix();
  console.log(`  live grid : ${live.ok ? `${live.intensity?.toFixed(1)} gCO2/kWh` : live.note}`);
  console.log(`  plan      : run ${String(win.startHour).padStart(2, "0")}:00 for ${load.durationHours}h (cheapest + cleanest)`);

  let plug: PlugDriver;
  try {
    plug =
      driverKind === "kasa"
        ? await KasaPlugDriver.connect(host)
        : await ShellyPlugDriver.connect(host);
  } catch (err) {
    console.error(`\n  could not reach a ${driverKind} plug at ${host}: ${(err as Error).message}`);
    console.error(
      driverKind === "kasa"
        ? `  (install the driver first:  npm i tplink-smarthome-api )\n`
        : `  (Shelly: turn Cloud OFF in the plug's web UI and confirm it's on your LAN at ${host})\n`,
    );
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

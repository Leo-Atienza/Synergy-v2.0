import { KasaPlugDriver } from "../src/plug-kasa.ts";
import { ShellyPlugDriver } from "../src/plug-shelly.ts";
import type { PlugDriver } from "../src/plug.ts";

// The FIRST thing to run when the physical plug arrives — a pure hardware handshake,
// NO grid logic. It answers one question: can this laptop switch the plug on its LAN?
// (control-plug.ts answers the NEXT question: does the full decide -> actuate loop work.)
//   npm run plug:test -- 192.168.8.50          (Shelly — recommended, zero deps, local RPC)
//   npm run plug:test -- 192.168.1.50 kasa     (Kasa — needs `npm i tplink-smarthome-api`)
// Plug a LAMP into it so you can SEE the result: ON (held 2s) -> OFF, each read-back verified.

const host = process.argv[2] ?? process.env.TIDE_PLUG_IP;
const driverKind = (process.argv[3] ?? process.env.TIDE_PLUG ?? "shelly").toLowerCase();
const HOLD_MS = 2000; // keep it ON long enough to watch the lamp before switching off

async function check(plug: PlugDriver, want: boolean): Promise<boolean> {
  const got = await plug.isOn();
  const ok = got === want;
  console.log(`  ${ok ? "ok  " : "FAIL"}: read-back -> ${got ? "ON" : "OFF"} (wanted ${want ? "ON" : "OFF"})`);
  return ok;
}

async function main(): Promise<void> {
  if (!host) {
    console.error("\n  usage: npm run plug:test -- <plug-ip> [shelly|kasa]   e.g.  npm run plug:test -- 192.168.8.50\n");
    process.exit(1);
  }
  console.log(`\n  T I D E  —  plug self-test  ->  ${driverKind} @ ${host}\n`);

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

  let pass = true;
  try {
    await plug.on();
    console.log("  -> sent ON   (watch the lamp)");
    pass = (await check(plug, true)) && pass;

    await new Promise((resolve) => setTimeout(resolve, HOLD_MS));

    await plug.off();
    console.log("  -> sent OFF");
    pass = (await check(plug, false)) && pass;
  } catch (err) {
    console.error(`\n  reached the plug but could not switch it: ${(err as Error).message}\n`);
    process.exit(3);
  }

  console.log(
    pass
      ? "\n  PASS — the LAN control path works end to end. Safe to wire into the demo.\n"
      : "\n  FAIL — sent the command but read-back disagreed. Fix the plug/LAN before trusting the demo.\n",
  );
  process.exit(pass ? 0 : 4);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

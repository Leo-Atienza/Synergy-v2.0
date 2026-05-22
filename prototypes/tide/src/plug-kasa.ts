import type { PlugDriver } from "./plug.ts";

// REAL hardware driver — proves the closed loop is a drop-in swap.
// Requires: `npm i tplink-smarthome-api` AND a TP-Link Kasa plug on the same LAN.
//
// ⚠️ 2026-05-22: prefer ShellyPlugDriver (plug-shelly.ts) for the stage. TP-Link's newer
// KLAP firmware can require your TP-Link CLOUD credentials even for "local" control, and
// recent firmware has disabled the local port on some models entirely. If you must use Kasa,
// pick an OLDER single plug (KP115/HS103/EP10), factory-reset it, and never connect it to the
// Kasa app/cloud so it stays on the legacy local protocol (no creds). Shelly avoids all of this.
//
//   import { KasaPlugDriver } from "./plug-kasa.ts";
//   const plug = await KasaPlugDriver.connect("192.168.1.50");
//   await plug.on();  console.log(await plug.isOn());
//
// Why local control matters: venue Wi-Fi will betray a cloud demo. The LAN path survives it.

export class KasaPlugDriver implements PlugDriver {
  readonly name: string;
  #plug: { setPowerState(on: boolean): Promise<unknown>; getPowerState(): Promise<boolean> };

  private constructor(
    name: string,
    plug: { setPowerState(on: boolean): Promise<unknown>; getPowerState(): Promise<boolean> },
  ) {
    this.name = name;
    this.#plug = plug;
  }

  static async connect(host: string, name = "kasa"): Promise<KasaPlugDriver> {
    // @ts-ignore optional dependency, installed only when you have hardware
    const { Client } = await import("tplink-smarthome-api");
    const plug = new Client().getPlug({ host });
    return new KasaPlugDriver(name, plug);
  }

  async on(): Promise<void> {
    await this.#plug.setPowerState(true);
  }

  async off(): Promise<void> {
    await this.#plug.setPowerState(false);
  }

  async isOn(): Promise<boolean> {
    return this.#plug.getPowerState();
  }
}

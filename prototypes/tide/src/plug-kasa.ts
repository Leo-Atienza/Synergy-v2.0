import type { PlugDriver } from "./plug.ts";

// REAL hardware driver — proves the closed loop is a drop-in swap.
// Requires: `npm i tplink-smarthome-api` AND a TP-Link Kasa plug (e.g. KP125, EP25)
// on the same LAN. Local control — no cloud account, no OAuth, ~50ms switch.
//
// Not imported anywhere by default, so the spike installs with zero runtime deps.
//
//   import { KasaPlugDriver } from "./plug-kasa.ts";
//   const plug = await KasaPlugDriver.connect("192.168.1.50");
//   await plug.on();  console.log(await plug.isOn());
//
// Why local control matters: venue Wi-Fi will betray a cloud demo. The LAN path
// survives it. Sonoff (Tasmota) and Shelly expose equivalent local HTTP APIs.

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

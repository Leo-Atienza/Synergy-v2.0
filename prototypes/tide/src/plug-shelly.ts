import type { PlugDriver } from "./plug.ts";

// RECOMMENDED real driver for a stage demo (verified 2026-05-22).
// Shelly Gen2+ plugs (Plug US Gen4 / Plus Plug US) expose a documented LOCAL JSON-RPC
// HTTP API with NO cloud account and auth OFF by default — turn "Cloud" off in the web
// UI and control stays fully on-LAN. Zero npm deps: uses Node's global fetch.
//
// Preferred over Kasa (plug-kasa.ts): TP-Link's newer KLAP firmware can demand cloud
// credentials even for "local" control. Shelly removes that whole failure class.
//
//   import { ShellyPlugDriver } from "./plug-shelly.ts";
//   const plug = await ShellyPlugDriver.connect("192.168.8.50"); // a static-reserved LAN IP
//   await plug.on();  console.log(await plug.isOn());
//
// API: GET http://<ip>/rpc/Switch.Set?id=0&on=true|false ; /rpc/Switch.GetStatus?id=0 -> { output }.
// Venue Wi-Fi will betray a cloud demo — run the plug + laptop on your own travel router
// with a reserved IP, and keep MockPlugDriver as the screen-only fallback.

export class ShellyPlugDriver implements PlugDriver {
  readonly name: string;
  readonly #base: string;
  readonly #id: number;

  private constructor(name: string, base: string, id: number) {
    this.name = name;
    this.#base = base;
    this.#id = id;
  }

  /** host = the plug's LAN IP (or full http://ip). Probes once so an unreachable plug fails fast. */
  static async connect(host: string, name = "shelly", switchId = 0): Promise<ShellyPlugDriver> {
    const base = host.startsWith("http") ? host.replace(/\/+$/, "") : `http://${host}`;
    const driver = new ShellyPlugDriver(name, base, switchId);
    await driver.isOn(); // reachability probe — throws if the plug isn't on the LAN
    return driver;
  }

  async #rpc(method: string, params: Record<string, string> = {}): Promise<unknown> {
    const qs = new URLSearchParams({ id: String(this.#id), ...params }).toString();
    const res = await fetch(`${this.#base}/rpc/${method}?${qs}`, {
      signal: AbortSignal.timeout(2000), // don't let a flaky stage LAN hang the demo
    });
    if (!res.ok) throw new Error(`Shelly ${method} -> HTTP ${res.status}`);
    return res.json();
  }

  async on(): Promise<void> {
    await this.#rpc("Switch.Set", { on: "true" });
  }

  async off(): Promise<void> {
    await this.#rpc("Switch.Set", { on: "false" });
  }

  async isOn(): Promise<boolean> {
    const body = (await this.#rpc("Switch.GetStatus")) as { output?: boolean };
    return body.output === true;
  }
}

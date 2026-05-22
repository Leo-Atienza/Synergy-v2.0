import { readFileSync } from "node:fs";
import type { DayProfile, FuelMix, FuelType, HourSample, RatePlan } from "./types.ts";
import { intensityFromMix } from "./carbon.ts";
import { priceAt } from "./rates.ts";

const FUELS: FuelType[] = ["NUCLEAR", "GAS", "HYDRO", "WIND", "SOLAR", "BIOFUEL", "OTHER"];
const IESO_FUEL_URL =
  "https://reports-public.ieso.ca/public/GenOutputbyFuelHourly/PUB_GenOutputbyFuelHourly.xml";

export interface LiveResult {
  ok: boolean;
  bytes: number;
  latestHour?: number;
  mix?: FuelMix;
  intensity?: number;
  note: string;
}

function emptyMix(): FuelMix {
  return { NUCLEAR: 0, GAS: 0, HYDRO: 0, WIND: 0, SOLAR: 0, BIOFUEL: 0, OTHER: 0 };
}

/**
 * Probe the live IESO feed and parse the most recent hour's fuel mix.
 * Spike-grade parser (regex over the last <HourlyData> block). Production should
 * use fast-xml-parser. Never throws — returns a structured result either way, which
 * is exactly the graceful-degradation behaviour the real product needs.
 */
export async function fetchLatestFuelMix(): Promise<LiveResult> {
  try {
    const res = await fetch(IESO_FUEL_URL, { signal: AbortSignal.timeout(15000) });
    const xml = await res.text();
    const bytes = xml.length;
    if (!res.ok) return { ok: false, bytes, note: `HTTP ${res.status}` };

    const blocks = xml.split("<HourlyData>");
    const last = blocks[blocks.length - 1] ?? "";
    const mix = emptyMix();
    let matched = 0;
    for (const fuel of FUELS) {
      const re = new RegExp(`${fuel}[\\s\\S]*?<Output>\\s*([\\d.]+)`, "i");
      const m = last.match(re);
      if (m) {
        mix[fuel] = Number(m[1]);
        matched++;
      }
    }
    const hourMatch = last.match(/<Hour>\s*(\d+)/i);
    if (matched === 0) {
      return {
        ok: false,
        bytes,
        note: "reached IESO but parsed 0 fuels (schema drift — swap in a real XML parser)",
      };
    }
    return {
      ok: true,
      bytes,
      latestHour: hourMatch ? Number(hourMatch[1]) : undefined,
      mix,
      intensity: intensityFromMix(mix),
      note: `parsed ${matched}/${FUELS.length} fuels from the last HourlyData block`,
    };
  } catch (err) {
    return { ok: false, bytes: 0, note: `fetch failed: ${(err as Error).message}` };
  }
}

/** Load the cached realistic sample day and derive intensity + prices through the live pipeline. */
export function loadSampleDay(plan: RatePlan = "ULO"): DayProfile {
  void plan; // prices for all plans are precomputed per hour; plan is selected at optimize time
  const url = new URL("../data/sample-day.json", import.meta.url);
  const raw = JSON.parse(readFileSync(url, "utf8")) as {
    date: string;
    weekday: boolean;
    hours: { hour: number; mix: FuelMix }[];
  };
  const hours: HourSample[] = raw.hours.map((h) => ({
    hour: h.hour,
    mix: h.mix,
    intensity: intensityFromMix(h.mix),
    priceULO: priceAt(h.hour, raw.weekday, "ULO").dollars,
    priceTOU: priceAt(h.hour, raw.weekday, "TOU").dollars,
  }));
  return { date: raw.date, weekday: raw.weekday, hours };
}

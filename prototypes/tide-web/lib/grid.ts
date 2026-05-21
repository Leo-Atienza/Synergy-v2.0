import type { DayProfile, FuelMix, FuelType, HourSample } from "@/lib/types";
import { intensityFromMix } from "@/lib/carbon";
import { priceAt } from "@/lib/rates";
import { SAMPLE_DAY } from "@/lib/sample-day";

/** The deterministic demo day, with intensity + prices derived through the live pipeline. */
export function getDay(): DayProfile {
  const hours: HourSample[] = SAMPLE_DAY.hours.map((h) => ({
    hour: h.hour,
    mix: h.mix,
    intensity: intensityFromMix(h.mix),
    priceULO: priceAt(h.hour, SAMPLE_DAY.weekday, "ULO").dollars,
    priceTOU: priceAt(h.hour, SAMPLE_DAY.weekday, "TOU").dollars,
  }));
  return { date: SAMPLE_DAY.date, weekday: SAMPLE_DAY.weekday, hours };
}

const FUELS: FuelType[] = ["NUCLEAR", "GAS", "HYDRO", "WIND", "SOLAR", "BIOFUEL", "OTHER"];
const IESO_URL =
  "https://reports-public.ieso.ca/public/GenOutputbyFuelHourly/PUB_GenOutputbyFuelHourly.xml";

/** Real-time Ontario grid carbon intensity, or null if the feed is unreachable. */
export async function getLiveIntensity(): Promise<number | null> {
  try {
    const res = await fetch(IESO_URL, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const xml = await res.text();
    const last = xml.split("<HourlyData>").pop() ?? "";
    const mix: FuelMix = { NUCLEAR: 0, GAS: 0, HYDRO: 0, WIND: 0, SOLAR: 0, BIOFUEL: 0, OTHER: 0 };
    let matched = 0;
    for (const f of FUELS) {
      const m = last.match(new RegExp(`${f}[\\s\\S]*?<Output>\\s*([\\d.]+)`, "i"));
      if (m) {
        mix[f] = Number(m[1]);
        matched++;
      }
    }
    if (matched === 0) return null;
    return Math.round(intensityFromMix(mix) * 10) / 10;
  } catch {
    return null;
  }
}

import type { Metadata } from "next";
import { getDay, getLiveIntensity } from "@/lib/grid";
import { buildHorizon, chooseWindow, baselineNow } from "@/lib/optimizer";
import { perRun } from "@/lib/savings";
import type { Load } from "@/lib/types";
import TideScreen from "../tide-screen";

// Render per request so the live grid reading is always fresh (and the build needs no network).
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tide — only ever pay 3.9¢",
  description:
    "A $15 plug that shifts a renter's load to Ontario's 3.9¢ overnight window automatically — no behaviour change.",
};

const LOAD: Load = {
  name: "Window AC (cool overnight, 1.2 kW)",
  watts: 1200,
  durationHours: 5,
  earliestHour: 18,
  deadlineHour: 31,
};

export default async function DevicePage() {
  const day = getDay();
  const horizon = buildHorizon(day, LOAD, "ULO");
  const smart = chooseWindow(horizon, LOAD, 0);
  const naive = baselineNow(horizon, LOAD);
  const saving = perRun(smart, naive);
  const live = await getLiveIntensity();

  const hours = day.hours.map((h) => ({
    hour: h.hour,
    price: h.priceULO,
    intensity: Math.round(h.intensity),
  }));

  return (
    <TideScreen
      hours={hours}
      startAbsHour={smart.startAbsHour}
      durationHours={Math.ceil(LOAD.durationHours)}
      nightSavedDollars={saving.dollarsSaved}
      nightSavedKg={saving.kgCO2Saved}
      baselineDollars={naive.costDollars}
      smartDollars={smart.costDollars}
      liveIntensity={live}
    />
  );
}

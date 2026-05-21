import { getDay, getLiveIntensity } from "@/lib/grid";
import { buildHorizon, chooseWindow, baselineNow } from "@/lib/optimizer";
import { perRun } from "@/lib/savings";
import type { Load } from "@/lib/types";
import TideScreen from "./tide-screen";

// Render per request so the live grid reading is always fresh (and the build needs no network).
export const dynamic = "force-dynamic";

const LOAD: Load = {
  name: "EV charger (Level 1, 1.44 kW)",
  watts: 1440,
  durationHours: 6,
  earliestHour: 18,
  deadlineHour: 31,
};

export default async function Page() {
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

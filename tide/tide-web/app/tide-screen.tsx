"use client";

import { useState } from "react";

type Hour = { hour: number; price: number; intensity: number };

interface Props {
  hours: Hour[];
  startAbsHour: number;
  durationHours: number;
  nightSavedDollars: number;
  nightSavedKg: number;
  baselineDollars: number;
  smartDollars: number;
  liveIntensity: number | null;
}

const TEAL = "#0e7d77";
const BLUE = "#1e5f8c";
const PEAK = "#c84b1f";
const colorFor = (p: number): string => (p >= 0.39 ? PEAK : p <= 0.04 ? TEAL : BLUE);
const pad = (n: number): string => String(n).padStart(2, "0");

export default function TideScreen(props: Props) {
  const { hours, startAbsHour, durationHours } = props;
  const [scrub, setScrub] = useState(18);

  const windowHours = new Set<number>();
  for (let k = 0; k < durationHours; k++) windowHours.add((startAbsHour + k) % 24);

  const cur = hours[scrub] ?? hours[0]!;
  const go = windowHours.has(scrub);
  const pct = Math.round((props.nightSavedDollars / props.baselineDollars) * 100);
  const maxI = Math.max(...hours.map((h) => h.intensity));

  const reason = go
    ? " · cheapest + cleanest"
    : cur.price >= 0.39
      ? " · the priciest hours — hold off"
      : " · wait for overnight";

  return (
    <main className="wrap">
      <div className="card">
        <header className="head">
          <span className="brand">TIDE</span>
          <span className="live">
            {props.liveIntensity != null
              ? `Ontario grid now · ${props.liveIntensity} gCO₂/kWh`
              : "live grid · unavailable"}
          </span>
        </header>

        <div className={`verb ${go ? "go" : "wait"}`}>{go ? "GO NOW" : "WAIT"}</div>

        <p className="sub">
          {pad(scrub)}:00 · <b>${cur.price.toFixed(3)}/kWh</b> · {cur.intensity} gCO{"₂"}/kWh
          {reason}
        </p>

        <div className="strip">
          {hours.map((h) => (
            <div
              key={h.hour}
              className={`bar ${h.hour === scrub ? "now" : ""}`}
              style={{ background: colorFor(h.price), height: `${18 + (h.intensity / maxI) * 70}%` }}
              title={`${pad(h.hour)}:00 — $${h.price.toFixed(3)} · ${h.intensity} gCO₂/kWh`}
            />
          ))}
        </div>
        <div className="axis">
          <span>12a</span>
          <span>6a</span>
          <span>12p</span>
          <span>6p</span>
          <span>11p</span>
        </div>

        <input
          className="scrub"
          type="range"
          min={0}
          max={23}
          value={scrub}
          onChange={(e) => setScrub(Number(e.target.value))}
          aria-label="Hour of day"
        />

        <div className="tally">
          <div>
            <b>${props.nightSavedDollars.toFixed(2)}</b>
            <span>saved tonight · {pct}% off</span>
          </div>
          <div>
            <b>{props.nightSavedKg.toFixed(2)} kg</b>
            <span>CO{"₂"} avoided</span>
          </div>
        </div>

        <p className="foot">
          EV charger plugged in at 6pm, due by 7am. Tide waits for the overnight window ($
          {props.smartDollars.toFixed(2)}) instead of charging on plug-in (${props.baselineDollars.toFixed(2)}).
          Demo fixture: Ontario summer weekday, ULO plan. Top-right reading is live from IESO.
        </p>
      </div>
    </main>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { PEEL_FSA, PEEL_BY_FSA, burdenColor, BURDEN_COLORS, INTERVENTION_LABEL } from "@/lib/peel-data";

type Feature = { type: string; properties: Record<string, unknown>; geometry: unknown };
type Geo = { type: "FeatureCollection"; features: Feature[] };

const W = 820;
const H = 640;

const codeOf = (f: Feature): string | undefined =>
  (f.properties?.fsa as string | undefined) ?? (f.properties?.CFSAUID as string | undefined);

// Pre-select the worst FSA (with real data) so the panel and the map lead with the reveal.
const ranked = PEEL_FSA.filter((f) => f.hasData).sort((a, b) => b.burdenScore - a.burdenScore);
const topFsa = ranked.length ? ranked[0]!.fsa : null;

export default function MapScreen() {
  const [geo, setGeo] = useState<Geo | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(topFsa);

  useEffect(() => {
    fetch("/peel-fsa.geojson")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((g: Geo) => setGeo(g))
      .catch((e) => setErr(String(e)));
  }, []);

  const pathGen = useMemo(() => {
    if (!geo) return null;
    const proj = geoMercator().fitExtent(
      [
        [16, 16],
        [W - 16, H - 16],
      ],
      geo as never,
    );
    return geoPath(proj);
  }, [geo]);

  const stat = selected ? PEEL_BY_FSA[selected] : undefined;

  return (
    <main className="map-page">
      <div className="map-head">
        <span className="brand">TIDE</span>
        <a className="map-link" href="/">
          see the fix on a real plug →
        </a>
      </div>

      <h1 className="map-title">Peel’s energy-burden map</h1>
      <p className="map-strap">
        Ontario’s cheapest rate (3.9¢ overnight) is a 3&nbsp;a.m. trap for renters who can’t shift their use — and a
        locked door for those whose landlord picks the building’s plan. Here’s where the burden lands hardest across
        Mississauga, Brampton &amp; Caledon, and which fix each neighbourhood actually needs.
      </p>

      <div className="map-grid">
        <div>
          {err && <div className="map-empty">Couldn’t load map geometry ({err}).</div>}
          {!err && !geo && <div className="map-empty">Loading Peel neighbourhoods…</div>}
          {geo && pathGen && (
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="map-svg"
              role="img"
              aria-label="Choropleth of energy burden by Peel forward sortation area"
            >
              {geo.features.map((f, i) => {
                const code = codeOf(f);
                const s = code ? PEEL_BY_FSA[code] : undefined;
                const sel = !!code && code === selected;
                return (
                  <path
                    key={code ?? i}
                    d={pathGen(f as never) ?? ""}
                    className={`fsa ${sel ? "sel" : ""}`}
                    fill={burdenColor(s ? s.burdenBucket : null)}
                    onClick={() => code && setSelected(code)}
                  >
                    <title>
                      {code}
                      {s ? ` — burden ${s.burdenScore}/100` : ""}
                    </title>
                  </path>
                );
              })}
              {selected &&
                (() => {
                  const f = geo.features.find((x) => codeOf(x) === selected);
                  if (!f) return null;
                  const [cx, cy] = pathGen.centroid(f as never);
                  if (!isFinite(cx) || !isFinite(cy)) return null;
                  return (
                    <text className="fsa-label" x={cx} y={cy}>
                      {selected}
                    </text>
                  );
                })()}
            </svg>
          )}
        </div>

        <aside>
          {stat && stat.hasData ? (
            <div className="detail">
              <h2>{stat.name}</h2>
              <div className="score" style={{ color: burdenColor(stat.burdenBucket) }}>
                {stat.burdenScore}
                <span className="score-suffix">/100</span>
              </div>
              <div className="score-cap">energy-burden index (relative within Peel)</div>
              {stat.population != null && (
                <div className="stat-row">
                  <span>Population (2021)</span>
                  <b>{stat.population.toLocaleString()}</b>
                </div>
              )}
              {stat.medianHouseholdIncome != null && (
                <div className="stat-row">
                  <span>Median household income</span>
                  <b>${stat.medianHouseholdIncome.toLocaleString()}</b>
                </div>
              )}
              {stat.renterPct != null && (
                <div className="stat-row">
                  <span>Renter households</span>
                  <b>{stat.renterPct.toFixed(0)}%</b>
                </div>
              )}
              {stat.electricHeatPct != null && (
                <div className="stat-row">
                  <span>Heat with electricity</span>
                  <b>{stat.electricHeatPct.toFixed(0)}%</b>
                </div>
              )}
              {stat.apartmentPct != null && (
                <div className="stat-row">
                  <span>Apartment dwellings</span>
                  <b>{stat.apartmentPct.toFixed(0)}%</b>
                </div>
              )}
              <div className={`badge ${stat.intervention}`}>{INTERVENTION_LABEL[stat.intervention]}</div>
              <p className="note">{stat.interventionNote}</p>
            </div>
          ) : stat ? (
            <div className="detail">
              <h2>{stat.name}</h2>
              <p className="note">{stat.interventionNote}</p>
            </div>
          ) : (
            <div className="detail">
              <h2>Click a neighbourhood</h2>
              <p className="note">
                {PEEL_FSA.length === 0
                  ? "Loading census attributes…"
                  : "Select an FSA to see its energy-burden index and the fix it needs."}
              </p>
            </div>
          )}

          <div className="legend">
            <div className="legend-row legend-head">Energy burden</div>
            {["lowest", "low", "moderate", "high", "highest"].map((label, i) => (
              <div className="legend-row" key={label}>
                <span className="legend-sw" style={{ background: BURDEN_COLORS[i]! }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <p className="map-foot">
        Data: Statistics Canada 2021 Census (98-401-X) — household income, tenure, primary heating fuel and dwelling
        type, by forward sortation area · IESO measured hourly consumption by FSA · OEB Regulated Price Plan (ULO)
        rates. The burden index is a relative composite of renter share, (inverse) median income and electric-heat
        exposure across Peel FSAs — not an absolute dollar figure. Intervention routing is a transparent heuristic
        (apartment share proxies sub-metering; electric-heat share proxies un-shiftable load).
      </p>
    </main>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { toHub, type Hub, type HubGeo, type Verification, HVI_COLORS, HVI_LABEL } from "@/lib/hubs";

type Feature = { type: string; properties: Record<string, unknown>; geometry: unknown };
type Geo = { type: "FeatureCollection"; features: Feature[] };

const W = 760;
const H = 720;

const tag = (s: Verification) => `tag tag-${s}`;
const TAG_TEXT: Record<Verification, string> = {
  verified: "verified",
  modelled: "modelled",
  pending: "pending",
};

export default function Page() {
  const [base, setBase] = useState<Geo | null>(null);
  const [hubs, setHubs] = useState<Hub[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  // Lead with the reveal: pre-select the hand-verified hero (rank 1).
  const [selectedRank, setSelectedRank] = useState<number>(1);

  useEffect(() => {
    Promise.all([
      fetch("/peel-fsa.geojson").then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status} (Peel base)`)))),
      fetch("/candidate-hubs.geojson").then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status} (hubs)`)))),
    ])
      .then(([b, h]: [Geo, HubGeo]) => {
        setBase(b);
        setHubs(h.features.map(toHub).sort((a, z) => a.rank - z.rank));
      })
      .catch((e) => setErr(String(e)));
  }, []);

  // Fit the projection to the Peel base geometry so hub lon/lat land correctly.
  const proj = useMemo(() => {
    if (!base) return null;
    return geoMercator().fitExtent(
      [
        [24, 24],
        [W - 24, H - 24],
      ],
      base as never,
    );
  }, [base]);

  const pathGen = useMemo(() => (proj ? geoPath(proj) : null), [proj]);

  const top5 = hubs ? hubs.slice(0, 5) : [];
  const selected = hubs?.find((h) => h.rank === selectedRank) ?? null;

  return (
    <main className="page">
      <header className="masthead">
        <div className="brand">
          <span className="brand-mark">SANCTUARY</span>
          <span className="brand-sub">Peel resilience hubs · heat-first triage</span>
        </div>
        <div className="masthead-q">
          Harden only five buildings before the next heat wave —<br />
          <strong>which five?</strong>
        </div>
      </header>

      <section className="stage">
        <div className="map-wrap">
          {err && <div className="map-empty">Couldn’t load map data ({err}).</div>}
          {!err && (!base || !hubs) && <div className="map-empty">Loading Peel geography…</div>}
          {base && hubs && proj && pathGen && (
            <svg viewBox={`0 0 ${W} ${H}`} className="map-svg" role="img" aria-label="Map of Peel with candidate resilience hubs ranked by heat vulnerability">
              <defs>
                <radialGradient id="heatGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d8392b" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#d8392b" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Base geography: Peel FSAs as neutral context, no fabricated shading. */}
              {base.features.map((f, i) => (
                <path key={i} d={pathGen(f as never) ?? ""} className="fsa" />
              ))}

              {/* Heat glow behind top-quintile hubs — visualizes each hub's own HVI rating. */}
              {hubs
                .filter((h) => h.hvi >= 4)
                .map((h) => {
                  const pt = proj([h.lon, h.lat]);
                  if (!pt) return null;
                  const r = h.hvi === 5 ? 46 : 30;
                  return <circle key={`glow-${h.rank}`} cx={pt[0]} cy={pt[1]} r={r} fill="url(#heatGlow)" />;
                })}

              {/* Hub pins, colored by verified HVI quintile. */}
              {hubs.map((h) => {
                const pt = proj([h.lon, h.lat]);
                if (!pt) return null;
                const sel = h.rank === selectedRank;
                return (
                  <g key={h.rank} className={`pin ${sel ? "pin-sel" : ""}`} onClick={() => setSelectedRank(h.rank)}>
                    <circle cx={pt[0]} cy={pt[1]} r={sel ? 13 : 9} fill={HVI_COLORS[h.hvi]} className="pin-dot" />
                    {h.rank <= 5 && (
                      <text x={pt[0]} y={pt[1]} className="pin-rank" dy="0.35em">
                        {h.rank}
                      </text>
                    )}
                    <title>
                      {h.name} — HVI {h.hvi} ({HVI_LABEL[h.hvi]})
                    </title>
                  </g>
                );
              })}
            </svg>
          )}

          <div className="legend">
            <span className="legend-head">Heat Vulnerability Index</span>
            {[5, 4, 3, 2, 1].map((q) => (
              <span className="legend-row" key={q}>
                <span className="legend-sw" style={{ background: HVI_COLORS[q] }} />
                {q} · {HVI_LABEL[q]}
              </span>
            ))}
          </div>
        </div>

        <aside className="rail">
          {selected ? <DetailPanel hub={selected} /> : <div className="detail">Loading…</div>}

          <div className="ranked">
            <div className="ranked-head">Top five to harden first</div>
            {top5.map((h) => (
              <button
                key={h.rank}
                className={`ranked-row ${h.rank === selectedRank ? "ranked-sel" : ""}`}
                onClick={() => setSelectedRank(h.rank)}
              >
                <span className="ranked-num">{h.rank}</span>
                <span className="ranked-name">{h.name}</span>
                <span className="ranked-hvi" style={{ color: HVI_COLORS[h.hvi] }}>
                  HVI {h.hvi}
                </span>
              </button>
            ))}
            <p className="ranked-note">
              Rank is hand-verified, not machine-sorted. A building can’t enter the top five on a modelled estimate alone.
            </p>
          </div>
        </aside>
      </section>

      <footer className="foot">
        <span>
          Siting + Heat Vulnerability Index quintiles: <strong>verified</strong> against the public Peel HVI feature
          service and each building’s official page. Reachable population, rooftop, and solar figures are{" "}
          <strong>modelled or pending</strong> — labelled as such, never presented as measured. Region of Peel · Esri
          Canada · Alectra GRE&T fit.
        </span>
      </footer>
    </main>
  );
}

function DetailPanel({ hub }: { hub: Hub }) {
  return (
    <div className="detail">
      <div className="detail-rank">#{hub.rank} candidate hub</div>
      <h1 className="detail-name">{hub.name}</h1>
      <div className="detail-meta">
        {hub.typeLabel} · {hub.municipality}
      </div>
      <div className="detail-addr">{hub.address}</div>

      <div className="detail-score">
        <span className="detail-score-num" style={{ color: HVI_COLORS[hub.hvi] }}>
          {hub.score}
        </span>
        <span className="detail-score-suffix">/100</span>
        <span className="detail-score-cap">provisional hub score</span>
      </div>

      <div className="breakdown">
        {hub.breakdown.map((r) => (
          <div className="bd-row" key={r.label}>
            <div className="bd-top">
              <span className="bd-label">{r.label}</span>
              <span className="bd-weight">{r.weightPct}%</span>
            </div>
            <div className="bd-bar">
              <div className="bd-fill" style={{ width: `${Math.round(r.fraction * 100)}%` }} />
            </div>
            <div className="bd-bottom">
              <span className="bd-bucket">{r.bucket}</span>
              <span className={tag(r.status)}>{TAG_TEXT[r.status]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="facts">
        <div className="fact">
          <span className="fact-k">Reachable population</span>
          <span className="fact-v">
            {hub.reachablePopulation === "pending" ? "catchment pending" : hub.reachablePopulation}{" "}
            <span className={tag(hub.reachablePopulation === "pending" ? "pending" : "modelled")}>
              {hub.reachablePopulation === "pending" ? "pending" : "modelled"}
            </span>
          </span>
        </div>
        <div className="fact">
          <span className="fact-k">Rooftop class</span>
          <span className="fact-v">
            {hub.roofClass} <span className={tag("modelled")}>modelled</span>
          </span>
        </div>
        <div className="fact">
          <span className="fact-k">Adaptive capacity</span>
          <span className="fact-v">
            quintile {hub.adaptiveCapacity} <span className={tag("verified")}>verified</span>
          </span>
        </div>
      </div>

      <p className="detail-why">{hub.notes}</p>
      <a className="detail-src" href={hub.sourceUrl} target="_blank" rel="noreferrer">
        official building page ↗
      </a>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { toHub, type Hub, type HubGeo, type Verification, HVI_COLORS, HVI_LABEL } from "@/lib/hubs";

type Feature = { type: string; properties: Record<string, unknown>; geometry: unknown };
type Geo = { type: "FeatureCollection"; features: Feature[] };
type TabId = "overview" | "problem" | "map" | "method" | "evidence" | "future";

const W = 760;
const H = 720;

const tag = (s: Verification) => `tag tag-${s}`;
const TAG_TEXT: Record<Verification, string> = {
  verified: "verified",
  modelled: "modelled",
  pending: "pending",
};

const ARCGIS_WEB_MAP =
  "https://senecatechnology.maps.arcgis.com/apps/mapviewer/index.html?webmap=17951a55fae44a83a330101433dda67a";

const METHOD_ROWS = [
  ["Heat risk nearby", "35%", "Is this building close to a high heat-risk area?"],
  ["People nearby", "25%", "Rough 500 m area for now, until better walkshed data is ready."],
  ["Community trust", "20%", "Is this a place people already know, visit, and trust?"],
  ["Roof / upgrade potential", "10%", "Could the building be checked for solar, battery, or backup-power upgrades?"],
  ["Useful building type", "10%", "Is it a public-facing place with a real community role?"],
] as const;

const REAL_VS_ESTIMATED = [
  ["Real", "Heat-risk layer, building names, addresses, source links, and HVI ratings."],
  ["Estimated", "Nearby reach, roof/upgrade class, and the first-pass score."],
  ["Needs checking", "Backup power, cooling capacity, electrical readiness, owner approval, and solar/battery sizing."],
] as const;

const HVI_INDICATORS = [
  ["Heat Vulnerability Index", "The overall heat-risk score for an area."],
  ["Exposure", "How much heat stress the area faces."],
  ["Sensitivity", "How strongly heat may affect people living there."],
  ["Adaptive Capacity", "How easily people can cool down, move, communicate, or get help."],
] as const;

const TABS: { id: TabId; label: string; kicker: string; title: string; body: string }[] = [
  {
    id: "overview",
    label: "Overview",
    kicker: "Project intro",
    title: "Sanctuary is a siting tool for public-good resilience hubs.",
    body:
      "It helps Peel, Alectra, and municipal partners decide which trusted buildings should be checked first for cooling, backup power, solar, battery, and emergency-readiness upgrades.",
  },
  {
    id: "problem",
    label: "Problem",
    kicker: "Why it matters",
    title: "Heat risk is mapped. The next safe building is not.",
    body:
      "Heat waves and outages hit unevenly. The people most at risk may not be close to an official cooling space, may not know where to go, or may not trust a distant facility during an emergency.",
  },
  {
    id: "map",
    label: "Map",
    kicker: "Live artifact",
    title: "The map turns a high-risk area into a ranked decision.",
    body:
      "Click candidate buildings to see HVI, rank, scoring reasons, and honesty labels. The ArcGIS Web Map remains the primary submission artifact; this tab is the polished explanation and fallback.",
  },
  {
    id: "method",
    label: "Data & Method",
    kicker: "How it works",
    title: "The ranking is intentionally transparent.",
    body:
      "Sanctuary combines Peel HVI, public building sources, community-trust role, a modelled 500 m catchment, and rough hardening suitability. The score explains the decision without pretending to be a site audit.",
  },
  {
    id: "evidence",
    label: "Impact Evidence",
    kicker: "Evidence-backed case",
    title: "Past events show why pre-identified trusted spaces matter.",
    body:
      "This is not a claim that Sanctuary would have prevented deaths. It is a planning argument: before an event, identify the buildings that should be checked, opened, upgraded, or used for outreach first.",
  },
  {
    id: "future",
    label: "Future",
    kicker: "Scalability",
    title: "The first list becomes a repeatable resilience-hub pipeline.",
    body:
      "After the hackathon, the same method can add walksheds, site audits, owner verification, funding checks, and operating status across more of Alectra's service territory.",
  },
];

const FUTURE_PHASES = [
  ["1", "Pick places", "Rank the first possible hubs using heat risk, trust, nearby reach, and building usefulness."],
  ["2", "Check readiness", "Confirm owners, accessibility, cooling, roof condition, and electrical readiness."],
  ["3", "Find funding", "Compare grants, tax-credit options, and rough upgrade costs."],
  ["4", "Run the network", "Track status, supplies, staffing, outage readiness, and later real energy data."],
] as const;

const OVERVIEW_POINTS = [
  ["For whom", "Municipal resilience planners, Alectra partners, public-health teams, and community organizations."],
  ["What it solves", "It converts heat vulnerability and trusted-place context into a short list of buildings to check first."],
  ["What it is not", "It is not claiming any site is equipped today, and it is not an engineering feasibility study."],
] as const;

const PROBLEM_POINTS = [
  ["Uneven risk", "Peel's HVI identifies where heat exposure, sensitivity, and coping capacity combine into higher risk."],
  ["Uneven access", "Cooling centres matter, but distance, hours, familiarity, mobility, and trust shape whether people can use them."],
  ["Outage overlap", "Heat, flooding, and storms can also cut power, turning cooling, charging, water, and communication into urgent needs."],
] as const;

const IMPACT_EVIDENCE = [
  [
    "Peel heat risk",
    "Peel says heat is one of the top five climate-related health hazards affecting residents and publishes HVI maps to identify more vulnerable areas.",
    "Sanctuary starts from that same HVI layer, then asks which trusted buildings near high-risk areas should be checked first.",
  ],
  [
    "Heat response guidance",
    "Public-health guidance emphasizes cooling spaces, targeted outreach, and making cooling centres welcoming and suitable for heat-vulnerable people.",
    "Sanctuary helps pre-select familiar civic and faith/community buildings before an alert is active.",
  ],
  [
    "2021 BC heat dome",
    "BC's heat dome caused hundreds of heat-related deaths, with risk concentrated among older adults, people living alone, and socially or materially deprived neighbourhoods.",
    "A Sanctuary-like layer would not replace home checks, but it would help prioritize nearby cooling and outreach infrastructure before temperatures spike.",
  ],
  [
    "May 2022 derecho",
    "The Ontario-Quebec derecho caused widespread outages, with local respite centres offering charging, showers, water, and emergency support.",
    "Solar/battery-ready community hubs would make those respite functions less ad hoc during prolonged outages.",
  ],
] as const;

const DEMO_STEPS = [
  ["0:00-0:30", "Heat risk is uneven", "Open on Peel HVI and a Malton high-risk pocket."],
  ["0:30-1:15", "Safe-place access is uneven", "Explain why distance, trust, open hours, and familiarity matter in an emergency."],
  ["1:15-2:15", "Hero click", "Click Malton Community Centre and Library and read the honesty labels."],
  ["2:15-3:20", "Ranking method", "Show heat risk, people nearby, trust, upgrade potential, and building usefulness."],
  ["3:20-4:20", "Ranked five", "Reveal the top five candidate hubs and the real-vs-estimated box."],
  ["4:20-5:00", "Scale the method", "Repeat across Alectra territory, then add readiness, funding, and operations layers."],
] as const;

const SOURCE_LINKS = [
  ["Peel Heat Vulnerability Index", "https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2"],
  ["Sanctuary ArcGIS Web Map", ARCGIS_WEB_MAP],
  ["Peel climate-health context", "https://peelregion.ca/about/climate-change/climate-change-health"],
  ["Ontario Marginalization Index", "https://www.publichealthontario.ca/en/data-and-analysis/health-equity/ontario-marginalization-index"],
  ["NRCan photovoltaic potential", "https://natural-resources.canada.ca/energy-sources/renewable-energy/photovoltaic-potential-solar-resource-maps-canada"],
] as const;

const TECH_STACK = [
  ["ArcGIS Web Map / Dashboard", "Primary evidence surface for HVI, welcome spaces, municipal context, and candidate hub points."],
  ["Next.js 16 + React 19", "Support showcase, ranked SVG map, source-backed explanation, and recording fallback."],
  ["D3 Geo", "Projects Peel geography and candidate points in the support site."],
  ["Static GeoJSON / CSV", "No backend; candidate data is auditable and demo-safe."],
] as const;

const HERO_LABELS = [
  "candidate hub, not currently equipped",
  "modelled 500 m estimate",
  "planning estimate, requires site audit",
] as const;

const QA = [
  ["Are these shelters today?", "No. They are possible future hubs that need follow-up checks."],
  ["Are the solar and battery numbers measured?", "No. They are planning estimates until a site audit checks the roof, electrical system, and building needs."],
  ["Are the nearby-population numbers exact?", "Not yet. The MVP uses a rough 500 m area unless a proper walking-distance analysis is completed."],
  ["Why include places of worship?", "Because resilience is also about trust, volunteers, local knowledge, and where people already gather."],
  ["Is this tokenizing faith communities?", "No. The list mixes civic and faith/community buildings and treats every site as a community asset."],
  ["Can Alectra use this?", "Yes as a planning concept: find promising community-energy sites before engineering and partner outreach."],
  ["Why not just build more official cooling centres?", "That may be part of the answer. Sanctuary helps decide where new or upgraded safe spaces protect vulnerable residents first."],
  ["What happens after the hackathon?", "Verify owners, replace rough circles with walking-distance maps, run site audits, compare funding paths, and repeat the method."],
] as const;

export default function Page() {
  const [base, setBase] = useState<Geo | null>(null);
  const [hubs, setHubs] = useState<Hub[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  // Lead with the reveal: pre-select the hand-verified hero (rank 1).
  const [selectedRank, setSelectedRank] = useState<number>(1);
  const [mapZoom, setMapZoom] = useState<number>(1);
  const [mapCenter, setMapCenter] = useState<{ x: number; y: number } | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef<{ clientX: number; clientY: number; x: number; y: number } | null>(null);

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
  const activeTabContent = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];

  const catchmentRadius = (h: Hub) => {
    if (!proj) return 0;
    const center = proj([h.lon, h.lat]);
    const north500m = proj([h.lon, h.lat + 0.0045]);
    if (!center || !north500m) return 0;
    return Math.max(14, Math.abs(center[1] - north500m[1]));
  };

  const selectedPoint = selected && proj ? proj([selected.lon, selected.lat]) : null;
  useEffect(() => {
    if (!selectedPoint) return;
    setMapCenter({ x: selectedPoint[0], y: selectedPoint[1] });
  }, [selectedRank, selectedPoint?.[0], selectedPoint?.[1]]);

  const clampMapCenter = (x: number, y: number, zoom = mapZoom) => {
    const viewW = W / zoom;
    const viewH = H / zoom;
    return {
      x: Math.min(Math.max(viewW / 2, x), W - viewW / 2),
      y: Math.min(Math.max(viewH / 2, y), H - viewH / 2),
    };
  };

  const mapViewBox = useMemo(() => {
    const viewW = W / mapZoom;
    const viewH = H / mapZoom;
    const centerX = mapCenter?.x ?? selectedPoint?.[0] ?? W / 2;
    const centerY = mapCenter?.y ?? selectedPoint?.[1] ?? H / 2;
    const x = Math.min(Math.max(0, centerX - viewW / 2), W - viewW);
    const y = Math.min(Math.max(0, centerY - viewH / 2), H - viewH);
    return `${x} ${y} ${viewW} ${viewH}`;
  }, [mapCenter, mapZoom, selectedPoint]);

  const selectCandidate = (rank: number) => {
    setSelectedRank(rank);
  };

  const beginPan = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (mapZoom <= 1) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const center = mapCenter ?? { x: selectedPoint?.[0] ?? W / 2, y: selectedPoint?.[1] ?? H / 2 };
    panStart.current = { clientX: e.clientX, clientY: e.clientY, x: center.x, y: center.y };
    setIsPanning(true);
  };

  const movePan = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (!panStart.current || mapZoom <= 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const viewW = W / mapZoom;
    const viewH = H / mapZoom;
    const dx = ((e.clientX - panStart.current.clientX) / rect.width) * viewW;
    const dy = ((e.clientY - panStart.current.clientY) / rect.height) * viewH;
    setMapCenter(clampMapCenter(panStart.current.x - dx, panStart.current.y - dy));
  };

  const endPan = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (panStart.current) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    panStart.current = null;
    setIsPanning(false);
  };

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

      <section className="hero">
        <div>
          <p className="eyebrow">Project Sanctuary · Seneca Energy Hackathon 2026</p>
          <h1>Harden these five Peel buildings first.</h1>
          <p className="hero-copy">
            Sanctuary turns heat vulnerability into a concrete public-good decision: start with Malton Community
            Centre and Library, then verify the next four named hubs before the next heat wave.
          </p>
          <div className="hero-actions">
            <a href="#showcase" className="btn btn-primary" onClick={() => setActiveTab("map")}>
              Explore the map
            </a>
            <a href={ARCGIS_WEB_MAP} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Open ArcGIS map
            </a>
          </div>
        </div>
        <div className="decision-card" aria-label="Sanctuary ranked decision summary">
          <span className="mission-kicker">The remembered answer</span>
          <p className="decision-question">If Peel can harden only five buildings first, which five?</p>
          <div className="hero-winner">
            <span className="hero-rank">#1</span>
            <div>
              <strong>Malton Community Centre and Library</strong>
              <span>3540 Morning Star Drive · HVI top quintile</span>
            </div>
          </div>
          <ol className="hero-top-five" aria-label="Top five candidate hubs">
            {(top5.length ? top5 : null)?.map((h) => (
              <li key={h.rank}>
                <span>#{h.rank}</span>
                {h.name}
              </li>
            )) ?? <li className="hero-loading">Loading ranked candidates...</li>}
          </ol>
          <div className="mission-proof">
            {HERO_LABELS.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase-strip" aria-label="Submission positioning">
        <span>ArcGIS StoryMap is the primary artifact.</span>
        <span>This site is the recording fallback and judge-facing evidence surface.</span>
        <span>No building is claimed to be equipped today.</span>
      </section>

      <section className="tab-shell" id="showcase" aria-labelledby="showcase-title">
        <div className="tab-intro">
          <div>
            <p className="eyebrow">{activeTabContent.kicker}</p>
            <h2 id="showcase-title">{activeTabContent.title}</h2>
          </div>
          <p>{activeTabContent.body}</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Sanctuary showcase sections">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`tab-button ${activeTab === tab.id ? "tab-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-panel" role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          {activeTab === "overview" && (
            <div className="tab-grid tab-grid-balanced">
              <article className="showcase-card showcase-card-large">
                <p className="eyebrow">What the project is</p>
                <h3>A public-good decision layer for community energy resilience.</h3>
                <p>
                  Sanctuary ranks real Peel buildings as candidate emergency resilience hubs. It starts with a
                  hand-verified top five, led by Malton Community Centre and Library, and keeps every claim labelled as
                  real, modelled, or pending.
                </p>
                <div className="layer-list">
                  <span>Heat vulnerability</span>
                  <span>Trusted buildings</span>
                  <span>Ranked first checks</span>
                  <span>Honest feasibility labels</span>
                </div>
              </article>
              <div className="stacked-cards">
                {OVERVIEW_POINTS.map(([label, body]) => (
                  <article className="showcase-card" key={label}>
                    <h3>{label}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === "problem" && (
            <div className="tab-grid">
              <article className="showcase-card showcase-card-large">
                <p className="eyebrow">The gap</p>
                <h3>Emergency maps often show risk or facilities. Sanctuary connects both into a decision.</h3>
                <p>
                  Peel already has strong heat-vulnerability data. The missing step is a practical, named list of places
                  to inspect before the event, so partners are not improvising the first safe space after the warning
                  starts.
                </p>
              </article>
              {PROBLEM_POINTS.map(([label, body]) => (
                <article className="showcase-card" key={label}>
                  <h3>{label}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          )}

          {activeTab === "map" && (
            <>
              <section className="stage" id="decision-map">
                <div className="map-wrap">
                  <div className="map-controls" aria-label="Map zoom controls">
                    <button type="button" onClick={() => setMapZoom((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}>
                      -
                    </button>
                    <label>
                      <span>Zoom</span>
                      <input
                        type="range"
                        min="1"
                        max="4"
                        step="0.25"
                        value={mapZoom}
                        onChange={(e) => setMapZoom(Number(e.target.value))}
                        aria-label="Map zoom"
                      />
                    </label>
                    <button type="button" onClick={() => setMapZoom((z) => Math.min(4, Number((z + 0.25).toFixed(2))))}>
                      +
                    </button>
                    <button
                      type="button"
                      className="map-reset"
                      onClick={() => {
                        setMapZoom(1);
                        setMapCenter(selectedPoint ? { x: selectedPoint[0], y: selectedPoint[1] } : null);
                      }}
                    >
                      Reset
                    </button>
                  </div>
                  {err && <div className="map-empty">Couldn’t load map data ({err}).</div>}
                  {!err && (!base || !hubs) && <div className="map-empty">Loading Peel geography...</div>}
                  {base && hubs && proj && pathGen && (
                    <svg
                      viewBox={mapViewBox}
                      className={`map-svg ${mapZoom > 1 ? "map-svg-pan" : ""} ${isPanning ? "map-svg-panning" : ""}`}
                      role="img"
                      aria-label="Map of Peel with candidate resilience hubs ranked by heat vulnerability"
                      onPointerDown={beginPan}
                      onPointerMove={movePan}
                      onPointerUp={endPan}
                      onPointerCancel={endPan}
                      onPointerLeave={endPan}
                    >
                      <defs>
                        <radialGradient id="heatGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#d8392b" stopOpacity="0.55" />
                          <stop offset="100%" stopColor="#d8392b" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      {base.features.map((f, i) => (
                        <path key={i} d={pathGen(f as never) ?? ""} className="fsa" />
                      ))}

                      {top5.map((h) => {
                        const pt = proj([h.lon, h.lat]);
                        if (!pt) return null;
                        return (
                          <circle
                            key={`catchment-${h.rank}`}
                            cx={pt[0]}
                            cy={pt[1]}
                            r={catchmentRadius(h)}
                            className={`catchment ${h.rank === selectedRank ? "catchment-sel" : ""}`}
                          />
                        );
                      })}

                      {hubs
                        .filter((h) => h.hvi >= 4)
                        .map((h) => {
                          const pt = proj([h.lon, h.lat]);
                          if (!pt) return null;
                          const r = h.hvi === 5 ? 46 : 30;
                          return <circle key={`glow-${h.rank}`} cx={pt[0]} cy={pt[1]} r={r} fill="url(#heatGlow)" />;
                        })}

                      {hubs.map((h) => {
                        const pt = proj([h.lon, h.lat]);
                        if (!pt) return null;
                        const sel = h.rank === selectedRank;
                        return (
                          <g
                            key={h.rank}
                            className={`pin ${sel ? "pin-sel" : ""}`}
                            role="button"
                            tabIndex={0}
                            aria-label={`Select ${h.name}`}
                            onClick={() => selectCandidate(h.rank)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") selectCandidate(h.rank);
                            }}
                          >
                            <circle cx={pt[0]} cy={pt[1]} r={sel ? 13 : 9} fill={HVI_COLORS[h.hvi]} className="pin-dot" />
                            {h.rank <= 5 && (
                              <text x={pt[0]} y={pt[1]} className="pin-rank" dy="0.35em">
                                {h.rank}
                              </text>
                            )}
                            <title>
                              {h.name} - HVI {h.hvi} ({HVI_LABEL[h.hvi]})
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
                    <span className="legend-row">
                      <span className="legend-ring" />
                      modelled 500 m catchment
                    </span>
                  </div>
                </div>

                <aside className="rail">
                  {selected ? <DetailPanel hub={selected} /> : <div className="detail">Loading...</div>}

                  <div className="ranked">
                    <div className="ranked-head">Top five to check first</div>
                    {top5.map((h) => (
                      <button
                        key={h.rank}
                        className={`ranked-row ${h.rank === selectedRank ? "ranked-sel" : ""}`}
                        onClick={() => selectCandidate(h.rank)}
                      >
                        <span className="ranked-num">{h.rank}</span>
                        <span className="ranked-name">{h.name}</span>
                        <span className="ranked-hvi" style={{ color: HVI_COLORS[h.hvi] }}>
                          HVI {h.hvi}
                        </span>
                      </button>
                    ))}
                    <p className="ranked-note">
                      Rank is hand-checked. A building cannot enter the top five from a rough estimate alone.
                    </p>
                  </div>
                </aside>
              </section>

              <section className="arcgis-panel" aria-labelledby="arcgis-title">
                <div className="section-copy">
                  <p className="eyebrow">Primary artifact</p>
                  <h2 id="arcgis-title">ArcGIS shows the risk. Sanctuary turns it into a choice.</h2>
                  <p>
                    The public ArcGIS map shows heat risk, welcome spaces, municipal boundaries, and candidate hub
                    points. This tab explains the map and provides a polished fallback for recording.
                  </p>
                  <a href={ARCGIS_WEB_MAP} target="_blank" rel="noreferrer" className="inline-link">
                    Open the live ArcGIS web map
                  </a>
                </div>
                <div className="artifact-frame">
                  <iframe title="Sanctuary ArcGIS web map" src={ARCGIS_WEB_MAP} loading="lazy" />
                </div>
              </section>
            </>
          )}

          {activeTab === "method" && (
            <>
              <section className="indicator-section" aria-labelledby="indicator-title">
                <div className="section-copy">
                  <p className="eyebrow">Heat evidence</p>
                  <h2 id="indicator-title">The HVI tells us where heat may hurt people first.</h2>
                  <p>
                    Sanctuary uses the HVI as the risk layer, then adds candidate places that people already recognize.
                  </p>
                </div>
                <div className="indicator-grid">
                  {HVI_INDICATORS.map(([label, body]) => (
                    <article className="indicator-card" key={label}>
                      <h3>{label}</h3>
                      <p>{body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="method-section" aria-labelledby="method-title">
                <div className="section-copy">
                  <p className="eyebrow">Scoring model</p>
                  <h2 id="method-title">Five plain factors, with every uncertain value labelled.</h2>
                  <p>
                    The score is a prioritization tool for first checks. It is not a final engineering study or a claim
                    that a building is ready today.
                  </p>
                </div>
                <div className="method-table">
                  {METHOD_ROWS.map(([label, weight, description]) => (
                    <div className="method-row" key={label}>
                      <span className="method-label">{label}</span>
                      <span className="method-weight">{weight}</span>
                      <span className="method-desc">{description}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="honesty-section" aria-labelledby="honesty-title">
                <div className="section-copy">
                  <p className="eyebrow">Real vs estimated</p>
                  <h2 id="honesty-title">The labels are part of the product.</h2>
                </div>
                <div className="honesty-grid">
                  {REAL_VS_ESTIMATED.map(([label, body]) => (
                    <article className="honesty-card" key={label}>
                      <h3>{label}</h3>
                      <p>{body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="candidate-section" aria-labelledby="candidate-title">
                <div className="section-copy">
                  <p className="eyebrow">Candidate set</p>
                  <h2 id="candidate-title">Ten real buildings, ranked for the first check.</h2>
                </div>
                <div className="candidate-table" role="table" aria-label="Candidate resilience hubs">
                  <div className="candidate-row candidate-head" role="row">
                    <span>Rank</span>
                    <span>Building</span>
                    <span>Municipality</span>
                    <span>HVI</span>
                    <span>Role</span>
                  </div>
                  {(hubs ?? []).map((h) => (
                    <button
                      className={`candidate-row ${h.rank <= 5 ? "candidate-top" : ""} ${
                        h.rank === selectedRank ? "candidate-selected" : ""
                      }`}
                      key={h.rank}
                      onClick={() => {
                        selectCandidate(h.rank);
                        setActiveTab("map");
                      }}
                      role="row"
                    >
                      <span>#{h.rank}</span>
                      <span>{h.name}</span>
                      <span>{h.municipality}</span>
                      <span>HVI {h.hvi}</span>
                      <span>{h.trustLabel}</span>
                    </button>
                  ))}
                  {!hubs && <div className="candidate-loading">Loading candidate buildings...</div>}
                </div>
              </section>
            </>
          )}

          {activeTab === "evidence" && (
            <>
              <div className="evidence-grid">
                {IMPACT_EVIDENCE.map(([label, observed, sanctuaryRole]) => (
                  <article className="evidence-card" key={label}>
                    <span>{label}</span>
                    <h3>What the event shows</h3>
                    <p>{observed}</p>
                    <h3>What Sanctuary adds before the event</h3>
                    <p>{sanctuaryRole}</p>
                  </article>
                ))}
              </div>

              <section className="source-section" aria-labelledby="source-title">
                <div className="section-copy">
                  <p className="eyebrow">Sources and stack</p>
                  <h2 id="source-title">Public data, simple code, no backend risk.</h2>
                </div>
                <div className="source-stack-grid">
                  <div className="source-list">
                    <h3>Source links</h3>
                    {SOURCE_LINKS.map(([label, url]) => (
                      <a key={label} href={url} target="_blank" rel="noreferrer">
                        {label}
                      </a>
                    ))}
                  </div>
                  <div className="stack-list">
                    <h3>Technical stack</h3>
                    {TECH_STACK.map(([label, body]) => (
                      <div key={label}>
                        <strong>{label}</strong>
                        <p>{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "future" && (
            <>
              <section className="future-section" aria-labelledby="future-title">
                <div className="section-copy">
                  <p className="eyebrow">Future operating model</p>
                  <h2 id="future-title">The bigger platform comes after the first decision works.</h2>
                  <p>
                    Live energy data, funding tools, and operations dashboards are future layers. They only make sense
                    after sites are checked and partners agree to participate.
                  </p>
                </div>
                <div className="phase-track">
                  {FUTURE_PHASES.map(([num, label, body]) => (
                    <article className="phase-card" key={num}>
                      <span>{num}</span>
                      <h3>{label}</h3>
                      <p>{body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="demo-section" aria-labelledby="demo-title">
                <div className="section-copy">
                  <p className="eyebrow">Five-minute demo</p>
                  <h2 id="demo-title">The story stays narrow: risk, gap, building, answer.</h2>
                </div>
                <div className="timeline">
                  {DEMO_STEPS.map(([time, label, body]) => (
                    <article className="timeline-step" key={time}>
                      <span>{time}</span>
                      <h3>{label}</h3>
                      <p>{body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="qa-section" aria-labelledby="qa-title">
                <div className="section-copy">
                  <p className="eyebrow">Judge Q&A</p>
                  <h2 id="qa-title">Short answers for the obvious hard questions.</h2>
                </div>
                <div className="qa-grid">
                  {QA.map(([q, a]) => (
                    <article className="qa-card" key={q}>
                      <h3>{q}</h3>
                      <p>{a}</p>
                    </article>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
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
      <h2 className="detail-name">{hub.name}</h2>
      <div className="detail-meta">
        {hub.typeLabel} · {hub.municipality}
      </div>
      <div className="detail-addr">{hub.address}</div>

      <div className="detail-score">
        <span className="detail-score-num" style={{ color: HVI_COLORS[hub.hvi] }}>
          {hub.score}
        </span>
        <span className="detail-score-suffix">/100</span>
        <span className="detail-score-cap">first-pass score</span>
      </div>

      <div className="honesty-strip">
        <span className={tag("verified")}>candidate hub</span>
        <span className={tag("pending")}>not currently equipped</span>
        <span className={tag("modelled")}>needs site check</span>
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
          <span className="fact-k">People nearby</span>
          <span className="fact-v">
            {hub.reachablePopulation === "pending" ? "catchment pending" : hub.reachablePopulation}{" "}
            <span className={tag(hub.reachablePopulation === "pending" ? "pending" : "modelled")}>
              {hub.reachablePopulation === "pending" ? "pending" : "modelled"}
            </span>
          </span>
        </div>
        <div className="fact">
          <span className="fact-k">Roof / upgrade class</span>
          <span className="fact-v">
            {hub.roofClass} <span className={tag("modelled")}>modelled</span>
          </span>
        </div>
        <div className="fact">
          <span className="fact-k">Ability to cope</span>
          <span className="fact-v">
            quintile {hub.adaptiveCapacity} <span className={tag("verified")}>verified</span>
          </span>
        </div>
      </div>

      <p className="detail-why">{hub.notes}</p>
      <p className="detail-caution">Solar, battery, cooling, and backup-power details are only planning ideas until the site is checked.</p>
      <a className="detail-src" href={hub.sourceUrl} target="_blank" rel="noreferrer">
        official building page ↗
      </a>
    </div>
  );
}

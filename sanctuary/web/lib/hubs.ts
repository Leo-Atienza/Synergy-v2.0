// Sanctuary hub data model + transparent scoring.
//
// Ranking discipline (see sanctuary/data/scoring-notes.md): the displayed rank is
// the HAND-VERIFIED `rank_seed`, never derived from an unverifiable estimate. The
// score breakdown below is a transparency aid — it shows HOW each factor contributes,
// not a machine ranking that overrides human judgement.

export type Verification = "verified" | "modelled" | "pending";

// Raw shape as it sits in candidate-hubs.geojson (every value is a string).
type RawProps = {
  rank_seed: string;
  name: string;
  address: string;
  type: string;
  municipality: string;
  source_url: string;
  hvi_quintile: string;
  exposure_quintile: string;
  sensitivity_quintile: string;
  adaptive_capacity_quintile: string;
  catchment_method: string;
  reachable_population_est: string;
  roof_area_class: string;
  solar_potential_est: string;
  facility_suitability: string;
  trust_role: string;
  verification_status: string;
  notes: string;
  backup_power_status: string;
  flood_status: string;
  winter_vuln: string;
};

export type Hub = {
  rank: number;
  name: string;
  address: string;
  municipality: string;
  lon: number;
  lat: number;
  sourceUrl: string;
  hvi: number; // 1..5 — Peel Heat Vulnerability Index quintile
  exposure: number;
  sensitivity: number;
  adaptiveCapacity: number;
  typeLabel: string;
  trustRole: "civic_anchor" | "faith_community_anchor" | string;
  trustLabel: string;
  roofClass: "small" | "medium" | "large" | string;
  facility: "low" | "medium" | "high" | string;
  reachablePopulation: string; // "pending" today — kept honest
  catchmentMethod: string;
  solarPotential: string;
  backupPower: string; // "pending" for all — no candidate has confirmed backup power
  flood: string; // honest relationship to the TRCA regulatory floodplain (computed offline)
  floodEvidence: Verification; // tag derived from the flood status string
  winterVuln: number; // ON-Marg 2021 Material Resources quintile of the building's CT (1..5, 5 = most marginalized)
  yearRound: boolean; // genuinely high on BOTH heat (HVI >= 4) and winter / energy burden (>= 4)
  notes: string;
  // Transparent score, 0..100. Provisional while catchment population is pending.
  score: number;
  breakdown: ScoreRow[];
};

export type ScoreRow = {
  label: string;
  weightPct: number;
  bucket: string;
  // normalized 0..1 contribution of this factor before weighting
  fraction: number;
  status: Verification;
};

// Heat-anchored quintile ramp: cool slate-teal (low) → ember red (top quintile).
export const HVI_COLORS: Record<number, string> = {
  1: "#3f6f8f",
  2: "#5a8f8a",
  3: "#d8a23a",
  4: "#e07533",
  5: "#d8392b",
};

export const HVI_LABEL: Record<number, string> = {
  1: "low",
  2: "low-moderate",
  3: "moderate",
  4: "high",
  5: "top quintile",
};

// Winter / energy-burden ramp: a cool indigo-to-violet sequential scale, deliberately
// distinct from the HVI red-orange ramp and the flood water-blue. Encodes the ON-Marg
// 2021 Material Resources quintile (1 = low marginalization, 5 = high).
export const WINTER_COLORS: Record<number, string> = {
  1: "#3d3a6e",
  2: "#574f9c",
  3: "#7a63c0",
  4: "#9a7ad8",
  5: "#bb9bf2",
};

export const WINTER_LABEL: Record<number, string> = {
  1: "low",
  2: "low-moderate",
  3: "moderate",
  4: "high",
  5: "highest",
};

const TYPE_LABEL: Record<string, string> = {
  community_centre_library: "Community centre + library",
  community_centre: "Community centre",
  place_of_worship: "Place of worship",
  school: "School",
  library: "Library",
};

const TRUST_LABEL: Record<string, string> = {
  civic_anchor: "Civic anchor",
  faith_community_anchor: "Faith / community anchor",
};

const TRUST_WEIGHTVAL: Record<string, number> = {
  civic_anchor: 1,
  faith_community_anchor: 0.7,
};

const ROOF_WEIGHTVAL: Record<string, number> = { large: 1, medium: 0.6, small: 0.3 };
const FACILITY_WEIGHTVAL: Record<string, number> = { high: 1, medium: 0.6, low: 0.3 };

function n(v: string): number {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}

// Map the honest flood_status string (set offline in the data files) to its
// evidence tag. Prefixes are controlled: computed against TRCA Layer 6 (the
// regulatory floodline) + the CVC Credit River Watershed boundary, 2026-05-28.
function floodTag(s: string): Verification {
  if (s.startsWith("within")) return "verified"; // inside a TRCA flood polygon
  if (s.startsWith("~")) return "modelled"; // computed proximity to the nearest floodline
  if (s.startsWith("outside")) return "verified"; // verified outside every TRCA polygon
  return "pending"; // "not mapped by TRCA ..." — Credit watershed, CVC's jurisdiction
}

// Five-factor model from scoring-notes.md. Population (25%) is still pending real
// catchment work, so we proxy it with exposure × sensitivity quintiles and mark the
// row "modelled" — the panel renders that honestly rather than hiding it.
function scoreHub(p: RawProps): { score: number; breakdown: ScoreRow[] } {
  const hvi = n(p.hvi_quintile);
  const exposure = n(p.exposure_quintile);
  const sensitivity = n(p.sensitivity_quintile);

  const heatFrac = hvi / 5;
  const popFrac = (exposure / 5) * 0.6 + (sensitivity / 5) * 0.4;
  const trustFrac = TRUST_WEIGHTVAL[p.trust_role] ?? 0.5;
  const roofFrac = ROOF_WEIGHTVAL[p.roof_area_class] ?? 0.5;
  const facilityFrac = FACILITY_WEIGHTVAL[p.facility_suitability] ?? 0.5;

  const breakdown: ScoreRow[] = [
    { label: "Heat vulnerability nearby", weightPct: 35, bucket: HVI_LABEL[hvi] ?? "n/a", fraction: heatFrac, status: "verified" },
    { label: "Vulnerable population in catchment", weightPct: 25, bucket: "modelled (catchment pending)", fraction: popFrac, status: "pending" },
    { label: "Trust / community role", weightPct: 20, bucket: TRUST_LABEL[p.trust_role] ?? p.trust_role, fraction: trustFrac, status: "verified" },
    { label: "Rooftop hardening potential", weightPct: 10, bucket: p.roof_area_class, fraction: roofFrac, status: "modelled" },
    { label: "Facility suitability", weightPct: 10, bucket: p.facility_suitability, fraction: facilityFrac, status: "modelled" },
  ];

  const score = breakdown.reduce((sum, r) => sum + r.fraction * r.weightPct, 0);
  return { score: Math.round(score), breakdown };
}

export function toHub(feature: {
  geometry: { coordinates: [number, number] };
  properties: RawProps;
}): Hub {
  const p = feature.properties;
  const [lon, lat] = feature.geometry.coordinates;
  const { score, breakdown } = scoreHub(p);
  return {
    rank: n(p.rank_seed),
    name: p.name,
    address: p.address,
    municipality: p.municipality,
    lon,
    lat,
    sourceUrl: p.source_url,
    hvi: n(p.hvi_quintile),
    exposure: n(p.exposure_quintile),
    sensitivity: n(p.sensitivity_quintile),
    adaptiveCapacity: n(p.adaptive_capacity_quintile),
    typeLabel: TYPE_LABEL[p.type] ?? p.type,
    trustRole: p.trust_role,
    trustLabel: TRUST_LABEL[p.trust_role] ?? p.trust_role,
    roofClass: p.roof_area_class,
    facility: p.facility_suitability,
    reachablePopulation: p.reachable_population_est,
    catchmentMethod: p.catchment_method,
    solarPotential: p.solar_potential_est,
    backupPower: p.backup_power_status,
    flood: p.flood_status,
    floodEvidence: floodTag(p.flood_status),
    winterVuln: n(p.winter_vuln),
    yearRound: n(p.hvi_quintile) >= 4 && n(p.winter_vuln) >= 4,
    notes: p.notes,
    score,
    breakdown,
  };
}

export type HubGeo = {
  type: "FeatureCollection";
  features: { geometry: { coordinates: [number, number] }; properties: RawProps }[];
};

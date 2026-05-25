import rawJson from "./peel-fsa-raw.json";

// Thesis logic lives HERE (not in the fetched data): the burden index and the
// intervention routing are the project's argument, computed from raw cited
// StatCan attributes. The raw facts are produced separately (peel-fsa-raw.json).

export type Intervention = "tide-reachable" | "policy" | "retrofit";

export interface FsaRaw {
  fsa: string;
  name: string;
  population: number | null;
  medianHouseholdIncome: number | null;
  renterPct: number | null;
  electricHeatPct: number | null;
  apartmentPct: number | null;
}

export interface FsaStat extends FsaRaw {
  hasData: boolean; // false where StatCan suppresses (near-empty industrial/airport FSAs)
  burdenScore: number; // 0–100, relative within Peel
  burdenBucket: number; // -1 (no data) … 0 (lowest) … 4 (highest)
  intervention: Intervention;
  interventionNote: string;
}

// Low → high energy burden. Anchored to the device-screen palette:
// teal = clean/cheap/ok, peak red = the gas-peaker hours / worst.
export const BURDEN_COLORS = ["#155e57", "#1f8a6e", "#c9a227", "#d06a25", "#c84b1f"];

export const INTERVENTION_LABEL: Record<Intervention, string> = {
  "tide-reachable": "Valley can help here",
  policy: "Discount locked: policy fix",
  retrofit: "Retrofit first",
};

export function burdenColor(bucket: number | null): string {
  if (bucket == null || bucket < 0) return "#243747"; // no data
  return BURDEN_COLORS[Math.min(bucket, 4)]!;
}

const raw = (rawJson as FsaRaw[]) ?? [];

function ext(values: number[]): { min: number; max: number } {
  if (values.length === 0) return { min: 0, max: 1 };
  return { min: Math.min(...values), max: Math.max(...values) };
}
function norm(v: number, min: number, max: number): number {
  if (max === min) return 0.5;
  const t = (v - min) / (max - min);
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function bucketFor(score: number): number {
  if (score < 20) return 0;
  if (score < 40) return 1;
  if (score < 60) return 2;
  if (score < 80) return 3;
  return 4;
}

const incExt = ext(raw.filter((r) => r.medianHouseholdIncome != null).map((r) => r.medianHouseholdIncome!));
const rentExt = ext(raw.filter((r) => r.renterPct != null).map((r) => r.renterPct!));
const heatExt = ext(raw.filter((r) => r.electricHeatPct != null).map((r) => r.electricHeatPct!));

function route(r: FsaRaw): { intervention: Intervention; note: string } {
  const renter = r.renterPct ?? 0;
  if (r.apartmentPct != null && r.apartmentPct >= 40) {
    return {
      intervention: "policy",
      note: `${r.apartmentPct.toFixed(0)}% of homes here are apartments — much of that stock is sub-metered, where the landlord (not the tenant) picks the rate plan. This is the Discount Lockout: the fix is policy, not a plug.`,
    };
  }
  if (r.electricHeatPct != null && r.electricHeatPct >= 25) {
    return {
      intervention: "retrofit",
      note: `${r.electricHeatPct.toFixed(0)}% heat with electricity — largely baseboard, which can't shift off the evening peak. Start with an efficiency retrofit; load-shifting comes after the building can flex.`,
    };
  }
  return {
    intervention: "tide-reachable",
    note: `${renter.toFixed(0)}% renters, mostly individually metered — they can choose ULO but get punished by it without behaviour change. Valley reaches this stock: it shifts the load to 3.9¢ automatically.`,
  };
}

export const PEEL_FSA: FsaStat[] = raw.map((r) => {
  const hasData = r.renterPct != null && r.medianHouseholdIncome != null;
  if (!hasData) {
    return {
      ...r,
      hasData: false,
      burdenScore: 0,
      burdenBucket: -1,
      intervention: "tide-reachable",
      interventionNote:
        "Population too small to report — StatCan suppresses these near-empty (industrial / airport) areas.",
    };
  }
  const renterStress = norm(r.renterPct!, rentExt.min, rentExt.max);
  const incomeStress = 1 - norm(r.medianHouseholdIncome!, incExt.min, incExt.max);
  const heatExposure = r.electricHeatPct != null ? norm(r.electricHeatPct, heatExt.min, heatExt.max) : null;
  const burdenRaw =
    heatExposure != null
      ? 0.45 * renterStress + 0.4 * incomeStress + 0.15 * heatExposure
      : 0.53 * renterStress + 0.47 * incomeStress;
  const burdenScore = Math.round(burdenRaw * 100);
  const { intervention, note } = route(r);
  return { ...r, hasData: true, burdenScore, burdenBucket: bucketFor(burdenScore), intervention, interventionNote: note };
});

export const PEEL_BY_FSA: Record<string, FsaStat> = Object.fromEntries(PEEL_FSA.map((f) => [f.fsa, f]));

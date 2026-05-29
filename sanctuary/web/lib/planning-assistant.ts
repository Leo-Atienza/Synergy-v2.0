import { z } from "zod";

export const PLANNING_ASSISTANT_DISCLAIMER = "Planning assistant, not engineering advice. Requires site audit.";
export const PLANNING_ASSISTANT_LABEL = "Gemini-assisted draft, reviewed for no-overclaim language.";
export const STATIC_ASSISTANT_LABEL = "Static planning guidance, reviewed for no-overclaim language.";

const FIXED_SOURCE_BASIS = [
  "candidate-facts",
  "hvi-verified",
  "catchment-modelled",
  "readiness-pending",
  "mississauga-locations",
  "odrsf-context",
  "emergency-precedent",
  "no-overclaim-gate",
] as const;

export type SourceBasis = (typeof FIXED_SOURCE_BASIS)[number];

export const planningChecklistSchema = z.object({
  candidate_rank: z.number().int().min(1).max(10),
  candidate_name: z.string().min(1),
  summary: z.string().min(1),
  recommended_checks: z.array(z.string().min(1)).length(5),
  unknowns: z.array(z.string().min(1)).min(1),
  source_basis: z.array(z.enum(FIXED_SOURCE_BASIS)).min(1),
  disclaimer: z.literal(PLANNING_ASSISTANT_DISCLAIMER),
  ai_label: z.string().min(1),
});

export const planningChecklistFileSchema = z.object({
  version: z.string().min(1),
  checklists: z.record(z.string(), planningChecklistSchema),
});

export type PlanningChecklist = z.infer<typeof planningChecklistSchema>;
export type PlanningChecklistFile = z.infer<typeof planningChecklistFileSchema>;

export const candidatePlanningContextSchema = z.object({
  rank: z.number().int().min(1).max(10),
  name: z.string().min(1),
  address: z.string().min(1),
  typeLabel: z.string().min(1),
  municipality: z.string().min(1),
  hvi: z.number().int().min(1).max(5),
  exposure: z.number().int().min(1).max(5),
  sensitivity: z.number().int().min(1).max(5),
  adaptiveCapacity: z.number().int().min(1).max(5),
  flood: z.string().min(1),
  winterVuln: z.number().int().min(0).max(5),
  roofClass: z.string().min(1),
  facility: z.string().min(1),
  trustLabel: z.string().min(1),
  reachablePopulation: z.string().min(1),
  sourceUrl: z.string().url(),
});

export type CandidatePlanningContext = z.infer<typeof candidatePlanningContextSchema>;

const forbiddenPatterns = [
  /\b\d+(\.\d+)?\s*(kw|kwh|mw|mwh)\b/i,
  /\$\s*\d|\b\d+(\.\d+)?\s*(dollars|cad|usd)\b/i,
  /\b(sizing|sized|payback|roi|grant guaranteed)\b/i,
  /\b(already|currently)\s+(has|have|equipped|operates|provides)\s+(solar|battery|backup power|cooling capacity)\b/i,
  /\b(re-?rank|rank change|new candidate|replace the ranking)\b/i,
  /\b(prevented|would prevent|saved lives|restore power|guaranteed)\b/i,
];

export function hasPlanningOverclaim(value: unknown): boolean {
  const text = typeof value === "string" ? value : JSON.stringify(value);
  return forbiddenPatterns.some((pattern) => pattern.test(text));
}

export function validatePlanningChecklist(value: unknown): PlanningChecklist {
  const parsed = planningChecklistSchema.parse(value);

  if (hasPlanningOverclaim(parsed)) {
    throw new Error("Planning checklist failed the no-overclaim gate.");
  }

  return {
    ...parsed,
    disclaimer: PLANNING_ASSISTANT_DISCLAIMER,
  };
}

export function fallbackChecklistFor(candidate: CandidatePlanningContext): PlanningChecklist {
  const winterPhrase =
    candidate.winterVuln >= 1
      ? `a Material Resources quintile ${candidate.winterVuln} of 5 (modelled affordability proxy)`
      : "an unmatched winter / energy-burden tract";
  return {
    candidate_rank: candidate.rank,
    candidate_name: candidate.name,
    summary: `${candidate.name} is a candidate hub only; use this checklist to decide what a site audit must verify across heat, flood, and winter / energy burden before any hardening claim.`,
    recommended_checks: [
      "Confirm cooling, ventilation, washroom access, and accessibility under heat or outage conditions. (readiness-pending)",
      "Verify backup-power and electrical readiness with the owner or operator before making any equipment claim. (readiness-pending)",
      "Replace the modelled 500 m catchment with a real walkshed and outreach plan. (catchment-modelled)",
      "Confirm operating hours, staffing, communications, and emergency-use agreement. (candidate-facts)",
      `Treat flood exposure (${candidate.flood}) and winter / heating readiness given ${winterPhrase} as multi-hazard planning questions, alongside roof feasibility, with no capacity or cost estimate. (no-overclaim-gate)`,
    ],
    unknowns: [
      "Backup-power status",
      "Flood resilience and a dry backup-power location",
      "Winter heating and warming-space readiness",
      "Cooling capacity",
      "Electrical readiness",
      "Owner/operator agreement",
      "Real walkshed and reachable population",
    ],
    source_basis: ["candidate-facts", "catchment-modelled", "readiness-pending", "no-overclaim-gate"],
    disclaimer: PLANNING_ASSISTANT_DISCLAIMER,
    ai_label: STATIC_ASSISTANT_LABEL,
  };
}

export function buildPlanningPrompt(candidate: CandidatePlanningContext): string {
  return [
    "You are drafting a municipal planning checklist for Sanctuary, a hackathon prototype.",
    "Use PUBLIC FACTS ONLY. Do not infer equipment, costs, energy capacity, funding certainty, or rank changes.",
    "The site carries three honest hazard lenses: heat (verified, the lead), flood proximity (the TRCA regulatory floodplain), and winter / energy burden (a modelled affordability proxy). At least one recommended check must address flood resilience or winter / heating readiness, labelled honestly, not heat alone.",
    "Return JSON only, with exactly these keys and no others:",
    "- summary: a single string.",
    "- recommended_checks: an array of EXACTLY 5 strings.",
    "- unknowns: an array of at least 1 string.",
    `- source_basis: an array of 1 or more tags, each copied VERBATIM from this list and nothing else: ${FIXED_SOURCE_BASIS.join(", ")}.`,
    `Fixed disclaimer to preserve in the response: ${PLANNING_ASSISTANT_DISCLAIMER}`,
    `Fixed label to preserve in the response: ${PLANNING_ASSISTANT_LABEL}`,
    "",
    "Candidate facts:",
    `- Rank seed: ${candidate.rank}`,
    `- Name: ${candidate.name}`,
    `- Address: ${candidate.address}`,
    `- Type: ${candidate.typeLabel}`,
    `- Municipality: ${candidate.municipality}`,
    `- HVI: ${candidate.hvi}; exposure: ${candidate.exposure}; sensitivity: ${candidate.sensitivity}; adaptive capacity: ${candidate.adaptiveCapacity}`,
    `- Flood relationship to the TRCA regulatory floodplain (riverine, not storm-sewer): ${candidate.flood}`,
    `- Winter / energy-burden context: Ontario Marginalization Index Material Resources quintile ${candidate.winterVuln} of 5 for the building's census tract, a modelled affordability proxy, not a temperature reading`,
    `- Reachable population: ${candidate.reachablePopulation} via modelled 500 m catchment`,
    `- Roof class: ${candidate.roofClass} planning estimate`,
    `- Facility suitability: ${candidate.facility}`,
    `- Trust role: ${candidate.trustLabel}`,
    `- Source URL: ${candidate.sourceUrl}`,
    "",
    "Curated public-source context:",
    "- Mississauga recreation locations page verifies civic facilities such as Malton Community Centre at 3540 Morning Star Drive.",
    "- StatCan ODRSF provides facility names, facility types, addresses, and coordinates as cross-checking context, with known coverage limits.",
    "- Peel/Mississauga reporting says Peel does not operate designated seasonal warming centres; existing public facilities remain available during regular hours.",
    "- Ontario storm precedents show community centres and recreation facilities used for charging, showers, warmth, communications, and emergency support.",
    "",
    "Guardrails:",
    "- No kW, kWh, dollars, sizing, payback, or grant certainty.",
    "- No claim that the named site has backup power, cooling capacity, solar, batteries, or an agreement today.",
    "- No new candidates and no revised ranking.",
    "- If a fact is not verified, say it needs site verification.",
  ].join("\n");
}

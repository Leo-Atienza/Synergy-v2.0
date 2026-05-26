// Sanctuary showcase copy + sourced-number constants.
//
// Discipline (sanctuary/data/sources.md + submission-package.md no-overclaim gate):
// every on-screen number is either VERIFIED against a public source (with a link
// here) or carries a modelled/pending label at the point of display. No building
// is claimed equipped; reachable population stays "pending"; community buildings
// reach the 15% Clean Electricity ITC, never the 30% Clean Technology ITC.

export type Source = { name: string; url: string };

export const ARCGIS_WEB_MAP =
  "https://senecatechnology.maps.arcgis.com/apps/mapviewer/index.html?webmap=17951a55fae44a83a330101433dda67a";

export const HVI_SOURCE_ITEM =
  "https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2";

// The hero proper noun — verified HVI quintile 5 (Index_Qnt=5, PHDZ M-04,
// CT 5350530.01) against the public Peel EHVI service, re-checked 2026-05-26.
export const MALTON = {
  name: "Malton Community Centre and Library",
  address: "3540 Morning Star Drive, Mississauga",
  hvi: 5,
} as const;

// Embodied numbers for the hero + problem section. Each is sourced.
export const EMBODIED = {
  pearsonHeat: {
    value: "35.8 °C",
    when: "June 23, 2025",
    where: "Pearson, about 5 km from Malton",
    source: {
      name: "CBC — GTA heat warning, June 2025",
      url: "https://www.cbc.ca/news/canada/toronto/environment-canada-heat-warning-monday-greater-toronto-area-1.7568283",
    } satisfies Source,
  },
  heatDays: {
    past: "8",
    now: "18",
    future: "54",
    source: {
      name: "City of Toronto — ResilientTO",
      url: "https://www.toronto.ca/services-payments/water-environment/environmentally-friendly-city-initiatives/resilientto/resilience-actions/",
    } satisfies Source,
  },
} as const;

// The five scroll steps. `STEP` indices match lib/motion.ts.
export type StepCopy = { eyebrow: string; title: string; body: string };
export const STEPS: StepCopy[] = [
  {
    eyebrow: "01 · Risk",
    title: "Heat risk is not evenly distributed.",
    body: "Peel Public Health's Heat Vulnerability Index scores each census tract on exposure, sensitivity, and the capacity to cope. A pocket of Malton and northeast Brampton sits in the top quintile.",
  },
  {
    eyebrow: "02 · Gap",
    title: "Shelter access is not either.",
    body: "Official cooling spaces are limited and unevenly spread. During an outage the nearest one may be closed, unfamiliar, or two bus rides away from the people most at risk.",
  },
  {
    eyebrow: "03 · Candidates",
    title: "Ten trusted buildings already sit inside the risk.",
    body: "Libraries, recreation centres, gurdwaras, mosques, mandirs — places people already know and reach. Each carries a modelled 500 m catchment ring.",
  },
  {
    eyebrow: "04 · The decision",
    title: "If Peel can harden only five buildings first —",
    body: "Sanctuary ranks them. Rank is hand-verified from heat risk, trust, modelled reach, and hardening potential — never from an estimate alone.",
  },
  {
    eyebrow: "05 · Start here",
    title: "Malton Community Centre and Library.",
    body: "HVI top quintile, a civic anchor with a large roof, inside the hottest pocket. The panel stays honest about what is verified, what is modelled, and what still needs a site audit.",
  },
];

// Problem section — why the decision matters, with embodied numbers.
export const PROBLEM_POINTS: { label: string; body: string }[] = [
  {
    label: "Risk is uneven",
    body: "Peel's HVI combines heat exposure, sensitivity, and coping capacity into a quintile per census tract. The top quintile concentrates in a few pockets, not across the region evenly.",
  },
  {
    label: "Access is uneven",
    body: "Cooling centres matter, but distance, open hours, familiarity, mobility, and trust decide whether an older adult or a renter without air conditioning can actually use one.",
  },
  {
    label: "Outages overlap",
    body: "Heat, storms, and floods also cut power — turning cooling, charging, water, and a way to reach help into urgent needs at exactly the same address.",
  },
];

// Method section — the scoring weights (mirror sanctuary/docs/methods-note.md).
export const METHOD_ROWS: { label: string; weight: string; desc: string }[] = [
  { label: "Heat vulnerability nearby", weight: "35%", desc: "How high the HVI quintile is at the building's census tract." },
  { label: "Vulnerable population in catchment", weight: "25%", desc: "Modelled from a 500 m catchment until a real walkshed is run — labelled pending." },
  { label: "Trust / community role", weight: "20%", desc: "Whether people already know, reach, and rely on the place." },
  { label: "Rooftop hardening potential", weight: "10%", desc: "A rough small / medium / large class from footprint — a modelled estimate." },
  { label: "Facility suitability", weight: "10%", desc: "Whether it is a public-facing building with a real community role." },
];

// Real-vs-estimated honesty grid.
export const REAL_VS_ESTIMATED: { tag: "verified" | "modelled" | "pending"; label: string; body: string }[] = [
  { tag: "verified", label: "Verified", body: "The HVI layer, building names, addresses, source links, and every HVI quintile — checked against the public Peel feature service." },
  { tag: "modelled", label: "Modelled", body: "The 500 m reach, the roof / hardening class, and the first-pass score. Useful for triage, not for investment." },
  { tag: "pending", label: "Pending", body: "Backup power, cooling capacity, electrical readiness, owner agreement, and solar / battery sizing — none assumed, all flagged for a site audit." },
];

// The four HVI sub-indicators (Peel vocabulary).
export const HVI_INDICATORS: { label: string; body: string }[] = [
  { label: "Heat Vulnerability Index", body: "The overall heat-risk quintile for a census tract." },
  { label: "Exposure", body: "How much heat stress the area faces." },
  { label: "Sensitivity", body: "How strongly heat may affect the people who live there." },
  { label: "Adaptive capacity", body: "How easily people can cool down, move, communicate, or get help." },
];

// Evidence / prior-art — each precedent with a real source. Corrected per C1–C3.
export const EVIDENCE: { label: string; body: string; source: Source }[] = [
  {
    label: "Brampton Lighthouse Project",
    body: "A federal case study names 79 registered places of worship citywide and 39 with signed partner agreements — an emergency-refuge network for heat, storms, and floods. It is a trust network, not a solar program; Sanctuary's contribution is adding solar and battery so a refuge keeps power.",
    source: { name: "Canada in a Changing Climate", url: "https://changingclimate.ca/map/brampton-lighthouse-project/" },
  },
  {
    label: "USDN resilience hubs",
    body: "The Urban Sustainability Directors Network frames a resilience hub around five functions: power, communications, facilities, operations, and services. Sanctuary borrows that vocabulary rather than inventing a definition.",
    source: { name: "USDN Resilience Hubs (2018)", url: "https://www.usdn.org/uploads/cms/documents/usdn_resiliencehubs_2018.pdf" },
  },
  {
    label: "Faith buildings already run on solar",
    body: "Faith & Common Good counts 137 Ontario faith institutions using solar. Gurdwaras, mosques, mandirs, and churches are realistic solar adopters, not a hypothetical.",
    source: { name: "Faith & Common Good", url: "https://www.faithcommongood.org/resources/solar-in-faith-communities/" },
  },
  {
    label: "Funding a tax-exempt hub",
    body: "A library, municipal centre, or place of worship can claim the 15% refundable Clean Electricity ITC — the credit built to include tax-exempt owners. The 30% Clean Technology ITC excludes them, so it is not the lever for these buildings.",
    source: { name: "Canada Revenue Agency — Clean Electricity ITC", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-electricity-investment-tax-credit.html" },
  },
];

// Future pipeline phases.
export const FUTURE_PHASES: { num: string; label: string; body: string }[] = [
  { num: "1", label: "Pick places", body: "Rank the first candidate hubs from heat risk, trust, modelled reach, and building usefulness — the step this prototype performs." },
  { num: "2", label: "Check readiness", body: "Confirm owners, accessibility, cooling, roof condition, and electrical readiness with a site audit." },
  { num: "3", label: "Find funding", body: "Compare grants, the 15% Clean Electricity ITC, and rough upgrade costs per site." },
  { num: "4", label: "Run the network", body: "Track status, supplies, staffing, and outage readiness — and only later, live energy data." },
];

// Alectra / scale framing — GridExchange is a transferable GGH template, never a Peel deployment.
export const SCALE_NOTE = {
  body: "The method repeats across Alectra's service territory. Alectra's GridExchange transactive-energy pilot ran in Vaughan, Markham, Barrie, Richmond Hill, and Hamilton — a Greater Golden Horseshoe template Peel can adopt, not a Peel deployment.",
  source: {
    name: "Alectra — GridExchange launch",
    url: "https://www.newswire.ca/news-releases/alectra-launches-gridexchange-an-innovative-transactive-energy-platform-836252722.html",
  } satisfies Source,
};

// Source links shown in the Sources section.
export const SOURCE_LINKS: { label: string; url: string }[] = [
  { label: "Peel Heat Vulnerability Index", url: HVI_SOURCE_ITEM },
  { label: "Sanctuary ArcGIS web map", url: ARCGIS_WEB_MAP },
  { label: "Peel climate-and-health context", url: "https://peelregion.ca/about/climate-change/climate-change-health" },
  { label: "Brampton Lighthouse Project", url: "https://changingclimate.ca/map/brampton-lighthouse-project/" },
  { label: "Clean Electricity ITC (CRA)", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-electricity-investment-tax-credit.html" },
];

// Technical stack (shown beside sources).
export const TECH_STACK: { label: string; body: string }[] = [
  { label: "ArcGIS web map", body: "The primary judged artifact: HVI layer, candidate points, and the ranked view." },
  { label: "Next.js 16 + React 19", body: "This showcase — a server-rendered shell with one interactive map island, no backend." },
  { label: "d3-geo SVG", body: "Projects Peel geography and the candidate points; no basemap token, fully offline." },
  { label: "Static GeoJSON", body: "Candidate data is bundled at build, auditable, and demo-safe with no runtime fetch." },
];

// Judge Q&A (mirror sanctuary/docs/judge-qa.md, tightened).
export const QA: { q: string; a: string }[] = [
  { q: "Are these buildings resilience hubs today?", a: "No. They are candidate hubs. Sanctuary ranks where hardening should be investigated first." },
  { q: "Are the solar and battery numbers measured?", a: "No. They are planning estimates from rough roof class and regional solar context. The real output is the siting and prioritization layer." },
  { q: "Are the reachable-population numbers exact?", a: "Not yet. The prototype uses a modelled 500 m catchment and labels it as such until a real walkshed is run." },
  { q: "Why include places of worship?", a: "Because resilience runs on trust, volunteers, and local knowledge. Gurdwaras, mosques, mandirs, and churches are community infrastructure." },
  { q: "Is this tokenizing faith communities?", a: "No. The list mixes civic and faith buildings and frames every site as an asset, not as a group that needs rescuing." },
  { q: "Why not just build more official cooling centres?", a: "That may be part of the answer. Sanctuary helps decide where new or upgraded safe spaces protect vulnerable residents first." },
  { q: "Can Alectra actually use this?", a: "Yes, as a planning concept — to find community-energy and resilience-hub candidates before deeper engineering and partner engagement." },
  { q: "What happens after the hackathon?", a: "Verify the top five with owners, replace buffers with real walksheds, run site audits, compare funding paths, then repeat across the territory." },
];

// Honesty key — the evidence vocabulary, used in the legend and the detail panel.
export const EVIDENCE_KEY: { tag: "verified" | "modelled" | "pending"; text: string }[] = [
  { tag: "verified", text: "verified — checked against a public source" },
  { tag: "modelled", text: "modelled — a planning estimate" },
  { tag: "pending", text: "pending — needs a site audit" },
];

// Map layer toggles for the interactive Peel map (keys match LayerState in MapStage).
export const MAP_LAYERS: { key: "heat" | "facilities" | "candidates" | "rings"; label: string }[] = [
  { key: "heat", label: "Heat vulnerability" },
  { key: "facilities", label: "Public facilities" },
  { key: "candidates", label: "Candidate hubs" },
  { key: "rings", label: "Modelled 500 m reach" },
];

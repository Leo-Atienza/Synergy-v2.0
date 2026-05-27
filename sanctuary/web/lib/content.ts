// Sanctuary showcase copy + sourced-number constants.
//
// Discipline (sanctuary/data/sources.md + submission-package.md no-overclaim gate):
// every on-screen number is either VERIFIED against a public source (with a link
// here) or carries a modelled/pending label at the point of display. No building
// is claimed equipped; reachable population stays "pending"; community buildings
// reach the 15% Clean Electricity ITC, never the 30% Clean Technology ITC.

export type Source = { name: string; url: string };
export type EvidenceStatus = "verified" | "modelled" | "pending";

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
  phdz: "M-04",
  ctuid: "5350530.01",
} as const;

// Malton evidence ledger — the hero strip + local proof, every fact tagged.
// Address / HVI / zone / tract are verified against the Peel EHVI service;
// prototype status + next step stay honestly pending (no equipment claimed).
export const LOCAL_PLACE_FACTS: { label: string; value: string; status: EvidenceStatus }[] = [
  { label: "Address", value: MALTON.address, status: "verified" },
  { label: "Peel HVI", value: `quintile ${MALTON.hvi}`, status: "verified" },
  { label: "Public-health zone", value: MALTON.phdz, status: "verified" },
  { label: "Census tract", value: MALTON.ctuid, status: "verified" },
  { label: "Prototype status", value: "candidate hub, not equipped", status: "pending" },
  { label: "Next step", value: "site audit required", status: "pending" },
];

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
export const METHOD_ROWS: { label: string; weight: string; status: EvidenceStatus; desc: string }[] = [
  {
    label: "Heat vulnerability nearby",
    weight: "35%",
    status: "verified",
    desc: "HVI quintile at the building's census tract, checked against Peel's public feature service.",
  },
  {
    label: "Vulnerable population in catchment",
    weight: "25%",
    status: "modelled",
    desc: "A modelled 500 m catchment until a real walkshed is run; population count remains pending.",
  },
  {
    label: "Trust / community role",
    weight: "20%",
    status: "verified",
    desc: "Public-facing civic or faith/community role, backed by the candidate source URL.",
  },
  {
    label: "Rooftop hardening potential",
    weight: "10%",
    status: "modelled",
    desc: "Small / medium / large planning class from visible footprint. Not a solar design.",
  },
  {
    label: "Facility suitability",
    weight: "10%",
    status: "modelled",
    desc: "First-pass fit for a public-serving heat/outage site; final readiness requires audit.",
  },
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
    label: "Peel-local gap",
    body: "Local reporting says Peel and Mississauga do not operate designated seasonal warming centres; instead, public facilities remain available during regular hours. Caledon has opened recreation/community facilities as warming and charging stations during outage/cold-weather conditions. Sanctuary's cautious claim: pre-rank which trusted buildings to verify first.",
    source: { name: "Mississauga.com — warming centres in Peel", url: "https://www.mississauga.com/news/warming-centre-peel/article_73fba170-1f04-5763-aba1-621e6632390c.html" },
  },
  {
    label: "Ontario outage precedent",
    body: "After the May 2022 derecho, Ottawa opened community and recreation facilities as reception points for charging, respite, showers, and information. If Sanctuary had existed before the event, planners could have pre-ranked which trusted buildings to prepare, communicate, and verify first.",
    source: { name: "Ottawa Citizen — May 2022 storm recovery", url: "https://ottawacitizen.com/news/local-news/ottawa-communities-assess-storm-damage-few-short-years-after-tornados" },
  },
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

// Counterfactual precedent dossier — two real, sourced events that show the
// planning gap Sanctuary aims to close. Framed as "planning counterfactual,
// not measured impact": the event facts (date, place, what happened) are
// verified; the *if-Sanctuary-had-existed* clause is a thought experiment, not
// a claim about lives saved or outcomes achieved. Geography is labelled
// honestly — Pearson is ~5 km from Malton; Ottawa is ~400 km east of Peel.
export type Counterfactual = {
  index: string;
  title: string;
  when: string;
  where: string;
  whatHappened: string;
  sanctuaryFrame: string;
  source: Source;
  honestyNote: string;
};

export const COUNTERFACTUAL_INTRO = {
  body: "These are real events with public sources. The 'if Sanctuary had existed' framing is a planning thought experiment — not a claim about lives saved, costs avoided, or outcomes achieved. The honest contribution is the pre-verify list: knowing which trusted buildings to investigate first, before the next heat day or outage.",
} as const;

export const COUNTERFACTUAL: Counterfactual[] = [
  {
    index: "01",
    title: "A 35.8 °C day at Pearson, about 5 km from Malton.",
    when: EMBODIED.pearsonHeat.when,
    where: EMBODIED.pearsonHeat.where,
    whatHappened:
      "Environment Canada issued a heat warning across the Greater Toronto Area. Pearson reached 35.8 °C; humidex pushed higher. Cooling and respite fell to whichever public building was already open — Peel does not operate designated seasonal cooling centres, so public facilities serve as informal cooling during regular hours.",
    sanctuaryFrame:
      "If Sanctuary had been in place before that morning, planners would already have a five-building pre-verify list — Malton Community Centre and Library at rank #1 — flagging which trusted buildings inside the hottest HVI pocket to confirm hours, comms, and refuge readiness for first. Not new buildings: the same buildings, harder.",
    source: EMBODIED.pearsonHeat.source,
    honestyNote: "Temperature, date, place verified · Sanctuary effect is hypothetical",
  },
  {
    index: "02",
    title: "The May 2022 derecho — Ottawa, not Peel.",
    when: "May 21, 2022",
    where: "Ottawa, Ontario (~400 km east of Peel)",
    whatHappened:
      "A derecho cut power to much of eastern Ontario. Ottawa opened community and recreation facilities as reception points for charging, respite, showers, and information. The event happened elsewhere; the pattern — public buildings becoming emergency infrastructure on short notice — is the one Peel would inherit during the next storm or grid stress.",
    sanctuaryFrame:
      "If Sanctuary's ranking had existed across Alectra's territory before May 2022, the question 'which civic buildings should we prepare and communicate about first?' would already have had a defensible answer. The artifact is the ranked list, not the event response.",
    source: EVIDENCE[1].source,
    honestyNote: "Event verified · Ottawa geography, not Peel · Sanctuary effect is hypothetical",
  },
];

// Future pipeline phases. These are roadmap stages, not built features.
export const FUTURE_PHASES: { num: string; label: string; body: string }[] = [
  {
    num: "1",
    label: "Better walksheds",
    body: "Roadmap: replace 500 m circles with real walksheds that account for sidewalks, transit, and barriers.",
  },
  {
    num: "2",
    label: "Site audits",
    body: "Roadmap: verify owners, cooling, accessibility, roof condition, backup power, and electrical readiness.",
  },
  {
    num: "3",
    label: "Public app, later",
    body: "Roadmap: only after verification, residents could see open, equipped, trusted places during heat or outages.",
  },
  {
    num: "4",
    label: "Alectra-wide scale",
    body: "Roadmap: repeat the same honest scoring across more of Alectra's service territory and other hazards.",
  },
];

// Alectra / scale framing — GridExchange is a transferable GGH template, never a Peel deployment.
export const SCALE_NOTE = {
  body: "The method repeats across Alectra's service territory. Alectra's GridExchange transactive-energy pilot ran in Vaughan, Markham, Barrie, Richmond Hill, and Hamilton — a Greater Golden Horseshoe template Peel can adopt, not a Peel deployment.",
  source: {
    name: "Alectra — GridExchange launch",
    url: "https://www.newswire.ca/news-releases/alectra-launches-gridexchange-an-innovative-transactive-energy-platform-836252722.html",
  } satisfies Source,
};

// Data provenance — the four map layers, where each came from, and how many
// records it carries. This answers "where did the data come from" literally,
// per shipped file. Counts match the GeoJSON in public/ (loaded at build by
// lib/load-map-data.ts). Pair with DATA_LOADING below for the static-vs-live answer.
export const DATA_LAYERS: {
  layer: string;
  file: string;
  count: string;
  origin: string;
  status: EvidenceStatus;
}[] = [
  {
    layer: "Heat vulnerability choropleth",
    file: "peel-hvi.geojson",
    count: "282 census tracts",
    origin:
      "Static export of Peel's public Extreme Heat Vulnerability Index feature service — overall quintile plus exposure, sensitivity, and adaptive-capacity sub-scores. Re-verified against the live service on 2026-05-26.",
    status: "verified",
  },
  {
    layer: "Peel outline",
    file: "peel-fsa.geojson",
    count: "35 forward sortation areas",
    origin:
      "Statistics Canada 2021 Census FSA cartographic boundary file (catalogue 92-179-X), reprojected to WGS84. Statistics Canada Open Licence.",
    status: "verified",
  },
  {
    layer: "Public facilities (shelter gap)",
    file: "peel-facilities.geojson",
    count: "87 facility points",
    origin:
      "Open recreation-facility data — arenas, community centres, and pools across Peel's three municipalities (Mississauga, Brampton, Caledon).",
    status: "verified",
  },
  {
    layer: "Candidate hubs",
    file: "candidate-hubs.geojson",
    count: "10 hand-verified buildings",
    origin:
      "Names and addresses from official municipal, library, and faith-organization pages; geocoded with the ArcGIS World Geocoder, then point-queried against the Peel HVI service for each building's quintiles, CTUID, and PHDZ.",
    status: "verified",
  },
];

// The honest "is it live or hardcoded?" answer, stated plainly for judges.
export const DATA_LOADING = {
  heading: "Static snapshot, not a live query",
  body: "Every layer above is a frozen GeoJSON file committed to this repository and read once at build time — there is no database and no runtime API call while you browse. That is deliberate: a dropped connection or an expired map token cannot break the demo. The only live element on the page is the embedded ArcGIS web map (an iframe). Nothing is invented — each value traces to the public source beside it, the extract is reproducible from a documented script, and the candidate scores were re-checked against the live Peel service on 2026-05-26.",
  estimatesNote:
    "What is hand-assigned rather than fetched: the planning buckets — roof class, facility suitability, and the modelled 500 m catchment — plus the five scoring weights. Those are our judgement calls. They are labelled modelled or pending everywhere they appear, and never shown as measured values.",
} as const;

// Source links shown in the Sources section.
export const SOURCE_LINKS: { label: string; status: EvidenceStatus; note: string; url: string }[] = [
  {
    label: "Peel Heat Vulnerability Index",
    status: "verified",
    note: "HVI item used for public-health heat-risk context and source metadata.",
    url: HVI_SOURCE_ITEM,
  },
  {
    label: "Peel HVI Web Map",
    status: "verified",
    note: "Official web map that styles the same HVI feature service by quintile.",
    url: "https://www.arcgis.com/home/item.html?id=d1adca8a3b1e403483e608040734c07a",
  },
  {
    label: "Peel HVI Feature Service",
    status: "verified",
    note: "Point-queried for candidate HVI, exposure, sensitivity, adaptive-capacity, CTUID, and PHDZ fields.",
    url: "https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Extreme_Heat_Vulnerability_Index/FeatureServer/0",
  },
  {
    label: "Statistics Canada — 2021 Census FSA boundaries",
    status: "verified",
    note: "Forward-sortation-area cartographic boundary file (catalogue 92-179-X) that draws the Peel outline on the map. Statistics Canada Open Licence.",
    url: "https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21",
  },
  {
    label: "Peel climate-and-health context",
    status: "verified",
    note: "Regional context for climate and health risk; not used for per-building claims.",
    url: "https://peelregion.ca/about/climate-change/climate-change-health",
  },
  {
    label: "Mississauga civic facility pages",
    status: "verified",
    note: "Used to check Malton Community Centre and Library name, address, and public facility role.",
    url: "https://www.mississauga.ca/recreation-and-sports/locations-and-rentals/locations/",
  },
  {
    label: "Mississauga building footprints",
    status: "modelled",
    note: "Supports rough roof/footprint class only; it is not a solar-capacity measurement.",
    url: "https://data.mississauga.ca/datasets/building-footprints-1",
  },
  {
    label: "Brampton building footprints",
    status: "modelled",
    note: "Supports rough roof/footprint class for Brampton candidates only.",
    url: "https://geohub.brampton.ca/datasets/building-footprints",
  },
  {
    label: "Ontario ODRSF facility database",
    status: "verified",
    note: "Facility-reference dataset for public/community service context.",
    url: "https://www.statcan.gc.ca/en/lode/databases/odrsf",
  },
  {
    label: "NRCan photovoltaic potential",
    status: "modelled",
    note: "Regional solar context only; no named building is claimed solar-ready.",
    url: "https://natural-resources.canada.ca/energy-sources/renewable-energy/photovoltaic-potential-solar-resource-maps-canada",
  },
  {
    label: "Brampton Lighthouse Project",
    status: "verified",
    note: "Precedent for trusted refuge networks; not a claim about solar or Peel deployment.",
    url: "https://changingclimate.ca/map/brampton-lighthouse-project/",
  },
  {
    label: "Clean Electricity ITC",
    status: "verified",
    note: "Funding context: tax-exempt community buildings can reach the 15% CEITC, not guaranteed funding.",
    url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-electricity-investment-tax-credit.html",
  },
  {
    label: "Sanctuary ArcGIS web map",
    status: "verified",
    note: "The judged map artifact that carries the candidate points and ranked view.",
    url: ARCGIS_WEB_MAP,
  },
];

export const CANDIDATE_SOURCE_LINKS: { label: string; status: EvidenceStatus; url: string }[] = [
  { label: "Malton Community Centre and Library", status: "verified", url: "https://www.mississauga.ca/recreation-and-sports/locations/malton-community-centre/" },
  { label: "Sri Guru Singh Sabha Malton", status: "verified", url: "https://www.srigurusinghsabhamalton.com/" },
  { label: "Susan Fennell Sportsplex", status: "verified", url: "https://www.brampton.ca/EN/residents/Recreation/Community-Centres/pages/susan-fennell-sportsplex.aspx" },
  { label: "Anjuman-E-Anwarul Islam of Malton", status: "verified", url: "https://maltonmasjid.ad-din.site/" },
  { label: "Bharat Mata Mandir", status: "verified", url: "https://miracletechnologies.ca/bharatmatamandir/" },
  { label: "Chinguacousy Wellness Centre", status: "verified", url: "https://www.brampton.ca/EN/residents/Recreation/Community-Centres/pages/chinguacousy-wellness.aspx" },
  { label: "Hindu Sabha Temple", status: "verified", url: "https://hindusabhatemple.com/contacts" },
  { label: "Gore Meadows Community Centre and Library", status: "verified", url: "https://www.brampton.ca/EN/residents/Recreation/Community-Centres/Pages/Gore-Meadows.aspx" },
  { label: "Guru Nanak Darbar Gurdwara", status: "verified", url: "https://nanakdarbar.com/" },
  { label: "Cassie Campbell Community Centre", status: "verified", url: "https://www.brampton.ca/EN/residents/Recreation/Community-Centres/pages/cassie-campbell.aspx" },
];

export const PHOTO_ASSETS: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  credit: string;
  license: string;
  source: Source;
}[] = [
  {
    src: "/photos/malton-cc-library.jpg",
    width: 1280,
    height: 960,
    alt: "Exterior of Malton Community Centre and Library in Mississauga.",
    caption: "Malton Community Centre and Library, the hero candidate at 3540 Morning Star Drive.",
    credit: "Matt Pascal",
    license: "CC BY-SA 4.0",
    source: { name: "Wikimedia Commons — Malton CC and Library", url: "https://commons.wikimedia.org/wiki/File:Malton_CC_and_Library.jpg" },
  },
  {
    src: "/photos/malton-westwood-square.jpg",
    width: 3264,
    height: 2448,
    alt: "Westwood Square Mall storefront in Malton, Ontario.",
    caption: "A real Malton place image near the Goreway corridor; not stock and not a generic solar visual.",
    credit: "Aaron504195",
    license: "CC BY-SA 4.0",
    source: { name: "Wikimedia Commons — Westwood Square Mall", url: "https://commons.wikimedia.org/wiki/File:Shoppers_Drug_Mart_(Malton,_Ontario).jpg" },
  },
  {
    src: "/photos/peel-1937-map.jpg",
    width: 1301,
    height: 1516,
    alt: "Archival map of the County of Peel, Ontario, Canada.",
    caption: "Archival Peel map, included as local context rather than decoration.",
    credit: "The Perkins Bull Foundation",
    license: "Public domain in Canada",
    source: { name: "Wikimedia Commons — County of Peel map", url: "https://commons.wikimedia.org/wiki/File:County_of_Peel,_Ontario,_Canada_map_(1937).jpg" },
  },
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
  { q: "Is the data live or hardcoded?", a: "It's a frozen snapshot, on purpose. Each map layer is a GeoJSON file pulled from a public source — Peel's HVI service, Statistics Canada boundaries, municipal facility data — committed to the repo and loaded at build time, so the demo can't break from a dropped connection. The values aren't invented: they trace to the sources on this page and were re-verified against the live Peel service on 2026-05-26." },
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

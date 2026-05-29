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
  { label: "Heat vulnerability", value: `Peel HVI quintile ${MALTON.hvi} of 5`, status: "verified" },
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
      name: "CBC · GTA heat warning, June 2025",
      url: "https://www.cbc.ca/news/canada/toronto/environment-canada-heat-warning-monday-greater-toronto-area-1.7568283",
    } satisfies Source,
  },
  heatDays: {
    past: "8",
    now: "18",
    future: "54",
    source: {
      name: "City of Toronto · ResilientTO",
      url: "https://www.toronto.ca/services-payments/water-environment/environmentally-friendly-city-initiatives/resilientto/resilience-actions/",
    } satisfies Source,
  },
} as const;

// The five scroll steps. `STEP` indices match lib/motion.ts.
export type StepCopy = { eyebrow: string; title: string; body: string };
export const STEPS: StepCopy[] = [
  {
    eyebrow: "01 · Risk",
    title: "Heat risk concentrates in a few pockets.",
    body: "Peel Public Health's Heat Vulnerability Index (HVI) scores every census tract on heat exposure, sensitivity, and the capacity to cope, from quintile 1 (lowest) to quintile 5 (highest). A pocket of Malton and northeast Brampton sits in quintile 5.",
  },
  {
    eyebrow: "02 · Gap",
    title: "Cooling and shelter are just as uneven.",
    body: "Official cooling spaces are limited and spread thin. During an outage the nearest one may be closed, unfamiliar, or two bus rides away from the people who need it most.",
  },
  {
    eyebrow: "03 · Candidates",
    title: "Ten trusted buildings already sit inside the risk.",
    body: "Libraries, recreation centres, gurdwaras, mosques, and mandirs. Places people already know and can reach. Each one carries a modelled 500 m catchment, the area within a short walk.",
  },
  {
    eyebrow: "04 · The decision",
    title: "If Peel can harden only five buildings first.",
    body: "Sanctuary ranks them. The rank is hand-verified from heat risk, trust, modelled reach, and hardening potential, never from an estimate alone.",
  },
  {
    eyebrow: "05 · Start here",
    title: "Malton Community Centre and Library.",
    body: "Top HVI quintile, a civic anchor with a large roof, inside the hottest pocket. The panel stays honest about what is verified, what is modelled, and what still needs a site audit.",
  },
];

// Problem section — why the decision matters, with embodied numbers.
export const PROBLEM_POINTS: { label: string; body: string }[] = [
  {
    label: "Risk is uneven",
    body: "Peel's Heat Vulnerability Index (HVI) combines heat exposure, sensitivity, and coping capacity into one score per census tract, ranked in quintiles (fifths). The most vulnerable quintile sits in a few pockets, not evenly across the region.",
  },
  {
    label: "Access is uneven",
    body: "Cooling centres matter, but distance, opening hours, familiarity, mobility, and trust decide whether an older adult or a renter without air conditioning can actually use one.",
  },
  {
    label: "Outages overlap",
    body: "Heat, storms, and floods also cut power. Cooling, charging, clean water, and a way to reach help all turn urgent at the same address, at the same moment.",
  },
];

// Method section — the scoring weights (mirror sanctuary/docs/methods-note.md).
export const METHOD_ROWS: { label: string; weight: string; status: EvidenceStatus; desc: string }[] = [
  {
    label: "Heat vulnerability nearby",
    weight: "35%",
    status: "verified",
    desc: "The Peel HVI quintile at the building's census tract, checked against Peel's public feature service.",
  },
  {
    label: "Vulnerable population in catchment",
    weight: "25%",
    status: "modelled",
    desc: "A modelled 500 m catchment stands in until a real walkshed (the true area reachable on foot) is run. The head count stays pending.",
  },
  {
    label: "Trust / community role",
    weight: "20%",
    status: "verified",
    desc: "A public-facing civic or faith and community role, backed by the building's own official page.",
  },
  {
    label: "Rooftop hardening potential",
    weight: "10%",
    status: "modelled",
    desc: "A small, medium, or large planning class read from the visible roof footprint. Not a solar design.",
  },
  {
    label: "Facility suitability",
    weight: "10%",
    status: "modelled",
    desc: "A first-pass fit for a public heat or outage site. Final readiness needs a site audit.",
  },
];

// Where the weights come from. Honest provenance: our judgment, structured on two
// sources already cited in EVIDENCE (Peel's HVI sub-scores + USDN hub functions).
// No claim of an external scoring framework.
export const WEIGHTING_NOTE =
  "The five weights are our judgment, not a published formula. We structured them on two sources already cited here: Peel's own Heat Vulnerability Index, which splits heat risk into exposure, sensitivity, and adaptive capacity, and the USDN resilience-hub functions. Heat leads at 35 percent because it is the only axis that is fully verified and resolved tract by tract. The other four are planning proxies that a site audit later replaces.";

// What "site audit required" concretely means. Mirrors fallbackChecklistFor() in
// lib/planning-assistant.ts, surfaced statically so a judge sees it without a model call.
export const SITE_AUDIT_CHECKS: string[] = [
  "Roof structural load and condition, before any rooftop equipment.",
  "Backup power and electrical readiness, confirmed with the operator.",
  "Accessibility and step-free access, into and through the building.",
  "Operating hours and staffing during an actual activation.",
];

// The energy / grid anchor (reuses the OPERATING_MODEL framing). Forward-looking:
// no building here is claimed to run this today.
export const GRID_RESILIENCE_NOTE =
  "Backup power is the energy anchor. A hub with solar and a battery is a distributed energy resource: on a normal day it can support the local grid, and during an outage it islands to keep cooling, charging, and information running. That is the kind of resilience Alectra Utilities plans for in its distribution-system plan, not a claim that any of these buildings runs it today.";

// The methodological flex: WHY there is no cold-temperature choropleth. The highest-
// value honesty argument in the multi-hazard upgrade. Pre-empts the sharpest data
// question and signals method literacy. (See docs/peel-winter-vuln-data-note.md.)
export const WINTER_METHOD_NOTE =
  "The winter layer on the map is real, but it deliberately maps energy burden, not temperature. Here is why. Heat vulnerability varies block by block because of the urban heat island, so the HVI resolves it tract by tract. Winter cold has no equivalent gradient, there is no winter heat-island, so a per-tract cold-temperature index would invent an exposure axis that is not real. Winter resilience need is driven instead by energy affordability and marginalization: who can least afford to heat a home, and who is most isolated in a cold snap. That is real per-area data, so the winter layer maps the 2021 Ontario Marginalization Index Material Resources dimension, labelled modelled, and keeps heat as the lead, verified hazard.";

// Real-vs-estimated honesty grid.
export const REAL_VS_ESTIMATED: { tag: "verified" | "modelled" | "pending"; label: string; body: string }[] = [
  { tag: "verified", label: "Verified", body: "The HVI layer, building names, addresses, source links, and every HVI quintile, all checked against the public Peel feature service." },
  { tag: "modelled", label: "Modelled", body: "The 500 m reach, the roof and hardening class, and the first-pass score. Useful for triage, not for investment decisions." },
  { tag: "pending", label: "Pending", body: "Backup power, cooling capacity, electrical readiness, owner agreement, and solar or battery sizing. None of it is assumed. All of it is flagged for a site audit." },
];

// The four HVI sub-indicators (Peel vocabulary).
export const HVI_INDICATORS: { label: string; body: string }[] = [
  { label: "Heat Vulnerability Index (HVI)", body: "Peel Public Health's overall heat-risk score for a census tract, grouped into quintiles: 1 is the lowest fifth, 5 the most vulnerable fifth." },
  { label: "Exposure", body: "How much heat stress the area faces." },
  { label: "Sensitivity", body: "How strongly heat affects the people who live there." },
  { label: "Adaptive capacity", body: "How easily people can cool down, move, communicate, or get help." },
];

// Evidence / prior-art — each precedent with a real source. Corrected per C1–C3.
export const EVIDENCE: { label: string; body: string; source: Source }[] = [
  {
    label: "Peel-local gap",
    body: "Local reporting says Peel and Mississauga do not run designated seasonal warming centres. Public facilities stay open during their regular hours instead. Caledon has opened recreation and community buildings as warming and charging stations during outages and cold snaps. Sanctuary's cautious claim: pre-rank which trusted buildings to verify first.",
    source: { name: "Mississauga.com · warming centres in Peel", url: "https://www.mississauga.com/news/warming-centre-peel/article_73fba170-1f04-5763-aba1-621e6632390c.html" },
  },
  {
    label: "Ontario outage precedent",
    body: "After the May 2022 derecho, Ottawa opened community and recreation facilities as reception points for charging, respite, showers, and information. If Sanctuary had existed before the event, planners could have pre-ranked which trusted buildings to prepare, communicate, and verify first.",
    source: { name: "Ottawa Citizen · May 2022 storm recovery", url: "https://ottawacitizen.com/news/local-news/ottawa-communities-assess-storm-damage-few-short-years-after-tornados" },
  },
  {
    label: "Brampton Lighthouse Project",
    body: "A federal case study names 79 registered places of worship citywide, 39 of them with signed partner agreements. Together they form an emergency-refuge network for heat, storms, and floods. It is a trust network, not a solar program. Sanctuary's contribution is adding solar and battery so a refuge keeps power.",
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
    body: "A library, municipal centre, or place of worship can claim the 15% refundable Clean Electricity Investment Tax Credit (CEITC), the federal credit written to include tax-exempt owners. The 30% Clean Technology Investment Tax Credit excludes them, so it is not the lever for these buildings.",
    source: { name: "Canada Revenue Agency · Clean Electricity ITC", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-electricity-investment-tax-credit.html" },
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
  body: "These are real events with public sources. The 'if Sanctuary had existed' framing is a planning thought experiment, not a claim about lives saved, costs avoided, or outcomes achieved. The honest contribution is the pre-verify list: knowing which trusted buildings to investigate first, before the next heat day or outage.",
} as const;

export const COUNTERFACTUAL: Counterfactual[] = [
  {
    index: "01",
    title: "A 35.8 °C day at Pearson, about 5 km from Malton.",
    when: EMBODIED.pearsonHeat.when,
    where: EMBODIED.pearsonHeat.where,
    whatHappened:
      "Environment Canada issued a heat warning across the Greater Toronto Area. Pearson reached 35.8 °C, and the humidex pushed higher. Cooling and respite fell to whichever public building happened to be open. Peel does not run designated seasonal cooling centres, so public facilities serve as informal cooling during their regular hours.",
    sanctuaryFrame:
      "If Sanctuary had been in place before that morning, planners would already hold a five-building pre-verify list, Malton Community Centre and Library at rank #1. It flags which trusted buildings inside the hottest HVI pocket to check first for opening hours, communications, and refuge readiness. Not new buildings. The same buildings, made stronger.",
    source: EMBODIED.pearsonHeat.source,
    honestyNote: "Temperature, date, place verified · Sanctuary effect is hypothetical",
  },
  {
    index: "02",
    title: "The May 2022 derecho hit Ottawa, not Peel.",
    when: "May 21, 2022",
    where: "Ottawa, Ontario (~400 km east of Peel)",
    whatHappened:
      "A derecho, a fast-moving wall of straight-line winds, cut power to much of eastern Ontario. Ottawa opened community and recreation facilities as reception points for charging, respite, showers, and information. The event happened elsewhere, but the pattern is one Peel would inherit during the next storm or grid stress: public buildings becoming emergency infrastructure on short notice.",
    sanctuaryFrame:
      "If Sanctuary's ranking had existed across Alectra's territory before May 2022, the question 'which civic buildings should we prepare and communicate about first?' would already have had a defensible answer. The artifact is the ranked list, not the event response.",
    source: EVIDENCE[1].source,
    honestyNote: "Event verified · Ottawa geography, not Peel · Sanctuary effect is hypothetical",
  },
];

// Who acts on the ranking. Three real Peel-facing roles, each named and sourced;
// one verb each. No individual is named (office and program names verified
// 2026-05-28 against peelregion.ca and alectrautilities.com; see docs/energy-domain.md).
export const STAKEHOLDERS: { name: string; org: string; role: string; source: Source }[] = [
  {
    name: "Office of Climate Change and Energy Management",
    org: "Region of Peel",
    role: "Prioritizes which trusted buildings to harden first, inside the neighbourhoods the HVI flags as most heat-vulnerable.",
    source: {
      name: "Region of Peel · climate change and energy",
      url: "https://peelregion.ca/about/climate-change/reduce-greenhouse-gas-emissions",
    },
  },
  {
    name: "Regional Emergency Management",
    org: "Region of Peel",
    role: "Prepares and opens public buildings during an extreme-heat day or an outage. Peel Public Health built the HVI to find where that need is highest.",
    source: {
      name: "Region of Peel · Regional Emergency Management",
      url: "https://peelregion.ca/about/people-peel/regional-emergency-management",
    },
  },
  {
    name: "Alectra Utilities",
    org: "Distribution planning",
    role: "Plans where hardened, solar-and-battery sites strengthen the local grid as distributed energy resources, the resilience work in its distribution-system plan.",
    source: {
      name: "Alectra Utilities · investment and system plan",
      url: "https://alectrautilities.com/InvestmentPlan",
    },
  },
];

// Future pipeline phases. These are roadmap stages, not built features.
export const FUTURE_PHASES: { num: string; label: string; body: string }[] = [
  {
    num: "1",
    label: "Real access modelling",
    body: "Replace the 500 m circles with real walksheds, the area actually reachable on foot once sidewalks, transit, and barriers are counted.",
  },
  {
    num: "2",
    label: "Audit and verify",
    body: "Verify owners, cooling, accessibility, roof condition, backup power, and electrical readiness, one building at a time, then rerank with audited data.",
  },
  {
    num: "3",
    label: "Resident guidance, later",
    body: "Only after verification, residents could see which open, equipped, trusted places to head for during heat or an outage, with live status and routing.",
  },
  {
    num: "4",
    label: "Scale across hazards",
    body: "The map now layers heat, flood, and winter energy burden, each labelled honestly. Next is repeating the same scoring across more of Alectra's service territory and deepening each hazard with verified, building-level data.",
  },
];

export const FUTURE_UPGRADE_TRACKS: {
  label: string;
  status: EvidenceStatus;
  body: string;
}[] = [
  {
    label: "Deeper winter / energy-burden data",
    status: "modelled",
    body: "The winter lens already ships: the 2021 Ontario Marginalization Index Material Resources dimension stands in as the affordability driver, not a fabricated cold-temperature map. Next is adding energy-cost-burden data per area, for example CUSP's energy-poverty explorer, and verifying heating and warming-space readiness building by building.",
  },
  {
    label: "Walkshed precision",
    status: "modelled",
    body: "Upgrade from radius buffers to multimodal walksheds that reflect sidewalks, crossings, slope, and transit access.",
  },
  {
    label: "Readiness verification pipeline",
    status: "pending",
    body: "Standardize site audits into a readiness score covering power, cooling, accessibility, ownership alignment, and operations.",
  },
  {
    label: "Public readiness view",
    status: "pending",
    body: "Publish a resident-facing map only for verified hubs, showing which sites are open, equipped, and reachable during an event.",
  },
  {
    label: "Schools as phase-2 hubs",
    status: "pending",
    body: "Peel District School Board (more than 250 schools) and the Dufferin-Peel Catholic District School Board (152 schools) are strong candidates, reachable through Ontario's Community Use of Schools program that opens school space after hours. Each needs a board-level access agreement first, so it is a phase-2 layer, not a building we score today.",
  },
  {
    label: "Replication across Alectra territory",
    status: "modelled",
    body: "The same honest scoring repeats across Alectra Utilities' Greater Golden Horseshoe service area. New geography, the same method and the same verified, modelled, and pending labels, so it reads as a template a utility or region can run, not a one-off Peel map.",
  },
];

// Alectra / scale framing — GridExchange is a transferable GGH template, never a Peel deployment.
export const SCALE_NOTE = {
  body: "The method repeats across Alectra's service territory. Alectra's GridExchange transactive-energy pilot ran in Vaughan, Markham, Barrie, Richmond Hill, and Hamilton, a Greater Golden Horseshoe template Peel can adopt rather than a Peel deployment.",
  source: {
    name: "Alectra · GridExchange launch",
    url: "https://www.newswire.ca/news-releases/alectra-launches-gridexchange-an-innovative-transactive-energy-platform-836252722.html",
  } satisfies Source,
};

// ---- Funding & operating model (the /funding page) ----
// Each rate below is a published, current program parameter, verified against
// the source linked on its card. Per the data-truth rule we surface RATES
// (percentages), never modelled dollar totals: solar and battery sizing stays
// pending until a site audit. Community / tax-exempt owners reach the 15% Clean
// Electricity ITC, NOT the 30% Clean Technology ITC (taxable corporations only).
export const FUNDING_PROGRAMS: {
  program: string;
  rate: string;
  status: string;
  body: string;
  tag: EvidenceStatus;
  source: Source;
}[] = [
  {
    program: "Clean Electricity Investment Tax Credit",
    rate: "15%",
    status: "In force since March 2026",
    body: "The anchor, and the only federal clean-energy tax credit a public owner can actually reach. A municipally or Indigenous-owned corporation claims 15 percent of eligible solar, storage, and grid equipment back as a refundable credit. Enacted through Bill C-15, Royal Assent March 26, 2026.",
    tag: "verified",
    source: {
      name: "Canada Revenue Agency · Clean Electricity ITC",
      url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-electricity-investment-tax-credit.html",
    },
  },
  {
    program: "Clean Technology Investment Tax Credit",
    rate: "30%",
    status: "Taxable corporations only",
    body: "Worth up to 30 percent, but claimable only by taxable Canadian corporations. A library, gurdwara, mosque, or municipal centre is tax-exempt, so it reaches this rate only if the system is owned through a taxable project company. That gap is why the 15 percent credit, not this one, is the lever for a community hub.",
    tag: "verified",
    source: {
      name: "Canada Revenue Agency · Clean Technology ITC",
      url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-technology-itc/about-ct-itc.html",
    },
  },
  {
    program: "Green Municipal Fund, Community Buildings Retrofit",
    rate: "up to 80%",
    status: "Open, accepted year-round",
    body: "A federal grant and loan package, delivered by the Federation of Canadian Municipalities, for energy retrofits of public community buildings. A municipality applies, and it can fund buildings the municipality or a non-profit owns. Capital projects need a measured emissions reduction to qualify.",
    tag: "verified",
    source: {
      name: "FCM Green Municipal Fund · Community Buildings Retrofit",
      url: "https://greenmunicipalfund.ca/community-buildings-retrofit-initiative",
    },
  },
  {
    program: "IESO Save on Energy, Retrofit Program",
    rate: "up to 50%",
    status: "Open, 2025 to 2027",
    body: "Ontario's energy-efficiency program covers up to half of an eligible retrofit, including behind-the-meter solar. Municipal and institutional building owners qualify directly. A faith building qualifies as a commercial or institutional owner, or through a partner.",
    tag: "verified",
    source: {
      name: "IESO Save on Energy · Retrofit Program",
      url: "https://saveonenergy.ca/en/For-Business-and-Industry/Programs-and-incentives/Retrofit-Program",
    },
  },
];

// The honesty caveat: two real federal programs that are NOT open doors right
// now. Named for credibility, never counted in the stack (same ethos as the
// verified / modelled / pending labels elsewhere on the site).
export const FUNDING_NOTE: { body: string; sources: Source[] } = {
  body: "Two adjacent programs are named here for honesty, not counted in the stack. Natural Resources Canada's Smart Renewables and Electrification Pathways still holds capital, but its main streams are not taking new proposals right now. The federal Disaster Mitigation and Adaptation Fund is fully allocated, with no open intake. An honest plan tracks both for the next funding round instead of assuming today's door is open.",
  sources: [
    {
      name: "NRCan · Smart Renewables and Electrification Pathways",
      url: "https://natural-resources.canada.ca/climate-change/sreps",
    },
    {
      name: "Infrastructure Canada · Disaster Mitigation and Adaptation Fund",
      url: "https://housing-infrastructure.canada.ca/dmaf-faac/index-eng.html",
    },
  ],
};

// The future operating model. Explicitly future: the prototype ranks candidate
// hubs, it does not run a microgrid. Card three reuses the GridExchange GGH
// framing, so it carries no per-building or Peel-deployment claim.
export const OPERATING_MODEL: { label: string; body: string; source?: Source }[] = [
  {
    label: "Blue-sky days",
    body: "On normal days the rooftop solar and battery are not idle. Aggregated across many hubs they can shave peak demand and take part in Ontario's demand-response and capacity markets as distributed energy resources, earning operating revenue that helps sustain the building.",
  },
  {
    label: "Outage days",
    body: "When the grid fails, the same battery disconnects and runs the building on stored power, holding the loads that keep people safe: cooling, medical refrigeration, device charging, and a place to get information. The refuge keeps power instead of going dark.",
  },
  {
    label: "Who builds it, who runs it",
    body: "The funding stack covers the hardening. A municipal or utility partner operates the network, and blue-sky revenue offsets running costs. Alectra's GridExchange transactive-energy pilot, run elsewhere in the Greater Golden Horseshoe, is the kind of template Peel could adopt rather than a Peel deployment.",
    source: SCALE_NOTE.source,
  },
];

// "How it works" — the plain-language mechanism behind a hardened hub (the /funding page).
// Honest: the prototype only ranks candidates; nothing here is built or equipped, and there
// are no kW / dollar / sizing claims (data-truth rule). Rates are published program parameters.
export const HOW_IT_WORKS: { num: string; label: string; body: string }[] = [
  {
    num: "1",
    label: "Rank the candidates",
    body: "Sanctuary scores trusted buildings already inside the heat risk and ranks the five to investigate first. That is what this prototype does today.",
  },
  {
    num: "2",
    label: "Audit each site",
    body: "Before any hardening, a site audit checks roof condition, electrical readiness, cooling, accessibility, and the owner's agreement. The score is a planning screen, not a green light.",
  },
  {
    num: "3",
    label: "Fund and install",
    body: "The capital stack above pays to add rooftop solar and a battery. A public owner anchors it with the 15 percent Clean Electricity credit, topped up by the Green Municipal Fund and Save on Energy.",
  },
  {
    num: "4",
    label: "Operate as a hub",
    body: "On a normal day the solar and battery support the local grid. In an outage the battery islands the building, keeping cooling, charging, and communications running when the grid goes dark.",
  },
];

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
    layer: "Heat-vulnerability choropleth",
    file: "peel-hvi.geojson",
    count: "282 census tracts",
    origin:
      "A static export of Peel's public Extreme Heat Vulnerability Index feature service: the overall quintile plus exposure, sensitivity, and adaptive-capacity sub-scores. Re-verified against the live service on 2026-05-26.",
    status: "verified",
  },
  {
    layer: "Flood risk (TRCA regulated floodplain)",
    file: "peel-flood.geojson",
    count: "295 polygons",
    origin:
      "TRCA's 'Flood and Heat Vulnerable Areas in Peel' service, layer 6 (Floodline TRCA Polygon): the riverine regulatory floodplain, the greater of the Hurricane Hazel Regional Storm or the 100-year flood, for the Humber, Etobicoke Creek, and Mimico Creek watersheds. Not urban or storm-sewer flooding. Per-building flood proximity was point-queried against this layer and cross-checked with a local point-in-polygon pass.",
    status: "verified",
  },
  {
    layer: "Winter / energy-burden vulnerability",
    file: "peel-winter-vuln.geojson",
    count: "282 census tracts",
    origin:
      "The 2021 Ontario Marginalization Index (ON-Marg) Material Resources quintile per census tract, joined by tract to the same Peel geography as the heat map. A marginalization and affordability proxy for winter resilience need, deliberately not a fabricated cold-temperature index. St. Michael's Hospital and Public Health Ontario, from the StatCan 2021 Census.",
    status: "modelled",
  },
  {
    layer: "Peel outline",
    file: "peel-fsa.geojson",
    count: "35 forward sortation areas",
    origin:
      "Statistics Canada 2021 Census boundary file for forward sortation areas (the first three characters of a postal code), catalogue 92-179-X, reprojected to standard GPS coordinates. Statistics Canada Open Licence.",
    status: "verified",
  },
  {
    layer: "Public facilities (shelter gap)",
    file: "peel-facilities.geojson",
    count: "87 facility points",
    origin:
      "Statistics Canada Open Database of Recreational and Sport Facilities (ODRSF): arenas, community centres, and pools across Peel's three municipalities, Mississauga, Brampton, and Caledon.",
    status: "verified",
  },
  {
    layer: "Candidate hubs",
    file: "candidate-hubs.geojson",
    count: "10 hand-verified buildings",
    origin:
      "Names and addresses from official municipal, library, and faith-organization pages, geocoded with the ArcGIS World Geocoder, then point-queried against the Peel HVI service for each building's quintiles, census tract ID, and public-health zone.",
    status: "verified",
  },
];

// The honest "is it live or hardcoded?" answer, stated plainly for judges.
export const DATA_LOADING = {
  heading: "A static snapshot, not a live query",
  body: "Every layer above is a frozen GeoJSON file, committed to this repository and read once at build time. There is no database and no live API call while you browse. That is on purpose: a dropped connection or an expired map token cannot break the demo. The only live element on the page is the embedded ArcGIS web map, an iframe. Nothing here is invented. Each value traces to the public source beside it, the extract is reproducible from a documented script, and the candidate scores were re-checked against the live Peel service on 2026-05-26.",
  estimatesNote:
    "What we hand-assign rather than fetch: the planning buckets (roof class, facility suitability, and the modelled 500 m catchment), plus the five scoring weights. Those are our judgement calls. They carry a modelled or pending label everywhere they appear, and never read as measured values.",
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
    label: "TRCA Flood and Heat Vulnerable Areas in Peel",
    status: "verified",
    note: "Layer 6, Floodline TRCA Polygon: the riverine regulatory floodplain for the Humber, Etobicoke Creek, and Mimico Creek watersheds. Each candidate's flood proximity was point-queried against it and cross-checked with a local point-in-polygon pass.",
    url: "https://maps.trca.ca/hostingserver/rest/services/Hosted/Flood_and_Heat_Vulnerable_Areas_in_Peel_WFL1/FeatureServer/6",
  },
  {
    label: "Credit Valley Conservation, Credit River Watershed",
    status: "verified",
    note: "The Credit watershed boundary, used to flag candidates that TRCA does not map, so they read 'not mapped by TRCA' rather than a false 'outside the floodplain'.",
    url: "https://cvc-camaps.opendata.arcgis.com/",
  },
  {
    label: "Ontario Marginalization Index (ON-Marg) 2021",
    status: "modelled",
    note: "Material Resources quintile per census tract: the affordability and marginalization proxy behind the winter / energy-burden lens. St. Michael's Hospital (Unity Health Toronto) and Public Health Ontario, from the StatCan 2021 Census.",
    url: "https://www.publichealthontario.ca/en/data-and-analysis/health-equity/ontario-marginalization-index",
  },
  {
    label: "Statistics Canada 2021 Census, dissemination-area population",
    status: "modelled",
    note: "Real dissemination-area populations and StatCan representative points, summed into Malton's modelled 500 m catchment estimate. Populations cross-checked against ON-Marg's dissemination-area file.",
    url: "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/index-eng.cfm",
  },
  {
    label: "Statistics Canada 2021 Census FSA boundaries",
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
    note: "Supports a rough roof and footprint class only. It is not a solar-capacity measurement.",
    url: "https://data.mississauga.ca/datasets/building-footprints-1",
  },
  {
    label: "Brampton building footprints",
    status: "modelled",
    note: "Supports rough roof/footprint class for Brampton candidates only.",
    url: "https://geohub.brampton.ca/datasets/building-footprints",
  },
  {
    label: "Open Database of Recreational and Sport Facilities (ODRSF)",
    status: "verified",
    note: "Statistics Canada facility-reference dataset, used for public and community service context.",
    url: "https://www.statcan.gc.ca/en/lode/databases/odrsf",
  },
  {
    label: "Natural Resources Canada photovoltaic potential",
    status: "modelled",
    note: "Regional solar context only. No named building is claimed solar-ready.",
    url: "https://natural-resources.canada.ca/energy-sources/renewable-energy/photovoltaic-potential-solar-resource-maps-canada",
  },
  {
    label: "Brampton Lighthouse Project",
    status: "verified",
    note: "Precedent for trusted refuge networks; not a claim about solar or Peel deployment.",
    url: "https://changingclimate.ca/map/brampton-lighthouse-project/",
  },
  {
    label: "Clean Electricity Investment Tax Credit (CEITC)",
    status: "verified",
    note: "Funding context: tax-exempt community buildings can reach the 15% CEITC, which is eligibility, not guaranteed funding.",
    url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-electricity-investment-tax-credit.html",
  },
  {
    label: "Clean Technology Investment Tax Credit (CTITC)",
    status: "verified",
    note: "Funding contrast: the 30% credit is for taxable corporations only, so a tax-exempt community owner cannot claim it directly.",
    url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-technology-itc/about-ct-itc.html",
  },
  {
    label: "FCM Green Municipal Fund (Community Buildings Retrofit)",
    status: "verified",
    note: "Open municipal grant-and-loan program for community-building energy retrofits, cited on the Funding page.",
    url: "https://greenmunicipalfund.ca/community-buildings-retrofit-initiative",
  },
  {
    label: "IESO Save on Energy (Retrofit Program)",
    status: "verified",
    note: "Ontario efficiency program covering up to half of an eligible retrofit, including behind-the-meter solar.",
    url: "https://saveonenergy.ca/en/For-Business-and-Industry/Programs-and-incentives/Retrofit-Program",
  },
  {
    label: "NRCan Smart Renewables and Electrification Pathways (SREPs)",
    status: "verified",
    note: "Federal clean-energy capital program named on the Funding page; main streams are not accepting proposals as of 2026.",
    url: "https://natural-resources.canada.ca/climate-change/sreps",
  },
  {
    label: "Sanctuary ArcGIS web map",
    status: "verified",
    note: "The primary map artifact that carries the candidate points and ranked view.",
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
    source: { name: "Wikimedia Commons · Malton CC and Library", url: "https://commons.wikimedia.org/wiki/File:Malton_CC_and_Library.jpg" },
  },
  {
    src: "/photos/malton-westwood-square.jpg",
    width: 3264,
    height: 2448,
    alt: "Westwood Square Mall storefront in Malton, Ontario.",
    caption: "Westwood Square in Malton, near the Goreway corridor. A real local place, not a stock solar visual.",
    credit: "Aaron504195",
    license: "CC BY-SA 4.0",
    source: { name: "Wikimedia Commons · Westwood Square Mall", url: "https://commons.wikimedia.org/wiki/File:Shoppers_Drug_Mart_(Malton,_Ontario).jpg" },
  },
  {
    src: "/photos/peel-1937-map.jpg",
    width: 1301,
    height: 1516,
    alt: "Archival map of the County of Peel, Ontario, Canada.",
    caption: "Archival Peel map, included as local context rather than decoration.",
    credit: "The Perkins Bull Foundation",
    license: "Public domain in Canada",
    source: { name: "Wikimedia Commons · County of Peel map", url: "https://commons.wikimedia.org/wiki/File:County_of_Peel,_Ontario,_Canada_map_(1937).jpg" },
  },
];

// Technical stack (shown beside sources).
export const TECH_STACK: { label: string; body: string }[] = [
  { label: "ArcGIS web map", body: "The primary deliverable. It carries the HVI layer, the candidate points, and the ranked view." },
  { label: "Next.js 16 + React 19", body: "This showcase: a server-rendered shell with one interactive map island and no backend." },
  { label: "d3-geo SVG", body: "Projects Peel geography and the candidate points. No basemap token, fully offline." },
  { label: "Static GeoJSON", body: "Candidate data is bundled at build, so it stays auditable and demo-safe with no runtime fetch." },
  { label: "Gemini 2.5 Flash", body: "Drafts each candidate's planning checklist offline, behind a no-overclaim gate that rejects invented power, dollar, or sizing figures. The reviewed text ships as static JSON, so the live site calls no model at runtime." },
];

// Judge Q&A (mirror sanctuary/docs/judge-qa.md, tightened).
export const QA: { q: string; a: string }[] = [
  { q: "Are these buildings resilience hubs today?", a: "No. They are candidate hubs. Sanctuary ranks where hardening should be investigated first." },
  { q: "Are the solar and battery numbers measured?", a: "No. They are planning estimates from rough roof class and regional solar context. The real output is the siting and prioritization layer." },
  { q: "Are the reachable-population numbers exact?", a: "Not yet. The prototype uses a modelled 500 m catchment and labels it as such until a real walkshed is run." },
  { q: "Is the data live or hardcoded?", a: "It's a frozen snapshot, on purpose. Each map layer is a GeoJSON file pulled from a public source (Peel's HVI service, Statistics Canada boundaries, municipal facility data), committed to the repo and loaded at build time, so it can't break from a dropped connection. The values aren't invented. They trace to the sources on this page and were re-verified against the live Peel service on 2026-05-26." },
  { q: "Why include places of worship?", a: "Because resilience runs on trust, volunteers, and local knowledge. Gurdwaras, mosques, mandirs, and churches are community infrastructure." },
  { q: "Is this tokenizing faith communities?", a: "No. The list mixes civic and faith buildings and frames every site as an asset, not as a group that needs rescuing." },
  { q: "Why not just build more official cooling centres?", a: "That may be part of the answer. Sanctuary helps decide where new or upgraded safe spaces protect vulnerable residents first." },
  { q: "Can Alectra actually use this?", a: "Yes, as a planning concept: a way to find community-energy and resilience-hub candidates before deeper engineering and partner engagement." },
  { q: "Who pays for the solar and batteries?", a: "For a public owner the anchor is the 15% refundable Clean Electricity Investment Tax Credit, the one federal credit tax-exempt owners can reach. It stacks with the FCM Green Municipal Fund retrofit package and Ontario's Save on Energy program. The 30% Clean Technology credit is for taxable corporations only, so it is not the lever for a library or place of worship. See the Funding page." },
  { q: "What are the next steps?", a: "Verify the top five with owners, replace buffers with real walksheds, run site audits, compare funding paths, then repeat across the territory." },
];

// Honesty key — the evidence vocabulary, used in the legend and the detail panel.
export const EVIDENCE_KEY: { tag: "verified" | "modelled" | "pending"; text: string }[] = [
  { tag: "verified", text: "verified, checked against a public source" },
  { tag: "modelled", text: "modelled, a planning estimate" },
  { tag: "pending", text: "pending, needs a site audit" },
];

// One-line honest scope note for the flood layer (riverine, not pluvial; TRCA only).
export const FLOOD_CAVEAT =
  "The flood layer is TRCA's riverine regulatory floodplain, the greater of the Hurricane Hazel Regional Storm or the 100-year flood, not urban or storm-sewer flooding. West Peel's Credit River watershed is mapped separately by Credit Valley Conservation.";

// Map layer toggles for the interactive Peel map (keys match LayerState in MapStage).
export const MAP_LAYERS: { key: "heat" | "facilities" | "candidates" | "rings" | "flood" | "winter"; label: string }[] = [
  { key: "heat", label: "Heat vulnerability" },
  { key: "winter", label: "Winter / energy-burden vulnerability" },
  { key: "flood", label: "Flood risk (regulated areas)" },
  { key: "facilities", label: "Public facilities" },
  { key: "candidates", label: "Candidate hubs" },
  { key: "rings", label: "Modelled 500 m reach" },
];

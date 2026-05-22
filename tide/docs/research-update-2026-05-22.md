# Research Update — 2026-05-22 (T-2 days to kickoff)

> **What this is.** A fresh internet-research pass run on 2026-05-22, two days before the Seneca Energy Hackathon 2026 kickoff (May 24). It does **not** re-derive the [2026-05-15 dossier](../../docs/research-dossier.md) — it targets the *gaps and the freshness delta*, and it stress-tests the leading pick **[[Tide]]** ([seed-d-tide](../../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/seed-d-tide.md)) against reality. Method: 3 parallel research agents (prior-art, hardware, energy-news/sponsors) + direct primary-source verification of the time-sensitive rate facts. Factual energy-sector items were also appended by the `energy-domain-researcher` to [energy-domain.md → "2026-05-22 freshness update"](../../docs/energy-domain.md).
>
> **If you read one thing:** §1 (Tide's originality is narrower than the seed claims — and the fix) and §2 (rates verified current — wedge intact).

---

## 1. ⚠️ HEADLINE — Tide's originality claim is oversold. Here's the verified reality + the fix.

The seed asserts: *"Nobody ships a BYO-hardware, no-enrollment, open-source, carbon-AND-cost shifter for Ontario ULO."* After a thorough web + GitHub sweep, that is **partially true but oversold on one axis**, and a judge who runs Home Assistant could rebut it. Better to know now than on stage.

| Product / project | Ontario ULO? | Actuates a *generic* plug (not just EV/thermostat)? | Enrollment / proprietary HW? | Open source? |
|---|---|---|---|---|
| **Optiwatt** (closest *commercial*) | **YES** — integrates ULO/TOU; runs a **GTHA pilot**, claims up to 70% EV-charge savings | **NO** — EV chargers + Nest/ecobee/Honeywell only | Base app: none. Pilot: opt-in | No |
| **Home Assistant DIY stack** (closest *overall*) | **YES** — `jrfernandes/ontario_energy_board` exposes `ulo_*` rates + `active_peak` | **YES** — "cheapest-hours → turn on any switch" blueprints + native Kasa | DIY (you run HA) | **YES** |
| Electricity Maps `co2signal` (HA) | **YES** — CA-ON real-time carbon, free tier | signal only | DIY | API/integration open |
| Renew Home / OhmConnect | **NO** — CA + TX only (US utility account) | **YES** — TP-Link HS105/KP115 + OhmPlug | **YES** | No |
| Ontario Peak Perks (IESO + EnergyHub) | N/A — it's a DR program, not price-shifting | **NO** — eligible Wi-Fi thermostat only | **YES** (enrollment) | No |
| ev.energy / ChargeHQ | Unverified for ON | **NO** — EV/car (+ solar) | App-based | No |
| PredBat / Octopus Agile HA stack | **NO** — UK tariffs only | partial (battery/EV) | DIY | **YES** |
| Carbon Aware SDK / WattTime | province signal only | **NO** — targets cloud workloads | API key | SDK open |

**The truth:**
- As a **packaged product**, the four-part combo genuinely does not exist for Ontario. A targeted GitHub search for IESO/ULO + smart-plug/load-shifting returned **zero repos.** ✅
- But **every ingredient already exists as a free Home Assistant building block** — the ULO price sensor (verified), the CA-ON carbon sensor (verified), generic-plug control (native), and cheapest-hours automation blueprints. The cost half *and* the carbon half are both off-the-shelf.
- **Optiwatt does Ontario ULO today** — just for EVs/thermostats, not a dishwasher, and not open-source.

**So Tide's defensible novelty is NOT "grid-aware plug control" — it is:** the *specific fusion* of **cost AND carbon in one decision**, for **Ontario ULO**, on a **generic** load, **zero-config (no Home Assistant required)**, **open-source**, ending in a **verifiable $/CO₂ receipt** the DIY stack never produces.

**Recommended pitch framing (concede, then win):**
> *"Every piece of this exists in Home Assistant — but you'd install three community integrations, reconcile a ULO price sensor against a carbon sensor yourself, and hand-write the automation. Nobody has fused cost **and** carbon for Ontario ULO into one decision, and nobody ships it as a 5-minute, no-Home-Assistant install with a receipt. We didn't invent grid-aware control — we made the Ontario-specific, carbon-aware version trivially accessible and accountable."*

This honesty *strengthens* the originality axis (a knowledgeable judge respects it) and pre-empts the "HA already does this" trap. **Do not claim you invented plug actuation or grid-aware shifting.** Own the integration + packaging + dual-signal + receipt gap.

---

## 2. ✅ Rates verified CURRENT — Tide's wedge math is intact

Verified directly against the **OEB** primary source. The OEB now sets RPP prices **annually** (the current report runs **Nov 1, 2025 → Oct 31, 2026**). The **May 1, 2026 change was timing-only** — it did **not** touch ULO.

**Ultra-Low Overnight (ULO) — year-round, summer = winter:**
| Period | Price | Window |
|---|---|---|
| Ultra-low overnight | **3.9¢/kWh** | 11 p.m.–7 a.m. daily |
| Weekend off-peak | 9.8¢/kWh | weekends/holidays 7 a.m.–11 p.m. |
| Mid-peak | 15.7¢/kWh | weekdays 7 a.m.–4 p.m. + 9–11 p.m. |
| **On-peak** | **39.1¢/kWh** | **weekdays 4–9 p.m.** |

- **The 10× spread holds: 39.1 / 3.9 = 10.03×.** Locked through **Oct 31, 2026** (covers the whole event and beyond).
- Tide's demo-script rate references are **all accurate**: 1:12 p.m. weekday = ULO mid-peak 15.7¢ ✓; 11:00 p.m. = ULO overnight 3.9¢ ✓; the ~$17.60/50 kWh EV charge = 50 × (0.391 − 0.039) ✓.
- **Correction for the prototype:** the note "refresh each RPP cycle May 1 / Nov 1" is outdated — **prices refresh annually (Nov 1)**; May 1 only moves *TOU* on-peak to midday (11 a.m.–5 p.m., chasing summer A/C load) and drops the **Tiered** threshold to 600 kWh/month. ULO is untouched.
- **Bonus color:** in summer, TOU on-peak chases the midday A/C peak (11–5) while ULO on-peak stays 4–9 p.m. — the two plans deliberately diverge. Minor, but a real domain detail.

For reference, TOU = off-peak 9.8¢ / mid-peak 15.7¢ / on-peak 20.3¢; Tiered = 12.0¢ / 14.2¢.

---

## 3. 🔌 Hardware de-risk — switch the demo plug from Kasa to Shelly

Tide's biggest live-demo risk is the plug not toggling on hostile venue Wi-Fi. The fix:

- **Buy a Shelly Plug US Gen4 (~$25) or Plus Plug US (~$20).** Shelly Gen2+ exposes a **documented local JSON-RPC HTTP API with no cloud account** — turn "Cloud" off and control stays fully local, auth off by default. No firmware lottery.
  - Toggle: `GET http://<plug-ip>/rpc/Switch.Set?id=0&on=true` (`on=false` to kill). Read state: `/rpc/Switch.GetStatus?id=0` → `"output": true/false`. Plain `requests`, no library.
- **Demote TP-Link Kasa.** `python-kasa` still works, but newer Kasa firmware uses the **KLAP** protocol that **requires your TP-Link cloud username/password even for "local" control**, and there are open 2025–2026 issues where KLAP-v2 firmware disabled local port 9999 entirely. If you must use Kasa: an **older single plug (KP115/HS103/EP10), factory-reset, never connected to the Kasa cloud** so it stays on blank creds — but Shelly removes this whole failure class.
- **Own the LAN (venue Wi-Fi checklist):** bring a **travel router (GL.iNet, ~$30) or a phone hotspot**; pre-configure SSID/WPA2 at home; **reserve a static IP for the plug's MAC** and hard-code it; join laptop + plug to *only* that router; disable laptop auto-join; toggle once on-site during setup. No internet uplink needed for local RPC.
- **No-hardware fallback:** the toggle function tries the HTTP call with a 2 s timeout; on any exception it still flips a `plug_on` boolean rendering a big green/red "PLUG: ON/OFF" tile (+ relay-click sound). A `--mock` flag forces this path. The *decision* + *state change* land regardless of radio; the physical click is upside, not a single point of failure.

---

## 4. 🎤 New pitch ammunition (evidence the seed lacked)

- **ULO is barely adopted.** OEB reporting put province-wide ULO enrollment at **~12,073 RPP customers as of March 31, 2024** — roughly **0.2%** of ~5M residential RPP accounts. (Likely higher now; still tiny.) → *"Ontario built the strongest decarbonization price signal in North America — a 10× overnight discount — and almost nobody is on it, because without automation the 39.1¢ penalty makes it a gamble. Tide removes the gamble."*
- **Brattle Group (May 2016, Ontario TOU data through 2014):** residential customers showed **clear load-shifting but little energy conservation**, and **the shifting response diminished over time.** Caveats: it's *TOU* (a ~2× signal), not ULO, and it's old. But it gives you two gifts: (a) third-party proof that Ontario price signals *do* move behaviour, and (b) the killer line — ***"willpower to shift fades; automation doesn't"*** — which is the entire argument for Tide over a notification app.
- **Carbon honesty (keep it precise):** Ontario's **marginal** emissions factor ≈ **150 gCO₂/kWh** vs **average** ≈ **50** (TAF, 2015 basis) — marginal is ~3× average, so the on-peak hour you shift *away from* is dirtier than the grid average suggests. **But summer overnight is not guaranteed gas-free** (2025 heat waves leaned on gas; refurbishments keep gas elevated this decade). Honest framing: ***"Cost savings every night, guaranteed. Carbon savings when the hour you shift away from is gas-fired — most on-peak summer afternoons. We use IESO's live fuel mix to show which."***
- **Gotcha:** **Electricity Maps discontinued its *marginal* emissions product in 2025.** It still serves CA-ON *average* real-time carbon (free tier), but for *marginal* carbon you must compute it yourself from IESO `GenOutputbyFuelHourly` + ECCC NIR factors. Strong build-time task: pull a 2025 heat-wave week and compute real overnight gas MWh, so Tide shows *real* summer-night carbon, not a national average.

---

## 5. 🗞️ Freshness delta (May 15 → 22) — honestly thin

Nothing landed this week that a judge/mentor would cite. The big items (Bruce C $300M predevelopment, Pickering refurb, Darlington SMR/refurb) all **predate May 15** and are already in the dossier. Live this week:

- **IESO stakeholder engagement meetings, May 20–22** (this exact window) — APO + procurement.
- **IESO Long Lead-Time (LLT) RFP** — new-build hydro + long-duration storage (relevant to the resilience/storage theme).
- **IESO 2026 APO** now uses high/low scenarios for the first time: reference demand **~152 TWh → ~250 TWh (+65%) by 2050**; **data centres = 8.6% of 2050 demand.** (Updates the dossier's older "2025 APO: +75% by 2050" framing — use the 2026 number.)

**Seneca Hackathon — still mostly unpublished (do NOT assume):** sponsors (none named), prize pool, **judging rubric/axes** (our 4-axis split is an *assumption*, not confirmed), team-size rules, and **no Devpost link** on the official site (don't conflate with unrelated "Seneca Hacks"/"Design Hacks" Devpost pages). Confirmed: dates May 24–30, open to all students, learning partner **Octo Learning Inc.** (learnatocto.com). → These unknowns resolve at the **May 24 kickoff**; keep scope flexible until then.

---

## 6. 🪝 Hedge — if the May 24 reveal pushes toward generation/siting (Rooftop Roll-Call)

If the challenge set rewards "where should we build," the #2 seed [Rooftop Roll-Call](../../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/seed-e-rooftop-roll-call.md) leads. Prior-art check: **residential rooftop solar-potential mapping is already solved** — **Google Project Sunroof** has covered Canada since 2019, and **MyHEAT** publishes Google-powered solar maps across Canadian cities. So Roll-Call must **not** pitch "we map solar potential" (Google does that). Its surviving, defensible wedge is the part nobody ships: a **named, ranked, public accountability list of the Top-100 unbuilt *commercial flat* roofs** (with owner attribution where public), framed as opportunity. Lead with the named roof, not the methodology.

---

## 7. ✅ Recommended actions (prioritized)

1. **Rewrite Tide's originality framing** to the concede-then-win script in §1 *before* `/hackathon:scope` writes the pitch. Highest leverage; protects the originality axis.
2. **Order a Shelly Plug US Gen4 today** (§3) so it arrives before the in-person finale (May 29–30); keep a Kasa only as a flashed/known-good backup. Build the `--mock` on-screen fallback regardless.
3. **Bake the new evidence into the pitch** (§4): the 0.2% ULO-adoption hook, the Brattle "willpower fades, automation doesn't" line, and the precise cost-always/carbon-conditional carbon claim.
4. **Add a build-time task:** compute real Ontario summer-overnight marginal carbon from IESO `GenOutputbyFuelHourly` (don't ship a national average).
5. **Fix two factual notes in the prototype:** RPP refreshes *annually* (Nov 1), not May 1/Nov 1; and the carbon source is IESO live fuel mix (Electricity Maps marginal product is gone).
6. **Re-fetch senecahackathon.com on May 23 and at the May 24 kickoff** for sponsors/rubric/team-size — these are the last unknowns that could force a pivot.

---

## Sources

**Rates / OEB**
- [OEB — Electricity rates (current RPP, TOU/ULO/Tiered windows)](https://www.oeb.ca/consumer-information-and-protection/electricity-rates)
- [OEB — RPP Price Report Nov 1 2025 – Oct 31 2026 (PDF)](https://oeb.ca/sites/default/files/rpp-price-report-20251017.pdf)
- [OEB — RPP backgrounder Oct 17 2025 (PDF)](https://www.oeb.ca/sites/default/files/rpp-backgrounder-20251017.pdf)

**Prior art / competitors**
- [Optiwatt](https://optiwatt.com/) · [Optiwatt GTHA pilot — up to 70% EV savings (NA Clean Energy)](https://www.nacleanenergy.com/energy-storage/pilot-program-could-save-ev-drivers-in-greater-toronto-and-hamilton-area-up-to-70-on-charging-costs) · [TAF managed-EV-charging pilot](https://taf.ca/pilot-program-seeks-to-test-the-impact-of-managed-ev-charging-on-electricity-grid/)
- [GitHub — jrfernandes/ontario_energy_board (verified ULO sensor + active_peak)](https://github.com/jrfernandes/ontario_energy_board)
- [HA — Electricity Maps / co2signal integration (CA-ON)](https://www.home-assistant.io/integrations/co2signal/) · [Electricity Maps CA-ON](https://app.electricitymaps.com/zone/CA-ON) · [Electricity Maps free tier](https://www.electricitymaps.com/free-tier-api)
- [HA blueprint — Nord Pool cheapest-hours device control](https://community.home-assistant.io/t/blueprint-that-uses-nordpool-and-lets-you-turn-on-devices-on-the-cheapest-hours-and-make-automations-based-on-that-information/646360) · [Caspan — Ontario TOU rates in Home Assistant](https://caspan.com/2024/12/adding-ontario-hydro-electricity-time-of-use-rates-to-home-assistant/)
- [OhmConnect smart home (TP-Link HS105/KP115)](https://www.ohmconnect.com/how-it-works/smart-home) · [OhmConnect utility eligibility (CA only)](https://www.ohmconnect.com/help/ohmconnect-utility-eligibility-HJDteUcN_) · [Utility Dive — Nest Renew + OhmConnect](https://www.utilitydive.com/news/google-nest-renew-ohmconnect-combine-vpp/715616/)
- [Save on Energy — Peak Perks](https://saveonenergy.ca/en/For-Your-Home/Peak-Perks) · [ev.energy](https://www.ev.energy/en-us/drivers) · [ChargeHQ price/renewables settings](https://chargehq.net/kb/price-and-renewables-settings) · [PredBat](https://springfall2008.github.io/batpred/) · [Green Software Foundation — Carbon Aware SDK](https://github.com/Green-Software-Foundation/carbon-aware-sdk) · [WattTime](https://watttime.org/)

**Hardware**
- [Shelly Gen2 Switch RPC (Toggle/Set/GetStatus)](https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Switch/) · [Shelly Plug US Gen4](https://us.shelly.com/products/shelly-plug-us-gen4-white) · [Shelly Plus Plug US](https://kb.shelly.cloud/knowledge-base/shelly-plus-plug-us)
- [python-kasa](https://github.com/python-kasa/python-kasa) · [python-kasa — IOT vs SMART/KLAP & credentials](https://python-kasa.readthedocs.io/en/latest/topics.html) · [Issue #1603 — HS300 KLAP firmware disables local port 9999](https://github.com/python-kasa/python-kasa/issues/1603)

**Carbon / honesty**
- [TAF — The ABCs of GHGs (marginal ≈150 vs avg ≈50 gCO₂/kWh)](https://taf.ca/abcs-ghgs-underestimating-emission-reduction-potential-green-energy/) · [Electricity Maps — marginal emissions (product context)](https://www.electricitymaps.com/resources/publications/marginal-emissions-introduction)
- [Brattle — Final analysis of Ontario TOU rates (load shifting, little conservation; May 2016)](https://www.brattle.com/insights-events/publications/final-analysis-of-time-of-use-rates-in-ontario-by-brattle-economists-reveals-pattern-of-load-shifting-behavior-but-little-impact-on-energy-conservation/)

**Energy news / event / hedge**
- [IESO 2026 APO summary](https://www.ieso.ca/Sector-Participants/Planning-and-Forecasting/Annual-Planning-Outlook/2026-APO-Summary) · [IESO](https://www.ieso.ca/)
- [Seneca Hackathon](https://www.senecahackathon.com/) · [/about](https://www.senecahackathon.com/about)
- [Google Project Sunroof](https://sunroof.withgoogle.com/) · [MyHEAT solar maps (Canada)](https://myheat.ca/solar-potential-maps/)
</content>
</invoke>

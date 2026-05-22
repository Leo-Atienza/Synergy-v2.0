# Uniqueness Principles — one strategic pattern-break

> Compiled 2026-05-15. Companion to [`build-readiness.md`](build-readiness.md). The *what makes it memorable* doc.
>
> **Thesis: judges see 30+ projects in one afternoon. They remember one weird thing per project, sometimes nothing. Win by committing to ONE strategic pattern-break, polished to glass — not many weird choices in chaos.** This doc defines what that means operationally.

---

## 1. The thesis — why ONE, not many

Three forces are at work in any hackathon judging room:

1. **Pattern matching.** After 5 projects, judges have built a mental template: SaaS aesthetic, 3-column hero, AI chatbot demo, "powering bright futures" copy. They categorize new projects against the template within 15 seconds.
2. **Cognitive load.** By project 20, judges are exhausted. They can hold one memorable detail per project, max. By project 30, sometimes zero.
3. **Anchoring.** The memorable detail becomes the project's identifier when judges deliberate ("oh yeah, the one with the *lightbulb*"). Without one, the project doesn't get retrieved.

**Implication: chaos doesn't help. Strategic pattern-breaks do.** A project where every choice is weird looks like noise. A project where ONE choice is weird becomes "the one with X." This is how WattsDown beat its 2020 GridShift cohort (their color-changing lightbulb), how DrawPlatformer beat its HackUVA cohort (the paper-to-game converter), how AviWind Guardian beat 2,300 ML hackers (the wind-vs-bird tension nobody else surfaced).

**The discipline:** at `/hackathon:scope`, lock the pattern-break. Every choice afterward asks: *"Does this support or distract from the pattern-break?"* If distract → cut. If support → invest.

---

## 2. The 11 pattern-break archetypes for energy hackathons

Drawn from past energy/climate hackathon winners (dossier Section 9). Pick ONE. Combinations of 2 are OK if they reinforce; 3+ is chaos.

### 2.1 The Time-Reveal
Animate something over time, on stage. Outage Equity Index replay (Seed C). WattsDown's bulb pulsing. The key: judges *see motion they didn't expect*. Static maps don't qualify.

### 2.2 The Local-Detail
Name a specific neighborhood, building, person no other team would. "Scarborough East" not "underserved community." "1750 Finch Ave East" (Seneca's address) not "a public building." "Carl Meyer at The Narwhal" not "journalists." Judges remember proper nouns, forget abstractions.

### 2.3 The Hardware-Surprise
Bring a physical object on stage. Plantagotchi's watered plant. WattsDown's color-changing bulb. *In virtual finals: a small physical prop visible on camera (a candle, a dial, a printed map handed to viewers).* High effort, high reward.

### 2.4 The Audience-Inversion
Pitch to an unexpected user. Default audience for an Ontario energy hackathon: climate-conscious decision-maker. Inversions:
- An Enbridge customer-service rep who handles disconnect calls
- A landlord deciding whether to install heat pumps
- An oil & gas executive trying to predict policy risk
- A nurse during a heatwave
- A property assessor pricing climate-resilient buildings

The product is the same; the framing is unexpected.

### 2.5 The Format-Inversion
The artifact is NOT a dashboard. Most energy projects ARE dashboards. Be the one that isn't:
- A **comic** explaining Ontario's grid (panel by panel reveal)
- A **sound piece** sonifying carbon intensity (chord changes with the mix)
- A **letter** auto-generated to a specific official (with the data embedded)
- A **poster** print-ready, downloadable, with a real call to action
- A **physical artifact mailer** — generate a postcard mailing template
- A **calendar** showing each day's Ontario grid color-coded (1-year-at-a-glance)

### 2.6 The Live-Interactive
Judges *do something* during demo. DrawPlatformer asked them to draw. For energy: hand them a phone with the carbon-intensity widget and have them check their phone's location-aware reading. Or invite them to predict the next hour's grid mix before showing the actual.

### 2.7 The Live-Computation
Real-time inference, visibly happening. Generate something live on stage (a per-neighborhood forecast, a building-specific emissions estimate). Spinner shows "thinking…" — then result. Judges believe what they see typed live.

### 2.8 The Tension-Reveal
Surface a conflict between two goods nobody had reconciled. AviWind Guardian: wind power vs migratory birds. For Ontario: nuclear cost overruns vs renewables intermittency; energy poverty vs decarbonization cost; data center power demand vs climate equity; gas peaker reliability vs neighborhood asthma.

### 2.9 The Public-Good Frame
It's not an app — it's open infrastructure. api.carbonintensity.ca (Seed A) is this. Pre-commit to open source + public roadmap + contributor docs. Judges (especially sponsor judges) treat this like a gift not a pitch.

### 2.10 The Embodied Number
Convert abstract data to felt experience. "Ontario peatlands store 1.3 billion tonnes of carbon — that's 40 years of every car in Canada." "May 2022 derecho took out 1.1M customers — every household in Ottawa, Hamilton, and Mississauga combined." "Pickering refurb at $26.8B — enough to build 9 Bruce-Milton transmission corridors." Numbers people can hold.

### 2.11 The Permission Break
Publish what nobody else has dared to. Aggregated school-board energy data with letter grades for parents (the data exists in O.Reg 25/23 PDFs, scattered). Building-level emissions ranked by landlord (LL97 for Toronto, even though Toronto BEPS isn't mandatory yet). The "Ontario Polluter Dashboard" using Climate TRACE. Doing what regulators haven't operationalized — but the underlying data is already public.

---

## 3. The default-breaker checklist

When making each of these choices, check: *would 3+ recent Devpost projects make this exact choice?* If yes → propose alternative.

### 3.1 Names

**Avoid:**
- `Eco*`, `Green*`, `Smart*`, `Grid*`, `Climate*`, `Sustainable*` as prefixes
- Generic verbs as names: `Track`, `Manage`, `Optimize`, `Empower`
- *-ly suffix (Bitly-style) — overused
- "AI" in the name (table stakes in 2026)
- Compound vague nouns: `EnergyHub`, `GridLink`, `ClimateConnect`

**Prefer:**
- Specific proper nouns: `Portlands Watch`, `Newnham Grid`, `Wataynikaneyap Now`
- Verbs that suggest motion: `Unplug`, `Flicker`, `Rewire`
- Short concrete nouns: `Coil`, `Watt`, `Tide`, `Peak`
- Place names with action: `Bruce Says`, `From Pickering`
- Slightly weird construction: `gridcheck.ca`, `whatpoweredyourphone.ca`

### 3.2 UI patterns

**Avoid:**
- Hero gradient + 3-column features below (saturated SaaS template)
- Sidebar nav + top-bar account dropdown (default shadcn dashboard)
- Center-aligned landing with CTA button below tagline (every Y Combinator clone)
- Dark mode toggle in the top-right (not differentiating)
- Standard tabs `Overview | Settings | Reports`
- Generic shadcn slate/zinc gray palette

**Prefer:**
- One-screen artifact (no scroll, no nav, no chrome)
- Hand-drawn diagram in the header (Tom Sachs style — raw, charcoal-y)
- Map as the entire app (no chrome)
- One big number + one verb (Tufte-influenced)
- Custom color palette anchored in the data's meaning (e.g., for nuclear-heavy Ontario: a CANDU-orange and Lake-Ontario-teal pairing)

### 3.3 Copy & voice

**Avoid:**
- "Powering bright futures"
- "Stakeholders," "synergies," "leverage," "empower"
- "Solving climate change"
- "AI-powered" (it's default — say WHAT the AI does)
- "Innovative," "cutting-edge," "groundbreaking"
- "Disrupting" anything
- "Reduces emissions by X gigatons by 2050"

**Prefer:**
- Specific people: "for a parent in Thorncliffe Park"
- Specific data points: "Toronto Hydro restored 99% by April 4 — but the 1% waited weeks"
- Quotes from named journalists, named advocates
- Numbers without hedging
- Direct ask: "Email the OEB at [address] with this template"

### 3.4 Demo openings

**Avoid:**
- "Hi, I'm Leo, and I built..."
- "Today I want to show you..."
- Architecture diagrams in the first 30 seconds
- Tech-stack name-dropping in the first 60 seconds

**Prefer:**
- Open on a number: "1.1 million Ontarians lost power in 13 hours. We didn't know who they were."
- Open on a quote (real, attributed)
- Open on a sound (chord, weather, voice clip)
- Open mid-action (the demo already started; you're catching up)
- Open with a question to the audience that has a counterintuitive answer

### 3.5 README

**Avoid:**
- "An app that..." / "A platform for..." / "A tool to..."
- Stock badges (the rainbow badges of "Made with Love," "Open Source," etc.)
- Architecture diagram as the hero image
- 20-line installation instructions

**Prefer:**
- Hero image is a screenshot of the artifact's most distinctive view
- Opening line is the same as the demo's opening number
- 3-line install
- Honest "what doesn't work yet" section near the top

### 3.6 Submission video

**Avoid:**
- Slack-style chat bubble overlays
- Stock music
- Talking-head intro of yourself
- "Inspired by" backstory in the first 30 seconds

**Prefer:**
- First 5 seconds = the wow moment
- No music, or one chord that drops at the wow
- Your voice over screen-cap, not your face
- Honest about what's mocked

---

## 4. The Uniqueness Gate — when does this apply?

Not every choice needs to be weird. Save the uniqueness for high-leverage moments.

| Choice | Apply uniqueness? | Why |
|---|---|---|
| Project name | YES | Anchoring effect; judges retrieve by name |
| Tagline (one-liner) | YES | First thing judges see on Devpost gallery |
| Demo opening (first 15s) | YES | Primacy effect |
| Demo wow moment (the 10s) | YES | This IS the pattern-break |
| Closing line | YES | Recency effect |
| Hero image / cover | YES | Devpost gallery thumbnail |
| Color palette | YES | Halo effect on perceived design quality |
| README opening | YES | Sponsor judges scan this |
| Tech stack | NO | Use what you know. AI-tool disclosure is honest, not weird. |
| Code style | NO | Per CLAUDE.md: no premature abstraction; whatever works |
| Authentication | NO | If you need auth at all, use Supabase Auth or whatever's default |
| Deploy platform | NO | Vercel. End of discussion. |
| API design (if you have one) | YES if API IS the artifact (Seed A) | Otherwise default REST/JSON |

Rule of thumb: **uniqueness on the surface (what judges see), defaults under the hood (what only you see).**

---

## 5. The Uniqueness Test

For each major artifact (name, tagline, demo, README, hero image), apply:

1. **Would 3+ recent Devpost climate/energy projects make this exact choice?** If yes → reject, propose alternative.
2. **Can a judge describe this 2 hours later without remembering the project name?** If no → not memorable enough.
3. **Does this support or distract from the locked pattern-break?** Distract → cut.
4. **Could this be confused with another team's submission?** If yes → not unique enough.

If 3 of 4 pass → ship it. If <3 → iterate or escalate.

---

## 6. Falling back when weird doesn't work

Sometimes the unique option doesn't land. Pre-decide the fallback:

- **Name** — if the weird name is incomprehensible at first hearing, fall back to one weird modifier on a clear noun (e.g., not `Flicker` → `Flicker Grid`).
- **Demo opening** — if the unexpected hook causes confusion, fall back to a strong stat first, weird thing second.
- **Hero image** — if the hand-drawn diagram looks amateur, fall back to a high-contrast screenshot.
- **Color palette** — if the custom palette looks broken, fall back to **cividis** (perceptually uniform, colorblind-safe, defensible).

The fallback is NEVER the saturated template. Always one notch back from the weirdness, not back to default.

---

## 7. Operational integration with `/hackathon:*` commands

### At `/hackathon:ideate`

For each of the 15 candidate angles (in [`themes.md`](themes.md) + [[../Synergy-v2.0 — Hackathon Brain/20-ideas/seed-ideas]]), identify a possible pattern-break archetype before scoring. The score should reward ideas that have a NATURAL pattern-break, not require one bolted on.

Suggested archetype mappings are in [[../Synergy-v2.0 — Hackathon Brain/10-event/uniqueness-thinking|uniqueness-thinking]] §4.

### At `/hackathon:scope`

**Locking the pattern-break is REQUIRED before `scope.md` is final.** The pattern-break section of `scope.md` should answer:
- What archetype (one of 11 in §2)?
- What's the 10-second demo moment that delivers it?
- What's the fallback if the weird version doesn't land?

The **`demo-moment-critic`** project agent should validate this section.

### At `/hackathon:scaffold`

Color palette + typography decision happens here. NOT default Tailwind. Pick once. Don't switch.

### At `/hackathon:build`

Every commit asks: *does this support or distract from the pattern-break?* If a feature distracts → cut it (1-in-1-out rule).

### At `/hackathon:polish`

The pattern-break gets MORE polish than anything else. If you have 2 hours of polish budget, 90 minutes go to the wow moment, 30 to everything else.

### At `/hackathon:demo`

The demo is STRUCTURED around the pattern-break. Storyboard puts the wow moment at 0:50-1:00. The video's first 5 seconds = the wow.

### At `/hackathon:pitch`

The pitch hook IS the pattern-break. The closing line CALLS BACK to the pattern-break. Memory anchoring works in repetition.

---

## 8. The deeper insight — why this matters in team mode

Hackathons assume teams of 3-5. Teams have a natural creative-tension dynamic: someone proposes, someone pushes back, someone synthesizes. That's the upside. The downside: every weird choice has to survive 3-5 internal critics, and teams optimize for not-embarrassing the most risk-averse member — which silently dilutes the pattern-break by minute 30 of the build.

**In team mode, Claude is the devil's-advocate that holds the line on the locked pattern-break.** When a teammate proposes "let's also add X for safety" and the group is about to consensus into a generic SaaS template, Claude pushes back: *"That dilutes the locked archetype — what are we trading away?"* Claude has no social cost to being the unpopular voice; teammates do.

This is encoded in:
- The project CLAUDE.md "Uniqueness mode" section (operational directives)
- The `demo-moment-critic` agent's scope.md structure validation (the four required Pattern-break sections)
- The `scope-defender` agent's pattern-break alignment check (distracts → CUT regardless of rubric)
- This file (the doctrinal reference)

A team's structural risk on uniqueness is consensus-toward-default. The countermeasure is the locked Pattern-break archetype + Claude's hold-the-line role + every teammate having read this doc before scope-lock. **The pattern-break is the team's contract with itself**, not just a creative preference. Once locked, no teammate (and no Claude) gets to dilute it without the 1-in-1-out trade.

---

## 9. Specific creative directives baked in

### Voice/tone for this project (when we have one)

- First-person from a Toronto-specific perspective
- Direct, sometimes provocative
- Numbers without hedging
- Refuses corporate energy-comms language
- Cites people by name (Carl Meyer, Jack Gibbons, etc.)
- Doesn't say: stakeholders, synergies, leverage, empower, sustainable futures
- Says: specific addresses, specific dollar amounts, specific dates, specific harms

### Visual aesthetic directives

- **NOT** default shadcn slate/zinc gray palette
- **NOT** Bootstrap-y palette
- Pick a palette anchored in the data:
  - For carbon intensity: **cividis** sequential (yellow→navy, perceptually uniform, colorblind-safe)
  - For Ontario specifically: Lake Ontario blue (#1E5F8C), Bruce nuclear teal (#0E7D77), peatland green (#3A5F2F), Niagara hydro silver (#8FA9B8)
  - For peakers/gas: warm orange-red (#C84B1F) used SPARINGLY
- **NOT** stock photos of solar panels
- **YES** real screenshots of the artifact, real maps of real places
- **YES** one weird font choice for headers (e.g., a free serif like Source Serif Pro, or Departure Mono for technical pages)
- **NOT** the standard Tailwind UI / Vercel template hero
- **YES** an unusual UI metaphor specific to the project

### Demo directives

- **NEVER** open with "Hi I'm..."
- Open with a specific number, image, sound, or quote
- The 10-sec moment should involve **motion** (replay, animation, live update, color change)
- Voice in video sounds like a person, not a brand
- End with a **specific** call to action (not "thanks for watching" — instead "email me at [...] if you're a sponsor org and want a copy")

---

## 10. The simplest possible version

If you remember nothing else from this doc:

> **Pick one weird thing. Polish it to glass. Cut everything that distracts from it.**

Cross-references:
- [`build-readiness.md`](build-readiness.md) — operational decision infra
- [`themes.md`](themes.md) — verbatim themes + angle libraries
- [[../Synergy-v2.0 — Hackathon Brain/10-event/uniqueness-thinking|uniqueness-thinking]] — deeper reasoning + per-seed archetypes
- `research-dossier.md` Section 9 — patterns from 30+ past winners
- `research-dossier.md` Section 11 — anti-patterns

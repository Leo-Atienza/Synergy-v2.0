# Uniqueness Principles — one strategic pattern-break

> Compiled 2026-05-15. Companion to [`build-readiness.md`](build-readiness.md). The *what makes it memorable* doc.
>
> **Thesis: judges see 30+ projects in one afternoon. They remember one weird thing per project, sometimes nothing. Win by committing to ONE strategic pattern-break and polishing it to glass. Many weird choices in chaos lose.** This doc explains what that means in practice.

---

## 1. The thesis — why ONE, not many

Three things happen in any hackathon judging room:

1. **Pattern matching.** After 5 projects, judges have a mental template built up: SaaS look, 3-column hero, AI chatbot demo, "powering bright futures" copy. They sort each new project against that template in 15 seconds.
2. **Cognitive load.** By project 20, judges are worn out. They can hold one memorable detail per project, and no more. By project 30, sometimes they hold zero.
3. **Anchoring.** That one memorable detail becomes the project's name when judges talk it over ("oh yeah, the one with the *lightbulb*"). With no detail, nobody brings the project up.

So chaos doesn't help. One sharp pattern-break does. A project where every choice is weird just looks like noise. A project where ONE choice is weird becomes "the one with X." That's how WattsDown beat its 2020 GridShift cohort (their color-changing lightbulb), how DrawPlatformer beat its HackUVA cohort (the paper-to-game converter), and how AviWind Guardian beat 2,300 ML hackers (the wind-vs-bird tension nobody else showed).

**The discipline:** at `/hackathon:scope`, lock the pattern-break. Every choice after that asks: *"Does this support or distract from the pattern-break?"* If it distracts → cut. If it supports → invest.

---

## 2. The 11 pattern-break archetypes for energy hackathons

These come from past energy/climate hackathon winners (dossier Section 9). Pick ONE. Two are fine if they back each other up. Three or more is chaos.

### 2.1 The Time-Reveal
Animate something over time, live on stage. The Outage Equity Index replay (Seed C). WattsDown's bulb pulsing. Judges have to *see motion they didn't expect*. Static maps don't count.

### 2.2 The Local-Detail
Name a specific neighborhood, building, or person no other team would. "Scarborough East," not "underserved community." "1750 Finch Ave East" (Seneca's address), not "a public building." "Carl Meyer at The Narwhal," not "journalists." Judges remember proper nouns and forget vague terms.

### 2.3 The Hardware-Surprise
Bring a physical object on stage. Plantagotchi's watered plant. WattsDown's color-changing bulb. *In a virtual final: a small physical prop you can see on camera (a candle, a dial, a printed map you hold up for viewers).* Lots of work, big payoff.

### 2.4 The Audience-Inversion
Pitch to a user nobody expects. The default audience for an Ontario energy hackathon is a climate-conscious decision-maker. Flip it:
- An Enbridge customer-service rep who takes disconnect calls
- A landlord deciding whether to install heat pumps
- An oil & gas executive trying to predict policy risk
- A nurse during a heatwave
- A property assessor pricing climate-resilient buildings

The product stays the same. The framing is what surprises.

### 2.5 The Format-Inversion
The thing you build is NOT a dashboard. Most energy projects ARE dashboards. Be the one that isn't:
- A **comic** that explains Ontario's grid (one panel at a time)
- A **sound piece** that turns carbon intensity into music (the chord changes with the mix)
- A **letter** auto-written to a named official (with the data built in)
- A **poster** that's print-ready, downloadable, with a real call to action
- A **physical artifact mailer**: generate a postcard mailing template
- A **calendar** that color-codes each day's Ontario grid (a whole year at a glance)

### 2.6 The Live-Interactive
Judges *do something* during the demo. DrawPlatformer asked them to draw. For energy: hand them a phone with the carbon-intensity widget and have them check the reading for their location. Or have them guess the next hour's grid mix before you show the real one.

### 2.7 The Live-Computation
The math runs live, where judges can watch. Generate something on stage (a forecast for one neighborhood, an emissions estimate for one building). A spinner says "thinking…", then the result lands. Judges trust what they watch get typed out live.

### 2.8 The Tension-Reveal
Show a conflict between two good things nobody had squared up. AviWind Guardian: wind power vs migratory birds. For Ontario: nuclear cost overruns vs renewables that come and go; energy poverty vs the cost of cutting carbon; data center power demand vs climate fairness; gas peaker reliability vs neighborhood asthma.

### 2.9 The Public-Good Frame
It's open infrastructure, not an app. api.carbonintensity.ca (Seed A) does this. Promise open source, a public roadmap, and contributor docs from the start. Judges (especially sponsor judges) treat this like a gift, not a pitch.

### 2.10 The Embodied Number
Turn a number people can't picture into something they can feel. "Ontario peatlands store 1.3 billion tonnes of carbon, which is 40 years of every car in Canada." "The May 2022 derecho cut power to 1.1M customers, the same as every household in Ottawa, Hamilton, and Mississauga combined." "The Pickering refurb costs $26.8B, enough to build 9 Bruce-Milton transmission corridors." Numbers a person can hold in their head.

### 2.11 The Permission Break
Publish what nobody else has dared to. School-board energy data pulled together and graded for parents (the data is sitting in scattered O.Reg 25/23 PDFs). Building-level emissions ranked by landlord (LL97 for Toronto, even though Toronto BEPS isn't required yet). The "Ontario Polluter Dashboard" built on Climate TRACE. You do what regulators haven't done yet, and the data behind it is already public.

---

## 3. The default-breaker checklist

For each of these choices, ask: *would 3+ recent Devpost projects make this exact choice?* If yes → propose an alternative.

### 3.1 Names

**Avoid:**
- `Eco*`, `Green*`, `Smart*`, `Grid*`, `Climate*`, `Sustainable*` as prefixes
- Generic verbs as names: `Track`, `Manage`, `Optimize`, `Empower`
- The *-ly suffix (Bitly-style). Overused.
- "AI" in the name (everyone has it in 2026)
- Vague compound nouns: `EnergyHub`, `GridLink`, `ClimateConnect`

**Prefer:**
- Specific proper nouns: `Portlands Watch`, `Newnham Grid`, `Wataynikaneyap Now`
- Verbs that suggest motion: `Unplug`, `Flicker`, `Rewire`
- Short concrete nouns: `Coil`, `Watt`, `Tide`, `Peak`
- Place names with action: `Bruce Says`, `From Pickering`
- Slightly weird construction: `gridcheck.ca`, `whatpoweredyourphone.ca`

### 3.2 UI patterns

**Avoid:**
- Hero gradient + 3-column features below (the worn-out SaaS template)
- Sidebar nav + top-bar account dropdown (default shadcn dashboard)
- Center-aligned landing with a CTA button below the tagline (every Y Combinator clone)
- Dark mode toggle in the top-right (doesn't set you apart)
- Standard tabs `Overview | Settings | Reports`
- Generic shadcn slate/zinc gray palette

**Prefer:**
- One-screen artifact (no scroll, no nav, no chrome)
- Hand-drawn diagram in the header (Tom Sachs style: raw, charcoal-y)
- Map as the whole app (no chrome)
- One big number + one verb (Tufte-influenced)
- A custom color palette tied to what the data means (for nuclear-heavy Ontario, say, a CANDU-orange and Lake-Ontario-teal pairing)

### 3.3 Copy & voice

**Avoid:**
- "Powering bright futures"
- "Stakeholders," "synergies," "leverage," "empower"
- "Solving climate change"
- "AI-powered" (everyone says it. Say WHAT the AI does.)
- "Innovative," "cutting-edge," "groundbreaking"
- "Disrupting" anything
- "Reduces emissions by X gigatons by 2050"

**Prefer:**
- Specific people: "for a parent in Thorncliffe Park"
- Specific data points: "Toronto Hydro restored 99% by April 4, but the 1% waited weeks"
- Quotes from named journalists and named advocates
- Numbers without hedging
- A direct ask: "Email the OEB at [address] with this template"

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

Not every choice needs to be weird. Save the weird for the moments that move the needle.

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

For each major artifact (name, tagline, demo, README, hero image), run these four checks:

1. **Would 3+ recent Devpost climate/energy projects make this exact choice?** If yes → reject it and propose an alternative.
2. **Could a judge describe this 2 hours later without remembering the project name?** If no → it's not memorable enough.
3. **Does this support or distract from the locked pattern-break?** Distract → cut.
4. **Could this be confused with another team's submission?** If yes → it's not unique enough.

If 3 of 4 pass → ship it. If fewer than 3 → iterate or escalate.

---

## 6. Falling back when weird doesn't work

Sometimes the weird option doesn't land. Decide the fallback ahead of time:

- **Name.** If the weird name confuses people the first time they hear it, fall back to one weird word on a clear noun (so `Flicker` becomes `Flicker Grid`).
- **Demo opening.** If the surprising hook confuses people, lead with a strong stat and put the weird thing second.
- **Hero image.** If the hand-drawn diagram looks amateur, fall back to a high-contrast screenshot.
- **Color palette.** If the custom palette looks broken, fall back to **cividis** (even brightness, colorblind-safe, easy to defend).

The fallback is NEVER the worn-out template. Go one notch back from the weirdness, not all the way to default.

---

## 7. Operational integration with `/hackathon:*` commands

### At `/hackathon:ideate`

For each of the 15 candidate angles (in [`themes.md`](themes.md) + [[../Synergy-v2.0 — Hackathon Brain/20-ideas/seed-ideas]]), name a possible pattern-break archetype before you score. The score should reward ideas that come with a NATURAL pattern-break, not ones where you bolt one on.

Suggested archetype mappings are in [[../Synergy-v2.0 — Hackathon Brain/10-event/uniqueness-thinking|uniqueness-thinking]] §4.

### At `/hackathon:scope`

**You MUST lock the pattern-break before `scope.md` is final.** The pattern-break section of `scope.md` answers three questions:
- Which archetype (one of 11 in §2)?
- What's the 10-second demo moment that delivers it?
- What's the fallback if the weird version doesn't land?

The **`demo-moment-critic`** project agent checks this section.

### At `/hackathon:scaffold`

You pick the color palette and typography here. NOT default Tailwind. Pick once. Don't switch.

### At `/hackathon:build`

Every commit asks: *does this support or distract from the pattern-break?* If a feature distracts → cut it (the 1-in-1-out rule).

### At `/hackathon:polish`

The pattern-break gets MORE polish than anything else. If you have 2 hours of polish budget, 90 minutes go to the wow moment and 30 to everything else.

### At `/hackathon:demo`

Build the demo around the pattern-break. The storyboard puts the wow moment at 0:50-1:00. The video's first 5 seconds ARE the wow.

### At `/hackathon:pitch`

The pitch hook IS the pattern-break. The closing line POINTS BACK to it. Repeating it is what makes it stick.

---

## 8. The deeper insight — why this matters in team mode

Hackathons assume teams of 3-5. Teams have a built-in creative tension: someone proposes, someone pushes back, someone pulls it together. That's the upside. The downside is that every weird choice has to survive 3-5 inside critics, and teams play it safe to avoid embarrassing the most risk-averse member. By minute 30 of the build, the pattern-break has quietly washed out.

**In team mode, Claude is the devil's advocate that holds the line on the locked pattern-break.** When a teammate says "let's also add X just to be safe" and the group is sliding toward a generic SaaS template, Claude pushes back: *"That waters down the locked archetype. What are we giving up?"* Claude pays no social price for being the unpopular voice. Teammates do.

This is written into:
- The project CLAUDE.md "Uniqueness mode" section (the working directives)
- The `demo-moment-critic` agent's check on scope.md structure (the four required Pattern-break sections)
- The `scope-defender` agent's pattern-break alignment check (distracts → CUT no matter what the rubric says)
- This file (the reference)

The big risk for a team is drifting back to default by consensus. The fix is the locked Pattern-break archetype, plus Claude's hold-the-line role, plus every teammate reading this doc before scope-lock. **The pattern-break is the team's contract with itself.** It's more than a creative preference. Once locked, no teammate (and no Claude) gets to water it down without the 1-in-1-out trade.

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
- The 10-sec moment should have **motion** (replay, animation, live update, color change)
- The voice in the video sounds like a person, not a brand
- End with a **specific** call to action. Not "thanks for watching." Instead: "email me at [...] if you're a sponsor org and want a copy."

---

## 10. The simplest possible version

If you remember nothing else from this doc, remember this:

> **Pick one weird thing. Polish it to glass. Cut everything that distracts from it.**

Cross-references:
- [`build-readiness.md`](build-readiness.md): operational decision infra
- [`themes.md`](themes.md): verbatim themes + angle libraries
- [[../Synergy-v2.0 — Hackathon Brain/10-event/uniqueness-thinking|uniqueness-thinking]]: deeper reasoning + per-seed archetypes
- `research-dossier.md` Section 9: patterns from 30+ past winners
- `research-dossier.md` Section 11: anti-patterns

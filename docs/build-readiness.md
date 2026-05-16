# Build Readiness — what we lock in before May 24

> Compiled 2026-05-15 after the deep-research dossier (`~/.claude/plans/now-i-want-you-elegant-narwhal.md`). Companion to [`uniqueness-principles.md`](uniqueness-principles.md) (the *what makes it memorable* doc) and [`timeline.md`](timeline.md) (the *when* doc). This file is the *how-we-don't-trip* doc.
>
> **This is decision-prompting infrastructure, not a task list.** Every section asks: "what decision does pre-work here unlock during build?" Treat it as a series of prompts you answer before kickoff, not chores you check off.

---

## 0. The 5 decisions that decide everything

If I lose 90 hours but get these 5 right, I still ship. If I have 96 hours and get any one wrong, I lose.

| # | Decision | Locked at | If unlocked |
|---|---|---|---|
| 1 | **The pattern-break** — the ONE memorably weird thing about this project (see [[uniqueness-principles]]) | `/hackathon:scope` (May 24 eve) | Demo is forgettable; judges can't recall it 2 hours later |
| 2 | **The wedge** — 1 user, 1 problem, 1 screen, 1 metric | `/hackathon:scope` | Scope creep; build runs 6 half-features instead of 2 great ones |
| 3 | **The demo script** — pre-written, 3 minutes, before any code | `/hackathon:scope` | Build wanders; nothing converges on the moment |
| 4 | **The deploy stack** — Vercel (web) / EAS (mobile) / Railway (Python) — picked once, never switched | `/hackathon:scaffold` (May 24-25) | Mid-event stack-switch = automatic loss |
| 5 | **The feature-freeze time** — 75% mark, hard | `/hackathon:scope` | Day 4 spent debugging new features instead of polish |

Everything else is variable. These five are not.

---

## A. Stack readiness (pre-validate, don't pre-commit)

> Decision unlocked: at `/hackathon:scaffold`, you pick from validated options, not unknowns.

Stack picks happen at `/hackathon:ideate` (idea-driven) + `/hackathon:scaffold` (deploy). But the *options* should be validated before May 24.

### Validation checklist (May 16-23 window)

- [ ] **Next.js 16 + Vercel** — create throwaway `pnpm create next-app`, deploy, confirm live URL works. ~15 min.
- [ ] **Supabase** — create a throwaway project, confirm auth + Postgres + Storage work. ~30 min.
- [ ] **Mapbox or MapLibre** — get API key (Mapbox) OR confirm MapLibre tiles render. ~15 min. *Decision: Mapbox if budget-friendly token suffices; MapLibre if you want zero-token / OSS purity (likely the better narrative for an energy hackathon).*
- [ ] **Python + FastAPI + Vercel/Railway** — if any seed leans data-pipeline, validate this path. ~30 min.
- [ ] **Cursor or Claude Code** — pick ONE primary AI dev tool. Practice with it on a throwaway project. ~1 hour. *Do not switch mid-event.*

### Pre-acquire / pre-set-up

- [ ] GitHub repo: empty `synergy-2026` repo created and tested (you can push to it)
- [ ] Vercel team + project pre-linked to a GitHub repo
- [ ] Mapbox account + token if going that route
- [ ] (Optional) ElevenLabs free-tier account if planning AI-voice demo
- [ ] Devpost account (if Seneca uses Devpost — confirm Day 1; see Open Questions)
- [ ] Domain or subdomain reserved (if using a custom URL — but vercel.app is fine)

### Anti-stack rules

- **No new frameworks during build.** If you haven't shipped with it before, don't pick it.
- **No new languages.** If you've written 2 TypeScript files, don't suddenly try Rust.
- **No abstractions before completion.** Repeat code 3× is fine (per project CLAUDE.md).
- **No CSS frameworks except Tailwind v4.** Pre-validated, well-trodden, AI tools support it well.

---

## B. Mock data infrastructure

> Decision unlocked: from minute 1, every view renders something realistic.

Per project CLAUDE.md F-07 rule: never show "No data yet" empty states without CTA or sample content.

### Seed data sources to pre-acquire (or document the URL to fetch on Day 1)

- [ ] **IESO Gen Output by Fuel Hourly** — sample CSV (download one historical day's worth, save to `seed-data/ieso-fuel-mix-sample.csv`)
- [ ] **IESO Real-time Totals XML** — sample snapshot
- [ ] **IESO Intertie Flow** — sample
- [ ] **Toronto ward boundaries** — Open Data Toronto, single GeoJSON
- [ ] **Ontario FSA polygons** — StatCan (postal code first 3 chars geography)
- [ ] **ON-MARG values** — Public Health Ontario CSV (if going equity-route)
- [ ] **May 21 2022 derecho outage timeline** — Hydro One Major Events Response Report PDF (extract or hand-summarize)
- [ ] **Sample census tract attributes** — StatCan WDS API call (income, age, racialized %)
- [ ] **Toronto Cool Spaces** — Open Data Toronto JSON

### Mock data format conventions

- Realistic proper nouns (don't write "Building 1") — use real Toronto addresses, real ward names
- Realistic ranges (kWh per hour, GHG per m², income per tract) — judges spot fakes
- Date stamps within last 7 days for "real-time" feel
- 20+ rows per relevant table minimum
- Include 2-3 edge cases (very high, very low, missing) — judges click outliers first

---

## C. Demo recording infrastructure

> Decision unlocked: on Day 3 evening, you record the demo without learning new tools.

### Pre-validate the recording pipeline

- [ ] **OBS Studio** OR **Loom** — pick one, install, do a 30-second test recording. Pick **Loom** if you've used it before; OBS only if comfortable.
- [ ] **Microphone check** — record yourself; listen back; fix audio issues NOW not at hour 90.
- [ ] **YouTube account** with unlisted upload tested — verify privacy settings work, "Not for Kids" set.
- [ ] **Screen recording resolution** — record at 1920×1080 minimum. Crop later if needed.
- [ ] **External monitor + setup** — if you have one, use it as the demo screen; record from there.

### Demo storyboard template

Already covered in dossier Section 10.4-10.5. Crib:

```
0:00–0:15  Hook — strong line, NOT "Hi I'm..."
0:15–0:35  Problem — one person, one stat, why now
0:35–0:50  Solution — one sentence, plain English
0:50–2:20  Demo — pre-loaded happy path; one wow moment ~10s
2:20–2:45  Tech + Impact — brief stack, why it matters
2:45–3:00  Close — pre-written line, memorable, land it
```

### Voice decision (pre-make this)

- [ ] **Your own voice** vs **ElevenLabs** — your own is more authentic; ElevenLabs is faster + zero re-takes. Most winning solo hackers use their own. **Default: your own.** Override only if you hate your recorded voice.

---

## D. Submission infrastructure

> Decision unlocked: on Day 4 by hour 4, every field is filled with no improvisation.

### Open questions to resolve Day 1 (Phase 1 kickoff)

These are in [`seneca-hackathon-context.md`](seneca-hackathon-context.md) Open Questions section. Email or ask on Discord ASAP:

1. **Submission portal** — Devpost or internal Seneca form?
2. **Submission deadline** — May 26 (photo) or May 28 (website)?
3. **Required fields** — what does the form actually ask?
4. **Video max length** — 180s (default assumed), or different?
5. **Team size limits** — confirm solo is OK
6. **Required APIs / sponsor tech** — challenges unveil Day 1

### Pre-write the submission text (May 22-23)

Many submission fields can be drafted GENERICALLY before you have an idea, then specialized after `/hackathon:scope`:

- [ ] **Inspiration paragraph** — your "why energy hackathon, why Ontario" story. ~150 words.
- [ ] **Personal bio** — for your Devpost profile. ~50 words.
- [ ] **What I learned** — placeholder; fill after build.
- [ ] **Built With** template — pre-write a stub listing your validated stack + a slot for AI tools used (must disclose per MLH policy).

### README template

Use exactly this structure (per dossier Section 10.13):

```markdown
# [Project Name]
**One-line tagline (under 12 words).**
[Live URL] · [Demo video] · [Slides]

![Hero screenshot]

## The Problem
[Stat] [Person affected] [Why now]

## The Solution
[One sentence.] [Demo gif if possible.]

## How it works
[Architecture diagram - Canva]
[3-bullet flow]

## Built with
[Stack with logos]
[AI tools disclosed — Cursor / Claude Code / Copilot / etc.]

## Judging criteria mapping
- Technical: [...]
- Design: [...]
- Originality: [...]
- Impact: [...]

## What's next
[Vision paragraph]

## Run it locally
[3 commands max]
```

Save this as `templates/README.md.tmpl` so you can copy at `/hackathon:scaffold`.

---

## E. Sponsor + mentor infrastructure

> Decision unlocked: when sponsors / mentors are in the room, you know what to ask and to whom.

### Sponsor outreach prep (May 23)

Likely sponsors (per dossier Section 13): OPG, IESO, Bruce Power, Hydro One, Toronto Hydro, Alectra, Enbridge Gas, TAF, OCI, NRCan. **Confirm Day 1.**

For each likely sponsor, pre-draft a 30-second value-prop alignment ("here's why my project matters to YOU specifically") — these will be filled after `/hackathon:ideate`.

### Mentor question backlog (build incrementally)

A running file at `Synergy-v2.0 — Hackathon Brain/10-event/mentor-questions.md` (create at first mentor session). Pre-seed with:

- "Which IESO endpoint has the lowest latency for our use case?"
- "Has anyone tried [our angle] for Ontario before? What killed them?"
- "What's the one criticism a judge would raise about this idea?"
- "Who at [sponsor org] is most likely to want this?"

The structure: questions ranked by who can answer them. Don't waste a mentor's time asking what Google can.

### Connection plan

- [ ] LinkedIn cleaned up + profile pic + headline mentions hackathon
- [ ] Pre-draft "Hey, I'm at the Seneca Energy Hackathon and built X — would love your thoughts" template
- [ ] Goal: 5+ sponsor/mentor connections by end of event (the real ROI of any hackathon)

---

## F. Crisis response infrastructure

> Decision unlocked: when things break, you have pre-canned responses, not panic.

### Backup video (record by Day 3 evening, NOT Day 4)

If the live demo dies during pitch, you switch to the backup video without missing a beat. Per dossier 10.5: **never apologize**, just transition.

### Local-only fallback

- [ ] Demo runs entirely from `localhost` if Vercel deploy fails
- [ ] All data accessible offline (CSV files committed to repo)
- [ ] One git tag (`v1-submission`) frozen at the working commit at submission

### Deploy rollback

- [ ] Know how to roll back a Vercel deploy from the dashboard (1 click, ~30 sec)
- [ ] Save the SHA of the last-known-good deploy in `.hackathon/event.yaml` → `final_commit_sha`

### Crash recovery scripts (pre-write)

- `scripts/reset-deploy.sh` — force-rebuild deploy
- `scripts/local-demo.sh` — spin up local-only demo path

---

## G. Decision frameworks

> Decision unlocked: when you're tired and a choice arises, the framework decides for you.

### Pre-mortem (after `/hackathon:scope`)

For the chosen idea, list:

1. **3 ways this idea could fail technically** (data unavailable, scraper blocked, model doesn't converge)
2. **3 ways this idea could fail narratively** (judges don't care, conflicts with sponsor track, equity framing comes across performative)
3. **3 ways the demo could die on stage** (wifi out, video doesn't play, hostile Q&A)

For each: pre-write the response. Save to `.hackathon/pre-mortem.md`.

### Stuck-rule decision tree (canonical, from CLAUDE.md)

```
Feature 30 min over estimate?
├─ Can I mock the output (return fake data that looks real)?
│  ├─ YES → mock it, commit, move on, log in failures-log.md
│  └─ NO → can I cut this feature entirely without breaking demo path?
│     ├─ YES → cut it, /hackathon:scope --amend, 1-in-1-out
│     └─ NO → ask mentor; if no resolution in 30 more min, mock again or scope-cut harder
```

### Scope-defense pre-canned responses

For when Leo (or Claude) proposes a new feature mid-build:

| Trigger phrase | Canned response |
|---|---|
| "Wouldn't it be cool if..." | "It would. Is it in scope.md? If not, what are we cutting to add it?" |
| "I should also add..." | "Future-Leo will thank you for not adding it. Past-Leo agreed to scope." |
| "But it would only take 30 minutes..." | "Per the 30-min rule, no feature takes 30 minutes. It takes 90." |
| "It would make the demo so much better..." | "Define which 10 seconds of the demo it improves. If you can't, it doesn't." |

---

## H. Mental + physical readiness

> Decision unlocked: you don't burn out by Day 3.

### Sleep protocol (May 16-30)

- **May 16-23:** 8h/night. Bank sleep.
- **May 24 (kickoff):** Sleep BEFORE kickoff at normal time; do NOT pull an all-nighter on Day 0.
- **May 25-27 (build days):** 7h/night minimum. Use mornings (you're sharpest).
- **May 28 (submission day):** 6-7h the night before. Do not pull an all-nighter the night of submission — your video re-takes get worse.
- **May 29-30 (in-person, only if finalist):** 2-3h sleep before pitching is fine, 0h is not.

### Workspace prep (May 22-23)

- [ ] Workspace cleared of distractions (paper, phone if possible)
- [ ] External monitor positioned for screen-share / demo
- [ ] Mic + headphones tested
- [ ] Notebook + pens for hand-drawn diagrams (faster than Canva for ideation)
- [ ] Snacks: high-protein, low-sugar (avoid bread → drowsy, per AngelHack)
- [ ] Coffee plan: 2-3 cups max per day, last cup by 14:00 ET (sleep-protective)
- [ ] Water bottle in arm's reach

### Notification protocol (May 24-28)

- [ ] Phone in another room or Do Not Disturb except for Discord
- [ ] Email batched to 3 check-ins/day (morning, after lunch, end of day)
- [ ] Slack/Teams notifications: ONLY mentor channels + event-organizer announcements
- [ ] Browser tabs: hackathon-only profile if possible

### Focus protocol

- 50-min build sprints + 10-min walk/water (mandatory)
- Every 4 sprints: 30-min full break (eat, away from screen)
- If stuck >30 min on a feature → invoke the stuck-rule, walk for 5
- If energy crashes mid-afternoon: 20-min nap > 4th cup of coffee

### Day-of-pitch (May 30, only if finalist)

- [ ] Outfit picked NOT the event hoodie — judges have seen 50 of them. Wear something memorable but professional. Specific recommendation: a single bold color (red/teal) or a graphic tee under blazer.
- [ ] Backup laptop charger + dongle
- [ ] Printed one-page cheat sheet of key stats
- [ ] Backup demo video on USB + cloud
- [ ] Hand-warmer / breath mint / water

---

## I. Knowledge primers (pre-read list, May 16-23)

> Decision unlocked: when sponsors/judges drop a term, you don't blink.

Time-boxed reads — fit in 6 hours total over the pre-event week:

| Time | Source | Why |
|---|---|---|
| 45 min | [IESO 2025 APO PDF](https://www.ieso.ca/-/media/Files/IESO/Document-Library/planning-forecasts/apo/2025/2025-Annual-Planning-Outlook.pdf) | THE document any IESO mentor will reference |
| 15 min | [Climate Atlas Toronto report](https://climateatlas.ca/sites/default/files/cityreports/Toronto-EN.pdf) | Local climate framing for Theme 3 |
| 30 min | [CalEnviroScreen methodology](https://oehha.ca.gov/calenviroscreen) | Model if going equity-tooling route |
| 20 min | [UK NESO Carbon Intensity API docs](https://api.carbonintensity.org.uk/) | Model for Seed A |
| 15 min | [OpenNEM repo README](https://github.com/opennem/opennem) | Reference for live-grid dashboards |
| 10 min | [Seneca Hackathon 2023 site](https://2023.senecahackathon.com/) | Format precedent — see Mood Vault winner |
| 30 min | [Nick Singh "Win Hackathons" guide](https://www.nicksingh.com/posts/win-hackathons-a-how-to-guide) | Pitch-craft canon |
| 30 min | [MLH judging plan](https://guide.mlh.io/general-information/judging-and-submissions/judging-plan) | What organizers will tell judges |
| 20 min | One MLH winner retrospective from dossier Section 9 | Pattern-recognition |
| 30 min | Read the entire dossier (`~/.claude/plans/now-i-want-you-elegant-narwhal.md`) | Refresh |
| 15 min | Read [`uniqueness-principles.md`](uniqueness-principles.md) and [[../Synergy-v2.0 — Hackathon Brain/10-event/uniqueness-thinking|uniqueness-thinking]] | The pattern-break system |
| 10 min | Confirm your top-3 seeds in vault | Final mental rehearsal |

**Total: ~4.5 hours pre-read.** Spread across 5 evenings. Don't cram.

### Optional dry-run project (May 21-22, ~6 hours)

If you want to validate the stack end-to-end before kickoff: build the tiniest possible IESO-data-fetcher → Next.js page → Vercel deploy. Even just "show today's fuel mix as a list" — proves the pipeline works. **This is optional but recommended.** Discards on May 24; the muscle memory carries over.

---

## J. System-level meta — how Claude operates during build

> Decision unlocked: Claude is a creative partner, not an executor. Without a teammate, Claude IS the second voice in the room.

### Behavioral mode during `/hackathon:build`

When invoked during build, Claude:

1. **Defaults to non-default options.** When proposing a UI/name/color/copy choice, Claude offers the WEIRD option first, the safe option second. Leo decides.
2. **Flags template-y choices.** If Leo says "let me add a hero section with a gradient background and 3-column features grid below," Claude responds: *"That's the saturated SaaS template. Want a non-default version?"*
3. **Pushes back on scope drift toward generic features.** Loyalty is to scope.md, not to making Leo comfortable.
4. **Holds the uniqueness commitment.** The pattern-break locked at `/hackathon:scope` is sacred. Every choice asks: *"Does this support or distract from our pattern-break?"*
5. **Doesn't ask permission for aesthetic calls.** Per project CLAUDE.md: "make creative decisions autonomously rather than asking permission for every choice." During build, Claude picks, then flags if non-default: *"I went with a deep teal because it ties to Bruce nuclear visual identity — override if you'd rather have generic Tailwind blue."*
6. **Names specific things over abstractions.** "Scarborough East" not "a neighborhood." "Portlands Energy Centre" not "a power plant." "Carl Meyer at The Narwhal" not "a journalist."
7. **Refuses corporate-comms language.** No "leverage," "synergies," "stakeholders," "powering bright futures." Direct language with proper nouns.

### What Claude WILL NOT do during build (without explicit permission)

- Switch frameworks / languages mid-event
- Add features outside scope.md
- Add abstractions when 3× repetition works
- Write tests (unless test IS the demo)
- Use default shadcn slate/zinc gray palette without flagging
- Open the README with "An app that..." or "A platform for..."
- Suggest "AI-powered" as a feature description (it's table stakes in 2026)
- Add a sidebar + top-nav SaaS template without offering an alternative

### Project-local agents to invoke during build

- **`scope-defender`** — every new feature idea
- **`demo-moment-critic`** — before any major implementation choice (does this support the demo moment?)
- **`energy-domain-researcher`** — any new dataset/metric question (but most are answered in [`energy-domain.md`](energy-domain.md) now)

---

## Pre-event day-by-day (May 15-23, 9 days)

| Date | Goal | Time | Output |
|---|---|---|---|
| May 15 (today) | Lock context: dossier + readiness docs | 4h (done) | `~/.claude/plans/now-i-want-you-elegant-narwhal.md`, this file, [[uniqueness-principles]], [[uniqueness-thinking]] |
| May 16 | Read IESO 2025 APO + Climate Atlas Toronto | 1h | Mental model of Ontario grid trajectory |
| May 17 | Validate Next.js + Vercel + Supabase + Mapbox/MapLibre stack | 2h | All deploys green; throwaway project shipped |
| May 18 | Validate Cursor or Claude Code primary tool | 1h | One throwaway feature shipped using it |
| May 19 | Pre-fetch seed data (IESO sample, Toronto wards, ON-MARG sample) | 1h | `seed-data/` folder populated |
| May 20 | Read pitch-craft (Nick Singh + MLH judging) | 1h | Pitch template internalized |
| May 21 | Optional dry-run project (4-6h) | 4-6h | Throwaway IESO data fetcher deployed |
| May 22 | **Idea-lock self-deadline.** Run `/hackathon:ideate` against the 15 seeds in [`themes.md`](themes.md). Pick 1. Pre-write demo script. | 3h | `.hackathon/event.yaml` `stack_preset` set; rough demo script |
| May 23 | Final review of vault + docs; sleep 8h | 1h | Mental rehearsal of Day 1 |
| **May 24** | **Kickoff Day 0.** Reconcile our angle with the actual challenge sets. Run `/hackathon:scope`. Lock pattern-break. Run `/hackathon:scaffold`. | 12h | scope.md + live URL + uniqueness commitment |

If May 24 challenge sets force a pivot from the 15 seeds → use the same scoring rubric ([[../Synergy-v2.0 — Hackathon Brain/20-ideas/README]]). The infrastructure here applies regardless of which idea wins.

---

## What this doc is NOT

- Not a substitute for `/hackathon:scope` — scope decisions still happen live on May 24
- Not stack-locked — every section works for web, mobile, data-viz, or agent stacks
- Not exhaustive — if a gap surfaces during build, log it in [`failures-log.md`](../.hackathon/failures-log.md) and the next iteration of this doc fixes it post-`/hackathon:retro`

## Cross-references

- [`uniqueness-principles.md`](uniqueness-principles.md) — the *what makes it memorable* doc
- [`energy-domain.md`](energy-domain.md) — Ontario data, regulators, metrics
- [`themes.md`](themes.md) — verbatim themes + angle libraries
- [`timeline.md`](timeline.md) — day-by-day with `/hackathon:*` command mapping
- [`seneca-hackathon-context.md`](seneca-hackathon-context.md) — event facts + open questions
- `~/.claude/plans/now-i-want-you-elegant-narwhal.md` — the full dossier
- [[../Synergy-v2.0 — Hackathon Brain/10-event/uniqueness-thinking|uniqueness-thinking]] — deeper reasoning + archetype library

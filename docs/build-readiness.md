# Build Readiness — what we lock in before May 24

> Put together 2026-05-15 after the deep-research dossier (`research-dossier.md`). Goes with [`uniqueness-principles.md`](uniqueness-principles.md) (the *what makes it memorable* doc) and [`timeline.md`](timeline.md) (the *when* doc). This file is the *how-we-don't-trip* doc.
>
> **This file helps you make decisions. It is not a task list.** Every section asks one thing: "what decision does the pre-work here let us make during build?" Treat it as a set of questions you answer before kickoff, not chores you tick off.

---

## 0. The 5 decisions that decide everything

If I lose 90 hours but get these 5 right, I still ship. If I have 96 hours and get any one wrong, I lose.

| # | Decision | Locked at | If unlocked |
|---|---|---|---|
| 1 | **The pattern-break.** The ONE memorably weird thing about this project (see [[uniqueness-principles]]) | `/hackathon:scope` (May 24 eve) | Demo is forgettable; judges can't recall it 2 hours later |
| 2 | **The wedge.** 1 user, 1 problem, 1 screen, 1 metric | `/hackathon:scope` | Scope creep; build runs 6 half-features instead of 2 great ones |
| 3 | **The demo script.** Pre-written, 3 minutes, before any code | `/hackathon:scope` | Build wanders; nothing converges on the moment |
| 4 | **The deploy stack.** Vercel (web), EAS (mobile), or Railway (Python). Picked once, never switched | `/hackathon:scaffold` (May 24-25) | Mid-event stack-switch = automatic loss |
| 5 | **The feature-freeze time.** 75% mark, hard | `/hackathon:scope` | Day 4 spent debugging new features instead of polish |

Everything else can change. These five can't.

---

## A. Stack readiness (pre-validate, don't pre-commit)

> Decision unlocked: at `/hackathon:scaffold`, you pick from tested options, not unknowns.

Stack picks happen at `/hackathon:ideate` (idea-driven) and `/hackathon:scaffold` (deploy). Test the *options* before May 24.

### Validation checklist (May 16-23 window)

- [ ] **Next.js 16 + Vercel**: create a throwaway `pnpm create next-app`, deploy, confirm the live URL works. ~15 min.
- [ ] **Supabase**: create a throwaway project, confirm auth + Postgres + Storage work. ~30 min.
- [ ] **Mapbox or MapLibre**: get an API key (Mapbox) OR confirm MapLibre tiles render. ~15 min. *Decision: pick Mapbox if a cheap token is enough; pick MapLibre if you want zero tokens and open-source purity (probably the better story for an energy hackathon).*
- [ ] **Python + FastAPI + Vercel/Railway**: if any seed leans on a data pipeline, test this path. ~30 min.
- [ ] **Cursor or Claude Code**: pick ONE main AI dev tool. Practice with it on a throwaway project. ~1 hour. *Do not switch mid-event.*

### Pre-acquire / pre-set-up

- [ ] GitHub repo: empty `synergy-2026` repo created and tested (you can push to it)
- [ ] Vercel team + project pre-linked to a GitHub repo
- [ ] Mapbox account + token if going that route
- [ ] (Optional) ElevenLabs free-tier account if planning an AI-voice demo
- [ ] Devpost account (if Seneca uses Devpost; confirm Day 1, see Open Questions)
- [ ] Domain or subdomain reserved (if using a custom URL; vercel.app is fine too)

### Anti-stack rules

- **No new frameworks during build.** If you haven't shipped with it before, don't pick it.
- **No new languages.** If you've written 2 TypeScript files, don't suddenly try Rust.
- **No abstractions before the thing works.** Repeating code 3× is fine (per project CLAUDE.md).
- **No CSS frameworks except Tailwind v4.** It's tested, widely used, and AI tools handle it well.

---

## B. Mock data infrastructure

> Decision unlocked: from minute 1, every view shows something realistic.

Per the project CLAUDE.md F-07 rule: never show a "No data yet" empty state without a CTA or sample content.

### Seed data sources to grab early (or write down the URL to fetch on Day 1)

- [ ] **IESO Gen Output by Fuel Hourly**: sample CSV (download one past day's worth, save to `seed-data/ieso-fuel-mix-sample.csv`)
- [ ] **IESO Real-time Totals XML**: sample snapshot
- [ ] **IESO Intertie Flow**: sample
- [ ] **Toronto ward boundaries**: Open Data Toronto, single GeoJSON
- [ ] **Ontario FSA polygons**: StatCan (geography for the first 3 characters of a postal code)
- [ ] **ON-MARG values**: Public Health Ontario CSV (if going the equity route)
- [ ] **May 21 2022 derecho outage timeline**: Hydro One Major Events Response Report PDF (extract or summarize by hand)
- [ ] **Sample census tract attributes**: StatCan WDS API call (income, age, racialized %)
- [ ] **Toronto Cool Spaces**: Open Data Toronto JSON

### How to format the mock data

- Use real proper nouns. Don't write "Building 1"; use real Toronto addresses and real ward names.
- Use realistic ranges (kWh per hour, GHG per m², income per tract). Judges spot fakes.
- Date stamps within the last 7 days so it feels real-time
- At least 20 rows per relevant table
- Add 2-3 edge cases (very high, very low, missing). Judges click the outliers first.

---

## C. Demo recording infrastructure

> Decision unlocked: on Day 3 evening, you record the demo without learning new tools.

### Test the recording setup first

- [ ] **OBS Studio** OR **Loom**: pick one, install it, do a 30-second test recording. Pick **Loom** if you've used it before; pick OBS only if you're comfortable with it.
- [ ] **Microphone check**: record yourself and listen back. Fix audio problems NOW, not at hour 90.
- [ ] **YouTube account** with an unlisted upload tested. Check the privacy settings work and "Not for Kids" is set.
- [ ] **Screen recording resolution**: record at 1920×1080 or higher. Crop later if needed.
- [ ] **External monitor + setup**: if you have one, use it as the demo screen and record from there.

### Demo storyboard template

The dossier covers this in Section 10.4-10.5. Quick version:

```
0:00–0:15  Hook — strong line, NOT "Hi I'm..."
0:15–0:35  Problem — one person, one stat, why now
0:35–0:50  Solution — one sentence, plain English
0:50–2:20  Demo — pre-loaded happy path; one wow moment ~10s
2:20–2:45  Tech + Impact — brief stack, why it matters
2:45–3:00  Close — pre-written line, memorable, land it
```

### Voice decision (pre-make this)

- [ ] **Your own voice** vs **ElevenLabs**. Your own voice sounds more real; ElevenLabs is faster and needs no re-takes. Most winning solo hackers use their own voice. **Default: your own.** Switch only if you hate how your recorded voice sounds.

---

## D. Submission infrastructure

> Decision unlocked: on Day 4 by hour 4, every field is filled in and you're not improvising.

### Open questions to resolve Day 1 (Phase 1 kickoff)

These are in the Open Questions section of [`seneca-hackathon-context.md`](seneca-hackathon-context.md). Email or ask on Discord as soon as you can:

1. **Submission portal**: Devpost or an internal Seneca form?
2. **Submission deadline**: May 26 (photo) or May 28 (website)?
3. **Required fields**: what does the form actually ask?
4. **Video max length**: 180s (the assumed default), or something else?
5. **Team size limits**: confirm solo is OK
6. **Required APIs / sponsor tech**: challenges unveil Day 1

### Pre-write the submission text (May 22-23)

You can draft many submission fields in a generic way before you have an idea, then tailor them after `/hackathon:scope`:

- [ ] **Inspiration paragraph**: your "why energy hackathon, why Ontario" story. ~150 words.
- [ ] **Personal bio**: for your Devpost profile. ~50 words.
- [ ] **What I learned**: placeholder; fill in after build.
- [ ] **Built With** template: pre-write a stub that lists your tested stack plus a slot for the AI tools you used (MLH policy says you must disclose them).

### README template

Use exactly this structure (from dossier Section 10.13):

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

> Decision unlocked: when sponsors and mentors are in the room, you know what to ask and who to ask.

### Sponsor outreach prep (May 23)

Likely sponsors (from dossier Section 13): OPG, IESO, Bruce Power, Hydro One, Toronto Hydro, Alectra, Enbridge Gas, TAF, OCI, NRCan. **Confirm Day 1.**

For each likely sponsor, pre-draft a 30-second pitch on why your project matters to them specifically. Fill these in after `/hackathon:ideate`.

### Mentor question backlog (build it up over time)

Keep a running file at `Synergy-v2.0 — Hackathon Brain/10-event/mentor-questions.md` (create it at your first mentor session). Start it with:

- "Which IESO endpoint has the lowest latency for our use case?"
- "Has anyone tried [our angle] for Ontario before? What killed them?"
- "What's the one criticism a judge would raise about this idea?"
- "Who at [sponsor org] is most likely to want this?"

Rank the questions by who can answer them. Don't waste a mentor's time asking what Google can answer.

### Connection plan

- [ ] LinkedIn cleaned up, profile pic added, headline mentions the hackathon
- [ ] Pre-draft a template: "Hey, I'm at the Seneca Energy Hackathon and built X. Would love your thoughts."
- [ ] Goal: 5+ sponsor or mentor connections by the end of the event (the real payoff of any hackathon)

---

## F. Crisis response infrastructure

> Decision unlocked: when things break, you have ready-made responses instead of panic.

### Backup video (record by Day 3 evening, NOT Day 4)

If the live demo dies during the pitch, switch to the backup video without missing a beat. Per dossier 10.5: **never apologize**, just move on.

### Local-only fallback

- [ ] Demo runs entirely from `localhost` if the Vercel deploy fails
- [ ] All data works offline (CSV files committed to the repo)
- [ ] One git tag (`v1-submission`) frozen at the working commit when you submit

### Deploy rollback

- [ ] Know how to roll back a Vercel deploy from the dashboard (1 click, ~30 sec)
- [ ] Save the SHA of the last known good deploy in `.hackathon/event.yaml` → `final_commit_sha`

### Crash recovery scripts (pre-write)

- `scripts/reset-deploy.sh`: force-rebuild the deploy
- `scripts/local-demo.sh`: spin up the local-only demo path

---

## G. Decision frameworks

> Decision unlocked: when you're tired and a choice comes up, the framework decides for you.

### Pre-mortem (after `/hackathon:scope`)

For the chosen idea, list:

1. **3 ways this idea could fail technically** (data unavailable, scraper blocked, model doesn't converge)
2. **3 ways this idea could fail as a story** (judges don't care, it clashes with the sponsor track, the equity framing comes across as performative)
3. **3 ways the demo could die on stage** (wifi out, video doesn't play, hostile Q&A)

For each one, pre-write the response. Save to `.hackathon/pre-mortem.md`.

### Stuck-rule decision tree (canonical, from CLAUDE.md)

```
Feature 30 min over estimate?
├─ Can I mock the output (return fake data that looks real)?
│  ├─ YES → mock it, commit, move on, log in failures-log.md
│  └─ NO → can I cut this feature entirely without breaking demo path?
│     ├─ YES → cut it, /hackathon:scope --amend, 1-in-1-out
│     └─ NO → ask mentor; if no resolution in 30 more min, mock again or scope-cut harder
```

### Scope-defense ready-made responses

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
- **May 24 (kickoff):** Sleep BEFORE kickoff at your normal time. Do NOT pull an all-nighter on Day 0.
- **May 25-27 (build days):** 7h/night minimum. Use the mornings, when you're sharpest.
- **May 28 (submission day):** 6-7h the night before. Don't pull an all-nighter the night you submit; your video re-takes get worse.
- **May 29-30 (in-person, only if finalist):** 2-3h of sleep before pitching is fine, 0h is not.

### Workspace prep (May 22-23)

- [ ] Workspace cleared of distractions (paper, and phone if possible)
- [ ] External monitor placed for screen-share and demo
- [ ] Mic + headphones tested
- [ ] Notebook + pens for hand-drawn diagrams (faster than Canva when brainstorming)
- [ ] Snacks: high-protein, low-sugar (skip bread, it makes you drowsy, per AngelHack)
- [ ] Coffee plan: 2-3 cups max per day, last cup by 14:00 ET so it doesn't wreck your sleep
- [ ] Water bottle within reach

### Notification protocol (May 24-28)

- [ ] Phone in another room or on Do Not Disturb except for Discord
- [ ] Email checked 3 times a day (morning, after lunch, end of day)
- [ ] Slack/Teams notifications: ONLY mentor channels and event-organizer announcements
- [ ] Browser tabs: a hackathon-only profile if possible

### Focus protocol

- 50-min build sprints, then a 10-min walk or water break (mandatory)
- Every 4 sprints: a 30-min full break (eat, away from the screen)
- If you're stuck >30 min on a feature → use the stuck-rule, then walk for 5
- If your energy crashes mid-afternoon, take a 20-min nap instead of a 4th cup of coffee

### Day-of-pitch (May 30, only if finalist)

- [ ] Outfit picked, and NOT the event hoodie. Judges have seen 50 of them. Wear something memorable but professional. One idea: a single bold color (red or teal) or a graphic tee under a blazer.
- [ ] Backup laptop charger + dongle
- [ ] Printed one-page cheat sheet of key stats
- [ ] Backup demo video on a USB stick and in the cloud
- [ ] Hand-warmer, breath mint, water

---

## I. Knowledge primers (pre-read list, May 16-23)

> Decision unlocked: when a sponsor or judge drops a term, you don't blink.

Time-boxed reads. They fit in 6 hours total over the pre-event week:

| Time | Source | Why |
|---|---|---|
| 45 min | [IESO 2025 APO PDF](https://www.ieso.ca/-/media/Files/IESO/Document-Library/planning-forecasts/apo/2025/2025-Annual-Planning-Outlook.pdf) | THE document any IESO mentor will point to |
| 15 min | [Climate Atlas Toronto report](https://climateatlas.ca/sites/default/files/cityreports/Toronto-EN.pdf) | Local climate framing for Theme 3 |
| 30 min | [CalEnviroScreen methodology](https://oehha.ca.gov/calenviroscreen) | A model if you go the equity-tooling route |
| 20 min | [UK NESO Carbon Intensity API docs](https://api.carbonintensity.org.uk/) | A model for Seed A |
| 15 min | [OpenNEM repo README](https://github.com/opennem/opennem) | A reference for live-grid dashboards |
| 10 min | [Seneca Hackathon 2023 site](https://2023.senecahackathon.com/) | Format precedent; see the Mood Vault winner |
| 30 min | [Nick Singh "Win Hackathons" guide](https://www.nicksingh.com/posts/win-hackathons-a-how-to-guide) | The classic on pitch craft |
| 30 min | [MLH judging plan](https://guide.mlh.io/general-information/judging-and-submissions/judging-plan) | What organizers will tell judges |
| 20 min | One MLH winner retrospective from dossier Section 9 | Spotting patterns |
| 30 min | Read the entire dossier (`research-dossier.md`) | Refresh |
| 15 min | Read [`uniqueness-principles.md`](uniqueness-principles.md) and [[../Synergy-v2.0 — Hackathon Brain/10-event/uniqueness-thinking|uniqueness-thinking]] | The pattern-break system |
| 10 min | Confirm your top-3 seeds in the vault | Final mental rehearsal |

**Total: ~4.5 hours of pre-reading.** Spread it across 5 evenings. Don't cram.

### Optional dry-run project (May 21-22, ~6 hours)

Want to test the whole stack before kickoff? Build the smallest possible IESO-data-fetcher → Next.js page → Vercel deploy. Even just "show today's fuel mix as a list" proves the pipeline works. **This is optional but recommended.** You throw it away on May 24, but the muscle memory stays with you.

---

## J. System-level meta — how Claude operates during build

> Decision unlocked: Claude is a creative partner, not an executor. Without a teammate, Claude IS the second voice in the room.

### How Claude behaves during `/hackathon:build`

When invoked during build, Claude:

1. **Defaults to non-default options.** When proposing a UI, name, color, or copy choice, Claude offers the WEIRD option first and the safe option second. Leo decides.
2. **Flags template-y choices.** If Leo says "let me add a hero section with a gradient background and a 3-column features grid below," Claude responds: *"That's the saturated SaaS template. Want a non-default version?"*
3. **Pushes back on scope drift toward generic features.** Claude's loyalty is to scope.md, not to making Leo comfortable.
4. **Holds the uniqueness commitment.** The pattern-break locked at `/hackathon:scope` is sacred. Every choice asks: *"Does this support our pattern-break or distract from it?"*
5. **Doesn't ask permission for look-and-feel calls.** Per the project CLAUDE.md: "make creative decisions autonomously rather than asking permission for every choice." During build, Claude picks, then flags it if it's non-default: *"I went with a deep teal because it ties to Bruce nuclear's visual identity. Override it if you'd rather have generic Tailwind blue."*
6. **Names specific things instead of abstractions.** "Scarborough East" not "a neighborhood." "Portlands Energy Centre" not "a power plant." "Carl Meyer at The Narwhal" not "a journalist."
7. **Refuses corporate-comms language.** No "leverage," "synergies," "stakeholders," or "powering bright futures." Plain words with proper nouns.

### What Claude WILL NOT do during build (without explicit permission)

- Switch frameworks or languages mid-event
- Add features outside scope.md
- Add abstractions when repeating code 3× works
- Write tests (unless the test IS the demo)
- Use the default shadcn slate/zinc gray palette without flagging it
- Open the README with "An app that..." or "A platform for..."
- Suggest "AI-powered" as a feature description (it's table stakes in 2026)
- Add a sidebar + top-nav SaaS template without offering an alternative

### Project-local agents to invoke during build

- **`scope-defender`**: for every new feature idea
- **`demo-moment-critic`**: before any major build choice (does this support the demo moment?)
- **`energy-domain-researcher`**: for any new dataset or metric question (though [`energy-domain.md`](energy-domain.md) answers most of them now)

---

## Pre-event day-by-day (May 15-23, 9 days)

| Date | Goal | Time | Output |
|---|---|---|---|
| May 15 | Lock context: dossier + readiness docs | 4h (done) | `research-dossier.md`, this file, [[uniqueness-principles]], [[uniqueness-thinking]] |
| May 16 (today) | Read IESO 2025 APO + Climate Atlas Toronto + finalize Claude config (audit + team-mode flip) | 1h read + 1h config (done) | Mental model of Ontario grid trajectory; all CLAUDE.md/agent doctrine consistent + pushed to GitHub |
| May 17 | Validate Next.js + Vercel + Supabase + Mapbox/MapLibre stack | 2h | All deploys green; throwaway project shipped |
| May 18 | Validate Cursor or Claude Code primary tool | 1h | One throwaway feature shipped using it |
| May 19 | Pre-fetch seed data (IESO sample, Toronto wards, ON-MARG sample) | 1h | `seed-data/` folder populated |
| May 20 | Read pitch-craft (Nick Singh + MLH judging) | 1h | Pitch template internalized |
| May 21 | Optional dry-run project (4-6h) | 4-6h | Throwaway IESO data fetcher deployed |
| May 22 | **Idea-lock self-deadline.** Run `/hackathon:ideate` against the 15 seeds in [`themes.md`](themes.md). Pick 1. Pre-write the demo script. | 3h | `.hackathon/event.yaml` `stack_preset` set; rough demo script |
| May 23 | Final review of the vault + docs; sleep 8h | 1h | Mental rehearsal of Day 1 |
| **May 24** | **Kickoff Day 0.** Match our angle to the actual challenge sets. Run `/hackathon:scope`. Lock the pattern-break. Run `/hackathon:scaffold`. | 12h | scope.md + live URL + uniqueness commitment |

If the May 24 challenge sets force a pivot away from the 15 seeds, use the same scoring rubric ([[../Synergy-v2.0 — Hackathon Brain/20-ideas/README]]). Everything here applies no matter which idea wins.

---

## What this doc is NOT

- Not a replacement for `/hackathon:scope`. Scope decisions still happen live on May 24.
- Not stack-locked. Every section works for web, mobile, data-viz, or agent stacks.
- Not complete. If a gap shows up during build, log it in [`failures-log.md`](../.hackathon/failures-log.md), and the next version of this doc fixes it after `/hackathon:retro`.

## Cross-references

- [`uniqueness-principles.md`](uniqueness-principles.md): the *what makes it memorable* doc
- [`energy-domain.md`](energy-domain.md): Ontario data, regulators, metrics
- [`themes.md`](themes.md): verbatim themes + angle libraries
- [`timeline.md`](timeline.md): day-by-day with `/hackathon:*` command mapping
- [`seneca-hackathon-context.md`](seneca-hackathon-context.md): event facts + open questions
- `research-dossier.md`: the full dossier
- [[../Synergy-v2.0 — Hackathon Brain/10-event/uniqueness-thinking|uniqueness-thinking]]: deeper reasoning + archetype library

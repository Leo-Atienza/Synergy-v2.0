# Seneca Energy Hackathon 2026 — what we know

> Put together 2026-05-15 from the pre-event info session (slides 05 Timeline + 07 Challenge Categories + Themes 1-3 handout) and <https://www.senecahackathon.com/>. `/hackathon:init` reads this file alongside `.hackathon/event.yaml` to fill in event details. Update it as new facts show up from kickoff (May 24), the Discord/Teams mentor channels, or an organizer email.

> **Legend:** `[confirmed]` = locked in event.yaml • `[tbc]` = needs confirmation, see Open Questions • `[contradiction]` = sources disagree, see Open Questions

---

## Event

- **Name:** Seneca Energy Hackathon 2026 `[confirmed]`
- **Tagline:** "The Energy to Innovate" `[confirmed: website]`
- **Host:** Seneca Polytechnic (formerly Seneca College) `[confirmed: website]`
- **Dates:** 2026-05-24 → 2026-05-30 `[confirmed]`
- **Format:** Hybrid. Virtual build phase + in-person finale `[confirmed: website]`
- **Theme:** Energy / sustainability. Three challenge categories (full text in [`themes.md`](themes.md))
- **Team size:** `[tbc]`. Slides showed teams in the room, but the rules weren't displayed.
- **Eligibility:** `[tbc]`. Assume Seneca-affiliated; confirm before bringing in outside collaborators.

## Phases

| Phase | Window | Mode | Venue |
|---|---|---|---|
| Phase 1 — Virtual Build | 2026-05-24 → 2026-05-28 | Remote | Discord + Microsoft Teams (mentor channels) |
| Phase 2 — In-Person Stage | 2026-05-29 → 2026-05-30 | In-person | Seneca Newnham Campus |

## Logistics

- **Build venue:** virtual; mentor support via Discord + Microsoft Teams during Phase 1 `[confirmed: website]`
- **Finalist prep venue (May 29):** Classroom Hubs, Newnham Campus `[confirmed: photo]`
- **Finale venue (May 30):** HELIX Main Stage, Seneca Newnham Campus `[confirmed: website + photo]`
- **Newnham Campus address:** 1750 Finch Ave East, Toronto, ON M2J 2X5 `[confirmed: website]`
- **Mentor schedule:** "Intensive mentor support" during Phase 1; specific hours `[tbc]`
- **Sponsor office hours:** `[tbc]`. Sponsors not yet announced.

## Rules / required tech

- **Required APIs / SDKs / sponsor tech:** `[tbc]`. Challenge sets unveil at kickoff (2026-05-24).
- **Disqualifying constraints:** `[tbc]`
- **IP / open-source rules:** `[tbc]`

## Judging

- **Format:** Hybrid `[confirmed]`. Async submission May 28 + live finale May 30.
- **Top finalists revealed:** 2026-05-28 `[confirmed: photo]`. Same day as the submission deadline.
- **Rubric axes:** `[confirmed: kickoff deck slide 27]`. 5-axis: Innovation & Creativity · Impact & Relevance · Technical Execution · Presentation & Communication · Collaboration & Teamwork (weights not shown; assume equal)
- **Sponsor prize tracks:** `[tbc]`

## Submission

- **Portal:** `[tbc]`. Likely Devpost or an internal Seneca form.
- **Deadline:** 2026-05-26, 23:59 local time (Toronto, ET / UTC-04:00) `[confirmed: kickoff]`
  - Website (pre-event): Phase 1 "May 24–28" hinted at a Thursday May 28 submission. That was a guess from the marketing page.
  - **Opening Day deck (slide 9), seen at kickoff May 24:** qualifier video due **May 26, 11:59 PM** → top finalists revealed May 28 → in-person finale May 30
  - **RESOLVED 2026-05-25:** trust the kickoff deck over the pre-event website → build to **May 26**. The risk is one-sided. Building to the earlier of two clashing deadlines costs nothing if you're wrong. Building to the later one and missing the cutoff scores 0.
- **Required fields (assumed):** description, how it works, inspiration, tech stack, video, screenshots
- **Video format / max length:** `[confirmed: kickoff]`. YouTube video, 5-min target and 6-min (360s) hard max. The video is the main thing we hand in (a demo on camera), not a deployed app.

## Contact

- **Email:** hackathon@senecapolytechnic.ca `[confirmed: website]`
- **Learning resource:** [learnatocto.com](https://learnatocto.com) `[confirmed: website]`
- **Communication channels (during event):** Discord + Microsoft Teams `[confirmed: website]`

## Themes (1-line summary — full text in [`themes.md`](themes.md))

1. **Clean Energy Generation & Integration**: solar/wind/renewables; maps, visuals, digital tools
2. **Smart Grid, Resilience & Electrification**: EVs, electric heating, weather resilience
3. **Community Energy, Equity & Sustainability**: fairness, energy poverty, climate exposure inequality

---

## Open questions

The organizers need to confirm these before we lock scope. Ask on Discord/Teams as soon as Phase 1 opens, or email hackathon@senecapolytechnic.ca before the event.

| # | Question | Why it matters | Source of conflict / gap |
|---|---|---|---|
| 1 | ~~Submission deadline: May 26 or May 28?~~ **RESOLVED → May 26 23:59** (kickoff deck slide 9) | Determines build window — now ~1.5 days | Pre-event website said May 28; kickoff deck confirmed May 26 |
| 2 | What are the required APIs / sponsor tech / datasets? | Disqualifies if missed. Affects stack choice at `/hackathon:ideate`. | Challenge sets unveil at kickoff May 24 |
| 3 | Team size limits (max members? solo allowed?) | Decides `/hackathon:team` mode | Not stated |
| 4 | Prize pool & sponsor list | Informs which sponsor tracks to target | Not stated |
| 5 | Submission video max length | Affects `/hackathon:demo` storyboard | Not stated; defaulted to 180s |
| 6 | Eligibility — Seneca students only or open? | Determines if external collaborators allowed | Not stated |
| 7 | Judging rubric & axis weights | Drives `demo-moment-critic` evaluation | Not stated; defaulted to universal 4-axis |

## Notes / observations

- Slide deck slide numbers: 05 Timeline, 07 Challenge Categories. That points to a deck of 8 or more slides, so there's more content (probably slides on prizes, sponsors, rules) the user didn't capture. **Action:** check if the deck PDF is on the website or Discord and ingest it.
- The website page is thin on specifics. It will probably get filled in as kickoff approaches. Re-fetch on May 23 and May 24 to catch updates.
- "learnatocto.com" points to a sponsor or partner. Octopus Energy? Or an internal Seneca learning platform? Worth checking before the event.

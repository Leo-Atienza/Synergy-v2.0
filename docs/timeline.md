# Seneca Energy Hackathon 2026 — Timeline & ATLAS workflow map

> Source: kickoff slide 05 "TIMELINE" (photographed 2026-05-15) + <https://www.senecahackathon.com/>. The two sources disagree on the submission deadline. We went with the website (May 28). See [`seneca-hackathon-context.md`](seneca-hackathon-context.md) Open Questions §1.

Today is **2026-05-15**. That's 9 days to kickoff, 13 days to submission, 15 days to the grand finale.

---

## Day-by-day schedule

| Date | Phase | Event (organizer) | Our action | Hackathon command |
|---|---|---|---|---|
| 2026-05-15 (Fri) | Pre | Pre-event info session @ Seneca | Capture context (this session) | _N/A — context plan_ |
| 2026-05-16 → 23 | Pre | Self-prep window (8 days) | Score 5–10 ideas, pick 1, append energy-domain research | `/hackathon:ideate` |
| 2026-05-22 (Fri) | Pre | _self-imposed_ Idea-lock | Final idea + stack preset committed | `/hackathon:ideate` (re-run if not converged) |
| **2026-05-24 (Sun)** | P1 | **Virtual Kick-Off & Challenge Sets Unveil** | Reconcile our angle with revealed challenges, lock scope, scaffold live URL | `/hackathon:scope` → `/hackathon:scaffold` |
| 2026-05-25 (Mon) | P1 | Day 1 Mentoring: Domain & Tech | Build core feature → demo moment skeleton | `/hackathon:build` |
| 2026-05-26 (Tue) | P1 | Day 2 Mentoring | Demo moment **working** (per `event.yaml` `demo_moment_working_by`) | `/hackathon:build` (continue) |
| 2026-05-27 (Wed) | P1 | _(buffer day)_ | Polish — visual QA, error states, perf | `/hackathon:polish` |
| **2026-05-28 (Thu)** | P1 | **Submission Deadline** + Top Finalists Reveal | Record demo video, freeze deploy, submit | `/hackathon:demo` → submit |
| 2026-05-29 (Fri) | P2 | Finalist Prep & Polish @ HELIX / Classroom Hubs (Newnham) | Pitch prep — _only if finalist_ | `/hackathon:pitch` |
| 2026-05-30 (Sat) | P2 | Grand Finale @ HELIX (Newnham Campus) | Live pitch — _only if finalist_ | _(perform)_ |
| 2026-05-31+ | Post | _(retrospective window)_ | Lessons → G-FAIL / G-PAT in wiki/engineering/ | `/hackathon:retro` |

---

## Critical gates (don't slip these)

1. **2026-05-22, idea-lock self-deadline.** If `/hackathon:ideate` hasn't landed on one idea by Friday May 22, force the decision Saturday morning. Two days before kickoff is the least time we need for stack research and a first scaffold. Walk into kickoff with no idea and you lose all of Day 0 to picking one.
2. **2026-05-24, scope locked by end of kickoff day.** Write `.hackathon/scope.md`, state the demo moment as a 10-second clip, and finalize the MUST-HAVES list. Run the `demo-moment-critic` agent before you sleep that night.
3. **2026-05-25 12:00 ET, live URL deployed.** Per `event.yaml` `scaffolded_deployed_by`. An empty live URL at submission gets you disqualified on most hackathon rubrics.
4. **2026-05-26 18:00 ET, demo moment working.** You need to reproduce the 10-second clip end-to-end on the live URL by Tuesday evening. If it isn't working, trigger the 30-min stuck rule, mock the data, and move on.
5. **2026-05-28 18:00 ET, demo recorded.** Leave 6 hours for video re-takes, screenshot polish, README finalization, and submission-form fields. Don't push commits after `final_commit_sha` is captured.
6. **2026-05-28 23:59 ET, submission cutoff.** `[contradiction unresolved]` Confirm with organizers on Day 1 of Phase 1. See `seneca-hackathon-context.md` Open Questions §1.

---

## What changes if the deadline is actually 2026-05-26 (photo-version)

If organizers confirm the photo is correct (May 26, not May 28):

- **Phase 1 shrinks from 5 days to 3 days.** May 27-28 turn into judging-only days, not build days.
- **The polish day is gone.** Go straight from `/hackathon:build` (May 26 morning) to `/hackathon:demo` (May 26 afternoon) to submission (May 26 23:59).
- **The demo moment has to work by May 25 18:00**, not May 26.
- **Idea-lock moves up.** New self-deadline: Wednesday May 20. We lose 2 days of pre-kickoff prep.
- **No buffer day.** The moment organizers correct the date → replan fast, drop one MUST-HAVE for each day you gain or lose.

Sort this out on Day 1 of Phase 1 (May 24) before you write scope.md.

---

## What changes if we DON'T make finalist (most likely outcome)

- May 29 and May 30 become free days. Schedule `/hackathon:retro` for May 30 evening so the lessons are still fresh.
- No pitch prep needed. Skip `/hackathon:pitch`.
- Treat May 28 23:59 as the final delivery moment. Everything ships then.

---

## Reverse-engineered build budget

Working backward from the May 28 23:59 ET submission:

| Reserved | Hours | Activity |
|---|---|---|
| 6h | 18:00–24:00 May 28 | Submission form, video re-takes, screenshot polish |
| 12h | 06:00–18:00 May 28 | Final QA, README, video record, deploy freeze |
| 24h | 00:00–24:00 May 27 | Polish + scope-amendment audit (last chance to cut) |
| 24h | 00:00–24:00 May 26 | Build — demo moment must be reproducible end-of-day |
| 12h | 12:00–24:00 May 25 | Build — core feature wired end-to-end |
| 12h | 00:00–12:00 May 25 | Scaffold deploy + first commits |
| 6h | 18:00–24:00 May 24 | Scope lock + demo-moment-critic pass |
| (kickoff) | morning May 24 | Reconcile our pre-event angle with revealed challenges |

**Total build window: ~96h.** That matches `event.yaml` `duration_hours: 96`. About 30% goes to non-coding work (submission ceremony, polish) and 70% goes to building.

Update this at `/hackathon:scope` once you've sized the scope MUST-HAVES and built the demo-moment storyboard.

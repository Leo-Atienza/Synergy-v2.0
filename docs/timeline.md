# Seneca Energy Hackathon 2026 — Timeline & ATLAS workflow map

> Source: kickoff slide 05 "TIMELINE" (photographed 2026-05-15) + <https://www.senecahackathon.com/>. Submission-deadline conflict between sources resolved in favor of website (May 28); see [`seneca-hackathon-context.md`](seneca-hackathon-context.md) Open Questions §1.

Today is **2026-05-15** — 9 days to kickoff, 13 days to submission, 15 days to grand finale.

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

1. **2026-05-22 — Idea-lock self-deadline.** If `/hackathon:ideate` hasn't converged by Friday May 22, force a decision Saturday morning. Two days pre-kickoff is the minimum for stack research and preliminary scaffolding. Going into kickoff without an idea = losing all of Day 0 to ideation.
2. **2026-05-24 — Scope must be locked by end of kickoff day.** `.hackathon/scope.md` written, demo moment articulated as a 10-second clip, MUST-HAVES list final. Run `demo-moment-critic` agent before sleeping that night.
3. **2026-05-25 12:00 ET — Live URL deployed.** Per `event.yaml` `scaffolded_deployed_by`. Empty live URL on submission = automatic disqualification on most hackathon rubrics.
4. **2026-05-26 18:00 ET — Demo moment working.** The 10-second clip must be reproducible end-to-end on the live URL by Tuesday evening. If not: trigger 30-min stuck rule, mock data, move on.
5. **2026-05-28 18:00 ET — Demo recorded.** Buffer 6 hours for video re-takes, screenshot polish, README finalization, submission-form fields. Don't push commits after `final_commit_sha` is captured.
6. **2026-05-28 23:59 ET — Submission cutoff.** `[contradiction unresolved]` Confirm with organizers Day 1 of Phase 1 — see `seneca-hackathon-context.md` Open Questions §1.

---

## What changes if the deadline is actually 2026-05-26 (photo-version)

If organizers confirm the photo is correct (May 26, not May 28):

- **Phase 1 collapses from 5 days to 3 days.** May 27-28 become judging-only days, not build days.
- **Polish day disappears.** Go straight from `/hackathon:build` (May 26 morning) to `/hackathon:demo` (May 26 afternoon) to submission (May 26 23:59).
- **Demo moment must be working by May 25 18:00**, not May 26.
- **Idea-lock moves up.** New self-deadline: Wednesday May 20. Lose 2 days of pre-kickoff prep.
- **No buffer day.** First sign of organizer correction → emergency replan, drop one MUST-HAVE per day saved-or-lost.

Reconcile this on Day 1 of Phase 1 (May 24) before writing scope.md.

---

## What changes if we DON'T make finalist (most likely outcome)

- May 29 and May 30 become free days. Schedule `/hackathon:retro` for May 30 evening — capture lessons while fresh.
- No pitch prep needed; skip `/hackathon:pitch`.
- Treat May 28 23:59 as the final delivery moment. Everything ships then.

---

## Reverse-engineered build budget

Working backward from May 28 23:59 ET submission:

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

**Total build window: ~96h** — matches `event.yaml` `duration_hours: 96`. About 30% reserved for non-coding (submission ceremony, polish), 70% for build.

Update at `/hackathon:scope` once scope MUST-HAVES are sized and the demo-moment storyboard exists.

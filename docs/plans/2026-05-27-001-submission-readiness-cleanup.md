# 2026-05-27-001 — Submission-readiness cleanup & logistics

**Status:** PARTIALLY EXECUTED — 2026-05-27 (see Execution log below)
**Author:** Claude (pre-submission audit follow-up)
**Scope:** Close every non-video item flagged in the 2026-05-27 pre-submission audit.
**Explicitly OUT of scope:** the 5-minute qualifier **video**, the ArcGIS **StoryMap assembly**, and **team-members-named-on-screen** — all team-owned, recording-track work. Do not attempt these here.

---

## Execution log — 2026-05-27

| Task | Status | Note |
|---|---|---|
| T3 README accuracy | ✅ done | stale "submission day" header + false "TODAY" deadline line fixed; support-site-audited row added |
| T4 event.yaml live_url canonical-first | ✅ done | `live_url` → `project-sanctuary-seneca`; `sanctuary-phi` noted as redirect alias |
| T5 worktree cleanup | ⚠️ **CHANGED** | guard caught **real uncommitted WIP** (footer redesign + `BackToTop` + MapStage fly-to fix + sticky-map fix). NOT deleted. Preserved on branch `claude/gracious-sammet-03aaf4` @ `099599b`. Worktree removal deferred until the integrate/discard decision. |
| T6 Lighthouse | ✅ done | live `/sources` desktop: A11y **100**, SEO **100**, BP **96**, Perf 0.78 (known throttled band, CLS 0, LCP 2.3s passes). No regression. |
| T1 freeze tag | ⏸️ deferred | the freeze marks the *submission*, which = the video (out of scope, not shipped). Premature to tag now. Command teed up. |
| T2 portal link | ⏳ user | only the user can pull the Hackathon Portal link / firm deadline. Draft email available. |
| T7 planning-checklist route | ✅ resolved | keep — already documented as a build-time regeneration tool in `sanctuary/web/CLAUDE.md`. No action. |
| T8 StoryMap screenshots | ⏭️ skipped | recording-track / out of scope per user. Available on request. |

**New decision opened by T5:** whether to integrate the recovered WIP (branch `claude/gracious-sammet-03aaf4` @ `099599b`) into `main`. It touches the *sacred* MapStage + is out of `scope.md`, so it needs an explicit go-ahead before merging into the audited submission site.

---

## Why this plan exists

The pre-submission audit (2026-05-27) found the support site **submission-clean**: build green, data-accuracy **GO**, code review **GREEN**, all 5 prod pages 200, two cosmetic nits fixed + deployed (`ec6c104`) and verified live. What remains is **repo hygiene, submission logistics, and verification** — none of it touches the judged video. This plan makes those executable cold, with no dependency on the prior chat.

## Current state snapshot (verified 2026-05-27)

| Fact | Value |
|---|---|
| Branch / HEAD | `main` @ `94e9775` (clean tree, pushed to origin) |
| Last CODE commit prod serves | `ec6c104` (verified live) |
| Canonical prod URL | `https://project-sanctuary-seneca.vercel.app` (`sanctuary-phi.vercel.app` 307-redirects to it) |
| Deploy | MANUAL only: `cd sanctuary/web && vercel deploy --prod --yes`. `git push` does **not** deploy. |
| Data accuracy | GO — every number real-or-labelled; CSV↔GeoJSON identical; counts 282/35/87/10 |
| Submission freeze tag | **not set** (only tag is `backup/cursor-epitaxy-stash`) |
| Stray worktree | `.claude/worktrees/gracious-sammet-03aaf4` (branch `claude/gracious-sammet-03aaf4` @ `0381120`, an ancestor of main) + a leftover dev server on `:3000` |

Read for orientation: [`.hackathon/scope.md`](../../.hackathon/scope.md), [`.hackathon/event.yaml`](../../.hackathon/event.yaml), [`sanctuary/web/CLAUDE.md`](../../sanctuary/web/CLAUDE.md), [`sanctuary/data/sources.md`](../../sanctuary/data/sources.md).

---

## GATE 0 — confirm submission status (do FIRST, blocks T1 & T2)

The repo records the qualifier-video deadline as **2026-05-26 23:59 ET**. Before doing T1/T2, ask the user (one question):

> Is the qualifier already submitted, has the deadline moved, or are we in finalist prep for the May 30 finale?

Branch on the answer:
- **Not yet submitted / pre-deadline** → T1 (freeze tag) + T2 (portal) are live and urgent.
- **Already submitted** → T1 becomes "tag the submitted commit for the record"; T2 = confirm the portal record only.
- **Finalist prep** → T1/T2 are archival; prioritise T3–T6 polish.

---

## Tasks

Owner key: **[C]** Claude can do it · **[U]** user action · **[C+U]** Claude drafts/runs, user decides/provides.

### P1 — Submission logistics

#### T1 — Freeze the submission commit  **[C]**  ~5 min  · depends on GATE 0
- **What:** tag the final CODE commit and record it.
- **Steps** (run from repo root; substitute the agreed final sha — likely current `main`):
  ```bash
  repo=/c/Users/leooa/Documents/personal-projects/Synergy-v2.0
  sha=$(git -C "$repo" rev-parse HEAD)          # confirm this is the intended freeze commit first
  git -C "$repo" tag v1-submission "$sha"
  git -C "$repo" push origin v1-submission
  ```
- Then set [`event.yaml`](../../.hackathon/event.yaml) `submission.final_commit_sha` (line 69) to `$sha` and commit (docs-only).
- **Acceptance:** `git ls-remote --tags origin | grep v1-submission` returns the tag; `final_commit_sha` is filled.
- **Guard:** do NOT tag until GATE 0 confirms this is the freeze commit.

#### T2 — Capture the submission-portal link + firm deadline  **[C+U]**  ~10 min
- **Why:** [`event.yaml`](../../.hackathon/event.yaml) `submission.form_url` (line 39) is empty; the portal link + firm time live in the team registration account / organizer email, not on the public site.
- **Steps:** user pulls the link from the Hackathon Portal. If missing, Claude drafts a short email to `hackathon@senecapolytechnic.ca` requesting the portal link + firm qualifier deadline. Fill `form_url` once known.
- **Acceptance:** `form_url` populated, or the email is sent and noted in `event.yaml`.

### P2 — Repo accuracy & hygiene

#### T3 — Refresh stale README status  **[C]**  ~5 min
- **What:** [`README.md`](../../README.md) header "## Status (as of 2026-05-26 — submission day)" and the "Time to submission" row are stale.
- **Steps:** update the date and the status row to reflect GATE 0's reality (e.g. "submitted — finalist prep" or the new deadline). Keep the genuinely-pending rows (video, final-commit) honest.
- **Acceptance:** README header date + status row match reality; no other rows falsely flipped to done.

#### T4 — Make `event.yaml` live_url canonical-first  **[C]**  ~3 min
- **What:** [`event.yaml`](../../.hackathon/event.yaml) `live_url` (line 65) still leads with `sanctuary-phi` (which 307-redirects). The canonical alias is `project-sanctuary-seneca`.
- **Steps:** set `live_url: "https://project-sanctuary-seneca.vercel.app"` and move/keep `sanctuary-phi` as the alias with a "redirects to canonical" note. Mirror in README if needed (README already lists canonical first).
- **Acceptance:** `live_url` is the canonical domain; the redirect relationship is documented.

#### T5 — Remove the stray worktree + leftover dev server  **[C]**  ~5 min
- **What:** `.claude/worktrees/gracious-sammet-03aaf4` (branch `claude/gracious-sammet-03aaf4` @ `0381120`) and a dev server on `:3000`.
- **Steps (verify-before-delete — do NOT force blindly):**
  ```bash
  repo=/c/Users/leooa/Documents/personal-projects/Synergy-v2.0
  # 1. stop the dev server: preview_list -> preview_stop <serverId>, OR find+kill :3000
  #    (last seen serverId d8bfa615; PID via: netstat -ano | findstr :3000)
  # 2. confirm the worktree has NO uncommitted work:
  git -C "$repo/.claude/worktrees/gracious-sammet-03aaf4" status --short   # must be empty
  # 3. confirm the branch is merged (it is — 0381120 is an ancestor of main):
  git -C "$repo" branch --merged main | grep gracious-sammet
  # 4. remove:
  git -C "$repo" worktree remove .claude/worktrees/gracious-sammet-03aaf4
  git -C "$repo" branch -d claude/gracious-sammet-03aaf4
  ```
- **Acceptance:** `git worktree list` shows only the main checkout; the branch is gone; `:3000` is free.
- **Guard:** if step 2 shows uncommitted changes, STOP and surface them — do not `--force`.

### P3 — Verification

#### T6 — Fresh Lighthouse audit on prod  **[C]**  ~10 min
- **What:** confirm no a11y/perf regression on the changed page.
- **Steps:** lighthouse MCP `run_audit` on `https://project-sanctuary-seneca.vercel.app/sources` (and `/` and `/map`).
- **Targets (per [`sanctuary/web/CLAUDE.md`](../../sanctuary/web/CLAUDE.md)):** desktop **A11y 100**, **Perf ≥95**. NOTE: the MCP's heavy simulated throttle historically reports Perf ~79 (FCP-bound) while unthrottled is 100 — judge that against the throttle, not as a regression.
- **Acceptance:** A11y 100; Perf within the known band; record the numbers in the session notes (and optionally append to the memory note).

### P4 — Carried-over / optional (only if buffer remains)

#### T7 — Decide the unused `/api/planning-checklist` route  **[C+U]**  ~15 min
- **Context:** the Gemini planning-checklist route exists and works (`mode: live-gemini` verified) but is **intentionally not wired** into the live demo — the UI reads the static `public/planning-checklists.json` ([`sanctuary/web/CLAUDE.md`](../../sanctuary/web/CLAUDE.md) decision). This was the prior handoff's open item #3.
- **Decision (user):** (a) keep as a documented regeneration tool, or (b) remove the route + `@google/genai` dep + `GEMINI_API_KEY` usage for a smaller surface.
- **If keep:** add a one-paragraph note to `sanctuary/README.md` / the route file header stating it's a build-time regeneration tool, not a runtime dependency.
- **If remove:** delete the route + `lib/planning-assistant.ts` wiring, drop the dep, rebuild, **redeploy** (this changes shipped code), reverify.
- **Acceptance:** decision recorded; if removed, build green + redeployed + verified.

#### T8 — (Optional) website-sourced StoryMap/fallback screenshots  **[C]**  ~15 min
- **Only if** the team wants high-res captures of the live decision sequence (HVI hot spot → Malton click → honesty panel → ranked five) as StoryMap assets or a recording fallback. This is asset prep, **not** the video and **not** StoryMap assembly.
- **Steps:** drive the live `/map` via the preview browser (or local dev), capture the four decision states at desktop width, save to `sanctuary/artifacts/`.
- **Acceptance:** four labelled screenshots saved; team confirms they want them (else skip).

---

## Recommended execution order

1. **GATE 0** (confirm status) → unblocks the rest.
2. **T5** (worktree/server cleanup — independent, clears the `:3000` conflict for any later preview work).
3. **T3 + T4** (README + event.yaml accuracy — fast docs edits, batch into one commit).
4. **T6** (Lighthouse — read-only confirmation).
5. **T1 + T2** (freeze tag + portal — once GATE 0 says it's freeze time).
6. **T7 / T8** (optional, only with buffer).

Batch docs-only edits (T1 field, T3, T4) into as few commits as sensible; push at the end.

## Scope guard / do-NOT

- **Do NOT** touch or attempt the video, the ArcGIS StoryMap assembly, or team-names-on-screen — team-owned, out of scope.
- **Do NOT** assume `git push` deploys. If any task changes shipped site code (only T7-remove does), you MUST `cd sanctuary/web && vercel deploy --prod --yes` then re-verify on the canonical URL.
- **Do NOT** `git worktree remove --force` or `git branch -D` without confirming no uncommitted/unmerged work (T5 guard).
- **Do NOT** tag `v1-submission` before GATE 0 confirms the freeze commit.
- Keep the anti-slop discipline: every number stays real-or-labelled (verified/modelled/pending). Do not introduce new unlabelled estimates.
- Do not push the wiki (`~/Documents/Wiki/`) — unrelated, local-only.

## Definition of done

- GATE 0 answered; T1–T6 complete and verified (tag on remote, portal captured, README/event.yaml accurate, worktree gone, Lighthouse recorded).
- `git worktree list` shows only main; tree clean; everything pushed.
- T7/T8 either done or explicitly deferred with a one-line reason.
- A short status line back to the user: what was closed, what (if anything) remains, and the live URL.

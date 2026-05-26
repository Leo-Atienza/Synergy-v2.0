# Handoff — branch mix + planning-assistant (2026-05-26)

Self-contained plan for a fresh session. Assumes no memory of the session that wrote it.

## TL;DR

Two follow-on branches were merged into `main` and shipped: the **interactive map build**
(real Peel HVI choropleth + ODRSF facilities) and the **planning-assistant** (Gemini-backed
checklist). `main` is `d880035` + this handoff commit, clean and synced with `origin/main`.
Live and verified at **https://sanctuary-phi.vercel.app** and
**https://project-sanctuary-seneca.vercel.app**. Nothing is broken. The items below are
non-blocking follow-ups — do them in any order.

## What shipped this session

1. `feat/sanctuary-build` (4 commits, `8ffff00`..`7a88308`) fast-forwarded into `main`:
   real Peel HVI choropleth replaced the faked heat layer, StatCan ODRSF shelter-gap
   facilities layer, pan/zoom + tract-click. Provenance in `docs/peel-hvi-data-note.md`.
2. The Cursor branch's planning-assistant (was uncommitted in a stash) committed as `a55d4c8`:
   `/api/planning-checklist` route, `lib/planning-assistant.ts`, `public/planning-checklists.json`,
   `sanctuary/docs/team-brief.md`, DetailPanel/ScrollStage UI, + 2 evidence precedents.
3. `d880035` — fixed the live Gemini path (see "Gotchas").
4. Deployed to prod and verified. Set `GEMINI_API_KEY` in Vercel.
5. Cleaned up: deleted `feat/sanctuary-build` (local + remote) + its worktree,
   `feat/cursor-sanctuary-planning-assistant`, and the empty `claude/keen-bartik-9ef451`.
   Only `main` remains (plus the unrelated ancient `origin/leo`).

## Gotchas the next session MUST know (these bit us)

- **Deploy is MANUAL, not on push.** The Vercel project has *no* GitHub integration. A
  `git push origin main` does **not** update the live site. To deploy:
  `cd sanctuary/web && vercel deploy --prod --yes`. The project root `CLAUDE.md` line
  "Vercel / EAS auto-deploy on push" is **wrong** — fixing it is open item #1 below.
- **Env vars bind at deploy time.** After changing any Vercel env var you MUST redeploy
  (`vercel deploy --prod`) for it to take effect. An existing deployment won't pick it up.
- **The site UI uses the STATIC checklist, not the live route.** `ScrollStage.tsx` fetches
  `/planning-checklists.json` (all 10 ranks, pre-generated + reviewed, demo-safe/offline).
  **Nothing in the client calls `/api/planning-checklist`.** That live route works (returns
  `mode: live-gemini`) but is currently an unwired tool — see open item #3.
- **`GEMINI_API_KEY`** lives in Vercel production (encrypted) AND `sanctuary/web/.env.local`
  (gitignored). The route degrades to a safe static fallback if it's ever missing.
- **Judged deliverable = the ArcGIS StoryMap video**, not this website. The site is the
  support showcase / clickable recording backup.
- Vercel: project `prj_gEAMJ6P4m9pFMXCU20VaF1SI0KZs`, team `team_Ho4ti6SoaTQpH9qIQ1mfDeeg`.

## Open items / next steps

### 1. Fix the `CLAUDE.md` deploy claim (quick, ~2 min)
In the **project root** `CLAUDE.md`, under "Deploy from minute 1", the line
`- Vercel / EAS auto-deploy on push.` is false for this project. Replace with the truth:
deploys are manual `vercel deploy --prod --yes` from `sanctuary/web`; no Git integration is
connected. (Leaving it wrong will mislead the next person exactly as it misled us.)

### 2. Browser-verify the checklist UI (verification gap)
The API endpoint and the static data are verified, but the **rendered UI was never clicked
through**. To close it:
- `cd sanctuary/web && npm run dev`, open `http://localhost:3000`.
- Scroll to the candidate detail panel, click **"Show planning checklist"** on a candidate.
- Confirm the `PlanningChecklistCard` renders (5 checks, source-basis tags, honesty
  disclaimer/label). Screenshot as proof. Check reduced-motion + mobile too.
- The relevant code: `components/DetailPanel.tsx` (the button + card) and
  `components/ScrollStage.tsx` (the loader at ~line 83 fetching `/planning-checklists.json`).

### 3. Decide what to do with the unused live route (`/api/planning-checklist`)
It works but nothing calls it. Pick one:
- **Keep as a regeneration tool** — document that it's how you regenerate
  `public/planning-checklists.json` (run it per candidate, review output, commit the JSON).
  Lowest effort; preserves demo-safety. *(Recommended.)*
- **Wire a live-mode toggle** — have the UI optionally POST to it. Adds a runtime network
  dependency at demo time (latency, quota, nondeterminism) — fights the offline-safe doctrine.
  Only if a judge specifically wants to see live AI.
- **Remove it** — delete `app/api/planning-checklist/route.ts`, drop `@google/genai` + the
  `GEMINI_API_KEY` env var, keep `lib/planning-assistant.ts` (the static fallback + schema
  are still used). Smallest surface, but throws away working work.

### 4. (Project-level, outside the web app) ArcGIS StoryMap video
The judged artifact should reproduce the map's #5→#1 "deal the five" sequence + the Malton
honesty-panel zoom — either rebuilt in ArcGIS or spliced as a screen-capture of this site's
decision sequence. Can't be done from this repo (ArcGIS-side work).

## Useful commands

```bash
# from repo root
cd sanctuary/web
npm install                 # deps (incl. @google/genai, zod)
npm run dev                 # local dev at :3000 (loads .env.local)
npm run build               # must stay green, needs no network
vercel deploy --prod --yes  # MANUAL deploy to production (the only way the site updates)

# verify the live Gemini route (expect "mode":"live-gemini"):
curl -s -X POST https://project-sanctuary-seneca.vercel.app/api/planning-checklist \
  -H 'Content-Type: application/json' \
  -d '{"candidate":{"rank":1,"name":"Malton Community Centre & Library","address":"3540 Morning Star Dr, Mississauga","typeLabel":"Community centre","municipality":"Mississauga","hvi":5,"exposure":5,"sensitivity":4,"adaptiveCapacity":2,"roofClass":"large flat roof","facility":"recreation + library","trustLabel":"trusted civic anchor","reachablePopulation":"catchment pending","sourceUrl":"https://www.mississauga.ca/recreation-and-sports/locations-and-rentals/locations/"}}'
```

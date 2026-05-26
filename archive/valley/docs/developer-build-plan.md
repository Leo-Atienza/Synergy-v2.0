# File B — Developer Build Plan (Valley)

> **Audience:** the builders. **Name:** Valley (chosen 2026-05-25). Judge-facing code + video captions now use Valley / Discount Lockout; internal component names may still say Tide.
> **Status:** 2026-05-25. **Deliverable:** a 5-min YouTube video by **May 26 23:59 ET** (NOT a deployed app).
> **Team:** 3 people. **Track ownership:**
> - **Leo, Software (solo):** the Next.js web app, map, device screen, data, provenance. *No hardware.*
> - **Teammate H, Hardware:** buy + configure the plug, run the existing `plug:test`/`plug` scripts, record the lamp.
> - **Teammate V, Video/Narrative:** shot list, screen captures, edit, upload.

---

## 0. TL;DR — current state (verified against the code, 2026-05-25)

**The hard part is already built.** This is a polish-and-record job, not a build-from-scratch job.

| Component | File | State |
|---|---|---|
| Energy-burden map of Peel (choropleth + click + detail panel + intervention badge + legend + footer) | [`app/map/map-screen.tsx`](../tide-web/app/map/map-screen.tsx) | ✅ **Built** |
| Device WAIT→GO screen (scrubber reveal, renter copy) | [`app/tide-screen.tsx`](../tide-web/app/tide-screen.tsx) | ✅ **Built** (EV→renter rewrite done) |
| Map-led landing | [`app/page.tsx`](../tide-web/app/page.tsx) | ✅ Built |
| Burden index + intervention routing | [`lib/peel-data.ts`](../tide-web/lib/peel-data.ts) | ⚠️ Built, but the **retrofit branch can't fire** (see §6) |
| Optimizer + savings (tested) | [`lib/optimizer.ts`](../tide-web/lib/optimizer.ts), spike | ✅ Built + tested |
| Live IESO grid pull (+ fallback) | [`lib/grid.ts`](../tide-web/lib/grid.ts) | ✅ Built, degrades gracefully |
| Real data (35 FSAs, pop ✓1.45M, rates ✓) | `public/peel-fsa.geojson`, `lib/peel-fsa-raw.json` | ✅ Committed |
| **Hardware control + drivers** | `spike/src/plug-shelly.ts` + `scripts/{control-plug,plug-selftest}.ts` | ✅ **Built + ready.** Real Shelly + Kasa drivers, the live decide→actuate loop, and a hardware self-test all exist; only the physical plug is unbought |
| Physical plug | — | ❌ **Not bought** |
| 5-min video | — | ❌ Not recorded |

**Implication:** the **screen-only demo is your guaranteed floor and it works today.** Everything outstanding is (a) honesty/polish on the software, (b) the optional hardware hero shot, (c) the video. Sequence floor-first.

---

## How the system works (end to end)

Plain walkthrough mapping the idea to the actual code (File A has the non-technical version). The app has **two screens**; the **hardware is separate**.

**Screen A, the device / WAIT→GO reveal** (`app/device/page.tsx` → `app/tide-screen.tsx`)
1. `app/device/page.tsx` defines the load (*Window AC, 1.2 kW, 5 h, allowed to run any time between 6 p.m. and 7 a.m.*), then on each request:
   - `getDay()` (`lib/grid.ts`) builds the committed demo day: hourly fuel mix → carbon intensity (`lib/carbon.ts`) + ULO/TOU prices (`lib/rates.ts`), all from `lib/sample-day.ts`.
   - `buildHorizon()` + `chooseWindow()` (`lib/optimizer.ts`) slide the 5-hour run across 6 p.m.–7 a.m. and return the **cheapest contiguous block**, the overnight 3.9¢ window. `baselineNow()` is the "just run it now at 6 p.m." comparison; `perRun()` (`lib/savings.ts`) is the $ + CO₂ difference shown in the tally.
   - `getLiveIntensity()` pulls Ontario's live grid mix from IESO for the "grid now" badge (returns `null` and degrades to "unavailable" if the feed fails, so it can't break the demo).
2. `tide-screen.tsx` renders the 24-hour price/intensity strip + an hour slider. If the scrubbed hour is inside the chosen window → **GO** (green); otherwise → **WAIT** (red). Dragging 6 p.m. → 3 a.m. *is* the on-camera reveal.

**Screen B, the energy-burden map** (`app/page.tsx` → `app/map/map-screen.tsx`)
1. `lib/peel-fsa-raw.json` holds real StatCan 2021 attributes per FSA (income, renter %, apartment %, population).
2. `lib/peel-data.ts` computes the **0–100 burden score** (weighted blend, normalized within Peel) and the **intervention routing** (apartments ≥ 40% → policy; electric-heat ≥ 25% → retrofit [never fires, see §6]; else Valley-reachable); exports `PEEL_FSA` / `PEEL_BY_FSA`.
3. `map-screen.tsx` fetches `public/peel-fsa.geojson` (polygon geometry), draws the choropleth with **d3-geo**, colours each FSA by burden bucket, and on click shows the detail panel + intervention badge.

**The hardware** (Teammate H, separate from the app)
- The optimizer's "is it GO right now?" decision is the same logic that fires the plug. The `PlugDriver` interface (`spike/src/plug.ts`) is `on() / off() / isOn()`, and the **real Shelly driver already exists** (`spike/src/plug-shelly.ts`): `scripts/control-plug.ts` runs the live decide→actuate loop and `scripts/plug-selftest.ts` verifies the LAN path (§3).
- **For the video, the app and the plug are independent.** The screen flip and the lamp are recorded separately and intercut, so the app never has to talk to the plug. This is why Leo's software track stays hardware-free.

**One-line data flow:**
`StatCan + IESO + OEB data → lib/ (rates · carbon · optimizer · peel-data) → React screens (device WAIT/GO + map) → [optional] Shelly plug fires the real lamp`

---

## 1. Architecture & stack decisions (with rationale)

**Keep the current stack. Do not re-architect.**

- **Next.js 16 + React 19 + TypeScript + d3-geo** ([package.json](../tide-web/package.json)). Rationale: the deliverable is a *video*, so the app's only job is to render a crisp, screen-capturable interactive map + reveal. **d3-geo draws the choropleth from a committed GeoJSON with no map-tile provider and no network dependency** → works offline → demo-safe (kills the "wifi died on camera" risk). React state drives the scrubber. Switching stacks throws away ~70% working code for zero judge-visible gain.
- **No database, no auth, no API routes.** A 5-min video needs none. Adding them is pure risk.
- **Live data is read-only and fail-safe.** `grid.ts` pulls IESO live but returns `null` on any failure and the UI degrades to "live grid · unavailable" over a committed deterministic fixture (`lib/sample-day.ts`). Correct design, so leave it.
- **Hardware is separate from the web app.** The spike already carries the driver + control loop (`spike/src/plug-shelly.ts`, `scripts/control-plug.ts`). The web app shows the on-screen device tile; the physical plug is actuated independently and intercut in the edit. This keeps Leo's software track 100% hardware-free and means **the video does not depend on the app talking to the plug.**

---

## 2. Leo's software track — hour-by-hour (floor-first)

> Total ~5–6h of focused work, mostly polish. Run `cd valley/tide-web && npm install && npm run dev` first; confirm the map + `/device` render.

**Stage 0, Sanity (0.5h). [no dependencies]**
- Boot the app, confirm map + device screen render with real data. Screenshot the floor. If this works, the demo cannot fully fail.

**Stage 1, Honesty fixes (1.5h). [depends: Stage 0]**
- **Decide the retrofit story (§6).** Either relabel routing as two interventions honestly, or hardcode 1–2 retrofit FSAs with a visible caveat. *Don't ship a dead branch a judge can click into.*
- Verify the **two-renter click** reads on camera: Malton **L4X** → "Needs a policy fix (sub-metered)"; a tide-reachable FSA (e.g., Brampton **L6V**) → "Valley reaches this neighbourhood." Confirm both render from *real* attributes, not hardcoded.
- Confirm the **provenance footer** (StatCan / IESO / OEB / live grid) is present on both the map and the device screen (MUST-HAVE #5).

**Stage 2, Recording polish (2.5–3h). [depends: Stage 1]. Run `/design-check` first (mandatory per CLAUDE.md).**
- Legibility at video scale: WAIT/GO contrast, FSA labels, the $0.391 → $0.039 flip must be unmistakable on a compressed YouTube frame.
- Smooth the scrubber motion 6 p.m. → 3 a.m.; make the GREEN flip land on a single drag.
- Color: the burden ramp + the device palette should read in one glance (the teal=cheap/clean → red=peak mapping is already wired in `peel-data.ts`).

**Stage 3, Hardening for the take (1h). [depends: Stage 2]**
- Confirm the deterministic fixture is what records (label it "demo fixture, Ontario summer weekday"); the live IESO badge is top-right garnish only.
- Tag the working commit; hand the build to Teammate V for capture.

**Leo's track has no dependency on hardware.** If the plug never arrives, Leo's deliverable is unaffected.

---

## 3. Teammate H — Hardware track (BoM, sourcing, setup)

### Bill of materials
| Item | Spec | ~Cost (CAD) | Required? |
|---|---|---|---|
| **Shelly Plug US Gen4** | US socket, 15A/1800W, WiFi + **local HTTP RPC, no cloud account** | **~$25–35** | Yes (for the hero shot) |
| Desk lamp / simple 120V load | incandescent or LED, plain on/off | $0 (you own one) | Yes |
| Travel router (GL.iNet "Mango" GL-MT300N) **or phone hotspot** | private 2.4GHz LAN | ~$35 **or $0** | Only for a *live* finale stage demo, not the video |

**Minimum spend for the video hero shot: one Shelly plug (~$25–35). Everything else is $0.**

### Where to buy (Ontario / Peel)
- **Aartech (Ontario-based, near Peel), best for speed:** [aartech.ca](https://www.aartech.ca/shelly-plugus-gen4-wh) / [aartechpro.ca](https://www.aartechpro.ca/shelly-plugus-gen4-bk). Canadian retailer, has the **US Gen4** in stock.
- **Absolute Automation (Canada):** [absoluteautomation.com](https://www.absoluteautomation.com/products/shelly-plugusgen4-wifi-on-off-module-with-power-metering).
- **Amazon.ca:** search **"Shelly Plug US Gen4"**. ⚠️ **Do NOT buy the "Shelly Plus Plug S"** ([this listing](https://www.amazon.ca/Shelly-3800235265628-Plus-Plug-S/dp/B0C5Y2WLPS)). It's a **EU socket** and won't fit a North American outlet.
- **Avoid for local control:** TP-Link **Kasa/Tapo** from big-box stores. Newer **KLAP** firmware requires cloud credentials even for "local" control ([Home Assistant tplink notes](https://www.home-assistant.io/integrations/tplink/)), an unreliable bet under deadline. Only a *factory-reset, never-app-connected older* Kasa KP115/HS103 might work locally, and it's a gamble.

### Timing decision (important)
- **Video due May 26 23:59.** Order **today (May 25)** from Aartech (Ontario) or Amazon.ca Prime, to arrive **May 26** and record same-day. **Tight.**
- **If it can't arrive by ~May 26 afternoon:** the physical lamp becomes the **in-person finale (May 29–30)** prop, and the **video ships screen-only** (the floor). This is a clean, no-panic fallback, so don't block the video on the plug.

### Setup steps
1. Plug in; join your phone to the Shelly AP; via the Shelly app/web UI connect it to a **2.4 GHz** home network (it's 2.4-only).
2. **Turn Cloud OFF** in Settings (this keeps control on-LAN, no account). Note the plug's **LAN IP** (reserve it in your router by MAC if possible).
3. Verify control from a laptop on the same network. Paste into a browser: `http://<plug-ip>/rpc/Switch.Set?id=0&on=true` (lamp on), `...&on=false` (off).
4. Run the self-test (§3.1), `npm run plug:test -- <ip>`, then wire the lamp and record **multiple clean takes** of it clicking ON.

### 3.1 Control, already written, just run it

**Don't write a driver. It exists.** `spike/src/plug-shelly.ts` is the production driver (connect + on/off + read-back + 2 s timeout). Run the existing CLI from `valley/spike`:

```bash
npm run plug:test -- <plug-ip>   # ON → verify → OFF → verify — run FIRST when the plug arrives
npm run plug -- <plug-ip>        # the live decide→actuate one-shot for the current hour
```

For reference, the core of that existing driver is just:
```ts
// plug-shelly.ts — Shelly Gen2+/Gen4 local RPC. No cloud, no auth (if unset).
const IP = process.env.PLUG_IP ?? "192.168.1.50"; // your reserved LAN IP

async function set(on: boolean): Promise<void> {
  const r = await fetch(`http://${IP}/rpc/Switch.Set?id=0&on=${on}`);
  if (!r.ok) throw new Error(`Shelly ${r.status}`);
}
async function isOn(): Promise<boolean> {
  const r = await fetch(`http://${IP}/rpc/Switch.GetStatus?id=0`);
  return (await r.json()).output === true; // read-back: verify the switch happened
}

// Demo: fire the lamp, confirm, hold, release.
(async () => {
  await set(true);
  console.log("lamp ON, verified:", await isOn());
})();
```
That is essentially what `spike/src/plug-shelly.ts` already implements: plain HTTP, zero dependencies. Use the npm scripts above rather than this snippet.

---

## 4. Teammate V — Video/Narrative track

- Follow the shot list in [`.hackathon/video-script.md`](../../.hackathon/video-script.md) (arc: trap → map → fix → honesty → close).
- Screen-capture at 60fps: the **two-FSA click** (L4X policy vs L6V tide-reachable) and the **scrubber 6 p.m.→3 a.m. flip**.
- Intercut the pre-recorded **lamp-fire** take *if* hardware landed; otherwise the on-screen tile flip is the beat.
- **Name all three teammates on screen.** Collaboration is a full 20% axis.
- Export **≤ 6:00**, upload **unlisted YouTube**, paste link in submission, freeze git tag `v1-submission`. **No code changes after the video is recorded.**

---

## 5. Risk register

| ID | Risk | Likelihood | Backup |
|---|---|---|---|
| R1 | **Plug doesn't arrive by May 26** | Medium-High | Video ships **screen-only** (built today); lamp → finale prop. |
| R2 | Live IESO read fails on camera | Low (recorded) | `grid.ts` degrades to committed `sample-day.ts`; label "demo fixture." |
| R3 | Map geometry/census fails to load | Low | GeoJSON + attributes committed to repo; FSAs w/ missing data render grey, no crash. |
| R4 | **Retrofit intervention is a dead branch** (no FSA heating data) | **Certain** | Decide §6 *before recording*: present two interventions honestly, or hardcode + caveat. |
| R5 | Shelly local control blocked (KLAP/wifi isolation) | Low (Shelly is no-cloud) | Phone hotspot LAN; never venue wifi; older-Kasa is NOT a safe fallback. |
| R6 | Sponsors (Esri/Alectra) not actually confirmed | Unknown | Verify vs kickoff deck (5 min). Soften "feeds GridExchange" → "the kind of market this feeds" (it's a dated 2021 pilot). |
| R7 | A feature blows the 30-min rule | Medium | Mock the output, log in `.hackathon/failures-log.md`, move on (per CLAUDE.md). |

---

## 6. Concrete realignment to-dos (code-level)

1. **Retrofit branch.** [`peel-data.ts:73`](../tide-web/lib/peel-data.ts) routes on `electricHeatPct >= 25`, but that field is **null for all 35 FSAs** (StatCan doesn't publish heating fuel at FSA level, see [`peel-fsa-data-note.md`](../../docs/peel-fsa-data-note.md)). So routing is really **two-way (policy vs tide-reachable)**. **Pick one:**
   - (a) Relabel the legend/copy as two interventions; keep retrofit as a "next, when data permits" note (the map footer already half-says this). *Simplest + honest.*
   - (b) Hardcode 1–2 known electric-baseboard FSAs with a visible "estimated" caveat. *More complete, mild risk.*
2. **Sponsor framing.** Soften any "feeds Alectra's GridExchange" to "the kind of flexibility market this feeds" until R6 is verified.
3. **DR figure citation.** `docs/energy-domain.md` mislabels the ~$171k/MW-yr source. Fix before it goes on screen.
4. **Provenance footer.** Confirm it's on every frame Teammate V captures.
5. **Brand swap (Tide → Valley).** The `tide/`→`valley/` folder rename is DONE, and the judge-visible brand text has been swapped for recording:
   - [`app/tide-screen.tsx`](../tide-web/app/tide-screen.tsx) + [`app/map/map-screen.tsx`](../tide-web/app/map/map-screen.tsx): `<span className="brand">VALLEY</span>`.
   - [`app/page.tsx`](../tide-web/app/page.tsx) + [`app/device/page.tsx`](../tide-web/app/device/page.tsx): metadata titles now use Valley.
   - [`lib/peel-data.ts`](../tide-web/lib/peel-data.ts): the `INTERVENTION_LABEL` value now says `"Valley can help here"`. (The internal key `"tide-reachable"` can stay; it's not judge-visible.)
   - [`.hackathon/video-script.md`](../../.hackathon/video-script.md) + [`.hackathon/demo-moment.md`](../../.hackathon/demo-moment.md): captions now use Valley and "Discount Lockout."
   - **Folder rename: done.** `tide/` is now `valley/` (web + spike + docs); all repo links updated.
   - ~10 string edits total; fold into Stage 2 polish (Leo's track).

6. **Reconcile the plug price.** Judge-facing copy now uses **roughly $25** / **~$25–35 CAD** for the Shelly Plug US Gen4. "$15" remains only as an older Kasa fallback where explicitly labelled.

---

## 7. Cost summary (per "everything free unless told")

- **Software / hosting / data: $0.** Next.js, React, d3-geo, IESO/StatCan/OEB open data are all free. A live URL isn't required (video deliverable); if wanted, Vercel free tier = $0.
- **Claude Code:** runs on your existing Anthropic plan, no extra cost for this build. (It does **not** use Cursor credits; they're separate products.)
- **The only spend: ~$25–35 CAD for one Shelly plug** (+ optional ~$35 router only for a live finale demo). Approved per your "tell me what to buy", see §3.

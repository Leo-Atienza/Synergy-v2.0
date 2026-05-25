# Demo moment — Tide

**One sentence:** *The hour scrubs to 3 a.m., Ontario's rate flips from 39¢ to 3.9¢, and the plug fires the lamp — the cheapest rate, captured automatically for a renter who couldn't stay up to claim it.*

**Archetype:** Tension-Reveal (primary) + Hardware-Surprise (reinforcing, contingent on hardware).

## Literal 10-second script

```
0:00 — Laptop: "11:00 · $0.391/kWh · ON-PEAK · WAIT" (red). Beside it, a choropleth of Peel,
         Brampton L6T glowing deep red.  [If hardware: a dark desk lamp beside the laptop.]
0:02 — Presenter drags the hour scrubber 6pm → 3am, one motion.
0:05 — Panel flips GREEN "03:00 · $0.039/kWh · GO"; device tile → ON.  [If hardware: lamp clicks on.]
0:08 — Caption: "3.9¢ — Ontario's cheapest rate is a 3 a.m. trap. Tide springs it for you."
         L6T stays labeled on the map.
```

## Why it lands (per `demo-moment-critic`, 2026-05-25)

- **Motion-driven + observable** — the judge watches the flip happen, not a description of it.
- **Memorable** — passes the "describe it 2 hours later" test: *"the one where the real lamp turned on at 3 a.m."*
- **The caption does the argument** — keeps the lamp reading as *proof the trap was sprung*, not a cute gadget.
- **Honest by construction** — the dollar figures on screen are the renter-real ~$30–130/yr range, not the EV number.

## The floor vs the upgrade (hardware risk)

- **Floor (must always work):** the screen-only WAIT→GO flip + the device tile → ON. Zero hardware. This is recordable today.
- **Upgrade (hero shot):** the physical lamp firing — only if the Shelly Plug US Gen4 is bought and the local JSON-RPC control verifies before the deadline. Pre-record a clean take; there's no live-network risk in a YouTube video.

## The one question to pre-answer (hostile Q&A)

*"Does this actually reach poor renters, or just affluent EV owners?"*
→ "The device honestly reaches one slice — individually-metered renters with a shiftable load — and saves them ~$30–130/yr, modestly but truthfully. The leverage is the map: it tells the utility which neighbourhoods the plug reaches, and which are sub-metered or baseboard-heated and need a *policy* fix instead. Matching the fix to the household is the product." (Backed by `docs/energy-domain.md` §3–§6, 2026-05-24/25.)

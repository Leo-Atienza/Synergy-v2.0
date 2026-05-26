# app/fonts — self-hosted variable fonts (staged)

The redesign uses **`next/font/local`** (zero layout shift, no Google-Fonts network call, demo-safe offline). Drop the `.woff2` files here at build time, then wire them in `app/layout.tsx`.

## Files to add (all SIL OFL — free to self-host)

**Display serif — Fraunces (variable):**
```
curl -L -o Fraunces.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/fraunces:vf@latest/latin-wght-normal.woff2"
```

**Mono for ALL data (pick ONE during design-check; both staged here):**
```
# Option A — Space Mono (warmer, more characterful; pairs with editorial serif)
curl -L -o SpaceMono-400.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/space-mono@latest/latin-400-normal.woff2"
curl -L -o SpaceMono-700.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/space-mono@latest/latin-700-normal.woff2"

# Option B — JetBrains Mono (variable, more neutral/engineering)
curl -L -o JetBrainsMono.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono:vf@latest/latin-wght-normal.woff2"
```
If a URL 404s, grab the exact file from the family page on https://fontsource.org (search the family → "Download" → woff2). Body stays on the system sans stack — no file needed.

## Wire in `app/layout.tsx`
```ts
import localFont from "next/font/local";

const fraunces = localFont({
  src: "./fonts/Fraunces.woff2",
  variable: "--font-fraunces",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/JetBrainsMono.woff2", // or the two Space Mono weights as an array
  variable: "--font-mono",
  display: "swap",
});

// <html className={`${fraunces.variable} ${mono.variable}`}>
```
Then in `globals.css`: `--font-serif: var(--font-fraunces), Georgia, serif;` and `--font-mono: var(--font-mono), ui-monospace, monospace;`.

Rationale + the full type system: [`../../../docs/showcase-research-2026-05-26.md`](../../../docs/showcase-research-2026-05-26.md) Part C, and `sanctuary/web/CLAUDE.md`.

---
title: 40-design — demo storyboard, judge narrative, inspiration
type: folder-index
status: confirmed
updated: 2026-05-15
---

# 40-design — design + demo storyboard

Where the visual & narrative design of the project lives. Demo moment, judge narrative, wireframes, and design inspiration.

## Pages (to be created at `/hackathon:scope` → `/hackathon:polish`)

- `demo-moment.md` — the 10-second clip described as a literal video script
- `storyboard.md` — full demo flow (typically 60s for `/hackathon:demo`)
- `judge-narrative.md` — the 3-paragraph story we tell judges (problem → moment → impact)
- [`inspiration/`](inspiration/) — screenshots / refs of similar tools that nail the vibe
- [`wireframes/`](wireframes/) — sketches, low-fi mocks, exported Figma frames

## Demo-moment-first principle

The demo moment is the SINGLE most important asset of this project. It's the 10-second clip that decides judging.

Process:
1. Write `demo-moment.md` BEFORE writing scope.md — the demo moment determines what's in scope, not the other way around
2. Run [`demo-moment-critic`](../../.claude/agents/demo-moment-critic.md) agent on the description
3. Iterate until verdict ≥ BORDERLINE
4. Lock it in `.hackathon/scope.md`
5. Re-run critic at `/hackathon:polish` against the actual built thing

## When to fill `inspiration/`

- Saw a dashboard that nails the visual storytelling we want → screenshot, drop in `inspiration/`, add 1-line note in frontmatter `sources` field
- Found a Figma community file that matches the aesthetic → save reference link
- Saw a prior hackathon winner with a similar problem → screenshot the demo video frame

Naming: `inspiration/<source-or-tool>-<what-it-shows>.png`. Example: `inspiration/datawrapper-energy-poverty-map.png`.

## Wireframes

Free choice of tool — pen-and-paper, Figma, Excalidraw, whatever's fastest. Export as PNG/SVG into `wireframes/`. Don't commit wireframe `.fig` files unless we're collaborating.

## Anti-patterns

- **Designing the app, not the demo.** The app is in service of the demo, not vice versa.
- **Pixel-perfect Figma without a built page.** Polish in code, not in mocks. Hackathon time is too short.
- **Inspiration without notes.** A screenshot with no annotation is worthless 3 days later. Always add the 1-line "what this shows".

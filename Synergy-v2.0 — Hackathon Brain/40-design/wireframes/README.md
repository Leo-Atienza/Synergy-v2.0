---
title: 40-design/wireframes — sketches & low-fi mocks
type: folder-index
status: confirmed
updated: 2026-05-15
---

# wireframes — sketches & low-fi mocks

Quick visual sketches of screens, demo flow, layouts. Tool of choice — pen-and-paper, Figma, Excalidraw, tldraw, whatever's fastest.

## Format
- Export as PNG or SVG into this folder
- Don't commit `.fig` / `.excalidraw` source files unless we're collaborating with a teammate (then DO commit)

## Naming
`<screen-or-flow>-vN.<ext>`

Examples:
- `dashboard-hero-v1.png`
- `demo-flow-v1.svg`
- `mobile-empty-state-v2.png`

## Versioning
Bump version (`v1` → `v2`) when iterating. Don't delete old versions until project ships — useful for retro.

## Anti-patterns
- **High-fidelity mocks.** Hackathon time is too short. Polish in code, not in Figma.
- **Designing the app instead of the demo.** Wireframe the demo flow first; the rest follows.

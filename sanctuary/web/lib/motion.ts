// Motion bundle + the scrollytelling state machine.
//
// We ship only `domAnimation` (~4.6KB) through LazyMotion and use <m.*> elements
// (never <motion.*>, which would pull the full feature set). Every animation in
// the island is gated by useReducedMotion(). transform/opacity only.

export { LazyMotion, domAnimation, m, useReducedMotion, AnimatePresence } from "motion/react";

// The five scroll steps. Indices match lib/content.ts STEPS[].
export const STEP = { RISK: 0, GAP: 1, CANDIDATES: 2, DEAL: 3, ZOOM: 4 } as const;
export type Step = (typeof STEP)[keyof typeof STEP];
export const STEP_COUNT = 5;

// Shared easing + durations, as plain values so CSS and JS stay in sync.
// Overshoot curve for the "deal the five" pop; calm curve for everything else.
export const EASE_POP: [number, number, number, number] = [0.34, 1.56, 0.64, 1];
export const EASE_CALM: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export const DUR = { reveal: 0.5, step: 0.6, pop: 0.42, panel: 0.5 } as const;

// Per-pin deal stagger: #5 first … #1 last, so the eye lands on the winner.
// rank is 1..5; returns a delay in seconds.
export function dealDelay(rank: number): number {
  return (5 - rank) * 0.12;
}

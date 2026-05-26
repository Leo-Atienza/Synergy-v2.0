// Inline icon set — one consistent hairline stroke family (24px grid, 1.75
// stroke, round caps), in the Phosphor/Lucide editorial register. Drawn locally
// so there is zero runtime icon dependency and full control of stroke weight.
// Icons are punctuation, used sparingly. `currentColor` lets CSS own the colour.

import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 18, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Crosshair(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function Thermometer(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M14 14.76V6a2 2 0 1 0-4 0v8.76a4 4 0 1 0 4 0z" />
    </Base>
  );
}

export function Lightning(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </Base>
  );
}

export function Buildings(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M6 22V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18" />
      <path d="M16 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M10 7h2M10 11h2M10 15h2" />
    </Base>
  );
}

export function ShieldCheck(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </Base>
  );
}

export function CheckCircle(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.4 2.4 4.6-5" />
    </Base>
  );
}

// "modelled" — an approximation wave through a ring. Distinct by shape, never colour alone.
export function Approx(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 13c1-2 2.5-2 3.5 0s2.5 2 3.5 0" />
    </Base>
  );
}

// "pending" — a clock: not yet, needs a site audit.
export function Clock(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Base>
  );
}

export function ArrowUpRight(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Base>
  );
}

// Evidence-key glyph lookup so legend + panel stay in lock-step.
export const EVIDENCE_ICON = {
  verified: CheckCircle,
  modelled: Approx,
  pending: Clock,
} as const;

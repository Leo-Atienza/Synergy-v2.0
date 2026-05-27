import type { SVGProps } from "react";

// Sanctuary brand mark. A cream gable roof (shelter, the literal meaning of
// "sanctuary") over an ember core (the resilience hub that keeps its power, and
// the site's signal colour), with a faint ember arc for the modelled catchment
// reach from the map. Brand colours are baked in on purpose: this is the
// polychrome logo, not a currentColor punctuation icon. Mirrors app/icon.svg.
type LogoProps = SVGProps<SVGSVGElement> & { size?: number };

export function Logo({ size = 26, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect width="32" height="32" rx="7" fill="#0d1620" />
      <rect x="0.6" y="0.6" width="30.8" height="30.8" rx="6.6" fill="none" stroke="#eaf1f6" strokeOpacity="0.16" />
      <path d="M9.2 24.1 Q16 26.8 22.8 24.1" stroke="#e07533" strokeOpacity="0.42" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 5.8 L27.2 16.7 L23.2 16.7 L16 9.6 L8.8 16.7 L4.8 16.7 Z" fill="#eaf1f6" stroke="#eaf1f6" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="16" cy="20.4" r="3.5" fill="#e07533" />
    </svg>
  );
}

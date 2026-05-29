import type { SVGProps } from "react";

// Sanctuary brand mark — "one roof, everyone." A cream gable roof (shelter, the
// literal meaning of "sanctuary") over three ember figures: the community it
// gathers and keeps safe through a flood, a cold snap, or a heat wave. The
// colours carry the feeling — navy is the hard night outside, cream the safe
// walls, ember the warmth of the people sheltered within. Brand colours are
// baked in on purpose: this is the polychrome logo, not a currentColor
// punctuation icon. Mirrors app/icon.svg and scripts/gen-icons.mjs.
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
      {/* the gable roof — the shelter */}
      <path d="M16 5.2 L27.8 16.9 L23.3 16.9 L16 9 L8.7 16.9 L4.2 16.9 Z" fill="#eaf1f6" />
      {/* the people it keeps warm — head + shoulders, centre figure tallest */}
      <g fill="#e07533">
        <circle cx="16" cy="18.2" r="2" />
        <path d="M13.2 25.8 L13.2 21.7 Q13.2 20.2 14.7 20.2 L17.3 20.2 Q18.8 20.2 18.8 21.7 L18.8 25.8 Z" />
        <circle cx="9.9" cy="19.6" r="1.6" />
        <path d="M7.7 25.8 L7.7 22.3 Q7.7 21 9 21 L10.8 21 Q12.1 21 12.1 22.3 L12.1 25.8 Z" />
        <circle cx="22.1" cy="19.6" r="1.6" />
        <path d="M19.9 25.8 L19.9 22.3 Q19.9 21 21.2 21 L23 21 Q24.3 21 24.3 22.3 L24.3 25.8 Z" />
      </g>
    </svg>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

// Count-up that is safe with JS disabled. SSR (and the first client render) shows
// the real value, so no-JS and hydration both get the true number. With JS and
// motion allowed, it counts up the first time the number is on screen — so the
// animation plays exactly when the score is seen, not below the fold.
//
// Demo-critical robustness: the number must NEVER be left frozen at 0 while it is
// visible. Two triggers cover every case and a `played` guard keeps them from
// double-firing:
//   1. A synchronous on-screen check at mount — covers click-to-select and a
//      panel that is already above the fold, where the IntersectionObserver's
//      async first callback could otherwise lag and flash a frozen 0.
//   2. The observer itself — counts up a below-the-fold score when it is later
//      scrolled into view.
// A score that is never scrolled into view simply keeps its real value (it is
// off-screen; nobody sees it).
export function CountUp({ value, reduced, duration = 0.9 }: { value: number; reduced: boolean; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let played = false;
    const run = () => {
      if (played) return; // idempotent: mount-check and observer share this gate
      played = true;
      const start = performance.now();
      const ms = duration * 1000;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / ms);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * value));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // Any part of the number within the viewport counts as on-screen — a score
    // sitting at the fold animates rather than waiting for a 60% threshold it may
    // never reach.
    const onScreen = () => {
      const r = el.getBoundingClientRect();
      return r.bottom > 0 && r.top < (window.innerHeight || document.documentElement.clientHeight);
    };

    setDisplay(0); // reset (unseen while below the fold) for a clean count-up
    if (onScreen()) run(); // visible at mount (click-select / above fold): animate now

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) run();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, reduced, duration]);

  return <span ref={ref}>{display}</span>;
}

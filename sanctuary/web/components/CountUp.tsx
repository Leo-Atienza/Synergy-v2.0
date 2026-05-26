"use client";

import { useEffect, useRef, useState } from "react";

// Count-up that is safe with JS disabled. SSR (and the first client render) shows
// the real value, so no-JS and hydration both get the true number. With JS and
// motion allowed, it resets to 0 and counts up the first time it scrolls into
// view — so the animation plays exactly when the score is seen, not below the fold.
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

    setDisplay(0); // reset (happens below the fold; unseen)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !played) {
            played = true;
            run();
          }
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

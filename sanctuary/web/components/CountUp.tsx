"use client";

import { useEffect, useRef, useState } from "react";

// Reduced-motion-safe number count-up. Animates 0 → value on mount via rAF;
// remount (via a key) replays it. When reduced, the final value shows instantly.
export function CountUp({
  value,
  reduced,
  duration = 0.9,
}: {
  value: number;
  reduced: boolean;
  duration?: number;
}) {
  const [display, setDisplay] = useState(reduced ? value : 0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const ms = duration * 1000;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [value, reduced, duration]);

  return <>{display}</>;
}

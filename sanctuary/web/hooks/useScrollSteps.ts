"use client";

import { useEffect, useRef, useState } from "react";

// One IntersectionObserver drives the whole scrollytelling. Each step panel is
// tagged data-step="N"; whichever panel sits in the central band of the viewport
// (rootMargin trims 45% off top and bottom → a ~10% band at centre) becomes the
// current step. No scroll-event listeners. Only active when `enabled`.
export function useScrollSteps(enabled: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;

    const panels = Array.from(container.querySelectorAll<HTMLElement>("[data-step]"));
    if (panels.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-step"));
            if (!Number.isNaN(idx)) setStep(idx);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, [enabled]);

  return { containerRef, step };
}

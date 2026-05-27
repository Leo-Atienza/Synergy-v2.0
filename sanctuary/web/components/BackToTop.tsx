"use client";

// A real, keyboard- and screen-reader-accessible "return to top" control for the
// footer. Honours reduced-motion (instant jump instead of a smooth glide) and
// doesn't push a #hash onto the URL the way a bare anchor would.
export function BackToTop() {
  const toTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button type="button" className="foot-top-link" onClick={toTop}>
      Back to top
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/Logo";

// Top navigation for the multi-page showcase. The wordmark + route links; the
// "which five?" framing lives only in the Overview hero. Active route is marked
// with aria-current="page"; the mobile drawer is keyboard- and screen-reader-
// accessible (button toggles a labelled region, Escape closes it).
const LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Overview" },
  { href: "/map", label: "Map" },
  { href: "/method", label: "Method" },
  { href: "/vision", label: "Vision" },
  { href: "/funding", label: "Funding" },
  { href: "/sources", label: "Sources" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer whenever the route changes (a link was followed).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the open drawer (keyboard parity with the toggle button).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand" aria-label="Sanctuary home">
          <Logo className="nav-logo" />
          <span className="nav-brand-text">
            <span className="brand-mark">SANCTUARY</span>
            <span className="nav-brand-sub">Peel heat-resilience hubs</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>

        <nav id="nav-menu" className="nav-links" data-open={open} aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

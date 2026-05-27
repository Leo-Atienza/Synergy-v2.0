import Link from "next/link";

import { EvidenceTag } from "@/components/EvidenceTag";
import { BackToTop } from "@/components/BackToTop";

// Footer links mirror the top nav so the footer doubles as a secondary wayfinder.
const FOOT_LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Overview" },
  { href: "/map", label: "Map" },
  { href: "/method", label: "Method" },
  { href: "/vision", label: "Vision" },
  { href: "/sources", label: "Sources" },
];

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <Link href="/" className="foot-brand" aria-label="Sanctuary home">
          <span className="foot-mark">SANCTUARY</span>
          <span className="foot-brand-sub">Peel heat-resilience hubs</span>
        </Link>
        <nav className="foot-nav" aria-label="Footer">
          {FOOT_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="foot-honesty">
        <div className="foot-key">
          <EvidenceTag tag="verified" />
          <EvidenceTag tag="modelled" />
          <EvidenceTag tag="pending" />
        </div>
        <p>
          Siting and Heat Vulnerability Index (HVI) quintiles are <strong>verified</strong>{" "}against the public Peel HVI
          feature service and each building&rsquo;s official page. Reachable population, rooftop, and solar figures are{" "}
          <strong>modelled or pending</strong>, labelled as such and never presented as measured.
        </p>
      </div>

      <div className="foot-bottom">
        <p className="foot-meta">
          Region of Peel · Esri Canada · Alectra GRE&amp;T fit · built for Seneca Energy Hackathon 2026.
        </p>
        <BackToTop />
      </div>
    </footer>
  );
}

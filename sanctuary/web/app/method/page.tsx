import type { Metadata } from "next";

import { EvidenceSection } from "@/components/sections/EvidenceSection";
import { HonestySection } from "@/components/sections/HonestySection";
import { MethodSection } from "@/components/sections/MethodSection";

export const metadata: Metadata = {
  title: "Method — Sanctuary",
  description: "How Sanctuary ranks candidate Peel resilience hubs, with every number labelled verified, modelled, or pending.",
};

export default function MethodPage() {
  return (
    <main className="page content-page">
      <section className="content-hero" aria-labelledby="method-title">
        <p className="eyebrow">Method</p>
        <h1 id="method-title">A score a judge can audit in under 20 seconds.</h1>
        <p>
          Sanctuary starts with Peel HVI, then weighs modelled reach, trust, roof class, and facility fit. It ranks
          where to investigate first; it does not certify that any named building is ready or equipped.
        </p>
      </section>
      <MethodSection />
      <HonestySection />
      <EvidenceSection />
    </main>
  );
}

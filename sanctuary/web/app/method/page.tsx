import type { Metadata } from "next";
import Link from "next/link";

import { CounterfactualSection } from "@/components/sections/CounterfactualSection";
import { EvidenceSection } from "@/components/sections/EvidenceSection";
import { HonestySection } from "@/components/sections/HonestySection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Method · Sanctuary",
  description: "How Sanctuary ranks candidate Peel resilience hubs, with every number labelled verified, modelled, or pending.",
};

export default function MethodPage() {
  return (
    <main className="page content-page">
      <section className="content-hero" aria-labelledby="method-title">
        <p className="eyebrow">Method</p>
        <h1 id="method-title">A score you can audit in under 20 seconds.</h1>
        <p>
          Sanctuary starts with the Peel HVI, then weighs modelled reach, trust, roof class, and facility fit. The
          five-factor score is heat-led: flood and winter / energy burden are shown alongside each building as extra
          lenses, not folded into the rank yet. It ranks where to investigate first, and does not certify that any named
          building is ready or equipped.
        </p>
      </section>
      <MethodSection />
      <HonestySection />
      <CounterfactualSection />
      <EvidenceSection />
      <p className="decision-more">
        <Link href="/vision" className="inline-link">
          See the honest roadmap <ArrowUpRight size={14} />
        </Link>
      </p>
    </main>
  );
}

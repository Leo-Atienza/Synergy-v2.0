import type { Metadata } from "next";
import Link from "next/link";

import { FutureSection } from "@/components/sections/FutureSection";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Vision · Sanctuary",
  description:
    "The Sanctuary upgrade path: winter and heat risk indexing, verified site audits, resident guidance after validation, and regional scaling across Alectra territory.",
};

export default function VisionPage() {
  return (
    <main className="page content-page">
      <section className="content-hero" aria-labelledby="vision-title">
        <p className="eyebrow">Vision</p>
        <h1 id="vision-title">The future version only works if the prototype stays honest.</h1>
        <p>
          The hackathon build ranks candidate hubs. This page shows the practical upgrades next: stronger access
          modelling, real site audits, a winter cold-risk index, a resident view only after verification, and
          repeatable scoring across Alectra territory.
        </p>
      </section>
      <FutureSection />
      <p className="decision-more">
        <Link href="/funding" className="inline-link">
          How the hardening gets funded <ArrowUpRight size={14} />
        </Link>
      </p>
    </main>
  );
}

import type { Metadata } from "next";

import { FutureSection } from "@/components/sections/FutureSection";

export const metadata: Metadata = {
  title: "Vision — Sanctuary",
  description: "The Sanctuary roadmap: walksheds, site audits, a future public app, and Alectra-wide scaling after verification.",
};

export default function VisionPage() {
  return (
    <main className="page content-page">
      <section className="content-hero" aria-labelledby="vision-title">
        <p className="eyebrow">Vision</p>
        <h1 id="vision-title">The future version only works if the prototype stays honest.</h1>
        <p>
          The hackathon build ranks candidate hubs. Everything after that is a staged roadmap: better access
          modelling, real site audits, a public app only after verification, and repeatable scoring across Alectra
          territory.
        </p>
      </section>
      <FutureSection />
    </main>
  );
}

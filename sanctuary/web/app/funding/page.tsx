import type { Metadata } from "next";

import { FundingSection } from "@/components/sections/FundingSection";

export const metadata: Metadata = {
  title: "Funding · Sanctuary",
  description:
    "How a Peel resilience hub gets paid for: the 15% federal Clean Electricity tax credit, the FCM Green Municipal Fund, and Ontario's Save on Energy program, plus the future operating model. Every rate sourced.",
};

export default function FundingPage() {
  return (
    <main className="page content-page">
      <section className="content-hero" aria-labelledby="funding-title">
        <p className="eyebrow">Funding</p>
        <h1 id="funding-title">The hardening is fundable today.</h1>
        <p>
          A public owner does not have to wait for new policy. The anchor credit is in force, two of the stacking
          programs are open now, and the honest plan names the doors that are closed. Here is the funding, and how a
          hardened hub pays for itself over time.
        </p>
      </section>
      <FundingSection />
    </main>
  );
}

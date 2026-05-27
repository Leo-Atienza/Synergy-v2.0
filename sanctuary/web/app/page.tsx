import Link from "next/link";

import { loadMapData } from "@/lib/load-map-data";
import { Hero } from "@/components/Hero";
import { ScrollStage } from "@/components/ScrollStage";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ArrowUpRight } from "@/components/icons";

// Overview (/) — the hook, not the whole site. Hero + the problem in three lines
// + the condensed "deal the five" decision sequence, then cards into the Map,
// Method, Vision, and Sources pages. The full interactive map lives at /map; the
// proof/credibility sections moved to their own routes.
const READ_ON: { href: string; label: string; title: string; body: string; wide?: boolean }[] = [
  { href: "/map", label: "The map", title: "Explore Peel's heat", body: "The full-screen HVI map: pan, zoom, click a tract for its real sub-scores, and play the decision to Malton." },
  { href: "/method", label: "Method", title: "How the score works", body: "The 35 / 25 / 20 / 10 / 10 model, and exactly which inputs are verified, modelled, or still pending." },
  { href: "/vision", label: "Vision", title: "The honest roadmap", body: "From this ranking to site audits, a public app, and the method repeating across Alectra's territory." },
  { href: "/sources", label: "Sources", title: "Trace every number", body: "The HVI service, the facility data, and every claim linked to a public source, with the honesty key." },
  { href: "/funding", label: "Funding", title: "What pays for it", body: "The capital stack a public owner can actually claim: the 15% Clean Electricity credit, the Green Municipal Fund, and Save on Energy, plus how a hardened hub pays for itself.", wide: true },
];

export default function Page() {
  const { mapData, hubs } = loadMapData();

  return (
    <main className="page">
      <Hero />
      <ProblemSection />

      <section id="decision" className="decision-wrap reveal" aria-labelledby="decision-title">
        <div className="section-head">
          <p className="eyebrow">The decision</p>
          <h2 id="decision-title">From a heat map to five named buildings.</h2>
          <p className="section-lead">
            Scroll the map: heat risk, the shelter gap, ten trusted candidates, then the five Peel should harden first,
            ending on Malton. Click any pin or row to inspect the score behind it.
          </p>
        </div>
        <ScrollStage mapData={mapData} hubs={hubs} />
        <p className="decision-more">
          <Link href="/map" className="inline-link">
            Open the full interactive map <ArrowUpRight size={14} />
          </Link>
        </p>
      </section>

      <section className="readon reveal" aria-labelledby="readon-title">
        <div className="section-head">
          <p className="eyebrow">Read on</p>
          <h2 id="readon-title">The proof behind the ranking.</h2>
        </div>
        <div className="readon-grid">
          {READ_ON.map((c) => (
            <Link key={c.href} href={c.href} className={`readon-card${c.wide ? " readon-card-wide" : ""}`}>
              <span className="readon-card-label">{c.label}</span>
              <span className="readon-card-title">{c.title}</span>
              <span className="readon-card-body">{c.body}</span>
              <span className="readon-card-go" aria-hidden="true">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Static share card (the "5" + Malton). Satori can't parse woff2, so the OG route
// reads static TTF subsets (app/fonts/*-og.ttf) at build — separate from the
// next/font woff2 the site itself uses.
export const alt = "Sanctuary: harden these five Peel buildings first";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fraunces = readFileSync(join(process.cwd(), "app/fonts/Fraunces-og.ttf"));
  const mono = readFileSync(join(process.cwd(), "app/fonts/JetBrainsMono-og.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d1620",
          padding: "64px 72px",
          fontFamily: "JetBrains Mono",
        }}
      >
        <div style={{ display: "flex", color: "#e07533", fontSize: 24, letterSpacing: 6 }}>
          PROJECT SANCTUARY
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 360, color: "#e07533", lineHeight: 1 }}>5</div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
            <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 66, color: "#eaf1f6", lineHeight: 1.04 }}>
              buildings Peel should harden first.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", color: "#eaf1f6", fontSize: 28 }}>
            Malton Community Centre and Library
          </div>
          <div style={{ display: "flex", color: "#9fb3c2", fontSize: 22 }}>
            Peel Heat Vulnerability Index · top quintile · candidate resilience hub
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}

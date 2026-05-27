import type { MetadataRoute } from "next";

// Web app manifest: Android / Chrome "Add to Home Screen" and PWA installs use
// these icons (the maskable PNGs from scripts/gen-icons.mjs), and the navy
// theme/background keep the install splash on-brand. Next.js serves this at
// /manifest.webmanifest and auto-links it.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sanctuary",
    short_name: "Sanctuary",
    description:
      "Ranking trusted Peel buildings as candidate emergency resilience hubs, before the next heat wave or outage.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1620",
    theme_color: "#0d1620",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}

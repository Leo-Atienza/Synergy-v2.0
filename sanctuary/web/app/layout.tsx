import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Self-hosted variable fonts — zero CLS, no Google-Fonts network call, offline-safe.
const fraunces = localFont({
  src: "./fonts/Fraunces.woff2",
  variable: "--font-fraunces",
  display: "swap",
  weight: "300 900",
});
const mono = localFont({
  src: "./fonts/JetBrainsMono.woff2",
  variable: "--font-mono",
  display: "swap",
  weight: "100 800",
  // Not preloaded: let the LCP-critical display font (Fraunces) win initial
  // bandwidth. Mono swaps in a beat later; data is still readable in fallback mono.
  preload: false,
});

const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const DESCRIPTION =
  "Sanctuary ranks trusted Peel buildings as candidate emergency resilience hubs — then shows what is verified, what is modelled, and what still needs a site audit. Hero: Malton Community Centre and Library.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sanctuary — harden these five Peel buildings first",
  description: DESCRIPTION,
  applicationName: "Sanctuary",
  authors: [{ name: "Leo Atienza" }],
  openGraph: {
    type: "website",
    title: "Sanctuary — harden these five Peel buildings first",
    description: DESCRIPTION,
    siteName: "Sanctuary",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanctuary — harden these five Peel buildings first",
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${mono.variable}`}>
      <body>
        {/* Land at the top of the page on a hard refresh instead of the browser
            restoring the previous scroll offset. Runs before paint (first node in
            <body>) so there is no scroll-jump flash; hash links (#id) still work. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "if('scrollRestoration' in history){history.scrollRestoration='manual';}",
          }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

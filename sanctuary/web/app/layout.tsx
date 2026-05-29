import type { Metadata, Viewport } from "next";
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
  "Sanctuary ranks trusted Peel buildings as candidate emergency resilience hubs, then shows what is verified, what is modelled, and what still needs a site audit. The hero is Malton Community Centre and Library.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sanctuary: harden these five Peel buildings first",
  description: DESCRIPTION,
  applicationName: "Sanctuary",
  authors: [{ name: "Leo Atienza" }],
  openGraph: {
    type: "website",
    title: "Sanctuary: harden these five Peel buildings first",
    description: DESCRIPTION,
    siteName: "Sanctuary",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanctuary: harden these five Peel buildings first",
    description: DESCRIPTION,
  },
};

// Navy browser chrome on mobile (the address bar / status bar) instead of the
// default white, so the site reads as one dark surface on phones.
export const viewport: Viewport = {
  themeColor: "#0d1620",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        {/* Two before-paint jobs, run as the first node in <body> (no flash):
            1. Land at the top on a hard refresh instead of restoring scroll offset.
            2. White mode — dark is the default, so apply data-theme="light" ONLY when
               the visitor previously chose it (localStorage 'theme'). No system-pref
               fallback: first visit is always dark. The meta theme-color (rendered in
               <head> by the viewport export) is synced to the paper ground for mobile
               browser chrome. suppressHydrationWarning on <html> covers the attribute. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration' in history){history.scrollRestoration='manual';}" +
              "try{if(localStorage.getItem('theme')==='light'){document.documentElement.setAttribute('data-theme','light');var m=document.querySelector('meta[name=\"theme-color\"]');if(m){m.setAttribute('content','#f7f3ec');}}}catch(e){}",
          }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

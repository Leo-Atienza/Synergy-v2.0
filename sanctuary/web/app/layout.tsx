import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanctuary — which buildings to harden first",
  description:
    "When the next heat wave hits Peel, which trusted community buildings should become resilience hubs first? Sanctuary ranks real libraries, community centres, and places of worship by heat vulnerability, reach, and trust.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

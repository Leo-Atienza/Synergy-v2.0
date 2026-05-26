import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Sanctuary — harden these five first",
  description:
    "Project Sanctuary ranks trusted Peel buildings as candidate emergency resilience hubs, then shows what is verified, what is modelled, and what requires a site audit.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

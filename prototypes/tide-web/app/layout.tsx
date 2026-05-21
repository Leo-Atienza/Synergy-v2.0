import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tide — only ever pay 3.9¢",
  description:
    "Ontario charges 4¢/kWh overnight and 39¢ at dinnertime for the same electricity. Tide waits for the cheap, clean hours — automatically.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

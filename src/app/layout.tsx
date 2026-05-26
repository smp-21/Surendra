import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Surendra & Co. | Premium Coachbuilding & Industrial Engineering",
    template: "%s | Surendra & Co."
  },
  description: "Premium bus body builders and bus hardware manufacturers in India. Specialized in high-strength school buses, luxury intercity coaches, commercial chassis fabrication, and custom coach interiors with over 40 years of precision engineering. Founded in 1984.",
  metadataBase: new URL("https://www.surendraco.com"),
  keywords: [
    "bus body builders",
    "bus body manufacturers",
    "bus hardware",
    "india bus",
    "school bus manufacturers",
    "luxury bus builders",
    "coach builders india",
    "bus coach fabrication",
    "commercial vehicle fabrication",
    "truck and bus body builders"
  ],
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomContextMenu from "@/components/CustomContextMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen bg-zinc-950 text-white">
        <SmoothScroll>{children}</SmoothScroll>
        <CustomContextMenu />
        <Analytics />
      </body>
    </html>
  );
}


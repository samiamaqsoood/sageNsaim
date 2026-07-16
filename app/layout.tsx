import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Sage&Saim — Creative & Growth Agency",
  description:
    "Sage&Saim is a full-service marketing agency offering social media management, web development, backend automation, branding, photography and AI-driven data solutions.",
  keywords: [
    "Sage&Saim",
    "marketing agency",
    "social media management",
    "web development",
    "backend automation",
    "branding",
    "photography",
    "AI data",
  ],
  openGraph: {
    title: "Sage&Saim — Creative & Growth Agency",
    description:
      "Social media, web, automation, branding, photography & AI. One team, built to grow your brand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

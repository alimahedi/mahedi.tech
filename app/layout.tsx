import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import {
  Geist,
  Geist_Mono,
  Geist as V0_Font_Geist,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google";

// Initialize fonts
const _geist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MAHEDI TECH - Build Fast. Scale Faster.",
  description:
    "Turn your ideas into production-ready MVPs in 14 days. Zero compromise on quality. From discovery to launch, we handle everything.",
  keywords: [
    "MVP Development",
    "Web Development",
    "14-Day MVP",
    "Fast Development",
    "Startup Development",
    "MAHEDI TECH",
  ],
  authors: [{ name: "MAHEDI TECH" }],
  creator: "MAHEDI TECH",
  publisher: "MAHEDI TECH",
  applicationName: "MAHEDI TECH",
  generator: "Next.js",
  metadataBase: new URL("https://mahedi.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MAHEDI TECH - Build Fast. Scale Faster.",
    description:
      "Turn your ideas into production-ready MVPs in 14 days. Zero compromise on quality. From discovery to launch, we handle everything.",
    url: "https://mahedi.tech",
    siteName: "MAHEDI TECH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MAHEDI TECH - MVP Development in 14 Days",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAHEDI TECH - Build Fast. Scale Faster.",
    description:
      "Turn your ideas into production-ready MVPs in 14 days. Zero compromise on quality.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Young_Serif, Hanken_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-young-serif",
  display: "swap",
  preload: true,
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  preload: true,
});

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mitti Cafe, Kanpur | Specialty Coffee, Chai & Slow Mornings",
  description:
    "A cosy neighbourhood cafe in Swaroop Nagar, Kanpur. Earthen kulhads, single-origin pour-overs, fresh sourdough bakes, and Friday open mic evenings. Reserve your table via WhatsApp.",
  keywords: [
    "Mitti Cafe",
    "Kanpur cafe",
    "Swaroop Nagar cafe",
    "Specialty Coffee Kanpur",
    "Kulhad Chai",
    "Open mic Kanpur",
  ],
  openGraph: {
    title: "Mitti Cafe, Kanpur — Slow mornings. Strong coffee.",
    description:
      "Cosy neighbourhood cafe in Swaroop Nagar: specialty coffee, artisanal chai, fresh sourdough, and Friday poetry nights.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${youngSerif.variable} ${hankenGrotesk.variable} ${caveat.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-paper text-espresso antialiased selection:bg-marigold/30 selection:text-espresso min-h-screen">
        {children}
      </body>
    </html>
  );
}

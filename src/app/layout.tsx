import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rezowana Afrin (Lisa) | Haute Couture & Textile Art Portfolio",
  description:
    "Official fashion design portfolio of Rezowana Afrin. Highlighting artisanal couture, sculptural draping, architectural silhouettes, and heritage textile craftsmanship.",
  keywords: [
    "Rezowana Afrin",
    "Lisa Afrin",
    "Fashion Designer",
    "Haute Couture",
    "Textile Art",
    "Dhaka Fashion",
    "South Asian Couture",
    "Bridal Wear",
    "Draping",
  ],
  authors: [{ name: "Rezowana Afrin" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Rezowana Afrin | Fashion Designer Portfolio & Art Board",
    description: "Sculpting emotion through artisanal textiles, draped silhouettes, and timeless South Asian aesthetics.",
    type: "website",
    images: [
      {
        url: "/portfolio/MHP00075.jpg",
        width: 1200,
        height: 800,
        alt: "Rezowana Afrin Haute Couture",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${plusJakarta.variable} ${caveat.variable} antialiased selection:bg-[#b85d43]/20 selection:text-[#1a1715]`}
      >
        {children}
      </body>
    </html>
  );
}

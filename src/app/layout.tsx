import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Queen City Songwriters | Original Voices. Authentic Stories.",
    template: "%s | Queen City Songwriters",
  },
  description:
    "Queen City Songwriters Inc. is a nonprofit dedicated to fostering the art of songwriting in Spearfish, South Dakota. Home of the annual Queen City Songwriters Invitational.",
  keywords: [
    "songwriters",
    "original music",
    "Spearfish South Dakota",
    "songwriter showcase",
    "songwriter rounds",
    "Black Hills music",
    "Americana",
    "folk music",
    "singer-songwriter festival",
  ],
  authors: [{ name: "Queen City Songwriters Inc." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Queen City Songwriters",
    title: "Queen City Songwriters | Original Voices. Authentic Stories.",
    description:
      "A nonprofit dedicated to fostering the art of songwriting in Spearfish, South Dakota.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

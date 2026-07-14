import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#1C1612",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://qcsongwriters.com"),
  alternates: {
    canonical: "/",
  },
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
  },
  twitter: {
    card: "summary_large_image",
    site: "@qcsongwriters",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://qcsongwriters.com/#website",
                  url: "https://qcsongwriters.com",
                  name: "Queen City Songwriters",
                  publisher: {
                    "@id": "https://qcsongwriters.com/#organization",
                  },
                },
                {
                  "@type": "NGO",
                  "@id": "https://qcsongwriters.com/#organization",
                  name: "Queen City Songwriters Inc.",
                  url: "https://qcsongwriters.com",
                  logo: "https://qcsongwriters.com/logo-512.png",
                  image: "https://qcsongwriters.com/opengraph-image.jpg",
                  email: "contact@qcsongwriters.com",
                  description:
                    "A 501(c)(3) nonprofit dedicated to fostering the art of songwriting in Spearfish, South Dakota.",
                  nonprofitStatus: "https://schema.org/Nonprofit501c3",
                  foundingDate: "2024-05-24",
                  taxID: "99-3218012",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "810 State St.",
                    addressLocality: "Spearfish",
                    addressRegion: "SD",
                    postalCode: "57783",
                    addressCountry: "US",
                  },
                  sameAs: [
                    "https://www.instagram.com/qcsongwriters",
                    "https://www.facebook.com/qcsongwriters",
                  ],
                },
                {
                  "@type": "MusicEvent",
                  "@id": "https://qcsongwriters.com/invitational#event",
                  name: "Queen City Songwriters Invitational 2026",
                  url: "https://qcsongwriters.com/invitational",
                  image: "https://qcsongwriters.com/opengraph-image.jpg",
                  startDate: "2026-09-25",
                  endDate: "2026-09-26",
                  eventStatus: "https://schema.org/EventScheduled",
                  eventAttendanceMode:
                    "https://schema.org/OfflineEventAttendanceMode",
                  description:
                    "A two-day celebration of original music featuring intimate daytime songwriter rounds across downtown Spearfish, a Friday night Songwriters Showcase, and a Saturday headliner performance at The Matthews Opera House.",
                  performer: {
                    "@type": "Person",
                    name: "Jeffrey Foucault",
                  },
                  location: {
                    "@type": "Place",
                    name: "Downtown Spearfish",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Spearfish",
                      addressRegion: "SD",
                      postalCode: "57783",
                      addressCountry: "US",
                    },
                  },
                  organizer: {
                    "@id": "https://qcsongwriters.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

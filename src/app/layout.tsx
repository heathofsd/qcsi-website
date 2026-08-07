import type { Metadata, Viewport } from "next";
import { Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { artists2026, headliners } from "@/data/artists";

// Archivo carries display and body from one family via its width axis.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Courier Prime carries every run-sheet datum: times, rooms, numbers, credits.
const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F0F11",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://qcsongwriters.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default:
      "Queen City Songwriters — Original Music in Spearfish, South Dakota",
    template: "%s | Queen City Songwriters",
  },
  description:
    "A 501(c)(3) nonprofit building a year-round home for original music in the Black Hills. The Queen City Songwriters Invitational each September in downtown Spearfish, SD, songwriter rounds all year, and a network of 100+ writers.",
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
    // The font variables live on <html> so the :root theme tokens that
    // reference them resolve. Declaring them on <body> leaves --font-display
    // empty at :root and silently drops the whole type system.
    <html lang="en" className={`${archivo.variable} ${courierPrime.variable}`}>
      <body className="antialiased">
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
                  logo: "https://qcsongwriters.com/brand/qcsi-logo-512.png",
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
                  alternateName: "The Third Annual Queen City Songwriters Invitational",
                  url: "https://qcsongwriters.com/invitational",
                  image: "https://qcsongwriters.com/opengraph-image.jpg",
                  startDate: "2026-09-25T11:00:00-06:00",
                  endDate: "2026-09-26T22:00:00-06:00",
                  eventStatus: "https://schema.org/EventScheduled",
                  eventAttendanceMode:
                    "https://schema.org/OfflineEventAttendanceMode",
                  description:
                    "A two-day celebration of original music featuring six one-hour songwriter rounds a day across downtown Spearfish, a Friday night Songwriters Showcase, and a Saturday headliner performance at The Matthews Opera House.",
                  offers: {
                    "@type": "Offer",
                    url: "https://www.eventbrite.com/e/queen-city-songwriters-invitational-jeffrey-foucault-tickets-1996628646028?aff=site-schema",
                    availability: "https://schema.org/InStock",
                    validFrom: "2026-08-06",
                  },
                  // every invited writer, not just the headliner — these are the
                  // names people actually search for
                  performer: [
                    ...headliners
                      .filter((a) => a.year.includes(2026))
                      .map((a) => ({ "@type": "Person" as const, name: a.name })),
                    ...artists2026.map((a) => ({
                      "@type": "Person" as const,
                      name: a.name,
                    })),
                  ],
                  subEvent: [
                    {
                      "@type": "MusicEvent",
                      name: "The Songwriters Showcase",
                      startDate: "2026-09-25T19:30:00-06:00",
                      eventStatus: "https://schema.org/EventScheduled",
                      eventAttendanceMode:
                        "https://schema.org/OfflineEventAttendanceMode",
                      description:
                        "Every invited songwriter takes the stage at The Matthews Opera House. Free to attend.",
                      isAccessibleForFree: true,
                      offers: {
                        "@type": "Offer",
                        url: "https://www.eventbrite.com/e/queen-city-songwriters-invitational-the-songwriters-showcase-tickets-1997092516477?aff=site-schema",
                        price: "0",
                        priceCurrency: "USD",
                        availability: "https://schema.org/InStock",
                        validFrom: "2026-08-06",
                      },
                      location: {
                        "@type": "MusicVenue",
                        name: "The Matthews Opera House & Arts Center",
                        address: {
                          "@type": "PostalAddress",
                          streetAddress: "612 N Main St.",
                          addressLocality: "Spearfish",
                          addressRegion: "SD",
                          postalCode: "57783",
                          addressCountry: "US",
                        },
                      },
                    },
                    {
                      "@type": "MusicEvent",
                      name: "Jeffrey Foucault at The Matthews Opera House",
                      startDate: "2026-09-26T19:30:00-06:00",
                      eventStatus: "https://schema.org/EventScheduled",
                      eventAttendanceMode:
                        "https://schema.org/OfflineEventAttendanceMode",
                      performer: { "@type": "Person", name: "Jeffrey Foucault" },
                      offers: {
                        "@type": "Offer",
                        url: "https://www.eventbrite.com/e/queen-city-songwriters-invitational-jeffrey-foucault-tickets-1996628646028?aff=site-schema",
                        availability: "https://schema.org/InStock",
                        validFrom: "2026-08-06",
                      },
                      location: {
                        "@type": "MusicVenue",
                        name: "The Matthews Opera House & Arts Center",
                        address: {
                          "@type": "PostalAddress",
                          streetAddress: "612 N Main St.",
                          addressLocality: "Spearfish",
                          addressRegion: "SD",
                          postalCode: "57783",
                          addressCountry: "US",
                        },
                      },
                    },
                  ],
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
                // Past editions. These will not win event rich results, but they
                // are how "John Fullbright Spearfish" or "Jonathan Byrd Black
                // Hills" come to associate with QCSI.
                ...[2025, 2024].map((yr) => ({
                  "@type": "MusicEvent" as const,
                  "@id": `https://qcsongwriters.com/artists#invitational-${yr}`,
                  name: `Queen City Songwriters Invitational ${yr}`,
                  url: "https://qcsongwriters.com/artists",
                  startDate: yr === 2025 ? "2025-09-26" : "2024-09-27",
                  endDate: yr === 2025 ? "2025-09-27" : "2024-09-28",
                  eventStatus: "https://schema.org/EventScheduled",
                  eventAttendanceMode:
                    "https://schema.org/OfflineEventAttendanceMode",
                  performer: headliners
                    .filter((a) => a.year.includes(yr))
                    .map((a) => ({ "@type": "Person" as const, name: a.name })),
                  location: {
                    "@type": "Place" as const,
                    name: "Downtown Spearfish",
                    address: {
                      "@type": "PostalAddress" as const,
                      addressLocality: "Spearfish",
                      addressRegion: "SD",
                      addressCountry: "US",
                    },
                  },
                  organizer: {
                    "@id": "https://qcsongwriters.com/#organization",
                  },
                })),
              ],
            }),
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

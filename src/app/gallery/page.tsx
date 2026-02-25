import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from the Queen City Songwriters Invitational — original music in downtown Spearfish, South Dakota.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream py-20 lg:py-28 overflow-hidden">
        <Image
          src="/photos/venue-gallery-packed.jpg"
          alt="Packed venue during a songwriter round at the Invitational"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
              Gallery
            </p>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Moments Worth Remembering
            </h1>
            <p className="text-xl text-cream/80 leading-relaxed">
              Scenes from the Invitational — songwriter rounds in coffee shops,
              headliner nights at The Matthews, and the community that makes it
              all happen.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Grid Placeholder */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* 2025 */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-charcoal mb-2">
              2025 Invitational
            </h2>
            <p className="text-charcoal/60 mb-8">
              Andrea von Kampen, John Fullbright, and 20+ songwriters across
              downtown Spearfish.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: "/photos/headliner-matthews-wide.jpg", alt: "Headliner performing at The Matthews Opera House, 2025 Invitational", featured: true },
                { src: "/photos/2025/converted/IMG_4473.jpg", alt: "Songwriter round at a downtown Spearfish venue" },
                { src: "/photos/2025/converted/IMG_4488.jpg", alt: "Intimate songwriter performance during the 2025 Invitational" },
                { src: "/photos/2025/converted/IMG_4514.jpg", alt: "Artists sharing songs at a daytime round" },
                { src: "/photos/2025/converted/IMG_4545.jpg", alt: "Audience enjoying original music at a downtown venue" },
                { src: "/photos/2025/converted/IMG_4601.jpg", alt: "Songwriter on stage at The Matthews Opera House" },
                { src: "/photos/2025/converted/IMG_4602.jpg", alt: "Evening showcase crowd at The Matthews" },
                { src: "/photos/2025/converted/IMG_4616.jpg", alt: "Performers at the 2025 Queen City Songwriters Invitational" },
              ].map((photo, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl overflow-hidden ${
                    photo.featured ? "md:col-span-2 md:row-span-2" : ""
                  } aspect-square`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 2024 */}
          <div>
            <h2 className="font-display text-3xl font-bold text-charcoal mb-2">
              2024 Inaugural Invitational
            </h2>
            <p className="text-charcoal/60 mb-8">
              Jonathan Byrd, Jami Lynn, and 27 songwriters launched something
              special.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: "/photos/performer-full-house.jpg", alt: "Packed house for a songwriter performance at the 2024 Invitational" },
                { src: "/photos/performer-matthews-audience-view.jpg", alt: "View from the audience during a Matthews performance" },
                { src: "/photos/duo-stage-performance.jpg", alt: "Duo performing on stage at The Matthews Opera House" },
                { src: "/photos/performer-matthews-wide.jpg", alt: "Wide shot of a performer at The Matthews Opera House", featured: true },
                { src: "/photos/crowd-line-outside.jpg", alt: "Audience lined up outside a venue during the Invitational" },
                { src: "/photos/venue-gallery-packed.jpg", alt: "Standing-room-only crowd at a songwriter round" },
                { src: "/photos/performer-closeup-guitar.jpg", alt: "Close-up of a songwriter performing guitar" },
                { src: "/photos/community-selfie.jpg", alt: "Songwriters and community members at the 2024 Invitational" },
              ].map((photo, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl overflow-hidden ${
                    photo.featured ? "md:col-span-2 md:row-span-2" : ""
                  } aspect-square`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-charcoal text-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">
            Video Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Lacy Nelson at the 2024 Invitational",
              "Heath Johnson live performance",
              "Clayton Ryan & Ryan LittleEagle at The Matthews",
            ].map((title) => (
              <div
                key={title}
                className="aspect-video rounded-xl bg-cream/5 border border-cream/10 flex items-center justify-center"
              >
                <div className="text-center p-4">
                  <svg className="w-12 h-12 mx-auto text-cream/20 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs text-cream/40">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-cream mb-4">
            Want to Be in Next Year&apos;s Gallery?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              href="/for-songwriters"
              className="rounded-full bg-amber px-8 py-3 font-bold text-cream hover:bg-amber-light transition-colors"
            >
              Apply as a Songwriter
            </Link>
            <Link
              href="/invitational"
              className="rounded-full bg-cream px-8 py-3 font-bold text-charcoal hover:bg-cream-dark transition-colors"
            >
              Attend the Invitational
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

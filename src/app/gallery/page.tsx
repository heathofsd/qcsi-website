import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Photo & Video Gallery",
  alternates: { canonical: "/gallery" },
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
                { src: "/photos/2024/converted/matthews-byrd-stage-crowd.jpg", alt: "Jonathan Byrd performing on The Matthews stage with crowd visible, 2024 Invitational", featured: true },
                { src: "/photos/2024/converted/venue-bar-crowd.jpg", alt: "Packed bar venue during a songwriter round at the 2024 Invitational" },
                { src: "/photos/2024/converted/traveler-stage-group.jpg", alt: "Songwriters on the Traveler Whiskey Stage at the 2024 Invitational" },
                { src: "/photos/2024/converted/coffeeshop-round.jpg", alt: "Songwriter round in a downtown Spearfish coffee shop" },
                { src: "/photos/2024/converted/studio-621-round.jpg", alt: "Intimate songwriter round at Studio 621" },
                { src: "/photos/2024/converted/matthews-performer-portrait.jpg", alt: "Performer on The Matthews Opera House stage, 2024 Invitational" },
                { src: "/photos/2024/converted/matthews-performer-crowd.jpg", alt: "Songwriter performing to a full house at The Matthews" },
                { src: "/photos/2024/converted/bar-venue-round.jpg", alt: "Songwriter round at a downtown Spearfish bar venue" },
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
            {/* Clayton Ryan & Ryan LittleEagle */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/ixqDpS2RXkc"
                title="Clayton Ryan & Ryan LittleEagle at The Matthews"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {/* Lacy Nelson */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/HfreoKuUsa0"
                title="Lacy Nelson at the 2024 Invitational"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {/* Heath Johnson */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/gugGfwwZe0k"
                title="Heath Johnson live performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
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

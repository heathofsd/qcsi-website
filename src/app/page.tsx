import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "This event is a great way to get them all in one area to be heard and experienced.",
    name: "Allison Moore",
    role: "Venue Owner",
  },
  {
    quote:
      "As a songwriter, it brought inspiration, camaraderie, and the overwhelmingly strange sense of being heard and understood among my peers and the incredible community that supports us.",
    name: "Jami Lynn",
    role: "Headliner, 2024 Invitational",
  },
  {
    quote:
      "The Invitational brought original music to life in a way Spearfish has never seen before.",
    name: "Joanna Mechaley",
    role: "The Matthews Opera House",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream overflow-hidden">
        <Image
          src="/photos/hero-matthews-stage.jpg"
          alt="Songwriter performing on The Matthews Opera House stage during the Queen City Songwriters Invitational"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-44">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
              Spearfish, South Dakota
            </p>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Original Voices.
              <br />
              <span className="text-amber">Authentic Stories.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-cream/80 leading-relaxed max-w-2xl mb-10">
              In a world where the music industry chases trends and algorithms,
              we believe in something simpler and deeper: every song carries a
              story, and every story deserves to be heard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/invitational"
                className="rounded-full bg-amber px-8 py-4 text-base font-bold text-cream hover:bg-amber-light transition-colors"
              >
                The 2026 Invitational
              </Link>
              <Link
                href="/about"
                className="rounded-full border-2 border-cream/30 px-8 py-4 text-base font-bold text-cream hover:border-cream/60 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission snapshot */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Where Songwriters Come to Be Heard
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              Queen City Songwriters Inc. is a nonprofit dedicated to fostering
              the art of songwriting. Through our annual Invitational, year-round
              songwriter rounds, and community partnerships, we&apos;re building
              something real in the Black Hills — a place where artists are
              supported and entire communities are enriched.
            </p>
            <div className="flex justify-center gap-8 lg:gap-16 text-center">
              <div>
                <p className="text-4xl font-display font-bold text-denim">96+</p>
                <p className="text-sm text-charcoal/60 mt-1">Songwriters in Our Network</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-denim">6</p>
                <p className="text-sm text-charcoal/60 mt-1">Downtown Venues</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-denim">300+</p>
                <p className="text-sm text-charcoal/60 mt-1">Attendees Annually</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-denim">3</p>
                <p className="text-sm text-charcoal/60 mt-1">Years Running</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invitational Feature */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-4">
                September 25-26, 2026
              </p>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mb-6">
                A Weekend Unlike Any Other
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
                The Queen City Songwriters Invitational is a two-day celebration
                of original music across downtown Spearfish. Intimate daytime
                songwriter rounds at local venues. Evening headliner showcases at
                The Matthews Opera House.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                No covers. No setlists. Just original voices sharing the stories
                behind their songs in the most intimate listening rooms the Black
                Hills has to offer.
              </p>
              <Link
                href="/invitational"
                className="inline-block rounded-full bg-denim px-8 py-4 text-base font-bold text-cream hover:bg-denim-light transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/photos/invitational-stage-crowd.jpg"
                alt="Songwriters performing at the Queen City Songwriters Invitational with an engaged audience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Past Headliners */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Past Headliners
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              Artists who have graced The Matthews stage for our evening showcases.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Jonathan Byrd", year: "2024", photo: "/photos/jonathan-byrd.jpg" },
              { name: "Jami Lynn", year: "2024", photo: "/photos/jami-lynn.webp" },
              { name: "Andrea von Kampen", year: "2025", photo: "/photos/andrea-von-kampen.webp" },
              { name: "John Fullbright", year: "2025", photo: "/photos/john-fullbright.jpg", objectPosition: "center 10%" },
            ].map((artist) => (
              <div key={artist.name} className="text-center">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src={artist.photo}
                    alt={`${artist.name} at the Queen City Songwriters Invitational`}
                    fill
                    className="object-cover"
                    style={artist.objectPosition ? { objectPosition: artist.objectPosition } : undefined}
                  />
                </div>
                <h3 className="font-display font-bold text-charcoal">{artist.name}</h3>
                <p className="text-sm text-charcoal/50">{artist.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-cream mb-4">
              What People Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream/5 border border-cream/10 rounded-xl p-8"
              >
                <svg className="h-8 w-8 text-amber mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p className="text-cream/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-cream font-semibold">{t.name}</p>
                  <p className="text-cream/50 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-cream mb-4">
            Be Part of Something Real
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10">
            Whether you write songs, love live music, or want to support the
            arts in your community — there&apos;s a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/for-songwriters"
              className="rounded-full bg-amber px-8 py-4 font-bold text-cream hover:bg-amber-light transition-colors"
            >
              I&apos;m a Songwriter
            </Link>
            <Link
              href="/for-audiences"
              className="rounded-full bg-cream px-8 py-4 font-bold text-charcoal hover:bg-cream-dark transition-colors"
            >
              I Love Live Music
            </Link>
            <Link
              href="/partners"
              className="rounded-full border-2 border-cream/40 px-8 py-4 font-bold text-cream hover:border-cream/70 transition-colors"
            >
              I Want to Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

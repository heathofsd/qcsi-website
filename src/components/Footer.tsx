import Link from "next/link";
import { LogoStacked } from "@/components/Logo";

const explore = [
  { href: "/about", label: "About QCSI" },
  { href: "/invitational", label: "The Invitational" },
  { href: "/artists", label: "Artists" },
  { href: "/gallery", label: "Gallery" },
];

const involved = [
  { href: "/for-songwriters", label: "For Songwriters" },
  { href: "/for-audiences", label: "For Audiences" },
  { href: "/partners", label: "Partners & Sponsors" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact Us" },
];

/* The footer is the credit block at the bottom of the run sheet. */
export function Footer() {
  return (
    <footer className="bg-floor border-t border-floor-line">
      <div className="shell py-16 md:py-20">
        {/* two columns at md — a 12-col split leaves the contact column 80px
            wide, which no email address fits into */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="md:col-span-2 lg:col-span-4">
            <LogoStacked className="h-24 w-auto text-chalk mb-7" />
            <p className="t-body text-chalk-dim">
              A nonprofit supporting the art of songwriting in Spearfish, South
              Dakota.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.instagram.com/qcsongwriters"
                target="_blank"
                rel="noopener noreferrer"
                className="t-run border border-floor-line px-4 py-2.5 text-chalk-dim hover:text-tape hover:border-tape transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/qcsongwriters"
                target="_blank"
                rel="noopener noreferrer"
                className="t-run border border-floor-line px-4 py-2.5 text-chalk-dim hover:text-tape hover:border-tape transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="t-run text-tape mb-5">Explore</p>
            <ul>
              {explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 text-chalk-dim hover:text-chalk transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="t-run text-tape mb-5">Get Involved</p>
            <ul>
              {involved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 text-chalk-dim hover:text-chalk transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <p className="t-run text-tape mb-5">Connect</p>
            <a
              href="mailto:contact@qcsongwriters.com"
              className="block t-run text-chalk-dim hover:text-chalk transition-colors break-all"
            >
              contact@
              <wbr />
              qcsongwriters.com
            </a>
            <p className="t-run text-chalk-dim mt-4">Spearfish, SD</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-floor-line flex flex-col sm:flex-row justify-between gap-3">
          <p className="t-run-sm text-chalk-dim">
            &copy; {new Date().getFullYear()} Queen City Songwriters Inc. &middot; 501(c)(3)
            nonprofit &middot; EIN 99-3218012
          </p>
          <p className="t-run-sm text-chalk-dim">Spearfish, South Dakota</p>
        </div>
      </div>
    </footer>
  );
}

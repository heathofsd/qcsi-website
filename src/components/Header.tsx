"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/invitational", label: "The Invitational" },
  { href: "/artists", label: "Artists" },
  {
    label: "Get Involved",
    children: [
      { href: "/for-songwriters", label: "For Songwriters" },
      { href: "/for-audiences", label: "For Audiences" },
      { href: "/partners", label: "Partners & Sponsors" },
    ],
  },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sand">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Queen City Songwriters"
              width={60}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="px-4 py-2 text-sm font-semibold tracking-wide text-charcoal hover:text-denim transition-colors">
                    {link.label}
                    <svg
                      className="ml-1 inline-block h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 top-full mt-0 w-52 rounded-md bg-cream border border-sand shadow-lg py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-sand hover:text-denim transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-4 py-2 text-sm font-semibold tracking-wide text-charcoal hover:text-denim transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/support"
              className="ml-4 rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-cream hover:bg-amber-light transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-sand pt-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-denim">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block pl-8 py-2 text-sm text-charcoal hover:text-denim"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="block px-4 py-3 text-sm font-semibold text-charcoal hover:text-denim"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-4 px-4">
              <Link
                href="/support"
                className="block w-full rounded-full bg-amber py-3 text-center text-sm font-bold text-cream"
                onClick={() => setMobileOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

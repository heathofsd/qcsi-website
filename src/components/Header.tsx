"use client";

import Link from "next/link";
import { LogoHorizontal } from "@/components/Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/invitational", label: "Invitational" },
  { href: "/artists", label: "Artists" },
  { href: "/for-songwriters", label: "Songwriters" },
  { href: "/for-audiences", label: "Audiences" },
  { href: "/partners", label: "Partners" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // The mobile panel is a real panel: Escape closes it and the page behind
  // it does not scroll.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-floor border-b border-floor-line">
      <nav className="shell">
        <div className="flex h-[74px] items-center justify-between gap-6">
          <Link
            href="/"
            className="flex-shrink-0 text-chalk hover:text-tape transition-colors"
            aria-label="Queen City Songwriters — home"
          >
            <LogoHorizontal className="h-10 w-auto" />
          </Link>

          {/* Desktop — the nav is a run sheet, active marked by a tape strip. */}
          <div className="hidden xl:flex xl:items-center xl:gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3 py-2 t-run transition-colors ${
                    active ? "text-chalk" : "text-chalk-dim hover:text-tape"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="tape absolute left-3 right-3 -bottom-0.5 h-[3px]" />
                  )}
                </Link>
              );
            })}
            <a
              href="https://app.getpulley.app/donate/qcsi"
              className="btn btn-tape font-bold ml-4 !py-3 !px-6"
            >
              Give
            </a>
          </div>

          <button
            className="xl:hidden p-3 -mr-3 text-chalk"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="block w-6 space-y-[5px]">
              <span
                className={`block h-[2px] bg-current transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {open && (
          <div className="xl:hidden min-h-[calc(100vh-74px)] flex flex-col pt-2 pb-10 border-t border-floor-line">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="run-row run-row--link"
                >
                  <span
                    className={`t-title ${active ? "text-tape" : "text-chalk"}`}
                  >
                    {link.label}
                  </span>
                  {active && (
                    <span className="t-run text-tape md:text-right">Here</span>
                  )}
                </Link>
              );
            })}
            {/* the strip that closes the list */}
            <div className="mt-auto pt-10">
              <a
                href="https://app.getpulley.app/donate/qcsi"
                className="btn btn-tape font-bold block text-center"
                onClick={() => setOpen(false)}
              >
                Give
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

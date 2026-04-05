"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/weddings", label: "Weddings" },
  { href: "/events", label: "Events" },
  { href: "/#reviews", label: "Reviews" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md">
      <div className="w-full px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-[#1a1a1a] ml-0 xl:ml-8 text-base xl:text-xl leading-snug">
            <span className="xl:hidden">Nicola Mason</span>
            <span className="hidden xl:inline">Nicola Mason Wedding &amp; Events Singer</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => trackEvent.clickNavLink(link.label)}
                  className={`text-sm xl:text-base tracking-wide transition-colors hover:text-[#A68B5B] ${
                    pathname === link.href
                      ? "text-[#A68B5B] font-medium"
                      : "text-[#444444]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/enquiry"
                onClick={() => trackEvent.clickEnquiryCTA('navbar_desktop')}
                className="bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-4 xl:px-6 py-2.5 text-xs xl:text-sm uppercase tracking-wider transition-colors rounded-[6px] whitespace-nowrap"
              >
                <span className="font-medium">Check Your Date</span>
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2C2C2C]"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col items-center text-center divide-y divide-stone-200">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full py-3">
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      trackEvent.clickNavLink(link.label);
                    }}
                    className={`block text-base tracking-wide transition-colors hover:text-[#A68B5B] ${
                      pathname === link.href
                        ? "text-[#A68B5B] font-medium"
                        : "text-[#444444]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="w-full pt-3">
                <Link
                  href="/enquiry"
                  onClick={() => {
                    setIsOpen(false);
                    trackEvent.clickEnquiryCTA('navbar_mobile');
                  }}
                  className="inline-block bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-5 py-2 text-sm uppercase tracking-wider transition-colors rounded-[6px]"
                >
                  <span className="font-medium">Check Your Date</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-full bg-[#C4A882] py-2 text-center">
        <p className="text-[#2C2C2C] text-xs uppercase tracking-[0.15em] font-medium">
          Now booking for 2027 &bull; Limited 2026 dates remaining
        </p>
      </div>
    </nav>
  );
}

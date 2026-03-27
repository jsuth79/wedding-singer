"use client";

import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

export default function HeroSection() {
  return (
    <>
      <section className="relative h-[calc(70vh+30px)] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/nicola-mason-wedding-events-singer-2.webp"
            alt="Award-winning female wedding singer Nicola Mason performing live music at Scottish wedding"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Heading - top */}
        <div className="relative z-10 w-full px-6 md:px-12 pt-24 md:pt-32">
          <div className="max-w-2xl ml-0 md:ml-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Award-Winning Vocals. Unforgettable Atmosphere.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Tailored live music for memorable Scottish celebrations.
            </p>
          </div>
        </div>

        {/* CTA - bottom */}
        <div className="absolute bottom-12 left-0 right-0 z-10 w-full px-6 md:px-12">
          <div className="ml-0 md:ml-8">
            <div className="flex flex-col gap-4 md:inline-flex">
              <Link
                href="/#listen"
                className="flex justify-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px] w-full"
              >
                Listen Now
              </Link>
              <Link
                href="/weddings"
                onClick={() => trackEvent.viewPackage('hero_cta')}
                className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px] w-full"
              >
                <span className="font-medium">View Wedding Packages</span>
                <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                  Starting from £325
                </span>
              </Link>
            </div>
            <p className="mt-6 text-white/80 text-base">
              Now booking for 2027 &bull; Limited 2026 dates remaining
            </p>
          </div>
        </div>
      </section>

      {/* Awards - below image */}
      <section className="py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-[#888888]">
            <span className="flex items-start justify-center gap-1.5">
              <span className="text-[#C4A882] shrink-0">★</span> Scottish Wedding Awards Winner
            </span>
            <span className="flex items-start justify-center gap-1.5">
              <span className="text-[#C4A882] shrink-0">★</span> Confetti Awards Finalist
            </span>
            <span className="flex items-start justify-center gap-1.5">
              <span className="text-[#C4A882] shrink-0">★</span> UKbride Approved
            </span>
            <span className="flex items-start justify-center gap-1.5">
              <span className="text-[#C4A882] shrink-0">★</span> 5-Star Reviews
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

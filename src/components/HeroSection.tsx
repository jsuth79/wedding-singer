"use client";

import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[600px] h-[calc(84vh+30px)] md:h-[calc(77vh+30px)] overflow-hidden flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/nicola-mason-wedding-events-singer-l.webp"
            alt="Award-winning female wedding singer Nicola Mason performing live music at Scottish wedding"
            fill
            className="object-cover [object-position:calc(50%+110px)_top] md:object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Heading - top */}
        <div className="relative z-10 w-full px-6 md:px-12 pt-32 max-md:landscape:pt-20 md:pt-32 flex justify-end">
          <div className="max-w-lg mr-0 md:mr-8 text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Award-Winning Music for Your Wedding Day
            </h1>
            <p className="hidden md:block text-xl md:text-2xl text-white/90 leading-relaxed">
              Acoustic wedding singer — from your aisle walk through to your first dances.
            </p>
          </div>
        </div>

        {/* CTA - bottom */}
        <div className="relative z-10 w-full px-6 md:px-12 pb-8">
          <div className="mr-0 md:mr-8 flex flex-col items-center md:items-end gap-5">
            <p className="md:hidden text-xl text-white/90 leading-relaxed text-center">
              Acoustic wedding singer — from your aisle walk through to your first dances.
            </p>
            <div className="flex flex-col gap-4 md:inline-flex w-full md:w-auto">
              <a
                href="#listen"
                className="flex justify-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-8 py-4 text-sm tracking-wider transition-colors rounded-[6px] w-full"
              >
                <span className="font-medium text-base">Listen Now</span>
              </a>
              <Link
                href="/weddings"
                onClick={() => trackEvent.viewPackage('hero_cta')}
                className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm tracking-wider transition-colors rounded-[6px] w-full"
              >
                <span className="font-medium text-base">View Wedding Packages</span>
                <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                  Starting from £325
                </span>
              </Link>
            </div>
            <Link
              href="/wedding-ceremony-singer-scotland"
              className="inline-block text-white border-b-2 border-white/60 pb-1 hover:border-white transition-colors uppercase text-sm tracking-wider"
            >
              Live Music for Your Ceremony →
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

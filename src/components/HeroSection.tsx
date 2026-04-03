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
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Heading - top */}
        <div className="relative z-10 w-full px-6 md:px-12 pt-32 max-md:landscape:pt-20 md:pt-32">
          <div className="max-w-2xl ml-0 md:ml-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Award-Winning Music for Your Wedding Day
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Live singing throughout your wedding day, from your aisle walk through to your first dances.
            </p>
          </div>
        </div>

        {/* CTA - bottom */}
        <div className="relative z-10 w-full px-6 md:px-12 pb-12">
          <div className="ml-0 md:ml-8">
            <div className="flex flex-col gap-4 md:inline-flex">
              <Link
                href="/#listen"
                className="flex justify-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-8 py-4 text-sm tracking-wider transition-colors rounded-[4px] w-full"
              >
                Listen Now
              </Link>
              <Link
                href="/weddings"
                onClick={() => trackEvent.viewPackage('hero_cta')}
                className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm tracking-wider transition-colors rounded-[4px] w-full"
              >
                <span className="font-medium">View Wedding Packages</span>
                <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                  Starting from £325
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

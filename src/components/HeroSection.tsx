import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content - heading and CTA */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2C2C] mb-6 leading-tight">
              Award-Winning Vocals. Unforgettable Atmosphere.
            </h1>
            <p className="text-lg md:text-xl text-[#444444] leading-relaxed lg:mb-8">
              Tailored live music for elegant Scottish celebrations.
            </p>

            {/* Image - mobile only (between subtitle and CTA) */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden my-8 lg:hidden">
              <Image
                src="/images/nicola-mason-wedding-events-singer.jpg"
                alt="Nicola Mason performing at a wedding"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/weddings"
                className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
              >
                <span className="font-medium">View Wedding Packages</span>
                <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                  Starting from £325
                </span>
              </Link>
            </div>
            <p className="mt-6 text-[#888888] text-sm">
              Now booking for 2027 &bull; Limited 2026 dates available
            </p>
          </div>

          {/* Right content - image (desktop only) */}
          <div className="hidden lg:block relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/nicola-mason-wedding-events-singer.jpg"
              alt="Nicola Mason performing at a wedding"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

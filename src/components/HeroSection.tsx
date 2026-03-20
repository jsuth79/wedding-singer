import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-6 md:pt-28 md:pb-8 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left content - heading and CTA */}
          <div className="text-center md:text-left flex flex-col">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-serif text-[#2C2C2C] mb-4 md:mb-8 leading-tight">
              Award-Winning Vocals. Unforgettable Atmosphere.
            </h1>
            <p className="text-lg md:text-lg text-[#444444] leading-relaxed mb-4 md:mb-16">
              Tailored live music for elegant Scottish celebrations.
            </p>

            {/* Image - mobile only (between subtitle and CTA) */}
            <div className="relative aspect-[4/4] rounded-xl overflow-hidden my-4 md:hidden">
              <Image
                src="/images/nicola-mason-wedding-events-singer-p.webp"
                alt="Award-winning wedding singer Nicola Mason performing live music at a Scottish wedding ceremony"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/weddings"
                className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
              >
                <span className="font-medium">View Wedding Packages</span>
                <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                  Starting from £325
                </span>
              </Link>
            </div>
            <p className="mt-6 text-[#888888] text-base">
              Now booking for 2027 &bull; Limited 2026 dates available
            </p>
          </div>

          {/* Right content - image (tablet/desktop only) */}
          <div className="hidden md:block relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src="/images/nicola-mason-wedding-events-singer-p.webp"
              alt="Award-winning wedding singer Nicola Mason performing live music at a Scottish wedding ceremony"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Awards - full width */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 text-sm text-[#888888]">
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
  );
}

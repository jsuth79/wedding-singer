"use client";

import { useState } from "react";
import Link from "next/link";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";

const songs: { song: string; artist: string; category: string }[] = [];

const categoryOrder = [
  "Ceremony/Romantic",
  "Party/Dance Floor",
  "Indie/Alternative/Chill",
  "Vintage/Swing/Classic",
  "Scottish/Traditional",
  "Musicals/Show Tunes",
  "ABBA Medleys & Group Performances",
  "Christmas",
  "Speciality/Add-ons",
];

const categoryLabels: Record<string, string> = {
  "Ceremony/Romantic": "Ceremony / Romantic",
  "Party/Dance Floor": "Party / Dance Floor",
  "Indie/Alternative/Chill": "Indie / Alternative / Chill",
  "Vintage/Swing/Classic": "Vintage / Swing / Classic",
  "Scottish/Traditional": "Scottish / Traditional",
  "Musicals/Show Tunes": "Musicals / Show Tunes",
  "ABBA Medleys & Group Performances": "ABBA / Group Performances",
  Christmas: "Christmas",
  "Speciality/Add-ons": "Speciality",
};

export default function RepertoireClient() {
  const [active, setActive] = useState<string | null>(null);

  const displayedSongs =
    active === null
      ? songs
      : songs.filter((song) => song.category === active);

  return (
    <>
      <section className="py-8 px-6 bg-[#FAF8F3] border-b border-stone-200 sticky top-16 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActive(null)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] rounded-[4px] border transition-colors ${
                active === null
                  ? "bg-[#2C2C2C] text-white border-[#2C2C2C]"
                  : "bg-white text-[#2C2C2C] border-stone-200 hover:border-[#C4A882] hover:text-[#C4A882]"
              }`}
            >
              All (0)
            </button>
            {categoryOrder.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] rounded-[4px] border transition-colors ${
                  active === category
                    ? "bg-[#2C2C2C] text-white border-[#2C2C2C]"
                    : "bg-white text-[#2C2C2C] border-stone-200 hover:border-[#C4A882] hover:text-[#C4A882]"
                }`}
              >
                {categoryLabels[category]} (0)
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 bg-[#FAF8F3]">
        <div className="max-w-5xl mx-auto">
          {active === null && (
            <p className="text-center text-[#888888] text-sm mb-10">
              Repertoire updates coming soon.
            </p>
          )}
          {active !== null && (
            <div className="text-center mb-10">
              <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-2">
                {categoryLabels[active]}
              </p>
              <p className="text-[#888888] text-sm">0 songs</p>
            </div>
          )}

          {displayedSongs.length === 0 && (
            <div className="border border-dashed border-stone-300 rounded-[4px] bg-white/60 px-6 py-12 text-center">
              <p className="text-[#2C2C2C] font-medium mb-2">
                No songs listed right now
              </p>
              <p className="text-sm text-[#888888] max-w-xl mx-auto">
                This page is being refreshed and the repertoire will be added back later.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 bg-[#F5F1EB]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Something in mind?
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-4">
            Get in touch to discuss your song choices
          </h2>
          <p className="text-[#444444] leading-relaxed mb-8 max-w-xl mx-auto">
            If you have something specific in mind, mention it when you enquire
            and I&apos;ll let you know what&apos;s possible.
          </p>
          <div className="mb-8">
            <Link
              href="/weddings"
              className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider"
            >
              View Wedding Packages →
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              location="repertoire_cta"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via WhatsApp (1–2 hour response)
              </span>
            </TrackedWhatsAppLink>
            <TrackedEnquiryLink
              location="repertoire_cta"
              className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </TrackedEnquiryLink>
          </div>
        </div>
      </section>
    </>
  );
}

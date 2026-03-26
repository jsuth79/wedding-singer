import type { Metadata } from "next";
import RepertoireClient from "./RepertoireClient";

export const metadata: Metadata = {
  title: "Song Repertoire | Nicola Mason Wedding Singer",
  description:
    "Browse Nicola Mason's full song repertoire — over 200 acoustic covers spanning ceremony classics, party floor-fillers, vintage swing, Scottish favourites, and more.",
  alternates: {
    canonical: "/repertoire",
  },
  openGraph: {
    title: "Song Repertoire | Nicola Mason Wedding Singer",
    description:
      "Browse over 200 songs — ceremony classics, party floor-fillers, vintage swing, Scottish favourites, and more.",
    url: "https://www.nicolamason.co.uk/repertoire",
  },
};

export default function RepertoirePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-12 md:py-20 px-6 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Repertoire
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6">
            Song List
          </h1>
          <p className="text-[#444444] leading-relaxed max-w-xl mx-auto">
            A sample of songs I&apos;ve performed recently — spanning ceremony classics, vintage swing,
            indie favourites, party floor-fillers, and Scottish staples. Filter by category or browse everything below.
          </p>
        </div>
      </section>

      <RepertoireClient />
    </div>
  );
}

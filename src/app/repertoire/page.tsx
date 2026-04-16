import type { Metadata } from "next";
import RepertoireClient from "./RepertoireClient";

const pageUrl = "https://www.nicolamason.co.uk/repertoire";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nicolamason.co.uk" },
    { "@type": "ListItem", position: 2, name: "Repertoire", item: pageUrl },
  ],
};

export const metadata: Metadata = {
  title: "Wedding Singer Song List | Acoustic Repertoire Scotland | Nicola Mason",
  description:
    "Browse Nicola Mason's acoustic wedding song list, featuring popular songs for ceremonies, drinks receptions and wedding meals across Scotland.",
  alternates: {
    canonical: "/repertoire",
  },
  openGraph: {
    title: "Wedding Singer Song List | Acoustic Repertoire Scotland | Nicola Mason",
    description: "Browse Nicola Mason's acoustic wedding song list, featuring popular songs for ceremonies, drinks receptions and wedding meals across Scotland.",
    url: "https://www.nicolamason.co.uk/repertoire",
  },
};

export default function RepertoirePage() {
  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4 text-center">
            Choosing Your Music
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-10 text-center">
            Wedding Singer Repertoire & Song List
          </h1>
          <div className="md:columns-2 md:gap-x-12 text-[#444444] leading-relaxed mb-10 space-y-5">
            <p className="break-inside-avoid">
              Here are some of the most popular songs I&apos;ve performed at weddings and events across Scotland. This is just a selection — my full repertoire is much broader and always evolving.
            </p>
            <p className="break-inside-avoid">
              I perform solo vocals with acoustic-style backing, reworking well-known songs to suit each part of your day — from your ceremony through to drinks, dinner and beyond.
            </p>
            <p className="break-inside-avoid">
              Rather than working from a fixed playlist, I focus on reading the room and responding in the moment. It&apos;s how I make sure the atmosphere feels right for everyone there — from your youngest guests to your oldest.
            </p>
            <div className="space-y-5 break-inside-avoid">
              <p>
                Once you&apos;re booked, I&apos;ll send you my full, up-to-date song list to help shape the feel of your day. From there, you can:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Choose a few must-hear songs you&apos;d love included</li>
                <li>Let me know anything that&apos;s not your style</li>
              </ul>
              <p>
                I&apos;ll take care of the rest — building a set that fits your guests and the energy on the day, while making sure your key moments are exactly how you want them.
              </p>
            </div>
            <p className="break-inside-avoid">
              If you already have a particular style or &ldquo;vibe&rdquo; in mind, I&apos;d love to hear it. And if you have specific songs for moments like your aisle walk or first dance, I&apos;ll plan those with you in advance.
            </p>
          </div>
        </div>
      </section>

      <RepertoireClient />
    </div>
  );
}

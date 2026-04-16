import Link from "next/link";
import type { Metadata } from "next";
import PackageCard from "@/components/PackageCard";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Wedding Ceremony Singer Glasgow & Edinburgh | Acoustic Aisle & Ceremony Music",
  description:
    "Acoustic wedding ceremony singer in Glasgow, Edinburgh and across Scotland. Live music for your aisle walk, signing and exit. Check availability for your date.",
  alternates: {
    canonical: "/wedding-ceremony-singer-scotland",
  },
  openGraph: {
    title: "Wedding Ceremony Singer Glasgow & Edinburgh | Acoustic Aisle & Ceremony Music",
    description: "Acoustic wedding ceremony singer in Glasgow, Edinburgh and across Scotland. Live music for your aisle walk, signing and exit. Check availability for your date.",
    url: "https://www.nicolamason.co.uk/wedding-ceremony-singer-scotland",
    images: [
      {
        url: "/images/nicola-mason-wedding-ceremony-singer-l.webp",
        width: 1200,
        height: 630,
        alt: "Wedding Ceremony Singer Glasgow — Nicola Mason",
      },
    ],
  },
};

const ceremonyPackage = packages.find((p) => p.name === "Ceremony")!;

const ceremonyMoments = [
  {
    number: "1",
    title: "Walking Down the Aisle",
    description:
      "Your entrance deserves more than a recording. I shape the timing around your ceremony, your pace and the feel you want in the room, so the music supports the moment naturally rather than feeling fixed or rushed.",
    tip: "Save the live music for the key ceremony moments rather than starting as guests arrive (although this can absolutely be done if it is important to you). Instead, we can curate a meaningful playlist to set the tone. This can build anticipation and make your aisle walk as epic as it should be.\n\nIt is also really helpful for me to know a little about your aisle, how many are in your 'I do' crew, and who is coming down the aisle when, whether that is individually, together, or even with your dog, so we can plan it together.",
    clips: [
      {
        title: "How Long Will I Love You – Ellie Goulding",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/how-long-will-i-love-you-ellie-goulding-4",
      },
      {
        title: "I Get to Love You – Ruelle",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-get-to-love-you-ruelle",
      },
      {
        title: "I Can't Help Falling In Love – Elvis Presley",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-cant-help-falling-in-love",
      },
      {
        title: "Lover – Taylor Swift",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/lover-taylor-swift-8",
      },
      {
        title: "Iris – Goo Goo Dolls",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/iris-goo-goo-dolls-5",
      },
      {
        title: "Feels Like Home – Chantal Kreviazuk",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/feels-like-home-chantal-kreviazuk-2",
      },
      {
        title: "Have I Told You Lately – Rod Stewart",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/have-i-you-lately-rod-stewart-4",
      },
    ],
    songs: [
      "Marry You – Bruno Mars",
      "You're Still the One – Shania Twain",
    ],
  },
  {
    number: "2",
    title: "Signing the Register",
    description:
      "While you are signing, your photographer gets those first just-married shots and your guests have a moment to take it all in. Live music fills that space naturally, keeps the ceremony moving, and lets the mood stay exactly where you want it to be.",
    tip: "This can be a great place to include a special song. I would usually suggest choosing two backup songs as well, just in case the photos take longer than expected.\n\nAcoustic guitar and piano based versions of songs usually work best for the aisle and register-signing moments. This does not limit your song choice, as acoustic-style tracks can usually be sourced for any song you can think of. If your dream choice is something a bit more left-field — the kind of obscure mixtape track nobody else has heard of — made-to-order tracks can usually be arranged for around £35–£60.",
    clips: [
      {
        title: "Misty – Ella Fitzgerald",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/misty-ella-fitzgerald-1",
      },
      {
        title: "At Last – Etta James",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/at-last-etta-james-at-coats-paisley-2",
      },
      {
        title: "Heaven – Bryan Adams",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/heaven-bryan-adams-3",
      },
      {
        title: "For Good – Wicked",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/for-good-wicked-2",
      },
      {
        title: "A Million Dreams – The Greatest Showman",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/a-million-dreams-the-greatest-showman-1",
      },
      {
        title: "From This Moment – Shania Twain",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/from-this-moment-shania-twain-3",
      },
    ],
    songs: [
      "Make You Feel My Love – Adele",
      "Your Song – Elton John",
    ],
  },
  {
    number: "3",
    title: "Your Exit Song",
    description:
      "Set the scene for your first introduction as a married couple. The vibe is excited cheers, confetti and hopefully a few happy tears. The right song here transitions the mood from ceremony to celebration.",
    tip: "Your exit song is a great place to bring in a bit more personality. It does not have to be a traditional wedding song at all, and some of the best choices are the ones nobody sees coming.",
    clips: [
      {
        title: "Man I Need – Olivia Dean",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/man-i-need-raye",
      },
      {
        title: "Love at First Sight – Kylie Minogue",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/love-at-first-sight-kylie-minogue-4",
      },
      {
        title: "Don't Worry, Be Happy – Bobby McFerrin",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/dont-worry-be-happy-bobby-mcferrin-2",
      },
      {
        title: "The Promise – Girls Aloud",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/the-promise-girls-aloud",
      },
      {
        title: "Love Story – Taylor Swift",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/love-story-taylor-swift-7",
      },
      {
        title: "Signed, Sealed, Delivered – Stevie Wonder",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/signed-sealed-delivered-stevie-wonder-6",
      },
    ],
    songs: [
      "This Will Be – Natalie Cole",
      "Young Hearts Run Free – Candi Staton",
      "Yes Sir, I Can Boogie – Baccara",
    ],
  },
];


const faqs = [
  {
    q: "How many songs does a wedding singer usually perform during a ceremony?",
    a: "Three to five live performances, depending on the timing of your ceremony. This usually covers your aisle entrance, one to three songs during the register signing, and your exit song, with pre-ceremony music usually handled as a curated playlist.",
  },
  {
    q: "Can a wedding singer learn a specific song for my ceremony?",
    a: "Absolutely. Most couples have something personal in mind and I love making that happen. If it all feels a bit overwhelming, I also have an extensive song list to help inspire you. If a backing track isn't available for your chosen song, I can arrange for one to be recorded for a small additional fee. Just let me know early so there's plenty of time to prepare.",
  },
  {
    q: "How much setup time and space does a wedding singer need for a ceremony?",
    a: "Not much. I usually need around 30 minutes to set up, but I normally arrive 1 to 1.5 hours before your guests arrive so there is plenty of time to soundcheck properly. I need a space roughly 2m × 2m for the PA system and equipment, and I'll liaise directly with your venue coordinator to make sure everything runs smoothly.",
  },
  {
    q: "What happens if a wedding ceremony runs behind schedule?",
    a: "It is not a problem. Weddings rarely run to the minute, so I build in flexibility and stay in close communication with your venue on the day so the music always lands at the right moment, no matter how the timings shift.",
  },
  {
    q: "Do you perform at humanist weddings in Scotland?",
    a: "Yes. Humanist ceremonies are one of the most popular choices in Scotland, and I regularly perform for them.\n\nMost couples choose live music for the aisle walk, signing and exit, and I can help you decide what works best for your ceremony and venue.",
  },
];

const venues = [
  { name: "Oran Mor", area: "Glasgow" },
  { name: "The Corinthian", area: "Glasgow" },
  { name: "Sloan's", area: "Glasgow" },
  { name: "Coats", area: "Renfrewshire" },
  { name: "Mar Hall", area: "Renfrewshire" },
  { name: "Ingliston Country Club & Hotel", area: "Renfrewshire" },
  { name: "Carlowrie Castle", area: "West Lothian" },
  { name: "The Balmoral Hotel", area: "Edinburgh" },
  { name: "Ghillie Dhu", area: "Edinburgh" },
  { name: "Norton House Hotel", area: "Edinburgh" },
  { name: "Lodge on Loch Lomond", area: "Loch Lomond" },
  { name: "Balbirnie House", area: "Fife" },
  { name: "Dalziel Park Hotel & Golf Club", area: "Lanarkshire" },
  { name: "Carnoustie Golf Hotel & Spa", area: "Angus" },
  { name: "The Byre at Inchyra", area: "Perthshire" },
  { name: "Atholl Palace", area: "Perthshire" },
];

const soundcloudSrc = (embedUrl: string) =>
  `${embedUrl}&color=%23C4A882&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;

export default function WeddingCeremonySingerGlasgowPage() {
  const pageUrl = "https://www.nicolamason.co.uk/wedding-ceremony-singer-scotland";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    "mainEntityOfPage": pageUrl,
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Wedding Ceremony Singer",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    description:
      "Live wedding ceremony music for aisle, signing and exit songs across Glasgow and Scotland.",
    serviceType: "Wedding Ceremony Singer",
    provider: {
      "@id": "https://www.nicolamason.co.uk/#localbusiness",
    },
    areaServed: [
      { "@type": "City", name: "Glasgow" },
      { "@type": "City", name: "Edinburgh" },
      { "@type": "AdministrativeArea", name: "Central Scotland" },
    ],
    offers: {
      "@type": "Offer",
      url: pageUrl,
      price: ceremonyPackage.price.replace("£", ""),
      priceCurrency: "GBP",
      itemOffered: {
        "@type": "Service",
        name: "Wedding Ceremony",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.nicolamason.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Weddings",
        item: "https://www.nicolamason.co.uk/weddings",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Wedding Ceremony Singer Scotland",
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Wedding Ceremonies · Glasgow, Scotland and beyond
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
            Live Music for Your Wedding Ceremony
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed mb-4">
            Your ceremony is where the emotion of the whole day begins. It&apos;s
            the moment the room goes quiet, the nerves turn into excitement,
            and everything starts to feel real.
          </p>
          <p className="text-xl text-[#444444] leading-relaxed mb-4">
            I perform live acoustic vocals that bring warmth, atmosphere and
            feeling to each part of your ceremony — from walking down the aisle,
            to the signing, to the moment you leave as newlyweds, whether
            you&apos;re planning a civil or humanist ceremony.
          </p>
          <p className="text-xl text-[#444444] leading-relaxed">
            The right songs do more than fill the silence. They stay with you.
          </p>
        </div>
      </section>

      {/* 3 Ceremony Moments */}
      <section className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              What to Expect
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Live Music for Every Moment of Your Ceremony
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ceremonyMoments.map((moment) => (
              <div key={moment.number}>
                <div className="w-12 h-12 bg-[#C4A882]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-[#C4A882] font-serif text-lg">{moment.number}</span>
                </div>
                <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 text-center">{moment.title}</h3>
                <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
                  <div className="p-6 border-b border-stone-200">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#888888] mb-3">The Moment</p>
                    <p className="text-[#444444] text-sm leading-relaxed mb-6">{moment.description}</p>
                    <div className="border-l-4 border-[#C4A882] pl-4 bg-[#F5F1EB] py-3 pr-3 rounded-r">
                      <p className="text-xs uppercase tracking-[0.15em] text-[#C4A882] mb-1">Top Tips</p>
                      <p className="text-[#444444] text-sm leading-relaxed whitespace-pre-line">{moment.tip}</p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#888888] mb-3">Listen In</p>
                      <div className="flex flex-col gap-3">
                        {moment.clips.map((clip) => (
                          <iframe
                            key={clip.embedUrl}
                            title={clip.title}
                            width="100%"
                            height="20"
                            scrolling="no"
                            allow="autoplay"
                            src={soundcloudSrc(clip.embedUrl)}
                            className="rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#888888] mb-3">Other Songs Couples Love Here</p>
                      <ul className="space-y-1.5">
                        {moment.songs.map((song) => (
                          <li key={song} className="flex items-start gap-2 text-sm text-[#444444]">
                            <span className="text-[#C4A882] shrink-0 mt-0.5">♪</span>
                            {song}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/repertoire" className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider">
              Browse My Ceremony Song List →
            </Link>
          </div>
        </div>
      </section>

      {/* Ceremony package + review excerpts */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              My Ceremony Package
            </h2>
            <p className="text-[#888888] mt-4 max-w-xl mx-auto">
              Everything you need for live ceremony music, in one package. Price
              includes PA, travel within 40 miles of Motherwell, and full song
              preparation.
            </p>
            <div className="mt-4">
              <Link href="/weddings" className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider">
                See All Wedding Packages →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <PackageCard pkg={ceremonyPackage} />
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#888888]">What Couples Say</p>
              {[
                {
                  initials: "AM",
                  name: "Amy D McFadyen",
                  venue: "Sloan's",
                  excerpt: "She was honestly amazing, nothing was too big an ask and even helped bring our ideas to life for the groom party walking in too.",
                },
                {
                  initials: "JL",
                  name: "Jane Lawson",
                  venue: "Coats Paisley",
                  excerpt: "She worked so hard putting together the song set and singing a capella our aisle song. Everyone loved it.",
                },
                {
                  initials: "AMS",
                  name: "Allan McGowan-Smith",
                  venue: "Blythswood Square Hotel",
                  excerpt: "Her voice is phenomenal — effortlessly creating the perfect environment. We asked for specific songs that linked to our ceremony and Nicola more than rose to the occasion. We were truly blown away.",
                },
                {
                  initials: "JM",
                  name: "Joanne McGregor",
                  venue: "Carnoustie Golf Club",
                  excerpt: "She was outstanding — we had so many lovely comments about her. I had lots of requests and questions and she was very accommodating and helpful.",
                },
                {
                  initials: "AY",
                  name: "Anne Yuill",
                  venue: "St. Andrews Hospice",
                  excerpt: "Nicola had to learn three entirely new songs for the ceremony — a task she eagerly undertook. Her extraordinary efforts truly made our day exceptionally memorable.",
                },
              ].map((r) => (
                <div key={r.initials + r.venue} className="bg-white rounded-lg p-5 border border-stone-200">
                  <p className="text-[#444444] text-sm leading-relaxed mb-4">{r.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C4A882] flex items-center justify-center text-white text-xs font-medium shrink-0">
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#2C2C2C]">{r.name}</p>
                      <p className="text-xs text-[#888888]">{r.venue}</p>
                    </div>
                    <div className="ml-auto text-[#C4A882] text-xs">★★★★★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Common Questions &amp; Planning
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Ceremony Questions, Answered
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-6">
                <h3 className="text-base font-medium text-[#2C2C2C] mb-2">{faq.q}</h3>
                <p className="text-[#444444] text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider">
              Have More Questions? See All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Locations
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Covering Glasgow, Edinburgh &amp; Beyond
            </h2>
            <p className="text-[#888888] mt-4 max-w-xl mx-auto">
              Based in Motherwell with 40 miles travel included — covering most of Central Scotland, including Glasgow, Edinburgh, Stirling and Ayrshire
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {venues.map((venue) => (
              <span
                key={venue.name}
                className="px-5 py-2 bg-white border border-stone-200 rounded-full text-sm text-[#2C2C2C]"
              >
                {venue.name}
                <span className="text-[#888888] ml-1">· {venue.area}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-24 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Tell Me Your Ceremony Date — I&apos;ll Let You Know If I&apos;m Free
          </h2>
          <p className="text-stone-300 text-lg mb-4">
            Now booking for 2027. Limited 2026 dates remaining.
          </p>
          <p className="text-stone-400 mb-10">
            Send a few details and I&apos;ll come back to you within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              location="ceremony_glasgow_footer_cta"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm tracking-wider transition-colors rounded-[6px]"
            >
              <span className="font-medium text-base">Message on WhatsApp</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                I usually reply within a few hours
              </span>
            </TrackedWhatsAppLink>
            <TrackedEnquiryLink
              location="ceremony_glasgow_footer_cta"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm tracking-wider transition-colors rounded-[6px]"
            >
              <span className="font-medium text-base">Send An Enquiry</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                quick form · I&apos;ll reply personally
              </span>
            </TrackedEnquiryLink>
          </div>
        </div>
      </section>

    </div>
  );
}

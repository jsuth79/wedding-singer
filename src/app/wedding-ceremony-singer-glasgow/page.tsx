import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PackageCard from "@/components/PackageCard";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Wedding Ceremony Singer Glasgow | Live Aisle & Ceremony Music Scotland",
  description:
    "Acoustic wedding ceremony singer in Glasgow and across Scotland. Live music for walking down the aisle, signing the register and exit songs. Check availability for your date.",
  alternates: {
    canonical: "/wedding-ceremony-singer-glasgow",
  },
  openGraph: {
    title: "Wedding Ceremony Singer Glasgow | Live Aisle & Ceremony Music Scotland",
    description:
      "Acoustic wedding ceremony singer in Glasgow and across Scotland. Live music for walking down the aisle, signing the register and exit songs.",
    url: "https://www.nicolamason.co.uk/wedding-ceremony-singer-glasgow",
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
      "Your entrance deserves more than a recording. I time the song to you, starting when you appear, building as you walk, and finishing just as you reach your partner. Timed to the moment, not to a countdown.",
    tip: "Think about the length of your aisle. I'll time the song to begin as you appear and finish just as you reach your partner. For shorter aisles, something slower works better; for longer ones you have room for a bigger build.",
    clips: [
      {
        title: "I Can't Help Falling In Love – Elvis Presley",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-cant-help-falling-in-love",
      },
      {
        title: "Glasgow (No Place Like Home) – Jessie Buckley",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/glasgow-no-place-like-home-jessie-buckley-at-oran-mor-1",
      },
    ],
    songs: [
      "At Last – Etta James",
      "Can't Help Falling In Love – Elvis",
      "All Of Me – John Legend",
      "Perfect – Ed Sheeran",
      "I Get To Love You – Ruelle",
      "Turning Page – Sleeping At Last",
    ],
  },
  {
    number: "2",
    title: "Signing the Register",
    description:
      "A quieter, more intimate moment. Guests are seated and listening closely. The right song here adds real emotional weight. I'll perform one or two pieces, kept soft so the music lifts the room without taking it over.",
    tip: "This moment typically lasts 5–10 minutes, enough for two full songs. Quieter and more personal choices land best here — save the upbeat energy for your exit.",
    clips: [
      {
        title: "How Long Will I Love You – Ellie Goulding",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/how-long-will-i-love-you-ellie-goulding-4",
      },
      {
        title: "Landslide – Fleetwood Mac",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/landslide-fleetwood-mac-6",
      },
    ],
    songs: [
      "Don't Know Why – Norah Jones",
      "Everything – Michael Bublé",
      "How Long Will I Love You – Ellie Goulding",
      "Make You Feel My Love – Adele",
      "Somewhere Only We Know – Keane",
      "Your Song – Elton John",
    ],
  },
  {
    number: "3",
    title: "Your Exit Song",
    description:
      "Walk out as newlyweds to something that sets the tone for everything that follows. Guests often say this is the moment that got them up on their feet, the transition from ceremony to celebration.",
    tip: "An upbeat or anthemic exit gets guests clapping and creates a natural energy lift into drinks. It doesn't have to be a traditional wedding song. Some of the best exits are completely unexpected.",
    clips: [
      {
        title: "I Get to Love You – Ruelle",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-get-to-love-you-ruelle",
      },
      {
        title: "Love at First Sight – Kylie Minogue",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/love-at-first-sight-kylie-minogue-4",
      },
    ],
    songs: [
      "Man I Need – Olivia Dean",
      "Marry You – Bruno Mars",
      "Can't Take My Eyes Off You – Frankie Valli",
      "Love On Top – Beyoncé",
      "Nothing's Gonna Stop Us Now – Starship",
      "The Best – Tina Turner",
    ],
  },
];


const faqs = [
  {
    q: "How many songs will you perform during the ceremony?",
    a: "Typically four to five live performances — background music as guests are seated, your aisle entrance, one or two songs during the register signing, and your exit song. The exact number can be tailored to your ceremony length and preference.",
  },
  {
    q: "Can you learn a specific song for us?",
    a: "Absolutely. Most couples have something personal in mind and I love making that happen. If a backing track isn't available for your chosen song, I can arrange for one to be recorded for a small additional fee. Just let me know early so there's plenty of time to prepare.",
  },
  {
    q: "How much setup time and space do you need?",
    a: "I need around 30–45 minutes to set up before guests arrive, and a space roughly 2m × 2m for the PA system and equipment. I'll liaise directly with your venue coordinator to make sure everything runs smoothly.",
  },
  {
    q: "What if our ceremony runs behind schedule?",
    a: "Weddings rarely run to the minute — I know that and I build in flexibility. I stay in close communication with your venue on the day so the music always lands at the right moment, no matter how the timings shift.",
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
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
          <div>
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Wedding Ceremonies · Glasgow & Scotland
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6 leading-tight">
              Live Music for Your Wedding Ceremony
            </h1>
            <p className="text-lg text-[#444444] leading-relaxed mb-4">
              Your ceremony is the heart of the day — the thing everything else
              is built around. Live music makes it feel as special as it should.
            </p>
            <p className="text-lg text-[#444444] leading-relaxed">
              From the moment your guests are seated to the song you walk out to
              as newlyweds, every moment deserves to be marked with something
              more than a recording.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden max-h-64 lg:max-h-[276px]">
            <Image
              src="/images/nicola-mason-wedding-ceremony-singer-l.webp"
              alt="Nicola Mason wedding ceremony singer performing live acoustic music at a ceremony in Glasgow, Scotland"
              fill
              className="object-cover"
              priority
            />
          </div>
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
                      <p className="text-xs uppercase tracking-[0.15em] text-[#C4A882] mb-1">Top Tip</p>
                      <p className="text-[#444444] text-sm leading-relaxed">{moment.tip}</p>
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
                      <p className="text-xs uppercase tracking-[0.2em] text-[#888888] mb-3">Songs Couples Love Here</p>
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
              includes PA, travel up to 40 miles from Glasgow, and full song
              preparation.
            </p>
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
                  <p className="text-[#444444] text-sm leading-relaxed mb-4 italic">&ldquo;{r.excerpt}&rdquo;</p>
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Ceremony Questions, Answered
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-6 border border-stone-200">
                <h3 className="font-serif text-[#1a1a1a] text-lg mb-3">{faq.q}</h3>
                <p className="text-[#444444] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
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
              Based in Glasgow with 40 miles travel included — covering the
              Central Belt, Loch Lomond, Edinburgh, and further by arrangement.
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
            Check Availability for Your Date
          </h2>
          <p className="text-stone-300 text-lg mb-4">
            Now booking for 2027. Limited 2026 dates remaining.
          </p>
          <p className="text-stone-400 mb-10">
            Tell me about your ceremony and I&apos;ll get back to you within a couple of hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              location="ceremony_glasgow_footer_cta"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via WhatsApp (1–2 hour response)
              </span>
            </TrackedWhatsAppLink>
            <TrackedEnquiryLink
              location="ceremony_glasgow_footer_cta"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </TrackedEnquiryLink>
          </div>
        </div>
      </section>

    </div>
  );
}

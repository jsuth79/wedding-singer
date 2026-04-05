import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import YouTubeGrid from "@/components/YouTubeGrid";
import AudioSection from "@/components/AudioSection";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";

export const metadata: Metadata = {
  title: "Award-Winning Female Wedding Singer Glasgow | Nicola Mason | Scottish Ceremony & Event Singer",
  description:
    "Professional wedding singer in Glasgow & Central Scotland. Scottish Wedding Awards Winner. Live acoustic music for ceremonies, receptions & celebrations. Book now for 2026/2027.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Award-Winning Female Wedding Singer Glasgow | Nicola Mason',
    description: 'Professional wedding singer in Glasgow & Central Scotland. Scottish Wedding Awards Winner. Live music for ceremonies, receptions & celebrations.',
    url: 'https://www.nicolamason.co.uk',
    images: [
      {
        url: '/images/nicola-mason-wedding-events-singer.jpg',
        width: 1200,
        height: 630,
        alt: 'Nicola Mason Wedding Singer Glasgow',
      },
    ],
  },
};


const venueRegions = [
  {
    region: "Glasgow & West Scotland",
    description:
      "I'm a familiar face on the Glasgow wedding scene and across Renfrewshire and Ayrshire, performing at some of the west of Scotland's most sought-after venues.",
    venues: [
      { name: "Oran Mor", location: "Glasgow" },
      { name: "The Corinthian", location: "Glasgow" },
      { name: "Sloan's", location: "Glasgow" },
      { name: "Mar Hall", location: "Renfrewshire" },
      { name: "Ingliston Country Club & Hotel", location: "Renfrewshire" },
      { name: "Dalmeny Park House Hotel", location: "Renfrewshire" },
      { name: "Lynnhurst Hotel", location: "Renfrewshire" },
      { name: "Bowfield Hotel & Spa", location: "Renfrewshire" },
      { name: "Coats", location: "Paisley" },
      { name: "The Busby Hotel", location: "East Renfrewshire" },
      { name: "The Gailes Hotel & Spa", location: "Ayrshire" },
      { name: "Piersland House", location: "Ayrshire" },
      { name: "Lodge on Loch Lomond", location: "Loch Lomond" },
    ],
  },
  {
    region: "Edinburgh & The Lothians",
    description:
      "From Edinburgh's iconic city-centre hotels to elegant venues across East and West Lothian, I bring live music to some of the capital region's finest settings.",
    venues: [
      { name: "The Balmoral Hotel", location: "Edinburgh" },
      { name: "Edinburgh City Chambers", location: "Edinburgh" },
      { name: "The George Hotel", location: "Edinburgh" },
      { name: "The Bonham Hotel", location: "Edinburgh" },
      { name: "Norton House Hotel", location: "Edinburgh" },
      { name: "Ghillie Dhu", location: "Edinburgh" },
      { name: "Carlowrie Castle", location: "West Lothian" },
      { name: "The Vu", location: "East Lothian" },
      { name: "Broxmouth Courtyard", location: "East Lothian" },
    ],
  },
  {
    region: "Central Scotland & Beyond",
    description:
      "From Lanarkshire and Falkirk to Clackmannanshire, I regularly perform at venues across the heart of Scotland. I'm also happy to travel further afield, with recent performances in Perthshire, Fife, Angus and Aberdeenshire.",
    venues: [
      { name: "Dalziel Park Hotel & Golf Club", location: "Lanarkshire" },
      { name: "Glenbervie House & Country Estate", location: "Falkirk" },
      { name: "Inglewood House & Spa", location: "Lanarkshire" },
      { name: "Atholl Palace", location: "Perthshire" },
      { name: "Parklands Hotel", location: "Perthshire" },
      { name: "The Byre at Inchyra", location: "Perthshire" },
      { name: "Balbirnie House", location: "Fife" },
      { name: "Carnoustie Golf Hotel & Spa", location: "Angus" },
      { name: "Fasque Castle", location: "Aberdeenshire" },
      { name: "Hidden River Barn", location: "Cumbria" },
    ],
  },
];

const faqs = [
  {
    question: "Where are you based and where can you perform?",
    answer:
      "I am based in Central Scotland and regularly perform across Glasgow, Edinburgh, Lanarkshire, Stirling, and Ayrshire. I am always happy to travel further afield. Just let me know your venue when you enquire.",
  },
  {
    question: "Can we choose our own songs for our wedding ceremony?",
    answer:
      "Absolutely. You can choose from my extensive repertoire of acoustic classics and modern hits. I may also be able to learn a special song (subject to availability) to make your walk down the aisle or first dance truly personal.",
  },
  {
    question: "Do you provide your own equipment and insurance?",
    answer:
      "Yes. I provide a professional, compact PA system suitable for both indoor and outdoor venues. For your venue's peace of mind, all my equipment is PAT-tested, and I hold full Public Liability Insurance (PLI). I am also a full member of the Musicians' Union (MU).",
  },
  {
    question: "What happens when you aren't singing?",
    answer:
      "I provide tailored background music during my short breaks to keep the atmosphere seamless — no gaps, no silence. You can even choose the playlist — I'll take care of the rest.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wedding Singer",
    "provider": {
      "@type": "Person",
      "name": "Nicola Mason",
      "gender": "Female",
      "jobTitle": "Professional Wedding Singer"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Glasgow"
      },
      {
        "@type": "City",
        "name": "Edinburgh"
      },
      {
        "@type": "State",
        "name": "Central Scotland"
      },
      {
        "@type": "State",
        "name": "Lanarkshire"
      },
      {
        "@type": "State",
        "name": "Ayrshire"
      }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "325",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "325",
        "priceCurrency": "GBP"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeroSection />

      {/* About Section */}
      <section className="pt-6 pb-12 md:pt-12 md:pb-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              About Nicola Mason, Wedding &amp; Events Singer
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
              Your Soundtrack for Life&apos;s Special Moments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-8 md:gap-16 items-center">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
              <Image
                src="/images/nicola-mason-about-me-p.webp"
                alt="Professional female wedding and events singer Nicola Mason based in Central Scotland, trained at Berklee College of Music"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#444444] leading-relaxed mb-6">
                I create relaxed, acoustic live music for weddings across Central
                Scotland — from walking down the aisle to your drinks reception
                and wedding meal.
              </p>
              <p className="text-[#444444] leading-relaxed mb-6">
                Trained at Napier University and Berklee College of Music in
                Boston, I work closely with you to choose songs that feel
                personal to you — creating moments that you and your guests
                will genuinely remember.
              </p>
              <p className="text-[#444444] leading-relaxed mb-8">
                I handle everything personally, so you can relax and enjoy your
                day knowing your music is taken care of from your first enquiry
                to the final song.
              </p>
              <h3 className="text-xl font-serif text-[#1a1a1a] text-center mb-4">
                Tell me your date — I&apos;ll let you know if it&apos;s free
              </h3>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <TrackedWhatsAppLink
                  location="homepage_why_book"
                  className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-8 py-4 text-sm tracking-wider transition-colors rounded-[4px] min-w-[280px]"
                >
                  <span className="font-medium">Message on WhatsApp</span>
                  <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                    I usually reply within a few hours
                  </span>
                </TrackedWhatsAppLink>
                <TrackedEnquiryLink
                  location="homepage_why_book"
                  className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm tracking-wider transition-colors rounded-[4px] min-w-[280px]"
                >
                  <span className="font-medium">Send An Enquiry</span>
                  <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                    quick form · I&apos;ll reply personally
                  </span>
                </TrackedEnquiryLink>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/weddings#timeline"
              className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider"
            >
              See Where Music Fits Within Your Wedding Day →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 px-6 bg-[#2C2C2C]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">Trusted By Couples Across Scotland</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-sm text-stone-300 items-center">
            <span className="flex items-center justify-center gap-1.5 text-center">
              <span className="text-[#C4A882] shrink-0">★</span> Scottish Wedding Awards Winner
            </span>
            <span className="flex items-center justify-center gap-1.5 text-center">
              <span className="text-[#C4A882] shrink-0">★</span> 5-Star Reviews on Google
            </span>
            <span className="flex items-center justify-center gap-1.5 text-center">
              <span className="text-[#C4A882] shrink-0">★</span> Featured on Bridebook
            </span>
            <span className="flex items-center justify-center gap-1.5 text-center">
              <span className="text-[#C4A882] shrink-0">★</span> Confetti Awards Finalist
            </span>
            <span className="flex items-center justify-center gap-1.5 text-center">
              <span className="text-[#C4A882] shrink-0">★</span> UKBride Approved
            </span>
            <span className="flex items-center justify-center gap-1.5 text-center">
              <span className="text-[#C4A882] shrink-0">★</span> Featured on Hitched
            </span>
          </div>
        </div>
      </section>

      {/* Audio */}
      <AudioSection />

      {/* Services Preview */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              From Weddings to Special Events
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Live Music for Your Occasion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/weddings" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="/images/nicola-mason-wedding-services-l.webp"
                    alt="Female wedding singer performing live acoustic music at Scottish wedding reception in Glasgow"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#C4A882] transition-colors">
                    Weddings
                  </h3>
                  <p className="text-stone-200 text-base mb-4">
                    From intimate ceremonies to full-day celebrations. Acoustic
                    classics and modern favorites tailored to your love story.
                  </p>
                  <span className="text-[#C4A882] text-sm uppercase tracking-wider">
                    Explore Wedding Packages →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/events" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="/images/nicola-mason-events-services-l.webp"
                    alt="Professional female vocalist Nicola Mason performing at corporate event and private celebration in Edinburgh"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#C4A882] transition-colors">
                    Events
                  </h3>
                  <p className="text-stone-200 text-base mb-4">
                    Professional entertainment for corporate events, private
                    celebrations, and life&apos;s important moments.
                  </p>
                  <span className="text-[#C4A882] text-sm uppercase tracking-wider">
                    Explore Event Packages →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Tell Me Your Date — I&apos;ll Let You Know If It&apos;s Free
          </h2>
          <p className="text-stone-300 text-lg mb-10">
            Now booking for 2027. Limited 2026 dates remaining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              location="homepage_bottom_cta"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Message on WhatsApp</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                I usually reply within a few hours
              </span>
            </TrackedWhatsAppLink>
            <TrackedEnquiryLink
              location="homepage_bottom_cta"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Send An Enquiry</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                quick form · I&apos;ll reply personally
              </span>
            </TrackedEnquiryLink>
          </div>
        </div>
      </section>

      {/* Venue Regions */}
      <section className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Recent Weddings &amp; Events
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Trusted at Wedding Venues Across Central Scotland
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venueRegions.map((group) => (
              <div key={group.region}>
                <div className="w-16 h-16 bg-[#C4A882]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C4A882] text-xl">✦</span>
                </div>
                <h3 className="text-lg font-serif text-[#1a1a1a] mb-3 text-center">
                  {group.region}
                </h3>
                <p className="text-[#444444] text-base leading-relaxed mb-4 text-left">
                  {group.description}
                </p>
                <ul className="text-[#888888] text-base leading-relaxed space-y-2 text-left">
                  {group.venues.map((venue) => (
                    <li key={venue.name} className="flex justify-between items-baseline">
                      <span>{venue.name}</span>
                      <span className="text-[#C4A882] text-base">{venue.location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div id="reviews">
        <ReviewsSection />
      </div>

      {/* Common Questions */}
      <section className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Common Questions &amp; Planning
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Everything You Need to Know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-stone-200 pb-6">
                <h3 className="text-base font-medium text-[#2C2C2C] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[#444444] text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider"
            >
              View All Frequently Asked Questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Video */}
      <div id="videos">
        <YouTubeGrid />
      </div>

    </>
  );
}

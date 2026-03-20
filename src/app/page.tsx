import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import YouTubeGrid from "@/components/YouTubeGrid";

export const metadata: Metadata = {
  title: "Award-Winning Wedding Singer Glasgow | Nicola Mason | Scottish Ceremony & Event Singer",
  description:
    "Professional wedding singer in Glasgow & Central Scotland. Scottish Wedding Awards Winner. Live acoustic music for ceremonies, receptions & celebrations. Book now for 2026/2027.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Award-Winning Wedding Singer Glasgow | Nicola Mason',
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
      "Oran Mor", "The Corinthian", "Sloan's", "Mar Hall",
      "Ingliston Country Club & Hotel", "Dalmeny Park House Hotel",
      "Lynnhurst Hotel", "Bowfield Hotel & Spa", "Coats", "The Busby Hotel",
      "The Gailes Hotel & Spa", "Piersland House", "Lodge on Loch Lomond",
    ],
  },
  {
    region: "Central Scotland",
    description:
      "From Lanarkshire and Falkirk to Clackmannanshire, I regularly perform at venues across the heart of Scotland.",
    venues: [
      "Dalziel Park Hotel & Golf Club", "Glenbervie House & Country Estate",
      "Inglewood House & Spa",
    ],
  },
  {
    region: "Edinburgh & The Lothians",
    description:
      "From Edinburgh's iconic city-centre hotels to elegant venues across East and West Lothian, I bring live music to some of the capital region's finest settings.",
    venues: [
      "The Balmoral Hotel", "Edinburgh City Chambers", "The George Hotel",
      "The Bonham Hotel", "Norton House Hotel", "Ghillie Dhu",
      "Carlowrie Castle", "The Vu", "Broxmouth Courtyard",
    ],
  },
  {
    region: "Beyond Central Scotland",
    description:
      "I'm happy to travel for the right event, with recent performances taking me to Perthshire, Fife, Angus and Aberdeenshire.",
    venues: [
      "Atholl Palace", "Parklands Hotel", "The Byre at Inchyra",
      "Balbirnie House", "Carnoustie Golf Hotel & Spa", "Fasque Castle",
    ],
  },
];

const faqs = [
  {
    question: "Where are you based and where can you perform?",
    answer:
      "I am based in Central Scotland and regularly perform across Glasgow, Edinburgh, Lanarkshire, and Stirling. I am always happy to travel further afield. Just let me know your venue when you enquire.",
  },
  {
    question: "Can we choose our own songs for the ceremony?",
    answer:
      "Absolutely. You can choose from my extensive repertoire of acoustic classics and modern hits. I may also be able to learn a special song (subject to availability) to make your walk down the aisle or first dance truly personal.",
  },
  {
    question: "Do you provide your own equipment and insurance?",
    answer:
      "Yes. I provide a professional, compact PA system suitable for both indoor and outdoor venues. For your venue's peace of mind, all my equipment is PAT-tested, and I hold full Public Liability Insurance (PLI).",
  },
  {
    question: "What happens when you aren't singing?",
    answer:
      "There's never any 'dead air'. I provide tailored background music during my short breaks to keep the atmosphere seamless, so you don't need to worry about managing a separate playlist.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              About Nicola Mason, Wedding &amp; Events Singer
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
              Your Vocal Soundtrack for Life&apos;s Special Moments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-8 md:gap-16 items-center">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
              <Image
                src="/images/nicola-mason-about-me-p.webp"
                alt="Nicola Mason"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#444444] leading-relaxed mb-6">
                Trained at Napier University and Berklee College of Music in
                Boston, I&apos;ve dedicated my career to creating the perfect musical
                atmosphere for weddings and events across Scotland.
              </p>
              <p className="text-[#444444] leading-relaxed mb-6">
                Whether you&apos;re planning an intimate ceremony, a lively drinks
                reception, or an unforgettable evening celebration, I work
                closely with you to curate a repertoire that tells your story
                and moves your guests.
              </p>
              <p className="text-[#444444] leading-relaxed mb-8">
                I handle all bookings personally, ensuring you receive dedicated
                attention from your first enquiry to your last dance.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/447740360678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px] min-w-[280px]"
                >
                  <span className="font-medium">Check My Availability</span>
                  <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                    via WhatsApp (1-2 hour response)
                  </span>
                </a>
                <Link
                  href="/enquire"
                  className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px] min-w-[280px]"
                >
                  <span className="font-medium">Check My Availability</span>
                  <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                    via Contact Form
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-12 md:py-24 px-6 bg-[#FCFCFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Common Questions &amp; Planning
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              Everything You Need to Know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-stone-200 pb-6">
                <h3 className="text-base font-medium text-[#2C2C2C] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed">{faq.answer}</p>
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

      {/* Services Preview */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              What I Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              Tailored Entertainment for Your Special Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/weddings" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="/images/nicola-mason-wedding-services-l.webp"
                    alt="Nicola Mason singing at a wedding"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#C4A882] transition-colors">
                    Weddings
                  </h3>
                  <p className="text-stone-200 text-sm mb-4">
                    From intimate ceremonies to full-day celebrations. Acoustic
                    classics and modern favorites tailored to your love story.
                  </p>
                  <span className="text-[#C4A882] text-sm uppercase tracking-wider">
                    View Packages →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/events" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="/images/nicola-mason-events-services-l.webp"
                    alt="Nicola Mason at an event"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#C4A882] transition-colors">
                    Events
                  </h3>
                  <p className="text-stone-200 text-sm mb-4">
                    Professional entertainment for corporate events, private
                    celebrations, and life&apos;s important moments.
                  </p>
                  <span className="text-[#C4A882] text-sm uppercase tracking-wider">
                    Learn More →
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
            Let&apos;s Make Your Day Unforgettable
          </h2>
          <p className="text-stone-300 text-lg mb-4">
            Now booking for 2027. Still some 2026 dates available.
          </p>
          <p className="text-stone-400 mb-10">
            Get in touch to discuss your wedding or event and check my
            availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/447740360678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                via WhatsApp (1-2 hour response)
              </span>
            </a>
            <Link
              href="/enquire"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Venue Regions */}
      <section className="py-12 md:py-24 px-6 bg-[#FCFCFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              Performing Across Scotland
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {venueRegions.map((group) => (
              <div key={group.region} className="text-center">
                <div className="w-16 h-16 bg-[#C4A882]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C4A882] text-xl">✦</span>
                </div>
                <h3 className="text-lg font-serif text-[#2C2C2C] mb-3">
                  {group.region}
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed mb-3">
                  {group.description}
                </p>
                <p className="text-[#888888] text-xs leading-relaxed">
                  {group.venues.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <YouTubeGrid />

      {/* Testimonials */}
      <div id="reviews">
        <ReviewsSection />
      </div>
    </>
  );
}

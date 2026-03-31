import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";
import PackageCard from "@/components/PackageCard";
import { packages, extras } from "@/data/packages";

type MobileTimelineStep = {
  title: string;
  music: boolean;
  label: string;
  href?: string;
  note?: string;
};

export const metadata: Metadata = {
  title: "Wedding Singer Packages Glasgow | Ceremony & Reception | Nicola Mason",
  description:
    "Wedding singer packages for ceremonies, drinks receptions, and evening entertainment. Serving Glasgow, Edinburgh, and Central Scotland. Packages from £325.",
  alternates: {
    canonical: '/weddings',
  },
  openGraph: {
    title: 'Wedding Singer Packages Glasgow | Nicola Mason',
    description: 'Professional wedding singer packages for ceremonies, drinks receptions, and evening entertainment across Central Scotland.',
    url: 'https://www.nicolamason.co.uk/weddings',
    images: [
      {
        url: '/images/nicola-mason-first-dance-l.webp',
        width: 1200,
        height: 630,
        alt: 'Nicola Mason Wedding Singer Packages',
      },
    ],
  },
};

export default function WeddingsPage() {
  const mobileTimelineSteps: MobileTimelineStep[] = [
    { title: "Ceremony", music: true, label: "Live performance of aisle, register & exit songs", href: "/wedding-ceremony-singer-scotland" },
    { title: "Drinks Reception", music: true, label: "Live acoustic set to entertain your guests" },
    { title: "Wedding Meal", music: true, label: "Live background music to enhance the atmosphere" },
    { title: "First Dances", music: true, label: "Live performance of your first dance & party songs to kick off the evening" },
    { title: "Wedding Band or DJ", music: true, label: "The perfect handover" },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Wedding Singer Packages
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
            Your Perfect Day Deserves the Perfect Soundtrack
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            From the moment your guests arrive to your last dance of the night,
            I&apos;ll help create the kind of memories that stick with people long
            after the day is over.
          </p>
        </div>
      </section>

      {/* Wedding Day Timeline */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">Your Day</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">Plan Your Live Wedding Music With Me</h2>
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:flex items-start">

            {/* Ceremony */}
            <div className="flex items-start flex-1">
              <Link href="/wedding-ceremony-singer-scotland" className="flex flex-col items-center flex-1 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#C4A882]/20 group-hover:bg-[#C4A882]/40 transition-colors">
                  <span className="text-lg text-[#C4A882]">♪</span>
                </div>
                <p className="text-sm font-medium text-center mb-1 text-[#1a1a1a] group-hover:text-[#C4A882] transition-colors">Ceremony</p>
                <p className="text-sm text-center leading-snug text-[#C4A882]">Live performance of aisle, register & exit songs</p>
              </Link>
              <div className="h-px bg-stone-200 flex-none w-4 mt-6" />
            </div>

            {/* Drinks Reception with Photographs at the start */}
            <div className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#C4A882]/20">
                  <span className="text-lg text-[#C4A882]">♪</span>
                </div>
                <p className="text-sm font-medium text-center mb-1 text-[#1a1a1a]">Drinks Reception</p>
                <p className="text-sm text-center leading-snug text-[#C4A882]">Live acoustic set to entertain your guests</p>
              </div>
              <div className="h-px bg-stone-200 flex-none w-4 mt-6" />
            </div>

            {/* Wedding Meal with Evening Guests arriving toward end */}
            <div className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#C4A882]/20">
                  <span className="text-lg text-[#C4A882]">♪</span>
                </div>
                <p className="text-sm font-medium text-center mb-1 text-[#1a1a1a]">Wedding Meal</p>
                <p className="text-sm text-center leading-snug text-[#C4A882]">Live background music to enhance the atmosphere</p>
              </div>
              <div className="h-px bg-stone-200 flex-none w-4 mt-6" />
            </div>

            {/* First Dances */}
            <div className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#C4A882]/20">
                  <span className="text-lg text-[#C4A882]">♪</span>
                </div>
                <p className="text-sm font-medium text-center mb-1 text-[#1a1a1a]">First Dances</p>
                <p className="text-sm text-center leading-snug text-[#C4A882]">Live performance of your first dance & party songs to kick off the evening</p>
              </div>
              <div className="h-px bg-stone-200 flex-none w-4 mt-6" />
            </div>

            {/* Wedding Band or DJ */}
            <div className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#C4A882]/20">
                  <span className="text-lg text-[#C4A882]">♪</span>
                </div>
                <p className="text-sm font-medium text-center mb-1 text-[#1a1a1a]">Evening Entertainment</p>
                <p className="text-sm text-center leading-snug text-[#C4A882]">Keep the party going until last orders</p>
              </div>
            </div>

          </div>

          {/* Mobile timeline */}
          <div className="flex flex-col md:hidden gap-0">
            {mobileTimelineSteps.map((step, i, arr) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${step.music ? "bg-[#C4A882]/20" : "bg-stone-100"}`}>
                    <span className={`text-base ${step.music ? "text-[#C4A882]" : "text-stone-400"}`}>
                      {step.music ? "♪" : "·"}
                    </span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-stone-200 my-1 min-h-[24px]" />}
                </div>
                <div className="pb-6">
                  {step.note && <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">{step.note}</p>}
                  {step.href
                    ? <Link href={step.href} className="text-sm font-medium mb-0.5 text-[#1a1a1a] hover:text-[#C4A882] transition-colors">{step.title}</Link>
                    : <p className={`text-sm font-medium mb-0.5 ${step.music ? "text-[#1a1a1a]" : "text-[#888888]"}`}>{step.title}</p>
                  }
                  <p className={`text-sm leading-snug ${step.music ? "text-[#C4A882]" : "text-stone-400"}`}>{step.label}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              The Perfect Soundtrack
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Wedding Singer Packages from Ceremony to Evening Reception
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                id={pkg.name === "Ceremony" ? "ceremony" : undefined}
              >
                <PackageCard
                  pkg={pkg}
                  findOutMoreHref={pkg.name === "Ceremony" ? "/wedding-ceremony-singer-scotland" : undefined}
                  findOutMoreLabel={pkg.name === "Ceremony" ? "Plan your ceremony music" : undefined}
                />
              </div>
            ))}
          </div>

          <p className="text-center text-[#888888] text-sm mt-10">
            All prices include professional PA equipment and travel within 40 miles of Motherwell — covering most of Central Scotland, including Glasgow, Edinburgh, Stirling and Ayrshire.
            <br />
            For venues further afield, mileage is charged at 45p per mile. Booking direct means no agency or platform fees (often 20%+).
          </p>
        </div>
      </section>

      {/* Extras */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Enhance Your Day
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Surprise Singers, Vocal Trios &amp; Wedding Keepsakes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extras.map((extra) => (
              <PackageCard key={extra.name} pkg={extra} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Discuss Your Wedding?
          </h2>
          <p className="text-stone-300 text-lg mb-4">
            Now booking for 2027. Limited 2026 dates remaining.
          </p>
          <p className="text-stone-400 mb-10">
            I&apos;d love to hear about your plans and help make your day truly
            special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              location="weddings_page_cta"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via WhatsApp (1-2 hour response)
              </span>
            </TrackedWhatsAppLink>
            <TrackedEnquiryLink
              location="weddings_page_cta"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </TrackedEnquiryLink>
          </div>
          <div className="mt-8">
            <Link href="/events" className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider">
              Also Available For Private Events →
            </Link>
          </div>
        </div>
      </section>

      {/* The Full Package */}
      <section id="whats-included" className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              The Details
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              What&apos;s Always Included
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-12 mb-16 items-center">
            {/* Text and pills column */}
            <div>
              <div className="text-[#444444] space-y-4 mb-10">
                <p>
                  You&apos;re not just getting a singer - you&apos;re getting someone who&apos;ll
                  help you pick songs if you&apos;re stuck, learn whatever&apos;s special to
                  you, and sort out the timing and sound with your venue so it&apos;s one
                  less thing on your list.
                </p>
                <p>
                  I know how different venues work and can read a room - quiet and
                  setting the mood during dinner, or getting folk up dancing when it&apos;s time
                  to celebrate.
                </p>
                <p>
                  I&apos;ll keep you in the loop without pestering you. Weddings are
                  stressful enough without suppliers making it worse.
                </p>
                <p>
                  No awkward silences, no technical disasters, no drama. Just the
                  music you want, done right.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Scottish Wedding Awards Winner",
                  "Confetti Awards 2025 Finalist",
                  "UKbride Approved",
                  "5-Star Reviews on Google & Facebook",
                ].map((award) => (
                  <span
                    key={award}
                    className="px-5 py-2 bg-white border border-stone-200 rounded-full text-sm text-[#2C2C2C]"
                  >
                    {award}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-l-4 border-[#C4A882] pl-6">
                <Link href="/#reviews" className="text-sm uppercase tracking-[0.15em] text-[#C4A882] hover:text-[#A68B5B] mb-2 inline-block">From the reviews →</Link>
                <p className="text-[#444444] text-base leading-relaxed italic">
                  &ldquo;Couples mention the same things: a voice described as &lsquo;phenomenal&rsquo; and &lsquo;extraordinary&rsquo;; communication that&apos;s fast, warm and proactive; songs learned and sets tailored to the room. And the guest reaction — &lsquo;everyone loved her&rsquo;, &lsquo;so many comments&rsquo;, &lsquo;the floor was filled all night&rsquo;. The phrase that comes up most? &lsquo;One less thing to worry about.&rsquo;&rdquo;
                </p>
              </div>
            </div>

            {/* Image column */}
            <div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/images/nicola-mason-full-package-p.webp"
                  alt="Nicola Mason performing live music as part of a full-day wedding package in Central Scotland"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-[#C4A882] italic text-center mt-3">
                Nicola Mason - Scottish Wedding Awards Ceremony Entertainer of the Year Winner 2026
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Professional PA",
                description:
                  "State-of-the-art audio equipment suitable for indoor and outdoor venues",
              },
              {
                title: "Flexible Setlist",
                description:
                  "Repertoire tailored to your wedding theme and personal preferences",
              },
              {
                title: "Fully Insured",
                description:
                  "Full Public Liability Insurance, PAT-tested equipment and a member of the Musicians' Union (MU)",
              },
              {
                title: "Song Requests",
                description:
                  "Happy to learn specific songs for your day (subject to availability)",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-[#C4A882]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C4A882] text-2xl">♪</span>
                </div>
                <h3 className="text-lg font-serif text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#444444] text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq" className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider">
              Have More Questions? See All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Trusted at Scotland&apos;s Finest Venues
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              // Grand Estates & Historic Castles
              { name: "Carlowrie Castle", area: "West Lothian" },
              { name: "Fasque Castle", area: "Aberdeenshire" },
              { name: "Atholl Palace", area: "Perthshire" },
              { name: "The Balmoral Hotel", area: "Edinburgh" },
              { name: "Glenbervie House & Country Estate", area: "Falkirk" },
              { name: "Mar Hall", area: "Renfrewshire" },
              { name: "Edinburgh City Chambers", area: "Edinburgh" },
              { name: "The George Hotel", area: "Edinburgh" },
              { name: "The Bonham Hotel", area: "Edinburgh" },
              // Luxury Hotels & Country Clubs
              { name: "Norton House Hotel", area: "Edinburgh" },
              { name: "Lodge on Loch Lomond", area: "Loch Lomond" },
              { name: "Balbirnie House", area: "Fife" },
              { name: "Inglewood House & Spa", area: "Clackmannanshire" },
              { name: "The Gailes Hotel & Spa", area: "Ayrshire" },
              { name: "Dalmeny Park House Hotel", area: "Renfrewshire" },
              { name: "Lynnhurst Hotel", area: "Renfrewshire" },
              { name: "Ingliston Country Club & Hotel", area: "Renfrewshire" },
              { name: "Piersland House", area: "Ayrshire" },
              { name: "Dalziel Park Hotel & Golf Club", area: "Lanarkshire" },
              { name: "Parklands Hotel", area: "Perthshire" },
              { name: "The Busby Hotel", area: "East Renfrewshire" },
              { name: "Bowfield Hotel & Spa", area: "Renfrewshire" },
              { name: "Carnoustie Golf Hotel & Spa", area: "Angus" },
              // Characterful, Chic & Unique Spaces
              { name: "Coats", area: "Renfrewshire" },
              { name: "Oran Mor", area: "Glasgow" },
              { name: "Ghillie Dhu", area: "Edinburgh" },
              { name: "The Corinthian", area: "Glasgow" },
              { name: "Sloan's", area: "Glasgow" },
              { name: "The Byre at Inchyra", area: "Perthshire" },
              { name: "Broxmouth Courtyard", area: "East Lothian" },
              { name: "The Vu", area: "West Lothian" },
            ].map((venue) => (
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
    </div>
  );
}

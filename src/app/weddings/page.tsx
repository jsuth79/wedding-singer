import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PackageTips from "@/components/PackageTips";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";

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
        url: '/images/nicola-mason-wedding-first-dance.jpg',
        width: 1200,
        height: 630,
        alt: 'Nicola Mason Wedding Singer Packages',
      },
    ],
  },
};

const packages = [
  {
    name: "Ceremony",
    price: "£325",
    description: "Elevate your moment with your favourite music sung live",
    image: "/images/nicola-mason-wedding-ceremony-singer-l.webp",
    alt: "Female wedding ceremony singer performing acoustic music at Edinburgh wedding with live vocals and guitar",
    features: [
      "Pre-ceremony background music from the moment guests are seated",
      "Your aisle entrance song performed live by a professional wedding singer, timed to you",
      "Music performed during the register signing",
      "A live exit song to send you out as newlyweds",
      "Professional PA system set up and managed at your venue throughout",
    ],
    tips: [
      "Consider an upbeat exit song to set the tone for your celebration ahead",
      "If a backing track isn't available for your chosen song, I can arrange for a musician to record one for a small additional fee"
    ],
  },
  {
    name: "Drinks Reception",
    price: "£350",
    description: "Keep the atmosphere flowing while your guests celebrate",
    image: "/images/nicola-mason-drinks-reception-l.webp",
    alt: "Live acoustic music at wedding drinks reception in Central Scotland with professional female singer entertaining guests",
    features: [
      "Two 45-minute live acoustic sets, tailored to you and your day",
      "Curated playlist keeps the atmosphere flowing between sets",
      "Pitched perfectly to keep guests mingling and the energy just right",
      "PA system professionally set up and managed for your reception venue",
    ],
  },
  {
    name: "Dinner",
    price: "£350",
    description: "Create the perfect ambience for conversation and dining",
    image: "/images/nicola-mason-dinner-l.webp",
    alt: "Wedding dinner entertainment with live acoustic vocalist providing elegant background music during wedding breakfast",
    features: [
      "Your entrance into the wedding meal performed live",
      "Two 45-minute sets of background music, paced to your meal timings",
      "Volume and energy kept ambient — perfect for conversation and celebration",
      "Professional PA system configured for your wedding venue's dining space",
    ],
  },
  {
    name: "Daytime Package",
    price: "£575",
    popular: true,
    description: "Live acoustic music from your vows through drinks reception",
    image: "/images/nicola-mason-daytime-l.webp",
    alt: "Full day female wedding singer package Glasgow covering ceremony and drinks reception with live acoustic music",
    features: [
      "Full wedding ceremony singer service, from guest arrival through to walking out",
      "Drinks reception coverage — one singer, one setup, one less thing to think about",
      "Ceremony and drinks reception music covered under one package price — better value than booking separately",
      "Swap drinks reception for dinner instead (+£55)",
      "All equipment included",
    ],
  },
  {
    name: "The Full Shebang",
    price: "£795",
    description: "Musical memories from ceremony to dance floor",
    image: "/images/nicola-mason-full-day-singer-l.webp",
    alt: "Complete wedding day entertainment package from ceremony through evening reception with live singing and first dance",
    features: [
      "Full wedding ceremony singer service, from guest arrival through to walking out",
      "Drinks reception coverage with 90 minutes of live music",
      "Your first dance performed live by your wedding singer",
      "One hour of upbeat party songs to fill the floor",
      "Everything from vows to dance floor, covered in one package",
    ],
  },
  {
    name: "First Dances",
    price: "£395",
    description: "Kick off your evening with live music to fill the dance floor",
    image: "/images/nicola-mason-first-dance-l.webp",
    alt: "Female first dance wedding singer Edinburgh performing romantic live songs and party music for evening celebration",
    features: [
      "Your first dance performed live by a professional wedding singer",
      "One hour of upbeat party songs to get guests on the floor",
      "High-energy performance timed to kick off your evening",
      "Professional PA system set up and managed for your performance",
    ],
  },
];

const extras = [
  {
    name: "Surprise Singers",
    price: "From £795",
    popular: true,
    image: "/images/nicola-mason-surprise-singer-l.webp",
    alt: "Female surprise wedding singers disguised as waiters performing unexpected entertainment at Glasgow wedding reception",
    description:
      "Create a show-stopping moment your guests will talk about for years",
    features: [
      "2+ professional performers",
      "Disguised as staff or guests",
      "Surprise reveal performance",
      "Popular floor-filling songs",
      "Creates unforgettable moments",
    ],
  },
  {
    name: "The Clooneys",
    price: "POA",
    image: "/images/the-clooneys-band-l.webp",
    alt: "The Clooneys vocal harmony trio performing live three-part harmonies at wedding ceremony and reception",
    description:
      "Stunning three-part harmonies that bring depth and richness to your day",
    features: [
      "Three-part vocal harmonies",
      "Ceremony performances",
      "Reception entertainment",
      "Evening celebrations",
      "Versatile repertoire",
    ],
    link: "https://www.theclooneys.co.uk",
  },
  {
    name: "Keepsake Recording",
    price: "£80",
    image: "/images/nicola-mason-keepsake-recording-l.webp",
    alt: "Studio recording session for personalized wedding song keepsake with professional vocalist",
    description:
      "Relive your special moment forever with your song professionally recorded",
    features: [
      "Studio-quality recording",
      "Your chosen song",
      "Digital download included",
      "Perfect keepsake",
      "Discounts on multiple songs",
    ],
  },
];

export default function WeddingsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Wedding Singer Packages
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-6">
            Your Perfect Day Deserves the Perfect Soundtrack
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            From the moment your guests arrive to your last dance of the night,
            I&apos;ll create an atmosphere of elegance and celebration that reflects
            your unique love story.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-12 md:py-24 px-6 bg-[#FCFCFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              Wedding Singer Packages from Ceremony to Evening
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-lg overflow-hidden ${
                  pkg.popular
                    ? "ring-2 ring-[#C4A882] shadow-xl"
                    : "border border-stone-200"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute top-4 right-4 z-10 bg-[#C4A882] text-white text-sm uppercase tracking-wider px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[#2C2C2C] mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-2xl font-serif text-[#C4A882] mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-[#888888] text-sm mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#444444]"
                      >
                        <span className="text-[#C4A882] mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {pkg.tips && (
                    <PackageTips
                      tips={pkg.tips}
                      title={
                        pkg.name === "Ceremony" ? "Top Ceremony Tips from Nicola" :
                        pkg.name === "Drinks Reception" ? "Top Drinks Reception Music Tips from Nicola" :
                        pkg.name === "Dinner" ? "Top Wedding Dinner Music Tips from Nicola" :
                        pkg.name === "Daytime Package" ? "Top Daytime Music Tips from Nicola" :
                        pkg.name === "The Full Shebang" ? "Top Wedding Music Tips from Nicola" :
                        pkg.name === "First Dances" ? "Top First Dance Music Tips from Nicola" :
                        "Top Tips from Nicola"
                      }
                    />
                  )}
                  <Link
                    href="/enquiry"
                    className="block w-full text-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-6 py-3 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#888888] text-sm mt-10">
            All prices include professional PA equipment and 40 miles travel from Glasgow. Additional mileage at 45p/mile.
            <br />
            Booking direct avoids platform fees (typically 20%).
          </p>
        </div>
      </section>

      {/* Extras */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Enhance Your Day
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              Surprise Singers, Vocal Trios &amp; Wedding Keepsakes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extras.map((extra) => (
              <div
                key={extra.name}
                className={`relative bg-white rounded-lg overflow-hidden ${
                  extra.popular
                    ? "ring-2 ring-[#C4A882] shadow-xl"
                    : "border border-stone-200"
                }`}
              >
                {extra.popular && (
                  <span className="absolute top-4 right-4 z-10 bg-[#C4A882] text-white text-sm uppercase tracking-wider px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={extra.image}
                    alt={extra.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[#2C2C2C] mb-1">
                    {extra.name}
                  </h3>
                  <p className="text-2xl font-serif text-[#C4A882] mb-1">
                    {extra.price}
                  </p>
                  <p className="text-[#888888] text-sm mb-4">{extra.description}</p>
                  <ul className="space-y-2 mb-6">
                    {extra.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#444444]"
                      >
                        <span className="text-[#C4A882] mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {extra.link ? (
                    <a
                      href={extra.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-6 py-3 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
                    >
                      Find Out More
                    </a>
                  ) : (
                    <Link
                      href="/enquiry"
                      className="block w-full text-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-6 py-3 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
                    >
                      Check Availability
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-6">
            Ready to Discuss Your Wedding?
          </h2>
          <p className="text-[#444444] text-lg mb-4">
            Now booking for 2027. Still some 2026 dates available.
          </p>
          <p className="text-[#444444] mb-10">
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

      {/* The Full Package */}
      <section id="whats-included" className="py-12 md:py-24 px-6 bg-[#FCFCFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              What&apos;s Included
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
              The Full Package
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
                  elegant during dinner, or getting folk up dancing when it&apos;s time
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
                  alt="Female wedding singer Nicola Mason performing full day wedding package with live vocals and acoustic guitar in Central Scotland"
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
                  "Full Public Liability Insurance with PAT-tested equipment",
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
                <h3 className="text-lg font-serif text-[#2C2C2C] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#444444] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
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

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

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
    description: "Perfect for your ceremony",
    image: "/images/nicola-mason-wedding-ceremony-singer-l.webp",
    features: [
      "Playlist during guest arrival",
      "Aisle entrance song",
      "Song during register signing",
      "Exit/recessional song",
      "Professional PA system included",
    ],
  },
  {
    name: "Drinks Reception",
    price: "£350",
    description: "Entertain your guests",
    image: "/images/nicola-mason-drinks-reception-l.webp",
    features: [
      "Two 45-minute live sets",
      "Playlist between sets",
      "Acoustic classics & modern hits",
      "Perfect for mingling atmosphere",
      "Professional PA system included",
    ],
  },
  {
    name: "Dinner",
    price: "£350",
    description: "Elegant background music",
    image: "/images/nicola-mason-dinner-l.webp",
    features: [
      "Grand entrance song",
      "Two 45-minute soft background sets",
      "Tailored to your meal timing",
      "Relaxed, ambient atmosphere",
      "Professional PA system included",
    ],
  },
  {
    name: "Daytime Package",
    price: "£575",
    popular: true,
    description: "Ceremony through reception",
    image: "/images/nicola-mason-daytime-l.webp",
    features: [
      "Full ceremony service",
      "Drinks reception entertainment",
      "Seamless transitions",
      "Substitute drinks for dinner (+£55)",
      "All equipment included",
    ],
  },
  {
    name: "The Full Shebang",
    price: "£795",
    description: "Complete musical coverage",
    image: "/images/nicola-mason-full-day-singer-l.webp",
    features: [
      "Full ceremony service",
      "90-minute drinks reception",
      "First dance performance",
      "One hour of party songs",
      "Everything you need for the day",
    ],
  },
  {
    name: "First Dances",
    price: "£395",
    description: "Evening entertainment",
    image: "/images/nicola-mason-first-dance-l.webp",
    features: [
      "Your first dance performed live",
      "One hour of upbeat party songs",
      "Get guests on the dancefloor",
      "High-energy performance",
      "Professional PA system included",
    ],
  },
];

const extras = [
  {
    name: "Surprise Singers",
    price: "From £795",
    popular: true,
    image: "/images/nicola-mason-surprise-singer-l.webp",
    description:
      "Two or more performers disguised as waiters, delivery drivers, or police who reveal themselves to perform popular floor-fillers.",
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
    description:
      "Three-piece vocal harmony trio available for ceremonies, receptions, and evening entertainment.",
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
    description:
      "Professional recording of your preferred wedding song. Discounts available for multiple recordings.",
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
              Wedding Packages
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
                  <span className="absolute top-4 right-4 z-10 bg-[#C4A882] text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
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
                  <span className="absolute top-4 right-4 z-10 bg-[#C4A882] text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={extra.image}
                    alt={extra.name}
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
              href="/enquiry"
              className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* The Full Package */}
      <section className="py-12 md:py-24 px-6 bg-[#FCFCFC]">
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
                <Link href="/#reviews" className="text-xs uppercase tracking-[0.15em] text-[#C4A882] hover:text-[#A68B5B] mb-2 inline-block">From the reviews →</Link>
                <p className="text-[#444444] text-sm leading-relaxed italic">
                  &ldquo;Couples mention the same things: a voice described as &lsquo;phenomenal&rsquo; and &lsquo;extraordinary&rsquo;; communication that&apos;s fast, warm and proactive; songs learned and sets tailored to the room. And the guest reaction — &lsquo;everyone loved her&rsquo;, &lsquo;so many comments&rsquo;, &lsquo;the floor was filled all night&rsquo;. The phrase that comes up most? &lsquo;One less thing to worry about.&rsquo;&rdquo;
                </p>
              </div>
            </div>

            {/* Image column */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/nicola-mason-full-package-p.webp"
                alt="Nicola Mason performing"
                fill
                className="object-cover"
              />
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

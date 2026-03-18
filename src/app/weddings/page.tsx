import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Singer Services | Emma Rose",
  description:
    "Professional wedding singer for ceremonies, drinks receptions, and evening entertainment. Bespoke packages tailored to your perfect day.",
};

const packages = [
  {
    name: "Ceremony",
    price: "From £350",
    description: "Perfect for intimate ceremonies",
    features: [
      "Pre-ceremony music as guests arrive (15 mins)",
      "Bridal entrance song",
      "1-2 songs during signing of the register",
      "Recessional song",
      "Consultation to discuss song choices",
      "Professional PA system included",
    ],
  },
  {
    name: "Ceremony & Reception",
    price: "From £600",
    popular: true,
    description: "Our most popular wedding package",
    features: [
      "Everything in Ceremony package",
      "1 hour of live music during drinks reception",
      "Background and upbeat repertoire",
      "Seamless transition between ceremony and reception",
      "Song requests welcomed",
      "Travel within 50 miles included",
    ],
  },
  {
    name: "Full Day",
    price: "From £950",
    description: "Complete musical entertainment",
    features: [
      "Everything in Ceremony & Reception package",
      "2 x 45-minute evening sets",
      "First dance performance",
      "DJ services between sets available",
      "Bespoke song learning available",
      "Dedicated point of contact on the day",
    ],
  },
];

const repertoireCategories = [
  {
    title: "Ceremony Favourites",
    songs: [
      "A Thousand Years - Christina Perri",
      "Canon in D - Pachelbel",
      "All of Me - John Legend",
      "Songbird - Fleetwood Mac",
      "At Last - Etta James",
    ],
  },
  {
    title: "Drinks Reception",
    songs: [
      "Feeling Good - Nina Simone",
      "The Way You Look Tonight - Frank Sinatra",
      "Crazy Little Thing Called Love - Queen",
      "L-O-V-E - Nat King Cole",
      "Have I Told You Lately - Van Morrison",
    ],
  },
  {
    title: "Evening Entertainment",
    songs: [
      "Don't Stop Me Now - Queen",
      "Sweet Caroline - Neil Diamond",
      "I Wanna Dance with Somebody - Whitney Houston",
      "Valerie - Amy Winehouse",
      "Mr. Brightside - The Killers",
    ],
  },
];

export default function WeddingsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
            Wedding Services
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-6">
            Your Perfect Day Deserves the Perfect Soundtrack
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            From the moment your guests arrive to your last dance of the night,
            I&apos;ll create an atmosphere of elegance and celebration that reflects
            your unique love story.
          </p>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">
                More Than Just a Singer
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Your wedding day is one of the most important days of your life,
                and the music should be nothing short of exceptional. I bring
                not only my voice but years of experience in understanding what
                makes wedding entertainment truly special.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                From helping nervous couples choose their ceremony songs to
                reading the room during the reception, I pride myself on being a
                seamless, professional addition to your wedding team.
              </p>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 mt-1">✓</span>
                  Fully insured and DBS checked
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 mt-1">✓</span>
                  Professional-grade PA equipment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 mt-1">✓</span>
                  Flexible with last-minute changes
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-600 mt-1">✓</span>
                  Happy to learn new songs for your day
                </li>
              </ul>
            </div>
            <div className="relative">
              {/* Placeholder image */}
              <div className="aspect-square bg-stone-200 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
              Wedding Packages
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              All packages can be customised to suit your needs. Prices may vary
              depending on location and specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-lg p-8 ${
                  pkg.popular
                    ? "ring-2 ring-rose-600 shadow-xl"
                    : "border border-stone-200"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-xs uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-serif text-stone-800 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-serif text-rose-600 mb-2">
                  {pkg.price}
                </p>
                <p className="text-stone-500 text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-stone-600"
                    >
                      <span className="text-rose-600 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/enquire"
                  className={`block text-center py-3 text-sm uppercase tracking-wider transition-colors ${
                    pkg.popular
                      ? "bg-rose-600 hover:bg-rose-700 text-white"
                      : "border border-stone-300 hover:border-rose-600 hover:text-rose-600 text-stone-700"
                  }`}
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repertoire */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
              Song List
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
              Sample Repertoire
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              A small selection from my extensive repertoire. Don&apos;t see your
              favourite? I&apos;m always happy to learn new songs for your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {repertoireCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-serif text-stone-800 mb-4 pb-2 border-b border-stone-200">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.songs.map((song) => (
                    <li key={song} className="text-stone-600 text-sm">
                      {song}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-stone-500 text-sm">
            Full repertoire list available on request
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-rose-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Discuss Your Wedding?
          </h2>
          <p className="text-rose-100 text-lg mb-10">
            I&apos;d love to hear about your plans and help make your day truly
            special. Get in touch to check my availability.
          </p>
          <Link
            href="/enquire"
            className="inline-block bg-white hover:bg-stone-100 text-rose-600 px-10 py-4 text-sm uppercase tracking-wider transition-colors"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
}

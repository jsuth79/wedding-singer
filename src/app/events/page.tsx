import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Singer Services | Emma Rose",
  description:
    "Professional event singer for corporate functions, private parties, and special occasions. Versatile repertoire and tailored performances.",
};

const eventTypes = [
  {
    title: "Corporate Events",
    description:
      "From awards ceremonies to company celebrations, I provide sophisticated entertainment that elevates your corporate event. Professional, punctual, and adaptable to your brand's tone.",
    features: [
      "Product launches & brand events",
      "Awards ceremonies & gala dinners",
      "Conference entertainment",
      "Client hospitality events",
      "Christmas parties & summer balls",
    ],
    image: "/images/corporate-placeholder.jpg",
  },
  {
    title: "Private Parties",
    description:
      "Whether it's a milestone birthday, anniversary celebration, or intimate dinner party, I'll create the perfect atmosphere for your gathering with a tailored setlist.",
    features: [
      "Milestone birthdays (30th, 40th, 50th+)",
      "Anniversary celebrations",
      "Engagement parties",
      "Garden parties & summer events",
      "Dinner party entertainment",
    ],
    image: "/images/party-placeholder.jpg",
  },
  {
    title: "Special Occasions",
    description:
      "Some moments call for something truly special. I bring sensitivity and professionalism to life's most meaningful occasions.",
    features: [
      "Funeral & memorial services",
      "Renewal of vows ceremonies",
      "Christenings & naming ceremonies",
      "Charity events & fundraisers",
      "Religious celebrations",
    ],
    image: "/images/special-placeholder.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Emma performed at our company's 25th anniversary gala and absolutely wowed our guests. Professional, talented, and a pleasure to work with.",
    author: "David Mitchell",
    role: "Events Director, Tech Corp",
  },
  {
    quote:
      "We hired Emma for my mother's 70th birthday and she made it unforgettable. Her song choices were perfect and she had everyone dancing!",
    author: "Lisa Thompson",
    role: "Private Party",
  },
];

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
            Event Services
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-6">
            Entertainment for Every Occasion
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            From corporate galas to intimate celebrations, I bring versatility,
            professionalism, and a touch of magic to events of all sizes.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {eventTypes.map((event, index) => (
            <div
              key={event.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
                  {event.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {event.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {event.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-stone-600"
                    >
                      <span className="text-rose-600">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/enquire"
                  className="inline-block text-rose-600 border-b-2 border-rose-600 pb-1 hover:text-rose-700 hover:border-rose-700 transition-colors"
                >
                  Enquire about {event.title.toLowerCase()}
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {/* Placeholder image */}
                <div className="aspect-[4/3] bg-stone-200 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
              What&apos;s Included
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800">
              The Full Package
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Professional PA",
                description:
                  "High-quality sound system suitable for your venue size",
              },
              {
                title: "Flexible Setlist",
                description:
                  "Repertoire tailored to your event theme and audience",
              },
              {
                title: "Early Setup",
                description:
                  "Arrive with plenty of time for soundcheck and coordination",
              },
              {
                title: "Song Requests",
                description:
                  "Happy to learn specific songs for your event",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-rose-600 text-2xl">♪</span>
                </div>
                <h3 className="text-lg font-serif text-stone-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
              Investment
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
              Event Pricing
            </h2>
            <p className="text-stone-600">
              Every event is unique. Pricing depends on duration, location, and
              specific requirements.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-serif text-stone-800 mb-4">
                  Typical Event Packages
                </h3>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex justify-between">
                    <span>1-hour performance</span>
                    <span className="text-stone-800">From £300</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2-hour performance</span>
                    <span className="text-stone-800">From £500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Full evening (3+ hours)</span>
                    <span className="text-stone-800">From £750</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif text-stone-800 mb-4">
                  Additional Options
                </h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600">+</span>
                    DJ services between sets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600">+</span>
                    Additional musician (pianist/guitarist)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600">+</span>
                    Bespoke song arrangements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600">+</span>
                    Extended travel outside London
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-stone-500 text-sm text-center border-t border-stone-200 pt-8">
              All prices include professional PA equipment and travel within the
              M25. Contact me for a personalised quote.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-stone-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-400 text-sm uppercase tracking-[0.2em] mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="bg-stone-700/50 rounded-lg p-8"
              >
                <p className="text-stone-200 italic leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-stone-400 text-sm">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">
            Planning an Event?
          </h2>
          <p className="text-stone-600 text-lg mb-10 max-w-2xl mx-auto">
            I&apos;d love to discuss how I can make your event memorable. Get in
            touch with details about your occasion for a personalised quote.
          </p>
          <Link
            href="/enquire"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

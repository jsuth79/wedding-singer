import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";

export const metadata: Metadata = {
  title: "Events Singer Glasgow | Corporate & Private Events | Nicola Mason",
  description:
    "Professional event singer for corporate functions, private parties, and celebrations. Based in Glasgow, serving Central Scotland.",
  alternates: {
    canonical: '/events',
  },
  openGraph: {
    title: 'Events Singer Glasgow | Corporate & Private Events | Nicola Mason',
    description: 'Professional event entertainment for corporate functions, private parties, and celebrations across Central Scotland.',
    url: 'https://www.nicolamason.co.uk/events',
    images: [
      {
        url: '/images/nicola-mason-events-services-l.webp',
        width: 1200,
        height: 630,
        alt: 'Nicola Mason Events Singer',
      },
    ],
  },
};

const eventTypes = [
  {
    title: "Corporate Events",
    description:
      "From awards ceremonies to company celebrations, I provide sophisticated entertainment that elevates your corporate event. Professional, punctual, and adaptable to your brand's tone.",
    image: "/images/nicola-mason-corporate-events-l.webp",
    alt: "Professional female corporate event singer performing at Glasgow business awards ceremony and gala dinner",
    features: [
      "Awards ceremonies & gala dinners",
      "Conference entertainment",
      "Product launches & brand events",
      "Client hospitality events",
      "Christmas parties & summer balls",
      "Team building days",
    ],
  },
  {
    title: "Private Celebrations",
    description:
      "Whether it's a milestone birthday, anniversary celebration, or garden party, I'll create the perfect atmosphere for your gathering with a tailored setlist.",
    image: "/images/nicola-mason-celebration-singer-l.webp",
    alt: "Female singer performing live music at private birthday party and anniversary celebration in Edinburgh and Central Scotland",
    features: [
      "Milestone birthdays (30th, 40th, 50th+)",
      "Anniversary celebrations",
      "Garden parties & summer events",
      "Christenings & baby showers",
      "Engagement parties",
      "Dinner party entertainment",
    ],
  },
  {
    title: "Funeral & Memorial Services",
    description:
      "I bring sensitivity and professionalism to life's most difficult moments, providing comfort through music at services and gatherings.",
    image: "/images/nicola-mason-funeral-singer-l.webp",
    alt: "Professional funeral singer providing respectful live music at memorial service and crematorium ceremony",
    features: [
      "Church or civil ceremonies",
      "Crematorium services",
      "Graveside services",
      "Post-service gatherings",
      "Hymns and popular music available",
      "Additional musicians available",
    ],
  },
];

export default function EventsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Event Singer Packages
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
            Entertainment for Every Occasion
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            I perform at corporate events, private celebrations, and memorial services across Central Scotland. Adaptable to any occasion and audience.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              Make It Memorable
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Corporate and Private Event Entertainment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="relative bg-white rounded-lg overflow-hidden border border-stone-200"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4">
                    {event.title}
                  </h3>
                  <p className="text-[#888888] text-sm mb-4">{event.description}</p>
                  <ul className="space-y-2 mb-6">
                    {event.features.map((feature, i) => (
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
                    Check My Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Discuss Your Event?
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
            I&apos;d love to discuss how I can make your event memorable. Get in
            touch with details about your occasion for a personalised quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              location="events_page_cta"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via WhatsApp (1-2 hour response)
              </span>
            </TrackedWhatsAppLink>
            <TrackedEnquiryLink
              location="events_page_cta"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </TrackedEnquiryLink>
          </div>
          <div className="mt-8">
            <Link href="/weddings" className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider">
              Also Available For Weddings →
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              What&apos;s Included
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              Professional Event Entertainment
            </h2>
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
                  "Repertoire tailored to your event theme and audience preferences",
              },
              {
                title: "Fully Insured",
                description:
                  "Full Public Liability Insurance, PAT-tested equipment and a member of the Musicians' Union (MU)",
              },
              {
                title: "Song Requests",
                description:
                  "Happy to learn specific songs for your event (subject to availability)",
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

      {/* Coverage Area */}
      <section className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Coverage Area
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-6">
            Serving Central Scotland
          </h2>
          <p className="text-[#444444] mb-8">
            Based in Glasgow, I regularly perform at venues across:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Glasgow",
              "Edinburgh",
              "Lanarkshire",
              "Stirling",
              "Ayrshire",
              "The Lothians",
            ].map((area) => (
              <span
                key={area}
                className="px-6 py-2 bg-[#F5F1EB] rounded-full text-[#2C2C2C]"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-[#888888] text-sm mt-8">
            40 miles travel included in all packages. Additional mileage at 45p
            per mile.
          </p>
        </div>
      </section>
    </div>
  );
}

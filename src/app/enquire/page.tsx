import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Get in Touch | Emma Rose",
  description:
    "Contact Emma Rose to discuss your wedding or event entertainment. Check availability and receive a personalised quote.",
};

export default function EnquirePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-6">
            Let&apos;s Talk About Your Event
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Fill out the form below and I&apos;ll get back to you within 24-48 hours
            to discuss your requirements and check availability.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <EnquiryForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-stone-50 rounded-lg p-8">
                <h3 className="text-xl font-serif text-stone-800 mb-6">
                  Other Ways to Reach Me
                </h3>
                <ul className="space-y-4 text-stone-600">
                  <li>
                    <p className="text-sm text-stone-500 mb-1">Email</p>
                    <a
                      href="mailto:hello@emmarosesinger.com"
                      className="text-rose-600 hover:text-rose-700"
                    >
                      hello@emmarosesinger.com
                    </a>
                  </li>
                  <li>
                    <p className="text-sm text-stone-500 mb-1">Phone</p>
                    <a
                      href="tel:+447700900000"
                      className="text-rose-600 hover:text-rose-700"
                    >
                      +44 (0) 7700 900000
                    </a>
                  </li>
                  <li>
                    <p className="text-sm text-stone-500 mb-1">Location</p>
                    <p>Based in London, UK</p>
                    <p className="text-sm">Available nationwide</p>
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              <div className="bg-rose-50 rounded-lg p-8">
                <h3 className="text-xl font-serif text-stone-800 mb-6">
                  Quick Answers
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-stone-800 mb-1">
                      How far in advance should I book?
                    </p>
                    <p className="text-stone-600">
                      For weddings, 6-12 months is ideal. For other events, 2-3
                      months notice is usually sufficient.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 mb-1">
                      Do you travel outside London?
                    </p>
                    <p className="text-stone-600">
                      Yes! I perform at venues across the UK. Travel costs may
                      apply for distances over 50 miles.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 mb-1">
                      Can you learn a specific song?
                    </p>
                    <p className="text-stone-600">
                      Absolutely. I love learning new songs that are meaningful
                      to my clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center">
                <p className="text-stone-500 text-sm mb-2">
                  Trusted by couples &amp; event planners since 2012
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-stone-600 text-sm mt-1">
                  4.9/5 from 200+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";

export const metadata: Metadata = {
  title: "Check Availability | Nicola Mason Wedding & Events Singer",
  description:
    "Get in touch to discuss your wedding or event. Quick response times via WhatsApp or contact form. Based in Glasgow, serving Central Scotland.",
  alternates: {
    canonical: '/enquiry',
  },
  openGraph: {
    title: "Check Availability | Nicola Mason Wedding & Events Singer",
    description: 'Get in touch to discuss your wedding or event. Quick response times via WhatsApp or contact form.',
    url: 'https://www.nicolamason.co.uk/enquiry',
  },
};

export default function EnquirePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
            Let&apos;s Talk About Your Event
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            Fill out the form below and I&apos;ll get back to you within 24 hours
            to discuss your requirements and check availability.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <EnquiryForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-[#F5F1EB] rounded-lg p-8">
                <h3 className="text-xl font-serif text-[#1a1a1a] mb-6">
                  Other Ways to Reach Me
                </h3>
                <ul className="space-y-4 text-[#444444]">
                  <li>
                    <p className="text-sm text-[#888888] mb-1">Email</p>
                    <a
                      href="mailto:hello@nicolamason.co.uk"
                      className="text-[#C4A882] hover:text-[#A68B5B]"
                    >
                      hello@nicolamason.co.uk
                    </a>
                  </li>
                  <li>
                    <p className="text-sm text-[#888888] mb-1">Phone / WhatsApp</p>
                    <a
                      href="tel:+447740360678"
                      className="text-[#C4A882] hover:text-[#A68B5B]"
                    >
                      +44 7740 360678
                    </a>
                  </li>
                  <li>
                    <p className="text-sm text-[#888888] mb-1">Location</p>
                    <p>Based in Glasgow, Scotland</p>
                    <p className="text-sm">
                      Serving Glasgow, Edinburgh &amp; Central Scotland
                    </p>
                  </li>
                </ul>
                <TrackedWhatsAppLink
                  location="enquiry_page_sidebar"
                  className="mt-6 inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-6 py-3 rounded-[4px] transition-colors w-full"
                >
                  <span className="font-medium text-sm uppercase tracking-wider">Check My Availability</span>
                  <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                    via WhatsApp (1-2 hour response)
                  </span>
                </TrackedWhatsAppLink>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Scottish Wedding Awards Winner",
                  "Confetti Awards 2025 Finalist",
                  "UKbride Approved",
                  "5-Star Reviews on Google & Facebook",
                ].map((award) => (
                  <span
                    key={award}
                    className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-[#2C2C2C]"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

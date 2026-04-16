import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";

export const metadata: Metadata = {
  title: "Check Availability | Wedding Singer Glasgow | Nicola Mason",
  description:
    "Check availability for your wedding date and get a quick personal reply. Message on WhatsApp or send an enquiry — I'll get back to you promptly.",
  alternates: {
    canonical: '/enquiry',
  },
  openGraph: {
    title: "Check Availability | Wedding Singer Glasgow | Nicola Mason",
    description: "Check availability for your wedding date and get a quick personal reply. Message on WhatsApp or send an enquiry — I'll get back to you promptly.",
    url: 'https://www.nicolamason.co.uk/enquiry',
  },
};

const pageUrl = "https://www.nicolamason.co.uk/enquiry";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nicolamason.co.uk" },
    { "@type": "ListItem", position: 2, name: "Enquiry", item: pageUrl },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${pageUrl}#contactpage`,
  name: "Check Availability — Nicola Mason Wedding Singer",
  url: pageUrl,
  description: "Check availability for your wedding date and get a quick personal reply.",
  mainEntity: { "@id": "https://www.nicolamason.co.uk/#localbusiness" },
};

export default function EnquirePage() {
  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      {/* Hero */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
            Let&apos;s Talk About Your Day
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            Choose whichever way works best for you — I&apos;ll get back to you quickly either way.
          </p>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-12 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* WhatsApp Column */}
            <div className="bg-[#FAF8F3] rounded-lg p-8 lg:p-10 h-full flex flex-col">
              <p className="text-[#C4A882] text-xs uppercase tracking-[0.2em] mb-4">Fastest Response</p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-4">
                Message me Instantly
              </h2>
              <p className="text-[#444444] leading-relaxed mb-4">
                Drop me a message with your date and what you&apos;re looking for. I usually reply within a few hours — no forms, no waiting.
              </p>
              <p className="text-sm text-[#888888] mb-8">
                Try to include: <span className="text-[#C4A882]">your name</span>, <span className="text-[#C4A882]">wedding date</span>, <span className="text-[#C4A882]">venue</span>, and <span className="text-[#C4A882]">what you need music for</span> — ceremony, drinks reception, full day, or something else.
              </p>

              <TrackedWhatsAppLink
                location="enquiry_page_whatsapp_col"
                className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-8 py-4 text-sm tracking-wider transition-colors rounded-[6px] w-full lg:w-auto text-center mb-3"
              >
                <span className="font-medium text-base">Message on WhatsApp</span>
                <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                  I usually reply within a few hours
                </span>
              </TrackedWhatsAppLink>

              <a
                href="sms:+447740360678?body=Hi%20Nicola%2C%20I'm%20%5BNAME%5D%20and%20I'm%20getting%20married%20on%20%5BDATE%5D%20at%20%5BVENUE%5D.%20I'm%20interested%20in%20music%20for%20%5BCEREMONY%20%2F%20DRINKS%20%2F%20FULL%20DAY%5D.%20Are%20you%20available%3F"
                className="inline-flex flex-col items-center bg-[#8C8C93] hover:bg-[#757578] text-white px-8 py-4 text-sm tracking-wider transition-colors rounded-[6px] w-full lg:w-auto text-center mb-8"
              >
                <span className="font-medium text-base">Message by SMS</span>
                <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                  I usually reply within a few hours
                </span>
              </a>

              <div className="text-center mb-6 lg:hidden">
                <span className="text-sm text-[#888888] uppercase tracking-wider mr-2">Or</span>
                <a href="#enquiry-form" className="text-[#C4A882] hover:text-[#A68B5B] border-b-2 border-[#C4A882] hover:border-[#A68B5B] pb-1 transition-colors uppercase text-sm tracking-wider">
                  Fill In The Form Below ↓
                </a>
              </div>

              <div className="border-t border-stone-200 pt-6 space-y-4 text-sm text-[#444444] mt-auto">
                <div>
                  <p className="text-xs text-[#888888] uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                  <a href="tel:+447740360678" className="text-[#C4A882] hover:text-[#A68B5B]">
                    +44 7740 360678
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#888888] uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:hello@nicolamason.co.uk" className="text-[#C4A882] hover:text-[#A68B5B]">
                    hello@nicolamason.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#888888] uppercase tracking-wider mb-1">Based in</p>
                  <p>Glasgow, Scotland</p>
                  <p className="text-[#888888]">Serving Glasgow, Edinburgh &amp; Central Scotland</p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div id="enquiry-form" className="bg-[#FAF8F3] rounded-lg p-8 lg:p-10">
              <p className="text-[#C4A882] text-xs uppercase tracking-[0.2em] mb-4">Prefer to Write it Out</p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-4">
                Send Your Details
              </h2>
              <p className="text-[#444444] leading-relaxed mb-8">
                Fill in a few details and I&apos;ll come back to you within 24 hours with everything you need to know.
              </p>
              <EnquiryForm />
            </div>

          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap gap-2 justify-center mt-12">
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
      </section>
    </div>
  );
}

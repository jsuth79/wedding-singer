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
    <div className="pt-24">
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
              <p className="text-[#444444] leading-relaxed mb-8">
                Drop me a message with your date and what you&apos;re looking for. I usually reply within an hour or two — no forms, no waiting.
              </p>

              <TrackedWhatsAppLink
                location="enquiry_page_whatsapp_col"
                className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px] w-full text-center mb-3"
              >
                <span className="font-medium">Check My Availability</span>
                <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                  via WhatsApp (1–2 hour response)
                </span>
              </TrackedWhatsAppLink>

              <a
                href="sms:+447740360678"
                className="inline-flex flex-col items-center bg-[#007AFF] hover:bg-[#0063CC] text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px] w-full text-center mb-8"
              >
                <span className="font-medium">Check My Availability</span>
                <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                  via iMessage (1–2 hour response)
                </span>
              </a>

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
            <div className="bg-[#FAF8F3] rounded-lg p-8 lg:p-10">
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

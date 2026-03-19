import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Nicola Mason",
  description:
    "Common questions about booking a wedding singer in Scotland. Learn about packages, availability, repertoire, and what to expect.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Wedding Singer FAQs | Nicola Mason',
    description: 'Common questions about booking a wedding singer in Scotland. Learn about packages, availability, repertoire, and what to expect.',
    url: 'https://www.nicolamason.co.uk/faq',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "When does a wedding singer usually perform during a ceremony?",
    answer:
      "Wedding ceremony music is usually performed at several key moments. This often includes music while guests arrive, the walk down the aisle, music during the signing of the register, and an upbeat song as the couple exit the ceremony.",
  },
  {
    question: "Why choose a live singer for your wedding ceremony?",
    answer:
      "Couples often tell me that live music adds something truly special to their wedding ceremony. Singing live during moments like the aisle entrance or signing of the register creates a warm and emotional atmosphere that recorded music can't quite replicate. Many couples say their guests comment on the music afterwards, and that the live performance helped create some of their favourite memories from the day.",
  },
  {
    question: "How far in advance of my wedding should I book a singer?",
    answer:
      "Most couples book their wedding singer 12–18 months in advance, particularly for peak dates between May and September. That said, I do take last-minute bookings and have performed at weddings booked just days before — so it's always worth getting in touch even if your date is close. The easiest way to check availability is to message me on WhatsApp and I'll get back to you the same day.",
  },
  {
    question: "Where are you based and where can you perform?",
    answer:
      "I am based in Central Scotland and regularly perform at weddings across Glasgow, Edinburgh, Lanarkshire and Stirling. I'm happy to travel further for weddings if required.",
  },
  {
    question: "How much travel is included in your price?",
    answer:
      "The first 40 miles of travel are included. For venues further away, travel is charged at 45p per mile.",
  },
  {
    question: "Do you provide your own sound system?",
    answer:
      "Yes. I bring a full professional PA system suitable for wedding ceremonies and drinks receptions, providing clear, high-quality sound for both indoor and outdoor weddings. All equipment is PAT-tested and I have full public liability insurance.",
  },
  {
    question: "What songs can we choose for our wedding ceremony?",
    answer:
      "I perform solo vocals to high-quality backing tracks, with the option to incorporate live accompaniment where suitable. You can choose songs from my repertoire and I may also be able to accommodate special requests depending on preparation time and the availability of backing tracks.",
  },
  {
    question: "Can we book you directly?",
    answer:
      "Yes. Direct-to-artist booking ensures personal communication, simple planning and the best available rates.",
  },
  {
    question: "What wedding packages do you offer?",
    answer:
      "Packages are available throughout your day, from the ceremony through to the evening entertainment, with options starting from £325.",
  },
  {
    question: "What kind of music do you perform?",
    answer:
      "Primarily I do acoustic versions of popular songs but I have a versatile repertoire covering everything from classic wedding favourites to current chart hits. I can tailor my song selections to match your preferences and the mood of your event, whether you want romantic ballads for your ceremony or a more upbeat vibe for later in the day.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Common Questions &amp; Planning
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            Everything you need to know about booking live music for your Scottish
            wedding or event.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-stone-200 pb-6">
                <h3 className="text-base font-medium text-[#2C2C2C] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
            I&apos;m here to help! Get in touch and I&apos;ll be happy to answer any
            questions about your wedding or event.
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
            <a
              href="/enquire"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-xs normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

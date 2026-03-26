import type { Metadata } from "next";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";

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
    question: "How much does a wedding singer cost in Scotland?",
    answer:
      "Wedding singer prices in Scotland vary considerably depending on experience, reputation, and what's included. At the budget end of the market you might find someone for £250–£400, but for a professional, full-time performer with high production values, comprehensive PA equipment, and a proven track record, you should expect to invest £500–£1,200 or more for a full wedding day package.\n\nIt's worth looking beyond the headline figure. A lower price often means basic equipment or an artist who performs weddings occasionally rather than as their primary career.\n\nThe real question isn't what's the cheapest option — it's what's the cost of it going wrong on the one day it can't. My packages are priced to reflect genuine expertise, fully PAT tested and professional-grade sound equipment, full public liability insurance, and the peace of mind that comes with a fully vetted, award-winning performer.",
  },
  {
    question: "Can one singer cover the whole wedding day — ceremony, drinks reception, and evening?",
    answer:
      "Yes — and for many couples, having a single artist carry the musical thread through the entire day creates a far more cohesive, relaxed experience than coordinating multiple acts. A professional solo singer with full PA can move through your ceremony, drinks reception, during the meal, and evening entertainment, adapting the mood and repertoire at each stage.\n\nThat said, it requires stamina, versatility, and proper planning. Not every singer is set up to do this well.\n\nI offer tailored full-day and part-day packages designed specifically to flow naturally through each moment — from the quiet intimacy of a ceremony to the energy of an evening reception — with everything managed seamlessly so you don't have to think about it.",
  },
  {
    question: "What parts of the wedding day does a singer typically perform at?",
    answer:
      "A professional wedding singer can perform at any or all of the following: Ceremony — prelude music as guests arrive, the bridal entrance, signing of the register, and exit song; Drinks reception — background music while guests mingle, typically 60–90 minutes; During the meal — relaxed background music while guests eat and chat; Evening reception — upbeat sets to get guests on the floor, typically two 45–60 minute sets.\n\nMany couples choose one or two of these rather than the full day, and a good singer will help you work out where live music will have the greatest impact for your budget.\n\nI perform across all parts of the day and offer both standalone and full-day packages to suit different timelines and venues across Scotland.",
  },
  {
    question: "Is live music actually worth the cost at a wedding?",
    answer:
      "For most couples, it's one of the most unanimously praised decisions they made. A live singer creates atmosphere that a playlist simply can't — the spontaneity, the visual presence, the way a room responds to a real human voice. Guests notice it, talk about it, and remember it.\n\nThe question is less whether live music adds value, and more which performer delivers on that promise. A professional artist with the right repertoire, the right equipment, and experience reading a room will elevate every moment they're part of.\n\nI've performed at weddings and events across Scotland and consistently receive feedback from couples that the music was one of the highlights of the day — which, ultimately, is exactly what it should be.",
  },
  {
    question: "When does a wedding singer usually perform during a ceremony?",
    answer:
      "Wedding ceremony music is usually performed at several key moments. This often includes music while guests arrive, the walk down the aisle, music during the signing of the register, and an upbeat song as the couple exit the ceremony.",
  },
  {
    question: "Why choose a live singer for your wedding ceremony?",
    answer:
      "Live music makes ceremony moments feel more personal and emotional. I've had couples tell me their guests still mention the music years later. Particularly during the aisle entrance and register signing. There's something about live vocals that recorded tracks just don't capture.",
  },
  {
    question: "How far in advance should I book a wedding singer in Scotland?",
    answer:
      "As early as possible — ideally 12 to 18 months ahead for a Saturday in peak season (May to September). Popular dates, particularly summer Saturdays and school holiday weekends, fill up quickly for any professional singer who is in consistent demand.\n\nIf your wedding is 6–9 months away, availability may still exist but your options narrow. Under 3 months and you're into genuinely limited territory at the quality end of the market.\n\nA holding enquiry costs nothing, and most professional singers will confirm availability before you commit. I typically book 12–18 months in advance for peak-season dates across Central Scotland, so it's always worth reaching out early even if you're still in the early stages of planning.",
  },
  {
    question: "What areas in Scotland do you cover as a wedding singer?",
    answer:
      "I am based in Central Scotland and regularly perform at weddings across Glasgow, Edinburgh, Lanarkshire and Stirling. I'm happy to travel further for weddings if required.",
  },
  {
    question: "What if my wedding singer has to travel to my wedding?",
    answer:
      "The first 40 miles of travel are included. For venues further away, travel is charged at 45p per mile.",
  },
  {
    question: "Does a wedding singer normally bring their own equipment?",
    answer:
      "Yes. I bring a full professional PA system suitable for wedding ceremonies and drinks receptions, providing clear, high-quality sound for both indoor and outdoor weddings. All equipment is PAT-tested and I have full public liability insurance.",
  },
  {
    question: "Can I choose my own songs for the wedding ceremony?",
    answer:
      "I perform solo vocals to high-quality backing tracks, with the option to incorporate live accompaniment where suitable. You can choose songs from my repertoire and I may also be able to accommodate special requests depending on preparation time and the availability of backing tracks.",
  },
  {
    question: "Can I book a wedding singer directly without an agency?",
    answer:
      "Yes. Direct-to-artist booking ensures personal communication, simple planning and the best available rates.",
  },
  {
    question: "What kind of packages do wedding singers offer?",
    answer:
      "Wedding singer packages can cover individual parts of your day or combine multiple performance elements. You can book just the ceremony, drinks reception, or dinner separately, or combine them — like ceremony and drinks reception together, or even full-day coverage from ceremony through to evening entertainment. Packages start from £325 and combining elements often gives you better value than booking them separately.",
  },
  {
    question: "What type of music can you perform at weddings?",
    answer:
      "I have a versatile repertoire covering everything from classic wedding favourites to current chart hits, but I've found acoustic versions of well-known songs to be popular with couples and guests. I can tailor my song selections to match your preferences and the mood of your event, whether you want romantic ballads for your ceremony or a more upbeat vibe for later in the day.",
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
      <div className="pt-16">
      {/* Hero */}
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Common Questions &amp; Planning
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed">
            Everything you need to know about booking live music for your Scottish
            wedding or event.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-lg p-6 border border-stone-200">
                <h3 className="font-serif text-[#1a1a1a] text-lg mb-3">{faq.question}</h3>
                <p className="text-[#444444] text-sm leading-relaxed whitespace-pre-line">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
            I&apos;m here to help! Get in touch and I&apos;ll be happy to answer any
            questions about your wedding or event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              location="faq_page_cta"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Get In Touch</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via WhatsApp (1-2 hour response)
              </span>
            </TrackedWhatsAppLink>
            <TrackedEnquiryLink
              location="faq_page_cta"
              className="inline-flex flex-col items-center border border-white text-white hover:bg-white hover:text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Get In Touch</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </TrackedEnquiryLink>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

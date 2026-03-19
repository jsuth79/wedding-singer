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

const faqs = [
  {
    question: "Where are you based and where can you perform?",
    answer:
      "I am based in Central Scotland and regularly perform across Glasgow, Edinburgh, Lanarkshire, and Stirling. I am always happy to travel further afield. Just let me know your venue when you enquire.",
  },
  {
    question: "Can we choose our own songs for the ceremony?",
    answer:
      "Absolutely. You can choose from my extensive repertoire of acoustic classics and modern hits. I may also be able to learn a special song (subject to availability) to make your walk down the aisle or first dance truly personal.",
  },
  {
    question: "Do you provide your own equipment and insurance?",
    answer:
      "Yes. I provide a professional, compact PA system suitable for both indoor and outdoor venues. For your venue's peace of mind, all my equipment is PAT-tested, and I hold full Public Liability Insurance (PLI).",
  },
  {
    question: "What happens when you aren't singing?",
    answer:
      "There's never any 'dead air'. I provide tailored background music during my short breaks to keep the atmosphere seamless, so you don't need to worry about managing a separate playlist.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "I recommend booking as early as possible to secure your preferred date. I'm now taking bookings for 2027, with some 2026 dates still available. Peak wedding season (May-September) tends to book up quickly, so early booking is advisable.",
  },
  {
    question: "What is your repertoire like?",
    answer:
      "I have an extensive repertoire spanning multiple decades and genres, including acoustic covers of contemporary pop, classic love songs, jazz standards, and Scottish traditional music. My setlist is tailored to suit your event and your guests' preferences.",
  },
  {
    question: "Do you offer ceremonies, receptions, or both?",
    answer:
      "I offer packages for ceremonies, drinks receptions, dinner entertainment, and evening celebrations. You can book me for individual parts of your day or combine packages for full-day coverage. The Daytime Package (ceremony + drinks reception) is particularly popular.",
  },
  {
    question: "Can you perform outdoors?",
    answer:
      "Yes! My PA system is suitable for both indoor and outdoor performances. I always have a backup plan in case of technical issues or adverse weather conditions.",
  },
  {
    question: "How long are your performance sets?",
    answer:
      "Performance times vary by package. Ceremony packages typically include 3-4 songs. Drinks reception and dinner packages include two 45-minute sets with breaks in between. Evening packages include one hour of upbeat party songs. I'm happy to discuss custom timings to suit your schedule.",
  },
  {
    question: "What if we want a song that's not in your repertoire?",
    answer:
      "I love learning new songs! If you have a special song in mind, let me know when you enquire. Subject to availability and advance notice, I'm usually happy to learn songs that are meaningful to you.",
  },
  {
    question: "Do you provide a microphone for speeches?",
    answer:
      "Yes, when I'm performing at your event, I can provide microphones for speeches, toasts, and announcements. Just let me know in advance so I can ensure everything is set up properly.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "A deposit is required to secure your booking, with the balance due closer to your event date. Full payment terms will be outlined in your booking contract. I accept bank transfers and other standard payment methods.",
  },
  {
    question: "Do you travel beyond Central Scotland?",
    answer:
      "Absolutely! While I'm based in Central Scotland, I regularly travel throughout Scotland and can travel further afield for weddings and events. All packages include 40 miles travel from Glasgow, with additional mileage charged at 45p per mile.",
  },
  {
    question: "What should we wear - formal or casual?",
    answer:
      "I dress to complement your event. For ceremonies and formal receptions, I typically wear elegant cocktail attire or formal dresses. For more relaxed celebrations, I can dress down accordingly. Let me know your dress code and I'll match the vibe.",
  },
  {
    question: "Can you provide background music between sets?",
    answer:
      "Yes! I provide carefully curated background music during breaks to maintain the atmosphere. I can tailor this to your preferences - whether you want soft acoustic tracks, classic love songs, or upbeat favorites.",
  },
  {
    question: "Are you available for corporate events?",
    answer:
      "Yes! In addition to weddings, I perform at corporate events, private parties, anniversaries, and other celebrations. Get in touch to discuss your event requirements.",
  },
  {
    question: "How do I check your availability?",
    answer:
      "The quickest way is to WhatsApp me on +44 7740 360678 (I typically respond within 1-2 hours), or you can fill out the contact form on my website. Let me know your event date, venue, and which package you're interested in.",
  },
  {
    question: "Do you offer package discounts?",
    answer:
      "Yes! If you book multiple parts of your day (e.g., ceremony AND reception), my combined packages offer better value than booking separately. The Daytime Package and Full Shebang packages are designed to give you the best rates for full-day coverage.",
  },
];

export default function FAQPage() {
  return (
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
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
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
  );
}

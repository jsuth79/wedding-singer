import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Nicola Mason Wedding & Events Singer",
  description: "Privacy policy for Nicola Mason Wedding & Events Singer. How we collect, use and protect your personal information.",
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="py-12 md:py-24 px-6 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
            Privacy Policy
          </h1>
          <p className="text-[#444444]">Effective Date: March 2025</p>
        </div>
      </section>

      <section className="py-12 md:py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-[#444444]">

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">1. Introduction</h2>
            <p className="text-sm leading-relaxed">
              Nicola Mason Wedding &amp; Events Singer (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy of individuals who enquire about our wedding and event vocalist services. This policy explains how we collect and use your personal information when you contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">2. Information We Collect</h2>
            <p className="text-sm leading-relaxed mb-3">
              We collect only the personal information you freely provide to us for the purpose of communicating regarding your event. This may include:
            </p>
            <ul className="text-sm space-y-1 pl-4 list-disc">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Event date and location (if provided)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">3. How We Use Your Information</h2>
            <p className="text-sm leading-relaxed mb-3">We use your information solely to:</p>
            <ul className="text-sm space-y-1 pl-4 list-disc">
              <li>Respond to your enquiries about our vocal services</li>
              <li>Communicate with you regarding the details of your potential event</li>
              <li>Facilitate the provision of our services if a booking is made</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">4. Legal Basis for Processing</h2>
            <p className="text-sm leading-relaxed mb-3">The legal basis for processing your data is:</p>
            <ul className="text-sm space-y-2 pl-4 list-disc">
              <li><span className="text-[#2C2C2C] font-medium">Contractual Necessity:</span> Where it is necessary to take steps at your request prior to entering into a contract.</li>
              <li><span className="text-[#2C2C2C] font-medium">Legitimate Interest:</span> To communicate with potential clients about their event enquiries.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">5. Data Sharing</h2>
            <p className="text-sm leading-relaxed">
              We will not share your personal information with any third parties, except where required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">6. Data Security</h2>
            <p className="text-sm leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorised access, use, or disclosure. As the data collected is minimal, security measures will be proportionate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">7. Data Retention</h2>
            <p className="text-sm leading-relaxed">
              We will retain your personal information for as long as necessary to communicate with you about your event, and/or for as long as is required to fulfil any contractual obligations. After this period, your data will be securely deleted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">8. Your Rights</h2>
            <p className="text-sm leading-relaxed mb-3">
              Under the UK GDPR, which applies in Scotland, you have the following rights:
            </p>
            <ul className="text-sm space-y-2 pl-4 list-disc">
              <li><span className="text-[#2C2C2C] font-medium">Right to Access:</span> You can request a copy of the personal information we hold about you.</li>
              <li><span className="text-[#2C2C2C] font-medium">Right to Rectification:</span> You can ask us to correct any inaccurate or incomplete information.</li>
              <li><span className="text-[#2C2C2C] font-medium">Right to Erasure:</span> You can ask us to delete your personal information.</li>
              <li><span className="text-[#2C2C2C] font-medium">Right to Restriction of Processing:</span> You can ask us to limit how we use your personal information.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">To exercise these rights, please contact us using the details below.</p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">9. Contact Us</h2>
            <p className="text-sm leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, or wish to exercise your data protection rights, please{" "}
              <Link href="/enquiry" className="text-[#C4A882] hover:text-[#A68B5B] underline">
                contact us here
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">10. Changes to this Privacy Policy</h2>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on our website.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

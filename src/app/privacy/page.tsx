import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Nicola Mason Wedding & Events Singer",
  description: "Privacy policy for Nicola Mason Wedding & Events Singer. How we collect, use and protect your personal information.",
  alternates: {
    canonical: "/privacy",
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
          <p className="text-[#444444]">Last updated: 28 March 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-[#444444]">

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">1. Introduction</h2>
            <p className="text-sm leading-relaxed">
              Nicola Mason Wedding &amp; Events Singer (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains what personal information we collect through this website, how we use it, when it is shared, and your rights under UK data protection law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">2. Information We Collect</h2>
            <p className="text-sm leading-relaxed mb-3">
              We collect information in the following ways:
            </p>
            <ul className="text-sm space-y-1 pl-4 list-disc">
              <li>Information you provide in our enquiry form, including your name, email address, phone number, event date, event type, and the message you submit.</li>
              <li>Any additional information you choose to include in your message, such as venue, guest numbers, song preferences, or other event details.</li>
              <li>Usage information collected through cookies and similar technologies, including analytics data about how visitors use the website.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">3. How We Use Your Information</h2>
            <p className="text-sm leading-relaxed mb-3">We use your information to:</p>
            <ul className="text-sm space-y-1 pl-4 list-disc">
              <li>Respond to your enquiries about our vocal services</li>
              <li>Communicate with you regarding the details of your potential event</li>
              <li>Facilitate the provision of our services if a booking is made</li>
              <li>Monitor website traffic and engagement so we can understand how the site is used and improve it over time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">4. Legal Basis for Processing</h2>
            <p className="text-sm leading-relaxed mb-3">The legal basis for processing your data is:</p>
            <ul className="text-sm space-y-2 pl-4 list-disc">
              <li><span className="text-[#2C2C2C] font-medium">Contractual Necessity:</span> Where it is necessary to take steps at your request prior to entering into a contract.</li>
              <li><span className="text-[#2C2C2C] font-medium">Legitimate Interest:</span> To communicate with potential clients about their event enquiries.</li>
              <li><span className="text-[#2C2C2C] font-medium">Legitimate Interest:</span> To understand how visitors use our website and improve its performance and content.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">5. Data Sharing</h2>
            <p className="text-sm leading-relaxed mb-3">
              We may share personal information with trusted third-party service providers where necessary to operate the website and respond to enquiries. These currently include:
            </p>
            <ul className="text-sm space-y-2 pl-4 list-disc">
              <li><span className="text-[#2C2C2C] font-medium">Resend:</span> used to deliver website enquiry emails to us.</li>
              <li><span className="text-[#2C2C2C] font-medium">Google Analytics:</span> used to collect website usage information.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              We may also disclose information where required to comply with applicable law, regulation, legal process, or to protect our legal rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">6. Cookies and Analytics</h2>
            <p className="text-sm leading-relaxed">
              This website uses Google Analytics to help us understand how visitors use the site, such as which pages are visited and how visitors arrive here. Google Analytics may use cookies or similar technologies to collect information such as your IP address, browser type, device information, and on-site interactions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">7. Data Security</h2>
            <p className="text-sm leading-relaxed">
              We take reasonable technical and organisational measures to protect personal information from unauthorised access, use, loss, or disclosure. No method of transmission or storage is completely secure, but we aim to apply safeguards appropriate to the nature of the information we hold.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">8. Data Retention</h2>
            <p className="text-sm leading-relaxed">
              We keep personal information only for as long as reasonably necessary for the purposes described in this policy, including responding to your enquiry, managing any booking, meeting legal, tax, accounting, or contractual obligations, and resolving disputes where required.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">9. Your Rights</h2>
            <p className="text-sm leading-relaxed mb-3">
              Under the UK GDPR, which applies in Scotland, you have the following rights:
            </p>
            <ul className="text-sm space-y-2 pl-4 list-disc">
              <li><span className="text-[#2C2C2C] font-medium">Right to Access:</span> You can request a copy of the personal information we hold about you.</li>
              <li><span className="text-[#2C2C2C] font-medium">Right to Rectification:</span> You can ask us to correct any inaccurate or incomplete information.</li>
              <li><span className="text-[#2C2C2C] font-medium">Right to Erasure:</span> You can ask us to delete your personal information.</li>
              <li><span className="text-[#2C2C2C] font-medium">Right to Restriction of Processing:</span> You can ask us to limit how we use your personal information.</li>
              <li><span className="text-[#2C2C2C] font-medium">Right to Object:</span> You can object to certain processing based on legitimate interests.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              You also have the right to complain to the Information Commissioner&apos;s Office (ICO) if you believe your data has been handled unlawfully.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">10. Contact Us</h2>
            <p className="text-sm leading-relaxed mb-3">
              If you have any questions or concerns about this Privacy Policy, or wish to exercise your data protection rights, you can contact us at{" "}
              <a href="mailto:privacy@nicolamason.co.uk" className="text-[#C4A882] hover:text-[#A68B5B] underline">
                privacy@nicolamason.co.uk
              </a>
              .
            </p>
            <p className="text-sm leading-relaxed">
              You can also{" "}
              <Link href="/enquiry" className="text-[#C4A882] hover:text-[#A68B5B] underline">
                use the enquiry form here
              </Link>
              {" "}for general enquiries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#1a1a1a] mb-3">11. Changes to this Privacy Policy</h2>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, together with the updated revision date.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

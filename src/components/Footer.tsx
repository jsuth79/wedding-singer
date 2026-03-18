import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Emma Rose</h3>
            <p className="text-sm leading-relaxed">
              Professional wedding and event singer bringing elegance and
              emotion to your special occasions across the UK.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/weddings" className="hover:text-rose-400 transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-rose-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/enquire" className="hover:text-rose-400 transition-colors">
                  Enquire
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm">
              <li>hello@emmarosesinger.com</li>
              <li>+44 (0) 7700 900000</li>
              <li>Based in London, UK</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Emma Rose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

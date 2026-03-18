import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                Your Voice for Life&apos;s Most Precious Moments
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                With over a decade of experience performing at weddings and
                events across the UK, I bring a unique blend of classical
                training and contemporary style to every performance. My passion
                is creating an atmosphere that perfectly complements your
                special day.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Whether you dream of a traditional church ceremony, an intimate
                garden gathering, or a glamorous reception, I work closely with
                you to curate a song list that tells your story and moves your
                guests.
              </p>
              <Link
                href="/enquire"
                className="inline-block text-rose-600 border-b-2 border-rose-600 pb-1 hover:text-rose-700 hover:border-rose-700 transition-colors"
              >
                Get in touch to discuss your event
              </Link>
            </div>
            <div className="relative">
              {/* Placeholder for about image */}
              <div className="aspect-[4/5] bg-stone-200 rounded-lg" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-rose-100 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800">
              Tailored to Your Occasion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/weddings" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[16/10] bg-stone-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-rose-200 transition-colors">
                    Weddings
                  </h3>
                  <p className="text-stone-200 text-sm">
                    Ceremonies, drinks receptions &amp; evening entertainment
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/events" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[16/10] bg-stone-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-rose-200 transition-colors">
                    Events
                  </h3>
                  <p className="text-stone-200 text-sm">
                    Corporate functions, private parties &amp; special occasions
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-600 text-sm uppercase tracking-[0.2em] mb-4">
            Kind Words
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-16">
            What Couples Say
          </h2>

          <div className="space-y-12">
            <blockquote className="text-xl md:text-2xl text-stone-600 italic leading-relaxed">
              &ldquo;Emma&apos;s voice during our ceremony was absolutely breathtaking.
              There wasn&apos;t a dry eye in the venue. She made our day truly
              magical.&rdquo;
            </blockquote>
            <div>
              <p className="text-stone-800 font-medium">Sarah &amp; James</p>
              <p className="text-stone-500 text-sm">Married at Highclere Castle</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
            I&apos;d love to hear about your upcoming event. Get in touch to check
            availability and discuss how we can make your day unforgettable.
          </p>
          <Link
            href="/enquire"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors"
          >
            Make an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}

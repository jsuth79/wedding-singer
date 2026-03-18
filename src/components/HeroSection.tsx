import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-stone-100">
      {/* Background placeholder - replace with actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-placeholder.jpg')",
          backgroundColor: "#d4c5b9",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-rose-200 text-sm uppercase tracking-[0.3em] mb-4">
          Professional Wedding &amp; Event Singer
        </p>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Creating Magical Moments Through Music
        </h1>
        <p className="text-xl text-stone-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          From intimate ceremonies to grand celebrations, I bring heart and soul
          to every performance, making your special day truly unforgettable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/enquire"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-sm uppercase tracking-wider transition-colors"
          >
            Book Your Date
          </Link>
          <Link
            href="/weddings"
            className="inline-block border border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-sm uppercase tracking-wider transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

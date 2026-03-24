import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-40 px-6 bg-[#F5F1EB]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Page Not Found
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
            Oops — wrong note
          </h1>
          <p className="text-xl text-[#444444] leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
            you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Go to Homepage</span>
            </Link>
            <Link
              href="/enquiry"
              className="inline-flex flex-col items-center border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

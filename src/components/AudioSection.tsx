import Link from "next/link";

const soundcloudTracks = [
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/dont-know-why-norah-jones-2",
    title: "Don't Know Why – Norah Jones",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/how-long-will-i-love-you-ellie-goulding-4",
    title: "How Long Will I Love You – Ellie Goulding",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/landslide-fleetwood-mac-6",
    title: "Landslide – Fleetwood Mac",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/man-i-need-raye",
    title: "Man I Need – Olivia Dean",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/heaven-bryan-adams-3",
    title: "Heaven – Bryan Adams",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/glasgow-no-place-like-home-jessie-buckley-at-oran-mor-1",
    title: "Glasgow (No Place Like Home) – Jessie Buckley",
    pill: "Wedding Ceremony",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-cant-help-falling-in-love",
    title: "I Can't Help Falling In Love – Elvis Presley",
    pill: "Wedding Ceremony",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/at-last-etta-james-at-coats-paisley-2",
    title: "At Last – Etta James",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/what-a-wonderful-world-louis-armstrong-3",
    title: "What a Wonderful World – Louis Armstrong",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/love-at-first-sight-kylie-minogue-4",
    title: "Love at First Sight – Kylie Minogue",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/everything-michael-buble-5",
    title: "Everything – Michael Bublé",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/for-good-wicked-2",
    title: "For Good – Wicked",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-cant-make-you-love-me-bonnie-raitt-1",
    title: "I Can't Make You Love Me – Bonnie Raitt",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-get-to-love-you-ruelle",
    title: "I Get to Love You – Ruelle",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/caledonia-dougie-maclean",
    title: "Caledonia – Dougie MacLean",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/true-colours-cindy-lauper",
    title: "True Colours – Cyndi Lauper",
  },
];

export default function AudioSection() {
  return (
    <section id="listen" className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Listen For Yourself
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
            Live Music to Match the Moment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {soundcloudTracks.map((track) => (
            <div key={track.embedUrl} className="flex items-center gap-3">
              <iframe
                title={track.title}
                width="100%"
                height="20"
                scrolling="no"
                allow="autoplay"
                src={`${track.embedUrl}&color=%23C4A882&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
                className="rounded-lg flex-1 min-w-0"
              />
              {track.pill && (
                track.pill === "Wedding Ceremony"
                  ? <Link href="/wedding-ceremony-singer-glasgow" className="shrink-0 px-2.5 py-0.5 bg-[#C4A882]/15 text-[#C4A882] text-xs rounded-full border border-[#C4A882]/30 whitespace-nowrap hover:bg-[#C4A882]/30 transition-colors">{track.pill}</Link>
                  : <span className="shrink-0 px-2.5 py-0.5 bg-[#C4A882]/15 text-[#C4A882] text-xs rounded-full border border-[#C4A882]/30 whitespace-nowrap">{track.pill}</span>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/#videos" className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider">
            View More Live Performances &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

declare global {
  interface Window {
    SC: {
      Widget: ((iframe: HTMLIFrameElement) => {
        bind: (event: string, callback: () => void) => void;
      }) & {
        Events: { PLAY: string; PAUSE: string; FINISH: string };
      };
    };
  }
}

const columns: { label: string; tracks: { embedUrl: string; title: string }[] }[] = [
  {
    label: "Aisle Walk",
    tracks: [
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/how-long-will-i-love-you-ellie-goulding-4",
        title: "How Long Will I Love You – Ellie Goulding",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-get-to-love-you-ruelle",
        title: "I Get to Love You – Ruelle",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-cant-help-falling-in-love",
        title: "I Can't Help Falling In Love – Elvis Presley",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/lover-taylor-swift-8",
        title: "Lover – Taylor Swift",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/iris-goo-goo-dolls-5",
        title: "Iris – Goo Goo Dolls",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/feels-like-home-chantal-kreviazuk-2",
        title: "Feels Like Home – Chantal Kreviazuk",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/have-i-you-lately-rod-stewart-4",
        title: "Have I Told You Lately – Rod Stewart",
      },
    ],
  },
  {
    label: "Signing the Register",
    tracks: [
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/misty-ella-fitzgerald-1",
        title: "Misty – Ella Fitzgerald",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/at-last-etta-james-at-coats-paisley-2",
        title: "At Last – Etta James",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/heaven-bryan-adams-3",
        title: "Heaven – Bryan Adams",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/for-good-wicked-2",
        title: "For Good – Wicked",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/a-million-dreams-the-greatest-showman-1",
        title: "A Million Dreams – The Greatest Showman",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/from-this-moment-shania-twain-3",
        title: "From This Moment – Shania Twain",
      },
    ],
  },
  {
    label: "Ceremony Exit",
    tracks: [
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/man-i-need-raye",
        title: "Man I Need – Olivia Dean",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/love-at-first-sight-kylie-minogue-4",
        title: "Love at First Sight – Kylie Minogue",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/dont-worry-be-happy-bobby-mcferrin-2",
        title: "Don't Worry, Be Happy – Bobby McFerrin",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/the-promise-girls-aloud",
        title: "The Promise – Girls Aloud",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/love-story-taylor-swift-7",
        title: "Love Story – Taylor Swift",
      },
      {
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/signed-sealed-delivered-stevie-wonder-6",
        title: "Signed, Sealed, Delivered – Stevie Wonder",
      },
    ],
  },
];

const moreTracks: { embedUrl: string; title: string }[] = [
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/i-cant-make-you-love-me-bonnie-raitt-1",
    title: "I Can't Make You Love Me – Bonnie Raitt",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/dont-know-why-norah-jones-2",
    title: "Don't Know Why – Norah Jones",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/landslide-fleetwood-mac-6",
    title: "Landslide – Fleetwood Mac",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/what-a-wonderful-world-louis-armstrong-3",
    title: "What a Wonderful World – Louis Armstrong",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/glasgow-no-place-like-home-jessie-buckley-at-oran-mor-1",
    title: "Glasgow (No Place Like Home) – Jessie Buckley",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/everything-michael-buble-5",
    title: "Everything – Michael Bublé",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/caledonia-dougie-maclean",
    title: "Caledonia – Dougie MacLean",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/true-colours-cindy-lauper",
    title: "True Colours – Cyndi Lauper",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/both-sides-now-joni-mitchel-1",
    title: "Both Sides Now – Joni Mitchell",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/misty-ella-fitzgerald-1",
    title: "Misty – Ella Fitzgerald",
  },
  {
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nic-mason-2/mamma-mia-abba-5",
    title: "Mamma Mia – ABBA",
  },
];

const allTracks = [...columns.flatMap((col) => col.tracks), ...moreTracks];

export default function AudioSection() {
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    script.onload = () => {
      iframeRefs.current.forEach((iframe, i) => {
        if (!iframe) return;
        const widget = window.SC.Widget(iframe);
        const title = allTracks[i].title;
        let isPlaying = false;
        widget.bind(window.SC.Widget.Events.PLAY, () => {
          if (!isPlaying) {
            trackEvent.playSoundCloud(title);
            isPlaying = true;
          }
        });
        widget.bind(window.SC.Widget.Events.PAUSE, () => { isPlaying = false; });
        widget.bind(window.SC.Widget.Events.FINISH, () => { isPlaying = false; });
      });
    };
    document.head.appendChild(script);
  }, []);

  let trackIndex = 0;

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
          <p className="text-[#444444] mt-4">
            Inspired by songs previous couples have chosen — each part of your day can be tailored to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.label}>
              <p className="text-[#C4A882] text-xs uppercase tracking-[0.2em] mb-4 text-center">{col.label}</p>
              <div className="flex flex-col gap-4">
                {col.tracks.map((track) => {
                  const i = trackIndex++;
                  return (
                    <div key={track.embedUrl}>
                      <iframe
                        ref={(el) => { iframeRefs.current[i] = el; }}
                        title={track.title}
                        width="100%"
                        height="20"
                        scrolling="no"
                        allow="autoplay"
                        src={`${track.embedUrl}&color=%23C4A882&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&api=true`}
                        className="rounded-lg"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-[#C4A882] text-xs uppercase tracking-[0.2em] mb-6 text-center">More From the Repertoire</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moreTracks.map((track) => {
              const i = trackIndex++;
              return (
                <div key={track.embedUrl}>
                  <iframe
                    ref={(el) => { iframeRefs.current[i] = el; }}
                    title={track.title}
                    width="100%"
                    height="20"
                    scrolling="no"
                    allow="autoplay"
                    src={`${track.embedUrl}&color=%23C4A882&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&api=true`}
                    className="rounded-lg"
                  />
                </div>
              );
            })}
          </div>
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

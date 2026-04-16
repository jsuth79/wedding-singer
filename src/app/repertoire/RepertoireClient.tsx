"use client";

import Link from "next/link";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";

const songs: { song: string; artist: string }[] = [
  { song: "Dancing Queen", artist: "ABBA" },
  { song: "Gimme Gimme Gimme", artist: "ABBA" },
  { song: "Mamma Mia", artist: "ABBA" },
  { song: "Waterloo", artist: "ABBA" },
  { song: "Make You Feel My Love", artist: "Adele" },
  { song: "Northern Star", artist: "Amazons" },
  { song: "This Is the Life", artist: "Amy Macdonald" },
  { song: "Complicated", artist: "Avril Lavigne" },
  { song: "Don't Worry Be Happy", artist: "Bobby McFerrin" },
  { song: "Living on a Prayer", artist: "Bon Jovi" },
  { song: "Marry You", artist: "Bruno Mars" },
  { song: "Heaven", artist: "Bryan Adams" },
  { song: "Dance With Me", artist: "Caleb and Kelsey" },
  { song: "This I Promise You", artist: "Caleb and Kelsey / Donna Taggart" },
  { song: "Young Hearts Run Free", artist: "Candi Staton" },
  { song: "Lovefool", artist: "Cardigans" },
  { song: "Call Me Maybe", artist: "Carly Rae Jepsen" },
  { song: "Natural Woman", artist: "Carole King" },
  { song: "You've Got a Friend", artist: "Carole King" },
  { song: "Every Time We Touch", artist: "Cascada" },
  { song: "Feels Like Home", artist: "Chantel" },
  { song: "Pink Pony Club", artist: "Chappell Roan" },
  { song: "A Thousand Years", artist: "Christina Perri" },
  { song: "I Guess I'm in Love", artist: "Clinton Kane" },
  { song: "Yellow", artist: "Coldplay" },
  { song: "Stupid Cupid", artist: "Connie Francis" },
  { song: "Put Your Records On", artist: "Corinne Bailey Rae" },
  { song: "True Colours", artist: "Cyndi Lauper" },
  { song: "9 to 5", artist: "Dolly Parton" },
  { song: "Hot Stuff", artist: "Donna Summer" },
  { song: "Dream a Little Dream of Me", artist: "Doris Day" },
  { song: "Caledonia", artist: "Dougie McLean" },
  { song: "Levitating", artist: "Dua Lipa" },
  { song: "Cheek to Cheek", artist: "Ella Fitzgerald" },
  { song: "Misty", artist: "Ella Fitzgerald" },
  { song: "Yours", artist: "Ella Henderson" },
  { song: "How Long Will I Love You", artist: "Ellie Goulding" },
  { song: "I'm Still Standing", artist: "Elton John" },
  { song: "Your Song", artist: "Elton John / Ellie Goulding" },
  { song: "Can't Help Falling in Love", artist: "Elvis Presley" },
  { song: "At Last", artist: "Etta James" },
  { song: "Dreams", artist: "Fleetwood Mac" },
  { song: "Songbird", artist: "Fleetwood Mac" },
  { song: "Landslide", artist: "Fleetwood Mac / Lady A" },
  { song: "Fly Me to the Moon", artist: "Frank Sinatra" },
  { song: "Can't Take My Eyes Off You", artist: "Frankie Valli" },
  { song: "Freed from Desire", artist: "Gala" },
  { song: "Belter", artist: "Gerry Cinnamon" },
  { song: "The Promise", artist: "Girls Aloud" },
  { song: "I Will Survive", artist: "Gloria Gaynor" },
  { song: "Iris", artist: "Goo Goo Dolls" },
  { song: "Blame It on the Boogie", artist: "Jackson Five" },
  { song: "Glasgow", artist: "Jessie Buckley" },
  { song: "All of Me", artist: "John Legend" },
  { song: "Big Yellow Taxi", artist: "Joni Mitchell" },
  { song: "Both Sides Now", artist: "Joni Mitchell" },
  { song: "Don't Stop Believin'", artist: "Journey" },
  { song: "Somewhere Only We Know", artist: "Keane" },
  { song: "Black Horse and the Cherry Tree", artist: "KT Tunstall" },
  { song: "City of Stars", artist: "La La Land" },
  { song: "Always Remember Us This Way", artist: "Lady Gaga" },
  { song: "I Dreamed a Dream", artist: "Les Misérables" },
  { song: "On My Own", artist: "Les Misérables" },
  { song: "It's My Party", artist: "Lesley Gore" },
  { song: "Stay (I Missed You)", artist: "Lisa Loeb" },
  { song: "What a Wonderful World", artist: "Louis Armstrong" },
  { song: "More Than Friends", artist: "Lu Saint" },
  { song: "My Guy", artist: "Mary Wells" },
  { song: "Everything", artist: "Michael Bublé" },
  { song: "Flowers", artist: "Miley Cyrus" },
  { song: "Set You Free", artist: "N-Trance" },
  { song: "A Life That's Good", artist: "Nashville" },
  { song: "This Will Be", artist: "Natalie Cole" },
  { song: "Torn", artist: "Natalie Imbruglia" },
  { song: "Don't Know Why", artist: "Norah Jones" },
  { song: "Wonderwall", artist: "Oasis" },
  { song: "Man I Need", artist: "Olivia Dean" },
  { song: "Happy", artist: "Pharrell Williams" },
  { song: "Hey There Delilah", artist: "Plain White T's" },
  { song: "I'm So Excited", artist: "Pointer Sisters" },
  { song: "Crazy Little Thing Called Love", artist: "Queen" },
  { song: "Don't Stop Me Now", artist: "Queen" },
  { song: "Creep", artist: "Radiohead" },
  { song: "I Think It's Going to Rain Today", artist: "Randy Newman" },
  { song: "We Found Love", artist: "Rihanna" },
  { song: "Have I Told You Lately", artist: "Rod Stewart" },
  { song: "I Get to Love You", artist: "Ruelle" },
  { song: "Send Me on My Way", artist: "Rusted Root" },
  { song: "Reach", artist: "S Club 7" },
  { song: "Espresso", artist: "Sabrina Carpenter" },
  { song: "I Choose You", artist: "Sara Bareilles" },
  { song: "From This Moment", artist: "Shania Twain" },
  { song: "Whose Bed Have Your Boots Been Under", artist: "Shania Twain" },
  { song: "You're Still The One", artist: "Shania Twain" },
  { song: "Kiss Me", artist: "Sixpence None the Richer" },
  { song: "Turning Page", artist: "Sleeping at Last" },
  { song: "Murder on the Dancefloor", artist: "Sophie Ellis-Bextor" },
  { song: "Nothing's Gonna Stop Us Now", artist: "Starship" },
  { song: "Isn't She Lovely", artist: "Stevie Wonder" },
  { song: "Signed Sealed Delivered", artist: "Stevie Wonder" },
  { song: "Blank Space", artist: "Taylor Swift" },
  { song: "Fate of Ophelia", artist: "Taylor Swift" },
  { song: "Love Story", artist: "Taylor Swift" },
  { song: "Timeless", artist: "Taylor Swift" },
  { song: "Da Doo Ron Ron", artist: "The Crystals" },
  { song: "A Million Dreams", artist: "The Greatest Showman" },
  { song: "There She Goes", artist: "The Las" },
  { song: "Ho Hey", artist: "The Lumineers" },
  { song: "Be My Baby", artist: "The Ronettes" },
  { song: "I Think We're Alone Now", artist: "Tiffany" },
  { song: "The Best", artist: "Tina Turner / Schitt's Creek" },
  { song: "Someone Like You", artist: "Van Morrison" },
  { song: "Defying Gravity", artist: "Wicked" },
  { song: "For Good", artist: "Wicked" },
  { song: "Try Everything", artist: "Zootopia" },
];

export default function RepertoireClient() {
  return (
    <>
      <section className="py-12 md:py-20 px-6 bg-[#FAF8F3]">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 md:gap-x-12">
            {songs.map((item, i) => (
              <div key={i} className="flex justify-between items-baseline py-3 gap-4 border-b border-stone-200">
                <span className="text-[#1a1a1a] text-sm">{item.song}</span>
                <span className="text-[#888888] text-sm text-right shrink-0">{item.artist}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 bg-[#F5F1EB]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Planning Your Music
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-4">
            Let&apos;s shape the music for your day
          </h2>
          <p className="text-[#444444] leading-relaxed mb-8 max-w-xl mx-auto">
            If you&apos;ve heard something you like or have a particular style in mind, I&apos;m always happy to chat it through and help you find what works — whether that&apos;s choosing the right songs or shaping the music for your ceremony, drinks or wedding meal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              location="repertoire_cta"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm tracking-wider transition-colors rounded-[6px]"
            >
              <span className="font-medium text-base">Chat About Your Song Ideas</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                Message on WhatsApp — quick replies
              </span>
            </TrackedWhatsAppLink>
            <TrackedEnquiryLink
              location="repertoire_cta"
              className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-10 py-4 text-sm tracking-wider transition-colors rounded-[6px]"
            >
              <span className="font-medium text-base">Check Availability & Enquire</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                Tell me about your day — I&apos;ll reply personally
              </span>
            </TrackedEnquiryLink>
          </div>
          <div className="mt-8">
            <Link
              href="/weddings"
              className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider"
            >
              See how this fits into your day →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

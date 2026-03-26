"use client";

import { useState } from "react";
import Link from "next/link";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import TrackedEnquiryLink from "@/components/TrackedEnquiryLink";

const songs = [
  { song: "500 Miles", artist: "The Proclaimers", category: "Indie/Alternative/Chill" },
  { song: "9 To 5", artist: "Dolly Parton", category: "Party/Dance Floor" },
  { song: "A Life That's Good", artist: "Nashville", category: "Indie/Alternative/Chill" },
  { song: "A Million Dreams", artist: "The Greatest Showman", category: "Ceremony/Romantic" },
  { song: "A Whole New World", artist: "Disney", category: "Ceremony/Romantic" },
  { song: "ABBA Medley", artist: "Abba", category: "ABBA Medleys & Group Performances" },
  { song: "Addicted To You", artist: "Avicii", category: "Indie/Alternative/Chill" },
  { song: "All I Want for Christmas Is You", artist: "Mariah Carey", category: "Christmas" },
  { song: "All Of Me", artist: "John Legend", category: "Ceremony/Romantic" },
  { song: "Always Remember Us This Way", artist: "Lady Gaga", category: "Ceremony/Romantic" },
  { song: "Anniversary Waltz", artist: "Traditional", category: "Vintage/Swing/Classic" },
  { song: "As If We Never Said Goodbye", artist: "Sunset Boulevard", category: "Musicals/Show Tunes" },
  { song: "At Last", artist: "Etta James", category: "Ceremony/Romantic" },
  { song: "Auld Lang Syne", artist: "Robert Burns", category: "Scottish/Traditional" },
  { song: "Baby Love", artist: "The Supremes", category: "Vintage/Swing/Classic" },
  { song: "Be My Baby", artist: "The Ronettes", category: "Vintage/Swing/Classic" },
  { song: "Because You Loved Me", artist: "Celine Dion", category: "Ceremony/Romantic" },
  { song: "Belter", artist: "Gerry Cinnamon", category: "Indie/Alternative/Chill" },
  { song: "Big Yellow Taxi", artist: "Joni Mitchell", category: "Indie/Alternative/Chill" },
  { song: "Black Horse and The Cherry Tree", artist: "KT Tunstall", category: "Indie/Alternative/Chill" },
  { song: "Blame It On The Boogie", artist: "Jackson Five", category: "Party/Dance Floor" },
  { song: "Blank Space", artist: "Taylor Swift", category: "Indie/Alternative/Chill" },
  { song: "Blue Christmas", artist: "Elvis", category: "Christmas" },
  { song: "Both Sides Now", artist: "Joni Mitchell", category: "Indie/Alternative/Chill" },
  { song: "Brown Eyed Girl", artist: "Van Morrison", category: "Party/Dance Floor" },
  { song: "Caledonia", artist: "Dougie McLean", category: "Indie/Alternative/Chill" },
  { song: "Call Me Maybe", artist: "Carly Rae Jepsen", category: "Party/Dance Floor" },
  { song: "Can You Feel The Love Tonight", artist: "Elton John", category: "Ceremony/Romantic" },
  { song: "Can't Help Falling In Love", artist: "Elvis", category: "Ceremony/Romantic" },
  { song: "Can't Take My Eyes Off You", artist: "Frankie Valli", category: "Ceremony/Romantic" },
  { song: "Change The World", artist: "Eric Clapton", category: "Speciality/Add-ons" },
  { song: "Christmas (Baby Please Come Home)", artist: "Michael Bublé", category: "Christmas" },
  { song: "City Of Stars", artist: "La La Land", category: "Ceremony/Romantic" },
  { song: "Crazy Little Thing Called Love", artist: "Queen", category: "Party/Dance Floor" },
  { song: "Da Doo Ron Ron", artist: "The Crystals", category: "Vintage/Swing/Classic" },
  { song: "Dance With Me", artist: "Caleb and Kelsey", category: "Ceremony/Romantic" },
  { song: "Dancing In The Dark", artist: "Bruce Springsteen", category: "Party/Dance Floor" },
  { song: "Dancing In The Street", artist: "Martha and The Vandellas", category: "Vintage/Swing/Classic" },
  { song: "Dancing Queen", artist: "Abba", category: "Party/Dance Floor" },
  { song: "December 1963", artist: "Frankie Valli", category: "ABBA Medleys & Group Performances" },
  { song: "Defying Gravity", artist: "Wicked", category: "Musicals/Show Tunes" },
  { song: "Disco Inferno", artist: "The Trammps", category: "Party/Dance Floor" },
  { song: "DJ Sammy - Heaven (Dance Mix)", artist: "DJ Sammy", category: "Party/Dance Floor" },
  { song: "Do They Know It's Christmas", artist: "Band Aid", category: "Christmas" },
  { song: "Do You Know The Way To San Jose", artist: "Dionne Warwick", category: "Vintage/Swing/Classic" },
  { song: "Does Your Mother Know", artist: "Abba", category: "ABBA Medleys & Group Performances" },
  { song: "Domino", artist: "Jessie J", category: "Speciality/Add-ons" },
  { song: "Don't Dream It's Over", artist: "Crowded House", category: "Indie/Alternative/Chill" },
  { song: "Don't Know Why", artist: "Norah Jones", category: "Ceremony/Romantic" },
  { song: "Don't Leave Me This Way", artist: "Thelma Houston", category: "Speciality/Add-ons" },
  { song: "Don't Stop Believing", artist: "Journey", category: "Party/Dance Floor" },
  { song: "Don't Stop Me Now", artist: "Queen", category: "Party/Dance Floor" },
  { song: "Don't Worry Be Happy", artist: "Bobby McFerrin", category: "Indie/Alternative/Chill" },
  { song: "Dreams", artist: "Fleetwood Mac", category: "Indie/Alternative/Chill" },
  { song: "Dreams", artist: "The Cranberries", category: "Indie/Alternative/Chill" },
  { song: "Espresso", artist: "Sabrina Carpenter", category: "Indie/Alternative/Chill" },
  { song: "Everlasting Love", artist: "Love Affair", category: "Ceremony/Romantic" },
  { song: "Every Time We Touch", artist: "Cascada", category: "Party/Dance Floor" },
  { song: "Everything", artist: "Michael Bublé", category: "Ceremony/Romantic" },
  { song: "Fairytale of New York", artist: "The Pogues", category: "Christmas" },
  { song: "Feels Like Home", artist: "Chantel Kreviazuk", category: "Ceremony/Romantic" },
  { song: "Fields Of Gold", artist: "Eva Cassidy", category: "Ceremony/Romantic" },
  { song: "Flowers", artist: "Miley Cyrus", category: "Indie/Alternative/Chill" },
  { song: "Fly Me To The Moon", artist: "Frank Sinatra", category: "Vintage/Swing/Classic" },
  { song: "Footloose", artist: "Kenny Loggins", category: "Party/Dance Floor" },
  { song: "For Good", artist: "Wicked", category: "Musicals/Show Tunes" },
  { song: "Freed From Desire", artist: "Gala", category: "Party/Dance Floor" },
  { song: "From This Moment", artist: "Shania Twain", category: "Ceremony/Romantic" },
  { song: "Get Happy", artist: "Jane Horrocks", category: "Party/Dance Floor" },
  { song: "Gimme Gimme Gimme", artist: "Abba", category: "Party/Dance Floor" },
  { song: "Glasgow", artist: "Jessie Buckley", category: "Scottish/Traditional" },
  { song: "Go Your Own Way", artist: "Fleetwood Mac", category: "Indie/Alternative/Chill" },
  { song: "Good Morning Baltimore", artist: "Hairspray", category: "Musicals/Show Tunes" },
  { song: "Happy", artist: "Pharrell Williams", category: "Party/Dance Floor" },
  { song: "Have I Told You Lately", artist: "Rod Stewart", category: "Ceremony/Romantic" },
  { song: "Have Yourself a Merry Little Christmas", artist: "Frank Sinatra", category: "Christmas" },
  { song: "Heather On The Hill", artist: "Nathan Evans", category: "Scottish/Traditional" },
  { song: "Heaven", artist: "Bryan Adams", category: "Ceremony/Romantic" },
  { song: "Heaven is a Place on Earth", artist: "Belinda Carlisle", category: "Party/Dance Floor" },
  { song: "Her Little Man", artist: "Caleb and Kelsey", category: "Ceremony/Romantic" },
  { song: "Hey There Delilah", artist: "Plain White Ts", category: "Ceremony/Romantic" },
  { song: "Ho Hey", artist: "The Lumineers", category: "Party/Dance Floor" },
  { song: "Hold My Hand", artist: "Jess Glynne", category: "Speciality/Add-ons" },
  { song: "Hot Stuff", artist: "Donna Summer", category: "Party/Dance Floor" },
  { song: "Hotel Song", artist: "Regina Spektor", category: "Indie/Alternative/Chill" },
  { song: "How Long Will I Love You", artist: "Ellie Goulding", category: "Ceremony/Romantic" },
  { song: "I Can't Make You Love Me", artist: "Bonnie Raitt", category: "Ceremony/Romantic" },
  { song: "I Choose You", artist: "Sara Bareilles", category: "Ceremony/Romantic" },
  { song: "I Dreamed A Dream", artist: "Les Misérables", category: "Musicals/Show Tunes" },
  { song: "I Feel The Earth Move", artist: "Carole King", category: "Vintage/Swing/Classic" },
  { song: "I Get To Love You", artist: "Ruelle", category: "Ceremony/Romantic" },
  { song: "I Guess I'm In Love", artist: "Clinton Kane", category: "Ceremony/Romantic" },
  { song: "I Only Want To Be With You", artist: "Dusty Springfield", category: "Vintage/Swing/Classic" },
  { song: "I Think It's Going To Rain Today", artist: "Randy Newman", category: "Ceremony/Romantic" },
  { song: "I Think We're Alone Now", artist: "Tiffany", category: "Vintage/Swing/Classic" },
  { song: "I Wanna Dance With Somebody", artist: "Whitney Houston", category: "Party/Dance Floor" },
  { song: "I Will Survive", artist: "Gloria Gaynor", category: "Party/Dance Floor" },
  { song: "I'm So Excited", artist: "Pointer Sisters", category: "Party/Dance Floor" },
  { song: "I'm Still Standing", artist: "Elton John", category: "Party/Dance Floor" },
  { song: "Iris", artist: "Goo Goo Dolls", category: "Ceremony/Romantic" },
  { song: "Islands In The Stream", artist: "Kenny Rogers & Dolly Parton", category: "ABBA Medleys & Group Performances" },
  { song: "Isn't She Lovely", artist: "Stevie Wonder", category: "Ceremony/Romantic" },
  { song: "It Had To Be You", artist: "Betty Hutton", category: "Ceremony/Romantic" },
  { song: "It's My Party", artist: "Lesley Gore", category: "Vintage/Swing/Classic" },
  { song: "It's the Most Wonderful Time of the Year", artist: "Andy Williams", category: "Christmas" },
  { song: "Johnny Be Goode", artist: "Chuck Berry", category: "Party/Dance Floor" },
  { song: "Jolene", artist: "Dolly Parton", category: "Vintage/Swing/Classic" },
  { song: "Killing Me Softly", artist: "Roberta Flack", category: "Indie/Alternative/Chill" },
  { song: "Kiss Me", artist: "Sixpence None The Richer", category: "Ceremony/Romantic" },
  { song: "Landslide", artist: "Fleetwood Mac", category: "Ceremony/Romantic" },
  { song: "Landslide", artist: "Lady A", category: "Ceremony/Romantic" },
  { song: "Last Christmas", artist: "Wham!", category: "Christmas" },
  { song: "Leave The Door Open", artist: "Bruno Mars", category: "ABBA Medleys & Group Performances" },
  { song: "Let It Go", artist: "Frozen", category: "Musicals/Show Tunes" },
  { song: "Let's Stay Together", artist: "Al Green", category: "Ceremony/Romantic" },
  { song: "Levitating", artist: "Dua Lipa", category: "Party/Dance Floor" },
  { song: "Levitating", artist: "Dua Lipa", category: "ABBA Medleys & Group Performances" },
  { song: "Life With You", artist: "The Proclaimers", category: "Ceremony/Romantic" },
  { song: "Linger", artist: "The Cranberries", category: "Indie/Alternative/Chill" },
  { song: "Living On a Prayer", artist: "Bon Jovi", category: "Party/Dance Floor" },
  { song: "Loch Lomond", artist: "Runrig", category: "Scottish/Traditional" },
  { song: "Love At First Sight", artist: "Kylie Minogue", category: "Ceremony/Romantic" },
  { song: "Love Is an Open Door", artist: "Disney Frozen", category: "Ceremony/Romantic" },
  { song: "Love On Top", artist: "Beyoncé", category: "Ceremony/Romantic" },
  { song: "Love On Top", artist: "Beyoncé", category: "ABBA Medleys & Group Performances" },
  { song: "Love Story", artist: "Taylor Swift", category: "Ceremony/Romantic" },
  { song: "Love Story", artist: "Taylor Swift", category: "ABBA Medleys & Group Performances" },
  { song: "Lovefool", artist: "Cardigans", category: "Indie/Alternative/Chill" },
  { song: "Lover", artist: "Taylor Swift", category: "Ceremony/Romantic" },
  { song: "Majestic - Set My Heart on Fire", artist: "Majestic", category: "Speciality/Add-ons" },
  { song: "Make You Feel My Love", artist: "Adele", category: "Ceremony/Romantic" },
  { song: "Mamma Mia", artist: "Abba", category: "Party/Dance Floor" },
  { song: "Man I Need", artist: "Olivia Dean", category: "Ceremony/Romantic" },
  { song: "Marry You", artist: "Bruno Mars", category: "Ceremony/Romantic" },
  { song: "Million Reasons", artist: "Lady Gaga", category: "Ceremony/Romantic" },
  { song: "Mistletoe and Wine", artist: "Cliff Richard", category: "Christmas" },
  { song: "Misty", artist: "Ella Fitzgerald", category: "Ceremony/Romantic" },
  { song: "Moon River", artist: "Audrey Hepburn", category: "Ceremony/Romantic" },
  { song: "More Than Friends", artist: "Lu Saint", category: "Ceremony/Romantic" },
  { song: "Mr Brightside", artist: "The Killers", category: "Party/Dance Floor" },
  { song: "Murder On The Dancefloor", artist: "Sophie Ellis-Bextor", category: "Party/Dance Floor" },
  { song: "My Girl", artist: "The Temptations", category: "Vintage/Swing/Classic" },
  { song: "My Guy", artist: "Mary Wells", category: "Ceremony/Romantic" },
  { song: "My Romance", artist: "Traditional", category: "Ceremony/Romantic" },
  { song: "Natural Woman", artist: "Aretha Franklin", category: "Vintage/Swing/Classic" },
  { song: "Natural Woman", artist: "Carole King", category: "Vintage/Swing/Classic" },
  { song: "Need You Now", artist: "Lady A", category: "Ceremony/Romantic" },
  { song: "Never Not Gonna Dance Again", artist: "Pink", category: "Party/Dance Floor" },
  { song: "Never Not Gonna Dance Again", artist: "Pink", category: "ABBA Medleys & Group Performances" },
  { song: "Next To Me", artist: "Emeli Sandé", category: "Ceremony/Romantic" },
  { song: "Nobody Does It Better", artist: "Carly Simon", category: "Ceremony/Romantic" },
  { song: "Northern Star", artist: "Amazons", category: "Indie/Alternative/Chill" },
  { song: "Nothing's Gonna Stop Us Now", artist: "Starship", category: "Ceremony/Romantic" },
  { song: "On My Own", artist: "Les Misérables", category: "Musicals/Show Tunes" },
  { song: "Ordinary People", artist: "John Legend", category: "Ceremony/Romantic" },
  { song: "Part of Your World", artist: "Aladdin", category: "Ceremony/Romantic" },
  { song: "Perfect", artist: "Ed Sheeran", category: "Ceremony/Romantic" },
  { song: "Pink Pony Club", artist: "Chappell Roan", category: "Party/Dance Floor" },
  { song: "Pink Pony Club", artist: "Chappell Roan", category: "ABBA Medleys & Group Performances" },
  { song: "Proud Mary", artist: "Tina Turner", category: "Party/Dance Floor" },
  { song: "Put Your Records On", artist: "Corinne Bailey Rae", category: "Indie/Alternative/Chill" },
  { song: "Que Sera Sera", artist: "Doris Day", category: "Vintage/Swing/Classic" },
  { song: "Raspberry Beret", artist: "Prince", category: "Vintage/Swing/Classic" },
  { song: "Reach", artist: "S Club 7", category: "Party/Dance Floor" },
  { song: "Red Light Spells Danger", artist: "Billy Ocean", category: "Vintage/Swing/Classic" },
  { song: "Respect", artist: "Aretha Franklin", category: "Vintage/Swing/Classic" },
  { song: "Rock Around The Clock", artist: "Bill Haley", category: "Party/Dance Floor" },
  { song: "Sanctuary", artist: "Traditional", category: "Ceremony/Romantic" },
  { song: "Saviour's Day", artist: "Cliff Richard", category: "Christmas" },
  { song: "Secret Love", artist: "Doris Day", category: "Ceremony/Romantic" },
  { song: "Send Me On My Way", artist: "Rusted Root", category: "Indie/Alternative/Chill" },
  { song: "September", artist: "Kool and The Gang", category: "Party/Dance Floor" },
  { song: "Set You Free", artist: "N-Trance", category: "Party/Dance Floor" },
  { song: "Sex On Fire", artist: "Kings of Leon", category: "Party/Dance Floor" },
  { song: "Shang-a-Lang", artist: "Bay City Rollers", category: "Party/Dance Floor" },
  { song: "Shut Up and Dance", artist: "Walk The Moon", category: "Party/Dance Floor" },
  { song: "Signed Sealed Delivered", artist: "Stevie Wonder", category: "Party/Dance Floor" },
  { song: "Sit Down", artist: "James", category: "Indie/Alternative/Chill" },
  { song: "Smile", artist: "Natalie Cole", category: "Ceremony/Romantic" },
  { song: "Someone Like You", artist: "Adele", category: "Ceremony/Romantic" },
  { song: "Someone Like You", artist: "Van Morrison", category: "Ceremony/Romantic" },
  { song: "Somewhere Only We Know", artist: "Keane", category: "Ceremony/Romantic" },
  { song: "Somewhere Over The Rainbow", artist: "Judy Garland", category: "Ceremony/Romantic" },
  { song: "Songbird", artist: "Eva Cassidy", category: "Ceremony/Romantic" },
  { song: "Songbird", artist: "Fleetwood Mac", category: "Ceremony/Romantic" },
  { song: "Stargazing", artist: "Myles Smith", category: "Indie/Alternative/Chill" },
  { song: "Stay (I Missed You)", artist: "Lisa Loeb", category: "Indie/Alternative/Chill" },
  { song: "Step Into Christmas", artist: "Elton John", category: "Christmas" },
  { song: "Stick Season", artist: "Noah Kahan", category: "Indie/Alternative/Chill" },
  { song: "Stuck In The Middle With You", artist: "Steelers Wheel", category: "Indie/Alternative/Chill" },
  { song: "Stupid Cupid", artist: "Connie Francis", category: "Vintage/Swing/Classic" },
  { song: "Sweet Caroline", artist: "Neil Diamond", category: "Party/Dance Floor" },
  { song: "Sweet Dreams", artist: "Eurythmics", category: "Indie/Alternative/Chill" },
  { song: "Take My Hand", artist: "Skerryvore", category: "Scottish/Traditional" },
  { song: "That's Amore", artist: "Dean Martin", category: "Party/Dance Floor" },
  { song: "The Best", artist: "Tina Turner", category: "Ceremony/Romantic" },
  { song: "The Chain", artist: "Fleetwood Mac", category: "Indie/Alternative/Chill" },
  { song: "The Fate of Ophelia", artist: "Taylor Swift", category: "Indie/Alternative/Chill" },
  { song: "The Glen", artist: "Levi Heron", category: "Scottish/Traditional" },
  { song: "The Joke", artist: "Brandi Carlisle", category: "Indie/Alternative/Chill" },
  { song: "The Promise", artist: "Girls Aloud", category: "Indie/Alternative/Chill" },
  { song: "The Rose", artist: "Bette Midler", category: "Ceremony/Romantic" },
  { song: "The Way I Love You", artist: "Michal Leah", category: "Ceremony/Romantic" },
  { song: "The Wonder of You", artist: "Elvis", category: "Ceremony/Romantic" },
  { song: "There She Goes", artist: "The LAs", category: "Indie/Alternative/Chill" },
  { song: "This Christmas", artist: "Donny Hathaway", category: "Christmas" },
  { song: "This I Promise You", artist: "Caleb and Kelsey", category: "Ceremony/Romantic" },
  { song: "This I Promise You", artist: "Donna Taggart", category: "Ceremony/Romantic" },
  { song: "This Is The Life", artist: "Amy Macdonald", category: "Indie/Alternative/Chill" },
  { song: "This Will Be", artist: "Natalie Cole", category: "Party/Dance Floor" },
  { song: "Timeless", artist: "Taylor Swift", category: "Ceremony/Romantic" },
  { song: "True Colours", artist: "Cyndi Lauper", category: "Ceremony/Romantic" },
  { song: "Try Everything", artist: "Zootopia", category: "Musicals/Show Tunes" },
  { song: "Turning Page", artist: "Sleeping At Last", category: "Ceremony/Romantic" },
  { song: "Twist And Shout", artist: "The Beatles", category: "Party/Dance Floor" },
  { song: "Two Becoming One", artist: "Christian Wedding Song", category: "Ceremony/Romantic" },
  { song: "Underneath The Tree", artist: "Kelly Clarkson", category: "Christmas" },
  { song: "Valerie", artist: "Amy Winehouse", category: "Party/Dance Floor" },
  { song: "Waffle House", artist: "Jonas Brothers", category: "Party/Dance Floor" },
  { song: "Wagon Wheel", artist: "Darius Rucker", category: "ABBA Medleys & Group Performances" },
  { song: "Walking After Midnight", artist: "Patsy Cline", category: "Vintage/Swing/Classic" },
  { song: "Waterloo", artist: "Abba", category: "Party/Dance Floor" },
  { song: "We Found Love", artist: "Rihanna", category: "Party/Dance Floor" },
  { song: "We'll Meet Again", artist: "Vera Lynn", category: "Vintage/Swing/Classic" },
  { song: "What A Wonderful World", artist: "Louis Armstrong", category: "Ceremony/Romantic" },
  { song: "When The Saints Go Marching In", artist: "Traditional", category: "Vintage/Swing/Classic" },
  { song: "Whiskey Roll", artist: "Cammy Barnes", category: "Scottish/Traditional" },
  { song: "White Cliffs Of Dover", artist: "Vera Lynn", category: "Vintage/Swing/Classic" },
  { song: "Who Let The Dogs Out", artist: "Baha Men", category: "Party/Dance Floor" },
  { song: "Whose Bed Have Your Boots Been Under", artist: "Shania Twain", category: "Party/Dance Floor" },
  { song: "Wild Horses", artist: "Rolling Stones", category: "Ceremony/Romantic" },
  { song: "Wind Beneath My Wings", artist: "Bette Midler", category: "Ceremony/Romantic" },
  { song: "Wonderwall", artist: "Oasis", category: "Indie/Alternative/Chill" },
  { song: "Wrecking Ball", artist: "Miley Cyrus", category: "Indie/Alternative/Chill" },
  { song: "Yellow", artist: "Coldplay", category: "Ceremony/Romantic" },
  { song: "Yes Sir I Can Boogie", artist: "Baccara", category: "Party/Dance Floor" },
  { song: "You To Me Are Everything", artist: "The Real Thing", category: "Party/Dance Floor" },
  { song: "You've Got A Friend", artist: "Carole King", category: "Ceremony/Romantic" },
  { song: "Young Hearts Run Free", artist: "Candi Staton", category: "ABBA Medleys & Group Performances" },
  { song: "Your Song", artist: "Elton John", category: "Ceremony/Romantic" },
  { song: "Yours", artist: "Ella Henderson", category: "Ceremony/Romantic" },
];

const categoryOrder = [
  "Ceremony/Romantic",
  "Party/Dance Floor",
  "Indie/Alternative/Chill",
  "Vintage/Swing/Classic",
  "Scottish/Traditional",
  "Musicals/Show Tunes",
  "ABBA Medleys & Group Performances",
  "Christmas",
  "Speciality/Add-ons",
];

const categoryLabels: Record<string, string> = {
  "Ceremony/Romantic": "Ceremony & Romantic",
  "Party/Dance Floor": "Party & Dance Floor",
  "Indie/Alternative/Chill": "Indie & Chill",
  "Vintage/Swing/Classic": "Vintage & Classic",
  "Scottish/Traditional": "Scottish",
  "Musicals/Show Tunes": "Musicals",
  "ABBA Medleys & Group Performances": "ABBA & Groups",
  "Christmas": "Christmas",
  "Speciality/Add-ons": "Speciality",
};

export default function RepertoireClient() {
  const [active, setActive] = useState<string | null>(null);

  const displayedSongs =
    active === null
      ? // Deduplicate by song+artist for "All" view
        Array.from(
          new Map(songs.map((s) => [`${s.song}|${s.artist}`, s])).values()
        ).sort((a, b) => a.song.localeCompare(b.song))
      : songs
          .filter((s) => s.category === active)
          .sort((a, b) => a.song.localeCompare(b.song));

  const uniqueSongCount = new Map(
    songs.map((s) => [`${s.song}|${s.artist}`, s])
  ).size;

  return (
    <>
      {/* Category filters */}
      <section className="py-8 px-6 bg-[#FAF8F3] border-b border-stone-200 sticky top-20 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActive(null)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] rounded-[4px] border transition-colors ${
                active === null
                  ? "bg-[#2C2C2C] text-white border-[#2C2C2C]"
                  : "bg-white text-[#2C2C2C] border-stone-200 hover:border-[#C4A882] hover:text-[#C4A882]"
              }`}
            >
              All ({uniqueSongCount})
            </button>
            {categoryOrder.map((cat) => {
              const count = songs.filter((s) => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.15em] rounded-[4px] border transition-colors ${
                    active === cat
                      ? "bg-[#2C2C2C] text-white border-[#2C2C2C]"
                      : "bg-white text-[#2C2C2C] border-stone-200 hover:border-[#C4A882] hover:text-[#C4A882]"
                  }`}
                >
                  {categoryLabels[cat]} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Song list */}
      <section className="py-12 md:py-20 px-6 bg-[#FAF8F3]">
        <div className="max-w-5xl mx-auto">
          {active === null && (
            <p className="text-center text-[#888888] text-sm mb-10">
              Showing all {uniqueSongCount} songs — filter by category above
            </p>
          )}
          {active !== null && (
            <div className="text-center mb-10">
              <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-2">
                {categoryLabels[active]}
              </p>
              <p className="text-[#888888] text-sm">{displayedSongs.length} songs</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {displayedSongs.map((s, i) => (
              <div
                key={`${s.song}|${s.artist}|${i}`}
                className="flex items-baseline gap-3 py-3 border-b border-stone-100"
              >
                <span className="text-[#C4A882] shrink-0 text-xs">♪</span>
                <div className="min-w-0">
                  <p className="text-sm text-[#2C2C2C] font-medium truncate">{s.song}</p>
                  <p className="text-xs text-[#888888] truncate">{s.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom song note */}
      <section className="py-12 md:py-20 px-6 bg-[#F5F1EB]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Something in mind?
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-4">
            Get in touch to discuss your song choices
          </h2>
          <p className="text-[#444444] leading-relaxed mb-8 max-w-xl mx-auto">
            This list is a sample of what I perform regularly — not a complete picture.
            If you have something specific in mind that isn&apos;t here, mention it when you enquire
            and I&apos;ll let you know what&apos;s possible. New songs depend on lead time and
            whether a suitable backing track is available.
          </p>
          <div className="mb-8">
            <Link
              href="/weddings"
              className="inline-block text-[#C4A882] border-b-2 border-[#C4A882] pb-1 hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors uppercase text-sm tracking-wider"
            >
              View Wedding Packages →
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              location="repertoire_cta"
              className="inline-flex flex-col items-center bg-[#C4A882] hover:bg-[#A68B5B] text-[#2C2C2C] px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via WhatsApp (1–2 hour response)
              </span>
            </TrackedWhatsAppLink>
            <TrackedEnquiryLink
              location="repertoire_cta"
              className="inline-flex flex-col items-center bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white px-10 py-4 text-sm uppercase tracking-wider transition-colors rounded-[4px]"
            >
              <span className="font-medium">Check My Availability</span>
              <span className="text-sm normal-case tracking-normal mt-1 opacity-90">
                via Contact Form
              </span>
            </TrackedEnquiryLink>
          </div>
        </div>
      </section>
    </>
  );
}

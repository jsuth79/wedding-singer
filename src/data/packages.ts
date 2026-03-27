export type Package = {
  name: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  tips?: string[];
  popular?: boolean;
  link?: string;
  disableHighlight?: boolean;
};

export const packages: Package[] = [
  {
    name: "Ceremony",
    price: "£325",
    description: "Elevate your moment with your favourite music brought to life",
    image: "/images/nicola-mason-wedding-ceremony-singer-l.webp",
    alt: "Female wedding ceremony singer performing acoustic music at Edinburgh wedding with live vocals and guitar",
    features: [
      "Pre-ceremony background music from the moment guests are seated",
      "Your aisle, register signing and exit songs, all performed live with a focus on you",
      "Professional PA system, clear, discreet, and perfectly balanced for your ceremony",
    ],
  },
  {
    name: "Drinks Reception",
    price: "£350",
    description: "Keep the vibes flowing while your guests celebrate",
    image: "/images/nicola-mason-drinks-reception-l.webp",
    alt: "Live acoustic music at wedding drinks reception in Central Scotland with professional female singer entertaining guests",
    features: [
      "Two 45-minute live sets, tailored to you and your day",
      "Curated playlist to bridge the gap between sets",
      "Loud enough to set the mood, quiet enough that your granny can still have a gab",
      "Professional PA system, clear, discreet, and perfectly balanced for your drinks reception",
    ],
  },
  {
    name: "Wedding Meal",
    price: "£350",
    description: "Live music to set the scene while you eat, drink, and celebrate",
    image: "/images/nicola-mason-dinner-l.webp",
    alt: "Wedding dinner entertainment with live acoustic vocalist providing elegant background music during wedding breakfast",
    features: [
      "Your grand entrance song as you enter your wedding meal",
      "Two 45-minute live sets, tailored to your vibe and paced to your meal",
      "Professional PA system, clear, discreet, and perfectly balanced for your wedding meal",
    ],
  },
  {
    name: "First Dances",
    price: "£395",
    description: "Kick off your evening reception with live music to fill the dance floor",
    image: "/images/nicola-mason-first-dance-l.webp",
    alt: "Female first dance wedding singer Edinburgh performing romantic live songs and party music for evening celebration",
    features: [
      "Your first dances performed live by a professional wedding singer",
      "One hour of bangers to get everyone on their feet",

      "Professional PA system, clear, discreet, and perfectly balanced for your evening reception",
      "The perfect handover to your evening entertainment",
    ],
  },
  {
    name: "Daytime Package",
    price: "£575",
    popular: true,
    description: "Live music from your vows and through your drinks reception",
    image: "/images/nicola-mason-daytime-l.webp",
    alt: "Full day female wedding singer package Glasgow covering ceremony and drinks reception with live acoustic music",
    features: [
      "Complete Ceremony coverage, from guest arrival to your exit",
      "Drinks Reception coverage, one singer, one setup and one less thing to think about",
      "My most popular package combination",
      "Swap Drinks Reception for Wedding Meal (+£55)",
      "All equipment included",
    ],
  },
  {
    name: "The Full Shebang",
    price: "£795",
    description: "Live music from your ceremony to the dance floor",
    image: "/images/nicola-mason-full-day-singer-l.webp",
    alt: "Complete wedding day entertainment package from ceremony through evening reception with live singing and first dance",
    features: [
      "Complete Ceremony coverage, from guest arrival to your exit",
      "Drinks Reception coverage with 90 minutes of live music",
      "Your First Dances performed live by your wedding singer",
      "One hour of bangers to get everyone on their feet",
      "Ceremony, Drinks Reception and First Dances covered in one package",
    ],
  },
];

export const extras: Package[] = [
  {
    name: "Surprise Singers",
    price: "From £795",
    popular: true,
    image: "/images/nicola-mason-surprise-singer-l.webp",
    alt: "Female surprise wedding singers disguised as waiters performing unexpected entertainment at Glasgow wedding reception",
    description: "Create a show-stopping moment your guests will talk about for years",
    features: [
      "2+ professional performers hidden in plain sight",
      "Glam gate crashers, waiters, Just Eat delivery, you name it",
      "Nobody sees it coming, then suddenly, the room erupts",
      "A setlist packed with floor-fillers",
    ],
  },
  {
    name: "The Clooneys",
    price: "POA",
    disableHighlight: true,
    image: "/images/the-clooneys-band-l.webp",
    alt: "The Clooneys vocal harmony trio performing live three-part harmonies at wedding ceremony and reception",
    description: "Stunning three-part harmonies that bring depth and richness to your day",
    features: [
      "Three-part vocal harmonies",
      "Ceremony performances",
      "Reception entertainment",
      "Evening celebrations",
      "Versatile repertoire",
    ],
    link: "https://www.theclooneys.co.uk",
  },
  {
    name: "Keepsake Recording",
    price: "£80",
    image: "/images/nicola-mason-keepsake-recording-l.webp",
    alt: "Studio recording session for personalized wedding song keepsake with professional vocalist",
    description: "Relive your special moment forever with your song professionally recorded",
    features: [
      "Studio-quality recording",
      "Your chosen song",
      "Digital download included",
      "Perfect keepsake",
      "Discounts on multiple songs",
    ],
  },
];

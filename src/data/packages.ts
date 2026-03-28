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
    description: "Bring your ceremony to life with music performed live, just for you",
    image: "/images/nicola-mason-wedding-ceremony-singer-l.webp",
    alt: "Nicola Mason performing live wedding ceremony music at an Edinburgh wedding",
    features: [
      "Pre-ceremony background music as your guests arrive and take their seats",
      "Your aisle, signing and exit songs performed live, timed perfectly to each moment",
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
    alt: "Nicola Mason performing live first dance and evening reception music at a wedding in Edinburgh",
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
    alt: "Nicola Mason providing live ceremony and drinks reception music as part of a daytime wedding package in Glasgow",
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
    alt: "Nicola Mason providing full-day wedding entertainment from ceremony through first dance and evening reception",
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
      "2 or 3 professional performers hidden in plain sight",
      "Glam gate crashers, waiters, Just Eat delivery, police, you name it",
      "Nobody sees it coming, then suddenly, the room erupts",
      "A setlist packed with floor-fillers and a high-impact performance",
    ],
  },
  {
    name: "The Clooneys",
    price: "POA",
    disableHighlight: true,
    image: "/images/the-clooneys-band-l.webp",
    alt: "The Clooneys vocal harmony trio performing live three-part harmonies at wedding ceremony and reception",
    description: "Show-stopping vocals, stunning harmonies and unique arrangements",
    features: [
      "Award-winning three-part harmony",
      "Available from your I do to your dance floor do",
      "Based in Scotland and available for events throughout the UK or destination weddings",
      "State of the art PA and lighting system",

    ],
    link: "https://www.theclooneys.co.uk",
  },
  {
    name: "Keepsake Recording",
    price: "£80",
    image: "/images/nicola-mason-keepsake-recording-l.webp",
    alt: "Studio recording session for personalized wedding song keepsake with professional vocalist",
    description: "A professional recording of your song, yours to keep forever",
    features: [
      "Studio-quality recording of your chosen song",
      "Digital download delivered straight to your inbox",
      "The perfect gift for anniversaries, birthdays, or just because",
    ],
  },
];

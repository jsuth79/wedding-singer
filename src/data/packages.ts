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
    description: "Elevate your moment with your favourite music sung live",
    image: "/images/nicola-mason-wedding-ceremony-singer-l.webp",
    alt: "Female wedding ceremony singer performing acoustic music at Edinburgh wedding with live vocals and guitar",
    features: [
      "Pre-ceremony background music from the moment guests are seated",
      "Your aisle entrance song performed live by a professional wedding singer, timed to you",
      "Music performed during the register signing",
      "A live exit song to send you out as newlyweds",
      "Professional PA system set up and managed at your venue throughout",
    ],
  },
  {
    name: "Drinks Reception",
    price: "£350",
    description: "Keep the atmosphere flowing while your guests celebrate",
    image: "/images/nicola-mason-drinks-reception-l.webp",
    alt: "Live acoustic music at wedding drinks reception in Central Scotland with professional female singer entertaining guests",
    features: [
      "Two 45-minute live acoustic sets, tailored to you and your day",
      "Curated playlist keeps the atmosphere flowing between sets",
      "Pitched perfectly to keep guests mingling and the energy just right",
      "PA system professionally set up and managed for your reception venue",
    ],
  },
  {
    name: "Wedding Meal",
    price: "£350",
    description: "Create the perfect ambience for conversation and dining",
    image: "/images/nicola-mason-dinner-l.webp",
    alt: "Wedding dinner entertainment with live acoustic vocalist providing elegant background music during wedding breakfast",
    features: [
      "Your entrance into the wedding meal performed live",
      "Two 45-minute sets of background music, paced to your meal timings",
      "Volume and energy kept ambient — perfect for conversation and celebration",
      "Professional PA system configured for your wedding venue's dining space",
    ],
  },
  {
    name: "Daytime Package",
    price: "£575",
    popular: true,
    description: "Live acoustic music from your vows through drinks reception",
    image: "/images/nicola-mason-daytime-l.webp",
    alt: "Full day female wedding singer package Glasgow covering ceremony and drinks reception with live acoustic music",
    features: [
      "Full wedding ceremony singer service, from guest arrival through to walking out",
      "Drinks reception coverage — one singer, one setup, one less thing to think about",
      "Ceremony and Drinks Reception music covered under one package price — better value than booking separately",
      "Swap Drinks Reception for Wedding Meal instead (+£55)",
      "All equipment included",
    ],
  },
  {
    name: "The Full Shebang",
    price: "£795",
    description: "Musical memories from ceremony to dance floor",
    image: "/images/nicola-mason-full-day-singer-l.webp",
    alt: "Complete wedding day entertainment package from ceremony through evening reception with live singing and first dance",
    features: [
      "Full Ceremony singer service, from guest arrival through to walking out",
      "Drinks Reception coverage with 90 minutes of live music",
      "Your first dance performed live by your wedding singer",
      "One hour of upbeat party songs to fill the floor",
      "Ceremony, Drinks Reception and First Dances covered in one package",
    ],
  },
  {
    name: "First Dances",
    price: "£395",
    description: "Kick off your evening with live music to fill the dance floor",
    image: "/images/nicola-mason-first-dance-l.webp",
    alt: "Female first dance wedding singer Edinburgh performing romantic live songs and party music for evening celebration",
    features: [
      "Your first dance performed live by a professional wedding singer",
      "One hour of upbeat party songs to get guests on the floor",
      "High-energy performance timed to kick off your evening",
      "Professional PA system set up and managed for your performance",
      "The perfect handover to your evening DJ",
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
      "2+ professional performers",
      "Disguised as staff or guests",
      "Surprise reveal performance",
      "Popular floor-filling songs",
      "Creates unforgettable moments",
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

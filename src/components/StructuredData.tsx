export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EntertainmentBusiness"],
    "@id": "https://www.nicolamason.co.uk/#localbusiness",
    "name": "Nicola Mason Wedding & Events Singer",
    "image": "https://www.nicolamason.co.uk/images/nicola-mason-wedding-events-singer.jpg",
    "description": "Award-winning wedding and events singer based in Glasgow, Scotland. Professional live music for ceremonies, receptions, and celebrations across Central Scotland.",
    "url": "https://www.nicolamason.co.uk",
    "telephone": "+447740360678",
    "email": "hello@nicolamason.co.uk",
    "priceRange": "£325-£795",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Glasgow",
      "addressRegion": "Scotland",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.8642",
      "longitude": "-4.2518"
    },
    "areaServed": [
      { "@type": "City", "name": "Glasgow" },
      { "@type": "City", "name": "Edinburgh" },
      { "@type": "AdministrativeArea", "name": "Lanarkshire" },
      { "@type": "AdministrativeArea", "name": "Renfrewshire" },
      { "@type": "AdministrativeArea", "name": "East Renfrewshire" },
      { "@type": "AdministrativeArea", "name": "Ayrshire" },
      { "@type": "AdministrativeArea", "name": "Falkirk" },
      { "@type": "AdministrativeArea", "name": "Clackmannanshire" },
      { "@type": "AdministrativeArea", "name": "Stirlingshire" },
      { "@type": "AdministrativeArea", "name": "East Lothian" },
      { "@type": "AdministrativeArea", "name": "West Lothian" },
      { "@type": "AdministrativeArea", "name": "Fife" },
      { "@type": "AdministrativeArea", "name": "Perthshire" },
      { "@type": "AdministrativeArea", "name": "Central Scotland" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/nicolamasonvocalist",
      "https://www.instagram.com/nicolamasonvocalist",
      "https://www.tiktok.com/@nicolamasonvocalist",
      "https://www.youtube.com/@nicolamasonvocalist"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "20"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding & Events Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Ceremony",
            "description": "Live acoustic singing for wedding ceremonies, including pre-ceremony music, aisle, signing and exit songs",
            "provider": { "@id": "https://www.nicolamason.co.uk/#localbusiness" }
          },
          "price": "325",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Drinks Reception",
            "description": "Two 45-minute live sets tailored to the couple, with curated playlist between sets",
            "provider": { "@id": "https://www.nicolamason.co.uk/#localbusiness" }
          },
          "price": "350",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Meal",
            "description": "Live background music during the wedding breakfast, including grand entrance song and two live sets",
            "provider": { "@id": "https://www.nicolamason.co.uk/#localbusiness" }
          },
          "price": "350",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "First Dances",
            "description": "Live performance of first dances and one hour of evening reception music to kick off the dance floor",
            "provider": { "@id": "https://www.nicolamason.co.uk/#localbusiness" }
          },
          "price": "395",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Daytime Wedding Package",
            "description": "Complete ceremony and drinks reception coverage — the most popular package combination",
            "provider": { "@id": "https://www.nicolamason.co.uk/#localbusiness" }
          },
          "price": "575",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Full Shebang",
            "description": "Full-day wedding music from ceremony through drinks reception to first dances and evening reception",
            "provider": { "@id": "https://www.nicolamason.co.uk/#localbusiness" }
          },
          "price": "795",
          "priceCurrency": "GBP"
        }
      ]
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.nicolamason.co.uk/#person",
    "name": "Nicola Mason",
    "jobTitle": "Professional Wedding & Events Singer",
    "description": "Award-winning vocalist trained at Napier University and Berklee College of Music, specializing in wedding and event entertainment across Scotland.",
    "url": "https://www.nicolamason.co.uk",
    "image": "https://www.nicolamason.co.uk/images/nicola-mason-wedding-events-singer-p.webp",
    "email": "hello@nicolamason.co.uk",
    "telephone": "+447740360678",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Napier University"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Berklee College of Music",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Boston",
          "addressCountry": "US"
        }
      }
    ],
    "award": [
      "Scottish Wedding Awards 2026 - Ceremony Entertainer of the Year",
      "Confetti Awards 2025 - Finalist Best Ceremony Entertainer",
      "UKbride Approved Wedding Supplier"
    ],
    "sameAs": [
      "https://www.facebook.com/nicolamasonvocalist",
      "https://www.instagram.com/nicolamasonvocalist",
      "https://www.tiktok.com/@nicolamasonvocalist",
      "https://www.youtube.com/@nicolamasonvocalist"
    ],
    "knowsAbout": [
      "Wedding Music",
      "Live Performance",
      "Acoustic Music",
      "Event Entertainment",
      "Scottish Wedding Traditions",
      "Ceremony Music Planning",
      "First Dance Songs",
      "Wedding Ceremony Songs",
      "Glasgow Weddings",
      "Edinburgh Weddings",
      "Central Scotland Weddings"
    ],
    "genre": ["Acoustic Pop", "Easy Listening", "Contemporary", "Classic Wedding"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Wedding Singer",
      "occupationLocation": {
        "@type": "City",
        "name": "Glasgow"
      }
    },
    "worksFor": { "@id": "https://www.nicolamason.co.uk/#localbusiness" }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}

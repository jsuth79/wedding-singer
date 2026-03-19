export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
      {
        "@type": "City",
        "name": "Glasgow"
      },
      {
        "@type": "City",
        "name": "Edinburgh"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Central Scotland"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Lanarkshire"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Stirling"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Ayrshire"
      },
      {
        "@type": "AdministrativeArea",
        "name": "The Lothians"
      }
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding & Events Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Ceremony",
            "description": "Live acoustic singing for wedding ceremonies",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nicola Mason"
            }
          },
          "price": "325",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Drinks Reception",
            "description": "Live entertainment for wedding drinks receptions",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nicola Mason"
            }
          },
          "price": "350",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Daytime Wedding Package",
            "description": "Ceremony and drinks reception entertainment",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nicola Mason"
            }
          },
          "price": "575",
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
    "image": "https://www.nicolamason.co.uk/images/nicola-mason-wedding-events-singer-ceremony.jpg",
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
      "Event Entertainment"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Wedding Singer",
      "occupationLocation": {
        "@type": "City",
        "name": "Glasgow"
      }
    }
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nicola Mason Wedding & Events Singer",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "20"
    }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
    </>
  );
}

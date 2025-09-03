export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FK EXPRESS",
    "alternateName": "FKExpress",
    "url": "https://fkexpress.pro",
    "logo": "https://fkexpress.pro/logo.svg",
    "description": "Entreprise de transport de marchandises professionnelle basée à Gagny (93). Flotte de 45+ véhicules, licence transport, location véhicules industriels.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 BIS AVENUE DE DIJON",
      "addressLocality": "GAGNY",
      "postalCode": "93220",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33185784353",
      "contactType": "customer service",
      "email": "contact@fkexpress.pro",
      "availableLanguage": "French"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8839,
      "longitude": 2.5354
    },
    "sameAs": [
      "https://fkexpress.pro"
    ],
    "foundingDate": "2010",
    "numberOfEmployees": "25-50",
    "taxID": "52188652300047",
    "vatID": "FR41521886523"
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://fkexpress.pro/#business",
    "name": "FK EXPRESS",
    "image": "https://fkexpress.pro/logo.svg",
    "telephone": "+33185784353",
    "email": "contact@fkexpress.pro",
    "url": "https://fkexpress.pro",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 BIS AVENUE DE DIJON",
      "addressLocality": "GAGNY",
      "addressRegion": "Île-de-France",
      "postalCode": "93220",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8839,
      "longitude": 2.5354
    },
    "openingHoursSpecification": {
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
    },
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "servesCuisine": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 127
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Transport de marchandises",
    "provider": {
      "@type": "Organization",
      "name": "FK EXPRESS"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de transport",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transport National",
            "description": "Livraisons dans toute la France avec suivi GPS"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fret Express Île-de-France",
            "description": "Service d'urgence 24h/24 avec intervention sous 2h"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Location Véhicules Industriels",
            "description": "Flotte de 45+ véhicules du 3.5T au 44T avec ou sans chauffeur"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FK EXPRESS",
    "url": "https://fkexpress.pro",
    "description": "Site officiel de FK EXPRESS - Transport de marchandises professionnel",
    "publisher": {
      "@type": "Organization",
      "name": "FK EXPRESS"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://fkexpress.pro/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
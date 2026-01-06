import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CategoryStrip from "@/components/CategoryStrip";
import FeaturedProductsGrid from "@/components/FeaturedProductsGrid";
import DealsOfWeek from "@/components/DealsOfWeek";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";

const BRAND_NAME = "JPG Juegos";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jpgjuegos.com";

const storeSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Store"],
  name: BRAND_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logoJPG-header.png`,
  sameAs: ["https://www.instagram.com/jpgjuegos", "https://www.facebook.com/jpgjuegos"],
  telephone: "+57-601-000-0000",
  email: "hola@jpgjuegos.com",
  description:
    "Tienda de juegos de mesa y estrategia con operación en Bogotá y envíos a toda Colombia.",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "11:00",
    closes: "20:00",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bogotá D.C.",
    addressLocality: "Bogotá",
    postalCode: "110111",
    addressCountry: "CO",
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Catálogo JPG Juegos",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Juegos familiares",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Familiares y party games" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Estrategia y eurogames",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Catan, Carcassonne y más" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Didácticos y educativos",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Juegos escolares y STEM" } },
        ],
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: BRAND_NAME,
  inLanguage: "es-CO",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Juegos de mesa",
      item: `${SITE_URL}#familiares`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Estrategia",
      item: `${SITE_URL}#estrategia`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Catan",
      item: `${SITE_URL}#preventas`,
    },
  ],
};

const videoObjectSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Ideas rápidas para Spot It y Saboteur",
  description: "Video introductorio de JPG Juegos con tips para dinamizar juegos familiares en Colombia.",
  uploadDate: "2026-01-05",
  inLanguage: "es-CO",
  thumbnailUrl: [`${SITE_URL}/images/og-banner-1200x630.jpg`],
  contentUrl: `${SITE_URL}/videos/IntroJPG.mp4`,
  embedUrl: `${SITE_URL}/videos/IntroJPG.mp4`,
  duration: "PT45S",
  publisher: {
    "@type": "Organization",
    name: BRAND_NAME,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logoJPG-header.png`,
    },
  },
};

const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Catan – Juego de mesa",
    image: `${SITE_URL}/images/promo-catan.png`,
    description: "Juego de estrategia y negociación ideal para familias colombianas.",
    brand: { "@type": "Brand", name: "Kosmos" },
    sku: "CATAN-BASE-CO",
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      price: "189000",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}#preventas`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Carcassonne – Juego de colocación de losetas",
    image: `${SITE_URL}/images/promo-carcassone.png`,
    description: "Clásico familiar con expansiones disponibles en Bogotá.",
    brand: { "@type": "Brand", name: "Devir" },
    sku: "CARCASSONNE-BASE-CO",
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      price: "99900",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}#familiares`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Codenames – Party game en español",
    image: `${SITE_URL}/images/promo-codenames.png`,
    description: "Juego social didáctico perfecto para aulas y familias en Colombia.",
    brand: { "@type": "Brand", name: "Czech Games Edition" },
    sku: "CODENAMES-ES-CO",
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      price: "62000",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}#didacticos`,
    },
  },
];

export default function HomePage() {
  return (
    <main id="contenido" className="space-y-16">
      <Navbar />
      <Hero />
      <TrustBar />
      <CategoryStrip />
      <FeaturedProductsGrid />
      <DealsOfWeek />
      <NewsletterCTA />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(storeSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoObjectSchema),
        }}
      />
      {productSchemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </main>
  );
}


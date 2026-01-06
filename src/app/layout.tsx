import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair-display",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const SITE_DESCRIPTION =
  "Tienda de juegos de mesa y estrategia en Bogotá, Colombia. Catan, Carcassonne, Codenames, Spot It y más, con envíos a todo el país desde Bogotá.";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Juegos de mesa y estrategia en Bogotá`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: { es: SITE_URL },
  },
  keywords: [
    "juegos de mesa Bogotá",
    "tienda de juegos de mesa Colombia",
    "Catan Colombia",
    "Carcassonne Colombia",
    "juegos familiares Bogotá",
    "juegos didácticos Colombia",
  ],
  themeColor: "#0f1729",
  openGraph: {
    type: "website",
    title: `${SITE_NAME} | Juegos de mesa y estrategia en Colombia`,
    description: "Juegos de mesa familiares y de estrategia desde Bogotá con envíos a todo Colombia.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_CO",
    images: [
      {
        url: "/images/og-banner-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "JPG Juegos – Juegos de mesa y estrategia en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Juegos de mesa y estrategia en Bogotá`,
    description: SITE_DESCRIPTION,
    images: ["/images/og-banner-1200x630.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "ecommerce",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${openSans.variable}`}>
      <body className="bg-[--color-surface] text-[--color-text-primary] antialiased">
        {/* Skip link de accesibilidad */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded"
        >
          Saltear al contenido
        </a>
        {children}
      </body>
    </html>
  );
}

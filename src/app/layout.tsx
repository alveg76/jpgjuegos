import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mjgbiologa.com";

export const metadata: Metadata = {
  title: "Mary Janeth Garzón – Bióloga especialista en Epífitas",
  description:
    "Consultoría en epífitas, caracterización de vegetación y monitoreo ecológico. Servicios para proyectos ambientales y de biodiversidad.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Mary Janeth Garzón – Bióloga especialista en Epífitas",
    description:
      "Consultoría en epífitas y biodiversidad. Estudios, monitoreo y soporte a proyectos ambientales.",
    url: SITE_URL,
    siteName: "Mary Janeth Garzón",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${openSans.variable}`}>
      <body>
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

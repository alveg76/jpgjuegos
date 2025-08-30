// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Methodology from '@/components/Methodology';
import Differentiators from '@/components/Differentiators';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main id="contenido">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Methodology />
      <Differentiators />
      <Contact />
      <Footer />

      {/* ---- Datos estructurados JSON-LD (VERSIÓN ACTUALIZADA) ---- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Mary Janeth Garzón",
            "url": "https://www.mjgbiologa.com",
            "image": "https://www.mjgbiologa.com/images/og-cover.jpg",
            "areaServed": ["Colombia", "Latinoamérica"],
            "description": "Bióloga experta en epífitas, monitoreo ecológico y consultoría ambiental.",
            "sameAs": [
              "https://co.linkedin.com/in/mary-janeth-garz%C3%B3n-guti%C3%A9rrez-2517519b"
            ],
            "knowsAbout": ["Epífitas", "Monitoreo ecológico", "Consultoría ambiental"]
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mary Janeth Garzón",
            "jobTitle": "Bióloga experta en epífitas",
            "url": "https://www.mjgbiologa.com",
            "sameAs": [
              "https://co.linkedin.com/in/mary-janeth-garz%C3%B3n-guti%C3%A9rrez-2517519b"
            ]
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.mjgbiologa.com",
            "name": "Mary Janeth Garzón",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.mjgbiologa.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
    </main>
  );
}


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

      {/* ---- Datos estructurados JSON-LD ---- */}
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
            "description": "Bióloga especialista en epífitas, monitoreo ecológico y consultoría ambiental.",
            "sameAs": [],
          }),
        }}
      />
    </main>
  );
}

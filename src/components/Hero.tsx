'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type SlideType = 'image' | 'video';

type Slide = {
  id: string;
  type: SlideType;
  mediaSrc: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  badge: string;
};

const slides: Slide[] = [
  {
    id: 'intro-video',
    type: 'video',
    mediaSrc: '/videos/IntroJPG.mp4',
    eyebrow: 'Sesiones dinámicas',
    title: 'Despierta la mesa con retos express',
    description: 'Ideas para dinamizar Spot It, Saboteur y mini juegos cooperativos en 10 minutos.',
    ctaLabel: 'Ideas rápidas para Spot It y Saboteur',
    ctaHref: '#didacticos',
    secondaryCtaLabel: 'Guías express para juegos familiares',
    secondaryCtaHref: '#contacto',
    badge: 'Video guía',
  },
  {
    id: 'carcassonne-img',
    type: 'image',
    mediaSrc: '/images/promo-carcassone.png',
    eyebrow: 'Clásicos familiares',
    title: 'Carcassonne con expansiones exclusivas',
    description: 'Meeples personalizados y tableros modulares para noches de estrategia con toda la familia.',
    ctaLabel: 'Comprar Carcassonne',
    ctaHref: '#familiares',
    secondaryCtaLabel: 'Combos familiares Carcassonne',
    secondaryCtaHref: '#ofertas',
    badge: 'Favorito 2026',
  },
  {
    id: 'carcassonne-video',
    type: 'video',
    mediaSrc: '/videos/VideoCarcassone.mp4',
    eyebrow: 'Exploración medieval',
    title: 'Construye historias con Carcassonne Live',
    description: 'Nuevo contenido audiovisual y aventuras cooperativas para seguir la partida en streaming.',
    ctaLabel: 'Ver bundles Carcassonne',
    ctaHref: '#estrategia',
    secondaryCtaLabel: 'Agenda demo Carcassonne',
    secondaryCtaHref: '#contacto',
    badge: 'Demo en video',
  },
  {
    id: 'catan-img',
    type: 'image',
    mediaSrc: '/images/promo-catan.png',
    eyebrow: 'Estrategia para todos',
    title: 'Catan, Cities & Knights y más',
    description: 'Paquetes con expansiones, organizadores 3D y cartas protegidas listas para torneo.',
    ctaLabel: 'Reservar Catan',
    ctaHref: '#preventas',
    secondaryCtaLabel: 'Explorar estrategia en Colombia',
    secondaryCtaHref: '#estrategia',
    badge: 'Preventas activas',
  },
  {
    id: 'catan-video',
    type: 'video',
    mediaSrc: '/videos/VideoCatan.mp4',
    eyebrow: 'Historias en cada tirada',
    title: 'Catan en versión cinemática',
    description: 'Inspírate con guías dinámicas y retos cooperativos para jugadores expertos.',
    ctaLabel: 'Ver campaña Catan',
    ctaHref: '#preventas',
    secondaryCtaLabel: 'Agendar mesa de prueba',
    secondaryCtaHref: '#contacto',
    badge: 'Video exclusivo',
  },
  {
    id: 'codenames-img',
    type: 'image',
    mediaSrc: '/images/promo-codenames.png',
    eyebrow: 'Party & didácticos',
    title: 'Codenames, Spot It y Saboteur',
    description: 'Rotaciones rápidas, palabras en español y retos didácticos para el aula o la reunión.',
    ctaLabel: 'Descubrir juegos didácticos',
    ctaHref: '#didacticos',
    secondaryCtaLabel: 'Armar pack familiar',
    secondaryCtaHref: '#familiares',
    badge: 'Nuevo catálogo',
  },
];

const AUTO_ROTATE_MS = 9000;
const INITIAL_ACTIVE_INDEX = slides.findIndex((slide) => slide.id === 'intro-video');

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(
    INITIAL_ACTIVE_INDEX >= 0 ? INITIAL_ACTIVE_INDEX : 0,
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  const isIntroSlide = activeSlide.id === 'intro-video';

  return (
    <section id="promos" className="w-full" style={{background: 'linear-gradient(180deg, #6B8CFF 0%, #8BA5FF 100%)'}}>
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Mobile Layout: Content on top, Video below */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">
          
          {/* Content Section */}
          <div className="w-full md:w-1/2 order-1 md:order-none">
            <div className="space-y-3 sm:space-y-4 text-center md:text-left">
              <span className="inline-flex items-center gap-2 bg-mario-yellow text-mario-blue px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold border-2 border-mario-brown text-xs sm:text-sm">
                {activeSlide.badge}
              </span>
              
              <p className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] text-mario-white font-bold drop-shadow-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                {activeSlide.eyebrow}
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-mario-white font-serif" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                {activeSlide.title}
              </h1>
              
              <p className="text-sm sm:text-base md:text-base text-mario-white font-semibold drop-shadow-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                {activeSlide.description}
              </p>

              {activeSlide.type === 'image' ? (
                <Image
                  src={activeSlide.mediaSrc}
                  alt={`${activeSlide.title} disponible en Colombia`}
                  width={1200}
                  height={800}
                  className="sr-only"
                  priority={activeSlide.id === 'carcassonne-img'}
                />
              ) : (
                <Image
                  src="/images/og-banner-1200x630.jpg"
                  alt="Video introductorio de JPG Juegos con mesas de juego en Bogotá"
                  width={1200}
                  height={630}
                  className="sr-only"
                />
              )}

              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 pt-2">
                <a
                  href={activeSlide.ctaHref}
                  className="mario-button text-xs sm:text-sm font-bold px-3 sm:px-4 py-2"
                >
                  {activeSlide.ctaLabel}
                </a>
                <a
                  href={activeSlide.secondaryCtaHref}
                  className="mario-button-secondary text-xs sm:text-sm font-bold px-3 sm:px-4 py-2"
                >
                  {activeSlide.secondaryCtaLabel}
                </a>
              </div>
            </div>
          </div>

          {/* Video/Image Section */}
          <div className="w-full md:w-1/2 order-2 md:order-none mt-6 md:mt-0 flex justify-center">
            <div 
              className="relative w-full max-w-lg"
              style={{
                borderRadius: '12px',
                border: '6px solid #8B4513',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                overflow: 'hidden',
                aspectRatio: '16 / 9'
              }}
            >
              {activeSlide.type === 'video' ? (
                <>
                  <video
                    key={activeSlide.id}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={activeSlide.mediaSrc} type="video/mp4" />
                  </video>
                  <div
                    className={`absolute inset-0 ${
                      isIntroSlide ? 'bg-black/15' : 'bg-black/30'
                    }`}
                  />
                </>
              ) : (
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeSlide.mediaSrc})` }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className={`transition-all border-2 border-mario-brown rounded-full ${
                index === activeIndex ? 'h-2.5 w-7 bg-mario-red' : 'h-2 w-5 bg-mario-yellow hover:bg-mario-red'
              }`}
              aria-label={`Ir al banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

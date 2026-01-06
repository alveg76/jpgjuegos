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
    mediaSrc: '/videos/Carcassonne_Video_Generado_Animadamente.mp4',
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
    mediaSrc: '/videos/Catan_Video_Generation_Request.mp4',
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

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  const isIntroSlide = activeSlide.id === 'intro-video';

  return (
    <section id="promos" className="relative isolate overflow-hidden">
      <div className="relative min-h-[80vh] w-full lg:min-h-[85vh]">
        <div className="absolute inset-0" aria-hidden>
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
                  isIntroSlide ? 'bg-black/15' : 'bg-black/35 backdrop-blur-sm'
                }`}
              />
            </>
          ) : (
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${activeSlide.mediaSrc})` }}
            />
          )}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              isIntroSlide ? 'from-black/70 via-black/35 to-black/10' : 'from-black/90 via-black/65 to-black/30'
            }`}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:text-left">
          <div className="space-y-6">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              {activeSlide.badge}
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-white/70">{activeSlide.eyebrow}</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{activeSlide.title}</h1>
            <p className="text-lg text-white/80 lg:text-xl">{activeSlide.description}</p>
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
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href={activeSlide.ctaHref}
                className="inline-flex min-w-[180px] items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#0f1729] transition hover:bg-white/90"
              >
                {activeSlide.ctaLabel}
              </Link>
              <Link
                href={activeSlide.secondaryCtaHref}
                className="inline-flex min-w-[180px] items-center justify-center rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                {activeSlide.secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center gap-2 pb-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? 'w-10 bg-white' : 'w-6 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Ir al banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

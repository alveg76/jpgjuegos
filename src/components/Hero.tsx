// src/components/Hero.tsx
'use client';

import React, useState, useEffect } from 'react';

// Asegúrate de que los nombres de tus videos en /public/videos/ coincidan aquí
const videoSources = [
  '/videos/video_epifita_1.mp4',
  '/videos/video_bosque_1.mp4',
  '/videos/video_campo_1.mp4',
  '/videos/video_epifita_2.mp4',
  '/videos/video_dosel_1.mp4',
];

const Hero = () => {
  // Lógica para la rotación de videos (sin cambios)
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startIndex = Math.floor(Math.random() * videoSources.length);
    setActiveIndex(startIndex);
    setNextIndex((startIndex + 1) % videoSources.length);

    const interval = setInterval(() => {
      setIsFading(true);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (isFading) {
      setActiveIndex(nextIndex);
      setNextIndex((prev) => (prev + 1) % videoSources.length);
      setIsFading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      
      {/* --- VIDEOS DE FONDO --- */}
      <video
        key={videoSources[activeIndex]}
        autoPlay
        loop
        muted
        playsInline
        className={`
          absolute z-0 top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          min-w-full min-h-full 
          object-cover 
          transition-opacity duration-1000 
          ${isFading ? 'opacity-0' : 'opacity-100'}
        `}
        // --- CAMBIO: Filtro para dar brillo al video ---
        style={{ filter: "brightness(1.12) contrast(1.05) saturate(1.08)" }}
        onTransitionEnd={handleTransitionEnd}
      >
        <source src={videoSources[activeIndex]} type="video/mp4" />
      </video>

      {/* Video siguiente para precarga */}
      <video
        key={videoSources[nextIndex]}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover opacity-0"
        // --- CAMBIO: Filtro para dar brillo al video ---
        style={{ filter: "brightness(1.12) contrast(1.05) saturate(1.08)" }}
      >
        <source src={videoSources[nextIndex]} type="video/mp4" />
      </video>

      {/* --- CAPAS DE SUPERPOSICIÓN --- */}
      {/* --- CAMBIO: Capa oscura más clara para mejorar visibilidad del video --- */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Contenido de texto y CTA */}
      <div className="relative z-20 px-4 text-white">
        {/* --- CAMBIO: Sombra en el texto para legibilidad --- */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Bióloga especialista en Epífitas
        </h1>
        {/* --- CAMBIO: Sombra en el texto para legibilidad --- */}
        <p className="font-sans text-lg md:text-xl max-w-4xl mx-auto mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          Caracterización, manejo y monitoreo de epífitas vasculares y no vasculares para licenciamiento, seguimiento y compensaciones ambientales.
        </p>
        <a
          href="#contacto"
          className="bg-dorado-suave text-verde-musgo-oscuro font-sans font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg text-lg"
        >
          Solicita una asesoría
        </a>
      </div>
    </div>
  );
};

export default Hero;

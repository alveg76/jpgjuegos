// src/components/Hero.tsx
'use client';

import React, { useState, useEffect } from 'react';

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
    // --- CONTENEDOR PRINCIPAL (Paso 1) ---
    // 1. `relative`: Es el ancla para los elementos posicionados absolutamente adentro.
    // 2. `h-screen`: Ocupa el 100% de la altura de la pantalla del dispositivo.
    // 3. `overflow-hidden`: Asegura que ninguna parte del video se desborde.
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      
      {/* --- VIDEOS DE FONDO (Paso 2) ---
          La combinación de estas clases es la clave para un fondo de video perfecto.
      */}
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
        onTransitionEnd={handleTransitionEnd}
      >
        <source src={videoSources[activeIndex]} type="video/mp4" />
      </video>

      {/* Video siguiente para precarga (mismos estilos responsivos) */}
      <video
        key={videoSources[nextIndex]}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover opacity-0"
      >
        <source src={videoSources[nextIndex]} type="video/mp4" />
      </video>

      {/* --- CAPAS DE SUPERPOSICIÓN (Paso 3) --- */}
      {/* Capa oscura para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Contenido de texto y CTA */}
      <div className="relative z-20 px-4 text-white">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Bióloga especialista en Epífitas
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-4xl mx-auto mb-8">
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
// src/components/About.tsx
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    // La sección ahora es transparente para mostrar el fondo de musgo
    <section id="sobre-mi" className="py-20"> 
      <div className="container mx-auto px-6">
        {/* Añadimos un contenedor con fondo oscuro para la legibilidad */}
        <div className="bg-verde-musgo-oscuro p-8 md:p-12 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 w-full flex justify-center">
            <Image
              src="/images/mary-garzon-perfil.jpg"
              alt="Foto de perfil de Mary Janeth Garzón, bióloga experta en epífitas" // Texto 'alt' ligeramente mejorado para SEO
              width={320}
              height={320}
              className="rounded-full object-cover w-[280px] h-[280px] md:w-[320px] md:h-[320px] shadow-2xl border-4 border-dorado-suave"
            />
          </div>
          <div className="md:w-2/3 w-full">
            <h2 className="font-serif text-4xl font-bold text-crema mb-4">
              Sobre mí
            </h2>
            <p className="font-sans text-lg text-crema leading-relaxed mb-4">
              Soy bióloga con maestría en ciencias ambientales, especialista en el estudio de epífitas (epifitóloga). Mi experiencia abarca el levantamiento e identificación de flora, incluyendo epífitas vasculares y no vasculares, para la elaboración de inventarios, líneas base, evaluación de impactos (EIA), planes de manejo (PMA) y programas de rescate y monitoreo.
            </p>
            <p className="font-sans text-lg text-crema leading-relaxed mb-4">
              He trabajado como consultora y líder de componente en equipos multidisciplinarios para proyectos de energía, hidrocarburos e infraestructura en diversas regiones, lo que me ha permitido conocer a fondo la invaluable diversidad biológica de Colombia. Mi labor se centra en asegurar la calidad técnica, la trazabilidad de datos (GDB, Darwin Core) y el cumplimiento de la normatividad ambiental.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

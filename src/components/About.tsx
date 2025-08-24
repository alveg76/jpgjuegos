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
              alt="Foto de perfil de Mary Janeth Garzón"
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
              Soy bióloga (epifitóloga) con experiencia en inventarios, líneas base, evaluación de impactos, planes de manejo, rescate–traslado–reubicación, y programas de seguimiento y monitoreo para proyectos de energía, hidrocarburos, infraestructura vial y líneas de transmisión.
            </p>
            <p className="font-sans text-lg text-crema leading-relaxed">
              He trabajado como consultora y líder de componente en equipos multidisciplinarios, asegurando calidad técnica, trazabilidad de datos (GDB, Darwin Core) y cumplimiento normativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
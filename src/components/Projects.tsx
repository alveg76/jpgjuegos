// components/Projects.tsx
import React from 'react';
import Image from 'next/image';

// Separamos los datos del diseño. Esto hace que sea fácil agregar más proyectos.

const projectsData = [
  {
    title: "Plan Ambiental Municipal",
    location: "Fusagasugá, Cundinamarca",
    description: "Diagnóstico integral urbano y rural, identificando fuentes de contaminación, necesidades de protección hídrica y mejoras en la gestión de residuos.",
    imageUrl: "/images/proyecto-fusagasuga.jpg", 
  },
  {
    title: "Plan de Saneamiento y Manejo de Vertimientos",
    location: "La Palma, Cundinamarca",
    description: "Diseño de programas para optimizar la recolección y tratamiento de aguas residuales, incluyendo proyección de cargas contaminantes e inversiones por fases.",
    imageUrl: "/images/proyecto-lapalma.jpg",
  },
  {
    title: "PUEAA Aeropuerto Aguas Claras",
    location: "Ocaña, Norte de Santander (Aerocivil)",
    description: "Plan quinquenal para uso eficiente del agua, optimización de infraestructura hidráulica, reducción de pérdidas y fomento del reúso de agua tratada.",
    imageUrl: "/images/proyecto-aeropuerto.jpg",
  },
  {
    title: "Jardines Polinizadores y Senderos Interpretativos",
    location: "Facatativá, Cundinamarca",
    description: "Diseño e implementación de espacios para atraer y conservar fauna polinizadora local, y creación de material pedagógico para su apropiación.",
    imageUrl: "/images/proyecto-jardin.jpg", // La imagen que ya tenías
  },
  {
    title: "Diagnóstico y Diseño de PTAR",
    location: "Colegio NUSEFA (Policía Nacional)",
    description: "Diagnóstico del sistema de tratamiento de aguas residuales y diseño de mejoras para cumplir con la normativa de vertimientos.",
    imageUrl: "/images/proyecto-ptar-nusefa.jpg", // Sugiero un nombre de imagen específico
  },
  {
    title: "PUEAA - Captación de Agua Superficial",
    location: "SENA, Buga",
    description: "Plan estratégico para uso eficiente del recurso hídrico en actividades agrícolas, pecuarias e industriales, con mejoras en infraestructura y sistemas de reúso.",
    imageUrl: "/images/proyecto-sena-buga.jpg",
  },
  {
    title: "Plan de Gestión del Riesgo por Vertimientos",
    location: "SENA, Aguas Calientes",
    description: "Identificación, prevención y mitigación de riesgos asociados a la gestión de aguas residuales en un centro de formación agroindustrial.",
    imageUrl: "/images/proyecto-sena-aguascalientes.jpg",
  },

];

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-light">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-serif text-3xl font-bold text-blue-deep mb-12">
          Proyectos Destacados
        </h2>
        
        {/* --- IMPORTANTE ---
            Coloca imágenes para cada proyecto en la carpeta /public/images/
            Nómbralas como se indica en 'imageUrl' arriba.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-56 w-full">
                <Image
                  src={project.imageUrl}
                  alt={`Imagen del proyecto ${project.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-blue-deep">{project.title}</h3>
                <p className="font-sans text-sm text-gray-500 mb-2">{project.location}</p>
                <p className="font-sans text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
// components/Resources.tsx
import React from 'react';

const resourcesData = [
  {
    title: "Cartilla Educativa Ambiental",
    icon: "📚",
    fileUrl: "/docs/cartilla-educativa.pdf", // Debes crear este archivo
  },
  {
    title: "Infografía de Biodiversidad",
    icon: "🦋",
    fileUrl: "/docs/infografia-biodiversidad.pdf", // Debes crear este archivo
  },
  {
    title: "Ejemplo Plan de Manejo",
    icon: "📄",
    fileUrl: "/docs/ejemplo-pma.pdf", // Debes crear este archivo
  },
];

const Resources = () => {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-blue-deep mb-12">
          Recursos Descargables
        </h2>
        
        {/* --- IMPORTANTE ---
            Coloca los PDFs en la carpeta /public/docs/
            Nómbralos como se indica en 'fileUrl' arriba.
        */}
        <div className="flex flex-wrap justify-center gap-8">
          {resourcesData.map((resource) => (
            <a
              key={resource.title}
              href={resource.fileUrl}
              download
              className="bg-gray-light p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center w-64 text-center"
            >
              <div className="text-4xl mb-3">{resource.icon}</div>
              <h3 className="font-sans font-bold text-blue-deep">{resource.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
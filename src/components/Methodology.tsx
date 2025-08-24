// src/components/Methodology.tsx
import React from 'react';

const methodologySteps = [
  {
    name: "Pre-campo",
    description: "Revisión de secundaria, definición de coberturas y diseño de muestreo.",
  },
  {
    name: "Campo",
    description: "Levantamiento sistemático, georreferenciación (GPX), registro fotográfico y prensado.",
  },
  {
    name: "Poscampo",
    description: "Depuración de datos, análisis, GDB/plantillas Darwin Core, indicadores y resultados.",
  },
  {
    name: "Gestión Ambiental",
    description: "Impactos, fichas de manejo, cronogramas, costos y seguimiento.",
  },
  {
    name: "Soporte y Socialización",
    description: "Presentaciones a cliente/autoridad y atención de comentarios.",
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-serif text-4xl font-bold text-crema mb-12">
          Metodología de Trabajo
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-verde-oliva-claro hidden md:block"></div>
          <div className="space-y-12">
            {methodologySteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center w-full">
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                  <div className="bg-verde-musgo-oscuro p-6 rounded-lg shadow-xl border border-verde-oliva-claro/50">
                    <h3 className="font-serif text-2xl font-bold text-crema">{step.name}</h3>
                    <p className="font-sans mt-2 text-crema/90">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-2/12 order-2 flex justify-center">
                  <div className="bg-dorado-suave text-verde-musgo-oscuro rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                    {index + 1}
                  </div>
                </div>
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

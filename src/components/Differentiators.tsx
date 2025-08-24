// src/components/Differentiators.tsx
import React from 'react';

const differentiators = [
  { title: "Especialización Real", description: "Profundo conocimiento en epífitas vasculares y no vasculares, garantizando rigurosidad técnica.", icon: "🔬" },
  { title: "Calidad de Datos", description: "Procesos de depuración, trazabilidad y compatibilidad con SIB y requerimientos de la autoridad.", icon: "✅" },
  { title: "Acompañamiento Integral", description: "Respuesta a comentarios y soporte continuo hasta la aprobación final del proyecto.", icon: "🤝" },
  { title: "Experiencia en Campo", description: "Seguridad, logística y excelente relacionamiento con comunidades y equipos en el terreno.", icon: "🧭" },
];

const Differentiators = () => {
  return (
    <section id="diferenciales" className="py-20 bg-verde-musgo-oscuro text-crema">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl font-bold mb-12">
          Diferenciales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-2xl font-bold text-dorado-suave">{item.title}</h3>
              <p className="font-sans mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
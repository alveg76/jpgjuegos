// src/components/Experience.tsx
import React from 'react';

const experienceData = [
  {
    sector: "Energía Solar",
    project: "Modificación de licencia – Parque Fotovoltaico Atlántico 199.5 MW.",
    role: "Bióloga epifitas – línea base, metodología, evaluación de impactos, PMA, monitoreo."
  },
  {
    sector: "Transmisión Eléctrica",
    project: "Campañas para ISA Intercolombia (Caribe 500 kV; Sabanalarga–Bolívar; Cuestecita–Copey–Fundación).",
    role: "Muestreos de epífitas vasculares y no vasculares."
  },
  {
    sector: "Hidrocarburos",
    project: "Componentes bióticos en consultorías para Ecoprol y aliados.",
    role: "Línea base, vedas, fichas de manejo, GDB."
  },
  {
    sector: "Infraestructura Vial",
    project: "Inventarios de flora/fauna, PMA, abandono y seguimiento.",
    role: "Inventarios, planes de manejo y monitoreo."
  },
  {
    sector: "Monitoreos y Compensaciones",
    project: "PCPB Arroyo Grande (Sucre).",
    role: "Monitoreo de epífitas y entrega de memorias para SIB."
  },
  {
    sector: "Roles de Liderazgo",
    project: "Diversos proyectos en Andes, Caribe y Orinoquía.",
    role: "Líder de Epífitas y Profesional Vedas, con salidas de campo, procesamiento de información y respuesta a autoridades."
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-serif text-4xl font-bold text-crema mb-12">
          Experiencia Destacada
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-verde-musgo-oscuro p-6 rounded-lg shadow-xl border-l-4 border-dorado-suave">
              <h3 className="font-serif text-2xl font-bold text-crema">{exp.sector}</h3>
              <p className="font-sans font-semibold text-crema/90 mt-2">{exp.project}</p>
              <p className="font-sans text-crema/80 mt-1"><span className="font-bold">Rol:</span> {exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

// src/components/Services.tsx
import React from 'react';

const ServiceIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="text-4xl text-dorado-suave mb-4">{children}</div>
);

const servicesData = [
  // ... (tus datos de servicios no cambian)
  { icon: "🌿", title: "Caracterización de Epífitas y Flora", description: "Metodología, muestreo, análisis y línea base de flora vascular y no vascular." },
  { icon: "📊", title: "Evaluación de Impactos", description: "Análisis de escenarios con y sin proyecto, y formulación de medidas de manejo." },
  { icon: "🗺️", title: "Planes de Manejo Ambiental", description: "Desarrollo de fichas de manejo y estimación de áreas de afectación para el medio biótico." },
  { icon: "🦋", title: "Rescate y Monitoreo", description: "Traslado y reubicación de epífitas con registro detallado (GPX, fotográfico) y diseño de indicadores de seguimiento." },
  { icon: "🗃️", title: "Gestión de Datos y Permisos", description: "Administración de GDB, plantillas Darwin Core y cierre de permisos de recolección (FUN)." },
  { icon: "🗣️", title: "Soporte Técnico y Regulatorio", description: "Presentación ante autoridades, atención de requerimientos y socialización de resultados." },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl font-bold text-crema mb-12">
          Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            // Las tarjetas ahora tienen fondo oscuro y texto claro
            <div key={index} className="bg-verde-musgo-oscuro p-8 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-verde-oliva-claro/50">
              <ServiceIcon>{service.icon}</ServiceIcon>
              <h3 className="font-serif text-2xl font-bold text-crema mb-3">{service.title}</h3>
              <p className="font-sans text-base text-crema/90">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
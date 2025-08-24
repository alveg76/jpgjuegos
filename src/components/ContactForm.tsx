// components/ContactForm.tsx
'use client'; // Necesario para usar hooks como useState

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integraría un servicio de envío de email (Ej: EmailJS, Formspree)
    // Por ahora, solo mostraremos los datos en la consola.
    console.log("Formulario enviado:", formData);
    alert("¡Mensaje enviado con éxito! (Simulación)");
    setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
  };

  return (
    <section id="contacto" className="py-20 bg-gray-light">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-serif text-3xl font-bold text-blue-deep mb-12">
          Contáctame
        </h2>
        <div className="flex flex-col md:flex-row gap-12">

          {/* Columna de Información */}
          <div className="md:w-1/3 w-full">
            <h3 className="font-serif text-2xl font-bold text-blue-deep mb-4">Información de Contacto</h3>
            <p className="font-sans text-gray-700 mb-2">
              <strong>Email:</strong> <a href="mailto:garzon.ambiental@gmail.com" className="text-green-leaf hover:underline">garzon.ambiental@gmail.com</a>
            </p>
            <p className="font-sans text-gray-700 mb-2">
              <strong>Teléfono:</strong> <a href="tel:+573203730905" className="text-green-leaf hover:underline">320 373 0905</a>
            </p>
            <p className="font-sans text-gray-700">
              <strong>Ubicación:</strong> Bogotá, Colombia
            </p>
          </div>

          {/* Columna del Formulario */}
          <div className="md:w-2/3 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="font-sans font-bold text-gray-700">Nombre</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-leaf"/>
              </div>
              <div>
                <label htmlFor="email" className="font-sans font-bold text-gray-700">Correo Electrónico</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-leaf"/>
              </div>
              <div>
                <label htmlFor="message" className="font-sans font-bold text-gray-700">Mensaje</label>
                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-leaf"></textarea>
              </div>
              <button type="submit" className="bg-blue-deep text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors shadow-md">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
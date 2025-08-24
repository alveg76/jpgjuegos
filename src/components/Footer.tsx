// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-verde-musgo-oscuro text-crema py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="font-sans">
          © {currentYear} Mary Janeth Garzón Gutiérrez. Todos los derechos reservados.
        </p>
        <p className="text-sm text-verde-oliva-claro mt-1">
          Bogotá, Colombia.
          Powered By ianovalabs.com
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
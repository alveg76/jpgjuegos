import type { Config } from "tailwindcss";

const config: Config = {
  // --- ESTA ES LA SECCIÓN CRÍTICA QUE HEMOS CORREGIDO ---
  content: [
    // Ahora le decimos a Tailwind que busque dentro de la carpeta "src"
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-musgo-oscuro': '#2E3D33',
        'crema': '#F5F1E6',
        'dorado-suave': '#C6A664',
        'verde-oliva-claro': '#A3B18A',
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)'],
        sans: ['var(--font-open-sans)'],
      },
      backgroundImage: {
        'musgo-textura': "url('/textures/musgo-fondo.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
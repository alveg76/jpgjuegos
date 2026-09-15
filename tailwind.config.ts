import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Super Mario Bros Palette
        'mario-blue': '#6B8CFF',
        'mario-blue-light': '#5C94FC',
        'mario-red': '#E52521',
        'mario-yellow': '#FBD000',
        'mario-green': '#00A800',
        'mario-brown': '#8B4513',
        'mario-white': '#FFFFFF',
        'mario-cream': '#F5F1E6',
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)'],
        sans: ['var(--font-open-sans)'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      boxShadow: {
        'mario-block': '0 4px 0 rgba(139, 69, 19, 0.3)',
        'mario-card': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'mario-sky': 'linear-gradient(180deg, #6B8CFF 0%, #B4D7FF 100%)',
        'mario-clouds': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 40\"><path d=\"M10 20 Q15 15 20 20 Q25 15 30 20 M40 25 Q45 20 50 25 Q55 20 60 25\" fill=\"none\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"2\"/></svg>')",
      },
    },
  },
  plugins: [],
};

export default config;
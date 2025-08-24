// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[--color-verde-musgo-oscuro]/85 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-verde-musgo-oscuro)/0.65]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* IZQUIERDA: LOGO + NOMBRE + SUBTÍTULO */}
        <Link href="/" className="flex items-center gap-3" aria-label="Inicio">
          <Image
            src="/images/logo-mary.png"  // cambia el nombre si tu archivo es distinto
            width={160}
            height={160}
            alt="Logo Mary Janeth Garzón"
            className="h-10 w-auto md:h-12"
            priority
          />
          <div className="leading-tight">
            <div className="font-serif text-lg md:text-xl font-semibold text-[--color-crema]">
              Mary Janeth Garzón
            </div>
            <div className="text-xs md:text-sm text-[--color-green-leaf]">
              Bióloga especialista en Epífitas
            </div>
            {/* Si prefieres dorado: text-[--color-dorado-suave] */}
          </div>
        </Link>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[--color-crema] hover:opacity-80 focus:outline-none md:hidden"
          aria-label="Abrir menú"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </button>

        {/* MENÚ DESKTOP */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-[--color-crema] hover:text-[--color-dorado-suave] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden border-t border-[color:var(--color-crema)/0.1]">
          <ul className="space-y-1 px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-[--color-crema] hover:bg-[color:var(--color-crema)/0.06] hover:text-[--color-dorado-suave] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}


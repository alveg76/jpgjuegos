"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const primaryNav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Familiares", href: "#familiares" },
  { label: "Estrategia", href: "#estrategia" },
  { label: "Didácticos", href: "#didacticos" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Preventas", href: "#preventas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartCount = 3;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-[--color-border-subtle] backdrop-blur-xl transition-colors duration-300",
        isScrolled
          ? "bg-[color-mix(in_srgb,_var(--color-panel)_82%,_transparent)]"
          : "bg-[color-mix(in_srgb,_var(--color-panel)_55%,_transparent)]",
      ].join(" ")}
    >
      <div className="border-b border-[--color-border-subtle]/80">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[--color-border-subtle] text-[--color-text-primary] transition hover:border-[--color-accent-primary] hover:text-[--color-accent-primary] md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-3" aria-label="JPG Juegos">
            <div className="relative hidden h-[64px] w-[260px] items-center justify-center md:flex">
              <Image
                src="/images/logoJPG-header.png"
                alt="Logo JPG Juegos"
                width={420}
                height={180}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <form className="relative hidden flex-1 items-center md:flex" role="search" aria-label="Buscar productos">
            <input
              type="search"
              placeholder="Buscar Catan, Saboteur, expansiones, etc."
              className="w-full rounded-2xl border border-[--color-border-subtle] bg-[--color-panel] py-3 pl-5 pr-12 text-sm text-[--color-text-primary] placeholder:text-[--color-text-muted] focus:border-[--color-accent-primary] focus:outline-none focus:ring-2 focus:ring-[--color-accent-primary]/30"
            />
            <button
              type="submit"
              className="absolute right-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[--color-accent-primary]/20 text-[--color-accent-primary]"
              aria-label="Buscar"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <div className="ml-auto hidden items-center gap-4 md:flex">
            <div className="text-right text-xs text-[--color-text-muted]">
              <p className="font-semibold text-[--color-text-primary]">Soporte JPG Juegos</p>
              <p>+57 310 782 21 38</p>
            </div>
            <div className="hidden h-10 w-px bg-[--color-border-subtle] lg:block" aria-hidden />
            <div className="flex items-center gap-4 text-sm">
              <Link href="#gift-cards" className="font-medium text-[--color-text-muted] transition hover:text-[--color-accent-primary]">
                Certificados de regalo
              </Link>
              <Link href="#login" className="font-medium text-[--color-text-muted] transition hover:text-[--color-accent-primary]">
                Iniciar sesión / Regístrate
              </Link>
              <Link
                href="#cart"
                className="relative inline-flex items-center gap-2 rounded-2xl border border-[--color-accent-primary]/50 px-4 py-2 text-sm font-semibold text-[--color-accent-primary] transition hover:border-[--color-accent-primary] hover:bg-[--color-accent-primary]/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="9" cy="20" r="1.5" />
                  <circle cx="17" cy="20" r="1.5" />
                  <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17H18a2 2 0 0 0 1.96-1.63L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="rounded-xl bg-[--color-accent-primary] px-2 py-0.5 text-xs font-bold text-[#041229]">{cartCount}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden border-t border-[--color-border-subtle] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs uppercase tracking-[0.2em] sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-4" aria-label="Categorías principales">
            {primaryNav.map((item) => (
              <Link key={item.label} href={item.href} className="text-[--color-text-muted] transition hover:text-[--color-accent-primary]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[--color-border-subtle] bg-[--color-panel-soft] p-4 md:hidden">
          <form className="relative mb-4" role="search" aria-label="Buscar productos en móvil">
            <input
              type="search"
              placeholder="Buscar productos"
              className="w-full rounded-2xl border border-[--color-border-subtle] bg-[--color-panel] py-3 pl-4 pr-12 text-sm text-[--color-text-primary] placeholder:text-[--color-text-muted]"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[--color-text-muted]" aria-label="Buscar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" strokeLinecap="round" />
              </svg>
            </button>
          </form>

            <div className="mt-4 grid gap-2 text-sm">
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-[--color-border-subtle] px-4 py-2 text-[--color-text-muted] transition hover:border-[--color-accent-primary] hover:text-[--color-accent-primary]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#gift-cards"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl bg-[--color-panel] px-4 py-3 text-center text-[--color-text-primary]"
            >
              Certificados de regalo
            </Link>
            <Link
              href="#login"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl bg-[--color-panel] px-4 py-3 text-center text-[--color-text-primary]"
            >
              Iniciar sesión / Regístrate
            </Link>
            <Link
              href="tel:+525500000000"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl border border-[--color-border-subtle] px-4 py-3 text-center text-[--color-text-muted]"
            >
              Soporte: +52 55 0000 0000
            </Link>
            <Link
              href="#cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl border border-[--color-accent-primary] px-4 py-3 text-[--color-accent-primary]"
            >
              <span>Carrito</span>
              <span className="rounded-xl bg-[--color-accent-primary] px-2 py-0.5 text-xs font-bold text-[#041229]">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


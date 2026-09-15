"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/store/cart.store";

const primaryNav = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/productos" },
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
  const [mounted, setMounted] = useState(false);
  const { toggle, count } = useCart();
  const cartCount = count();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b-4 border-mario-brown shadow-lg transition-all duration-300 ${
        mounted && isScrolled ? "bg-mario-blue/95 backdrop-blur-sm shadow-[0_8px_24px_rgba(17,24,39,0.1)]" : "bg-mario-blue"
      }`}
    >
      <div className="border-b-2 border-mario-brown bg-mario-blue/95">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-4 sm:py-4 md:px-6 lg:px-8">
          {/* Hamburger Menu - Mobile Only */}
          <button
            className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border-2 border-mario-brown text-mario-red font-bold transition hover:bg-mario-yellow hover:text-mario-blue md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center" aria-label="JPG Juegos">
            <div className="relative h-10 sm:h-12 md:h-12">
              <Image
                src="/images/logoJPG-header.png"
                alt="Logo JPG Juegos"
                width={160}
                height={70}
                className="h-full w-auto object-contain drop-shadow-lg"
                priority
              />
            </div>
          </Link>

          {/* Search Bar - Desktop Only */}
          <form className="relative hidden flex-1 items-center md:flex md:max-w-md lg:max-w-lg" role="search" aria-label="Buscar productos">
            <input
              type="search"
              placeholder="Buscar juegos..."
              className="w-full rounded-lg border-2 border-mario-brown bg-mario-white py-2 pl-4 pr-10 text-xs md:text-sm text-mario-brown placeholder:text-mario-brown font-semibold focus:border-mario-red focus:outline-none"
            />
            <button
              type="submit"
              className="mario-button absolute right-1 h-7 w-7 p-0 text-xs"
              aria-label="Buscar"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          {/* Right Section */}
          <div className="ml-auto flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Phone - Desktop Only */}
            <div className="hidden text-right text-xs text-mario-white font-bold drop-shadow lg:block">
              <p className="text-mario-yellow">+57 310 782 21 38</p>
            </div>
            
            {/* Cart Button */}
            <button
              type="button"
              onClick={toggle}
              className="mario-button relative inline-flex items-center gap-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold flex-shrink-0"
              aria-label="Abrir carrito"
            >
              <span className="text-lg sm:text-base">🛒</span>
              <span className="hidden sm:inline whitespace-nowrap">Carrito</span>
              {mounted && cartCount > 0 && (
                <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-mario-yellow text-xs font-bold text-mario-red flex-shrink-0">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - Desktop Only */}
      <div className="hidden border-t-2 border-mario-brown bg-mario-blue md:block">
        <div className="mx-auto flex max-w-7xl items-center flex-wrap gap-2 px-4 py-2 sm:px-6 lg:px-8 text-xs font-bold uppercase tracking-wider">
          <nav className="flex flex-wrap items-center gap-3 lg:gap-4" aria-label="Categorías principales">
            {primaryNav.map((item) => (
              <a key={item.label} href={item.href} className="text-mario-white hover:text-mario-yellow transition whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto hidden lg:block">
            <a href="#login" className="text-mario-white hover:text-mario-yellow transition text-xs font-semibold">
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t-2 border-mario-brown bg-mario-blue p-4 sm:p-6 md:hidden">
          <form className="relative mb-6" role="search" aria-label="Buscar productos en móvil">
            <input
              type="search"
              placeholder="Buscar..."
              className="w-full rounded-lg border-2 border-mario-brown bg-mario-white py-3 pl-4 pr-12 text-sm text-mario-brown font-semibold"
            />
            <button type="submit" className="mario-button absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-xs" aria-label="Buscar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <nav className="space-y-3">
            {primaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg bg-mario-blue/80 px-4 py-3 font-bold text-mario-yellow hover:bg-mario-yellow hover:text-mario-blue transition text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 border-t-2 border-mario-brown pt-4 space-y-3">
            <a
              href="#gift-cards"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-center font-bold text-mario-white hover:bg-mario-yellow hover:text-mario-blue transition text-base"
            >
              Certificados
            </a>
            <a
              href="#login"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-center font-bold text-mario-white hover:bg-mario-yellow hover:text-mario-blue transition text-base"
            >
              Iniciar sesión
            </a>
            <a
              href="tel:+573107822138"
              className="block rounded-lg px-4 py-3 text-center font-bold text-mario-white text-base"
            >
              📞 +57 310 782 21 38
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


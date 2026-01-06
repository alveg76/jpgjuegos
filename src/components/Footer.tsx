import Link from "next/link";

const shopLinks = [
  { label: "Preventas", href: "#tcg" },
  { label: "Ediciones deluxe", href: "#collectibles" },
  { label: "Miniaturas", href: "#miniatures" },
  { label: "Accesorios", href: "#supplies" },
];

const supportLinks = [
  { label: "Mi cuenta", href: "#login" },
  { label: "Historial de pedidos", href: "#orders" },
  { label: "Gift Cards", href: "#gift-cards" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

const communityLinks = [
  { label: "Discord", href: "https://discord.gg/placeholder" },
  { label: "Twitch", href: "https://twitch.tv/placeholder" },
  { label: "Instagram", href: "https://instagram.com/placeholder" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[--color-border-subtle] bg-[--color-surface-contrast] text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-[--color-text-primary]">JPG Juegos</p>
            <p className="mt-3 text-[--color-text-muted]">
              Ayudamos a crear experiencias de juego competitivas y narrativas. Pick-up mismo día y envíos protegidos a todo Colombia.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[--color-accent-secondary]">
              Nivel +3 en servicio
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-text-muted]">Tienda</p>
            <ul className="mt-4 space-y-2">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <Link className="text-[--color-text-primary]/80 transition hover:text-[--color-accent-primary]" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-text-muted]">Soporte</p>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link className="text-[--color-text-primary]/80 transition hover:text-[--color-accent-primary]" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-text-muted]">Comunidad</p>
            <ul className="mt-4 space-y-2">
              {communityLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    className="text-[--color-text-primary]/80 transition hover:text-[--color-accent-primary]"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-[--color-text-muted]">
              <p>Atención: Lun - Sáb / 11:00 - 20:00</p>
              <p>Reserva pick-up en: <strong className="text-[--color-text-primary]">+57 310 782 21 38</strong></p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[--color-border-subtle] pt-6 text-[--color-text-muted] md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} JPG Juegos. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#privacidad" className="hover:text-[--color-accent-primary]">
              Aviso de privacidad
            </Link>
            <Link href="#terminos" className="hover:text-[--color-accent-primary]">
              Términos y condiciones
            </Link>
            <Link href="mailto:hola@mythicnexus.games" className="hover:text-[--color-accent-primary]">
              hola@mythicnexus.games
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
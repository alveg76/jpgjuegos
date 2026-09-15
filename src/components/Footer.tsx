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
    <footer className="mt-16 border-t-4 border-mario-brown bg-mario-blue text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-mario-yellow drop-shadow">🎮 JPG Juegos</p>
            <p className="mt-3 text-mario-white font-semibold">
              Ayudamos a crear experiencias de juego competitivas y narrativas. Pick-up mismo día y envíos protegidos a todo Colombia.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest font-bold text-mario-yellow drop-shadow">
              ⭐ Nivel +3 en servicio
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-mario-yellow drop-shadow">🛍️ Tienda</p>
            <ul className="mt-4 space-y-2">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <a className="text-mario-white font-semibold transition hover:text-mario-yellow" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-mario-yellow drop-shadow">🆘 Soporte</p>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <a className="text-mario-white font-semibold transition hover:text-mario-yellow" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-mario-yellow drop-shadow">👥 Comunidad</p>
            <ul className="mt-4 space-y-2">
              {communityLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-mario-white font-semibold transition hover:text-mario-yellow"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-mario-white font-semibold">
              <p>📅 Lun - Sáb / 11:00 - 20:00</p>
              <p>📞 +57 310 782 21 38</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t-2 border-mario-yellow pt-6 text-mario-white md:flex-row md:items-center md:justify-between font-semibold">
          <p>© {currentYear} JPG Juegos. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#privacidad" className="hover:text-mario-yellow">
              Aviso de privacidad
            </a>
            <a href="#terminos" className="hover:text-mario-yellow">
              Términos y condiciones
            </a>
            <a href="mailto:info@jpgjuegos.com" className="hover:text-mario-yellow">
              info@jpgjuegos.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
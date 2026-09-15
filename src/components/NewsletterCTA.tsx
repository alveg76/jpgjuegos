export default function NewsletterCTA() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="mario-card p-8 border-4 border-mario-brown">
          <p className="text-xs uppercase tracking-widest text-mario-brown font-bold">📬 Newsletter + Drops</p>
          <h2 className="mt-3 text-3xl font-bold text-mario-red">Anticípate a preventas y eventos secretos</h2>
          <p className="mt-2 text-sm text-mario-brown font-semibold">
            Enviamos máximo 2 correos por semana con códigos early-bird y convites a torneos cerrados.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="newsletter-email" className="text-xs uppercase tracking-widest text-mario-brown font-bold">
                📧 Email principal
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="player@mydomain.com"
                className="mario-card mt-2 w-full px-4 py-3 text-sm text-mario-brown placeholder:text-mario-brown/50 focus:ring-2 focus:ring-mario-red focus:border-mario-red border-2 border-mario-brown"
              />
            </div>
            <div>
              <label htmlFor="newsletter-discord" className="text-xs uppercase tracking-widest text-mario-brown font-bold">
                🎮 Usuario de Discord (opcional)
              </label>
              <input
                id="newsletter-discord"
                type="text"
                placeholder="MythicPlayer#2026"
                className="mario-card mt-2 w-full px-4 py-3 text-sm text-mario-brown placeholder:text-mario-brown/50 border-2 border-mario-brown"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {["TCG", "Juegos de mesa", "Miniaturas", "Rol"].map((interest) => (
                <label key={interest} className="inline-flex items-center gap-2 mario-card px-4 py-2 text-sm text-mario-brown font-semibold border-2 border-mario-brown">
                  <input type="checkbox" className="accent-mario-red w-4 h-4" />
                  {interest}
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="mario-button w-full text-sm font-bold"
            >
              ✓ Unirme al briefing
            </button>
          </form>
        </div>
        <div className="mario-card p-8 border-4 border-mario-brown">
          <p className="text-xs uppercase tracking-widest text-mario-brown font-bold">☎️ Contacto</p>
          <h3 className="mt-3 text-2xl font-bold text-mario-red">¿Necesitas armar pick-up o cotizar?</h3>
          <p className="mt-2 text-sm text-mario-brown font-semibold">
            Tenemos personal especializado en TCG y juegos boutique. Escríbenos para reservar mesas o fotos en vivo.
          </p>
          <div className="mt-5 space-y-4 text-sm text-mario-brown font-semibold">
            <p>
              WhatsApp <span className="text-mario-red font-bold">+57 310 782 21 38</span>
            </p>
            <p>
              Discord <span className="text-mario-blue font-bold">discord.gg/jpgjuegos</span>
            </p>
            <p>
              Ubicación <span className="text-mario-green font-bold">Bogotá</span>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/573107822138"
              className="mario-button flex-1 text-xs font-bold"
            >
              📞 WhatsApp
            </a>
            <a
              href="mailto:ing.giovanny01@gmail.com"
              className="mario-button-secondary flex-1 text-xs font-bold"
            >
              ✉️ Correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

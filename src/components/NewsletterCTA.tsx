export default function NewsletterCTA() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel p-8">
          <p className="text-xs uppercase tracking-[0.5em] text-[--color-text-muted]">Newsletter + Drops</p>
          <h2 className="mt-3 text-3xl font-semibold text-[--color-text-primary]">Anticípate a preventas, eventos y restocks secretos</h2>
          <p className="mt-2 text-sm text-[--color-text-muted]">
            Enviamos máximo 2 correos por semana con códigos early-bird y convites a torneos cerrados.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="newsletter-email" className="text-xs uppercase tracking-[0.4em] text-[--color-text-muted]">
                Email principal
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="player@mydomain.com"
                className="mt-2 w-full rounded-2xl border border-[--color-border-subtle] bg-[--color-panel] px-4 py-3 text-sm text-[--color-text-primary] placeholder:text-[--color-text-muted] focus:border-[--color-accent-primary] focus:outline-none focus:ring-2 focus:ring-[--color-accent-primary]/30"
              />
            </div>
            <div>
              <label htmlFor="newsletter-discord" className="text-xs uppercase tracking-[0.4em] text-[--color-text-muted]">
                Usuario de Discord (opcional)
              </label>
              <input
                id="newsletter-discord"
                type="text"
                placeholder="MythicPlayer#2026"
                className="mt-2 w-full rounded-2xl border border-[--color-border-subtle] bg-[--color-panel] px-4 py-3 text-sm text-[--color-text-primary] placeholder:text-[--color-text-muted]"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {["TCG", "Juegos de mesa", "Miniaturas", "Rol"].map((interest) => (
                <label key={interest} className="inline-flex items-center gap-2 rounded-2xl border border-[--color-border-subtle] px-4 py-2 text-sm text-[--color-text-muted]">
                  <input type="checkbox" className="accent-[--color-accent-primary]" />
                  {interest}
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-[--color-accent-primary] px-6 py-3 text-sm font-semibold text-[#041229] transition hover:-translate-y-0.5"
            >
              Unirme al briefing
            </button>
          </form>
        </div>
        <div className="soft-card border border-[--color-border-subtle] bg-[--color-panel] p-8">
          <p className="text-xs uppercase tracking-[0.5em] text-[--color-text-muted]">Contacto</p>
          <h3 className="mt-3 text-2xl font-semibold text-[--color-text-primary]">¿Necesitas armar pick-up o cotizar bulk?</h3>
          <p className="mt-2 text-sm text-[--color-text-muted]">
            Tenemos personal especializado en TCG competitivos y juegos boutique. Escríbenos para reservar mesas, hacer trade o solicitar fotos en vivo.
          </p>
          <div className="mt-5 space-y-4 text-sm text-[--color-text-primary]">
            <p>
              WhatsApp concierge <span className="font-semibold text-[--color-accent-primary]">+57 310 782 2138</span>
            </p>
            <p>
              Discord server <span className="font-semibold text-[--color-accent-primary]">discord.gg/jpgjuegos</span>
            </p>
            <p>
              Flagship store <span className="font-semibold text-[--color-accent-secondary]">Bogota </span>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/573107822138"
              className="flex-1 rounded-2xl border border-[--color-accent-primary] px-4 py-3 text-center text-sm font-semibold text-[--color-accent-primary]"
            >
              Hablar por WhatsApp
            </a>
            <a
              href="mailto:ing.giovanny01@gmail.com"
              className="flex-1 rounded-2xl border border-[--color-border-subtle] px-4 py-3 text-center text-sm font-semibold text-[--color-text-primary]"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

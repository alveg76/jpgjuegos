const deals = [
  {
    id: "bundle-deluxe",
    title: "Bundle deluxe mesa + tapete",
    description: "Lleva Vault of Echoes + tapete neopreno + stand acrílico.",
    discount: "-18%",
    code: "NEXUSDELUXE",
    expires: "Expira domingo 23:59",
  },
  {
    id: "tcg-hold",
    title: "Combo TCG + hold",
    description: "Box Mythborn + sleeves dual + hold gratuito 7 días.",
    discount: "-12%",
    code: "HOLDMYTH",
    expires: "Limitado a 60 combos",
  },
  {
    id: "rpg-night",
    title: "Kit noche de rol",
    description: "Veil of Stars + set de dados metal + velas LED.",
    discount: "-20%",
    code: "ROLNEXUS",
    expires: "Incluye envío express",
  },
];

export default function DealsOfWeek() {
  return (
    <section id="deals" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="soft-card border border-[--color-border-subtle] bg-[--color-panel] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[--color-text-muted]">Deals of the week</p>
            <h2 className="mt-2 text-3xl font-semibold text-[--color-text-primary]">Ofertas que se van en horas</h2>
            <p className="text-sm text-[--color-text-muted]">Stackea con XP Rewards y obtén boosters sorpresa en pedidos mayores a $2,500 MXN.</p>
          </div>
          <span className="text-sm font-semibold text-[--color-accent-secondary]">Actualizado hoy</span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {deals.map((deal) => (
            <article key={deal.id} className="flex flex-col gap-4 rounded-2xl border border-[--color-border-subtle] bg-[--color-card] p-6">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-[--color-text-primary]">{deal.title}</p>
                <span className="rounded-full bg-[--color-accent-primary]/15 px-3 py-1 text-xs font-bold text-[--color-accent-primary]">
                  {deal.discount}
                </span>
              </div>
              <p className="text-sm text-[--color-text-muted]">{deal.description}</p>
              <div className="rounded-2xl border border-dashed border-[--color-border-strong] bg-[--color-panel-soft] px-4 py-3 text-center text-sm font-semibold tracking-[0.3em] text-[--color-text-primary]">
                {deal.code}
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-[--color-text-muted]">{deal.expires}</p>
              <button className="rounded-2xl border border-[--color-accent-primary]/50 px-4 py-2 text-sm font-semibold text-[--color-accent-primary] transition hover:border-[--color-accent-primary] hover:bg-[--color-accent-primary]/10">
                Canjear ahora
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

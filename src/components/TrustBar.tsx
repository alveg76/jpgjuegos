const trustSignals = [
  {
    title: "1️⃣ Envío gratis desde $100.000",
    description: "Despachos desde Bogotá a toda Colombia con empaque seguro.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 7h13l3 5h2v6h-3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "2️⃣ Reserva y agrupa tus pedidos",
    description: "Hasta 7 días sin costos extra.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M5 5h14v14H5z" />
        <path d="M9 3v4M15 3v4M5 11h14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "3️⃣ Recompensas en cada compra",
    description: "Acumula puntos y recibe beneficios exclusivos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="m12 3 2.4 6.6 7 .4-5.4 4.3 1.8 6.7-5.8-3.7-5.8 3.7 1.8-6.7-5.4-4.3 7-.4z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "4️⃣ Valoración 4.8/5",
    description: "Más de 100 opiniones verificadas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 6h16M4 12h10M4 18h6" strokeLinecap="round" />
        <circle cx="18" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section id="beneficios" className="mx-auto -mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="glass-panel flex flex-col gap-6 rounded-3xl px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        {trustSignals.map((signal) => (
          <article key={signal.title} className="flex flex-1 items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[--color-border-subtle] bg-[--color-panel-soft] text-[--color-accent-primary]">
              {signal.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-[--color-text-primary]">{signal.title}</p>
              <p className="text-xs text-[--color-text-muted]">{signal.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

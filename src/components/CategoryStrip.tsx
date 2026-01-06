const iconStroke = "currentColor";

const categories = [
  {
    id: "carcassone",
    label: "01 · Carcassone",
    description: "Base + expansiones Posadas & Catedrales con meeples ideales para iniciarse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <rect x={5} y={4} width={14} height={16} rx={2} />
        <path d="M5 11h14" />
        <path d="M9 4v6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "memoria-redo",
    label: "02 · Memoria Redo",
    description: "Sets sensoriales para reforzar memoria visual y retos cooperativos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <path d="M6 7h12v10H6z" />
        <path d="M9 4v3m6-3v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "memoria-verde",
    label: "03 · Memoria Verde",
    description: "Barajas eco-friendly para actividades didácticas y mindfulness.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <path d="M7 14c3 0 3-4 6-4s3 4 6 4" />
        <path d="M5 10h14v8H5z" />
      </svg>
    ),
  },
  {
    id: "spot-it-disney",
    label: "04 · Spot It Disney",
    description: "Iconografía oficial Disney para sesiones express con peques.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <circle cx={12} cy={12} r={7} />
        <path d="M12 7v10m-5-5h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "virus",
    label: "05 · Virus!",
    description: "Cartas virales, expansiones Halloween y sleeves protectores.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <circle cx={12} cy={12} r={3} />
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3m-2.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "spot-it-disney-1",
    label: "06 · Spot It Disney 1",
    description: "Formato de viaje con cartas jumbo resistentes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <path d="m7 7 10 10" />
        <path d="M7 17 17 7" />
        <circle cx={12} cy={12} r={8} />
      </svg>
    ),
  },
  {
    id: "catan",
    label: "07 · Catan",
    description: "Estrategia modular: Cities & Knights, Navegantes y organizadores 3D.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <path d="m4 12 8-8 8 8-8 8z" />
        <path d="M4 12h16" />
      </svg>
    ),
  },
  {
    id: "code-names",
    label: "08 · Code Names",
    description: "Ediciones Family, Duet y packs bilingües para aula o team building.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <rect x={5} y={5} width={14} height={14} rx={3} />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    id: "spot-it-friends",
    label: "09 · Spot It Friends",
    description: "Personajes coleccionables y retos cooperativos para grupos grandes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <circle cx={9} cy={10} r={2.5} />
        <circle cx={15} cy={10} r={2.5} />
        <path d="M4 20c0-3 2.5-5 5-5m11 5c0-3-2.5-5-5-5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "saboteur",
    label: "10 · Saboteur",
    description: "Ediciones deluxe, luz UV y monedas metálicas para la narrativa minera.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth={1.5}>
        <path d="M6 18h12l2-8H4z" />
        <path d="M8 18v2m8-2v2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function CategoryStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" aria-label="Categorías de JPG Juegos">
      <div className="soft-card overflow-hidden border border-[--color-border-subtle]/80 bg-[--color-panel-soft]/70 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[--color-text-muted]">Colecciones</p>
            <h2 className="mt-2 text-2xl font-semibold text-[--color-text-primary]">Explora según tu mood de juego</h2>
          </div>
          <span className="hidden text-sm font-semibold text-[--color-accent-primary] md:inline">Ver todo</span>
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="min-w-[180px] flex-1 rounded-2xl border border-[--color-border-subtle] bg-[--color-panel] p-4 transition hover:border-[--color-accent-primary] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between text-lg font-semibold text-[--color-text-primary]">
                <span>{category.label}</span>
                <span className="h-8 w-8 text-[--color-accent-primary]" aria-hidden>
                  {category.icon}
                </span>
              </div>
              <p className="mt-2 text-sm text-[--color-text-muted]">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

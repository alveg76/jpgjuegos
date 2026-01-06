const trendingCategories = [
  {
    id: "mtg",
    name: "Magic: The Gathering",
    tagline: "Modern Horizons III singles & sealed",
    accent: "linear-gradient(135deg, #ff7a18, #af002d 70%)",
    initials: "MTG",
  },
  {
    id: "pokemon",
    name: "Pokémon",
    tagline: "Temporal Forces + Japanese exclusives",
    accent: "linear-gradient(135deg, #38ef7d, #11998e)",
    initials: "PKM",
  },
  {
    id: "yugioh",
    name: "Yu-Gi-Oh!",
    tagline: "Age of Overlord & collector rares",
    accent: "linear-gradient(135deg, #00c6ff, #0072ff)",
    initials: "YGO",
  },
  {
    id: "catan",
    name: "Catan",
    tagline: "3D edition + accessories",
    accent: "linear-gradient(135deg, #f7971e, #ffd200)",
    initials: "CAT",
  },
  {
    id: "warhammer",
    name: "Warhammer",
    tagline: "Leviathan boxes & paints",
    accent: "linear-gradient(135deg, #8e2de2, #4a00e0)",
    initials: "WH",
  },
  {
    id: "dnd",
    name: "Dungeons & Dragons",
    tagline: "Phandelver & limited dice sets",
    accent: "linear-gradient(135deg, #fc5c7d, #6a82fb)",
    initials: "D&D",
  },
];

export default function TrendingCategories() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" aria-label="Trending categories">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[--color-text-muted]">Trending Categories</p>
          <h2 className="mt-2 text-3xl font-semibold text-[--color-text-primary]">Ahora mismo en la mira</h2>
          <p className="text-sm text-[--color-text-muted]">Lo más buscado por la comunidad competitiva y coleccionistas.</p>
        </div>
        <span className="text-sm font-semibold text-[--color-accent-primary]">Ver todas las marcas →</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {trendingCategories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="flex items-center gap-4 rounded-3xl border border-[--color-border-subtle] bg-[--color-panel] p-4 transition hover:-translate-y-1 hover:border-[--color-accent-primary]"
          >
            <span
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-sm font-bold text-white"
              style={{ backgroundImage: category.accent }}
            >
              {category.initials}
            </span>
            <div>
              <p className="text-base font-semibold text-[--color-text-primary]">{category.name}</p>
              <p className="text-sm text-[--color-text-muted]">{category.tagline}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const deals = [
  {
    id: "exploding-kittens",
    title: "Exploding Kittens NSFW",
    description: "Juego de cartas NSFW con ilustras manuales, 1 caja original.",
    discount: "-15%",
    code: "KITTENS15",
    expires: "Stock limitado: 12 unidades",
    price: "90.000 COP",
  },
  {
    id: "carcassonne-base",
    title: "Carcassonne Base",
    description: "Construye territorios medievales. Incluye losetas modulares para crear 72 losetas.",
    discount: "-18%",
    code: "CARCASS18",
    expires: "Stock limitado: 8 unidades",
    price: "120.000 COP",
  },
  {
    id: "catan-expansion",
    title: "Catan expansión 5-6 jugadores",
    description: "Expande tus partidas de Catan. Fichas, cartas adicionales y reglas incluidas.",
    discount: "-20%",
    code: "CATAN20",
    expires: "Stock limitado: 10 unidades",
    price: "90.000 COP",
  },
];

export default function DealsOfWeek() {
  return (
    <section id="deals" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mario-card p-8 border-4 border-mario-brown">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-mario-brown font-bold">🎁 Deals of the Week</p>
            <h2 className="mt-2 text-3xl font-bold text-mario-red">Ofertas que se van en horas</h2>
            <p className="text-sm text-mario-brown font-semibold">Stackea con XP Rewards y obtén boosters sorpresa en pedidos mayores a $100.000.</p>
          </div>
          <span className="mario-badge">Actualizado hoy</span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {deals.map((deal) => (
            <article key={deal.id} className="mario-card flex flex-col gap-4 p-6 border-3 border-mario-brown">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-mario-red">{deal.title}</p>
                <span className="mario-badge bg-mario-yellow text-mario-red">
                  {deal.discount}
                </span>
              </div>
              <p className="text-lg font-bold text-mario-yellow border-b-2 border-mario-yellow pb-2">{deal.price}</p>
              <p className="text-sm text-mario-brown font-semibold">{deal.description}</p>
              <div className="rounded-lg border-2 border-dashed border-mario-brown bg-mario-cream px-4 py-3 text-center text-sm font-bold tracking-widest text-mario-red">
                {deal.code}
              </div>
              <p className="text-xs uppercase tracking-widest text-mario-brown font-bold">{deal.expires}</p>
              <button className="mario-button text-sm font-bold">
                ⭐ Canjear ahora
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

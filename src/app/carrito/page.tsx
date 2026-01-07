"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const placeholderImage = "/images/products/placeholder.png";

export default function CartPage() {
  const { items, subtotal, setQty, removeItem, clear, count } = useCart();

  const handleWhatsApp = () => {
    const phone = "573107822138";
    const itemsText = items
      .map((it) => `• ${it.name} (x${it.qty}) - ${currency.format(it.price * it.qty)}`)
      .join("%0A");
    const message = `Hola! Me gustaría hacer un pedido:%0A%0A${itemsText}%0A%0ATotal: ${currency.format(subtotal)}`;
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-[--color-text-primary]">Tu Carrito</h1>
          <p className="text-sm text-[--color-text-muted]">
            {count === 0 ? "No hay productos" : `${count} ${count === 1 ? "producto" : "productos"}`}
          </p>
        </div>
        {items.length > 0 && (
          <button
            className="text-sm font-semibold text-[--color-text-muted] transition hover:text-[--color-accent-primary]"
            onClick={clear}
          >
            Vaciar carrito
          </button>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[--color-border-subtle] bg-[--color-card] p-10 text-center">
              <div className="mb-4 text-5xl">🛒</div>
              <h2 className="mb-2 text-xl font-semibold text-[--color-text-primary]">Tu carrito está vacío</h2>
              <p className="mb-6 text-[--color-text-muted]">
                Descubre nuestros productos destacados y comienza a agregar tus juegos favoritos.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-[--color-accent-primary] px-6 py-3 text-sm font-semibold text-[#041229] transition hover:bg-[--color-accent-primary]/90"
              >
                Explorar productos
              </Link>
            </div>
          ) : (
            items.map((it) => (
              <article
                key={it.id}
                className="flex gap-4 rounded-2xl border border-[--color-border-subtle] bg-[--color-card] p-4"
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-[--color-panel]">
                  <Image
                    src={it.image ?? placeholderImage}
                    alt={it.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      className="font-semibold text-[--color-text-primary] hover:text-[--color-accent-primary]"
                      href={it.slug ? `/productos/${it.slug}` : "#"}
                    >
                      {it.name}
                    </Link>
                    <p className="text-sm text-[--color-text-muted]">{currency.format(it.price)} c/u</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-xs text-[--color-text-muted]">Cantidad:</label>
                    <input
                      type="number"
                      min={1}
                      value={it.qty}
                      onChange={(e) => setQty(it.id, Number(e.target.value))}
                      className="w-20 rounded-lg border border-[--color-border-subtle] bg-[--color-panel] px-3 py-1 text-sm text-[--color-text-primary]"
                    />
                    <button
                      className="text-sm font-semibold text-[--color-text-muted] transition hover:text-red-400"
                      onClick={() => removeItem(it.id)}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <div className="text-lg font-bold text-[--color-accent-secondary]">
                    {currency.format(it.price * it.qty)}
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-[--color-border-subtle] bg-[--color-card] p-6">
                <h2 className="mb-4 text-lg font-semibold text-[--color-text-primary]">Resumen del pedido</h2>
                <div className="space-y-2 border-b border-[--color-border-subtle] pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[--color-text-muted]">Productos ({count})</span>
                    <span className="text-[--color-text-primary]">{currency.format(subtotal)}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between text-lg font-bold">
                  <span className="text-[--color-text-primary]">Total</span>
                  <span className="text-[--color-accent-secondary]">{currency.format(subtotal)}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#20BA5A]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Hacer pedido por WhatsApp
              </button>

              <Link
                href="/"
                className="block rounded-xl border border-[--color-border-subtle] px-6 py-3 text-center text-sm font-semibold text-[--color-text-muted] transition hover:border-[--color-accent-primary] hover:text-[--color-accent-primary]"
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

import AddToCartButton from "./AddToCartButton";
import { getFeaturedProducts } from "@/lib/products";
import type { StockStatus } from "@/lib/products";

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const placeholderImage = "/images/products/placeholder.png";

const stockCopy: Record<StockStatus, { label: string; tone: string }> = {
  in_stock: {
    label: "Disponible",
    tone: "bg-emerald-500/15 text-emerald-200 border-emerald-400/40",
  },
  preorder: {
    label: "Preventas",
    tone: "bg-[--color-accent-primary]/15 text-[--color-accent-primary] border-[--color-accent-primary]/40",
  },
  out_of_stock: {
    label: "Agotado",
    tone: "bg-red-500/15 text-red-300 border-red-500/40",
  },
};

export default async function FeaturedProductsGrid() {
  const products = await getFeaturedProducts();

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="featured-products">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[--color-text-muted]">Catálogo JPG Juegos</p>
          <h2 className="mt-2 text-3xl font-semibold text-[--color-text-primary]">Favoritos en mesa y aula</h2>
          <p className="text-sm text-[--color-text-muted]">
            Estrategia, party y kits didácticos administrados directamente en Sanity.
          </p>
        </div>
        <Link href="#preventas" className="text-sm font-semibold text-[--color-accent-primary]">
          Ver preventas activas →
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[--color-border-subtle] bg-[--color-card] p-10 text-center text-[--color-text-muted]">
          Aún no hay productos destacados en Sanity. Marca algunos como &quot;Destacar en home&quot; para que aparezcan aquí.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const stock = stockCopy[product.stock] ?? stockCopy.in_stock;
            const imageSrc = product.image ?? placeholderImage;

            return (
              <article
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-[--color-border-subtle] bg-[--color-card] shadow-[0_18px_45px_rgba(3,6,15,0.35)]"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-[--color-accent-primary] px-3 py-1 text-xs font-bold text-[#041229]">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center justify-between text-xs text-[--color-text-muted]">
                    <span>{product.category}</span>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] ${stock.tone}`}>
                      {stock.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[--color-text-primary]">{product.title}</h3>
                  <div className="mt-2 flex items-baseline gap-3">
                    <p className="text-2xl font-bold text-[--color-accent-secondary]">{currency.format(product.price)}</p>
                    {product.compareAtPrice && (
                      <p className="text-sm text-[--color-text-muted] line-through">
                        {currency.format(product.compareAtPrice)}
                      </p>
                    )}
                  </div>
                  <div className="mt-auto flex flex-col gap-3">
                    <AddToCartButton
                      product={{
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image ?? undefined,
                      }}
                      disabled={product.stock === "out_of_stock"}
                      label={product.stock === "out_of_stock" ? "Notificarme" : "Agregar al carrito"}
                    />
                    <Link
                      href={product.slug ? `/productos/${product.slug}` : "#contacto"}
                      className="text-center text-sm font-semibold text-[--color-text-muted] transition hover:text-[--color-accent-primary]"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

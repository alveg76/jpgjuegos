"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import AddToCartButton from "@/components/cart/AddToCartButton";
import ProductQuickViewModal from "@/components/ProductQuickViewModal";

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const placeholderImage = "/images/products/placeholder.png";

export default function FeaturedProductsGridClient({ products }: { products: Product[] }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Product | null>(null);

  const openModal = (p: Product) => {
    setSelected(p);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  if (!products?.length) {
    return (
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="featured-products">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--color-text-muted)]">Catálogo JPG Juegos</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--color-text-primary)]">Favoritos en mesa y aula</h2>
        </div>
        <div className="rounded-2xl border border-dashed border-[var(--color-border-subtle)] bg-[var(--color-card)] p-10 text-center text-[var(--color-text-muted)]">
          Aún no hay productos destacados en Sanity. Marca algunos como &quot;Destacar en home&quot; para que aparezcan aquí.
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="featured-products">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--color-text-muted)]">Catálogo JPG Juegos</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--color-text-primary)]">Favoritos en mesa y aula</h2>
          <p className="text-sm text-[var(--color-text-muted)]">
            Estrategia, party y kits didácticos administrados directamente en Sanity.
          </p>
        </div>
        <Link href="#preventas" className="text-sm font-semibold text-[--color-accent-primary]">
          Ver preventas activas →
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const imageSrc = product.image ?? placeholderImage;
          const displayName = product.name ?? product.slug;
          const isAvailable = product.stock === 'in_stock';

          return (
            <article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-card)] shadow-[0_18px_45px_rgba(3,6,15,0.35)]"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={`Producto: ${displayName}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  crossOrigin="anonymous"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${
                  isAvailable
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}>
                  {isAvailable ? '✓ Disponible' : '✗ Agotado'}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{displayName}</h3>
                
                {product.price !== undefined && (
                  <div className="text-xl font-bold text-[--color-accent-secondary]">
                    {currency.format(product.price)}
                  </div>
                )}

                <p className="text-sm text-[var(--color-text-muted)]">
                  {product.description || 'Juego de mesa para disfrutar en familia'}
                </p>
                
                <div className="mt-auto grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <AddToCartButton
                    product={{
                      id: product.id,
                      name: product.name,
                      slug: product.slug,
                      price: product.price,
                      image: product.image,
                    }}
                    disabled={!isAvailable}
                    label={isAvailable ? 'Agregar' : 'Agotado'}
                  />
                  
                  <button
                    onClick={() => openModal(product)}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--color-border-subtle)] py-2 text-sm font-semibold text-[var(--color-text-muted)] transition hover:border-[--color-accent-primary] hover:text-[--color-accent-primary]"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ProductQuickViewModal open={open} onClose={closeModal} product={selected} />
    </section>
  );
}

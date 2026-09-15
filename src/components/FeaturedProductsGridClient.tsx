"use client";

import * as React from "react";
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
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8" id="featured-products">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.5em] text-mario-brown font-bold">🎮 Catálogo JPG Juegos</p>
          <h2 className="mt-2 text-4xl font-bold text-mario-red">Favoritos en mesa y aula</h2>
        </div>
        <div className="mario-card p-10 text-center border-4 border-mario-brown">
          <p className="text-mario-brown font-semibold">No hay productos disponibles. Verifica que el Google Sheet esté actualizado.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8" id="featured-products">
      <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-mario-brown font-bold">🎮 Catálogo JPG Juegos</p>
          <h2 className="mt-2 text-4xl font-bold text-mario-red">Favoritos en mesa y aula</h2>
          <p className="text-sm text-mario-brown mt-2 font-semibold">
            Estrategia, party y kits didácticos administrados directamente en Sanity.
          </p>
        </div>
        <a href="#preventas" className="text-sm font-bold text-mario-red hover:text-mario-brown transition">
          Ver preventas activas →
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const imageSrc = product.image?.trim() || placeholderImage;
          const displayName = product.name ?? product.slug;
          const isAvailable = product.stock === 'in_stock';

          return (
            <article
              key={product.id}
              className="mario-card flex flex-col overflow-hidden border-4 border-mario-brown"
            >
              <div className="relative h-52 w-full overflow-hidden bg-mario-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt={`Producto: ${displayName}`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <span className={`absolute left-4 top-4 mario-badge ${
                  isAvailable
                    ? 'bg-mario-green text-white border-mario-green'
                    : 'bg-red-600 text-white border-red-700'
                }`}>
                  {isAvailable ? '✓ Disponible' : '✗ Agotado'}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <h3 className="text-lg font-bold text-mario-red">{displayName}</h3>
                
                {product.price !== undefined && (
                  <div className="text-2xl font-bold text-mario-yellow border-b-2 border-mario-yellow pb-2">
                    {currency.format(product.price)}
                  </div>
                )}

                <p className="text-sm text-mario-brown">
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
                    label={isAvailable ? 'Comprar' : 'Agotado'}
                  />
                  
                  <button
                    onClick={() => openModal(product)}
                    className="mario-button-secondary w-full text-xs"
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

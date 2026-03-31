"use client";

import * as React from "react";
import type { Product } from "@/lib/products";
import AddToCartButton from "@/components/cart/AddToCartButton";

type Props = {
  open: boolean;
  onClose: () => void;
  product: Product | null;
};

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export default function ProductQuickViewModal({ open, onClose, product }: Props) {
  if (!open || !product) return null;

  const media = product.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={product.image}
      alt={product.name || "Producto"}
      crossOrigin="anonymous"
      className="w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] object-contain"
    />
  ) : (
    <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-8 text-center text-[var(--color-text-muted)]">
      Sin imagen
    </div>
  );

  return (
    <div className="fixed inset-0 z-[80]">
      {/* overlay */}
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-black/80"
      />

      {/* panel */}
      <div className="absolute left-1/2 top-1/2 w-[min(920px,92vw)] max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[var(--color-border-subtle)] bg-[color:var(--color-card)]/95 backdrop-blur-md p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
              {product.name || product.slug}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] px-3 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[--color-panel-soft]"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="space-y-3">
            {media}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-4">
              <div className="text-[var(--color-text-muted)]">Precio</div>
              <div className="mt-1 text-3xl font-semibold text-[--color-accent-secondary]">
                {currency.format(product.price || 0)}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-4">
              <div className="text-[var(--color-text-muted)]">Descripción</div>
              <p className="mt-2 whitespace-pre-wrap text-[var(--color-text-primary)]">
                {product.description?.trim()
                  ? product.description
                  : "No hay descripción disponible."}
              </p>
            </div>

            {product.components && product.components.length > 0 && (
              <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-4">
                <div className="text-[var(--color-text-muted)]">Componentes del Juego</div>
                <ul className="mt-2 space-y-1 text-[var(--color-text-primary)]">
                  {product.components.map((component, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--color-accent-secondary]" />
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid gap-2 md:grid-cols-2">
              {product.players && (
                <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-4">
                  <div className="text-xs text-[var(--color-text-muted)]">Jugadores</div>
                  <p className="mt-1 font-medium text-[var(--color-text-primary)]">{product.players}</p>
                </div>
              )}
              {product.duration && (
                <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-4">
                  <div className="text-xs text-[var(--color-text-muted)]">Duración</div>
                  <p className="mt-1 font-medium text-[var(--color-text-primary)]">{product.duration}</p>
                </div>
              )}
            </div>

            <div className={`rounded-2xl border p-4 ${
              product.stock === 'in_stock'
                ? 'border-green-500/30 bg-green-500/10'
                : 'border-red-500/30 bg-red-500/10'
            }`}>
              <div className={`text-sm font-semibold ${
                product.stock === 'in_stock'
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}>
                {product.stock === 'in_stock' ? '✓ Disponible' : '✗ Agotado'}
              </div>
            </div>

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                image: product.image,
              }}
              disabled={product.stock === 'out_of_stock'}
              label={product.stock === 'out_of_stock' ? 'Agotado' : 'Agregar al carrito'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

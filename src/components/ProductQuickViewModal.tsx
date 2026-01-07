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

function toYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);

    // youtu.be/VIDEO_ID
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "").trim();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    // youtube.com/watch?v=VIDEO_ID
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;

      // youtube.com/embed/VIDEO_ID
      const parts = u.pathname.split("/").filter(Boolean);
      const embedIndex = parts.indexOf("embed");
      if (embedIndex !== -1 && parts[embedIndex + 1]) {
        return `https://www.youtube.com/embed/${parts[embedIndex + 1]}`;
      }

      // youtube.com/shorts/VIDEO_ID
      const shortsIndex = parts.indexOf("shorts");
      if (shortsIndex !== -1 && parts[shortsIndex + 1]) {
        return `https://www.youtube.com/embed/${parts[shortsIndex + 1]}`;
      }
    }

    return null;
  } catch {
    return null;
  }
}

export default function ProductQuickViewModal({ open, onClose, product }: Props) {
  if (!open || !product) return null;

  const embed = product.youtubeUrl ? toYouTubeEmbedUrl(product.youtubeUrl) : null;

  const media = embed ? (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[--color-border-subtle] bg-[--color-panel]">
      <iframe
        className="h-full w-full"
        src={embed}
        title={product.name || "Video del producto"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ) : product.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={product.image}
      alt={product.name || "Producto"}
      className="w-full rounded-2xl border border-[--color-border-subtle] bg-[--color-panel] object-contain"
    />
  ) : (
    <div className="rounded-2xl border border-[--color-border-subtle] bg-[--color-panel] p-8 text-center text-[--color-text-muted]">
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
      <div className="absolute left-1/2 top-1/2 w-[min(920px,92vw)] max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[--color-border-subtle] bg-[--color-card]/95 backdrop-blur-md p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-[--color-text-primary]">
              {product.name || product.slug}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-[--color-border-subtle] bg-[--color-panel] px-3 py-2 text-sm text-[--color-text-primary] hover:bg-[--color-panel-soft]"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="space-y-3">
            {media}

            {product.gallery?.length ? (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.gallery.map((url, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={`${url}-${i}`}
                    src={url}
                    alt={`${product.name || "Producto"} ${i + 1}`}
                    className="h-20 w-28 flex-none rounded-xl border border-[--color-border-subtle] bg-[--color-panel] object-cover"
                  />
                ))}
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-[--color-border-subtle] bg-[--color-panel] p-4">
              <div className="text-[--color-text-muted]">Precio</div>
              <div className="mt-1 text-3xl font-semibold text-[--color-accent-secondary]">
                {currency.format(product.price || 0)}
              </div>
            </div>

            <div className="rounded-2xl border border-[--color-border-subtle] bg-[--color-panel] p-4">
              <div className="text-[--color-text-muted]">Descripción</div>
              <p className="mt-2 whitespace-pre-wrap text-[--color-text-primary]">
                {product.description?.trim()
                  ? product.description
                  : "Agrega una descripción en Sanity para que aparezca aquí."}
              </p>
            </div>

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                image: product.image,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

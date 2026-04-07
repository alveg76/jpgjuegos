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
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "").trim();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      const parts = u.pathname.split("/").filter(Boolean);
      const embedIdx = parts.indexOf("embed");
      if (embedIdx !== -1 && parts[embedIdx + 1]) return `https://www.youtube.com/embed/${parts[embedIdx + 1]}`;
      const shortsIdx = parts.indexOf("shorts");
      if (shortsIdx !== -1 && parts[shortsIdx + 1]) return `https://www.youtube.com/embed/${parts[shortsIdx + 1]}`;
    }
    return null;
  } catch {
    return null;
  }
}

type MediaItem =
  | { type: "image"; url: string }
  | { type: "video"; embedUrl: string };

export default function ProductQuickViewModal({ open, onClose, product }: Props) {
  const [activeIdx, setActiveIdx] = React.useState(0);

  // Reset selected thumbnail when a different product opens
  React.useEffect(() => {
    setActiveIdx(0);
  }, [product?.id]);

  if (!open || !product) return null;

  // Build ordered media list: main image → extra images → video
  const mediaItems: MediaItem[] = [];
  if (product.image) mediaItems.push({ type: "image", url: product.image });
  for (const url of product.gallery ?? []) mediaItems.push({ type: "image", url });
  if (product.youtubeUrl) {
    const embedUrl = toYouTubeEmbedUrl(product.youtubeUrl);
    if (embedUrl) mediaItems.push({ type: "video", embedUrl });
  }

  const active = mediaItems[activeIdx] ?? null;

  const mainMedia = !active ? (
    <div className="flex items-center justify-center rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-8 text-sm text-[var(--color-text-muted)]">
      Sin imagen
    </div>
  ) : active.type === "video" ? (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-black">
      <iframe
        className="h-full w-full"
        src={active.embedUrl}
        title={product.name || "Video del producto"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={active.url}
      alt={product.name || "Producto"}
      referrerPolicy="no-referrer"
      className="max-h-72 w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] object-contain"
    />
  );

  return (
    <div className="fixed inset-0 z-[80]">
      {/* overlay */}
      <button aria-label="Cerrar" onClick={onClose} className="absolute inset-0 bg-black/80" />

      {/* panel */}
      <div className="absolute left-1/2 top-1/2 w-[min(960px,94vw)] max-h-[92vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[var(--color-border-subtle)] bg-[color:var(--color-card)]/95 backdrop-blur-md p-5 shadow-2xl">

        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
            {product.name || product.slug}
          </h3>
          <button
            onClick={onClose}
            className="shrink-0 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] px-3 py-2 text-sm text-[var(--color-text-primary)] hover:bg-[--color-panel-soft]"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-5 grid gap-6 md:grid-cols-2">

          {/* ── LEFT: media viewer ── */}
          <div className="space-y-3">
            {mainMedia}

            {/* thumbnail strip — only shown when there are 2+ media items */}
            {mediaItems.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {mediaItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`shrink-0 h-16 w-20 overflow-hidden rounded-xl border-2 transition ${
                      i === activeIdx
                        ? "border-[--color-accent-primary]"
                        : "border-[var(--color-border-subtle)] opacity-60 hover:opacity-100"
                    }`}
                  >
                    {item.type === "video" ? (
                      <div className="flex h-full w-full items-center justify-center bg-black text-2xl text-white">▶</div>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.url}
                        alt={`Vista ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: product info ── */}
          <div className="space-y-4">

            {/* price */}
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-4">
              <div className="text-sm text-[var(--color-text-muted)]">Precio</div>
              <div className="mt-1 text-3xl font-semibold text-[--color-accent-secondary]">
                {currency.format(product.price || 0)}
              </div>
            </div>

            {/* stock */}
            <div className={`rounded-2xl border p-4 ${
              product.stock === "in_stock"
                ? "border-green-500/30 bg-green-500/10"
                : "border-red-500/30 bg-red-500/10"
            }`}>
              <div className={`text-sm font-semibold ${
                product.stock === "in_stock" ? "text-green-600" : "text-red-600"
              }`}>
                {product.stock === "in_stock" ? "✓ Disponible" : "✗ Agotado"}
              </div>
            </div>

            {/* description */}
            {product.description && (
              <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-4">
                <div className="text-sm text-[var(--color-text-muted)]">Descripción</div>
                <p className="mt-2 text-sm text-[var(--color-text-primary)]">{product.description}</p>
              </div>
            )}

            {/* players + duration */}
            {(product.players || product.duration) && (
              <div className="grid grid-cols-2 gap-2">
                {product.players && (
                  <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-3">
                    <div className="text-xs text-[var(--color-text-muted)]">Jugadores</div>
                    <p className="mt-1 text-sm font-medium text-[var(--color-text-primary)]">{product.players}</p>
                  </div>
                )}
                {product.duration && (
                  <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-3">
                    <div className="text-xs text-[var(--color-text-muted)]">Duración</div>
                    <p className="mt-1 text-sm font-medium text-[var(--color-text-primary)]">{product.duration}</p>
                  </div>
                )}
              </div>
            )}

            {/* components */}
            {product.components && product.components.length > 0 && (
              <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-panel)] p-4">
                <div className="text-sm text-[var(--color-text-muted)]">Componentes</div>
                <ul className="mt-2 space-y-1">
                  {product.components.map((c, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--color-accent-secondary]" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* add to cart */}
            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                image: product.image,
              }}
              disabled={product.stock === "out_of_stock"}
              label={product.stock === "out_of_stock" ? "Agotado" : "Agregar al carrito"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

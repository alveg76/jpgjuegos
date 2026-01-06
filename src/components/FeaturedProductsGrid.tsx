"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/store/cart.store";

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

type StockStatus = "in_stock" | "preorder" | "out_of_stock";

type ProductBadge = "NUEVO" | "OFERTA";

type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge: ProductBadge;
  rating: number;
  reviewsCount: number;
  image: string;
  stock: StockStatus;
};

const products: Product[] = [
  {
    id: "catan-base",
    title: "Catan Base 5ta Edición",
    category: "Estrategia",
    price: 1250,
    compareAtPrice: 1390,
    badge: "OFERTA",
    rating: 5,
    reviewsCount: 412,
    image: "/images/products/catan-base.png",
    stock: "in_stock",
  },
  {
    id: "catan-ciudades",
    title: "Catan Ciudades y Caballeros",
    category: "Estrategia",
    price: 1490,
    badge: "NUEVO",
    rating: 5,
    reviewsCount: 163,
    image: "/images/products/catan-ciudades.png",
    stock: "preorder",
  },
  {
    id: "carcassonne-base",
    title: "Carcassonne Juego Básico",
    category: "Familiares",
    price: 999,
    compareAtPrice: 1099,
    badge: "OFERTA",
    rating: 5,
    reviewsCount: 508,
    image: "/images/products/carcassonne-base.png",
    stock: "in_stock",
  },
  {
    id: "carcassonne-posadas",
    title: "Carcassonne Posadas y Catedrales",
    category: "Familiares",
    price: 620,
    badge: "NUEVO",
    rating: 4,
    reviewsCount: 189,
    image: "/images/products/carcassonne-posadas.png",
    stock: "in_stock",
  },
  {
    id: "memoria-redo",
    title: "Memoria Redo Kit Sensorial",
    category: "Didácticos",
    price: 540,
    badge: "NUEVO",
    rating: 5,
    reviewsCount: 74,
    image: "/images/products/memoredo.png",
    stock: "in_stock",
  },
  {
    id: "memoria-verde",
    title: "Memoria Verde Eco Pack",
    category: "Didácticos",
    price: 480,
    compareAtPrice: 520,
    badge: "OFERTA",
    rating: 4,
    reviewsCount: 58,
    image: "/images/products/memoverde.png",
    stock: "in_stock",
  },
  {
    id: "spotit-disney",
    title: "Spot It! Disney Edición Familiar",
    category: "Party",
    price: 699,
    badge: "NUEVO",
    rating: 5,
    reviewsCount: 301,
    image: "/images/products/placeholder.png",
    stock: "in_stock",
  },
  {
    id: "spotit-disney1",
    title: "Spot It! Disney Travel Pack",
    category: "Party",
    price: 520,
    compareAtPrice: 580,
    badge: "OFERTA",
    rating: 4,
    reviewsCount: 147,
    image: "/images/products/placeholder.png",
    stock: "in_stock",
  },
  {
    id: "spotit-friends",
    title: "Spot It! Friends XL",
    category: "Party",
    price: 780,
    badge: "OFERTA",
    rating: 4,
    reviewsCount: 95,
    image: "/images/products/placeholder.png",
    stock: "preorder",
  },
  {
    id: "codenames-family",
    title: "Codenames Edición Familiar",
    category: "Social",
    price: 620,
    badge: "NUEVO",
    rating: 5,
    reviewsCount: 254,
    image: "/images/products/placeholder.png",
    stock: "in_stock",
  },
  {
    id: "virus-plus",
    title: "Virus! + Expansión Halloween",
    category: "Party",
    price: 530,
    compareAtPrice: 590,
    badge: "OFERTA",
    rating: 5,
    reviewsCount: 402,
    image: "/images/products/placeholder.png",
    stock: "in_stock",
  },
  {
    id: "saboteur-deluxe",
    title: "Saboteur Deluxe con Miniaturas",
    category: "Estrategia",
    price: 870,
    badge: "NUEVO",
    rating: 4,
    reviewsCount: 133,
    image: "/images/products/placeholder.png",
    stock: "out_of_stock",
  },
];

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

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={index < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          className={index < rating ? "text-[--color-accent-secondary]" : "text-[--color-border-subtle]"}
        >
          <path d="m12 3 2.4 6.6 7 .4-5.4 4.3 1.8 6.7-5.8-3.7-5.8 3.7 1.8-6.7-5.4-4.3 7-.4z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export default function FeaturedProductsGrid() {
  const addItem = useCart((state) => state.addItem);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="featured-products">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[--color-text-muted]">Catálogo JPG Juegos</p>
          <h2 className="mt-2 text-3xl font-semibold text-[--color-text-primary]">Favoritos en mesa y aula</h2>
          <p className="text-sm text-[--color-text-muted]">
            Estrategia, party y kits didácticos inspirados en tus categorías reales.
          </p>
        </div>
        <Link href="#preventas" className="text-sm font-semibold text-[--color-accent-primary]">
          Ver preventas activas →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const stock = stockCopy[product.stock];
          return (
            <article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[--color-border-subtle] bg-[--color-card] shadow-[0_18px_45px_rgba(3,6,15,0.35)]"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={product.image}
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
                <div className="flex items-center gap-2 text-xs text-[--color-text-muted]">
                  <RatingStars rating={product.rating} />
                  <span>{product.rating.toFixed(1)}</span>
                  <span>({product.reviewsCount} reseñas)</span>
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <p className="text-2xl font-bold text-[--color-accent-secondary]">{currency.format(product.price)}</p>
                  {product.compareAtPrice && (
                    <p className="text-sm text-[--color-text-muted] line-through">
                      {currency.format(product.compareAtPrice)}
                    </p>
                  )}
                </div>
                <div className="mt-auto flex flex-col gap-3">
                  <button
                    className="rounded-2xl border border-[--color-accent-primary]/60 px-4 py-2 text-sm font-semibold text-[--color-accent-primary] transition hover:border-[--color-accent-primary] hover:bg-[--color-accent-primary]/10 disabled:cursor-not-allowed disabled:border-[--color-border-subtle] disabled:text-[--color-text-muted]"
                    disabled={product.stock === "out_of_stock"}
                    onClick={() =>
                      addItem(
                        {
                          id: product.id,
                          name: product.title,
                          price: product.price,
                          image: product.image,
                        },
                        1
                      )
                    }
                  >
                    {product.stock === "out_of_stock" ? "Notificarme" : "Agregar al carrito"}
                  </button>
                  <Link
                    href={`#product-${product.id}`}
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
    </section>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/lib/products";
import AddToCartButton from "@/components/cart/AddToCartButton";

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const placeholderImage = "/images/products/placeholder.png";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) return notFound();

  const displayName = product.name ?? product.slug;
  const imageSrc = product.image ?? placeholderImage;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[--color-text-muted] transition hover:text-[--color-accent-primary]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Volver a la tienda
        </Link>
      </nav>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-[--color-border-subtle] bg-[--color-card] p-6">
          <div className="relative aspect-square w-full">
            <Image
              src={imageSrc}
              alt={displayName}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-[--color-text-primary]">{displayName}</h1>
          </div>

          {product.price !== undefined && (
            <div className="text-3xl font-bold text-[--color-accent-secondary]">
              {currency.format(product.price)}
            </div>
          )}

          <div className={`rounded-xl border p-4 ${
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

          {product.description && (
            <div className="rounded-xl border border-[--color-border-subtle] bg-[--color-panel] p-4">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[--color-text-muted]">
                Descripción
              </h2>
              <p className="text-[--color-text-primary]">
                {product.description}
              </p>
            </div>
          )}

          {product.players && (
            <div className="rounded-xl border border-[--color-border-subtle] bg-[--color-panel] p-4">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[--color-text-muted]">
                Jugadores
              </h2>
              <p className="text-[--color-text-primary]">
                {product.players}
              </p>
            </div>
          )}

          {product.duration && (
            <div className="rounded-xl border border-[--color-border-subtle] bg-[--color-panel] p-4">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[--color-text-muted]">
                Duración
              </h2>
              <p className="text-[--color-text-primary]">
                {product.duration}
              </p>
            </div>
          )}

          {product.components && product.components.length > 0 && (
            <div className="rounded-xl border border-[--color-border-subtle] bg-[--color-panel] p-4">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[--color-text-muted]">
                Componentes del Juego
              </h2>
              <ul className="space-y-1 text-[--color-text-primary]">
                {product.components.map((component, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--color-accent-secondary]" />
                    {component}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto space-y-3">
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
            <Link
              href="/#contacto"
              className="inline-flex w-full items-center justify-center rounded-xl border border-[--color-border-subtle] px-4 py-2 text-sm font-semibold text-[--color-text-muted] transition hover:border-[--color-accent-primary] hover:text-[--color-accent-primary]"
            >
              Consultar disponibilidad
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

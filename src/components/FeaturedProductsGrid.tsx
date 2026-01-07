import Image from "next/image";
import Link from "next/link";

import { getFeaturedProducts } from "@/lib/products";

const placeholderImage = "/images/products/placeholder.png";

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
            const imageSrc = product.image ?? placeholderImage;
            const displayName = product.name ?? product.slug;

            return (
              <article
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-[--color-border-subtle] bg-[--color-card] shadow-[0_18px_45px_rgba(3,6,15,0.35)]"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={`Producto destacado: ${displayName}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  {product.isFeatured && (
                    <span className="absolute left-4 top-4 rounded-full bg-[--color-accent-primary] px-3 py-1 text-xs font-bold text-[#041229]">
                      Destacado
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h3 className="text-lg font-semibold text-[--color-text-primary]">{displayName}</h3>
                  <p className="text-sm text-[--color-text-muted]">
                    Este producto se administró desde Sanity y está marcado como destacado en la tienda.
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/productos/${product.slug}`}
                      className="inline-flex w-full items-center justify-center rounded-xl border border-[--color-border-subtle] py-2 text-sm font-semibold text-[--color-accent-primary] transition hover:border-[--color-accent-primary]"
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="mario-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg bg-mario-blue/50 h-64 mb-4">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name || 'Producto'}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-mario-white">
            <span className="text-sm text-center">Sin imagen</span>
          </div>
        )}

        {/* Stock Badge */}
        {product.stock === 'out_of_stock' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-mario-red text-mario-white font-bold px-4 py-2 rounded">
              Agotado
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        {product.category && (
          <div className="inline-block mario-badge mb-2 text-xs">
            {product.category}
          </div>
        )}

        {/* Product Name */}
        <Link href={`/productos/${product.slug}`}>
          <h3 className="text-lg font-bold text-mario-blue hover:text-mario-red transition mb-2 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Players and Duration */}
        {(product.players || product.duration) && (
          <div className="text-sm text-mario-brown mb-2 space-y-1">
            {product.players && <p>👥 {product.players}</p>}
            {product.duration && <p>⏱️ {product.duration}</p>}
          </div>
        )}

        {/* Price */}
        {product.price !== undefined && product.price > 0 && (
          <div className="mb-4">
            <p className="text-2xl font-bold text-mario-red">
              ${product.price.toLocaleString('es-CO')}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          <Link href={`/productos/${product.slug}`}>
            <button className="mario-button w-full text-sm">
              Ver Detalles
            </button>
          </Link>

          {product.stock === 'in_stock' && (
            <AddToCartButton product={product} />
          )}
        </div>
      </div>
    </div>
  );
}

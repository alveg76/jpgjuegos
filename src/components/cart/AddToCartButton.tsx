"use client";

import { useCart } from "@/store/cart.store";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string | null;
    slug: string;
    price?: number;
    image?: string | null;
  };
  disabled?: boolean;
  label?: string;
};

export default function AddToCartButton({ product, disabled, label = "Agregar al carrito" }: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleClick = () => {
    addItem({
      id: product.id,
      name: product.name ?? product.slug,
      slug: product.slug,
      price: product.price ?? 0,
      image: product.image ?? undefined,
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="mario-button w-full text-sm"
    >
      {label}
    </button>
  );
}

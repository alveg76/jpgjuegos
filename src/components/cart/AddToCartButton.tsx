"use client";

import { useCart } from "@/components/cart/CartProvider";

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
      image: product.image,
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="inline-flex w-full items-center justify-center rounded-xl bg-[--color-accent-primary] px-4 py-2 text-sm font-semibold text-[#041229] transition hover:bg-[--color-accent-primary]/90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {label}
    </button>
  );
}

"use client";

import { useCart } from "@/store/cart.store";

type Props = {
  product: {
    id: string;
    title: string;
    price: number;
    image?: string | null;
  };
  disabled?: boolean;
  label?: string;
};

export default function AddToCartButton({ product, disabled, label = "Agregar al carrito" }: Props) {
  const addItem = useCart((state) => state.addItem);

  return (
    <button
      type="button"
      className="rounded-2xl border border-[--color-accent-primary]/60 px-4 py-2 text-sm font-semibold text-[--color-accent-primary] transition hover:border-[--color-accent-primary] hover:bg-[--color-accent-primary]/10 disabled:cursor-not-allowed disabled:border-[--color-border-subtle] disabled:text-[--color-text-muted]"
      disabled={disabled}
      onClick={() =>
        addItem(
          {
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.image ?? undefined,
          },
          1
        )
      }
    >
      {label}
    </button>
  );
}

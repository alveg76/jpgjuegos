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
      className="mario-button w-full text-sm"
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

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number; // en COP (número)
  image?: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;

  open: () => void;
  close: () => void;
  toggle: () => void;

  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;

  subtotal: () => number;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set({ isOpen: !get().isOpen }),

      addItem: (item, qty = 1) =>
        set((state) => {
          const existing = state.items.find((x) => x.id === item.id);
          if (existing) {
            return {
              items: state.items.map((x) =>
                x.id === item.id ? { ...x, qty: x.qty + qty } : x
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, { ...item, qty }], isOpen: true };
        }),

      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((x) => x.id !== id) })),

      setQty: (id, qty) =>
        set((state) => ({
          items: state.items
            .map((x) => (x.id === id ? { ...x, qty } : x))
            .filter((x) => x.qty > 0),
        })),

      clear: () => set({ items: [] }),

      subtotal: () => get().items.reduce((sum, x) => sum + x.price * x.qty, 0),
      count: () => get().items.reduce((sum, x) => sum + x.qty, 0),
    }),
    {
      name: "jpgjuegos_cart_v1",
      partialize: (s) => ({ items: s.items }), // solo persiste items
    }
  )
);

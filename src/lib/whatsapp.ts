import type { CartItem } from "@/store/cart.store";

const formatCOP = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);

export function buildWhatsAppUrl(params: {
  phoneE164: string; // ej: "573107822138" (sin +)
  items: CartItem[];
  note?: string;
}) {
  const { phoneE164, items, note } = params;

  const subtotal = items.reduce((s, x) => s + x.price * x.qty, 0);

  const lines = [
    "Hola 👋 Quiero hacer este pedido en JPG Juegos:",
    "",
    ...items.map((x) => `• ${x.qty}× ${x.name} — ${formatCOP(x.price * x.qty)}`),
    "",
    `Subtotal: ${formatCOP(subtotal)}`,
    "",
    note ? `Nota: ${note}` : "",
    "¿Me confirmas disponibilidad y costo de envío a mi ciudad? 🙂",
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${phoneE164}?text=${text}`;
}

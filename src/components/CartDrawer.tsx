"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { useCart } from "@/store/cart.store";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const formatCOP = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);

export default function CartDrawer() {
  const { items, isOpen, close, setQty, removeItem, clear, subtotal } = useCart();
  const [note, setNote] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = subtotal();

  const waUrl = useMemo(() => {
    if (!mounted) return "";
    return buildWhatsAppUrl({
      phoneE164: process.env.NEXT_PUBLIC_WHATSAPP_E164 || "573107822138",
      items,
      note,
    });
  }, [items, note, mounted]);

  const handleWhatsAppCheckout = () => {
    if (!items.length) return;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 transition ${
          isOpen ? "bg-black/50" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      />

      {/* panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform border-l-4 border-mario-brown bg-mario-cream backdrop-blur transition duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b-2 border-mario-brown bg-mario-blue">
          <h3 className="text-lg font-bold text-mario-white">🛒 Tu Carrito</h3>
          <button onClick={close} className="text-mario-red font-bold hover:text-mario-yellow text-xl">
            ✕
          </button>
        </div>

        {mounted ? (
          <>
            <div className="p-4 space-y-4 overflow-auto h-[calc(100%-220px)]">
              {items.length === 0 ? (
                <p className="text-mario-brown font-semibold">Aún no has agregado juegos. ¡Explora nuestro catálogo!</p>
              ) : (
                items.map((x) => (
                  <div key={x.id} className="mario-card flex gap-3 p-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 border-mario-brown bg-mario-white">
                      {x.image ? (
                        <Image src={x.image} alt={x.name} fill className="object-contain" />
                      ) : null}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="text-mario-red font-bold leading-tight">{x.name}</p>
                          <p className="text-mario-brown text-sm font-semibold">{formatCOP(x.price)}</p>
                        </div>
                        <button
                          onClick={() => removeItem(x.id)}
                          className="text-mario-red hover:text-mario-blue font-bold text-sm"
                        >
                          Eliminar
                        </button>
                      </div>

                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          className="h-8 w-8 rounded-lg bg-mario-red border-2 border-mario-brown text-mario-white hover:bg-mario-yellow font-bold"
                          onClick={() => setQty(x.id, x.qty - 1)}
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center text-mario-red font-bold">{x.qty}</span>
                        <button
                          type="button"
                          className="h-8 w-8 rounded-lg bg-mario-green border-2 border-mario-brown text-mario-white hover:bg-mario-yellow font-bold"
                          onClick={() => setQty(x.id, x.qty + 1)}
                        >
                          +
                        </button>

                        <div className="ml-auto text-mario-red font-bold">
                          {formatCOP(x.price * x.qty)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {items.length > 0 ? (
                <>
                  <div className="pt-2">
                    <label className="text-mario-brown font-bold text-sm">📝 Nota (opcional)</label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Ej: Estoy en Bogotá, pago contraentrega si es posible…"
                      className="mario-card mt-2 w-full p-3 text-mario-brown placeholder:text-mario-brown/50 focus:outline-none focus:ring-2 focus:ring-mario-red"
                      rows={3}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={clear}
                    className="mario-button-secondary w-full text-xs"
                  >
                    Vaciar carrito
                  </button>
                </>
              ) : null}
            </div>

            <div className="p-4 border-t-2 border-mario-brown bg-mario-blue">
              <div className="flex items-center justify-between text-mario-white mb-3 font-bold">
                <span>Subtotal</span>
                <span className="text-mario-yellow text-lg">{formatCOP(total)}</span>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                disabled={!items.length}
                className={`w-full mario-button text-sm font-bold ${!items.length ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                ✓ Pedir por WhatsApp
              </button>

              <p className="mt-2 text-xs text-mario-brown font-semibold">
                Te confirmamos disponibilidad y envío por WhatsApp.
              </p>
            </div>
          </>
        ) : (
          <div className="flex h-[calc(100%-120px)] items-center justify-center">
            <p className="text-mario-brown font-semibold text-center px-4">Cargando carrito...</p>
          </div>
        )}
      </aside>
    </>
  );
}

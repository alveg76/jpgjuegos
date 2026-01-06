"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useCart } from "@/store/cart.store";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const formatCOP = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);

export default function CartDrawer() {
  const { items, isOpen, close, setQty, removeItem, clear, subtotal } = useCart();
  const [note, setNote] = useState("");

  const total = subtotal();

  const WHATSAPP_PHONE = "573107822138";

  const waUrl = useMemo(() => {
    return buildWhatsAppUrl({ phoneE164: WHATSAPP_PHONE, items, note });
  }, [items, note]);

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
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-slate-950/95 backdrop-blur border-l border-white/10 transition duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white">Tu carrito</h3>
          <button onClick={close} className="text-white/70 hover:text-white">
            ✕
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-auto h-[calc(100%-220px)]">
          {items.length === 0 ? (
            <p className="text-white/70">Aún no has agregado juegos.</p>
          ) : (
            items.map((x) => (
              <div key={x.id} className="flex gap-3 rounded-xl border border-white/10 p-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white/5">
                  {x.image ? (
                    <Image src={x.image} alt={x.name} fill className="object-contain" />
                  ) : null}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between gap-2">
                    <div>
                      <p className="text-white font-medium leading-tight">{x.name}</p>
                      <p className="text-white/70 text-sm">{formatCOP(x.price)}</p>
                    </div>
                    <button
                      onClick={() => removeItem(x.id)}
                      className="text-white/60 hover:text-white text-sm"
                    >
                      Eliminar
                    </button>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      className="h-8 w-8 rounded-lg bg-white/10 text-white hover:bg-white/20"
                      onClick={() => setQty(x.id, x.qty - 1)}
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center text-white">{x.qty}</span>
                    <button
                      className="h-8 w-8 rounded-lg bg-white/10 text-white hover:bg-white/20"
                      onClick={() => setQty(x.id, x.qty + 1)}
                    >
                      +
                    </button>

                    <div className="ml-auto text-white font-semibold">
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
                <label className="text-white/80 text-sm">Nota (opcional)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ej: Estoy en Bogotá, pago contraentrega si es posible…"
                  className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  rows={3}
                />
              </div>

              <button
                onClick={clear}
                className="w-full rounded-xl border border-white/10 py-2 text-white/80 hover:text-white hover:bg-white/5"
              >
                Vaciar carrito
              </button>
            </>
          ) : null}
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between text-white mb-3">
            <span className="text-white/80">Subtotal</span>
            <span className="font-semibold">{formatCOP(total)}</span>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppCheckout}
            disabled={!items.length}
            className={`w-full rounded-xl py-3 text-center font-semibold ${
              items.length
                ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                : "bg-white/10 text-white/40"
            }`}
          >
            Pedir por WhatsApp
          </button>

          <p className="mt-2 text-xs text-white/50">
            Te confirmamos disponibilidad y envío por WhatsApp.
          </p>
        </div>
      </aside>
    </>
  );
}

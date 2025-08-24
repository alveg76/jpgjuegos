// src/components/Contact.tsx
"use client";

import { useState } from "react";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORM_ENDPOINT) {
      setErrorMsg(
        "Falta configurar NEXT_PUBLIC_FORMSPREE_ENDPOINT en .env.local."
      );
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setSucceeded(true);
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(
          body?.error || "No se pudo enviar el mensaje. Intenta de nuevo."
        );
      }
    } catch {
      setErrorMsg("Error de conexión. Revisa tu internet e inténtalo otra vez.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-serif text-3xl md:text-4xl font-bold text-[--color-crema]">
          Contacto
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Columna info */}
          <div className="space-y-3 text-[color:var(--color-crema)/0.9]">
            <p>
              <strong>Email:</strong> garzon.ambiental@gmail.com
            </p>
            <p>
              <strong>Teléfono:</strong> +57 320 373 0905
            </p>
            <p>
              <strong>Ubicación:</strong> Bogotá, Colombia
            </p>
            <p className="text-sm opacity-80">
              Respuesta usual en menos de 48 horas hábiles.
            </p>
          </div>

          {/* Panel translúcido + formulario */}
          <div className="md:col-span-2">
            <div className="rounded-2xl bg-[color:var(--color-verde-musgo-oscuro)/0.5] backdrop-blur-md p-6 ring-1 ring-[color:var(--color-crema)/0.08] shadow-xl shadow-black/20">
              {succeeded ? (
                <div className="space-y-4 text-[--color-crema]">
                  <p className="text-lg font-medium">
                    ¡Gracias! Tu mensaje fue enviado.
                  </p>
                  <p className="text-sm opacity-80">
                    Te responderé muy pronto. Si necesitas adjuntar archivos,
                    envíalos por correo mientras tanto.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSucceeded(false)}
                    className="inline-flex items-center justify-center rounded-xl bg-[--color-dorado-suave] px-5 py-2.5 font-semibold text-[--color-verde-musgo-oscuro] shadow-lg shadow-black/25 ring-1 ring-black/10 hover:brightness-110 active:scale-[0.99]"
                  >
                    Enviar otro
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  {/* Honeypot antispam (oculto para humanos) */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm text-[--color-crema]"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg bg-black/30 px-4 py-2.5 text-[--color-crema] ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-[--color-dorado-suave]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm text-[--color-crema]"
                      >
                        Correo
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-lg bg-black/30 px-4 py-2.5 text-[--color-crema] ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-[--color-dorado-suave]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm text-[--color-crema]"
                      >
                        Teléfono (opcional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        className="w-full rounded-lg bg-black/30 px-4 py-2.5 text-[--color-crema] ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-[--color-dorado-suave]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm text-[--color-crema]"
                      >
                        Asunto (opcional)
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        className="w-full rounded-lg bg-black/30 px-4 py-2.5 text-[--color-crema] ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-[--color-dorado-suave]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm text-[--color-crema]"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg bg-black/30 px-4 py-2.5 text-[--color-crema] ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-[--color-dorado-suave]"
                    />
                  </div>

                  {/* Checkbox de privacidad (básico) */}
                  <div className="flex items-start gap-3 text-sm text-[--color-crema]">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-black/30 text-[--color-dorado-suave] focus:ring-[--color-dorado-suave]"
                    />
                    <label htmlFor="privacy">
                      Acepto el tratamiento de mis datos según la{" "}
                      <a
                        href="/privacidad"
                        className="underline decoration-[--color-dorado-suave] underline-offset-4"
                      >
                        Política de Privacidad
                      </a>
                      .
                    </label>
                  </div>

                  {/* Mensajes de estado */}
                  {errorMsg && (
                    <p
                      className="text-sm text-red-300"
                      role="alert"
                      aria-live="polite"
                    >
                      {errorMsg}
                    </p>
                  )}
                  {!FORM_ENDPOINT && (
                    <p
                      className="text-sm text-yellow-300"
                      role="alert"
                      aria-live="polite"
                    >
                      Falta configurar{" "}
                      <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> en{" "}
                      <code>.env.local</code>.
                    </p>
                  )}

                  {/* Botón enviar */}
                  <button
                    type="submit"
                    disabled={submitting || !FORM_ENDPOINT}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[--color-dorado-suave] px-6 py-3 font-semibold text-[--color-verde-musgo-oscuro] shadow-lg shadow-black/25 ring-1 ring-black/10 hover:brightness-110 disabled:opacity-60"
                    aria-busy={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="inline-block animate-pulse">
                          Enviando…
                        </span>
                      </>
                    ) : (
                      "Enviar"
                    )}
                  </button>

                  {/* Si algún día activas reCAPTCHA en Formspree:
                  <div className="mt-2">
                    <div className="g-recaptcha" data-sitekey="TU_SITE_KEY"></div>
                  </div> 
                  */}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

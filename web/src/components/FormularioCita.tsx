"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { tratamientos } from "@/content/clinica";
import { whatsappUrl } from "@/lib/whatsapp";
import { IconoWhatsapp } from "./iconos";

/**
 * Formulario provisional: arma un mensaje y abre WhatsApp con los datos.
 * No guarda nada en un servidor. Se reemplazará por el sistema de reservas con disponibilidad real.
 */
export function FormularioCita() {
  const [error, setError] = useState("");

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const nombre = String(datos.get("nombre") ?? "").trim();
    if (!nombre) {
      setError("Escribe tu nombre para continuar.");
      return;
    }
    if (!datos.get("consentimiento")) {
      setError("Necesitamos tu autorización para usar tus datos y responderte.");
      return;
    }
    setError("");

    const fecha = String(datos.get("fecha") ?? "");
    const fechaTexto = fecha
      ? new Date(`${fecha}T12:00:00`).toLocaleDateString("es-PE", { weekday: "long", day: "numeric", month: "long" })
      : "lo antes posible";

    const lineas = [
      "Hola, quisiera reservar una cita en Clínica Dental Norwill.",
      `• Nombre: ${nombre}`,
      `• Tratamiento: ${datos.get("tratamiento")}`,
      `• Fecha preferida: ${fechaTexto}`,
      `• Turno: ${datos.get("turno")}`,
    ];
    const comentario = String(datos.get("comentario") ?? "").trim();
    if (comentario) lineas.push(`• Comentario: ${comentario}`);

    window.open(whatsappUrl(lineas.join("\n")), "_blank", "noopener,noreferrer");
  }

  const campo =
    "mt-1.5 w-full rounded-xl border border-linea bg-white px-4 py-3 text-base text-tinta placeholder:text-tinta-suave/60 focus:border-marca focus:outline-none focus:ring-2 focus:ring-marca/20";
  const etiqueta = "text-sm font-semibold text-tinta";

  return (
    <form onSubmit={enviar} noValidate className="rounded-3xl bg-crema p-6 text-tinta shadow-2xl shadow-black/20 sm:p-8">
      <h3 className="font-display text-2xl font-medium">Solicita tu cita</h3>
      <p className="mt-1 text-sm text-tinta-suave">Te respondemos por WhatsApp con los horarios disponibles.</p>

      <div className="mt-6 grid gap-4">
        <label className="block">
          <span className={etiqueta}>Nombre completo</span>
          <input name="nombre" autoComplete="name" required className={campo} placeholder="Ej. María Quispe" />
        </label>

        <label className="block">
          <span className={etiqueta}>Tratamiento</span>
          <select name="tratamiento" className={campo} defaultValue={tratamientos[0].nombre}>
            {tratamientos.map((t) => (
              <option key={t.id}>{t.nombre}</option>
            ))}
            <option>No estoy seguro / otro</option>
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={etiqueta}>Fecha preferida</span>
            <input type="date" name="fecha" className={campo} />
          </label>
          <label className="block">
            <span className={etiqueta}>Turno</span>
            <select name="turno" className={campo} defaultValue="Cualquiera">
              <option>Cualquiera</option>
              <option>Mañana</option>
              <option>Tarde</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className={etiqueta}>
            Comentario <span className="font-normal text-tinta-suave">(opcional)</span>
          </span>
          <textarea name="comentario" rows={2} className={campo} placeholder="Ej. tengo dolor en una muela" />
        </label>

        <label className="flex items-start gap-3 text-sm text-tinta-suave">
          <input type="checkbox" name="consentimiento" className="mt-0.5 size-5 shrink-0 accent-marca" />
          <span>
            Autorizo el uso de mis datos para gestionar mi cita, según la{" "}
            <Link href="/politica-de-privacidad" className="font-medium text-marca underline underline-offset-2">
              política de privacidad
            </Link>
            .
          </span>
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-4 rounded-lg bg-acento/15 px-4 py-2.5 text-sm font-medium text-tinta">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-marca px-6 py-4 text-base font-semibold text-crema transition-colors hover:bg-marca-oscura"
      >
        <IconoWhatsapp className="size-5" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}

"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { clinica, tratamientos } from "@/content/clinica";
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
      `Hola, quisiera reservar una cita en ${clinica.nombreCompleto}.`,
      `• Nombre: ${nombre}`,
      `• Tratamiento: ${datos.get("tratamiento")}`,
      `• Fecha preferida: ${fechaTexto}`,
      `• Turno: ${datos.get("turno")}`,
    ];
    const comentario = String(datos.get("comentario") ?? "").trim();
    if (comentario) lineas.push(`• Comentario: ${comentario}`);

    window.open(whatsappUrl(lineas.join("\n")), "_blank", "noopener,noreferrer");
  }

  const etiqueta = "font-display text-sm font-semibold text-dark";

  return (
    <form onSubmit={enviar} noValidate className="rounded-3xl bg-white p-6 text-dark shadow-lift sm:p-9">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold">Solicita tu cita</h3>
          <p className="mt-1.5 text-sm text-muted">Te respondemos por WhatsApp con los horarios disponibles.</p>
        </div>
        <span className="hidden size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-strong sm:grid">
          <IconoWhatsapp className="size-5" />
        </span>
      </div>

      <div className="mt-7 grid gap-5">
        <label className="block">
          <span className={etiqueta}>Nombre completo</span>
          <input name="nombre" autoComplete="name" required className="campo" placeholder="Ej. María Quispe" />
        </label>

        <label className="block">
          <span className={etiqueta}>Tratamiento</span>
          <select name="tratamiento" className="campo" defaultValue={tratamientos[0].nombre}>
            {tratamientos.map((t) => (
              <option key={t.id}>{t.nombre}</option>
            ))}
            <option>No estoy seguro / otro</option>
          </select>
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className={etiqueta}>Fecha preferida</span>
            <input type="date" name="fecha" className="campo" />
          </label>
          <label className="block">
            <span className={etiqueta}>Turno</span>
            <select name="turno" className="campo" defaultValue="Cualquiera">
              <option>Cualquiera</option>
              <option>Mañana</option>
              <option>Tarde</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className={etiqueta}>
            Comentario <span className="font-sans font-normal text-muted">(opcional)</span>
          </span>
          <textarea name="comentario" rows={2} className="campo resize-none" placeholder="Ej. tengo dolor en una muela" />
        </label>

        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
          <input type="checkbox" name="consentimiento" className="mt-0.5 size-5 shrink-0 accent-[#5c6810]" />
          <span>
            Autorizo el uso de mis datos para gestionar mi cita, según la{" "}
            <Link href="/politica-de-privacidad" className="font-medium text-primary-strong underline underline-offset-2">
              política de privacidad
            </Link>
            .
          </span>
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-5 rounded-xl border border-primary/50 bg-primary-soft px-4 py-3 text-sm font-medium text-dark">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primario mt-7 w-full !py-4">
        <IconoWhatsapp className="size-5" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}

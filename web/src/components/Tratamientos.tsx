"use client";

import { useState } from "react";
import { tratamientos, type Tratamiento } from "@/content/clinica";
import { whatsappUrl } from "@/lib/whatsapp";
import { IconoReloj } from "./iconos";

const categorias = ["Todos", "Prevención", "Restauración", "Estética", "Especialidades"] as const;
type Filtro = (typeof categorias)[number];

export function Tratamientos() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");
  const lista = filtro === "Todos" ? tratamientos : tratamientos.filter((t) => t.categoria === filtro);

  return (
    <section id="tratamientos" className="border-y border-linea bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-acento">Tratamientos</p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-tinta sm:text-5xl">
              Cuidamos tu sonrisa de principio a fin
            </h2>
            <p className="mt-4 text-lg text-tinta-suave">
              Desde la limpieza de rutina hasta implantes y ortodoncia. Tras la evaluación te entregamos un
              presupuesto por escrito, sin compromiso.
            </p>
          </div>

          <div role="group" aria-label="Filtrar por categoría" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFiltro(c)}
                aria-pressed={filtro === c}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  filtro === c
                    ? "border-marca bg-marca text-crema"
                    : "border-linea bg-crema text-tinta-suave hover:border-marca hover:text-marca"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((t) => (
            <TarjetaTratamiento key={t.id} t={t} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TarjetaTratamiento({ t }: { t: Tratamiento }) {
  return (
    <li className="group flex flex-col rounded-2xl border border-linea bg-crema p-6 transition-colors hover:border-marca/40">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-marca-clara px-2.5 py-1 text-xs font-semibold text-marca">{t.categoria}</span>
        <span className="flex items-center gap-1.5 text-xs text-tinta-suave">
          <IconoReloj className="size-3.5" />
          {t.duracion}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-medium text-tinta">{t.nombre}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-tinta-suave">{t.descripcion}</p>
      <div className="mt-6 border-t border-linea pt-4">
        <a
          href={whatsappUrl(`Hola, quisiera información y una cita para: ${t.nombre}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="-mx-3 inline-block rounded-full px-3 py-2 text-sm font-semibold text-marca underline-offset-4 hover:underline"
          aria-label={`Consultar por ${t.nombre} en WhatsApp`}
        >
          Consultar por WhatsApp →
        </a>
      </div>
    </li>
  );
}

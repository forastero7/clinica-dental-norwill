"use client";

import { useState } from "react";
import { tratamientos, type Tratamiento } from "@/content/clinica";
import { whatsappUrl } from "@/lib/whatsapp";
import { IconoFlecha, IconoReloj } from "./iconos";

const categorias = ["Todos", "Prevención", "Restauración", "Estética", "Especialidades"] as const;
type Filtro = (typeof categorias)[number];

export function Tratamientos() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");
  const lista = filtro === "Todos" ? tratamientos : tratamientos.filter((t) => t.categoria === filtro);

  return (
    <section id="tratamientos" className="bg-light">
      <div className="contenedor py-20 lg:py-28">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Tratamientos</p>
            <h2 className="titulo-seccion mt-4">Cuidamos tu sonrisa de principio a fin</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Desde la limpieza de rutina hasta implantes y ortodoncia. Tras la evaluación te entregamos un presupuesto
              por escrito, sin compromiso.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filtrar por categoría"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 lg:max-w-md lg:justify-end"
          >
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFiltro(c)}
                aria-pressed={filtro === c}
                className={`shrink-0 rounded-full px-4 py-2 font-display text-sm font-medium transition-all duration-200 ${
                  filtro === c
                    ? "bg-primary text-dark shadow-soft"
                    : "bg-white text-muted ring-1 ring-line hover:text-dark hover:ring-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    <li className="tarjeta revelar group relative flex flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
      />
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-primary-soft px-3 py-1 font-display text-xs font-semibold text-primary-strong">
          {t.categoria}
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-muted">
          <IconoReloj className="size-4" />
          {t.duracion}
        </span>
      </div>
      <h3 className="mt-6 font-display text-lg font-semibold text-dark">{t.nombre}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-muted">{t.descripcion}</p>
      <div className="mt-6 border-t border-line pt-5">
        <a
          href={whatsappUrl(`Hola, quisiera información y una cita para: ${t.nombre}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary-strong transition-colors hover:text-dark"
          aria-label={`Consultar por ${t.nombre} en WhatsApp`}
        >
          Consultar por WhatsApp
          <IconoFlecha className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </li>
  );
}

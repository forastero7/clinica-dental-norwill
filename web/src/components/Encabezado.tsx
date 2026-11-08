"use client";

import Link from "next/link";
import { useState } from "react";
import { IconoCerrar, IconoDiente, IconoMenu } from "./iconos";

const enlaces = [
  { href: "/#tratamientos", texto: "Tratamientos" },
  { href: "/#doctor", texto: "El doctor" },
  { href: "/#reservar", texto: "Cómo reservar" },
  { href: "/#ubicacion", texto: "Ubicación" },
  { href: "/#preguntas", texto: "Preguntas" },
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Clínica Dental Norwill, inicio">
      <span className="grid size-9 place-items-center rounded-xl bg-marca text-crema">
        <IconoDiente className="size-5" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-semibold tracking-tight text-marca-oscura">Norwill</span>
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tinta-suave">
          Clínica dental
        </span>
      </span>
    </Link>
  );
}

export function Encabezado() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-linea/70 bg-crema/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-tinta-suave">
            {enlaces.map((e) => (
              <li key={e.href}>
                <Link href={e.href} className="transition-colors hover:text-marca">
                  {e.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#cita"
            className="hidden rounded-full bg-marca px-5 py-2.5 text-sm font-semibold text-crema transition-colors hover:bg-marca-oscura sm:inline-block"
          >
            Reservar cita
          </Link>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-full text-tinta hover:bg-arena lg:hidden"
          >
            {abierto ? <IconoCerrar className="size-6" /> : <IconoMenu className="size-6" />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-linea bg-crema lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {[...enlaces, { href: "/#cita", texto: "Reservar cita" }].map((e) => (
              <li key={e.href}>
                <Link
                  href={e.href}
                  onClick={() => setAbierto(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-tinta hover:bg-arena"
                >
                  {e.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

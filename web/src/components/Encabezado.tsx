"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IconoCerrar, IconoMenu } from "./iconos";
import { LogoBarra } from "./Marca";

const enlaces = [
  { href: "/#consultorio", texto: "Consultorio" },
  { href: "/#tratamientos", texto: "Tratamientos" },
  { href: "/#doctor", texto: "Especialista" },
  { href: "/#ubicacion", texto: "Ubicación" },
  { href: "/#preguntas", texto: "Preguntas" },
];

export function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const [conSombra, setConSombra] = useState(false);

  useEffect(() => {
    const alDesplazar = () => setConSombra(window.scrollY > 8);
    alDesplazar();
    window.addEventListener("scroll", alDesplazar, { passive: true });
    return () => window.removeEventListener("scroll", alDesplazar);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const alPresionar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", alPresionar);
    return () => window.removeEventListener("keydown", alPresionar);
  }, [abierto]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        conSombra || abierto ? "border-line shadow-soft" : "border-transparent"
      }`}
    >
      <div className="contenedor flex h-[4.5rem] items-center justify-between">
        <LogoBarra />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 font-display text-sm font-medium text-muted">
            {enlaces.map((e) => (
              <li key={e.href}>
                <Link
                  href={e.href}
                  className="relative py-2 transition-colors hover:text-dark after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform hover:after:scale-x-100"
                >
                  {e.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#cita" className="btn-primario hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            Reservar cita
          </Link>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-full text-dark transition-colors hover:bg-neutral lg:hidden"
          >
            {abierto ? <IconoCerrar className="size-6" /> : <IconoMenu className="size-6" />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-line bg-white lg:hidden">
          <ul className="contenedor flex flex-col py-3">
            {enlaces.map((e) => (
              <li key={e.href}>
                <Link
                  href={e.href}
                  onClick={() => setAbierto(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-base font-medium text-dark transition-colors hover:bg-light"
                >
                  {e.texto}
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                </Link>
              </li>
            ))}
            <li className="px-3 pb-2 pt-3">
              <Link href="/#cita" onClick={() => setAbierto(false)} className="btn-primario w-full">
                Reservar cita
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

import type { ReactNode } from "react";
import { BotonWhatsapp } from "./BotonWhatsapp";
import { Encabezado } from "./Encabezado";
import { Pie } from "./Pie";

export function PaginaLegal({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <>
      <Encabezado />
      <main className="bg-light">
        <div className="contenedor max-w-3xl py-16 lg:py-24">
          <p className="eyebrow">Información legal</p>
          <h1 className="titulo-seccion mt-4">{titulo}</h1>
          <div className="tarjeta mt-10 space-y-5 p-7 leading-relaxed text-muted sm:p-10 [&_a]:font-medium [&_a]:text-primary-strong [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-dark [&_li]:ml-5 [&_li]:list-disc [&_li]:marker:text-primary [&_strong]:text-dark">
            {children}
          </div>
        </div>
      </main>
      <Pie />
      <BotonWhatsapp />
    </>
  );
}

/** Aviso para textos aún no definitivos. */
export function AvisoBorrador({ children }: { children: ReactNode }) {
  return <p className="rounded-xl border border-primary/60 bg-primary-soft p-4 text-sm text-dark">{children}</p>;
}

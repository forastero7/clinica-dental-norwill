import type { ReactNode } from "react";
import { Encabezado } from "./Encabezado";
import { Pie } from "./Pie";

export function PaginaLegal({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <>
      <Encabezado />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className="font-display text-4xl font-medium tracking-tight text-tinta sm:text-5xl">{titulo}</h1>
        <div className="mt-10 space-y-5 leading-relaxed text-tinta-suave [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-tinta [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-tinta">
          {children}
        </div>
      </main>
      <Pie />
    </>
  );
}

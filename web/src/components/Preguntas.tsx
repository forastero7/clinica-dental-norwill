import { preguntas } from "@/content/clinica";

export function Preguntas() {
  return (
    <section id="preguntas" className="border-t border-linea bg-arena/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-acento">Preguntas frecuentes</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-tinta sm:text-5xl">
            Antes de tu primera visita
          </h2>
        </div>

        <div className="divide-y divide-linea border-y border-linea">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-tinta [&::-webkit-details-marker]:hidden">
                {q.p}
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-linea text-marca transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-tinta-suave">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

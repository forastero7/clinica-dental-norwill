import { preguntas } from "@/content/clinica";
import { IconoMas } from "./iconos";

export function Preguntas() {
  return (
    <section id="preguntas" className="bg-light">
      <div className="contenedor grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="titulo-seccion mt-4">Antes de tu primera visita</h2>
          <p className="mt-5 leading-relaxed text-muted">
            ¿Tienes otra duda? Escríbenos por WhatsApp y te respondemos dentro del horario de atención.
          </p>
        </div>

        <div className="space-y-3">
          {preguntas.map((q) => (
            <details
              key={q.p}
              className="group rounded-2xl bg-white shadow-soft ring-1 ring-line/70 transition-shadow open:shadow-lift"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-display text-base font-semibold text-dark sm:text-lg [&::-webkit-details-marker]:hidden">
                {q.p}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-strong transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-dark">
                  <IconoMas className="size-4" />
                </span>
              </summary>
              <p className="max-w-2xl px-6 pb-6 leading-relaxed text-muted">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

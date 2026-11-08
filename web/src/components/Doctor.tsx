import { doctor } from "@/content/clinica";
import { IconoDiente } from "./iconos";

export function Doctor() {
  return (
    <section id="doctor" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Reemplazar por la foto del doctor */}
        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] bg-arena lg:max-w-none">
          <IconoDiente className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 text-marca/25" />
          <p className="absolute inset-x-0 bottom-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-tinta-suave/70">
            Foto del doctor próximamente
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-acento">Quién te atiende</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-tinta sm:text-5xl">
            {doctor.nombre}
          </h2>
          <p className="mt-2 text-tinta-suave">
            {doctor.titulo} · Colegio Odontológico del Perú, COP {doctor.cop}
          </p>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-tinta">
            {doctor.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {doctor.especialidades.map((e) => (
              <li key={e} className="rounded-full border border-linea bg-white px-4 py-2 text-sm font-medium text-tinta">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

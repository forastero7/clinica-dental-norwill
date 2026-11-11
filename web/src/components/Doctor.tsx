import { doctor } from "@/content/clinica";
import { IconoCheck } from "./iconos";
import { Emblema } from "./Marca";

export function Doctor() {
  return (
    <section id="doctor" className="bg-white">
      <div className="contenedor grid items-center gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-28">
        {/* Reemplazar por la foto del doctor cuando esté disponible */}
        <div className="revelar relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2.75rem] border-2 border-dashed border-primary/30" />
          <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[2.5rem] bg-neutral">
            <Emblema className="h-auto w-1/2 opacity-25" />
            <p className="absolute inset-x-0 bottom-7 text-center font-display text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Foto del doctor próximamente
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Quién te atiende</p>
          <h2 className="titulo-seccion mt-4">{doctor.nombre}</h2>
          <p className="mt-3 font-display text-sm font-medium text-muted">
            {doctor.titulo} · Colegio Odontológico del Perú, COP {doctor.cop}
          </p>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-dark/85">
            {doctor.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {doctor.especialidades.map((e) => (
              <li
                key={e}
                className="inline-flex items-center gap-2 rounded-full bg-light px-4 py-2 font-display text-sm font-medium text-dark ring-1 ring-line"
              >
                <IconoCheck className="size-4 text-primary-strong" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { clinica, doctor, horarioResumen } from "@/content/clinica";
import { whatsappUrl } from "@/lib/whatsapp";
import { IconoPin, IconoReloj, IconoWhatsapp } from "./iconos";
import { LogoCompleto } from "./Marca";

export function Portada() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Arco decorativo que retoma el círculo del logotipo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-40 hidden size-[44rem] sm:block rounded-full border-[18px] border-primary/10"
      />

      <div className="contenedor relative grid items-center gap-14 pb-20 pt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div>
          <p className="eyebrow">Consultorio dental · {clinica.direccion.ciudad}</p>
          <h1 className="isolate mt-6 font-display text-[2.35rem] font-semibold leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-[3.25rem]">
            Tu sonrisa, atendida{" "}
            <span className="relative whitespace-nowrap text-primary-strong">
              con calma
              <span aria-hidden="true" className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-primary/35 sm:h-4" />
            </span>{" "}
            y sin apuros.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Odontología general y estética con un trato cercano. Te explicamos cada opción antes de empezar y reservas
            tu cita por WhatsApp en minutos.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primario">
              <IconoWhatsapp className="size-5" />
              Reservar por WhatsApp
            </a>
            <a href="#tratamientos" className="btn-secundario">
              Ver tratamientos
            </a>
          </div>

          <dl className="mt-10 flex flex-col gap-4 border-t border-line pt-8 text-sm sm:flex-row sm:gap-10">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary-soft text-primary-strong">
                <IconoReloj className="size-5" />
              </span>
              <div>
                <dt className="font-display text-xs font-semibold uppercase tracking-wider text-muted">Horario</dt>
                <dd className="font-medium text-dark">{horarioResumen}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary-soft text-primary-strong">
                <IconoPin className="size-5" />
              </span>
              <div>
                <dt className="font-display text-xs font-semibold uppercase tracking-wider text-muted">Ubicación</dt>
                <dd className="font-medium text-dark">
                  {clinica.direccion.distrito}, {clinica.direccion.ciudad}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-[30rem]">
          <div className="relative grid aspect-square place-items-center rounded-[2.5rem] bg-primary-soft shadow-soft ring-1 ring-primary/20">
            <div aria-hidden="true" className="absolute inset-5 rounded-[2rem] border border-white/80" />
            <LogoCompleto className="relative h-auto w-[62%]" />
          </div>

          <div className="absolute -bottom-6 -left-2 flex items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-lift ring-1 ring-line/60 sm:-left-8">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-dark">
              Dr.
            </span>
            <div>
              <p className="font-display text-[0.95rem] font-semibold text-dark">{doctor.nombre}</p>
              <p className="text-sm text-muted">
                {doctor.titulo} · COP {doctor.cop}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

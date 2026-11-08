import { clinica, doctor, horarioResumen } from "@/content/clinica";
import { whatsappUrl } from "@/lib/whatsapp";
import { IconoCheck, IconoDiente, IconoPin, IconoReloj, IconoWhatsapp } from "./iconos";

const garantias = [
  "Te atiende el mismo especialista en cada cita",
  "Presupuesto por escrito antes de empezar",
  "Protocolos de bioseguridad en cada atención",
];

export function Portada() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pb-24 lg:pt-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-linea bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-marca">
            <span className="size-1.5 rounded-full bg-acento" />
            {clinica.nombreCompleto} · {clinica.direccion.ciudad}
          </p>
          <h1 className="font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-tinta sm:text-6xl">
            Tu sonrisa, atendida <em className="font-normal text-marca">con calma</em> y sin apuros.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta-suave">
            Odontología general y estética con un trato cercano. Conoce los precios referenciales antes de venir y
            reserva tu cita por WhatsApp en minutos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-marca px-7 py-4 text-base font-semibold text-crema shadow-sm transition-colors hover:bg-marca-oscura"
            >
              <IconoWhatsapp className="size-5" />
              Reservar por WhatsApp
            </a>
            <a
              href="#tratamientos"
              className="inline-flex items-center justify-center rounded-full border border-tinta/15 bg-white/50 px-7 py-4 text-base font-semibold text-tinta transition-colors hover:border-marca hover:text-marca"
            >
              Ver tratamientos y precios
            </a>
          </div>

          <ul className="mt-10 space-y-3">
            {garantias.map((g) => (
              <li key={g} className="flex items-start gap-3 text-[0.95rem] text-tinta">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-marca-clara text-marca">
                  <IconoCheck className="size-3.5" />
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* Composición visual provisional: reemplazar por foto del consultorio cuando esté disponible */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-marca">
            <div className="absolute -right-16 -top-16 size-72 rounded-full bg-marca-oscura/60" />
            <div className="absolute -bottom-24 -left-10 size-80 rounded-full bg-acento/25" />
            <IconoDiente className="absolute left-1/2 top-[42%] size-48 -translate-x-1/2 -translate-y-1/2 text-crema/85 sm:size-56" />
            <p className="absolute inset-x-0 top-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-crema/60">
              Foto del consultorio próximamente
            </p>
          </div>

          <div className="absolute -left-3 bottom-6 right-6 rounded-2xl border border-linea bg-crema p-5 shadow-xl shadow-tinta/10 sm:-left-8">
            <p className="font-display text-lg font-medium text-tinta">{doctor.nombre}</p>
            <p className="text-sm text-tinta-suave">
              {doctor.titulo} · COP {doctor.cop}
            </p>
            <div className="mt-4 grid gap-2 text-sm text-tinta-suave">
              <p className="flex items-center gap-2">
                <IconoReloj className="size-4 shrink-0 text-marca" />
                {horarioResumen}
              </p>
              <p className="flex items-center gap-2">
                <IconoPin className="size-4 shrink-0 text-marca" />
                {clinica.direccion.distrito}, {clinica.direccion.ciudad}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

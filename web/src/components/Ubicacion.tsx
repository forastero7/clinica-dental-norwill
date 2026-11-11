import { clinica, horario } from "@/content/clinica";
import { whatsappUrl } from "@/lib/whatsapp";
import { IconoFlecha, IconoPin, IconoReloj, IconoWhatsapp } from "./iconos";

export function Ubicacion() {
  const d = clinica.direccion;
  return (
    <section id="ubicacion" className="bg-white">
      <div className="contenedor py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Visítanos</p>
          <h2 className="titulo-seccion mt-4">Ubicación y horario de atención</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="tarjeta revelar p-7">
            <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary-strong">
              <IconoPin className="size-6" />
            </span>
            <h3 className="mt-6 font-display text-lg font-semibold text-dark">Dirección</h3>
            <address className="mt-2 not-italic leading-relaxed text-muted">
              {d.calle}
              <br />
              {d.distrito}, {d.ciudad}
              <br />
              <span className="text-sm">{d.referencia}</span>
            </address>
            {clinica.mapsUrl && (
              <a
                href={clinica.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-primary-strong hover:text-dark"
              >
                Abrir en Google Maps <IconoFlecha className="size-4" />
              </a>
            )}
          </div>

          <div className="tarjeta revelar p-7">
            <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary-strong">
              <IconoReloj className="size-6" />
            </span>
            <h3 className="mt-6 font-display text-lg font-semibold text-dark">Horario</h3>
            <dl className="mt-3 divide-y divide-line">
              {horario.map((h) => (
                <div key={h.dias} className="py-2.5 first:pt-0 last:pb-0">
                  <dt className="font-display text-sm font-semibold text-dark">{h.dias}</dt>
                  <dd className="mt-0.5 text-sm text-muted">{h.horas}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="revelar flex flex-col rounded-2xl bg-primary p-7 text-dark shadow-soft">
            <span className="grid size-12 place-items-center rounded-2xl bg-white/60">
              <IconoWhatsapp className="size-6" />
            </span>
            <h3 className="mt-6 font-display text-lg font-semibold">Escríbenos</h3>
            <p className="mt-2 flex-1 leading-relaxed text-dark">
              Respondemos dentro del horario de atención. Para urgencias, cuéntanos qué pasa y te damos el primer
              espacio libre.
            </p>
            <p className="mt-5 font-display text-sm font-semibold">{clinica.telefonoVisible}</p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-dark px-5 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

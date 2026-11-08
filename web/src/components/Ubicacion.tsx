import { clinica, horario } from "@/content/clinica";
import { whatsappUrl } from "@/lib/whatsapp";
import { IconoPin, IconoReloj, IconoWhatsapp } from "./iconos";

export function Ubicacion() {
  const d = clinica.direccion;
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-acento">Visítanos</p>
      <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight text-tinta sm:text-5xl">
        Ubicación y horario de atención
      </h2>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-linea bg-white p-6">
          <IconoPin className="size-6 text-marca" />
          <h3 className="mt-4 font-semibold text-tinta">Dirección</h3>
          <address className="mt-2 not-italic leading-relaxed text-tinta-suave">
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
              className="mt-4 inline-block text-sm font-semibold text-marca underline-offset-4 hover:underline"
            >
              Abrir en Google Maps →
            </a>
          )}
        </div>

        <div className="rounded-2xl border border-linea bg-white p-6">
          <IconoReloj className="size-6 text-marca" />
          <h3 className="mt-4 font-semibold text-tinta">Horario</h3>
          <dl className="mt-2 space-y-3">
            {horario.map((h) => (
              <div key={h.dias}>
                <dt className="text-sm font-medium text-tinta">{h.dias}</dt>
                <dd className="text-sm text-tinta-suave">{h.horas}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col rounded-2xl bg-marca p-6 text-crema">
          <IconoWhatsapp className="size-6" />
          <h3 className="mt-4 font-semibold">Escríbenos</h3>
          <p className="mt-2 flex-1 leading-relaxed text-crema/80">
            Respondemos dentro del horario de atención. Para urgencias, cuéntanos qué pasa y te damos el primer
            espacio libre.
          </p>
          <p className="mt-4 text-sm text-crema/80">{clinica.telefonoVisible}</p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-crema px-5 py-3 text-sm font-semibold text-marca-oscura transition-colors hover:bg-white"
          >
            Abrir WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { FormularioCita } from "./FormularioCita";

const pasos = [
  {
    n: "01",
    titulo: "Elige el tratamiento",
    texto: "Si no sabes qué necesitas, elige “Consulta y evaluación”: revisamos todo y te orientamos.",
  },
  {
    n: "02",
    titulo: "Cuéntanos qué día te acomoda",
    texto: "Completa el formulario o escríbenos directo. Te respondemos con los horarios libres.",
  },
  {
    n: "03",
    titulo: "Confirmamos por WhatsApp",
    texto: "Recibes la confirmación con la dirección y un recordatorio el día anterior a tu cita.",
  },
];

export function Reservar() {
  return (
    <section id="reservar" className="relative overflow-hidden bg-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 size-[36rem] rounded-full border-[18px] border-primary/15"
      />
      <div className="contenedor relative grid gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div>
          <p className="eyebrow !text-primary">Cómo reservar</p>
          <h2 className="titulo-seccion mt-4 !text-white">Tu cita en tres pasos</h2>
          <ol className="mt-12 space-y-9">
            {pasos.map((p) => (
              <li key={p.n} className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-dark">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.titulo}</h3>
                  <p className="mt-1.5 leading-relaxed text-white/70">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div id="cita" className="scroll-mt-24">
          <FormularioCita />
        </div>
      </div>
    </section>
  );
}

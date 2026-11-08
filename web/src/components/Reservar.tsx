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
    <section id="reservar" className="bg-marca-oscura text-crema">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-acento">Cómo reservar</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Tu cita en tres pasos
          </h2>
          <ol className="mt-10 space-y-8">
            {pasos.map((p) => (
              <li key={p.n} className="flex gap-5">
                <span className="font-display text-3xl font-medium text-acento">{p.n}</span>
                <div>
                  <h3 className="text-lg font-semibold">{p.titulo}</h3>
                  <p className="mt-1 leading-relaxed text-crema/75">{p.texto}</p>
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

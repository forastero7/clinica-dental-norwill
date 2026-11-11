import { clinica } from "@/content/clinica";
import { IconoDocumento, IconoEscudo, IconoUsuario } from "./iconos";

const pilares = [
  {
    icono: IconoUsuario,
    titulo: "Un mismo especialista",
    texto: "Te atiende el mismo especialista en cada cita, desde la evaluación hasta el control final.",
  },
  {
    icono: IconoDocumento,
    titulo: "Presupuesto por escrito",
    texto: "Antes de empezar conoces el plan y el costo de tu tratamiento. Sin sorpresas al final.",
  },
  {
    icono: IconoEscudo,
    titulo: "Bioseguridad",
    texto: "Protocolos de bioseguridad en cada atención para que te sientas tranquilo en el sillón.",
  },
];

export function Consultorio() {
  return (
    <section id="consultorio" className="border-t border-line/70 bg-white">
      <div className="contenedor py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">El consultorio</p>
          <h2 className="titulo-seccion mt-4">Odontología cercana, sin apuros</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{clinica.descripcion}</p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {pilares.map(({ icono: Icono, titulo, texto }) => (
            <li key={titulo} className="tarjeta revelar p-7 transition-shadow duration-300 hover:shadow-lift">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary-strong">
                <Icono className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-dark">{titulo}</h3>
              <p className="mt-2 leading-relaxed text-muted">{texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

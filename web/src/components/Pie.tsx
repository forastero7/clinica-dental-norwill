import Link from "next/link";
import { clinica, horarioResumen } from "@/content/clinica";
import { IconoCorreo, IconoPin, IconoReloj, IconoTelefono } from "./iconos";
import { LogoCompleto } from "./Marca";

const secciones = [
  { href: "/#consultorio", texto: "Consultorio" },
  { href: "/#tratamientos", texto: "Tratamientos" },
  { href: "/#doctor", texto: "Especialista" },
  { href: "/#cita", texto: "Reservar cita" },
  { href: "/#preguntas", texto: "Preguntas frecuentes" },
];

export function Pie() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="contenedor grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1.1fr_0.9fr]">
        <div>
          <LogoCompleto className="h-auto w-40" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{clinica.eslogan}.</p>
        </div>

        <nav aria-label="Secciones">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-dark">Secciones</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            {secciones.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="transition-colors hover:text-primary-strong">
                  {s.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-dark">Contacto</h2>
          <ul className="mt-5 space-y-3.5 text-sm text-muted">
            <li className="flex gap-3">
              <IconoTelefono className="size-5 shrink-0 text-primary-strong" />
              {clinica.telefonoVisible}
            </li>
            <li className="flex gap-3">
              <IconoCorreo className="size-5 shrink-0 text-primary-strong" />
              <a href={`mailto:${clinica.email}`} className="break-all transition-colors hover:text-primary-strong">
                {clinica.email}
              </a>
            </li>
            <li className="flex gap-3">
              <IconoPin className="size-5 shrink-0 text-primary-strong" />
              <span>
                {clinica.direccion.calle}, {clinica.direccion.distrito}
              </span>
            </li>
            <li className="flex gap-3">
              <IconoReloj className="size-5 shrink-0 text-primary-strong" />
              {horarioResumen}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-dark">Legal</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>
              <Link href="/politica-de-privacidad" className="transition-colors hover:text-primary-strong">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/libro-de-reclamaciones"
                className="mt-1 inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-light px-4 py-2.5 font-display font-semibold text-dark ring-1 ring-line transition-colors hover:ring-primary"
              >
                <span aria-hidden="true">📕</span> Libro de Reclamaciones
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral">
        <div className="contenedor flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {clinica.razonSocial} · RUC {clinica.ruc}
          </p>
          <p>{clinica.nombreCompleto}</p>
        </div>
      </div>
    </footer>
  );
}

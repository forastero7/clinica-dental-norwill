import Link from "next/link";
import { clinica } from "@/content/clinica";
import { Logo } from "./Encabezado";

export function Pie() {
  return (
    <footer className="border-t border-linea bg-crema">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-tinta-suave">{clinica.eslogan}.</p>
        </div>

        <div className="text-sm text-tinta-suave">
          <h2 className="font-semibold text-tinta">Contacto</h2>
          <p className="mt-3">{clinica.telefonoVisible}</p>
          <p>
            <a href={`mailto:${clinica.email}`} className="hover:text-marca">
              {clinica.email}
            </a>
          </p>
          <p className="mt-2">
            {clinica.direccion.calle}, {clinica.direccion.distrito}
          </p>
        </div>

        <div className="text-sm text-tinta-suave">
          <h2 className="font-semibold text-tinta">Legal</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/politica-de-privacidad" className="hover:text-marca">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/libro-de-reclamaciones"
                className="inline-flex items-center gap-2 rounded-lg border border-linea bg-white px-3 py-2 font-medium text-tinta hover:border-marca"
              >
                <span aria-hidden="true">📕</span> Libro de Reclamaciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-linea">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-tinta-suave sm:px-6">
          © 2026 {clinica.razonSocial} · RUC {clinica.ruc}
        </p>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { AvisoBorrador, PaginaLegal } from "@/components/PaginaLegal";
import { clinica } from "@/content/clinica";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones",
  alternates: { canonical: "/libro-de-reclamaciones" },
};

// PENDIENTE: el formulario virtual (Código de Protección al Consumidor, D.S. 011-2011-PCM y modificatorias)
// debe registrar la hoja, enviar copia al consumidor y guardarla. Requiere backend; se implementa con la API.
export default function LibroReclamaciones() {
  return (
    <PaginaLegal titulo="Libro de Reclamaciones">
      <p>
        Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, {clinica.nombreCompleto} cuenta
        con un Libro de Reclamaciones a tu disposición.
      </p>

      <h2>Datos del proveedor</h2>
      <ul>
        <li>
          <strong>Razón social:</strong> {clinica.razonSocial}
        </li>
        <li>
          <strong>RUC:</strong> {clinica.ruc}
        </li>
        <li>
          <strong>Dirección:</strong> {clinica.direccion.calle}, {clinica.direccion.distrito}, {clinica.direccion.ciudad}
        </li>
      </ul>

      <h2>Cómo presentar un reclamo o queja</h2>
      <p>
        Puedes solicitar el Libro de Reclamaciones físico en el consultorio o escribirnos a{" "}
        <a href={`mailto:${clinica.email}`}>
          {clinica.email}
        </a>{" "}
        indicando tu nombre, DNI, el detalle del reclamo y tu pedido. Daremos respuesta en un plazo no mayor a 15 días
        hábiles.
      </p>

      <AvisoBorrador>
        <strong>Formulario virtual en implementación.</strong> La hoja de reclamación en línea estará disponible antes
        del lanzamiento oficial del sitio.
      </AvisoBorrador>
    </PaginaLegal>
  );
}

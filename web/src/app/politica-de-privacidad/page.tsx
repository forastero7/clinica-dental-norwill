import type { Metadata } from "next";
import { AvisoBorrador, PaginaLegal } from "@/components/PaginaLegal";
import { clinica } from "@/content/clinica";

export const metadata: Metadata = {
  title: "Política de privacidad",
  alternates: { canonical: "/politica-de-privacidad" },
};

// BORRADOR: debe revisarlo un abogado antes de publicar (Ley 29733 y D.S. 016-2024-JUS).
export default function PoliticaPrivacidad() {
  return (
    <PaginaLegal titulo="Política de privacidad">
      <p>
        En {clinica.nombreCompleto} ({clinica.razonSocial}, RUC {clinica.ruc}) protegemos tus datos personales
        conforme a la Ley N.º 29733, Ley de Protección de Datos Personales, y su reglamento.
      </p>

      <h2>Qué datos recogemos</h2>
      <p>
        Los que nos das al solicitar una cita: nombre, número de celular, tratamiento de interés, fecha preferida y
        los comentarios que decidas escribir. Si nos cuentas detalles sobre tu salud, se consideran datos sensibles y
        solo los usamos para atenderte.
      </p>

      <h2>Para qué los usamos</h2>
      <ul>
        <li>Coordinar, confirmar y recordarte tus citas.</li>
        <li>Responder tus consultas sobre tratamientos.</li>
        <li>Cumplir obligaciones legales, como la historia clínica y la emisión de comprobantes.</li>
      </ul>
      <p>
        No usamos tus datos para publicidad sin tu autorización expresa y separada, y nunca los vendemos ni los
        cedemos a terceros con fines comerciales.
      </p>

      <h2>Cómo se comunican</h2>
      <p>
        El formulario de citas abre WhatsApp en tu dispositivo con un mensaje que tú decides enviar. Este sitio web no
        guarda los datos del formulario. WhatsApp es un servicio de Meta Platforms, sujeto a sus propias condiciones.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición (ARCO) escribiendo a{" "}
        <a href={`mailto:${clinica.email}`}>
          {clinica.email}
        </a>
        . Si consideras que no atendimos tu solicitud, puedes acudir a la Autoridad Nacional de Protección de Datos
        Personales.
      </p>

      <AvisoBorrador>
        <strong>Borrador provisional.</strong> Este texto debe ser revisado y completado por asesoría legal antes de
        la publicación del sitio.
      </AvisoBorrador>
    </PaginaLegal>
  );
}

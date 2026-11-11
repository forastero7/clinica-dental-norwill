import { BotonWhatsapp } from "@/components/BotonWhatsapp";
import { Consultorio } from "@/components/Consultorio";
import { Doctor } from "@/components/Doctor";
import { Encabezado } from "@/components/Encabezado";
import { Pie } from "@/components/Pie";
import { Portada } from "@/components/Portada";
import { Preguntas } from "@/components/Preguntas";
import { Reservar } from "@/components/Reservar";
import { Tratamientos } from "@/components/Tratamientos";
import { Ubicacion } from "@/components/Ubicacion";
import { clinica, doctor, horarioSchema, tratamientos } from "@/content/clinica";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinica.nombreCompleto,
  description: clinica.descripcion,
  url: clinica.sitioUrl,
  telephone: clinica.telefonoVisible,
  email: clinica.email,
  currenciesAccepted: "PEN",
  address: {
    "@type": "PostalAddress",
    streetAddress: clinica.direccion.calle,
    addressLocality: clinica.direccion.distrito,
    addressRegion: clinica.direccion.ciudad,
    addressCountry: clinica.direccion.pais,
  },
  openingHoursSpecification: horarioSchema.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.dias,
    opens: h.abre,
    closes: h.cierra,
  })),
  employee: { "@type": "Person", name: doctor.nombre, jobTitle: doctor.titulo },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tratamientos",
    itemListElement: tratamientos.map((t) => ({
      "@type": "Offer",
      itemOffered: { "@type": "MedicalProcedure", name: t.nombre, description: t.descripcion },
    })),
  },
};

export default function Inicio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift"
      >
        Saltar al contenido
      </a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Consultorio />
        <Tratamientos />
        <Doctor />
        <Reservar />
        <Ubicacion />
        <Preguntas />
      </main>
      <Pie />
      <BotonWhatsapp />
    </>
  );
}

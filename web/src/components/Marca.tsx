import Image from "next/image";
import Link from "next/link";
import emblema from "@/assets/marca/emblema-norwil.webp";
import logo from "@/assets/marca/logo-norwil.webp";
import { clinica } from "@/content/clinica";

/**
 * Logotipo oficial. Los archivos salen del logo original (docs/marca/logo-norwil-original.jpg)
 * con el fondo crema convertido en transparencia; la forma y el color no se modificaron.
 */
export function LogoCompleto({ className }: { className?: string }) {
  return <Image src={logo} alt={`Logotipo de ${clinica.nombreCompleto}`} className={className} />;
}

/**
 * Versión horizontal para la barra de navegación: el emblema del logo junto al nombre.
 * El logo completo es vertical y su texto sería ilegible a la altura de la barra.
 */
export function LogoBarra() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${clinica.nombreCompleto}, inicio`}>
      <Image src={emblema} alt="" priority className="h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
      <span className="leading-none">
        <span className="block font-display text-lg font-semibold uppercase tracking-[0.28em] text-dark">
          {clinica.nombre}
        </span>
        <span className="mt-1 block font-display text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted">
          Consultorio dental
        </span>
      </span>
    </Link>
  );
}

export function Emblema({ className }: { className?: string }) {
  return <Image src={emblema} alt="" className={className} />;
}

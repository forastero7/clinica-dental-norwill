import { whatsappUrl } from "@/lib/whatsapp";
import { IconoWhatsapp } from "./iconos";

export function BotonWhatsapp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <IconoWhatsapp className="size-7" />
    </a>
  );
}

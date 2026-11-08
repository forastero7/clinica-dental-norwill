import { clinica } from "@/content/clinica";

/** Enlace wa.me con mensaje precargado. */
export function whatsappUrl(mensaje = "Hola, quisiera reservar una cita en Clínica Dental Norwill.") {
  return `https://wa.me/${clinica.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export function formatoSoles(monto: number) {
  return `S/ ${monto.toLocaleString("es-PE")}`;
}

import { clinica } from "@/content/clinica";

export const mensajeReserva = `Hola, quisiera reservar una cita en ${clinica.nombreCompleto}.`;

/** Enlace wa.me con mensaje precargado. */
export function whatsappUrl(mensaje = mensajeReserva) {
  return `https://wa.me/${clinica.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

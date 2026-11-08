import type { MetadataRoute } from "next";
import { clinica } from "@/content/clinica";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/politica-de-privacidad", "/libro-de-reclamaciones"].map((ruta) => ({
    url: `${clinica.sitioUrl}${ruta}`,
  }));
}

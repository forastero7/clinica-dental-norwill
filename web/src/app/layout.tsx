import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { clinica } from "@/content/clinica";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(clinica.sitioUrl),
  title: {
    default: `${clinica.nombreCompleto} | Dentista en ${clinica.direccion.ciudad}`,
    template: `%s | ${clinica.nombreCompleto}`,
  },
  description: clinica.descripcion,
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: clinica.nombreCompleto,
    title: clinica.nombreCompleto,
    description: clinica.descripcion,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}

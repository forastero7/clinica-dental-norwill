import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { clinica } from "@/content/clinica";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
  themeColor: "#0f5c5a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" className={`${jakarta.variable} ${fraunces.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}

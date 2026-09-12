import type { Metadata } from "next";
import { Fraunces, Inter, Alex_Brush } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const signatureFont = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fotografía Luz Norte — Retratos de familia, pareja y mascotas",
  description:
    "Experiencias fotográficas en Oaxaca para familias, parejas y sus mascotas. Sesiones que combinan fotografía con momentos que de verdad importan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${fraunces.variable} ${inter.variable} ${signatureFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

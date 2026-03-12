import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deviaty - IA para Clínicas Dentales",
  description: "Deviaty provee agentes de IA diseñados para convertir leads y recuperar pacientes para clínicas dentales. Incrementa tus citas y optimiza tu agenda hoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

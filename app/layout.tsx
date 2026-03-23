import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Deviaty | Optimización de Procesos con IA y Software',
  description: 'Ayudamos a empresas a ser más eficientes mediante herramientas de inteligencia artificial y desarrollo de software a medida.',
  keywords: ['IA', 'Optimización de procesos', 'Software a medida', 'Deviaty'],
  openGraph: {
    title: 'Deviaty | Eficiencia con IA',
    description: 'Transforma tu empresa con soluciones de software inteligente.',
    url: 'https://deviaty.com',
    siteName: 'Deviaty',
    locale: 'es_ES',
    type: 'website',
  },
}

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

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.deviaty.com'),
  title: 'Deviaty | IA para Clínicas Dentales',
  description: 'Automatiza la atención de tu clínica dental con IA. Responde pacientes, agenda citas y reduce carga operativa 24/7. Más pacientes, menos trabajo manual.',
  keywords: ['IA para clínicas dentales', 'Automatización dental', 'Software dental IA', 'Deviaty', 'Agenda dental inteligente'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Deviaty | IA para Clínicas Dentales',
    description: 'Automatiza la atención de tu clínica dental con IA y reduce tu carga operativa.',
    url: 'https://deviaty.com',
    siteName: 'Deviaty',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deviaty | IA para Clínicas Dentales',
    description: 'Automatiza la atención de tu clínica dental con IA. 24/7 y sin esperas.',
    // images: ['/og-image.png'], // Add this if you have an OG image
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

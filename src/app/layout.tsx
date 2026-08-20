import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

/* Definição da Variável */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Cria a variável CSS utilizada no globals.css
  display: "swap",
});

/* Metadados Globais da Aplicação (SEO) */
export const metadata: Metadata = {
  title: "Spotify - Web Player: Música para todos",
  description:
    "Spotify é um serviço de música digital que dá acesso a milhões de músicas, podcasts e vídeos de artistas do mundo todo.",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/brand/spotify.svg", type: "image/svg+xml" }],
    shortcut: "/brand/spotify.svg",
    apple: "/brand/spotify.svg",
  },
};

/* Metadados de Viewport (Aparência do Navegador) */
export const viewport: Viewport = {
  colorScheme: "dark" /* Força o esquema de cores escuro no navegador */,
  themeColor:
    "#121212" /* Define a cor da barra do navegador em dispositivos móveis */,
};

/* Aplicação no HTML e no Body */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. Injeta a variável CSS da fonte na tag <html> */
    // 2. Aplica a classe font-sans, que no globals.css consomevar(--font-montserrat)
    <html lang="pt-BR" className={`dark bg-background ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

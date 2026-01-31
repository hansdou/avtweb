import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AVT Servicios Generales - Especialistas en Saneamiento | Lima, Perú',
  description: 'Especialistas en elaboración de expedientes técnicos, asesoramiento SEDAPAL, trampas de grasas y obras de saneamiento. Más de 10 años de experiencia en Lima.',
  keywords: 'saneamiento, SEDAPAL, expedientes técnicos, trampas de grasas, agua potable, alcantarillado',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

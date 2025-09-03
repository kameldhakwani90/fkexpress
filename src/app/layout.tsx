import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FK EXPRESS - Transport de Marchandises Professionnel | Gagny (93)',
  description: 'FK EXPRESS, entreprise de transport de marchandises basée à Gagny (93). Flotte de 45+ véhicules, licence transport, location véhicules industriels. Devis gratuit 01 85 78 43 53.',
  keywords: 'transport marchandises, transport routier, Gagny, Seine-Saint-Denis, 93, FK EXPRESS, location véhicules industriels, transport national, fret express, logistique Île-de-France, transport professionnel, licence transport, SIRET 52188652300047',
  authors: [{ name: 'FK EXPRESS' }],
  robots: 'index, follow',
  openGraph: {
    title: 'FK EXPRESS - Transport de Marchandises Professionnel',
    description: 'Entreprise de transport de marchandises à Gagny (93). Flotte moderne, suivi GPS, certification ISO. Service 24h/24.',
    url: 'https://fkexpress.pro',
    siteName: 'FK EXPRESS',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FK EXPRESS - Transport de Marchandises',
    description: 'Transport professionnel de marchandises en Île-de-France et France entière.',
  },
  alternates: {
    canonical: 'https://fkexpress.pro',
  },
  other: {
    'geo.region': 'FR-93',
    'geo.placename': 'Gagny',
    'geo.position': '48.8839;2.5354',
    'ICBM': '48.8839, 2.5354',
    'business:contact_data:street_address': '11 BIS AVENUE DE DIJON',
    'business:contact_data:locality': 'GAGNY',
    'business:contact_data:postal_code': '93220',
    'business:contact_data:country_name': 'France',
    'business:contact_data:phone_number': '+33185784353',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
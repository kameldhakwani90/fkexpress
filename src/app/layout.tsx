import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FKExpress.pro - Solutions Transport & Logistique Nouvelle Génération',
  description: 'Leader français du transport intelligent. Import/Export, transport national, entreposage 4.0. Optimisez votre chaîne logistique avec FKExpress.',
  keywords: 'transport, logistique, import, export, entreposage, France, FKExpress',
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
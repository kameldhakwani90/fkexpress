'use client'

import { ArrowRight, Calendar, User, Clock, Truck, Award, Globe, Package, Shield, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Logo from '../../components/Logo'
import ThemeToggle from '../../components/ThemeToggle'

export default function BlogPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Logo className="h-10 w-auto text-red-600" width={120} height={40} />
              </Link>
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">FK EXPRESS</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">Transport & Logistique</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium">Accueil</Link>
              <div className="relative group">
                <button className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium flex items-center">
                  Services <ChevronRight className="ml-1 w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link href="/services/transport-national" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Transport National</Link>
                  <Link href="/services/express-idf" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Express Île-de-France</Link>
                  <Link href="/services/location-vehicules" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Location Véhicules</Link>
                  <Link href="/services/transport-international" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Transport International</Link>
                  <Link href="/services/stockage-securise" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Stockage Sécurisé</Link>
                  <Link href="/services/suivi-temps-reel" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Suivi Temps Réel</Link>
                </div>
              </div>
              <Link href="/blog" className="text-red-600 dark:text-red-400 font-semibold">Blog</Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium">Contact</Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Blog */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
            Blog FKExpress
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Découvrez nos actualités, innovations et évolutions dans le secteur du transport de marchandises
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Blog en Construction
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Nous préparons du contenu exclusif sur le transport et la logistique. 
              Revenez bientôt pour découvrir nos actualités et conseils d'experts.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Nous Contacter
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 FK EXPRESS - SIRET: 52188652300047 | Transport de Marchandises
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
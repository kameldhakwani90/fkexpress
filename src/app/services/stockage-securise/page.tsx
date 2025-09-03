'use client'

import { ArrowRight, Check, Shield, Lock, Camera, Package } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Logo from '../../../components/Logo'
import DevisPopup from '../../../components/DevisPopup'

export default function StockageSecurisePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <Header currentService="stockage-securise" currentPage="services" />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Stockage Sécurisé
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Confiez vos marchandises à notre entrepôt sécurisé moderne. 
            Protection maximale et gestion professionnelle de vos stocks.
          </p>

          <button 
            onClick={handleOpenPopup}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Demander un Devis
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </button>
        </div>
      </section>

      {/* Présentation du Service */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Stockage Sécurisé : Protection Maximale de Vos Marchandises
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Confiez vos marchandises à notre entrepôt haute sécurité. Avec un système de surveillance 
                24/7, un contrôle d'accès strict et une gestion informatisée complète, 
                vos stocks sont entre de bonnes mains.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Surveillance continue</div>
                </div>
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Sécurité garantie</div>
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Visiter nos installations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <img 
                src="/element/stockage.jpg" 
                alt="Stockage Sécurisé FK EXPRESS - Entrepôt Professionnel"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Notre Entrepôt Sécurisé
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Espace de stockage moderne avec sécurité professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Sécurité Maximum</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Système de sécurité multicouches avec contrôle d'accès strict
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Alarme 24/7 connectée</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Contrôle d'accès strict</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Gardiennage professionnel</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Surveillance Totale</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Système de vidéosurveillance haute définition avec enregistrement
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Caméras 4K jour/nuit</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Enregistrement 30 jours</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Détection de mouvement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Protection Optimale</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Entrepôt moderne aux normes de sécurité les plus élevées
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Zones sécurisées</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Protection incendie</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Environnement propre</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Services Inclus
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Gestion complète de vos stocks avec services additionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Réception</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Contrôle et inventaire</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                📋
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Gestion</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Suivi informatisé</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                📦
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Préparation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Picking et emballage</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                🚚
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Expédition</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Livraison directe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Besoin d'un Stockage Sécurisé ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Confiez vos marchandises à notre entrepôt professionnel et sécurisé
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleOpenPopup}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Demander un Devis
            </button>
            
            <a 
              href="tel:0185784353" 
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-500 text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              01 85 78 43 53
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Logo className="h-10 w-auto text-red-600" width={120} height={40} />
                <div>
                  <h3 className="text-xl font-bold">FK EXPRESS</h3>
                  <p className="text-gray-400 text-sm">Transport & Logistique</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Votre partenaire de confiance pour tous vos besoins de transport et logistique. 
                Service professionnel depuis plus de 15 ans.
              </p>
              <div className="text-sm text-gray-500">
                <p>SIRET: 52188652300047</p>
                <p>TVA: FR41521886523</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/transport-national" className="hover:text-white transition-colors">Transport National</Link></li>
                <li><Link href="/services/express-idf" className="hover:text-white transition-colors">Express Île-de-France</Link></li>
                <li><Link href="/services/location-vehicules" className="hover:text-white transition-colors">Location Véhicules</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>01 85 78 43 53</li>
                <li>contact@fkexpress.pro</li>
                <li>427 Bis route Conflans<br />95220 Herblay sur Seine</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FK EXPRESS. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Popup */}
      <DevisPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        selectedService="stockage-securise"
      />
    </div>
  )
}
'use client'

import { Truck, CheckCircle, ArrowRight, Shield, Clock, Award } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Logo from '../../../components/Logo'
import DevisPopup from '../../../components/DevisPopup'

export default function TransportNationalPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <Header currentService="transport-national" currentPage="services" />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Truck className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Transport National
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Livraisons dans toute la France avec notre flotte moderne de 45+ véhicules 
            et notre réseau de partenaires certifiés. Service professionnel garanti.
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
                Votre Partenaire Transport National de Confiance
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Avec plus de 15 ans d'expérience dans le transport de marchandises, FK EXPRESS assure vos livraisons 
                sur l'ensemble du territoire français. Notre expertise et notre réseau de partenaires certifiés 
                garantissent un service de qualité adapté à vos besoins.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">99%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Livraisons réussies</div>
                </div>
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">24-48h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Délai moyen</div>
                </div>
              </div>

              <Link 
                href="/devis?service=transport-national"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <img 
                src="/element/autoroute national .jpg" 
                alt="Transport National FK EXPRESS - Autoroute Française"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques Détaillées */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ce qui fait notre Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Un service complet et professionnel pour tous vos besoins de transport national
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Assurance Complète</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Toutes vos marchandises sont assurées pendant le transport avec une couverture adaptée à leur valeur.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Délais Garantis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Respect strict des délais convenus avec engagement de livraison dans les temps impartis.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Suivi Temps Réel</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Géolocalisation GPS de vos marchandises avec notifications automatiques et suivi en ligne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de Service */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Comment Ça Marche ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Un processus simple et efficace pour vos transports nationaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Demande de Devis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Remplissez notre formulaire ou contactez-nous directement pour une estimation personnalisée.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Planification</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nos experts organisent votre transport en optimisant les trajets et les délais.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Transport Sécurisé</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Vos marchandises sont prises en charge par nos chauffeurs expérimentés.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Livraison Confirmée</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Réception confirmée avec preuve de livraison et suivi complet de l'opération.
              </p>
            </div>
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
        selectedService="transport-national"
      />
    </div>
  )
}
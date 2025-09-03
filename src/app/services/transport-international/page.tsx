'use client'

import { ArrowRight, Check, Shield, Globe, FileText, MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Logo from '../../../components/Logo'
import DevisPopup from '../../../components/DevisPopup'

export default function TransportInternationalPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <Header currentService="transport-international" currentPage="services" />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Transport International
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Étendez vos activités à l'échelle européenne avec notre service de transport international 
            incluant la gestion complète des formalités douanières.
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
                Transport International : L'Europe à Votre Portée
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Étendez vos activités commerciales au-delà des frontières françaises. 
                Notre expertise en transport international et notre maîtrise des formalités 
                douanières vous ouvrent les portes du marché européen en toute sérénité.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Pays desservis</div>
                </div>
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Conformité douanière</div>
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Explorer l'international
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <img 
                src="/element/international.jpg" 
                alt="Transport International FK EXPRESS - Service Europe"
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
              Nos Destinations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Couverture étendue pour vos expéditions internationales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Europe</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Livraisons dans tous les pays de l'Union Européenne avec suivi complet
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Allemagne, Italie, Espagne</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Belgique, Pays-Bas, Luxembourg</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Autres pays UE disponibles</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Royaume-Uni</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Transport spécialisé post-Brexit avec gestion douanière
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Londres, Manchester</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Documents Brexit gérés</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Passage tunnel/ferry</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Formalités</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Gestion complète des procédures douanières et documentaires
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Documents CMR et T1</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Déclarations douanières</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Assurance internationale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Pourquoi Choisir Notre Service International ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              L'expertise et la fiabilité pour vos expéditions à l'étranger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                15+
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Pays Desservis</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Europe et Maghreb</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                24/7
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Suivi</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Traçabilité complète</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                10+
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Années</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Expérience internationale</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                100%
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Conformité</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Réglementations respectées</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Prêt pour l'International ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Confiez-nous vos expéditions internationales et bénéficiez de notre expertise
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
        selectedService="transport-international"
      />
    </div>
  )
}
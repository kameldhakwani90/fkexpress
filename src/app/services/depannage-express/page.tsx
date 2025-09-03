'use client'

import { ArrowRight, Check, Wrench, Clock, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Logo from '../../../components/Logo'
import DevisPopup from '../../../components/DevisPopup'

export default function DepannageExpressPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <Header currentService="depannage-express" currentPage="services" />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Dépannage Express
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Intervention d'urgence 24/7 pour tous vos problèmes de transport et logistique. 
            Équipes techniques expertes sur toute l'Île-de-France.
          </p>

          <button 
            onClick={handleOpenPopup}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Demander une Intervention
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
                Dépannage Express : Intervention d'Urgence 24/7
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                En cas de panne ou de problème urgent, nos équipes techniques interviennent 
                rapidement partout en Île-de-France. Diagnostic, réparation ou remplacement, 
                nous minimisons vos interruptions d'activité.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">30min</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Temps d'intervention</div>
                </div>
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Disponibilité urgence</div>
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Nos services d'urgence
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <img 
                src="/element/remorquage.jpg" 
                alt="Dépannage Express FK EXPRESS - Service de Remorquage"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Nos Interventions d'Urgence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Solutions rapides pour tous vos problèmes de transport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Panne Véhicule</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Dépannage mécanique sur site ou remorquage d'urgence
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Diagnostic sur place</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Réparation d'urgence</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Remorquage sécurisé</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Urgence Livraison</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Solution de remplacement immédiate pour vos livraisons critiques
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Véhicule de remplacement</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Chauffeur expérimenté</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Respect des délais</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Assistance Route</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Support technique et logistique sur tous vos trajets
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Géolocalisation GPS</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Coordination trafic</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Support téléphonique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Temps de réponse */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Temps de Réponse Garantis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Interventions rapides selon la criticité de votre situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                30min
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Urgence Critique</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Intervention immédiate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                1h
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Urgence Standard</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Déplacement rapide</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                2h
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Assistance</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Support technique</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                24/7
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Disponibilité</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Service continu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Besoin d'une Intervention d'Urgence ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Nos équipes techniques sont prêtes à intervenir 24h/24 et 7j/7
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0185784353" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Appel d'Urgence: 01 85 78 43 53
            </a>
            
            <button 
              onClick={handleOpenPopup}
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-500 text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Demander un Devis
            </button>
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
        selectedService="depannage-express"
      />
    </div>
  )
}
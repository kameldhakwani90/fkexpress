'use client'

import { ArrowRight, Check, Package, Shield, Calendar, Users } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Logo from '../../../components/Logo'
import DevisPopup from '../../../components/DevisPopup'

export default function LocationVehiculesPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <Header currentService="location-vehicules" currentPage="services" />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Package className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Location de Véhicules
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Flotte moderne de 45+ véhicules industriels du 3.5T au 44T. 
            Avec ou sans chauffeur, pour tous vos besoins de transport.
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

      {/* Section Présentation du Service */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Location de Véhicules : Flexibilité et Performance
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Notre flotte moderne de véhicules industriels du 3.5T au 44T s'adapte parfaitement 
                à vos besoins. Avec ou sans chauffeur, pour des missions courtes ou longues, 
                bénéficiez d'une solution flexible et économique pour vos transports.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">45+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Véhicules disponibles</div>
                </div>
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">2h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Mise à disposition</div>
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Découvrir notre flotte
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <img 
                src="/element/lcoation voiture.jpg" 
                alt="Location de Véhicules FK EXPRESS - Flotte Professionnelle"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Flotte */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Notre Flotte de Véhicules
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Des véhicules adaptés à tous vos besoins professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.5T - Fourgon</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Capacité 20m³ - Idéal pour livraisons urbaines
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Hayon élévateur</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">GPS inclus</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Assurance incluse</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">7.5T - Porteur</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Capacité 40m³ - Transport moyennes distances
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Hayon hydraulique</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Sangles incluses</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Maintenance 24/7</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">19T - Porteur</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Capacité 75m³ - Transport longues distances
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Grue auxiliaire</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Plateau ridelles</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Permis C requis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">44T - Semi</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Capacité 100m³ - Transport grands volumes
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Frigo disponible</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Bâchage auto</span>
                </li>
                <li className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Chauffeur disponible</span>
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
              Pourquoi Louer Avec FK EXPRESS ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Flexibilité, qualité et service professionnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Sécurité Garantie</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tous nos véhicules sont régulièrement contrôlés et assurés tous risques. 
                Maintenance préventive systématique.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Chauffeurs Qualifiés</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Option chauffeur avec conducteurs expérimentés, formés aux règles de sécurité 
                et connaissant parfaitement la région.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Flexibilité Totale</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Location à la demi-journée, journée, week-end, semaine ou mois. 
                Tarifs dégressifs pour les longues durées.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Besoin d'un Véhicule Aujourd'hui ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Notre flotte est disponible 7j/7 avec réservation possible en moins de 2h
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleOpenPopup}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Réserver maintenant
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
        selectedService="location-vehicules"
      />
    </div>
  )
}
'use client'

import { Truck, Zap, Package, Globe, Shield, Wrench, CheckCircle, ArrowRight, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Logo from '../../components/Logo'
import ThemeToggle from '../../components/ThemeToggle'
import DevisPopup from '../../components/DevisPopup'

export default function DevisPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const services = [
    {
      id: 'transport-national',
      title: 'Transport National',
      icon: Truck,
      description: 'Livraisons dans toute la France avec notre réseau de partenaires certifiés',
      features: ['Couverture France entière', 'Suivi GPS temps réel', 'Délais garantis']
    },
    {
      id: 'express-idf',
      title: 'Express Île-de-France',
      icon: Zap,
      description: 'Service express région parisienne avec intervention d\'urgence 24/7',
      features: ['Livraison 2H maximum', 'Service 24/7 disponible', 'Interventions d\'urgence']
    },
    {
      id: 'location-vehicules',
      title: 'Location Véhicules',
      icon: Package,
      description: 'Flotte moderne de 45+ véhicules industriels avec ou sans chauffeur',
      features: ['Véhicules 3.5T à 44T', 'Avec ou sans chauffeur', 'Maintenance incluse']
    },
    {
      id: 'transport-international',
      title: 'Transport International',
      icon: Globe,
      description: 'Transport vers l\'Europe et le Maghreb avec formalités douanières',
      features: ['Europe et Maghreb', 'Formalités douanières', 'Documentation complète']
    },
    {
      id: 'stockage-securise',
      title: 'Stockage Sécurisé',
      icon: Shield,
      description: 'Solutions de stockage dans notre entrepôt sécurisé de 5000m²',
      features: ['Entrepôt 5000m²', 'Surveillance 24/7', 'Gestion des stocks']
    },
    {
      id: 'depannage-express',
      title: 'Dépannage Express',
      icon: Wrench,
      description: 'Intervention urgente pour dépannage et assistance routière',
      features: ['Intervention 24/7', 'Équipe spécialisée', 'Réparations sur site']
    }
  ]

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId)
    setIsPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-auto text-red-600" width={120} height={40} />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">FK EXPRESS</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Transport & Logistique</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">Accueil</Link>
              <div className="relative group">
                <button className="text-gray-600 hover:text-red-600 transition-colors flex items-center">
                  Services <ChevronRight className="ml-1 w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link href="/services/transport-national" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Transport National</Link>
                  <Link href="/services/express-idf" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Express Île-de-France</Link>
                  <Link href="/services/location-vehicules" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Location Véhicules</Link>
                  <Link href="/services/transport-international" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Transport International</Link>
                  <Link href="/services/stockage-securise" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Stockage Sécurisé</Link>
                  <Link href="/services/depannage-express" className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Dépannage Express</Link>
                </div>
              </div>
              <Link href="/blog" className="text-gray-600 hover:text-red-600 transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">Contact</Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Service professionnel depuis 15 ans
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Demande de <span className="text-red-600">Devis</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Obtenez un devis personnalisé pour vos besoins de transport et logistique. 
            Notre équipe d'experts vous répond sous 24h avec une solution adaptée.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white dark:bg-gray-800 shadow-lg rounded-full px-6 py-3 border">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Devis gratuit</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 shadow-lg rounded-full px-6 py-3 border">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Réponse sous 24h</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 shadow-lg rounded-full px-6 py-3 border">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Sans engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Choisissez Votre Service
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Sélectionnez le service qui correspond à votre besoin pour obtenir un devis personnalisé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-red-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Demander un devis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Pourquoi Choisir FK EXPRESS ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              L'expertise et la confiance depuis plus de 15 ans au service de vos besoins logistiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                45+
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Véhicules</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Flotte moderne et bien entretenue</p>
            </div>

            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                24/7
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Service</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Disponible 24h/24 et 7j/7</p>
            </div>

            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                15+
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Années</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">D'expérience dans le transport</p>
            </div>

            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                350+
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Clients</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Entreprises qui nous font confiance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Quick */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Besoin d'une Réponse Immédiate ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Notre équipe est disponible pour répondre à toutes vos questions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Téléphone</h3>
              <a href="tel:0185784353" className="text-red-600 hover:text-red-700 transition-colors font-medium">
                01 85 78 43 53
              </a>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
              <a href="mailto:contact@fkexpress.pro" className="text-red-600 hover:text-red-700 transition-colors font-medium">
                contact@fkexpress.pro
              </a>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Adresse</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                11 BIS AVENUE DE DIJON<br />93220 GAGNY
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
                <li>11 BIS AVENUE DE DIJON<br />93220 GAGNY</li>
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
        selectedService={selectedService}
      />
    </div>
  )
}
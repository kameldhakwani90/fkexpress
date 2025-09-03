'use client'

import { ArrowRight, Play, Check, BarChart3, Shield, Truck, Globe, Warehouse, Users, Clock, Star, Package, Zap, Building2, TrendingUp, MapPin, Phone, Sun, Moon, Award, Calendar, FileText } from 'lucide-react'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-auto text-gray-900 dark:text-white" width={120} height={40} />
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">FKExpress</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">Transport & Logistique</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Accueil</a>
              <a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Services</a>
              <a href="#flotte" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Notre Flotte</a>
              <a href="#zones" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Zones</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Contact</a>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105">
                <FileText className="w-4 h-4 inline mr-2" />
                Demander un Devis
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Entreprise de Transport */}
      <section id="accueil" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Camions FKExpress" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto text-white">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/90 backdrop-blur-sm text-white mb-8 font-semibold">
              <Award className="w-4 h-4 mr-2" />
              +15 ans d'expérience • Flotte de 45+ véhicules
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Transport de Marchandises 
              <span className="text-primary-400">Professionnel</span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-light text-gray-200 mb-8">
              Spécialistes du transport routier, fret de proximité et logistique en France et International
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Depuis Paris et sa région, nous transportons vos marchandises partout en France et vers l'international. 
              Service 24h/24, 7j/7 avec traçabilité complète et garantie d'arrivée à destination.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                <FileText className="mr-3 h-5 w-5" />
                Demander un Devis Gratuit
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <Phone className="mr-2 h-5 w-5" />
                01 XX XX XX XX
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400 mb-2">45+</div>
                <div className="text-white/80 font-medium">Véhicules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400 mb-2">24/7</div>
                <div className="text-white/80 font-medium">Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400 mb-2">15+</div>
                <div className="text-white/80 font-medium">Années</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400 mb-2">100%</div>
                <div className="text-white/80 font-medium">France</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Entreprise de Transport */}
      <section id="services" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Nos Services de Transport
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              FKExpress vous accompagne dans tous vos besoins de transport de marchandises, 
              du fret de proximité aux livraisons internationales.
            </p>
          </div>

          {/* Grid Services Réels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Transport National */}
            <div className="group">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Transport National France
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Depuis Paris et sa région, nous transportons vos marchandises vers toutes les régions de France. Suivi en temps réel et garantie d'arrivée.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Fret de Proximité */}
            <div className="group">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Fret de Proximité Express
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Service express en région parisienne. Fini les longues tournées ! Livraison directe et rapide pour vos urgences.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Devis express <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Location de Véhicules */}
            <div className="group">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Location de Véhicules
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Plus de 45 véhicules disponibles avec ou sans chauffeur. Du 3.5T aux poids lourds. Tarifs attractifs.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Voir la flotte <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Transport International */}
            <div className="group">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Transport International
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Import/Export vers l'Europe et international. Gestion douanière complète et partenaires certifiés.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Zones desservies <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Entreposage */}
            <div className="group">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Warehouse className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Entreposage Sécurisé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Stockage temporaire et longue durée. Entrepôts sécurisés avec gestion des stocks et préparation commandes.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Nos entrepôts <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Service 24/7 */}
            <div className="group">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Service 24h/24 - 7j/7
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Équipe disponible en permanence du lundi au dimanche. Chauffeurs expérimentés et équipe de soutien dédiée.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                  <Phone className="mr-2 h-4 w-4" />
                  01 XX XX XX XX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blocs Apple-Style avec Images */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8">
              L'Excellence FKExpress
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Des solutions innovantes qui transforment votre chaîne logistique
            </p>
          </div>

          {/* Grid Apple Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { 
                title: 'Transport Routier', 
                icon: Truck, 
                desc: 'Flotte moderne et écologique',
                color: 'from-blue-500 to-blue-600'
              },
              { 
                title: 'Import/Export', 
                icon: Globe, 
                desc: 'Commerce international expert',
                color: 'from-green-500 to-green-600'
              },
              { 
                title: 'Entrepôts 4.0', 
                icon: Building2, 
                desc: 'Stockage intelligent connecté',
                color: 'from-purple-500 to-purple-600'
              },
              { 
                title: 'Livraison Express', 
                icon: Zap, 
                desc: 'Rapidité garantie 24h',
                color: 'from-orange-500 to-orange-600'
              },
              { 
                title: 'Solutions B2B', 
                icon: Package, 
                desc: 'Logistique professionnelle',
                color: 'from-primary-500 to-primary-600'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 h-80 flex flex-col items-center justify-center text-center hover:shadow-2xl hover:scale-105 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-500">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Pricing - Style Apple */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Solutions Sur-Mesure
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-8">
              Pour Chaque Entreprise
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Des solutions flexibles et évolutives, adaptées à tous les besoins logistiques
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-primary-200 dark:border-primary-800 rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Plateforme Complète Tout-en-Un
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-2xl p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                    <span className="font-semibold text-green-800 dark:text-green-300">Transport National</span>
                  </div>
                  <p className="text-green-700 dark:text-green-400 text-sm">Réseau France entière</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="font-semibold text-blue-800 dark:text-blue-300">Import/Export</span>
                  </div>
                  <p className="text-blue-700 dark:text-blue-400 text-sm">Commerce international</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                    <span className="font-semibold text-purple-800 dark:text-purple-300">Entreposage 4.0</span>
                  </div>
                  <p className="text-purple-700 dark:text-purple-400 text-sm">Gestion intelligente</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="group bg-primary-600 hover:bg-primary-700 text-white px-16 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center mx-auto">
                Démarrer Maintenant
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">Devis personnalisé en 24h • Sans engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Style Apple Premium */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-16 shadow-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white mb-8 font-medium">
              <Star className="w-4 h-4 mr-2" />
              Rejoignez +1000 entreprises satisfaites
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
              Transformez Votre Logistique
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12">
              Dès Aujourd'hui
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              Des milliers d'entreprises nous font confiance pour optimiser leur chaîne logistique. 
              Découvrez pourquoi FKExpress est le leader du transport intelligent en France.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-white text-primary-700 px-16 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                Démarrer Gratuitement
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center group">
                <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Parler à un Expert
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">99.9%</div>
                <div className="text-white/80">Fiabilité garantie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-white/80">Support expert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-2">-30%</div>
                <div className="text-white/80">Coûts logistiques</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Apple Style */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo et description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Logo className="h-8 w-auto text-gray-900 dark:text-white" width={80} height={32} />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">FKExpress</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed mb-6">
                Leader français du transport intelligent et de la logistique nouvelle génération. 
                Solutions sur-mesure pour optimiser votre chaîne d'approvisionnement.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Siège Social</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Paris, France</p>
                </div>
              </div>
            </div>

            {/* Liens Solutions */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Solutions</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Transport National</a>
                <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Import/Export</a>
                <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Entreposage</a>
                <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Livraison Express</a>
              </div>
            </div>

            {/* Liens Entreprise */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Entreprise</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">À propos</a>
                <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Carrières</a>
                <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
                <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Support</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 FKExpress. Tous droits réservés. | Solutions Transport & Logistique
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
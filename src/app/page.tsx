'use client'

import { ArrowRight, Play, Check, BarChart3, Shield, Truck, Globe, Warehouse, Users, Clock, Star, Package, Zap, Building2, TrendingUp, MapPin, Phone, Sun, Moon } from 'lucide-react'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-auto text-gray-900 dark:text-white" width={120} height={40} />
              <span className="text-xl font-bold text-gray-900 dark:text-white">FKExpress</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Accueil</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">À propos</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-colors font-medium">
                Devis gratuit
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Style Apple Modern */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 mb-8 font-medium">
              <Truck className="w-4 h-4 mr-2" />
              Leaders du transport en France
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-gray-900 via-primary-800 to-primary-600 dark:from-white dark:via-primary-200 dark:to-primary-400 bg-clip-text text-transparent">
              FKExpress.pro
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 dark:text-gray-300 mb-8">
              Solutions Transport & Logistique Nouvelle Génération
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12 max-w-4xl mx-auto">
              Optimisez vos flux logistiques avec notre plateforme intelligente. 
              Import/Export, transport national, entreposage - tout dans une seule solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <button className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Voir Démo
            </button>
          </div>
        </div>
      </section>

      {/* Services Section - Style Apple avec icônes professionnelles */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Solutions Transport
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-8">
              Nouvelle Génération
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment FKExpress révolutionne le transport et la logistique 
              avec des technologies de pointe et une expertise reconnue dans tout le secteur.
            </p>
          </div>

          {/* Grid Services avec icônes professionnelles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Transport International */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 h-96 flex flex-col hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Transport International
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                  Solutions complètes d'import/export avec suivi en temps réel, douane automatisée et réseau mondial de partenaires certifiés.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mt-6 group-hover:translate-x-2 transition-transform">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Transport National */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 h-96 flex flex-col hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Transport National
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                  Réseau de distribution optimisé couvrant tout le territoire français avec livraison express et options écologiques.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mt-6 group-hover:translate-x-2 transition-transform">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Entreposage Intelligent */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 h-96 flex flex-col hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Warehouse className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Entreposage Intelligent
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                  Entrepôts connectés avec IA, robotisation, gestion automatisée des stocks et traçabilité complète de vos marchandises.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mt-6 group-hover:translate-x-2 transition-transform">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Sécurité & Conformité */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 h-96 flex flex-col hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Sécurité & Conformité
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                  Respect total des normes ISO, certifications internationales, assurance complète et solutions durables.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mt-6 group-hover:translate-x-2 transition-transform">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Analytics & BI */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 h-96 flex flex-col hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Analytics & BI
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                  Tableaux de bord en temps réel, prédictions IA, optimisation des coûts et rapports personnalisés avancés.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mt-6 group-hover:translate-x-2 transition-transform">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Support 24/7 */}
            <div className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 h-96 flex flex-col hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Support Expert 24/7
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                  Équipe d'experts dédiée, formation personnalisée, support multilingue et accompagnement sur-mesure.
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mt-6 group-hover:translate-x-2 transition-transform">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
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
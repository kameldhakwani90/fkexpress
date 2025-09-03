'use client'

import { ArrowRight, Play, Check, BarChart3, Shield, Truck, Globe, Warehouse, Users, Clock, Star, Package, Zap, Building2, TrendingUp, MapPin, Phone, Sun, Moon, Award, Calendar, FileText, Gauge, Headphones, BadgeCheck } from 'lucide-react'
import Logo from '../components/Logo'
import ThemeToggle from '../components/ThemeToggle'
import HeroAnimations from '../components/HeroAnimations'
import StructuredData from '../components/StructuredData'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <StructuredData />
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-auto text-gray-900 dark:text-white" width={120} height={40} />
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">FKExpress</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">Transport & Logistique</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#accueil" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm">Accueil</a>
              <a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm">Services</a>
              <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm">Blog</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm">Contact</a>
              <ThemeToggle />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm hover:shadow-lg hover:scale-105">
                <FileText className="w-4 h-4 inline mr-1.5" />
                Devis Gratuit
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Entreprise de Transport PRO */}
      <section id="accueil" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        {/* Hero Animations */}
        <HeroAnimations />
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Flotte FK EXPRESS - Transport Professionnel" 
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 tracking-tight">
              Transport de Marchandises 
              <span className="text-primary-400">Professionnel</span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-lg md:text-xl font-normal text-gray-200 mb-6 tracking-wide">
              Spécialistes du transport routier de marchandises
            </h2>
            
            {/* Description PRO */}
            <div className="space-y-4 mb-12 max-w-3xl">
              <div className="flex items-center space-x-3">
                <BadgeCheck className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-300 font-medium">Licence transport marchandises + Location véhicules industriels</p>
              </div>
              <div className="flex items-center space-x-3">
                <Gauge className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-300 font-medium">Suivi GPS temps réel sur l'ensemble de notre flotte</p>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-300 font-medium">Assurance CMR + Certification ISO 9001 Transport</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                <FileText className="mr-3 h-5 w-5" />
                Demander un Devis Gratuit
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <Phone className="mr-2 h-5 w-5" />
                01 85 78 43 53
              </button>
            </div>
            
            {/* Stats PRO */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">45+</div>
                <div className="text-white/80 text-sm font-medium">Véhicules 3.5T-44T</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">24/7</div>
                <div className="text-white/80 text-sm font-medium">Dépannage IDF</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">ISO</div>
                <div className="text-white/80 text-sm font-medium">Certifié 9001</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">CMR</div>
                <div className="text-white/80 text-sm font-medium">Assurance Pro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Style OrderSpot */}
      <section id="services" className="py-32 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              Services Transport
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">
              Professionnel
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Solutions complètes de transport de marchandises avec licence professionnelle 
              et certification ISO 9001. Flotte moderne et suivi GPS temps réel.
            </p>
          </div>

          {/* Grid Services - Style OrderSpot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <div className="bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Transport National
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Livraisons dans toute la France depuis notre base de Gagny (93). Suivi GPS et garantie d'arrivée.
                </p>
                <div className="flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Fret Express Île-de-France
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Livraison directe en région parisienne. Service d'urgence 24h/24 avec intervention sous 2h.
                </p>
                <div className="flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Devis express <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Location Véhicules Industriels
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Flotte de 45+ véhicules du 3.5T au 44T. Location avec ou sans chauffeur. Licence transport valide.
                </p>
                <div className="flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Voir la flotte <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Assurance & Certifications
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Assurance CMR complète, certification ISO 9001, licence transport marchandises officielle.
                </p>
                <div className="flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Nos certifications <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Suivi Temps Réel
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Localisation GPS sur tous nos véhicules. Traçabilité complète et notifications automatiques.
                </p>
                <div className="flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Démo tracking <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Support Dédié 24/7
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Équipe opérationnelle disponible 24h/24. Dépannage, assistance et suivi personnalisé.
                </p>
                <div className="flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  <Phone className="mr-2 h-4 w-4" />
                  01 85 78 43 53
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section - Style OrderSpot */}
      <section className="py-32 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              Prêt pour un Transport
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">
              Professionnel ?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Contactez-nous dès maintenant pour un devis personnalisé. 
              Réponse garantie sous 24h avec étude complète de vos besoins logistiques.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
              <FileText className="mr-2 h-5 w-5" />
              Demander un Devis Gratuit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              01 85 78 43 53
            </button>
          </div>
        </div>
      </section>

      {/* Actualités Section - Style OrderSpot */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              Tenez-vous informé grâce à nos
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-12 tracking-tight">
              Actualités
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos dernières actualités, nouveautés et évolutions dans le secteur du transport de marchandises
            </p>
          </div>

          {/* Grid Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/blog/1" className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Truck className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">Transport</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                    Certification EcoVadis : Une performance en 2025 pour les différents business unit de FKExpress Group
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    FKExpress Group a obtenu une nouvelle certification EcoVadis, récompensant nos efforts...
                  </p>
                  <div className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    15 JANVIER
                  </div>
                </div>
              </div>
            </a>

            <a href="/blog/2" className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">Certification</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                    Alternance : La campagne 2025 est lancée !
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    Accompagnement des jeunes vers nos domaines d'activité...
                  </p>
                  <div className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    12 JANVIER
                  </div>
                </div>
              </div>
            </a>

            <a href="/blog/3" className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">International</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                    FKExpress Group se dote de licences de courrier de 200 kg à la hauteur de son ambition
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    Une nouvelle étape franchie pour notre référence de transport et de logistique...
                  </p>
                  <div className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    08 JANVIER
                  </div>
                </div>
              </div>
            </a>

            <a href="/blog/4" className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">Innovation</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                    Depuis le 1er avril 2025, l'EPIC 2 27311002 - Transport routier et ferroviaire
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    Depuis le 1er avril 2025, FK EXPRESS Group applique le nouveau cadre réglementaire...
                  </p>
                  <div className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    01 AVRIL
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Voir toutes les actualités */}
          <div className="text-center mt-16">
            <a href="/blog" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto">
              Voir toutes nos actualités
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
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
                Entreprise de transport de marchandises basée à Gagny (93). 
                Licence transport + location véhicules industriels. Flotte de 45+ véhicules.
              </p>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">FK EXPRESS</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">11 BIS AVENUE DE DIJON</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">93220 GAGNY, France</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Contact</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">01 85 78 43 53</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">contact@fkexpress.pro</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Informations légales</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">SIRET: 52188652300047</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">TVA: FR41521886523</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Transport */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Services</h3>
              <div className="space-y-3">
                <a href="#services" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Transport National</a>
                <a href="#services" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Fret Express IDF</a>
                <a href="#services" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Location Véhicules</a>
                <a href="#services" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Suivi GPS</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <a href="tel:0185784353" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">01 85 78 43 53</a>
                <a href="mailto:contact@fkexpress.pro" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">contact@fkexpress.pro</a>
                <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Devis Gratuit</a>
                <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Support 24/7</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 FK EXPRESS - SIRET: 52188652300047 | Transport de Marchandises
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Conditions générales</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Assurances</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
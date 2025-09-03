'use client'

import { ArrowRight, Check, Shield, Truck, Globe, Package, Zap, Building2, MapPin, Phone, Award, FileText, Gauge, Headphones, BadgeCheck, Timer, Users, TrendingUp, Rocket, ChevronRight, Star, Quote, Play, Mail, User, MessageSquare, CheckCircle, Clock, BarChart3 } from 'lucide-react'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import HeroAnimations from '../components/HeroAnimations'
import StructuredData from '../components/StructuredData'
import DevisPopup from '../components/DevisPopup'
import Logo from '../components/Logo'
import Link from 'next/link'

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const [stats, setStats] = useState({
    vehicles: 0,
    deliveries: 0,
    clients: 0,
    years: 0
  })

  useEffect(() => {
    // Animation des compteurs
    const animateValue = (key: string, start: number, end: number, duration: number) => {
      const range = end - start
      const increment = end > start ? 1 : -1
      const stepTime = Math.abs(Math.floor(duration / range))
      let current = start
      
      const timer = setInterval(() => {
        current += increment * Math.ceil(range / 100)
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          current = end
          clearInterval(timer)
        }
        setStats(prev => ({ ...prev, [key]: current }))
      }, stepTime)
    }

    // Démarrer les animations après le chargement
    setTimeout(() => {
      animateValue('vehicles', 0, 45, 2000)
      animateValue('deliveries', 0, 12000, 2000)
      animateValue('clients', 0, 350, 2000)
      animateValue('years', 0, 15, 2000)
    }, 500)
  }, [])

  const handleOpenPopup = (serviceId?: string) => {
    setSelectedService(serviceId || '')
    setIsPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 text-gray-900 dark:text-white">
      <StructuredData />
      
      {/* Header Moderne */}
      <Header currentPage="home" onOpenPopup={() => handleOpenPopup()} />

      {/* Hero Section avec Glass Effect */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <HeroAnimations />
        
        {/* Background avec effet moderne */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-primary-800/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100/90 dark:bg-primary-900/30 backdrop-blur-sm text-primary-700 dark:text-primary-300 mb-8 animate-pulse">
            <Rocket className="w-4 h-4 mr-2" />
            <span className="font-semibold">Leader du Transport en Île-de-France</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Votre Partenaire
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Transport & Logistique
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Solutions de transport professionnelles avec une flotte moderne de 45+ véhicules. 
            Service 24/7, suivi GPS temps réel et expertise logistique professionnelle.
          </p>
          
          {/* CTA avec Glass Effect */}
          <div className="flex justify-center mb-20">
            <button 
              onClick={() => handleOpenPopup()}
              className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                <FileText className="mr-3 h-5 w-5" />
                Obtenir un Devis
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Stats avec Glass Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 hover:scale-105 transition-transform">
              <Truck className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-900 dark:text-white">{stats.vehicles}+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Véhicules</div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 hover:scale-105 transition-transform">
              <Package className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-900 dark:text-white">{stats.deliveries}+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Livraisons/An</div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 hover:scale-105 transition-transform">
              <Users className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-900 dark:text-white">{stats.clients}+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Clients Actifs</div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 hover:scale-105 transition-transform">
              <Award className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-900 dark:text-white">{stats.years}+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Ans d'Expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services Détaillés */}
      <section id="services" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/50 dark:via-primary-900/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Solutions Transport Complètes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins logistiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div>
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Transport National</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Livraison dans toute la France avec suivi GPS en temps réel. Délais garantis et service premium.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Suivi GPS 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Assurance complète</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Délais garantis</span>
                  </li>
                </ul>
                <Link 
                  href="/services/transport-national"
                  className="inline-flex items-center text-gray-900 dark:text-white font-semibold hover:text-red-600 group-hover:translate-x-2 transition-all"
                >
                  En savoir plus <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div>
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Express Île-de-France</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Service express pour la région parisienne. Livraison en 2h chrono avec service d'urgence 24/7.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Livraison 2H</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Service 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Urgences disponibles</span>
                  </li>
                </ul>
                <Link 
                  href="/services/express-idf"
                  className="inline-flex items-center text-gray-900 dark:text-white font-semibold hover:text-red-600 group-hover:translate-x-2 transition-all"
                >
                  En savoir plus <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div>
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Location Véhicules</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Flotte de 45+ véhicules du 3.5T au 44T. Location avec ou sans chauffeur, courte ou longue durée.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">45+ véhicules</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Avec/Sans chauffeur</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Tarifs flexibles</span>
                  </li>
                </ul>
                <Link 
                  href="/services/location-vehicules"
                  className="inline-flex items-center text-gray-900 dark:text-white font-semibold hover:text-red-600 group-hover:translate-x-2 transition-all"
                >
                  En savoir plus <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div>
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">International</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Import/Export vers l'Europe. Gestion douanière complète et partenaires certifiés.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Toute l'Europe</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Douanes incluses</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Documents CMR</span>
                  </li>
                </ul>
                <Link 
                  href="/services/transport-international"
                  className="inline-flex items-center text-gray-900 dark:text-white font-semibold hover:text-red-600 group-hover:translate-x-2 transition-all"
                >
                  En savoir plus <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div>
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Stockage Sécurisé</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Entrepôts sécurisés avec surveillance 24/7. Gestion des stocks et préparation de commandes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Surveillance 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Gestion stocks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Préparation commandes</span>
                  </li>
                </ul>
                <Link 
                  href="/services/stockage-securise"
                  className="inline-flex items-center text-gray-900 dark:text-white font-semibold hover:text-red-600 group-hover:translate-x-2 transition-all"
                >
                  En savoir plus <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div>
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Gauge className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Suivi Temps Réel</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Tracking GPS sur toute la flotte. Notifications automatiques et rapports détaillés.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">GPS temps réel</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Notifications SMS</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Rapports mensuels</span>
                  </li>
                </ul>
                <Link 
                  href="/services/depannage-express"
                  className="inline-flex items-center text-gray-900 dark:text-white font-semibold hover:text-red-600 group-hover:translate-x-2 transition-all"
                >
                  En savoir plus <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus de Travail */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Notre Processus</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Simple, Rapide, Efficace
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Un processus optimisé pour une livraison sans stress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Ligne de connexion */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
            
            {/* Étape 1 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg relative z-10">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Demande de Devis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Remplissez notre formulaire en ligne ou appelez-nous directement
              </p>
            </div>

            {/* Étape 2 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg relative z-10">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Confirmation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Validation du devis et planification de la livraison
              </p>
            </div>

            {/* Étape 3 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg relative z-10">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Transport</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Prise en charge et transport avec suivi GPS en temps réel
              </p>
            </div>

            {/* Étape 4 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg relative z-10">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Livraison</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Livraison sécurisée avec preuve de réception
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Clients */}
      <section id="clients" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-50/50 dark:from-primary-900/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Ils nous font confiance</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Nos Clients Prestigieux
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Des entreprises leaders qui comptent sur notre expertise
            </p>
          </div>

          {/* Logos clients */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center h-24 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <img 
                src="/element/Laposte.png" 
                alt="La Poste"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center h-24 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <img 
                src="/element/amazon.png" 
                alt="Amazon"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center h-24 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <img 
                src="/element/dhl.png" 
                alt="DHL"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center h-24 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <img 
                src="/element/carrefour.png" 
                alt="Carrefour"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center h-24 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <img 
                src="/element/man.png" 
                alt="MAN"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center h-24 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <img 
                src="/element/colissimo.png" 
                alt="Colissimo"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Section Présentation de l'entreprise */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                FK EXPRESS : Votre Partenaire Logistique de Confiance
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Depuis plus de 15 ans, FK EXPRESS s'impose comme un acteur majeur du transport et de la logistique 
                en Île-de-France et sur l'ensemble du territoire français. Notre expertise reconnue et notre flotte 
                moderne de 45+ véhicules nous permettent de répondre à tous vos besoins de transport.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">350+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clients actifs</div>
                </div>
                <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Service client</div>
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <img 
                src="/element/home_page.jpg" 
                alt="FK EXPRESS - Transport et Logistique Professionnel"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Devis */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Réponse garantie sous 24h
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Prêt à Démarrer Votre <span className="text-red-600">Projet</span> ?
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Obtenez un devis personnalisé en quelques clics. Notre équipe d'experts analyse vos besoins 
            et vous propose la meilleure solution logistique adaptée à votre activité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => handleOpenPopup()}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="relative flex items-center justify-center">
                <FileText className="mr-3 h-5 w-5" />
                Demander un Devis
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <a 
              href="tel:0185784353" 
              className="group px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl font-semibold text-lg transition-all hover:border-red-600 hover:text-red-600 dark:hover:border-red-500 dark:hover:text-red-500"
            >
              <span className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                01 85 78 43 53
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3 p-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Devis Gratuit</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Sans engagement</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Réponse Rapide</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Sous 24 heures</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Experts Dédiés</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Équipe spécialisée</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer moderne */}
      <footer className="bg-gray-900 dark:bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Logo className="h-10 w-auto text-white" width={120} height={40} />
                <span className="text-2xl font-bold">FKExpress</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Leader du transport de marchandises en Île-de-France. 
                Flotte moderne, service 24/7 et expertise reconnue.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Transport National</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Express Île-de-France</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Location Véhicules</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">International</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Stockage</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <strong className="text-white">FK EXPRESS</strong><br />
                  427 Bis route Conflans<br />
                  95220 Herblay sur Seine
                </li>
                <li>
                  <a href="tel:0185784353" className="text-gray-400 hover:text-white transition-colors">
                    01 85 78 43 53
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@fkexpress.pro" className="text-gray-400 hover:text-white transition-colors">
                    contact@fkexpress.pro
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 FK EXPRESS - SIRET: 52188652300047 | TVA: FR41521886523
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Devis */}
      <DevisPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        selectedService={selectedService}
      />
    </div>
  )
}

// Composant Send pour le formulaire
function Send(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  )
}
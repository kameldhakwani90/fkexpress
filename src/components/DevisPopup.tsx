'use client'

import { Truck, Zap, Package, Globe, Shield, Wrench, X, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Notification from './Notification'
import TurnstileWidget from './TurnstileWidget'

interface DevisPopupProps {
  isOpen: boolean
  onClose: () => void
  selectedService?: string
}

export default function DevisPopup({ isOpen, onClose, selectedService }: DevisPopupProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [serviceType, setServiceType] = useState(selectedService || '')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success' as 'success' | 'error'
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: '',
    pickup_address: '',
    delivery_address: '',
    pickup_date: '',
    urgent: false
  })
  const [turnstileToken, setTurnstileToken] = useState('')

  const services = [
    {
      id: 'transport-national',
      title: 'Transport National',
      icon: Truck,
      description: 'Livraisons dans toute la France'
    },
    {
      id: 'express-idf',
      title: 'Express Île-de-France',
      icon: Zap,
      description: 'Livraison 2h chrono'
    },
    {
      id: 'location-vehicules',
      title: 'Location Véhicules',
      icon: Package,
      description: 'Flotte 45+ véhicules'
    },
    {
      id: 'transport-international',
      title: 'Transport International',
      icon: Globe,
      description: 'Europe et Maghreb'
    },
    {
      id: 'stockage-securise',
      title: 'Stockage Sécurisé',
      icon: Shield,
      description: 'Entrepôt 5000m²'
    },
    {
      id: 'depannage-express',
      title: 'Dépannage Express',
      icon: Wrench,
      description: 'Intervention urgente'
    }
  ]

  const handleServiceSelect = (service: string) => {
    setServiceType(service)
    setCurrentStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'devis',
          turnstileToken,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service_name: services.find(s => s.id === serviceType)?.title,
          pickup_address: formData.pickup_address,
          delivery_address: formData.delivery_address,
          pickup_date: formData.pickup_date,
          description: formData.description,
          urgent: formData.urgent ? 'Oui' : 'Non'
        })
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setNotification({
          isVisible: true,
          message: 'Votre demande de devis a été envoyée avec succès ! Nous vous répondrons sous 24h.',
          type: 'success'
        })
        onClose()
        setCurrentStep(1)
        setServiceType('')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          description: '',
          pickup_address: '',
          delivery_address: '',
          pickup_date: '',
          urgent: false
        })
      } else {
        throw new Error(data.message || 'Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
      setNotification({
        isVisible: true,
        message: 'Une erreur est survenue. Veuillez réessayer.',
        type: 'error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-t-3xl">
          <h2 className="text-3xl font-bold mb-2">Demande de Devis Gratuit</h2>
          <p className="text-red-100">Réponse garantie sous 24h • Sans engagement</p>
        </div>

        <div className="p-8">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Quel service vous intéresse ?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 dark:hover:border-red-800 border border-gray-200 dark:border-gray-700 transition-all text-left"
                    >
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 transition-colors">
                        {service.title}
                      </h4>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Form */}
          {currentStep === 2 && (
            <div>
              <div className="flex items-center mb-6">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-red-600 hover:text-red-700 font-medium mr-4"
                >
                  ← Retour
                </button>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    {services.find(s => s.id === serviceType)?.icon && (
                      <div className="w-4 h-4 text-white">
                        {(() => {
                          const IconComponent = services.find(s => s.id === serviceType)?.icon!
                          return <IconComponent className="w-4 h-4" />
                        })()}
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {services.find(s => s.id === serviceType)?.title}
                  </h3>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="jean@entreprise.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="01 23 45 67 89"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Adresse de départ
                    </label>
                    <input
                      type="text"
                      value={formData.pickup_address}
                      onChange={(e) => setFormData({...formData, pickup_address: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="123 Rue de la République, 75001 Paris"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Adresse de livraison
                    </label>
                    <input
                      type="text"
                      value={formData.delivery_address}
                      onChange={(e) => setFormData({...formData, delivery_address: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="456 Avenue de la Liberté, 69000 Lyon"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    value={formData.pickup_date}
                    onChange={(e) => setFormData({...formData, pickup_date: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Description de votre besoin *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                    placeholder="Décrivez précisément votre besoin, les marchandises à transporter, les contraintes..."
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={formData.urgent}
                    onChange={(e) => setFormData({...formData, urgent: e.target.checked})}
                    className="w-4 h-4 text-red-600 rounded focus:ring-red-500 border-gray-300"
                  />
                  <label htmlFor="urgent" className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    🚀 Demande urgente (traitement prioritaire)
                  </label>
                </div>

                {/* Turnstile Widget */}
                <TurnstileWidget
                  onSuccess={(token) => setTurnstileToken(token)}
                  onError={() => setTurnstileToken('')}
                  onExpire={() => setTurnstileToken('')}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-xl transition-all hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Envoyer ma demande de devis
                    </>
                  )}
                </button>

                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  <p className="flex items-center justify-center mb-2">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Réponse garantie sous 24h • Devis gratuit et sans engagement
                  </p>
                  <p>
                    Besoin d'une réponse immédiate ? 
                    <a href="tel:0185784353" className="text-red-600 hover:text-red-700 font-semibold ml-1">
                      01 85 78 43 53
                    </a>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Notification */}
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification({...notification, isVisible: false})}
      />
    </div>
  )
}
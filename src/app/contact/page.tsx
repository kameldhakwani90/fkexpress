'use client'

import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building, User } from 'lucide-react'
import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import DevisPopup from '../../components/DevisPopup'
import Notification from '../../components/Notification'
// Removed EmailJS import - using custom API now

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success' as 'success' | 'error'
  })

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
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
          type: 'contact',
          ...formData
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setNotification({
          isVisible: true,
          message: 'Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.',
          type: 'success'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setNotification({
        isVisible: true,
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.',
        type: 'error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <Header currentPage="contact" onOpenPopup={handleOpenPopup} />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contactez-<span className="text-red-200">Nous</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Réponse sous 24h
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Service client dédié
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Devis gratuit
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Informations de Contact */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Nos Coordonnées
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Phone className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                    <a href="tel:0185784353" className="text-red-600 hover:text-red-700 font-medium text-lg">
                      01 85 78 43 53
                    </a>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Service commercial : Lun-Ven 8h-18h<br />
                      Urgences : 24h/24 - 7j/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Mail className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a href="mailto:contact@fkexpress.pro" className="text-red-600 hover:text-red-700 font-medium text-lg">
                      contact@fkexpress.pro
                    </a>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Réponse garantie sous 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <MapPin className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-lg mb-2">
                      427 Bis route Conflans<br />
                      95220 Herblay sur Seine
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Accès facile depuis A86 et A4<br />
                      Parking visiteurs disponible
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Clock className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horaires</h3>
                    <div className="text-gray-700 dark:text-gray-300">
                      <p className="mb-1"><span className="font-medium">Bureau :</span> Lun-Ven 8h-18h</p>
                      <p className="mb-1"><span className="font-medium">Transport :</span> 24h/24 - 7j/7</p>
                      <p className="text-red-600 font-medium">Service d'urgence permanent</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations Entreprise */}
              <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Building className="w-6 h-6 mr-2 text-red-600" />
                  Informations Entreprise
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p><span className="font-medium">SIRET :</span> 52188652300047</p>
                  <p><span className="font-medium">TVA :</span> FR41521886523</p>
                  <p><span className="font-medium">Licence Transport :</span> Marchandises</p>
                  <p><span className="font-medium">Assurance :</span> Professionnelle complète</p>
                </div>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Envoyez-nous un Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                      Nom complet *
                    </label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="jean@entreprise.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                      Téléphone
                    </label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                      Entreprise
                    </label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                    Sujet *
                  </label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    placeholder="Objet de votre demande"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                    Message *
                  </label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  ></textarea>
                </div>

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
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
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
        selectedService="contact"
      />

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
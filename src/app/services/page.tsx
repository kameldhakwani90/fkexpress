import { Truck, Zap, Package, Globe, Shield, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services de Transport | FK EXPRESS - Transport Professionnel',
  description: 'Découvrez nos services de transport : National, Express Île-de-France, Location véhicules industriels, International. Flotte moderne 45+ véhicules.',
  keywords: 'services transport, transport national, express Île-de-France, location véhicules industriels, transport international, FK EXPRESS services',
}

export default function ServicesPage() {
  const services = [
    {
      id: 'transport-national',
      icon: Truck,
      title: 'Transport National',
      subtitle: 'Livraisons dans toute la France',
      description: 'Service de transport de marchandises couvrant l\'ensemble du territoire français avec notre flotte moderne et notre réseau de partenaires certifiés.',
      features: [
        'Couverture France entière',
        'Suivi GPS en temps réel',
        'Délais garantis',
        'Assurance marchandises',
        'Service client dédié',
        'Tarifs compétitifs'
      ],
      advantages: [
        {
          title: 'Réseau National',
          description: 'Plus de 15 ans d\'expérience dans le transport national avec un réseau de partenaires certifiés dans toute la France.'
        },
        {
          title: 'Flotte Moderne',
          description: 'Véhicules récents équipés de système GPS, température contrôlée et sécurité renforcée.'
        },
        {
          title: 'Flexibilité',
          description: 'Solutions adaptées à vos besoins : transport régulier, ponctuel, groupage ou affrètement complet.'
        }
      ],
      gradient: 'from-primary-600 to-primary-700',
      bgGradient: 'from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30'
    },
    {
      id: 'express-idf',
      icon: Zap,
      title: 'Express Île-de-France',
      subtitle: 'Livraison express 2h chrono',
      description: 'Service express dédié à la région Île-de-France avec intervention d\'urgence 24h/24 et 7j/7. Idéal pour vos livraisons critiques.',
      features: [
        'Livraison en 2h maximum',
        'Service 24h/24 - 7j/7',
        'Interventions d\'urgence',
        'Coursiers dédiés',
        'Confirmation de livraison',
        'Tarification transparente'
      ],
      advantages: [
        {
          title: 'Rapidité',
          description: 'Nos équipes dédiées garantissent une livraison en moins de 2 heures dans toute l\'Île-de-France.'
        },
        {
          title: 'Disponibilité',
          description: 'Service disponible 24h/24 et 7j/7 pour répondre à tous vos besoins d\'urgence.'
        },
        {
          title: 'Expertise Locale',
          description: 'Parfaite connaissance de la région parisienne pour optimiser les trajets et éviter les embouteillages.'
        }
      ],
      gradient: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30'
    },
    {
      id: 'location-vehicules',
      icon: Package,
      title: 'Location Véhicules Industriels',
      subtitle: 'Flotte de 45+ véhicules',
      description: 'Location de véhicules industriels du 3.5T au 44T avec ou sans chauffeur. Solution flexible pour tous vos besoins de transport.',
      features: [
        'Véhicules 3.5T à 44T',
        'Avec ou sans chauffeur',
        'Location courte/longue durée',
        'Maintenance incluse',
        'Assurance tous risques',
        'Disponibilité immédiate'
      ],
      advantages: [
        {
          title: 'Flotte Diversifiée',
          description: 'Plus de 45 véhicules de différentes capacités pour répondre à tous vos besoins de transport.'
        },
        {
          title: 'Maintenance Garantie',
          description: 'Tous nos véhicules sont régulièrement entretenus et contrôlés pour garantir sécurité et fiabilité.'
        },
        {
          title: 'Flexibilité Totale',
          description: 'Location adaptée à vos besoins : quelques heures, jours, semaines ou mois selon vos projets.'
        }
      ],
      gradient: 'from-green-600 to-green-700',
      bgGradient: 'from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30'
    },
    {
      id: 'transport-international',
      icon: Globe,
      title: 'Transport International',
      subtitle: 'Europe et Maghreb',
      description: 'Service de transport international vers l\'Europe et le Maghreb avec gestion complète des formalités douanières.',
      features: [
        'Europe et Maghreb',
        'Formalités douanières',
        'Documentation complète',
        'Partenaires certifiés',
        'Suivi international',
        'Assurance export'
      ],
      advantages: [
        {
          title: 'Expertise Internationale',
          description: 'Maîtrise parfaite des réglementations et formalités douanières pour un transport sans encombre.'
        },
        {
          title: 'Réseau Partenaires',
          description: 'Partenaires de confiance dans toute l\'Europe et le Maghreb pour garantir la continuité de service.'
        },
        {
          title: 'Accompagnement',
          description: 'Prise en charge complète de votre transport : documentation, assurance, suivi jusqu\'à destination.'
        }
      ],
      gradient: 'from-purple-600 to-purple-700',
      bgGradient: 'from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30'
    },
    {
      id: 'stockage-securise',
      icon: Shield,
      title: 'Stockage Sécurisé',
      subtitle: 'Entrepôt 5000m²',
      description: 'Solutions de stockage sécurisé dans notre entrepôt moderne de 5000m² avec système de surveillance 24h/24.',
      features: [
        'Entrepôt 5000m²',
        'Surveillance 24h/24',
        'Accès contrôlé',
        'Gestion des stocks',
        'Préparation commandes',
        'Cross-docking'
      ],
      advantages: [
        {
          title: 'Sécurité Maximale',
          description: 'Entrepôt ultra-sécurisé avec système d\'alarme, vidéosurveillance et gardiennage 24h/24.'
        },
        {
          title: 'Flexibilité',
          description: 'Solutions de stockage adaptées : court terme, long terme, saisonnier selon vos besoins.'
        },
        {
          title: 'Services Intégrés',
          description: 'Gestion complète : réception, stockage, préparation de commandes et expédition.'
        }
      ],
      gradient: 'from-red-600 to-red-700',
      bgGradient: 'from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30'
    },
    {
      id: 'suivi-temps-reel',
      icon: Clock,
      title: 'Suivi Temps Réel',
      subtitle: 'Visibilité totale',
      description: 'Plateforme de suivi en temps réel de vos livraisons avec notifications automatiques et historique complet.',
      features: [
        'Géolocalisation GPS',
        'Notifications automatiques',
        'Historique détaillé',
        'Interface web/mobile',
        'Rapports personnalisés',
        'API d\'intégration'
      ],
      advantages: [
        {
          title: 'Transparence',
          description: 'Visibilité totale sur l\'état et la position de vos marchandises en temps réel.'
        },
        {
          title: 'Proactivité',
          description: 'Alertes automatiques en cas de retard ou d\'incident pour une gestion proactive.'
        },
        {
          title: 'Intégration',
          description: 'API disponible pour intégrer notre système de suivi dans vos outils de gestion.'
        }
      ],
      gradient: 'from-orange-600 to-orange-700',
      bgGradient: 'from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">FK EXPRESS</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Services de Transport</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-primary-600 transition-colors">Accueil</a>
              <a href="/services" className="text-primary-600 font-semibold">Services</a>
              <a href="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos <span className="text-primary-200">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Solutions complètes de transport et logistique adaptées à tous vos besoins professionnels
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Flotte 45+ véhicules
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Service 24h/24
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Suivi GPS temps réel
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              15 ans d'expérience
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Contenu */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                  
                  <p className="text-xl text-primary-600 dark:text-primary-400 mb-6 font-semibold">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Caractéristiques */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Caractéristiques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bouton CTA */}
                  <a 
                    href="#contact"
                    className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1`}
                  >
                    Demander un devis
                    <Phone className="ml-2 w-5 h-5" />
                  </a>
                </div>

                {/* Card avec avantages */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden`}>
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.bgGradient} rounded-full -mr-32 -mt-32`}></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        Nos Atouts Professionnels
                      </h3>
                      
                      <div className="space-y-6">
                        {service.advantages.map((advantage, advantageIndex) => (
                          <div key={advantageIndex} className="border-l-4 border-primary-500 pl-6">
                            <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                              {advantage.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {advantage.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Stats rapides */}
                      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                              {index === 0 ? '99%' : index === 1 ? '2h' : index === 2 ? '45+' : index === 3 ? '15+' : index === 4 ? '5000m²' : '24/7'}
                            </div>
                            <div className="text-sm text-gray-500">
                              {index === 0 ? 'Livraisons réussies' : index === 1 ? 'Délai moyen' : index === 2 ? 'Véhicules' : index === 3 ? 'Pays desservis' : index === 4 ? 'Espace stockage' : 'Disponibilité'}
                            </div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                              {index === 0 ? '15ans' : index === 1 ? '24/7' : index === 2 ? '3.5-44T' : index === 3 ? '100%' : index === 4 ? '24/7' : 'GPS'}
                            </div>
                            <div className="text-sm text-gray-500">
                              {index === 0 ? 'Expérience' : index === 1 ? 'Service' : index === 2 ? 'Capacités' : index === 3 ? 'Formalités' : index === 4 ? 'Surveillance' : 'Suivi'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Besoin de nos services ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Contactez nos experts pour un devis personnalisé
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-600 dark:text-gray-300">01 85 78 43 53</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
              <Mail className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">contact@fkexpress.pro</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
              <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600 dark:text-gray-300">11 BIS AVENUE DE DIJON<br />GAGNY (93)</p>
            </div>
          </div>

          <a 
            href="/#devis"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Demander un devis gratuit
            <Phone className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
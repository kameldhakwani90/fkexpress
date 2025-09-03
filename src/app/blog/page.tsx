'use client'

import { ArrowRight, Calendar, User, Clock, Truck, Award, Globe, Package, Shield } from 'lucide-react'
import Link from 'next/link'
import Logo from '../../components/Logo'
import ThemeToggle from '../../components/ThemeToggle'

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Certification EcoVadis : Une performance en 2025 pour les différents business unit de FKExpress Group",
      excerpt: "FKExpress Group a obtenu une nouvelle certification EcoVadis, récompensant nos efforts en matière de développement durable et de responsabilité sociale d'entreprise.",
      content: `FKExpress Group franchit une nouvelle étape importante dans sa démarche de développement durable en obtenant la certification EcoVadis pour l'année 2025.

Cette certification, reconnue mondialement, évalue les performances des entreprises dans quatre domaines clés : l'environnement, le social et les droits de l'homme, l'éthique et les achats responsables.

## Nos engagements environnementaux

Notre flotte de 45+ véhicules respecte les normes Euro 6 les plus strictes, réduisant significativement nos émissions de CO2. Nous investissons également dans des technologies de pointe pour optimiser nos trajets et réduire notre empreinte carbone.

## Impact social et responsabilité

FKExpress s'engage auprès de ses collaborateurs et de la communauté locale de Gagny (93). Nos programmes de formation continue et nos conditions de travail exemplaires contribuent à cette reconnaissance.

Cette certification renforce notre position de leader responsable dans le secteur du transport de marchandises en Île-de-France.`,
      author: "Direction FKExpress",
      date: "15 Janvier 2025",
      category: "Transport",
      icon: Truck,
      color: "from-blue-500 to-blue-600",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Alternance : La campagne 2025 est lancée !",
      excerpt: "Accompagnement des jeunes vers nos domaines d'activité. FKExpress recrute de nouveaux talents en alternance pour renforcer ses équipes.",
      content: `FKExpress lance sa campagne de recrutement en alternance pour 2025, offrant de nombreuses opportunités aux jeunes talents souhaitant évoluer dans le secteur du transport et de la logistique.

## Nos offres d'alternance

Nous proposons des formations dans plusieurs domaines :
- Conduite poids lourd et transport de marchandises
- Gestion logistique et planification
- Maintenance et mécanique véhicules industriels
- Administration et gestion commerciale

## Accompagnement personnalisé

Chaque alternant bénéficie d'un tuteur expérimenté et d'un programme de formation adapté. Notre centre de formation partenaire assure un suivi pédagogique de qualité.

## Perspectives d'évolution

80% de nos alternants sont embauchés en CDI à l'issue de leur formation, témoignant de la qualité de notre programme et de notre engagement envers les jeunes talents.

Candidatez dès maintenant sur notre site ou contactez-nous au 01 85 78 43 53.`,
      author: "RH FKExpress",
      date: "12 Janvier 2025",
      category: "Certification",
      icon: Award,
      color: "from-green-500 to-green-600",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "FKExpress Group se dote de licences de courrier de 200 kg à la hauteur de son ambition",
      excerpt: "Une nouvelle étape franchie pour notre référence de transport et de logistique avec l'obtention de licences de transport de courrier jusqu'à 200kg.",
      content: `FKExpress Group renforce sa position sur le marché du transport express en obtenant les autorisations nécessaires pour le transport de courrier et colis jusqu'à 200kg.

## Extension de notre offre de services

Cette nouvelle licence nous permet d'élargir notre gamme de services et de répondre aux besoins croissants de nos clients en matière de livraison express et de transport de colis volumineux.

## Un marché en pleine expansion

Le secteur de la livraison express connaît une croissance exponentielle, notamment avec l'essor du e-commerce. Cette licence nous positionne comme un acteur majeur sur ce segment porteur.

## Investissements et modernisation

Pour accompagner cette évolution, nous investissons dans de nouveaux véhicules adaptés et formons nos équipes aux spécificités du transport express et de la manutention de colis sensibles.

## Zones de couverture étendues

Notre couverture s'étend désormais sur l'ensemble de l'Île-de-France avec des services express 2h et une couverture nationale en 24h/48h selon les destinations.`,
      author: "Direction Commerciale",
      date: "08 Janvier 2025",
      category: "International",
      icon: Globe,
      color: "from-primary-500 to-primary-600",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Depuis le 1er avril 2025, l'EPIC 2 27311002 - Transport routier et ferroviaire",
      excerpt: "Depuis le 1er avril 2025, FK EXPRESS Group applique le nouveau cadre réglementaire EPIC 2 pour le transport routier et ferroviaire.",
      content: `Conformément à la réglementation en vigueur depuis le 1er avril 2025, FKExpress Group a mis en œuvre les nouvelles dispositions EPIC 2 27311002 concernant le transport routier et ferroviaire.

## Qu'est-ce que l'EPIC 2 ?

L'EPIC 2 (Établissement Public à caractère Industriel et Commercial) définit le nouveau cadre réglementaire pour les entreprises de transport de marchandises, renforçant les exigences en matière de sécurité, de traçabilité et de qualité de service.

## Nos adaptations

FKExpress a anticipé ces changements en :
- Modernisant son système de traçabilité GPS
- Renforçant la formation de ses conducteurs
- Mettant à jour ses procédures de sécurité
- Optimisant sa documentation réglementaire

## Impact client

Ces nouvelles mesures garantissent à nos clients :
- Une traçabilité renforcée de leurs marchandises
- Des délais de livraison plus fiables
- Une sécurité accrue du transport
- Une conformité totale aux exigences légales

## Certification continue

Notre équipe qualité veille au respect permanent de ces nouvelles normes, avec des audits réguliers et une amélioration continue de nos processus.`,
      author: "Service Qualité",
      date: "01 Avril 2025",
      category: "Innovation",
      icon: Package,
      color: "from-orange-500 to-orange-600",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Nouvelle flotte Euro 6 : un investissement pour l'environnement",
      excerpt: "FKExpress renouvelle 20 véhicules de sa flotte avec des modèles Euro 6, réduisant de 40% les émissions polluantes sur nos trajets réguliers.",
      content: `Dans le cadre de notre engagement environnemental, FKExpress vient de finaliser le renouvellement de 20 véhicules de sa flotte avec des modèles répondant aux normes Euro 6 les plus strictes.

## Un investissement significatif

Cet investissement de 2,5 millions d'euros témoigne de notre engagement envers la transition écologique du secteur du transport de marchandises.

## Réduction des émissions

Les nouveaux véhicules permettent une réduction de :
- 40% des émissions de NOx
- 25% des émissions de CO2
- 60% des particules fines

## Technologies embarquées

Nos nouveaux véhicules sont équipés de :
- Systèmes de navigation optimisés pour réduire la consommation
- Capteurs de conduite éco-responsable
- Systèmes de télématique avancés

## Formation des conducteurs

Tous nos chauffeurs bénéficient d'une formation à l'éco-conduite, permettant d'optimiser davantage les performances environnementales de notre flotte.`,
      author: "Direction Technique",
      date: "28 Décembre 2024",
      category: "Transport",
      icon: Shield,
      color: "from-emerald-500 to-emerald-600",
      readTime: "4 min"
    },
    {
      id: 6,
      title: "Partenariat stratégique avec Amazon Logistics",
      excerpt: "FKExpress signe un contrat de partenariat avec Amazon Logistics pour assurer la livraison du dernier kilomètre en région parisienne.",
      content: `FKExpress annonce la signature d'un partenariat stratégique avec Amazon Logistics pour prendre en charge la livraison du dernier kilomètre sur la zone Île-de-France.

## Un partenariat d'envergure

Ce contrat prévoit la livraison de plus de 10 000 colis par mois dans un rayon de 50km autour de Paris, renforçant notre position sur le marché de la livraison express.

## Adaptation de nos services

Pour répondre aux exigences d'Amazon :
- Déploiement d'une flotte dédiée de 15 véhicules
- Formation spécialisée de 25 chauffeurs-livreurs
- Mise en place d'un système de tracking en temps réel
- Respect des créneaux de livraison stricts

## Impact sur notre développement

Ce partenariat représente :
- 25% de croissance de notre chiffre d'affaires
- Création de 20 emplois directs
- Renforcement de notre expertise logistique

## Engagement qualité

Nous nous engageons à maintenir notre standard de qualité habituel avec un taux de livraison réussie de 98% dès le premier passage.`,
      author: "Direction Commerciale",
      date: "15 Décembre 2024",
      category: "Partenariat",
      icon: Package,
      color: "from-purple-500 to-purple-600",
      readTime: "5 min"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Logo className="h-10 w-auto text-gray-900 dark:text-white" width={120} height={40} />
              </Link>
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">FKExpress</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">Transport & Logistique</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm">Accueil</Link>
              <Link href="/#services" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm">Services</Link>
              <Link href="/blog" className="text-primary-600 dark:text-primary-400 font-medium text-sm">Blog</Link>
              <Link href="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm">Contact</Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Blog */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
            Blog FKExpress
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Découvrez nos actualités, innovations et évolutions dans le secteur du transport de marchandises
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const IconComponent = article.icon
              return (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <article className="group cursor-pointer">
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className={`h-48 bg-gradient-to-br ${article.color} relative`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <IconComponent className="w-16 h-16 text-white" />
                        </div>
                        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-white text-sm font-medium">{article.category}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {article.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {article.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 FK EXPRESS - SIRET: 52188652300047 | Transport de Marchandises
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
'use client'

import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Logo from '../../../components/Logo'
import ThemeToggle from '../../../components/ThemeToggle'

export default function ArticlePage() {
  const params = useParams()
  const id = params.id as string

  // Simuler la récupération d'un article (plus tard remplacé par l'API)
  const getArticle = (articleId: string) => {
    const articles = [
      {
        id: 1,
        title: "Certification EcoVadis : Une performance en 2025 pour les différents business unit de FKExpress Group",
        content: `FKExpress Group franchit une nouvelle étape importante dans sa démarche de développement durable en obtenant la certification EcoVadis pour l'année 2025.

Cette certification, reconnue mondialement, évalue les performances des entreprises dans quatre domaines clés : l'environnement, le social et les droits de l'homme, l'éthique et les achats responsables.

## Nos engagements environnementaux

Notre flotte de 45+ véhicules respecte les normes Euro 6 les plus strictes, réduisant significativement nos émissions de CO2. Nous investissons également dans des technologies de pointe pour optimiser nos trajets et réduire notre empreinte carbone.

### Actions concrètes mises en place :

- **Renouvellement de la flotte** : 80% de nos véhicules respectent les normes Euro 6
- **Formation éco-conduite** : 100% de nos chauffeurs formés aux techniques d'éco-conduite
- **Optimisation des trajets** : Utilisation d'IA pour réduire de 15% les kilomètres parcourus
- **Carburants alternatifs** : Test de véhicules électriques et hybrides sur courtes distances

## Impact social et responsabilité

FKExpress s'engage auprès de ses collaborateurs et de la communauté locale de Gagny (93). Nos programmes de formation continue et nos conditions de travail exemplaires contribuent à cette reconnaissance.

### Initiatives sociales :

- **Formation continue** : 40h de formation par an et par employé
- **Bien-être au travail** : Programme de prévention des risques professionnels
- **Insertion professionnelle** : Partenariat avec Pôle Emploi pour l'insertion de demandeurs d'emploi longue durée
- **Soutien local** : Sponsoring d'associations sportives locales

## Éthique et gouvernance

La certification EcoVadis reconnaît également nos pratiques éthiques :

- **Transparence financière** : Publication annuelle de nos comptes
- **Relations fournisseurs** : Charte éthique signée par tous nos partenaires  
- **Lutte contre la corruption** : Formation obligatoire de tous les managers
- **Respect des délais de paiement** : Paiement fournisseurs sous 30 jours maximum

Cette certification renforce notre position de leader responsable dans le secteur du transport de marchandises en Île-de-France et nous engage pour l'avenir dans une démarche d'amélioration continue.

## Objectifs 2025-2027

Fort de cette certification, FKExpress se fixe de nouveaux objectifs ambitieux :

- **Neutralité carbone** d'ici 2027 pour tous nos trajets régionaux
- **100% de la flotte aux normes Euro 6** d'ici fin 2025  
- **Certification ISO 14001** environnementale en cours d'obtention
- **Partenariat avec des ONG** environnementales locales

Nous remercions tous nos collaborateurs et partenaires qui contribuent quotidiennement à cette démarche de développement durable.`,
        author: "Direction FKExpress",
        date: "15 Janvier 2025",
        category: "Transport",
        readTime: "8 min"
      },
      {
        id: 2,
        title: "Alternance : La campagne 2025 est lancée !",
        content: `FKExpress lance sa campagne de recrutement en alternance pour 2025, offrant de nombreuses opportunités aux jeunes talents souhaitant évoluer dans le secteur du transport et de la logistique.

## Nos offres d'alternance

Nous proposons des formations dans plusieurs domaines :

### Transport et logistique
- **Conducteur routier de marchandises** (CAP/BAC PRO)
- **Technicien en logistique d'entreposage** (BAC+2)  
- **Responsable de la chaîne logistique** (BAC+3)

### Mécanique et maintenance
- **Mécanicien véhicules industriels** (CAP/BAC PRO)
- **Technicien de maintenance industrielle** (BAC+2)
- **Responsable maintenance** (BAC+3)

### Administration et commerce
- **Assistant de gestion PME** (BAC+2)
- **Attaché commercial** (BAC+3)
- **Manager des unités commerciales** (BAC+3)

## Accompagnement personnalisé

Chaque alternant bénéficie d'un programme d'intégration complet :

### Premier mois - Découverte
- **Semaine d'intégration** avec visite complète de l'entreprise
- **Rencontre avec le tuteur** et définition des objectifs
- **Formation sécurité** obligatoire (CACES, premiers secours)
- **Découverte des différents métiers** de l'entreprise

### Suivi régulier
- **Points mensuels** avec le tuteur et le responsable formation
- **Évaluations trimestrielles** des compétences acquises
- **Participation aux réunions d'équipe** et aux projets transversaux
- **Accompagnement personnalisé** selon les besoins

## Partenaires formation

FKExpress travaille avec les meilleurs centres de formation :

- **AFTRAL** (leader de la formation transport-logistique)
- **Université Gustave Eiffel** (formations logistique BAC+3)
- **CFAI** Seine-et-Marne (formations techniques industrielles)
- **Lycées professionnels** locaux (CAP et BAC PRO)

## Perspectives d'évolution

### Statistiques de réussite
- **95% de réussite** aux examens pour nos alternants
- **80% d'embauche en CDI** à l'issue de la formation
- **100% des alternants** gardent contact avec FKExpress
- **Evolution rapide** : 50% obtiennent une promotion dans les 2 ans

### Témoignages d'anciens alternants

> "Mon alternance chez FKExpress m'a permis d'acquérir une expérience concrète tout en préparant mon BTS Logistique. Aujourd'hui responsable d'équipe, je recommande cette formation à tous les jeunes motivés !" - **Sarah M.**, Responsable logistique

> "Embauché en CDI dès la fin de mon CAP Conducteur routier, j'ai pu progresser rapidement grâce à la confiance accordée par FKExpress. L'entreprise investit vraiment dans ses jeunes talents." - **Kevin L.**, Conducteur senior

## Comment candidater ?

### Critères de sélection
- **Motivation** et projet professionnel clair
- **Niveau scolaire** adapté à la formation visée
- **Permis B** obligatoire (permis C financé par l'entreprise si besoin)
- **Casier judiciaire vierge** (secteur transport)

### Processus de recrutement
1. **Candidature en ligne** sur notre site web
2. **Pré-sélection** sur dossier sous 48h  
3. **Entretien individuel** avec RH et tuteur
4. **Essai pratique** d'une demi-journée
5. **Réponse définitive** sous 5 jours

### Contact
- **Email** : alternance@fkexpress.pro
- **Téléphone** : 01 85 78 43 53 (poste 24)
- **Adresse** : 11 BIS AVENUE DE DIJON, 93220 GAGNY

**Candidatez avant le 15 février 2025** - Les entretiens débutent dès réception des candidatures !

Ne manquez pas cette opportunité de construire votre avenir professionnel avec un leader du transport de marchandises en Île-de-France.`,
        author: "RH FKExpress",
        date: "12 Janvier 2025", 
        category: "Certification",
        readTime: "6 min"
      }
      // Ajouter les autres articles...
    ]
    
    return articles.find(article => article.id.toString() === articleId)
  }

  const article = getArticle(id)

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 transition-colors">
            ← Retour au blog
          </Link>
        </div>
      </div>
    )
  }

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

      {/* Article Content */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
              {article.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime} de lecture
                </div>
              </div>
              <button className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Partager
              </button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {article.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
                if (paragraph.startsWith('> ')) {
                  return (
                    <blockquote key={index} className="border-l-4 border-primary-500 bg-primary-50 dark:bg-primary-900/20 p-6 my-8 italic">
                      <p className="text-gray-700 dark:text-gray-300 mb-0">
                        {paragraph.replace('> ', '')}
                      </p>
                    </blockquote>
                  )
                }
                if (paragraph.startsWith('- **') || paragraph.startsWith('1. **')) {
                  return (
                    <li key={index} className="mb-3">
                      <span dangerouslySetInnerHTML={{ 
                        __html: paragraph.replace(/- \*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/^\d+\. \*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }} />
                    </li>
                  )
                }
                if (paragraph.trim() === '') {
                  return <br key={index} />
                }
                return (
                  <p key={index} className="mb-6 text-lg leading-relaxed">
                    <span dangerouslySetInnerHTML={{ 
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    }} />
                  </p>
                )
              })}
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voir tous les articles
              </Link>
              
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Une question ? Contactez-nous
                </p>
                <a href="tel:0185784353" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                  01 85 78 43 53
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

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
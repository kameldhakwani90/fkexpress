'use client'

import { useState } from 'react'
import { Plus, Edit2, Trash2, Eye, Save, X, Calendar, User, Tag } from 'lucide-react'
import Logo from '../../components/Logo'

interface Article {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: string
  published: boolean
}

export default function AdminPage() {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "Certification EcoVadis : Une performance en 2025 pour les différents business unit de FKExpress Group",
      excerpt: "FKExpress Group a obtenu une nouvelle certification EcoVadis, récompensant nos efforts en matière de développement durable...",
      content: "Contenu complet de l'article...",
      author: "Direction FKExpress",
      date: "15 Janvier 2025",
      category: "Transport",
      readTime: "5 min",
      published: true
    },
    {
      id: 2,
      title: "Alternance : La campagne 2025 est lancée !",
      excerpt: "Accompagnement des jeunes vers nos domaines d'activité. FKExpress recrute de nouveaux talents...",
      content: "Contenu complet de l'article...",
      author: "RH FKExpress",
      date: "12 Janvier 2025",
      category: "Certification",
      readTime: "4 min",
      published: true
    }
  ])

  const [isEditing, setIsEditing] = useState(false)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    readTime: ''
  })

  const categories = ['Transport', 'Certification', 'International', 'Innovation', 'Partenariat', 'Environnement']

  const handleNewArticle = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: 'Transport',
      readTime: ''
    })
    setEditingArticle(null)
    setShowForm(true)
  }

  const handleEditArticle = (article: Article) => {
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      author: article.author,
      category: article.category,
      readTime: article.readTime
    })
    setEditingArticle(article)
    setShowForm(true)
  }

  const handleSaveArticle = () => {
    const now = new Date().toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })

    if (editingArticle) {
      // Update existing article
      setArticles(articles.map(article => 
        article.id === editingArticle.id 
          ? { ...article, ...formData, date: now }
          : article
      ))
    } else {
      // Create new article
      const newArticle: Article = {
        id: Math.max(...articles.map(a => a.id)) + 1,
        ...formData,
        date: now,
        published: false
      }
      setArticles([newArticle, ...articles])
    }

    setShowForm(false)
    setEditingArticle(null)
  }

  const handleDeleteArticle = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setArticles(articles.filter(article => article.id !== id))
    }
  }

  const togglePublished = (id: number) => {
    setArticles(articles.map(article =>
      article.id === id
        ? { ...article, published: !article.published }
        : article
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Admin */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo className="h-8 w-auto text-gray-900 dark:text-white" width={100} height={32} />
              <div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">Admin FKExpress</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">Gestion des articles</p>
              </div>
            </div>
            <button
              onClick={handleNewArticle}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nouvel Article
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {!showForm ? (
          <div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Gestion des Articles
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Gérez vos articles de blog et actualités
              </p>
            </div>

            {/* Articles List */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="p-6">
                <div className="space-y-4">
                  {articles.map((article) => (
                    <div key={article.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
                              {article.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              article.published 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                            }`}>
                              {article.published ? 'Publié' : 'Brouillon'}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center">
                              <User className="w-3 h-3 mr-1" />
                              {article.author}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {article.date}
                            </span>
                            <span className="flex items-center">
                              <Tag className="w-3 h-3 mr-1" />
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => togglePublished(article.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              article.published
                                ? 'text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30'
                                : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                            title={article.published ? 'Dépublier' : 'Publier'}
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleEditArticle(article)}
                            className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                            title="Modifier"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteArticle(article.id)}
                            className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Article Form */
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {editingArticle ? 'Modifier l\'article' : 'Nouvel article'}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Titre de l'article *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Titre de votre article..."
                />
              </div>

              {/* Meta Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Auteur *
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Direction FKExpress"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Catégorie *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Temps de lecture
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="5 min"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Résumé / Extrait *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Résumé court de votre article qui apparaîtra dans la liste..."
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contenu de l'article *
                </label>
                <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Utilisez ## pour les titres et **texte** pour le gras
                </div>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={15}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
                  placeholder="Écrivez votre article ici...

## Titre de section

Votre contenu avec **mots en gras**.

### Sous-titre

Plus de contenu..."
                />
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleSaveArticle}
                  disabled={!formData.title || !formData.excerpt || !formData.content || !formData.author}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Enregistrer
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
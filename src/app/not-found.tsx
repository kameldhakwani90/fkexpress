import Link from 'next/link'
import Logo from '../components/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-md w-full px-6 text-center">
        <div className="flex justify-center mb-8">
          <Logo className="h-12 w-auto text-red-600" width={150} height={50} />
        </div>
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Page introuvable
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/contact"
            className="border-2 border-gray-200 dark:border-gray-700 hover:border-red-600 text-gray-900 dark:text-white hover:text-red-600 px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  )
}
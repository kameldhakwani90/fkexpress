'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-md w-full px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Une erreur est survenue
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Nous sommes désolés, quelque chose s'est mal passé. Veuillez réessayer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="border-2 border-gray-200 dark:border-gray-700 hover:border-red-600 text-gray-900 dark:text-white hover:text-red-600 px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
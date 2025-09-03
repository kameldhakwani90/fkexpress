'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="max-w-md w-full px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Une erreur critique est survenue
            </h2>
            <p className="text-gray-600 mb-8">
              L'application a rencontré un problème. Veuillez rafraîchir la page.
            </p>
            <button
              onClick={reset}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
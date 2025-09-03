'use client'

import { useEffect } from 'react'
import { CheckCircle, X, AlertCircle } from 'lucide-react'

interface NotificationProps {
  message: string
  type: 'success' | 'error'
  isVisible: boolean
  onClose: () => void
}

export default function Notification({ message, type, isVisible, onClose }: NotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000) // Auto-close après 5 secondes
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div className={`
        flex items-center p-4 rounded-xl shadow-lg border backdrop-blur-sm
        ${type === 'success' 
          ? 'bg-green-50/95 border-green-200 text-green-800 dark:bg-green-900/95 dark:border-green-800 dark:text-green-100' 
          : 'bg-red-50/95 border-red-200 text-red-800 dark:bg-red-900/95 dark:border-red-800 dark:text-red-100'
        }
        max-w-md
      `}>
        <div className="flex items-center">
          {type === 'success' ? (
            <CheckCircle className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-3 text-red-600 dark:text-red-400" />
          )}
          
          <p className="text-sm font-medium flex-1">
            {message}
          </p>
          
          <button
            onClick={onClose}
            className={`
              ml-3 p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors
              ${type === 'success' 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
              }
            `}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
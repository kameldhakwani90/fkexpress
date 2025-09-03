'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  currentService?: string
  currentPage?: 'home' | 'contact' | 'services'
  onOpenPopup?: () => void
}

export default function Header({ currentService, currentPage, onOpenPopup }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { href: '/services/transport-national', label: 'Transport National', id: 'transport-national' },
    { href: '/services/express-idf', label: 'Express Île-de-France', id: 'express-idf' },
    { href: '/services/location-vehicules', label: 'Location Véhicules', id: 'location-vehicules' },
    { href: '/services/transport-international', label: 'Transport International', id: 'transport-international' },
    { href: '/services/stockage-securise', label: 'Stockage Sécurisé', id: 'stockage-securise' },
    { href: '/services/depannage-express', label: 'Dépannage Express', id: 'depannage-express' }
  ]

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo className="h-10 w-auto" width={40} height={40} />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">FK EXPRESS</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Transport & Logistique</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                currentPage === 'home' 
                  ? 'text-red-600 font-semibold' 
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Accueil
            </Link>
            <div className="relative group">
              <button 
                className={`transition-colors flex items-center ${
                  currentService || currentPage === 'services'
                    ? 'text-red-600 font-semibold' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                Services <ChevronRight className="ml-1 w-4 h-4 transform group-hover:rotate-90 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className={`block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 ${
                      currentService === service.id ? 'bg-red-50 text-red-600' : ''
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                currentPage === 'contact' 
                  ? 'text-red-600 font-semibold' 
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />
            {onOpenPopup && (
              <button 
                onClick={onOpenPopup}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-full transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                Devis Gratuit
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="block py-3 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className={`block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors ${
                        currentService === service.id ? 'text-red-600 font-semibold' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            
            <Link
              href="/contact"
              className="block py-3 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700 mt-3">
              <ThemeToggle />
              {onOpenPopup && (
                <button 
                  onClick={() => {
                    onOpenPopup()
                    setIsMenuOpen(false)
                  }}
                  className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full transition-all font-semibold shadow-lg"
                >
                  Devis Gratuit
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
'use client'

import { useEffect, useRef } from 'react'

export default function HeroAnimations() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !lightRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate percentage position
      const xPercent = (x / rect.width) * 100
      const yPercent = (y / rect.height) * 100

      // Move the red light effect
      lightRef.current.style.background = `
        radial-gradient(600px circle at ${xPercent}% ${yPercent}%, 
          rgba(220, 38, 38, 0.15) 0%, 
          rgba(220, 38, 38, 0.08) 25%,
          rgba(220, 38, 38, 0.04) 50%,
          transparent 70%
        )
      `

      // Add subtle shadow effect
      containerRef.current.style.boxShadow = `
        ${(xPercent - 50) / 10}px ${(yPercent - 50) / 10}px 40px rgba(220, 38, 38, 0.1)
      `
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden transition-all duration-300"
    >
      {/* Animated red light overlay */}
      <div
        ref={lightRef}
        className="absolute inset-0 pointer-events-none transition-all duration-200 ease-out"
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}
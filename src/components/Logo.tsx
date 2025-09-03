'use client'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export default function Logo({ className = "h-10 w-auto", width = 120, height = 40 }: LogoProps) {
  return (
    <img 
      src="/element/favicon.svg"
      alt="FK EXPRESS"
      width={width}
      height={height}
      className={className}
    />
  )
}
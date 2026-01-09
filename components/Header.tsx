'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? 'border-b border-space-surface bg-space/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-container px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-mono text-xl font-bold text-accent-blue">
            StudioComplex
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Services
            </a>
            <a
              href="#tech-stack"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Tech Stack
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-accent-blue px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-blue/90"
            >
              Get in Touch
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-accent-blue px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-blue/90 md:hidden"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  )
}

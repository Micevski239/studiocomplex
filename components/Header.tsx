'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { motion, useScroll, useSpring } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const t = useTranslations('header')
  const locale = useLocale()
  const pathname = usePathname()

  // Scroll progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const isHomePage = pathname === '/' || pathname === `/${locale}` || pathname === '/mk' || pathname === '/en'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section only on home page
      if (isHomePage) {
        const sections = ['about', 'portfolio', 'services', 'why-us', 'faq', 'contact']
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom > 100) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const getLocalizedPath = (path: string) => {
    if (locale === 'mk') return path
    return `/${locale}${path}`
  }

  // For anchor links: if on home page, just use #hash. If on subpage, navigate to home + hash
  const getAnchorHref = (hash: string) => {
    if (isHomePage) return `#${hash}`
    return `${getLocalizedPath('/')}#${hash}`
  }

  const navLinkClass = (section: string) => {
    const isActive = activeSection === section
    return `relative text-sm font-medium transition-colors ${
      isActive
        ? 'text-accent-blue'
        : 'text-text-secondary hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary'
    }`
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'border-b border-space-surface bg-space/95 backdrop-blur-sm dark:border-dark-space-surface dark:bg-dark-space/95'
          : 'bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-accent-blue"
        style={{ scaleX }}
      />

      <div className="mx-auto max-w-container px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href={getLocalizedPath('/')} className="font-mono text-xl font-bold text-accent-blue">
            StudioComplex
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <a href={getAnchorHref('about')} className={navLinkClass('about')}>
              {t('about')}
            </a>
            <a href={getAnchorHref('portfolio')} className={navLinkClass('portfolio')}>
              {t('portfolio')}
            </a>
            <a href={getAnchorHref('services')} className={navLinkClass('services')}>
              {t('services')}
            </a>
            <a href={getAnchorHref('why-us')} className={navLinkClass('why-us')}>
              {t('techStack')}
            </a>
            <Link
              href={getLocalizedPath('/projects')}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary"
            >
              {t('projects')}
            </Link>

            <div className="mx-2 h-4 w-px bg-space-surface dark:bg-dark-space-surface" />

            <LanguageSwitcher />
            <ThemeToggle />

            <a
              href={getAnchorHref('contact')}
              className="rounded-lg bg-accent-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-blue/90"
            >
              {t('contact')}
            </a>
          </nav>

          {/* Medium screens: just contact + toggles */}
          <div className="hidden items-center gap-4 md:flex lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={getAnchorHref('contact')}
              className="rounded-lg bg-accent-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-blue/90"
            >
              {t('contact')}
            </a>
          </div>

          {/* Mobile: just contact button */}
          <a
            href={getAnchorHref('contact')}
            className="rounded-lg bg-accent-blue px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            {t('contact')}
          </a>
        </div>
      </div>
    </header>
  )
}

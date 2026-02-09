'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { Locale } from '@/i18n/config'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchLocale('mk')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'mk'
            ? 'text-accent-blue'
            : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        MK
      </button>
      <span className="text-text-secondary">/</span>
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'text-accent-blue'
            : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        EN
      </button>
    </div>
  )
}

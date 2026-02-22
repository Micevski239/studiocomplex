'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-space dark:bg-dark-space">
      <div className="mx-auto max-w-container px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-space-surface pt-8 dark:border-dark-space-surface sm:flex-row">
          <div>
            <div className="mb-2 font-mono text-xl font-bold text-accent-blue">GoDevLab</div>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              {t('description')}
            </p>
          </div>

          <div className="flex gap-8 text-sm">
            <a
              href="mailto:godevlabagency@gmail.com"
              className="text-text-secondary transition-colors hover:text-accent-blue dark:text-dark-text-secondary"
            >
              Email
            </a>
            <a
              href="https://www.facebook.com/godevlab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent-blue dark:text-dark-text-secondary"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/godevlab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent-blue dark:text-dark-text-secondary"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/38978408779"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent-blue dark:text-dark-text-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-space-surface pt-6 text-center text-xs text-text-secondary dark:border-dark-space-surface dark:text-dark-text-secondary">
          <p>© 2026 GoDevLab. {t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}

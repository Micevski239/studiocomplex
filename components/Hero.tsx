'use client'

import { TypeAnimation } from 'react-type-animation'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative overflow-hidden border-b border-space-surface bg-space dark:border-dark-space-surface dark:bg-dark-space">
      <div className="mx-auto max-w-container px-6 py-24 sm:py-32 lg:py-40">
        <div className="relative z-10 text-center">
          {/* Typing Animation */}
          <h1 className="mb-6 whitespace-nowrap text-5xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary sm:text-6xl lg:text-7xl">
            <TypeAnimation
              sequence={[
                t('title1'),
                2000,
                t('title2'),
                2000,
                t('title3'),
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={false}
            />
          </h1>

          <div className="mx-auto max-w-3xl">
            <p className="mb-10 text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary sm:text-xl">
              {t('description')}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-accent-blue px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-accent-blue/90"
              >
                <span className="relative z-10">{t('startProject')}</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-space-surface bg-space-light px-8 py-4 font-semibold text-text-primary transition-all hover:border-accent-blue/50 hover:bg-space-surface dark:border-dark-space-surface dark:bg-dark-space-light dark:text-dark-text-primary dark:hover:bg-dark-space-surface"
              >
                {t('viewWork')}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary dark:text-dark-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-accent-blue">✓</span>
                {t('trustIndicators.support')}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-blue">✓</span>
                {t('trustIndicators.consultation')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 dark:bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] dark:opacity-20" />
    </section>
  )
}

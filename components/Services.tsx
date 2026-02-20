'use client'

import { useTranslations } from 'next-intl'
import { TiltCard } from '@/components/animations'

export default function Services() {
  const t = useTranslations('services')

  const services = [
    {
      name: t('webDev.name'),
      headline: t('webDev.headline'),
      description: t('webDev.description'),
      stat: t('webDev.stat'),
      capabilities: t.raw('webDev.capabilities') as string[],
    },
    {
      name: t('mobileDev.name'),
      headline: t('mobileDev.headline'),
      description: t('mobileDev.description'),
      stat: t('mobileDev.stat'),
      capabilities: t.raw('mobileDev.capabilities') as string[],
    },
    {
      name: t('uiux.name'),
      headline: t('uiux.headline'),
      description: t('uiux.description'),
      stat: t('uiux.stat'),
      capabilities: t.raw('uiux.capabilities') as string[],
    },
  ]

  return (
    <section id="services" className="border-b border-space-surface bg-space-light dark:border-dark-space-surface dark:bg-dark-space-light">
      <div className="mx-auto max-w-container px-6 py-24 lg:py-32">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary dark:text-dark-text-primary sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
            {t('description')}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <TiltCard
              key={index}
              className="group relative h-full rounded-2xl border border-space-surface bg-space p-8 transition-all hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space"
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
            >
              {/* Service name badge */}
              <div className="mb-4 inline-block rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-blue">
                {service.name}
              </div>

              {/* Benefit-focused headline */}
              <h3 className="mb-3 text-xl font-bold text-text-primary dark:text-dark-text-primary">
                {service.headline}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm text-text-secondary dark:text-dark-text-secondary">
                {service.description}
              </p>

              {/* Stat/proof point */}
              <div className="mb-6 rounded-lg border border-accent-blue/20 bg-accent-blue/5 p-3">
                <p className="text-sm font-medium text-accent-blue">
                  {service.stat}
                </p>
              </div>

              {/* Capabilities */}
              <div className="space-y-2">
                {service.capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-accent-blue">✓</span>
                    <span className="text-text-secondary dark:text-dark-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
            {t('customNote')}{' '}
            <a href="#contact" className="text-accent-blue hover:underline">
              {t('letsTalk')}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

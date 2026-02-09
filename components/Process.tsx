'use client'

import { useTranslations } from 'next-intl'

export default function Process() {
  const t = useTranslations('process')

  const steps = [
    {
      number: '01',
      title: t('steps.discovery.title'),
      duration: t('steps.discovery.duration'),
      description: t('steps.discovery.description'),
    },
    {
      number: '02',
      title: t('steps.proposal.title'),
      duration: t('steps.proposal.duration'),
      description: t('steps.proposal.description'),
    },
    {
      number: '03',
      title: t('steps.design.title'),
      duration: t('steps.design.duration'),
      description: t('steps.design.description'),
    },
    {
      number: '04',
      title: t('steps.development.title'),
      duration: t('steps.development.duration'),
      description: t('steps.development.description'),
    },
    {
      number: '05',
      title: t('steps.testing.title'),
      duration: t('steps.testing.duration'),
      description: t('steps.testing.description'),
    },
    {
      number: '06',
      title: t('steps.support.title'),
      duration: t('steps.support.duration'),
      description: t('steps.support.description'),
    },
  ]

  return (
    <section className="border-b border-space-surface bg-space dark:border-dark-space-surface dark:bg-dark-space">
      <div className="mx-auto max-w-container px-6 py-24 lg:py-32">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary dark:text-dark-text-primary sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
            {t('description')}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 hidden h-full w-px bg-space-surface dark:bg-dark-space-surface md:block" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-space-surface bg-space-light text-xl font-bold text-accent-blue dark:border-dark-space-surface dark:bg-dark-space-light">
                    {step.number}
                  </div>

                  {/* Step content */}
                  <div className="flex-grow rounded-2xl border border-space-surface bg-space-light p-6 transition-all hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space-light">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
                        {step.title}
                      </h3>
                      <span className="rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary dark:text-dark-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-text-secondary dark:text-dark-text-secondary">
            {t('cta.text')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-accent-blue/90"
          >
            {t('cta.button')}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

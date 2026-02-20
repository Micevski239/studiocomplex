'use client'

import { useTranslations } from 'next-intl'
import { AnimatedCounter } from '@/components/animations'

export default function WhyUs() {
  const t = useTranslations('whyUs')

  const benefits = [
    {
      title: t('benefits.onTime.title'),
      description: t('benefits.onTime.description'),
      stat: t('benefits.onTime.stat'),
    },
    {
      title: t('benefits.pricing.title'),
      description: t('benefits.pricing.description'),
      stat: t('benefits.pricing.stat'),
    },
    {
      title: t('benefits.support.title'),
      description: t('benefits.support.description'),
      stat: t('benefits.support.stat'),
    },
    {
      title: t('benefits.communication.title'),
      description: t('benefits.communication.description'),
      stat: t('benefits.communication.stat'),
    },
    {
      title: t('benefits.ownership.title'),
      description: t('benefits.ownership.description'),
      stat: t('benefits.ownership.stat'),
    },
    {
      title: t('benefits.scalable.title'),
      description: t('benefits.scalable.description'),
      stat: t('benefits.scalable.stat'),
    },
  ]

  const stats = [
    { value: t('stats.years.value'), label: t('stats.years.label') },
    { value: t('stats.projects.value'), label: t('stats.projects.label') },
    { value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label') },
    { value: t('stats.response.value'), label: t('stats.response.label') },
  ]

  const techStack = [
    { category: t('tech.frontend'), technologies: 'React, Next.js, TypeScript, Tailwind CSS' },
    { category: t('tech.backend'), technologies: 'Node.js, Express, Python, FastAPI' },
    { category: t('tech.mobile'), technologies: 'React Native, Expo' },
    { category: t('tech.database'), technologies: 'PostgreSQL, MongoDB, Supabase, Firebase' },
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

        {/* Trust Stats Bar with Animated Counters */}
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-space-surface bg-space-light p-6 transition-all duration-200 hover:border-accent-blue/50 hover:bg-space-surface dark:border-dark-space-surface dark:bg-dark-space-light dark:hover:bg-dark-space-surface"
            >
              <h3 className="mb-2 text-xl font-bold text-text-primary dark:text-dark-text-primary">
                {benefit.title}
              </h3>
              <p className="mb-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                {benefit.description}
              </p>
              <div className="inline-block rounded-full bg-accent-blue/10 px-3 py-1 text-sm font-semibold text-accent-blue">
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h3 className="mb-6 text-center text-lg font-semibold text-text-secondary dark:text-dark-text-secondary">
            {t('techTitle')}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-space-surface bg-space-light/50 p-4 text-center transition-all hover:border-accent-blue/30 dark:border-dark-space-surface dark:bg-dark-space-light/50"
              >
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-blue">
                  {item.category}
                </div>
                <div className="font-mono text-xs text-text-secondary dark:text-dark-text-secondary">
                  {item.technologies}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

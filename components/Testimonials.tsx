'use client'

import { useTranslations } from 'next-intl'

export default function Testimonials() {
  const t = useTranslations('testimonials')

  const testimonials = [
    {
      quote: t('items.0.quote'),
      author: t('items.0.author'),
      role: t('items.0.role'),
      company: t('items.0.company'),
      metric: t('items.0.metric'),
    },
    {
      quote: t('items.1.quote'),
      author: t('items.1.author'),
      role: t('items.1.role'),
      company: t('items.1.company'),
      metric: t('items.1.metric'),
    },
    {
      quote: t('items.2.quote'),
      author: t('items.2.author'),
      role: t('items.2.role'),
      company: t('items.2.company'),
      metric: t('items.2.metric'),
    },
  ]

  const clientLogos = [
    'TechCorp',
    'StartupXYZ',
    'InnovateCo',
    'GrowthLabs',
    'DataFlow',
    'CloudBase',
    'NextGen',
    'ScaleUp',
  ]

  return (
    <section className="border-b border-space-surface bg-space-light dark:border-dark-space-surface dark:bg-dark-space-light">
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

        {/* Testimonials Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-space-surface bg-space p-6 transition-all duration-200 hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space"
            >
              {/* Metric badge */}
              <div className="mb-4 inline-flex self-start rounded-full bg-accent-blue/10 px-3 py-1 text-sm font-semibold text-accent-blue">
                {testimonial.metric}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 flex-grow text-text-secondary dark:text-dark-text-secondary">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-space-surface pt-4 dark:border-dark-space-surface">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue/10 text-lg font-bold text-accent-blue">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary dark:text-dark-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By logos - simple static row */}
        <div className="mx-auto mt-16 max-w-4xl">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
            {t('trustedBy')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex h-12 min-w-[120px] items-center justify-center rounded-lg border border-space-surface bg-space px-6 font-mono text-sm text-text-secondary transition-all hover:border-accent-blue/50 hover:text-text-primary dark:border-dark-space-surface dark:bg-dark-space dark:text-dark-text-secondary dark:hover:text-dark-text-primary"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useTranslations } from 'next-intl'

export default function Testimonials() {
  const t = useTranslations('testimonials')

  const testimonials = [
    { quote: t('items.0.quote'), company: t('items.0.company') },
    { quote: t('items.1.quote'), company: t('items.1.company') },
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
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-space-surface bg-space p-6 dark:border-dark-space-surface dark:bg-dark-space"
            >
              {/* Quote */}
              <blockquote className="mb-6 flex-grow leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-space-surface pt-4 dark:border-dark-space-surface">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-blue/10 text-lg font-bold text-accent-blue">
                    {testimonial.company.charAt(0)}
                  </div>
                  <div className="font-semibold text-text-primary dark:text-dark-text-primary">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useTranslations } from 'next-intl'

export default function Awards() {
  const t = useTranslations('awards')

  const certifications = [
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      title: t('certifications.react.title'),
      issuer: t('certifications.react.issuer')
    },
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      title: t('certifications.aws.title'),
      issuer: t('certifications.aws.issuer')
    },
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      title: t('certifications.nextjs.title'),
      issuer: t('certifications.nextjs.issuer')
    }
  ]

  const partners = [
    { name: 'Vercel', badge: t('partners.vercel') },
    { name: 'Supabase', badge: t('partners.supabase') },
    { name: 'Stripe', badge: t('partners.stripe') }
  ]

  const awards = [
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>
      ),
      title: t('recognition.excellence.title'),
      year: '2024'
    },
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ),
      title: t('recognition.topRated.title'),
      year: '2023'
    }
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

        {/* Certifications */}
        <div className="mx-auto mb-16 grid max-w-4xl gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl border border-space-surface bg-space p-6 text-center transition-all hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space"
            >
              <div className="mb-4 text-accent-blue transition-transform group-hover:scale-110">
                {cert.icon}
              </div>
              <h3 className="mb-1 font-semibold text-text-primary dark:text-dark-text-primary">
                {cert.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>

        {/* Technology Partners */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
            {t('partnersTitle')}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-space-surface bg-space px-4 py-2 transition-all hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space"
              >
                <span className="font-mono text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                  {partner.name}
                </span>
                <span className="rounded-full bg-accent-blue/10 px-2 py-0.5 text-xs font-medium text-accent-blue">
                  {partner.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards/Recognition */}
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border border-space-surface bg-space px-5 py-3 transition-all hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space"
            >
              <div className="text-accent-blue">{award.icon}</div>
              <div>
                <p className="font-semibold text-text-primary dark:text-dark-text-primary">
                  {award.title}
                </p>
                <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                  {award.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

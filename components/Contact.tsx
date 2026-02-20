'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const t = useTranslations('contact')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Using Formspree - replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormState('success')
        form.reset()
        setTimeout(() => setFormState('idle'), 5000)
      } else {
        setFormState('error')
        setTimeout(() => setFormState('idle'), 5000)
      }
    } catch (error) {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 5000)
    }
  }

  return (
    <section className="border-b border-space-surface bg-space-light dark:border-dark-space-surface dark:bg-dark-space-light">
      <div className="mx-auto max-w-container px-6 py-24 lg:py-32">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary dark:text-dark-text-primary sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
            {t('description')}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-text-primary dark:text-dark-text-primary"
                >
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-space-surface bg-space px-4 py-3 text-text-primary transition-colors focus:border-accent-blue focus:outline-none dark:border-dark-space-surface dark:bg-dark-space dark:text-dark-text-primary"
                  placeholder={t('form.namePlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-text-primary dark:text-dark-text-primary"
                >
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-space-surface bg-space px-4 py-3 text-text-primary transition-colors focus:border-accent-blue focus:outline-none dark:border-dark-space-surface dark:bg-dark-space dark:text-dark-text-primary"
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text-primary dark:text-dark-text-primary"
                >
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-space-surface bg-space px-4 py-3 text-text-primary transition-colors focus:border-accent-blue focus:outline-none dark:border-dark-space-surface dark:bg-dark-space dark:text-dark-text-primary"
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full rounded-lg bg-accent-blue px-8 py-4 font-semibold text-white transition-all hover:bg-accent-blue/90 disabled:opacity-50"
              >
                {formState === 'submitting' ? t('form.sending') : t('form.send')}
              </button>

              {formState === 'success' && (
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
                  {t('form.success')}
                </div>
              )}

              {formState === 'error' && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                  {t('form.error')}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                {t('info.title')}
              </h3>
              <p className="text-text-secondary dark:text-dark-text-secondary">
                {t('info.description')}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-2 text-sm font-semibold text-text-secondary dark:text-dark-text-secondary">
                  {t('info.email')}
                </div>
                <a
                  href="mailto:godevlabagency@gmail.com"
                  className="text-lg text-accent-blue hover:underline"
                >
                  godevlabagency@gmail.com
                </a>
              </div>

              <div>
                <div className="mb-2 text-sm font-semibold text-text-secondary dark:text-dark-text-secondary">
                  {t('info.connect')}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/godevlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-space-surface bg-space px-4 py-2 text-sm font-medium text-text-primary transition-all hover:border-accent-blue/50 hover:bg-space-surface dark:border-dark-space-surface dark:bg-dark-space dark:text-dark-text-primary dark:hover:bg-dark-space-surface"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/godevlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-space-surface bg-space px-4 py-2 text-sm font-medium text-text-primary transition-all hover:border-accent-blue/50 hover:bg-space-surface dark:border-dark-space-surface dark:bg-dark-space dark:text-dark-text-primary dark:hover:bg-dark-space-surface"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://wa.me/YOUR_PHONE_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-space-surface bg-space px-4 py-2 text-sm font-medium text-text-primary transition-all hover:border-accent-blue/50 hover:bg-space-surface dark:border-dark-space-surface dark:bg-dark-space dark:text-dark-text-primary dark:hover:bg-dark-space-surface"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const t = useTranslations('faq')

  const questions = t.raw('questions') as { question: string; answer: string }[]

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

        <div className="mx-auto max-w-3xl space-y-4">
          {questions.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-space-surface bg-space transition-all dark:border-dark-space-surface dark:bg-dark-space"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-all hover:bg-space-surface dark:hover:bg-dark-space-surface"
              >
                <span className="pr-8 font-semibold text-text-primary dark:text-dark-text-primary">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 text-2xl text-accent-blue transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-space-surface bg-space-light px-6 py-4 dark:border-dark-space-surface dark:bg-dark-space-light">
                  <p className="leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-accent-blue/20 bg-accent-blue/5 p-6 text-center">
          <h3 className="mb-2 text-lg font-bold text-text-primary dark:text-dark-text-primary">
            {t('stillHaveQuestions.title')}
          </h3>
          <p className="mb-4 text-sm text-text-secondary dark:text-dark-text-secondary">
            {t('stillHaveQuestions.description')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-blue/90"
          >
            {t('stillHaveQuestions.button')}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'

export default function NotFound() {
  const t = useTranslations('notFound')
  const locale = useLocale()

  const getLocalizedPath = (path: string) => {
    if (locale === 'mk') return path
    return `/${locale}${path}`
  }

  return (
    <main className="min-h-screen bg-space dark:bg-dark-space">
      <Header />
      <div className="pt-16 pb-16 md:pb-0">
        <section className="flex min-h-[60vh] items-center justify-center">
          <div className="mx-auto max-w-container px-6 text-center">
            <div className="mb-6 text-8xl font-bold text-accent-blue">404</div>
            <h1 className="mb-4 text-3xl font-bold text-text-primary dark:text-dark-text-primary">
              {t('title')}
            </h1>
            <p className="mb-8 text-lg text-text-secondary dark:text-dark-text-secondary">
              {t('description')}
            </p>
            <Link
              href={getLocalizedPath('/')}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white transition-all hover:bg-accent-blue/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              {t('backHome')}
            </Link>
          </div>
        </section>
        <Footer />
      </div>
      <MobileNav />
    </main>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import Contact from '@/components/Contact'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects'

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const t = useTranslations('projects')
  const locale = useLocale()
  const project = getProjectBySlug(params.slug, locale)

  if (!project) {
    notFound()
  }

  const getLocalizedPath = (path: string) => {
    if (locale === 'mk') return path
    return `/${locale}${path}`
  }

  return (
    <main className="min-h-screen bg-space dark:bg-dark-space">
      <Header />
      <div className="pt-16 pb-16 md:pb-0">

        <section className="border-b border-space-surface dark:border-dark-space-surface">
          <div className="mx-auto max-w-container px-6 py-12">

            {/* Back Link */}
            <Link
              href={`${getLocalizedPath('/')}#portfolio`}
              className="mb-10 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-blue dark:text-dark-text-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              {t('backToProjects')}
            </Link>

            {/* Two-column layout */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* Left — text content */}
              <div className="flex flex-col">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent-blue/10 px-3 py-1 text-sm font-medium capitalize text-accent-blue">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="rounded-full bg-accent-cyan/10 px-3 py-1 text-sm font-medium text-accent-cyan">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="mb-4 text-3xl font-bold text-text-primary dark:text-dark-text-primary lg:text-4xl">
                  {project.title}
                </h1>

                <p className="mb-8 leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                  {project.fullDescription}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                    {t('features')}
                  </h2>
                  <div className="grid gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 rounded-full bg-accent-blue/10 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 text-accent-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm text-text-secondary dark:text-dark-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                    {t('technologies')}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="rounded-lg bg-accent-blue/10 px-3 py-1.5 font-mono text-sm font-medium text-accent-blue">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white transition-all hover:bg-accent-blue/90"
                    >
                      {t('liveWebsite')}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-space-surface bg-space-light px-6 py-3 font-semibold text-text-primary transition-all hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space-light dark:text-dark-text-primary"
                    >
                      {t('viewCode')}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Right — images */}
              <div className="flex flex-col gap-3">
                {/* Cover image — large */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                {/* Gallery — 2×2 grid */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {project.gallery.slice(0, 4).map((image, index) => (
                      <div key={index} className="relative aspect-video overflow-hidden rounded-xl">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(min-width: 1024px) 25vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </div>
      <MobileNav />
    </main>
  )
}

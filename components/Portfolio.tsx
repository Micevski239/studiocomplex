'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { getFeaturedProjects } from '@/data/projects'

export default function Portfolio() {
  const t = useTranslations('portfolio')
  const locale = useLocale()
  const featuredProjects = getFeaturedProjects(locale)

  const getLocalizedPath = (path: string) => {
    if (locale === 'mk') return path
    return `/${locale}${path}`
  }

  return (
    <section className="border-b border-space-surface bg-space dark:border-dark-space-surface dark:bg-dark-space">
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
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={getLocalizedPath(`/projects/${project.slug}`)}>
              <div className="group relative h-full rounded-2xl border border-space-surface bg-space-light p-6 transition-all duration-200 hover:scale-[1.02] hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space-light">
                {/* Project Image */}
                <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Metric badge */}
                {project.metrics && (
                  <div className="mb-3 inline-flex rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue">
                    {project.metrics}
                  </div>
                )}

                {/* Client */}
                {project.clientName && (
                  <div className="mb-2 text-xs font-medium uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                    {project.clientName}
                  </div>
                )}

                {/* Project Info */}
                <h3 className="mb-2 text-xl font-bold text-text-primary dark:text-dark-text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-text-secondary dark:text-dark-text-secondary">
                  {project.shortDescription}
                </p>

                {/* Testimonial */}
                {project.testimonial && (
                  <div className="mb-4 border-l-2 border-accent-blue/30 pl-3">
                    <p className="text-xs italic text-text-secondary dark:text-dark-text-secondary">
                      &ldquo;{project.testimonial}&rdquo;
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-accent-blue/10 px-2 py-1 font-mono text-xs text-accent-blue"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded-md bg-space-surface px-2 py-1 font-mono text-xs text-text-secondary dark:bg-dark-space-surface dark:text-dark-text-secondary">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 border-t border-space-surface pt-4 dark:border-dark-space-surface">
                  {project.liveUrl && (
                    <span className="flex-1 rounded-lg bg-accent-blue/10 py-2 text-center text-sm font-semibold text-accent-blue transition-all group-hover:bg-accent-blue/20">
                      {t('liveDemo')}
                    </span>
                  )}
                  {project.githubUrl && (
                    <span className="flex-1 rounded-lg border border-space-surface py-2 text-center text-sm font-semibold text-text-primary transition-all group-hover:border-accent-blue/50 dark:border-dark-space-surface dark:text-dark-text-primary">
                      {t('github')}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12 text-center">
          <Link
            href={getLocalizedPath('/projects')}
            className="inline-flex items-center gap-2 text-accent-blue transition-colors hover:underline"
          >
            {t('viewAll')}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

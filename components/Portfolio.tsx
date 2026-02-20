'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { TiltCard } from '@/components/animations'
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
            <TiltCard
              className="group relative flex h-full flex-col rounded-2xl border border-space-surface bg-space-light p-6 transition-all hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space-light"
              scale={1.03}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
            >

              {/* Project Image - fixed ratio */}
              <div className="relative mb-6 aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              {/* Category badge - fixed height */}
              <div className="mb-3 flex h-6 items-center gap-2">
                <span className="rounded-full bg-accent-blue/10 px-3 py-0.5 text-xs font-medium capitalize text-accent-blue">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="rounded-full bg-accent-cyan/10 px-3 py-0.5 text-xs font-medium text-accent-cyan">
                    Featured
                  </span>
                )}
              </div>

              {/* Title - fixed 1 line */}
              <h3 className="mb-2 line-clamp-1 text-xl font-bold text-text-primary dark:text-dark-text-primary">
                {project.title}
              </h3>

              {/* Description - fixed 3 lines */}
              <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                {project.shortDescription}
              </p>

              {/* Technologies - fixed 1 row */}
              <div className="mb-4 flex h-7 flex-shrink-0 items-center gap-2 overflow-hidden">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap rounded-md bg-accent-blue/10 px-2 py-1 font-mono text-xs text-accent-blue"
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

              {/* Links - pinned to bottom */}
              <div className="mt-auto flex gap-3 border-t border-space-surface pt-4 dark:border-dark-space-surface">
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
            </TiltCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

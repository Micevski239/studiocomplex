'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { TiltCard } from '@/components/animations'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const locale = useLocale()
  const t = useTranslations('portfolio')

  const getLocalizedPath = (path: string) => {
    if (locale === 'mk') return path
    return `/${locale}${path}`
  }

  return (
    <Link href={getLocalizedPath(`/projects/${project.slug}`)}>
      <TiltCard
        className="group relative h-full rounded-2xl border border-space-surface bg-space-light p-6 transition-all hover:border-accent-blue/50 dark:border-dark-space-surface dark:bg-dark-space-light"
        scale={1.03}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
      >
        {/* Project Image */}
        <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20">
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Project Info */}
        <h3 className="mb-2 text-xl font-bold text-text-primary dark:text-dark-text-primary">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-text-secondary dark:text-dark-text-secondary">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded-md bg-accent-blue/10 px-2 py-1 font-mono text-xs text-accent-blue"
            >
              {tech}
            </span>
          ))}
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
      </TiltCard>
    </Link>
  )
}

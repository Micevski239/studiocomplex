import { useTranslations, useLocale } from 'next-intl'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import ProjectCard from '@/components/ProjectCard'
import { getAllProjects } from '@/data/projects'

export default function ProjectsPage() {
  const t = useTranslations('projects')
  const locale = useLocale()
  const localizedProjects = getAllProjects(locale)

  return (
    <main className="min-h-screen bg-space dark:bg-dark-space">
      <Header />
      <div className="pt-16 pb-16 md:pb-0">
        <section className="border-b border-space-surface dark:border-dark-space-surface">
          <div className="mx-auto max-w-container px-6 py-24 lg:py-32">
            {/* Header */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold text-text-primary dark:text-dark-text-primary sm:text-4xl lg:text-5xl">
                {t('pageTitle')}
              </h1>
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
                {t('pageDescription')}
              </p>
            </div>

            {/* Projects Grid */}
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {localizedProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <MobileNav />
    </main>
  )
}

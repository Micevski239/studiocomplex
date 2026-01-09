'use client'

import { motion } from 'framer-motion'
import { TiltCard } from '@/components/animations'
import { Parallax } from 'react-scroll-parallax'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Mobile App',
      description:
        'Full-featured shopping app with cart management, payment integration, and order tracking. Built for iOS and Android platforms.',
      image: '/projects/ecommerce.png',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'SaaS Dashboard',
      description:
        'Analytics dashboard with real-time data visualization, reporting features, and admin panel for team management.',
      image: '/projects/dashboard.png',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
      liveUrl: 'https://example.com',
    },
    {
      title: 'Restaurant Booking App',
      description:
        'Table reservation system with real-time availability, push notifications, and integrated payment processing.',
      image: '/projects/restaurant.png',
      technologies: ['React Native', 'Firebase', 'Express', 'Stripe'],
      githubUrl: 'https://github.com',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern portfolio website with content management system, contact forms, and optimized performance.',
      image: '/projects/portfolio.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management platform with real-time updates, team workspaces, and productivity analytics.',
      image: '/projects/tasks.png',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      liveUrl: 'https://example.com',
    },
    {
      title: 'Fitness Tracking App',
      description:
        'Health and fitness tracking application with workout plans, progress charts, and social features.',
      image: '/projects/fitness.png',
      technologies: ['React Native', 'Python', 'FastAPI', 'MongoDB'],
      githubUrl: 'https://github.com',
    },
  ]

  return (
    <section className="border-b border-space-surface bg-space">
      <div className="mx-auto max-w-container px-6 py-24 lg:py-32">
        {/* Header with Parallax */}
        <Parallax speed={-5}>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">Featured Projects</h2>
            <p className="text-lg text-text-secondary">
              A selection of recent work showcasing mobile and web development expertise
            </p>
          </div>
        </Parallax>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Parallax key={index} speed={index % 2 === 0 ? -2 : 2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TiltCard
                  className="group relative rounded-2xl border border-space-surface bg-space-light p-6 h-full transition-all hover:border-accent-blue/50"
                  scale={1.03}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                >
              {/* Project Image Placeholder */}
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20">
                <div className="flex h-full items-center justify-center text-text-secondary">
                  <span className="text-sm font-mono">Project Screenshot</span>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-sm text-text-secondary">{project.description}</p>

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
              <div className="flex gap-3 border-t border-space-surface pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-accent-blue/10 py-2 text-center text-sm font-semibold text-accent-blue transition-all hover:bg-accent-blue/20"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-space-surface py-2 text-center text-sm font-semibold transition-all hover:border-accent-blue/50 hover:bg-space-surface"
                  >
                    GitHub
                  </a>
                )}
              </div>
                </TiltCard>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}

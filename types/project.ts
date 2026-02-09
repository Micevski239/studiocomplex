export interface ProjectTranslation {
  title?: string
  shortDescription?: string
  fullDescription?: string
  features?: string[]
}

export interface Project {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  coverImage: string
  gallery: { src: string; alt: string; caption?: string }[]
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'fullstack'
  featured: boolean
  metrics?: string
  clientName?: string
  testimonial?: string
  translations?: {
    mk?: ProjectTranslation
  }
}

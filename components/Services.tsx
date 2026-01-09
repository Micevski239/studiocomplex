'use client'

import { motion } from 'framer-motion'
import { TiltCard } from '@/components/animations'

interface Service {
  name: string
  description: string
  capabilities: string[]
}

export default function Services() {
  const services: Service[] = [
    {
      name: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      capabilities: [
        'Full-stack web applications',
        'Responsive website design',
        'Progressive Web Apps (PWAs)',
        'API development & integration',
        'Database design & optimization',
        'Authentication & security',
      ],
    },
    {
      name: 'Mobile Development',
      description: 'Cross-platform mobile apps for iOS and Android',
      capabilities: [
        'React Native applications',
        'iOS & Android native features',
        'Push notifications',
        'Offline functionality',
        'App store deployment',
        'Mobile UI/UX optimization',
      ],
    },
    {
      name: 'UI/UX Design',
      description: 'User-centered design and modern interfaces',
      capabilities: [
        'Modern, clean interfaces',
        'User experience design',
        'Prototyping & wireframing',
        'Design systems',
        'Responsive design',
        'Accessibility standards',
      ],
    },
  ]

  return (
    <section id="services" className="border-b border-space-surface bg-space-light">
      <div className="mx-auto max-w-container px-6 py-24 lg:py-32">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">What I Do</h2>
          <p className="text-lg text-text-secondary">
            Comprehensive development services from concept to deployment
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard
                className="group relative rounded-2xl border border-space-surface bg-space p-8 h-full transition-all hover:border-accent-blue/50"
                scale={1.02}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
              >
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold">{service.name}</h3>
                <p className="text-sm text-text-secondary">{service.description}</p>
              </div>

              <div className="space-y-3">
                {service.capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-accent-blue">✓</span>
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-text-secondary">
            Need something custom?{' '}
            <a href="#contact" className="text-accent-blue hover:underline">
              Let's talk
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

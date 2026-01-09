'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import dynamic from 'next/dynamic'
import { GlitchText } from '@/components/animations'

// Lazy load particle background
const ParticleBackground = dynamic(
  () => import('@/components/animations/ParticleBackground'),
  { ssr: false }
)

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-space-surface">
      {/* Particle Background */}
      <ParticleBackground />

      <div className="mx-auto max-w-container px-6 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center relative z-10"
        >
          <div className="mb-6 inline-block rounded-full border border-accent-blue/20 bg-accent-blue/10 px-4 py-1.5">
            <span className="font-mono text-sm text-accent-blue">Full-Stack Developer</span>
          </div>

          {/* Typing Animation */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <TypeAnimation
              sequence={[
                'Building exceptional',
                2000,
                'Creating innovative',
                2000,
                'Developing modern',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <br />
            <GlitchText
              text="mobile & web experiences"
              className="text-text-secondary"
              triggerOnHover={true}
            />
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-text-secondary sm:text-xl">
            I specialize in creating modern, high-performance applications using React, React Native,
            and Node.js. From concept to deployment, I deliver clean, scalable solutions.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-accent-blue px-8 py-4 font-semibold text-white transition-all hover:bg-accent-blue/90 hover:scale-105"
            >
              <span className="relative z-10">View Portfolio</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-space-surface bg-space-light px-8 py-4 font-semibold transition-all hover:border-accent-blue/50 hover:bg-space-surface"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
    </section>
  )
}

'use client'

import { useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

export default function ParticleBackground() {
  // Only show on desktop for performance
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    })
  }, [])

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: { enable: true, width: 800, height: 800 },
          },
          color: { value: ['#3B82F6', '#06B6D4'] },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: { enable: true, speed: 1, sync: false },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          links: {
            enable: true,
            distance: 150,
            color: '#3B82F6',
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
            push: { quantity: 4 },
          },
        },
      }}
    />
  )
}

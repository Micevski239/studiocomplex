'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface LogoMarqueeProps {
  children: ReactNode
  speed?: number
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
  className?: string
}

export default function LogoMarquee({
  children,
  speed = 30,
  pauseOnHover = true,
  direction = 'left',
  className = ''
}: LogoMarqueeProps) {
  const directionMultiplier = direction === 'left' ? -1 : 1

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className={`flex gap-8 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        animate={{
          x: [0, directionMultiplier * -50 + '%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear'
          }
        }}
        style={{ width: 'fit-content' }}
      >
        {/* First set of logos */}
        <div className="flex shrink-0 items-center gap-8">
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 items-center gap-8">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

interface LogoItemProps {
  name: string
  className?: string
}

export function LogoItem({ name, className = '' }: LogoItemProps) {
  return (
    <div
      className={`group flex h-12 min-w-[120px] items-center justify-center rounded-lg border border-space-surface bg-space-light px-6 font-mono text-sm text-text-secondary transition-all duration-300 hover:border-accent-blue/50 hover:text-text-primary dark:border-dark-space-surface dark:bg-dark-space-light dark:text-dark-text-secondary dark:hover:text-dark-text-primary ${className}`}
    >
      <span className="grayscale transition-all duration-300 group-hover:grayscale-0">
        {name}
      </span>
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  label: string
  className?: string
}

function parseValue(value: string): { number: number; suffix: string; prefix: string } {
  // Handle values like "5+", "50+", "100%", "24h", etc.
  const match = value.match(/^([^\d]*)(\d+)(.*)$/)
  if (match) {
    return {
      prefix: match[1] || '',
      number: parseInt(match[2], 10),
      suffix: match[3] || ''
    }
  }
  return { prefix: '', number: 0, suffix: value }
}

export default function AnimatedCounter({ value, label, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { number, suffix, prefix } = parseValue(value)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 1.5
  })

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      springValue.set(number)
    }
  }, [isInView, number, springValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`text-center ${className}`}
    >
      <div className="text-3xl font-bold text-accent-blue sm:text-4xl">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="mt-1 text-sm text-text-secondary dark:text-dark-text-secondary">
        {label}
      </div>
    </motion.div>
  )
}

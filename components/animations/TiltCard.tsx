'use client'

import { ReactNode } from 'react'
import Tilt from 'react-parallax-tilt'

interface TiltCardProps {
  children: ReactNode
  className?: string
  scale?: number
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
  perspective?: number
  glareEnable?: boolean
}

export default function TiltCard({
  children,
  className = '',
  scale = 1.05,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 1000,
  glareEnable = true,
}: TiltCardProps) {
  // Disable on touch devices for better mobile UX
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return <div className={className}>{children}</div>
  }

  return (
    <Tilt
      scale={scale}
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      perspective={perspective}
      glareEnable={glareEnable}
      glareMaxOpacity={0.2}
      glareColor="#3B82F6"
      glarePosition="all"
      transitionSpeed={2500}
      className={className}
    >
      {children}
    </Tilt>
  )
}

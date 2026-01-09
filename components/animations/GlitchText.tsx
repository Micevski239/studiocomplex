'use client'

import { useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  triggerOnHover?: boolean
}

export default function GlitchText({
  text,
  className = '',
  triggerOnHover = false,
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  const handleHover = () => {
    if (triggerOnHover) {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }
  }

  return (
    <span
      className={`glitch-effect ${isGlitching ? 'animate-glitch' : ''} ${className}`}
      data-text={text}
      onMouseEnter={handleHover}
    >
      {text}
    </span>
  )
}

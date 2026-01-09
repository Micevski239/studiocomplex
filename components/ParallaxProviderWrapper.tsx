'use client'

import { ParallaxProvider } from 'react-scroll-parallax'
import { ReactNode } from 'react'

export default function ParallaxProviderWrapper({ children }: { children: ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}

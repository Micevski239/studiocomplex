import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ParallaxProviderWrapper from '@/components/ParallaxProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StudioComplex | Mobile & Web Developer',
  description: 'Full-stack developer specializing in mobile and web applications. View my portfolio of React, React Native, and Node.js projects.',
  keywords: 'web developer, mobile developer, React Native, Next.js, portfolio, full-stack developer, React, Node.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParallaxProviderWrapper>
          {children}
        </ParallaxProviderWrapper>
      </body>
    </html>
  )
}

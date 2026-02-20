import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GoDevLab | Mobile & Web Developer',
  description: 'Full-stack developer specializing in mobile and web applications. View my portfolio of React, React Native, and Node.js projects.',
  keywords: 'web developer, mobile developer, React Native, Next.js, portfolio, full-stack developer, React, Node.js',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mk" className="dark">
      <head />
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

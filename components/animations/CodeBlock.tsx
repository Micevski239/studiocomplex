'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { motion } from 'framer-motion'

interface CodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
}

export default function CodeBlock({
  code,
  language,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-lg overflow-hidden border border-space-surface"
    >
      <div className="flex items-center justify-between bg-space-surface px-4 py-2">
        <span className="font-mono text-xs text-text-secondary">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-accent-blue hover:text-accent-cyan transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: '#0A0E1A',
          fontSize: '0.875rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </motion.div>
  )
}

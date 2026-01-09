'use client'

import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Using Formspree - replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormState('success')
        form.reset()
        setTimeout(() => setFormState('idle'), 5000)
      } else {
        setFormState('error')
        setTimeout(() => setFormState('idle'), 5000)
      }
    } catch (error) {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 5000)
    }
  }

  return (
    <section className="border-b border-space-surface bg-space-light">
      <div className="mx-auto max-w-container px-6 py-24 lg:py-32">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">Get in Touch</h2>
          <p className="text-lg text-text-secondary">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-space-surface bg-space px-4 py-3 text-text-primary transition-colors focus:border-accent-blue focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-space-surface bg-space px-4 py-3 text-text-primary transition-colors focus:border-accent-blue focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-lg border border-space-surface bg-space px-4 py-3 text-text-primary transition-colors focus:border-accent-blue focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full rounded-lg bg-accent-blue px-8 py-4 font-semibold text-white transition-all hover:bg-accent-blue/90 disabled:opacity-50"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {formState === 'success' && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-sm text-green-400">
                  Thanks for your message! I'll get back to you soon.
                </div>
              )}

              {formState === 'error' && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Let's Connect</h3>
              <p className="text-text-secondary">
                Whether you have a project idea, need technical consultation, or just want to
                connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-2 text-sm font-semibold text-text-secondary">Email</div>
                <a
                  href="mailto:your@email.com"
                  className="text-lg text-accent-blue hover:underline"
                >
                  your@email.com
                </a>
              </div>

              <div>
                <div className="mb-2 text-sm font-semibold text-text-secondary">Connect</div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-space-surface bg-space px-4 py-2 text-sm font-medium transition-all hover:border-accent-blue/50 hover:bg-space-surface"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-space-surface bg-space px-4 py-2 text-sm font-medium transition-all hover:border-accent-blue/50 hover:bg-space-surface"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-space-surface bg-space px-4 py-2 text-sm font-medium transition-all hover:border-accent-blue/50 hover:bg-space-surface"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-accent-cyan/20 bg-accent-cyan/5 p-6">
                <div className="mb-2 text-sm font-semibold">Availability</div>
                <p className="text-sm text-text-secondary">
                  Currently available for freelance projects and collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="bg-space">
      <div className="mx-auto max-w-container px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-space-surface pt-8 sm:flex-row">
          <div>
            <div className="mb-2 font-mono text-xl font-bold text-accent-blue">StudioComplex</div>
            <p className="text-sm text-text-secondary">
              Full-stack developer specializing in
              <br />
              mobile and web applications.
            </p>
          </div>

          <div className="flex gap-8 text-sm">
            <a
              href="mailto:your@email.com"
              className="text-text-secondary transition-colors hover:text-accent-blue"
            >
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent-blue"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent-blue"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent-blue"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-space-surface pt-6 text-center text-xs text-text-secondary">
          <p>© 2026 StudioComplex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function WhyUs() {
  const techStack = [
    {
      category: 'Frontend',
      technologies: 'React, Next.js, TypeScript, Tailwind CSS',
    },
    {
      category: 'Backend',
      technologies: 'Node.js, Express, Python, FastAPI',
    },
    {
      category: 'Mobile',
      technologies: 'React Native, Expo',
    },
    {
      category: 'Database',
      technologies: 'PostgreSQL, MongoDB, Supabase, Firebase',
    },
    {
      category: 'Cloud & DevOps',
      technologies: 'Vercel, AWS, Docker, Railway',
    },
    {
      category: 'Tools & Services',
      technologies: 'Git, VS Code, Figma, Postman',
    },
  ]

  return (
    <section className="border-b border-space-surface bg-space">
      <div className="mx-auto max-w-container px-6 py-24 lg:py-32">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Technologies & Tools
          </h2>
          <p className="text-lg text-text-secondary">
            Modern, production-ready tech stack for building scalable applications
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-space-surface bg-space-light p-6 transition-all hover:border-accent-blue/50 hover:bg-space-surface"
            >
              <div className="mb-3 text-lg font-bold text-accent-blue">{item.category}</div>
              <div className="font-mono text-sm leading-relaxed text-text-secondary">
                {item.technologies}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

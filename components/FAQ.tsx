'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What types of projects do you work on?',
      answer:
        'I specialize in web and mobile application development. This includes full-stack web apps, responsive websites, cross-platform mobile apps using React Native, API development, and database design. I work on both new projects from scratch and improvements to existing applications.',
    },
    {
      question: 'Do you work with clients remotely?',
      answer:
        'Yes, I work with clients globally. I\'m comfortable with asynchronous communication via email and project management tools, and I\'m flexible with meeting times across different time zones when real-time collaboration is needed.',
    },
    {
      question: 'What is your development process?',
      answer:
        'I follow an iterative development approach: initial consultation to understand requirements, planning and architecture design, development with regular updates, testing and quality assurance, and finally deployment with documentation. Throughout the project, I maintain clear communication and provide progress updates.',
    },
    {
      question: 'Can you help with existing projects or just new ones?',
      answer:
        'Absolutely! I can help with both. Whether you need to build something from scratch, add new features to an existing application, fix bugs, improve performance, or modernize legacy code, I have experience with all of these scenarios.',
    },
    {
      question: 'What are your rates and availability?',
      answer:
        'My rates vary depending on project scope and complexity. I offer both project-based pricing and hourly rates. For availability and specific pricing, please reach out through the contact form and I\'ll be happy to discuss your project requirements.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes, I offer ongoing support and maintenance packages for projects after launch. This can include bug fixes, updates, new features, performance monitoring, and technical support. We can discuss the specific level of support your project needs.',
    },
    {
      question: 'How do you ensure code quality?',
      answer:
        'I follow industry best practices including clean code principles, proper testing, code reviews, version control with Git, and comprehensive documentation. I use modern development tools and frameworks, and ensure all code is maintainable and scalable for future growth.',
    },
    {
      question: 'Can you work with my existing team?',
      answer:
        'Definitely! I\'m experienced in collaborating with existing development teams, designers, and stakeholders. I can integrate seamlessly into your workflow, whether that\'s using your project management tools, following your coding standards, or participating in regular team meetings.',
    },
  ]

  return (
    <section className="border-b border-space-surface bg-space-light">
      <div className="mx-auto max-w-container px-6 py-24 lg:py-32">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="text-lg text-text-secondary">
            Common questions about working together
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-space-surface bg-space transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-all hover:bg-space-surface"
              >
                <span className="pr-8 font-semibold">{faq.question}</span>
                <span
                  className={`flex-shrink-0 text-2xl text-accent-blue transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-space-surface bg-space-light px-6 py-4">
                  <p className="leading-relaxed text-text-secondary">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

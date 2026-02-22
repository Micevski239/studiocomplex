'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const brands = [
  { name: 'GoGevgelija', logo: '/logos/gogevgelija.png' },
  { name: 'SparkleMK', logo: '/logos/sparklemk.png' },
  { name: 'RentGevgelija', logo: '/logos/rentgevgelija.png' },
  { name: 'RentGevgelija', logo: '/logos/dysnomia.png' },
]

export default function TrustedBy() {
  const t = useTranslations('trustedBy')

  return (
    <section className="border-b border-space-surface bg-space-light py-8 dark:border-dark-space-surface dark:bg-[#1a2035] lg:py-12">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <h2 className="text-lg font-semibold uppercase tracking-wider text-white">
            {t('title')}
          </h2>
        </motion.div>

        <div className="overflow-hidden">
          <div className="group flex animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex shrink-0 items-center justify-center"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={500}
                  height={400}
                  className="h-20 w-auto object-contain sm:h-24 lg:h-32"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

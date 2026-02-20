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
    <section className="border-b border-space-surface bg-space-light py-20 dark:border-dark-space-surface dark:bg-[#1a2035] lg:py-28">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-lg font-semibold uppercase tracking-wider text-white">
            {t('title')}
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-12 sm:gap-16 lg:gap-20">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={500}
                height={400}
                className="h-32 w-auto object-contain sm:h-36 lg:h-44"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface ProjectGalleryProps {
  images: GalleryImage[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedImage(index)}
            className="cursor-pointer overflow-hidden rounded-lg border border-space-surface bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 transition-all hover:border-accent-blue/50 dark:border-dark-space-surface"
          >
            <div className="aspect-video">
              <div className="flex h-full items-center justify-center text-text-secondary dark:text-dark-text-secondary">
                <span className="font-mono text-sm">{image.alt}</span>
              </div>
            </div>
            {image.caption && (
              <div className="border-t border-space-surface bg-space-light p-3 dark:border-dark-space-surface dark:bg-dark-space-light">
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  {image.caption}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-space dark:bg-dark-space"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="aspect-video min-w-[300px] bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 md:min-w-[600px]">
                <div className="flex h-full items-center justify-center text-text-secondary dark:text-dark-text-secondary">
                  <span className="font-mono text-lg">{images[selectedImage].alt}</span>
                </div>
              </div>

              {/* Caption */}
              {images[selectedImage].caption && (
                <div className="border-t border-space-surface bg-space-light p-4 dark:border-dark-space-surface dark:bg-dark-space-light">
                  <p className="text-center text-text-secondary dark:text-dark-text-secondary">
                    {images[selectedImage].caption}
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage((prev) =>
                      prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
                    )
                  }}
                  className="ml-2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage((prev) =>
                      prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
                    )
                  }}
                  className="mr-2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                {selectedImage + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface LightboxImage {
  src: string
  alt: string
}

export default function ImageLightbox({
  images,
  coverImage,
  coverAlt,
}: {
  images: LightboxImage[]
  coverImage: string
  coverAlt: string
}) {
  const allImages = [{ src: coverImage, alt: coverAlt }, ...images]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])

  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i !== null ? (i - 1 + allImages.length) % allImages.length : null
      ),
    [allImages.length]
  )

  const next = useCallback(
    () =>
      setOpenIndex((i) =>
        i !== null ? (i + 1) % allImages.length : null
      ),
    [allImages.length]
  )

  useEffect(() => {
    if (openIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [openIndex, close, prev, next])

  return (
    <>
      {/* Cover image */}
      <div
        className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl"
        onClick={() => setOpenIndex(0)}
      >
        <Image
          src={coverImage}
          alt={coverAlt}
          fill
          priority
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 hover:bg-black/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-white opacity-0 transition-opacity duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
            />
          </svg>
        </div>
      </div>

      {/* Gallery grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative aspect-video cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setOpenIndex(index + 1)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox overlay */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative mx-16 h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[openIndex].src}
              alt={allImages[openIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 text-sm text-white/60">
            {openIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  )
}

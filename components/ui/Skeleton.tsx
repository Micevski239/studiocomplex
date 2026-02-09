'use client'

import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-space-surface dark:bg-dark-space-surface',
        className
      )}
    />
  )
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-space-surface bg-space-light p-6 dark:border-dark-space-surface dark:bg-dark-space-light',
        className
      )}
    >
      {/* Image placeholder */}
      <Skeleton className="mb-6 aspect-video w-full rounded-lg" />

      {/* Badge placeholder */}
      <Skeleton className="mb-3 h-6 w-24 rounded-full" />

      {/* Title placeholder */}
      <Skeleton className="mb-2 h-6 w-3/4" />

      {/* Description placeholder */}
      <Skeleton className="mb-4 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-2/3" />

      {/* Tech tags placeholder */}
      <div className="mb-4 flex gap-2">
        <Skeleton className="h-6 w-16 rounded-md" />
        <Skeleton className="h-6 w-20 rounded-md" />
        <Skeleton className="h-6 w-14 rounded-md" />
      </div>

      {/* Button placeholder */}
      <div className="flex gap-3 border-t border-space-surface pt-4 dark:border-dark-space-surface">
        <Skeleton className="h-10 flex-1 rounded-lg" />
        <Skeleton className="h-10 flex-1 rounded-lg" />
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3, className }: SkeletonProps & { lines?: number }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === lines - 1 ? 'w-2/3' : 'w-full')}
        />
      ))}
    </div>
  )
}

export function SkeletonImage({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-space-surface dark:bg-dark-space-surface',
        className
      )}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

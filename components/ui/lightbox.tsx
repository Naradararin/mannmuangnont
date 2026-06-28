'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// Full-screen image viewer: prev/next, keyboard (Esc / ← / →), touch swipe,
// thumbnail strip, click-backdrop-to-close. Self-contained and theme-neutral
// so it can be reused anywhere; pass already-resolved image URLs.
export function Lightbox({
  images,
  initialIndex = 0,
  label,
  onClose,
}: {
  images: string[]
  initialIndex?: number
  label?: string
  onClose: () => void
}) {
  const [idx, setIdx] = useState(initialIndex)
  const total = images.length
  const touchX = useRef<number | null>(null)

  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)

  // Keyboard nav + lock background scroll while open.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + total) % total)
      else if (e.key === 'ArrowRight') setIdx(i => (i + 1) % total)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [total, onClose])

  if (total === 0) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/92"
      style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
    >
      {/* Top bar: caption + counter + close */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6" onClick={e => e.stopPropagation()}>
        <span className="font-dm-sans text-[12px] tracking-[0.08em] text-white/80">
          {label ? `${label} · ` : ''}{idx + 1} / {total}
        </span>
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Image stage */}
      <div
        className="relative flex-1"
        onClick={e => e.stopPropagation()}
        onTouchStart={total > 1 ? e => { touchX.current = e.touches[0].clientX } : undefined}
        onTouchEnd={total > 1 ? e => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) dx < 0 ? next() : prev()
          touchX.current = null
        } : undefined}
      >
        <Image
          key={images[idx]}
          src={images[idx]}
          alt={label ? `${label} ${idx + 1}` : `Image ${idx + 1}`}
          fill
          sizes="100vw"
          quality={90}
          priority
          className="object-contain"
        />

        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
            >
              <svg width="17" height="17" viewBox="0 0 13 13" fill="none">
                <path d="M8 2.5L3.5 6.5 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
            >
              <svg width="17" height="17" viewBox="0 0 13 13" fill="none">
                <path d="M5 2.5L9.5 6.5 5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div
          className="flex gap-1.5 overflow-x-auto px-4 py-3 sm:justify-center"
          style={{ scrollbarWidth: 'none' } as React.CSSProperties}
          onClick={e => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIdx(i)}
              aria-label={`Image ${i + 1}`}
              className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[3px] transition-opacity"
              style={{
                outline: i === idx ? '1.5px solid #fff' : '1px solid rgba(255,255,255,0.15)',
                opacity: i === idx ? 1 : 0.5,
              }}
            >
              <Image src={src} alt="" fill sizes="48px" quality={30} loading="lazy" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

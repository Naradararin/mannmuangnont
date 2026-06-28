'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLang } from '@/lib/lang'
import { Navbar } from '@/components/layout/navbar'
import { Lightbox } from '@/components/ui/lightbox'
import { PORTFOLIO } from '@/lib/portfolio-data'

const PROJECT = PORTFOLIO.find(e => e.detailHref === '/portfolio/thep-rak-49')

const L = {
  bg: '#0d0a05',
  card: '#1c1409',
  gold: '#c9a84c',
  champ: '#e8d5a3',
  text: '#f0e6cc',
  border: 'rgba(201,168,76,0.28)',
  muted: 'rgba(201,168,76,0.52)',
  slot: '#0a0805',
}

const BASE = '/images/portfolio/thep-rak-49'

interface CategoryDef {
  key: string
  folder: string
  label: { th: string; en: string }
  images: string[]
}

const CATEGORIES: CategoryDef[] = [
  {
    key: 'premium',
    folder: 'Premium',
    label: { th: 'พรีเมียม', en: 'Premium' },
    images: ['473279.jpg', '473278.jpg', '473281.jpg', '473301.jpg', '473291.jpg'],
  },
  {
    key: 'curtain',
    folder: 'Curtain',
    label: { th: 'ม่าน', en: 'Curtain' },
    images: ['473294.jpg', '473280.jpg', '473306.jpg', '473299.jpg'],
  },
  {
    key: 'inside',
    folder: 'Inside the house',
    label: { th: 'ภายในบ้าน', en: 'Inside the House' },
    images: [
      '473250.jpg', '473253.jpg', '473266.jpg', '473245.jpg', '473254.jpg',
      '473284.jpg', '473241.jpg', '473252.jpg', '473289.jpg', '473251.jpg',
      '473277.jpg', '473240.jpg', '473270.jpg', '473275.jpg', '473272.jpg',
      '473296.jpg', '473303.jpg', '473269.jpg', '473263.jpg', '473302.jpg',
      '473288.jpg', '473236.jpg', '473285.jpg', '473246.jpg', '473188.jpg',
      '473239.jpg', '473234.jpg', '473218.jpg', '473200.jpg', '473201.jpg',
    ],
  },
  {
    key: 'outside',
    folder: 'Outside the house',
    label: { th: 'ภายนอกบ้าน', en: 'Outside the House' },
    images: ['473260.jpg', '473307.jpg', '473308.jpg'],
  },
  {
    key: 'electric',
    folder: 'Electric motor',
    label: { th: 'มอเตอร์ไฟฟ้า', en: 'Electric Motor' },
    images: [
      '473242.jpg', '473287.jpg', '473262.jpg', '473244.jpg', '473259.jpg',
      '473213.jpg', '473233.jpg', '473231.jpg', '473223.jpg', '473202.jpg', '473205.jpg',
    ],
  },
  {
    key: 'wallpaper',
    folder: 'Wallpaper',
    label: { th: 'วอลเปเปอร์', en: 'Wallpaper' },
    images: [
      '473209.jpg', '473248.jpg', '473257.jpg', '473273.jpg', '473286.jpg',
      '473282.jpg', '473290.jpg', '473265.jpg', '473255.jpg', '473300.jpg',
      '473274.jpg', '473258.jpg',
    ],
  },
  {
    key: 'wooden',
    folder: 'Wooden blinds',
    label: { th: 'มู่ลี่ไม้', en: 'Wooden Blinds' },
    images: ['473305.jpg', '473311.jpg', '473298.jpg', '473312.jpg', '473310.jpg', '473177.jpg', '473176.jpg'],
  },
  {
    key: 'installation',
    folder: 'Installation period',
    label: { th: 'ช่วงติดตั้ง', en: 'Installation Period' },
    images: [
      '473178.jpg', '473184.jpg', '473235.jpg', '473182.jpg', '473185.jpg',
      '473183.jpg', '473196.jpg', '473193.jpg', '473197.jpg', '473187.jpg',
      '473181.jpg', '473190.jpg', '473186.jpg', '473194.jpg', '473220.jpg', '473191.jpg',
    ],
  },
]

function imgSrc(folder: string, file: string) {
  return `${BASE}/${encodeURIComponent(folder)}/${file}`
}

function CategoryCard({
  category,
  lang,
  noMotion,
  priority = false,
  onOpen,
}: {
  category: CategoryDef
  lang: 'th' | 'en'
  noMotion: boolean
  priority?: boolean
  onOpen: (startIdx: number) => void
}) {
  const [idx, setIdx] = useState(0)
  const { images, folder, label } = category
  const total = images.length

  function prev() { setIdx(i => (i - 1 + total) % total) }
  function next() { setIdx(i => (i + 1) % total) }

  const activeSrc = imgSrc(folder, images[idx])

  return (
    <div
      className="overflow-hidden rounded-sm"
      style={{ background: L.card, border: `1px solid ${L.border}` }}
    >
      {/* ── Cover (click to open full-screen lightbox) ──────────── */}
      <div
        className="img-skeleton-dark relative aspect-[4/3] cursor-zoom-in overflow-hidden"
        onClick={() => onOpen(idx)}
        role="button"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(idx) } }}
        aria-label={lang === 'th' ? `ดูรูป ${label.th} แบบเต็มจอ` : `View ${label.en} full screen`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSrc}
            className="absolute inset-0"
            initial={noMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={noMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <Image
              src={activeSrc}
              alt={`${label[lang]} ${idx + 1}`}
              fill
              quality={85}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              priority={priority && idx === 0}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Counter badge */}
        <div
          className="absolute right-3 top-3 rounded-full px-2.5 py-1 font-dm-sans text-[10px] tracking-[0.06em]"
          style={{
            background: 'rgba(13,10,5,0.68)',
            color: L.champ,
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        >
          {idx + 1}&thinsp;/&thinsp;{total}
        </div>

        {/* Prev arrow */}
        {total > 1 && (
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-opacity hover:opacity-90"
            style={{ background: 'rgba(13,10,5,0.60)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            aria-label="Previous image"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M8 2.5L3.5 6.5 8 10.5" stroke={L.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        {/* Next arrow */}
        {total > 1 && (
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-opacity hover:opacity-90"
            style={{ background: 'rgba(13,10,5,0.60)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            aria-label="Next image"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M5 2.5L9.5 6.5 5 10.5" stroke={L.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Thumbnail strip ──────────────────────────────────────── */}
      <div
        className="flex gap-1.5 overflow-x-auto px-3 py-2.5"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
      >
        {images.map((file, i) => (
          <button
            key={file}
            onClick={() => setIdx(i)}
            aria-label={`Image ${i + 1}`}
            className="relative shrink-0 overflow-hidden rounded-[3px] transition-opacity"
            style={{
              width: 42,
              height: 42,
              background: L.slot,
              outline: i === idx
                ? `1.5px solid ${L.gold}`
                : `1px solid rgba(201,168,76,0.12)`,
              opacity: i === idx ? 1 : 0.55,
            }}
          >
            <Image
              src={imgSrc(folder, file)}
              alt=""
              fill
              sizes="42px"
              quality={30}
              loading="lazy"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* ── Meta ────────────────────────────────────────────────── */}
      <div className="px-4 pb-5 pt-1.5">
        <p
          className="font-dm-sans text-[10px] uppercase tracking-[0.14em]"
          style={{ color: L.muted }}
        >
          {lang === 'th' ? 'กรุงเทพ · 2024' : 'Bangkok · 2024'}
        </p>
        <h3
          className="mt-1.5 font-sarabun text-[18px] leading-[1.3]"
          style={{ color: L.champ }}
        >
          {label[lang]}
        </h3>
        <div className="mt-3">
          <span
            className="inline-block rounded-full border px-2.5 py-0.5 font-dm-sans text-[9px] uppercase tracking-[0.16em]"
            style={{ borderColor: L.border, color: L.gold }}
          >
            Luxury
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ThepRak49Page() {
  const { lang } = useLang()
  const noMotion = useReducedMotion() ?? false
  // Active lightbox: resolved image URLs for one category + which to show first.
  const [lightbox, setLightbox] = useState<{ images: string[]; start: number; label: string } | null>(null)

  return (
    <>
      {/* Hide thumbnail scrollbars cross-browser */}
      <style>{`.thumb-strip::-webkit-scrollbar{display:none}`}</style>

      <div className="min-h-screen" style={{ background: L.bg, color: L.text }}>
        <Navbar />

        {/* ── Header ──────────────────────────────────────────────── */}
        <header
          className="px-5 pb-8 pt-[calc(72px+2.5rem)] sm:px-10 lg:px-16"
          style={{ borderBottom: `1px solid ${L.border}` }}
        >
          <div className="mx-auto max-w-6xl">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-1.5 font-dm-sans text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-80"
              style={{ color: L.muted }}
            >
              <span style={{ color: L.gold }}>←</span>
              {lang === 'th' ? 'กลับไปที่ผลงาน' : 'Back to Portfolio'}
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full border px-3 py-1 font-dm-sans text-[10px] uppercase tracking-[0.18em]"
                style={{ borderColor: L.border, color: L.gold }}
              >
                Luxury
              </span>
              <span
                className="font-dm-sans text-[10px] uppercase tracking-[0.12em]"
                style={{ color: L.muted }}
              >
                {lang === 'th' ? 'กรุงเทพ · 2024' : 'Bangkok · 2024'}
              </span>
            </div>

            <h1
              className={`mt-4 text-3xl leading-[1.25] sm:text-4xl lg:text-5xl ${lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic'}`}
              style={{ color: L.champ }}
            >
              {lang === 'th' ? 'เทพรักษ์ 49' : 'Thep Rak 49'}
            </h1>
            <p className="mt-2 font-dm-sans text-sm" style={{ color: L.muted }}>
              {lang === 'th'
                ? 'โครงการ Luxury · กรุงเทพมหานคร'
                : 'Luxury Flagship Project · Bangkok'}
            </p>
            {lang === 'th' && PROJECT && (
              <p
                className="mt-4 max-w-2xl font-sarabun text-[15px] leading-[1.8]"
                style={{ color: L.text }}
              >
                {PROJECT.description}
              </p>
            )}
          </div>
        </header>

        {/* ── Category grid ───────────────────────────────────────── */}
        <main className="mx-auto max-w-6xl px-5 py-10 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard
                key={cat.key}
                category={cat}
                lang={lang}
                noMotion={noMotion}
                priority={i === 0}
                onOpen={start =>
                  setLightbox({
                    images: cat.images.map(f => imgSrc(cat.folder, f)),
                    start,
                    label: cat.label[lang],
                  })
                }
              />
            ))}
          </div>
        </main>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <footer
          className="mt-8 px-5 py-8 text-center sm:px-10 lg:px-16"
          style={{ borderTop: `1px solid ${L.border}` }}
        >
          <p
            className="font-dm-sans text-[11px] uppercase tracking-[0.16em]"
            style={{ color: L.muted }}
          >
            {lang === 'th'
              ? 'ม่านเมืองนนท์ · กรุงเทพมหานคร · 2024'
              : 'Maan Mueang Nont · Bangkok · 2024'}
          </p>
          <Link
            href="/#portfolio"
            className="mt-3 inline-flex items-center gap-2 font-dm-sans text-[11px] uppercase tracking-[0.14em] transition-opacity hover:opacity-80"
            style={{ color: L.gold }}
          >
            ← {lang === 'th' ? 'ดูผลงานทั้งหมด' : 'All Projects'}
          </Link>
        </footer>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.start}
          label={lightbox.label}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}

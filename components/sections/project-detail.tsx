'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/lang'
import { Navbar } from '@/components/layout/navbar'
import { PortfolioEntry, Tier } from '@/lib/portfolio-data'

// ---------------------------------------------------------------------------
// Per-tier theme tokens. Standard (ทั่วไป) reuses the site CSS variables;
// High-End and Luxury mirror the palettes used in the portfolio gallery.
// ---------------------------------------------------------------------------
interface Theme {
  bg: string
  text: string
  title: string
  muted: string
  accent: string
  onAccent: string
  card: string
  border: string
  slot: string
}

const THEMES: Record<Tier, Theme> = {
  'ทั่วไป': {
    bg: 'var(--color-surface)',
    text: 'var(--color-ink)',
    title: 'var(--color-ink)',
    muted: 'rgba(20,18,15,0.5)',
    accent: 'var(--color-sage)',
    onAccent: 'var(--color-canvas)',
    card: 'var(--color-canvas)',
    border: 'rgba(20,18,15,0.10)',
    slot: '#e8e0d2',
  },
  'High-End': {
    bg: '#FAF4E5',
    text: '#664E44',
    title: '#664E44',
    muted: 'rgba(102,78,68,0.55)',
    accent: '#C7C3B0',
    onAccent: '#664E44',
    card: '#F6F5EC',
    border: 'rgba(102,78,68,0.18)',
    slot: '#efe9d8',
  },
  'Luxury': {
    bg: '#0d0a05',
    text: '#f0e6cc',
    title: '#e8d5a3',
    muted: 'rgba(201,168,76,0.52)',
    accent: '#c9a84c',
    onAccent: '#0d0a05',
    card: '#1c1409',
    border: 'rgba(201,168,76,0.28)',
    slot: '#0a0805',
  },
}

const TIER_LABEL: Record<Tier, string> = {
  'ทั่วไป': 'General',
  'High-End': 'High-End',
  'Luxury': 'Luxury',
}

function formatDate(iso: string, lang: 'th' | 'en'): string {
  // iso is YYYY-MM-DD; show "เดือน ปี" loosely as "Mon YYYY".
  const [y, m] = iso.split('-')
  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[Number(m)] ?? m} ${lang === 'th' ? Number(y) + 543 : y}`
}

export function ProjectDetail({
  entry,
  recommended,
}: {
  entry: PortfolioEntry
  recommended: PortfolioEntry[]
}) {
  const { lang } = useLang()
  const t = THEMES[entry.tier]
  // Loading shimmer matches the page theme (Luxury is dark, others light).
  const skeleton = entry.tier === 'Luxury' ? 'img-skeleton-dark' : 'img-skeleton'

  return (
    <div className="min-h-screen" style={{ background: t.bg, color: t.text }}>
      <Navbar />

      {/* ── Header ──────────────────────────────────────────────── */}
      <header
        className="px-5 pb-8 pt-[calc(72px+2.5rem)] sm:px-10 lg:px-16"
        style={{ borderBottom: `1px solid ${t.border}` }}
      >
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-1.5 font-dm-sans text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-80"
            style={{ color: t.muted }}
          >
            <span style={{ color: t.accent }}>←</span>
            {lang === 'th' ? 'กลับไปที่ผลงาน' : 'Back to Portfolio'}
          </Link>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full border px-3 py-1 font-dm-sans text-[10px] uppercase tracking-[0.18em]"
              style={{ borderColor: t.border, color: t.accent }}
            >
              {lang === 'th' ? entry.tier : TIER_LABEL[entry.tier]}
            </span>
            <span
              className="font-dm-sans text-[10px] uppercase tracking-[0.12em]"
              style={{ color: t.muted }}
            >
              {entry.province[lang]} · {formatDate(entry.date, lang)}
            </span>
          </div>

          <h1
            className={`mt-4 text-3xl leading-[1.25] sm:text-4xl lg:text-5xl ${
              lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic'
            }`}
            style={{ color: t.title }}
          >
            {entry.location[lang]}
          </h1>

          {/* Category chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.mainCategories.map(c => (
              <span
                key={c.th}
                className="rounded-full border px-2.5 py-0.5 font-dm-sans text-[10px]"
                style={{ borderColor: t.border, color: t.accent }}
              >
                {c[lang]}
              </span>
            ))}
            {entry.curtainTypes.map(ct => (
              <span
                key={ct.th}
                className="rounded-full px-2.5 py-0.5 font-dm-sans text-[10px]"
                style={{ background: t.card, color: t.muted }}
              >
                {ct[lang]}
              </span>
            ))}
          </div>

          {/* Generated description (TH only, matching the rest of the site) */}
          {lang === 'th' && (
            <p
              className="mt-4 max-w-2xl font-sarabun text-[15px] leading-[1.8]"
              style={{ color: t.text }}
            >
              {entry.description}
            </p>
          )}

          {/* Meta row */}
          <div className="mt-3 flex flex-wrap gap-x-4 font-dm-sans text-[11px]" style={{ color: t.muted }}>
            {entry.lightBlocking !== '-' && <span>{entry.lightBlocking}</span>}
            {entry.propertyType[lang] !== '-' && <span>{entry.propertyType[lang]}</span>}
          </div>
        </div>
      </header>

      {/* ── Gallery ─────────────────────────────────────────────── */}
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-10 lg:px-16">
        <Gallery images={entry.imageUrls} theme={t} lang={lang} skeleton={skeleton} />
      </main>

      {/* ── Recommended ─────────────────────────────────────────── */}
      {recommended.length > 0 && (
        <section
          className="px-5 py-12 sm:px-10 lg:px-16"
          style={{ borderTop: `1px solid ${t.border}` }}
        >
          <div className="mx-auto max-w-6xl">
            <p
              className="font-dm-sans text-[11px] uppercase tracking-[0.2em]"
              style={{ color: t.accent }}
            >
              {lang === 'th' ? 'แนะนำ' : 'Recommended'}
            </p>
            <h2
              className={`mt-2 text-2xl ${lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic'}`}
              style={{ color: t.title }}
            >
              {lang === 'th' ? 'ผลงานอื่นที่น่าสนใจ' : 'More Projects'}
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recommended.map(r => (
                <RecommendedCard key={r.id} entry={r} theme={t} lang={lang} skeleton={skeleton} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer
        className="px-5 py-8 text-center sm:px-10 lg:px-16"
        style={{ borderTop: `1px solid ${t.border}` }}
      >
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 font-dm-sans text-[11px] uppercase tracking-[0.14em] transition-opacity hover:opacity-80"
          style={{ color: t.accent }}
        >
          ← {lang === 'th' ? 'ดูผลงานทั้งหมด' : 'All Projects'}
        </Link>
      </footer>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Gallery — main image + prev/next + thumbnail strip (swipe on touch)
// ---------------------------------------------------------------------------
function Gallery({ images, theme, lang, skeleton }: { images: string[]; theme: Theme; lang: 'th' | 'en'; skeleton: string }) {
  const [idx, setIdx] = useState(0)
  const total = images.length
  const touchX = useRef<number | null>(null)

  if (total === 0) {
    return (
      <div
        className="mx-auto flex aspect-[3/4] w-full max-w-[560px] items-center justify-center rounded-sm"
        style={{ background: theme.slot, color: theme.muted }}
      >
        <span className="font-dm-sans text-[11px] uppercase tracking-[0.2em]">
          {lang === 'th' ? 'ไม่มีรูปภาพ' : 'No photos'}
        </span>
      </div>
    )
  }

  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)

  return (
    <div>
      <div
        className={`${skeleton} relative mx-auto aspect-[3/4] w-full max-w-[560px] overflow-hidden rounded-sm`}
        onTouchStart={total > 1 ? e => { touchX.current = e.touches[0].clientX } : undefined}
        onTouchEnd={total > 1 ? e => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) dx < 0 ? next() : prev()
          touchX.current = null
        } : undefined}
      >
        <Image
          src={images[idx]}
          alt=""
          fill
          quality={85}
          sizes="(max-width: 640px) 100vw, 560px"
          priority
          className="object-cover"
        />

        <div
          className="absolute right-3 top-3 rounded-full px-2.5 py-1 font-dm-sans text-[10px]"
          style={{ background: 'rgba(0,0,0,0.55)', color: '#fff', backdropFilter: 'blur(6px)' }}
        >
          {idx + 1} / {total}
        </div>

        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-xl leading-none transition-opacity hover:opacity-90"
              style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-xl leading-none transition-opacity hover:opacity-90"
              style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
            >
              ›
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mx-auto mt-2 flex max-w-[560px] gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {images.map((url, i) => (
            <button
              key={url}
              onClick={() => setIdx(i)}
              aria-label={`Image ${i + 1}`}
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[3px] transition-opacity"
              style={{
                background: theme.slot,
                outline: i === idx ? `1.5px solid ${theme.accent}` : `1px solid ${theme.border}`,
                opacity: i === idx ? 1 : 0.55,
              }}
            >
              <Image src={url} alt="" fill sizes="56px" quality={30} loading="lazy" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Recommended card — compact, links to the project's detail page
// ---------------------------------------------------------------------------
function RecommendedCard({ entry, theme, lang, skeleton }: { entry: PortfolioEntry; theme: Theme; lang: 'th' | 'en'; skeleton: string }) {
  const href = entry.detailHref ?? `/portfolio/${entry.id}`
  const cover = entry.imageUrls[0] ?? ''

  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-sm transition-shadow hover:shadow-md"
      style={{ background: theme.card, border: `1px solid ${theme.border}` }}
    >
      <div className={`relative aspect-[4/3] overflow-hidden ${cover ? skeleton : ''}`} style={cover ? undefined : { background: theme.slot }}>
        {cover ? (
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        <span
          className="absolute bottom-2 left-2 rounded-full px-2 py-0.5 font-dm-sans text-[9px] uppercase tracking-[0.1em]"
          style={{ background: theme.accent, color: theme.onAccent }}
        >
          {entry.tier === 'ทั่วไป' ? (lang === 'th' ? 'ทั่วไป' : 'General') : entry.tier}
        </span>
      </div>
      <div className="p-3.5">
        <p className="font-dm-sans text-[10px]" style={{ color: theme.muted }}>
          {entry.province[lang]} · {formatDate(entry.date, lang)}
        </p>
        <p className="mt-1 font-sarabun text-sm leading-[1.5]" style={{ color: theme.title }}>
          {entry.location[lang]}
        </p>
      </div>
    </Link>
  )
}

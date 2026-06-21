'use client'

import { useMemo, useState } from 'react'
import { FadeIn } from '@/components/motion/fade-in'
import { useLang } from '@/lib/lang'
import { PORTFOLIO, Tier, PortfolioEntry } from '@/lib/portfolio-data'

const TIER_ORDER: Tier[] = ['ทั่วไป', 'High-End', 'Luxury']
// Canonical Thai keys used for filter state; order controls pill order
const CAT_ORDER = ['ผ้าม่าน', 'วอลเปเปอร์', 'กระเบื้องยาง']
const CAT_EN: Record<string, string> = {
  'ผ้าม่าน': 'Curtains',
  'วอลเปเปอร์': 'Wallpaper',
  'กระเบื้องยาง': 'Vinyl Flooring',
}

// Luxury design tokens
const L = {
  bg: '#0d0a05',
  card: '#1c1409',
  gold: '#c9a84c',
  champ: '#e8d5a3',
  text: '#f0e6cc',
  border: 'rgba(201,168,76,0.28)',
  muted: 'rgba(201,168,76,0.52)',
  slot: '#0a0805',
  strip: 'rgba(201,168,76,0.06)',
} as const

const PILL = 'rounded-full px-4 py-1.5 font-dm-sans text-[11px] tracking-[0.08em] transition-colors cursor-pointer border'

export function PortfolioGallery() {
  const { lang } = useLang()
  const [tier, setTier] = useState<Tier>('ทั่วไป')
  const [cat, setCat] = useState<string | null>(null)   // Thai key
  const [tag, setTag] = useState<string | null>(null)   // Thai key
  const isLux = tier === 'Luxury'

  const tierEntries = useMemo(() => PORTFOLIO.filter(e => e.tier === tier), [tier])

  // cats: Thai-keyed list of categories present in this tier
  const cats = useMemo(() => {
    const set = new Set<string>()
    tierEntries.forEach(e => e.mainCategories.forEach(c => set.add(c.th)))
    return CAT_ORDER.filter(c => set.has(c))
  }, [tierEntries])

  // tagMap: th → en for curtain types visible in current scope
  const tagMap = useMemo(() => {
    const m = new Map<string, string>()
    tierEntries.forEach(e => e.curtainTypes.forEach(t => m.set(t.th, t.en)))
    return m
  }, [tierEntries])

  // tags: Thai-keyed curtain types for current cat scope
  const tags = useMemo(() => {
    const base = cat
      ? tierEntries.filter(e => e.mainCategories.some(c => c.th === cat))
      : tierEntries
    const set = new Set<string>()
    base.forEach(e => e.curtainTypes.forEach(t => set.add(t.th)))
    return Array.from(set)
  }, [tierEntries, cat])

  const filtered = useMemo(
    () =>
      tierEntries
        .filter(e => !cat || e.mainCategories.some(c => c.th === cat))
        .filter(e => !tag || e.curtainTypes.some(t => t.th === tag)),
    [tierEntries, cat, tag],
  )

  function changeTier(t: Tier) {
    setTier(t)
    setCat(null)
    setTag(null)
  }

  function changeCat(c: string | null) {
    setCat(c)
    setTag(null)
  }

  // Tier tab classes
  function tierCls(t: Tier) {
    const active = tier === t
    const isLuxTab = t === 'Luxury'
    if (active) {
      if (isLuxTab) return `${PILL} bg-[#c9a84c] text-[#0d0a05] border-transparent font-medium`
      if (isLux) return `${PILL} bg-[rgba(201,168,76,0.15)] text-[#e8d5a3] border-[rgba(201,168,76,0.3)]`
      return `${PILL} bg-ink text-canvas border-transparent`
    }
    if (isLux) {
      return isLuxTab
        ? `${PILL} border-[rgba(201,168,76,0.28)] text-[rgba(201,168,76,0.55)] hover:text-[#c9a84c] hover:border-[rgba(201,168,76,0.5)]`
        : `${PILL} border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.45)] hover:text-[#c9a84c] hover:border-[rgba(201,168,76,0.4)]`
    }
    return isLuxTab
      ? `${PILL} border-ink/10 text-[#a07830]/70 hover:text-[#c9a84c] hover:border-[rgba(192,160,80,0.4)]`
      : `${PILL} border-ink/20 text-ink/55 hover:text-ink hover:border-ink/40`
  }

  // Category pill classes
  function catCls(c: string | null) {
    const active = c === cat
    if (isLux) {
      return active
        ? `${PILL} bg-[#c9a84c] text-[#0d0a05] border-transparent`
        : `${PILL} border-[rgba(201,168,76,0.22)] text-[rgba(201,168,76,0.52)] hover:text-[#c9a84c] hover:border-[rgba(201,168,76,0.44)]`
    }
    return active
      ? `${PILL} bg-sage text-canvas border-transparent`
      : `${PILL} border-ink/20 text-ink/55 hover:text-ink hover:border-ink/40`
  }

  // Tag pill classes
  function tagCls(t: string) {
    const active = t === tag
    if (isLux) {
      return active
        ? `${PILL} border-[rgba(201,168,76,0.55)] text-[#c9a84c] bg-[rgba(201,168,76,0.08)]`
        : `${PILL} border-[rgba(201,168,76,0.15)] text-[rgba(201,168,76,0.4)] hover:text-[#c9a84c] hover:border-[rgba(201,168,76,0.35)]`
    }
    return active
      ? `${PILL} bg-surface text-ink border-transparent`
      : `${PILL} border-ink/15 text-ink/45 hover:text-ink/65 hover:border-ink/25`
  }

  return (
    <section
      id="portfolio"
      aria-label={lang === 'th' ? 'ผลงานของเรา' : 'Our portfolio'}
      className="py-[72px] transition-colors duration-500 md:py-[120px]"
      style={{ backgroundColor: isLux ? L.bg : 'var(--color-surface)' }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Header */}
        <FadeIn>
          <p
            className="font-dm-sans text-[11px] uppercase tracking-[0.2em]"
            style={{ color: isLux ? L.gold : 'var(--color-sage)' }}
          >
            Portfolio
          </p>
          <h2
            className={`mt-3 text-[32px] leading-[1.25] md:text-[40px] ${
              lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic'
            }`}
            style={{ color: isLux ? L.champ : 'var(--color-ink)' }}
          >
            {lang === 'th' ? 'ผลงานของเรา' : 'Our Work'}
          </h2>
        </FadeIn>

        {/* Tier tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {TIER_ORDER.map(t => (
            <button key={t} onClick={() => changeTier(t)} className={tierCls(t)}>
              {t === 'Luxury' ? (
                <span className="flex items-center gap-1.5">
                  <span>Luxury</span>
                  <span
                    style={{
                      color: tier === t ? '#0d0a05' : '#c9a84c',
                      fontSize: 9,
                      lineHeight: 1,
                    }}
                  >
                    ✦
                  </span>
                </span>
              ) : (
                t
              )}
            </button>
          ))}
        </div>

        {/* Category filter (only when > 1 category exists in tier) */}
        {cats.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => changeCat(null)} className={catCls(null)}>
              {lang === 'th' ? 'ทั้งหมด' : 'All'}
            </button>
            {cats.map(c => (
              <button key={c} onClick={() => changeCat(c)} className={catCls(c)}>
                {lang === 'th' ? c : (CAT_EN[c] ?? c)}
              </button>
            ))}
          </div>
        )}

        {/* Sub-tag filter (curtain types) */}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setTag(tag === t ? null : t)}
                className={tagCls(t)}
              >
                {lang === 'th' ? t : (tagMap.get(t) ?? t)}
              </button>
            ))}
          </div>
        )}

        {/* Count */}
        <p
          className="mt-5 font-dm-sans text-[11px]"
          style={{ color: isLux ? L.muted : 'rgba(20,18,15,0.4)' }}
        >
          {filtered.length} {lang === 'th' ? 'ผลงาน' : 'projects'}
          {filtered.some(e => e.isPlaceholder) && (
            <span className="ml-2 opacity-60">
              · {lang === 'th' ? 'บางรายการเป็น placeholder' : 'some are placeholders'}
            </span>
          )}
        </p>

        {/* Card grid — 2-col for Luxury, 3-col otherwise */}
        <div
          className={`mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 ${
            isLux ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
          }`}
        >
          {filtered.map(entry =>
            isLux ? (
              <LuxuryCard key={entry.id} entry={entry} lang={lang} />
            ) : (
              <StandardCard key={entry.id} entry={entry} lang={lang} />
            ),
          )}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Standard card (ทั่วไป + High-End)
// ---------------------------------------------------------------------------

function StandardCard({ entry, lang }: { entry: PortfolioEntry; lang: 'th' | 'en' }) {
  const [mainIdx, setMainIdx] = useState(0)
  const mainUrl = entry.imageUrls[mainIdx] ?? ''
  const hasMultiple = entry.imageUrls.length > 1

  return (
    <div className="group overflow-hidden rounded-sm border border-surface bg-canvas transition-shadow hover:shadow-md">
      {/* Main image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-surface to-sage/15">
        {mainUrl ? (
          <img src={mainUrl} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-dm-sans text-[10px] uppercase tracking-[0.2em] text-sage/30">
            {lang === 'th' ? 'รูปภาพ' : 'Photo'}
          </span>
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-canvas/90 px-2.5 py-1 font-dm-sans text-[10px] uppercase tracking-[0.1em] text-ink">
          {entry.mainCategories.map(c => c[lang]).join(' · ')}
        </span>
        {entry.imageUrls.length > 1 && (
          <span className="absolute right-3 top-3 rounded-full bg-ink/65 px-2 py-0.5 font-dm-sans text-[9px] text-canvas">
            {mainIdx + 1} / {entry.imageUrls.length}
          </span>
        )}
        {entry.isPlaceholder && (
          <span className="absolute right-3 top-3 rounded-full bg-sand/75 px-2 py-0.5 font-dm-sans text-[9px] uppercase tracking-[0.1em] text-canvas">
            demo
          </span>
        )}
      </div>

      {/* Thumbnail strip */}
      {hasMultiple && (
        <div
          className="flex gap-1 overflow-x-auto bg-surface/60 px-1.5 py-1.5"
          style={{ scrollbarWidth: 'none' }}
        >
          {entry.imageUrls.map((url, i) => (
            <button
              key={i}
              onClick={() => setMainIdx(i)}
              className={`h-11 w-11 shrink-0 overflow-hidden rounded-[2px] border-2 transition-opacity ${
                i === mainIdx
                  ? 'border-sage opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={url} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Info */}
      <div className="p-4">
        <p className="font-dm-sans text-[10px] text-ink/40">
          {entry.date} · {entry.province[lang]}
        </p>
        <p className="mt-1 font-sarabun text-sm leading-[1.6] text-ink">
          {entry.location[lang]}
        </p>
        {entry.curtainTypes.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {entry.curtainTypes.map(t => (
              <span
                key={t.th}
                className="rounded-full bg-surface px-2.5 py-0.5 font-dm-sans text-[10px] text-ink/60"
              >
                {t[lang]}
              </span>
            ))}
          </div>
        )}
        <div className="mt-2 flex flex-wrap gap-x-3 font-dm-sans text-[10px] text-ink/40">
          {entry.lightBlocking !== '-' && <span>{entry.lightBlocking}</span>}
          {entry.propertyType[lang] !== '-' && <span>{entry.propertyType[lang]}</span>}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Luxury card — gold/espresso theme, process+result gallery
// ---------------------------------------------------------------------------

function LuxuryCard({ entry, lang }: { entry: PortfolioEntry; lang: 'th' | 'en' }) {
  const isProcessResult = entry.imageType === 'process-and-result'

  return (
    <div
      className="group overflow-hidden rounded-sm transition-shadow hover:shadow-[0_4px_32px_rgba(201,168,76,0.12)]"
      style={{ background: L.card, border: `1px solid ${L.border}` }}
    >
      {/* Gallery area */}
      {isProcessResult ? (
        <>
          <div className="grid grid-cols-3 gap-px" style={{ backgroundColor: L.border }}>
            {/* Process slots */}
            {[0, 1].map(i => {
              const url = entry.processImageUrls?.[i] ?? ''
              return (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden"
                  style={{ background: L.slot }}
                >
                  {url ? (
                    <img src={url} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-0.5">
                      <span
                        className="font-dm-sans text-[8px] uppercase tracking-[0.15em]"
                        style={{ color: L.gold, opacity: 0.4 }}
                      >
                        {lang === 'th' ? 'กระบวนการ' : 'Process'}
                      </span>
                      <span className="font-dm-sans text-[8px]" style={{ color: L.gold, opacity: 0.2 }}>
                        {i + 1}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
            {/* Result slot */}
            <div
              className="relative aspect-square overflow-hidden"
              style={{ background: L.slot }}
            >
              {entry.imageUrls[0] ? (
                <img src={entry.imageUrls[0]} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span
                    className="font-dm-sans text-[8px] uppercase tracking-[0.15em]"
                    style={{ color: L.gold, opacity: 0.4 }}
                  >
                    {lang === 'th' ? 'ผลลัพธ์' : 'Result'}
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* Gallery label strip */}
          <div
            className="flex items-center justify-center py-1.5"
            style={{ background: L.strip }}
          >
            <span
              className="font-dm-sans text-[8px] uppercase tracking-[0.2em]"
              style={{ color: L.gold, opacity: 0.7 }}
            >
              {lang === 'th' ? 'กระบวนการ + ผลลัพธ์' : 'Process + Result'}
            </span>
          </div>
        </>
      ) : (
        <div className="relative aspect-[4/3]" style={{ background: L.slot }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-dm-sans text-[10px] uppercase tracking-[0.15em]"
              style={{ color: L.gold, opacity: 0.3 }}
            >
              {lang === 'th' ? 'รูปภาพ' : 'Photo'}
            </span>
          </div>
          <span
            className="absolute bottom-3 left-3 rounded-full px-2.5 py-1 font-dm-sans text-[10px] uppercase tracking-[0.1em]"
            style={{ background: 'rgba(201,168,76,0.1)', color: L.gold }}
          >
            {entry.mainCategories.map(c => c[lang]).join(' · ')}
          </span>
        </div>
      )}

      {/* Info */}
      <div className="p-4" style={{ borderTop: `1px solid ${L.border}` }}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-dm-sans text-[10px]" style={{ color: L.muted }}>
              {entry.date} · {entry.province[lang]}
            </p>
            <p className="mt-1 font-sarabun text-sm leading-[1.6]" style={{ color: L.champ }}>
              {entry.location[lang]}
            </p>
          </div>
          {entry.isPlaceholder && (
            <span
              className="mt-0.5 shrink-0 rounded-full border px-2 py-0.5 font-dm-sans text-[8px] uppercase tracking-[0.1em]"
              style={{ borderColor: L.border, color: L.muted }}
            >
              demo
            </span>
          )}
        </div>

        {/* Multi-category badges (for combined projects) */}
        {entry.mainCategories.length > 1 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {entry.mainCategories.map(c => (
              <span
                key={c.th}
                className="rounded-full border px-2.5 py-0.5 font-dm-sans text-[10px]"
                style={{ borderColor: 'rgba(201,168,76,0.22)', color: L.gold }}
              >
                {c[lang]}
              </span>
            ))}
          </div>
        )}

        {entry.curtainTypes.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {entry.curtainTypes.map(t => (
              <span
                key={t.th}
                className="rounded-full border px-2.5 py-0.5 font-dm-sans text-[10px]"
                style={{ borderColor: L.border, color: L.gold }}
              >
                {t[lang]}
              </span>
            ))}
          </div>
        )}

        <div
          className="mt-2.5 flex flex-wrap gap-x-4 font-dm-sans text-[10px]"
          style={{ color: L.muted }}
        >
          {entry.lightBlocking !== '-' && <span>{entry.lightBlocking}</span>}
          {entry.propertyType[lang] !== '-' && <span>{entry.propertyType[lang]}</span>}
        </div>
      </div>
    </div>
  )
}

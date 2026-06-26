'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useMotionValue,
  useAnimationFrame,
} from 'framer-motion'
import { useLang } from '@/lib/lang'
import { HERO_CARDS as CARDS, type CardDef } from '@/lib/hero-cards'

// Card data lives in lib/hero-cards.ts (single source of truth) so layout/animation
// edits to this component can never revert the images or captions again.

const COPY = {
  th: {
    brand: 'ม่านเมืองนนท์',
    eyebrow: 'ร้านผ้าม่านนนทบุรี',
    tagline: 'ตกแต่งบ้านให้เป็นคุณ',
    desc: 'ม่านสั่งตัด วอลเปเปอร์ และกระเบื้อง\nติดตั้งโดยทีมช่างผู้เชี่ยวชาญ',
    cta1: 'ติดต่อเรา',
    cta2: 'ดูผลงาน →',
    view: 'ดู',
  },
  en: {
    brand: 'Maan Mueang Nont',
    eyebrow: 'Interior Décor · Nonthaburi',
    tagline: 'Your space, beautifully dressed.',
    desc: 'Custom curtains, wallpaper & tiles —\nmeasured and installed by craftsmen.',
    cta1: 'Contact Us',
    cta2: 'View Portfolio →',
    view: 'View',
  },
}

// Layout constants
const CARD_W   = 280  // desktop card width (px)
const CARD_H   = 70   // desktop card height (svh) — uniform
const ZIGZAG   = 14   // desktop stagger: even-index=0svh, odd-index=14svh
const GAP      = 16   // marginRight per card (px)
const DUR_DESKTOP = 55 // seconds for one full set to pass (auto-scroll speed)
const DUR_MOBILE  = 30 // seconds for one full set of full-width images to pass

// Keep x within one set width so the duplicated track loops seamlessly.
const wrapVal = (min: number, max: number, v: number) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v))

// ── Individual card with smooth Framer Motion hover ──────────────────────────
function GalleryCard({
  card, lang, noMotion, width, height, topOffset,
}: {
  card: CardDef
  lang: 'th' | 'en'
  noMotion: boolean
  width: number
  height: string  // CSS value e.g. "70svh" or "300px"
  topOffset: number | string
}) {
  const [hovered, setHovered] = useState(false)
  const active = hovered && !noMotion
  const spring = { type: 'spring' as const, stiffness: 260, damping: 26 }

  return (
    <motion.div
      className="shrink-0 select-none"
      style={{
        marginRight: GAP,
        width,
        marginTop: topOffset,
        filter: 'drop-shadow(0 8px 20px rgba(164,141,120,0.20)) drop-shadow(0 2px 6px rgba(164,141,120,0.12))',
      }}
      animate={active ? { y: -8 } : { y: 0 }}
      transition={spring}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <a href="#portfolio" className="block" tabIndex={-1} draggable={false}>
        {/* Image wrapper — clips the scale-in zoom */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ width, height }}
        >
          {/* Image zooms in gently on hover */}
          <motion.div
            className="absolute inset-0"
            animate={active ? { scale: 1.06 } : { scale: 1 }}
            transition={spring}
          >
            <Image
              src={card.src}
              alt={card.alt[lang]}
              fill
              sizes={`${width * 2}px`}
              quality={90}
              draggable={false}
              style={{ objectFit: 'cover', objectPosition: card.objectPosition }}
            />
          </motion.div>

          {/* Dark overlay — fades in softly */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            animate={{ backgroundColor: active ? 'rgba(20,18,15,0.40)' : 'rgba(20,18,15,0)' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />

          {/* View badge */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-canvas/75 bg-canvas/10 font-dm-sans text-[11px] uppercase tracking-[0.1em] text-canvas backdrop-blur-[2px]">
              {COPY[lang].view}
            </span>
          </motion.div>
        </div>

        <div className="mt-2.5">
          <p className="font-sarabun text-[13px] leading-[1.35] text-ink">
            {card.label[lang]}
          </p>
          <p className="mt-0.5 font-dm-sans text-[10px] tracking-[0.04em] text-ink/40">
            {card.sub}
          </p>
        </div>
      </a>
    </motion.div>
  )
}

// ── Draggable / swipeable auto-scrolling marquee ─────────────────────────────
// Auto-scrolls to the right by default; pointer drag (mouse) or swipe (touch)
// scrubs through manually, with inertia on release, then auto resumes.
function DraggableMarquee({
  cards, lang, noMotion, width, height, zigzag, zigzagUnit, durationSec,
}: {
  cards: CardDef[]
  lang: 'th' | 'en'
  noMotion: boolean
  width: number
  height: string
  zigzag: number
  zigzagUnit: 'svh' | 'px'
  durationSec: number
}) {
  const x = useMotionValue(0)
  const setWidth = cards.length * (width + GAP)
  const speed = setWidth / durationSec        // px/s — auto-scroll to the right
  const dragging = useRef(false)
  const hovering = useRef(false)
  const momentum = useRef(0)                   // px/s carried from a release
  const moved = useRef(0)                      // total drag distance (click guard)
  const wasDragged = useRef(false)

  useAnimationFrame((_, delta) => {
    if (dragging.current) return                // manual control owns position
    const dt = Math.min(delta, 64) / 1000       // clamp to avoid jumps after tab refocus
    const auto = noMotion || hovering.current ? 0 : speed
    let m = momentum.current
    x.set(wrapVal(-setWidth, 0, x.get() + (auto + m) * dt))
    // frame-rate-independent friction (~0.94 per 60fps frame)
    m *= Math.pow(0.94, delta / 16.67)
    if (Math.abs(m) < 2) m = 0
    momentum.current = m
  })

  return (
    <motion.div
      className="flex select-none items-start"
      style={{ x, touchAction: 'pan-y', cursor: 'grab' }}
      whileTap={{ cursor: 'grabbing' }}
      onPanStart={() => {
        dragging.current = true
        momentum.current = 0
        moved.current = 0
      }}
      onPan={(_, info) => {
        moved.current += Math.abs(info.delta.x)
        x.set(wrapVal(-setWidth, 0, x.get() + info.delta.x))
      }}
      onPanEnd={(_, info) => {
        dragging.current = false
        wasDragged.current = moved.current > 6
        momentum.current = clamp(info.velocity.x, -2200, 2200)
      }}
      onHoverStart={() => { hovering.current = true }}
      onHoverEnd={() => { hovering.current = false }}
      onClickCapture={(e) => {
        // Swallow the click that ends a drag so it doesn't trigger card navigation.
        if (wasDragged.current) {
          e.preventDefault()
          e.stopPropagation()
          wasDragged.current = false
        }
      }}
    >
      {[...cards, ...cards].map((card, i) => (
        <GalleryCard
          key={i}
          card={card}
          lang={lang}
          noMotion={noMotion}
          width={width}
          height={height}
          topOffset={`${(i % 2) * zigzag}${zigzagUnit}`}
        />
      ))}
    </motion.div>
  )
}

// ── Mobile full-width marquee ────────────────────────────────────────────────
// Clean, simple mobile treatment: each image is full viewport width in a fixed
// 3:4 portrait frame (matching the photos' natural ratio, so the whole image is
// visible — no bottom crop, no squish), flowing horizontally (auto-scroll right,
// seamless loop) with swipe + inertia. No zigzag, no captions, no zoom.
function MobileHeroMarquee({
  cards, lang, noMotion,
}: {
  cards: CardDef[]
  lang: 'th' | 'en'
  noMotion: boolean
}) {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const setWidth = useRef(0)          // one set width in px (cards.length × viewport width)
  const dragging = useRef(false)
  const momentum = useRef(0)

  // Measure one set width from the live container so the loop stays seamless on resize.
  useEffect(() => {
    const measure = () => {
      const w = containerRef.current?.clientWidth ?? window.innerWidth
      setWidth.current = cards.length * w
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [cards.length])

  useAnimationFrame((_, delta) => {
    if (dragging.current) return
    const sw = setWidth.current
    if (!sw) return
    const dt = Math.min(delta, 64) / 1000
    const auto = noMotion ? 0 : sw / DUR_MOBILE   // px/s — scroll right, same as desktop
    let m = momentum.current
    x.set(wrapVal(-sw, 0, x.get() + (auto + m) * dt))
    m *= Math.pow(0.94, delta / 16.67)
    if (Math.abs(m) < 2) m = 0
    momentum.current = m
  })

  return (
    <div
      ref={containerRef}
      // Mobile hero sizing: a STATIC 3:4 portrait frame (matches the hero photos'
      // natural ~3:4 ratio) so every image shows fully — no bottom crop, no squish.
      // We deliberately do NOT use 100dvh/100vh here: a dynamic-viewport height
      // resizes as the Android address bar shows/hides, and with object-fit:cover
      // that rescale reads as a scroll-linked "zoom". A static aspect-ratio frame
      // sits still and removes that effect entirely.
      className="relative aspect-[3/4] w-full overflow-hidden"
    >
      <motion.div
        className="flex h-full select-none"
        style={{ x, touchAction: 'pan-y', cursor: 'grab' }}
        whileTap={{ cursor: 'grabbing' }}
        onPanStart={() => { dragging.current = true; momentum.current = 0 }}
        onPan={(_, info) => {
          x.set(wrapVal(-setWidth.current, 0, x.get() + info.delta.x))
        }}
        onPanEnd={(_, info) => {
          dragging.current = false
          momentum.current = clamp(info.velocity.x, -2200, 2200)
        }}
      >
        {[...cards, ...cards].map((card, i) => (
          <div key={i} className="relative h-full w-full shrink-0">
            <Image
              src={card.src}
              alt={card.alt[lang]}
              fill
              sizes="100vw"
              quality={85}
              draggable={false}
              style={{ objectFit: 'cover', objectPosition: card.objectPosition }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// ── Main section ─────────────────────────────────────────────────────────────
export function HeroGallery() {
  const noMotion = useReducedMotion() ?? false
  const { lang } = useLang()
  const copy = COPY[lang]

  return (
    <section
      // Height: desktop keeps a fixed 100svh canvas (its marquee/text are absolutely
      // positioned and fill it). Mobile intentionally has NO fixed height — it sizes
      // to its content (header + full 3:4 image) so the image is never clipped by the
      // viewport on short devices.
      className="relative overflow-hidden lg:h-[100svh] lg:min-h-[640px]"
      style={{
        background: 'linear-gradient(150deg, #FAF9F6 0%, #F4F1EA 45%, #E6DAC8 100%)',
      }}
      aria-label={lang === 'th' ? 'ส่วนแนะนำหลัก' : 'Hero section'}
    >

      {/* ── DESKTOP (lg+) ─────────────────────── */}

      {/* Left text column */}
      <div
        className="absolute inset-y-0 left-0 z-20 hidden w-[300px] flex-col justify-center px-10 pb-8 lg:flex"
        style={{ paddingTop: '10svh' }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 to-transparent" />
        <div className="relative z-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="font-dm-sans text-[10px] uppercase tracking-[0.22em] text-sage">
                {copy.eyebrow}
              </p>
              <h1 className="font-sov-wong mt-3 text-[52px] leading-[1.05] text-ink xl:text-[62px]">
                {copy.brand}
              </h1>
              <p className="mt-3 font-sarabun text-[15px] font-light leading-[1.65] text-ink/60">
                {copy.tagline}
              </p>
              <p className="mt-2 whitespace-pre-line font-sarabun text-[12px] leading-[1.85] text-ink/40">
                {copy.desc}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#contact"
                  className="flex h-10 w-fit items-center rounded-full border border-ink/30 px-6 font-dm-sans text-[12px] tracking-[0.08em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-canvas"
                >
                  {copy.cta1}
                </a>
                <a
                  href="#portfolio"
                  className="font-dm-sans text-[12px] tracking-[0.08em] text-ink/45 underline decoration-transparent underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/25"
                >
                  {copy.cta2}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop marquee strip */}
      <div
        className="absolute inset-0 hidden items-start overflow-hidden lg:flex"
        style={{ paddingTop: '8svh' }}
        aria-hidden="true"
      >
        <DraggableMarquee
          cards={CARDS}
          lang={lang}
          noMotion={noMotion}
          width={CARD_W}
          height={`${CARD_H}svh`}
          zigzag={ZIGZAG}
          zigzagUnit="svh"
          durationSec={DUR_DESKTOP}
        />
      </div>

      {/* Right-edge vignette */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-28 bg-gradient-to-l from-[#F4F1EA]/60 to-transparent lg:block" />

      {/* ── MOBILE (< lg) ─────────────────────── */}
      <div className="flex flex-col pt-[72px] pb-8 lg:hidden">

        {/* Mobile text header */}
        <div className="shrink-0 px-5 pt-3 pb-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.35 }}
            >
              <p className="font-dm-sans text-[10px] uppercase tracking-[0.2em] text-sage">
                {copy.eyebrow}
              </p>
              <h1 className="font-sov-wong mt-2 text-[40px] leading-[1.05] text-ink">
                {copy.brand}
              </h1>
              <p className="mt-2 font-sarabun text-[15px] font-light text-ink/55">
                {copy.tagline}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="#contact"
                  className="flex h-9 items-center rounded-full border border-ink/30 px-5 font-dm-sans text-[11px] tracking-[0.07em] text-ink"
                >
                  {copy.cta1}
                </a>
                <a
                  href="#portfolio"
                  className="font-dm-sans text-[11px] tracking-[0.07em] text-ink/45 underline decoration-transparent underline-offset-4"
                >
                  {copy.cta2}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile marquee strip — simple full-width images flowing horizontally */}
        <div className="flex flex-1 items-center" aria-hidden="true">
          <MobileHeroMarquee cards={CARDS} lang={lang} noMotion={noMotion} />
        </div>

      </div>

    </section>
  )
}

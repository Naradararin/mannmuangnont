'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
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

// ── Subtle swipe hint ────────────────────────────────────────────────────────
// An icon-only right chevron that gently nudges sideways to signal the hero
// gallery is horizontally swipeable/draggable. Transform-only animation (reliable
// in this stack) and stilled under reduced-motion. `tone` adapts to the backdrop:
// 'light' for the cream desktop bg, 'dark' (with a soft shadow for legibility over
// bright photos) for mobile. Positioning is owned by the caller's wrapper so the
// motion transform here never fights a layout translate.
function SwipeHint({
  noMotion, tone,
}: {
  noMotion: boolean
  tone: 'light' | 'dark'
}) {
  const color = tone === 'dark' ? 'text-canvas/85' : 'text-ink/40'
  const shadow = tone === 'dark' ? 'drop-shadow-[0_1px_6px_rgba(20,18,15,0.55)]' : ''
  return (
    <motion.span
      aria-hidden
      className={`flex ${color} ${shadow}`}
      animate={noMotion ? undefined : { x: [0, 5, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <ChevronRight size={tone === 'dark' ? 28 : 16} strokeWidth={1.75} />
    </motion.span>
  )
}

// Layout constants
const CARD_W   = 280  // desktop card width (px)
const CARD_H   = 70   // desktop card height (svh) — uniform
const ZIGZAG   = 14   // desktop stagger: even-index=0svh, odd-index=14svh
const GAP      = 16   // marginRight per card (px)
const DUR_DESKTOP = 55 // seconds for one full set to pass (auto-scroll speed)
const MOBILE_PEEK = 40 // px of the next hero image left visible on the right edge

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
          className="img-skeleton relative overflow-hidden rounded-2xl"
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

// ── Mobile hero (full-screen, overlaid text, swipeable) ──────────────────────
// Mobile treatment (< lg): a full-screen vertical hero. The brand text + contact
// button sit overlaid on the lower-left over a warm scrim; the photo behind it is
// a horizontal scroll-snap carousel where the next image peeks from the right edge
// to signal swipeability. Native swipe (momentum) + a gentle auto-advance that
// pauses after the user interacts and is disabled under reduced-motion.
//
// Height comes from the section (max-lg:h-[100svh]). We use svh, NOT dvh/vh: a
// dynamic-viewport height resizes as the Android address bar shows/hides, and with
// object-fit:cover that rescale reads as a scroll-linked "zoom". svh stays put.
function MobileHero({
  cards, lang, noMotion,
}: {
  cards: CardDef[]
  lang: 'th' | 'en'
  noMotion: boolean
}) {
  const copy = COPY[lang]
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // step = the snap distance between slides (slide width). Slides are PEEK px
  // narrower than the viewport so the next image peeks on the right.
  const stepOf = (el: HTMLDivElement) => el.clientWidth - MOBILE_PEEK

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setActive(Math.round(el.scrollLeft / stepOf(el)))
  }

  const goTo = (i: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: stepOf(el) * i, behavior: 'smooth' })
  }

  // Gentle auto-advance; pause for a few seconds whenever the user interacts.
  useEffect(() => {
    if (noMotion) return
    const el = scrollRef.current
    if (!el) return
    let paused = false
    let resume: ReturnType<typeof setTimeout>
    const pause = () => {
      paused = true
      clearTimeout(resume)
      resume = setTimeout(() => { paused = false }, 6000)
    }
    el.addEventListener('pointerdown', pause)
    el.addEventListener('touchstart', pause, { passive: true })
    el.addEventListener('wheel', pause, { passive: true })

    const id = setInterval(() => {
      if (paused) return
      const step = stepOf(el)
      const maxLeft = step * (cards.length - 1)
      const next = el.scrollLeft + step
      el.scrollTo({ left: next > maxLeft + 4 ? 0 : next, behavior: 'smooth' })
    }, 5000)

    return () => {
      clearInterval(id)
      clearTimeout(resume)
      el.removeEventListener('pointerdown', pause)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('wheel', pause)
    }
  }, [cards.length, noMotion])

  return (
    <div className="absolute inset-0 lg:hidden">
      {/* Swipeable photo carousel (background). Native scroll-snap + momentum. */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="absolute inset-0 flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="img-skeleton relative h-full shrink-0 snap-start"
            style={{ width: `calc(100% - ${MOBILE_PEEK}px)` }}
          >
            <Image
              src={card.src}
              alt={card.alt[lang]}
              fill
              sizes="92vw"
              quality={85}
              priority={i === 0}
              draggable={false}
              style={{ objectFit: 'cover', objectPosition: card.objectPosition }}
            />
          </div>
        ))}
      </div>

      {/* Warm scrim — keeps photos bright up top, text legible at the bottom. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(20,18,15,0.74) 0%, rgba(20,18,15,0.40) 26%, rgba(20,18,15,0) 52%)',
        }}
      />

      {/* Swipe hint — right edge, vertically centered. Sits over the next-image
          peek and stays clear of the lower-left text/dots and the bottom-right
          ContactFab, so nothing covers or clips it. */}
      <div className="pointer-events-none absolute right-3 top-1/2 z-10 -translate-y-1/2">
        <SwipeHint noMotion={noMotion} tone="dark" />
      </div>

      {/* Overlaid brand text + CTA (lower-left). Non-interactive areas let swipes
          pass through to the carousel; only the buttons/dots capture taps. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-9">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35 }}
          >
            <p className="font-dm-sans text-[10px] uppercase tracking-[0.2em] text-canvas/70">
              {copy.eyebrow}
            </p>
            <h1 className="font-sov-wong mt-2 text-[44px] leading-[1.04] text-canvas drop-shadow-[0_1px_12px_rgba(20,18,15,0.35)]">
              {copy.brand}
            </h1>
            <p className="mt-2 font-sarabun text-[15px] font-light leading-[1.6] text-canvas/85">
              {copy.tagline}
            </p>
            <div className="pointer-events-auto mt-5 flex items-center gap-4">
              <a
                href="#contact"
                className="flex h-11 items-center rounded-full bg-canvas px-7 font-dm-sans text-[12px] tracking-[0.07em] text-ink shadow-[0_4px_20px_rgba(20,18,15,0.25)] transition-colors active:bg-canvas/90"
              >
                {copy.cta1}
              </a>
              <a
                href="#portfolio"
                className="font-dm-sans text-[12px] tracking-[0.07em] text-canvas/80 underline decoration-canvas/30 underline-offset-4"
              >
                {copy.cta2}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Page dots — indicate multiple swipeable images. */}
        <div className="pointer-events-auto mt-6 flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={lang === 'th' ? `ไปที่ภาพที่ ${i + 1}` : `Go to image ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 20 : 6,
                backgroundColor: i === active ? 'rgba(250,249,246,0.95)' : 'rgba(250,249,246,0.45)',
              }}
            />
          ))}
        </div>
      </div>
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
      className="relative overflow-hidden max-lg:h-[100svh] lg:h-[100svh] lg:min-h-[640px]"
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

      {/* Desktop swipe hint — signals the gallery strip is draggable. Bottom-left,
          aligned with the text column, to avoid the bottom-right ContactFab. */}
      <div className="pointer-events-none absolute bottom-8 left-10 z-20 hidden lg:block">
        <SwipeHint noMotion={noMotion} tone="light" />
      </div>

      {/* ── MOBILE (< lg) ─────────────────────── */}
      <MobileHero cards={CARDS} lang={lang} noMotion={noMotion} />

    </section>
  )
}

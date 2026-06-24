// ─────────────────────────────────────────────────────────────────────────────
// Hero gallery card data — SINGLE SOURCE OF TRUTH for the homepage hero strip.
//
// This lives in its own module ON PURPOSE: the hero component (hero-gallery.tsx)
// gets rewritten whenever its layout/animation/drag behaviour changes, and past
// full-file rewrites silently reverted the image + captions back to stale values.
// Keeping the data here isolates it from that churn — edit captions/images here,
// and component edits can never clobber them again.
//
// NOTE: the Atmoz Palacio card intentionally uses the clean, no-watermark image
// `ddasdaavdftf.jpg` (NOT the old 494070972…_n.jpg). Do not revert it.
// ─────────────────────────────────────────────────────────────────────────────

export interface CardDef {
  src: string
  alt: { th: string; en: string }
  label: { th: string; en: string }
  sub: string
  objectPosition: string
}

// All cards share the same dimensions — zigzag stagger is computed from position index.
export const HERO_CARDS: CardDef[] = [
  {
    src: '/images/hero/473278.jpg',
    alt: { th: 'ห้องนั่งเล่น Luxury', en: 'Luxury living room' },
    label: { th: 'ห้องรับแขก Luxury', en: 'Luxury Living Room' },
    sub: 'Nonthaburi · 2025',
    objectPosition: 'center 30%',
  },
  {
    src: '/images/hero/473176.jpg',
    alt: { th: 'เทพรักษ์ 49', en: 'Thep Rak 49' },
    label: { th: 'เทพรักษ์ 49', en: 'Thep Rak 49' },
    sub: 'Bangkok · 2024',
    objectPosition: 'center center',
  },
  {
    src: '/images/hero/486829305.jpg',
    alt: { th: 'เชียงรากน้อย', en: 'Chiang Rak Noi' },
    label: { th: 'เชียงรากน้อย', en: 'Chiang Rak Noi' },
    sub: 'Ayutthaya · 2025',
    objectPosition: 'center 20%',
  },
  {
    src: '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487128880_1095747385899033_601038362133267568_n.jpg',
    alt: { th: 'เชียงรากน้อย', en: 'Chiang Rak Noi' },
    label: { th: 'เชียงรากน้อย', en: 'Chiang Rak Noi' },
    sub: 'Ayutthaya · 2025',
    objectPosition: 'center 40%',
  },
  {
    src: '/images/hero/473291.jpg',
    alt: { th: 'เทพรักษ์ 49', en: 'Thep Rak 49' },
    label: { th: 'เทพรักษ์ 49', en: 'Thep Rak 49' },
    sub: 'Bangkok · 2024',
    objectPosition: 'center center',
  },
  {
    src: '/images/portfolio/kave-pop-salaya-19-10-25/564234071_1264136789060091_1744282931963897644_n.jpg',
    alt: { th: 'Kave Pop Salaya', en: 'Kave Pop Salaya' },
    label: { th: 'Kave Pop Salaya', en: 'Kave Pop Salaya' },
    sub: 'Bangkok · 2025',
    objectPosition: 'center center',
  },
  {
    // Clean, no-watermark image — see note at top of file. Do not revert to 494070972…_n.jpg.
    src: '/images/hero/ddasdaavdftf.jpg',
    alt: { th: 'Atmoz Palacio', en: 'Atmoz Palacio' },
    label: { th: 'Atmoz Palacio', en: 'Atmoz Palacio' },
    sub: 'Bangkok · 2025',
    objectPosition: 'center center',
  },
]

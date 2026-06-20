'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Placeholder } from '@/components/ui/placeholder'
import { useLang } from '@/lib/lang'

const SLIDES = {
  th: [
    {
      label: 'ผ้าม่าน',
      title: 'ตกแต่งบ้าน',
      roman: 'Takataeng Ban',
      subtitle: 'beautifully.',
      desc: 'ม่านสั่งตัด เนื้อผ้าคุณภาพ ติดตั้งโดยทีมช่างผู้เชี่ยวชาญ',
    },
    {
      label: 'วอลเปเปอร์',
      title: 'เติมเรื่องราว',
      roman: 'Toem Rueangrao',
      subtitle: 'to every wall.',
      desc: 'วอลเปเปอร์นำเข้า ลายธรรมชาติและเรขาคณิต ทนความชื้น',
    },
    {
      label: 'กระเบื้อง',
      title: 'พื้นที่ที่',
      roman: 'Phuenthi Thi',
      subtitle: 'is built to last.',
      desc: 'กระเบื้องคอลเลกชันอิตาลี เลือกลายและขนาดให้เข้ากับพื้นที่จริง',
    },
  ],
  en: [
    {
      label: 'Curtains',
      title: 'Your home,',
      roman: 'Your Home',
      subtitle: 'beautifully dressed.',
      desc: 'Custom curtains in premium fabrics, measured and installed by expert craftsmen.',
    },
    {
      label: 'Wallpaper',
      title: 'A story',
      roman: 'A Story',
      subtitle: 'on every wall.',
      desc: 'Imported wallpaper in nature and geometric prints, moisture-resistant.',
    },
    {
      label: 'Floor Tiles',
      title: 'A space',
      roman: 'A Space',
      subtitle: 'built to last.',
      desc: 'Italian tile collections — matched to your space for size, style, and finish.',
    },
  ],
}

const CTA = {
  th: { primary: 'ติดต่อเรา', secondary: 'ดูผลงาน →' },
  en: { primary: 'Contact Us', secondary: 'View Portfolio →' },
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { lang } = useLang()
  const slides = SLIDES[lang]

  useEffect(() => {
    if (paused || shouldReduceMotion) return
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused, shouldReduceMotion, slides.length])

  const slide = slides[active]

  return (
    <section
      aria-label={lang === 'th' ? 'ส่วนแนะนำหลัก' : 'Hero banner'}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${active}-${lang}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Placeholder className="h-full w-full" label={slide.label} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 px-6 pb-16 md:px-16 md:pb-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-${lang}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-canvas/80">
                {slide.label} · Interior Décor
              </p>
              <h1 className="mt-3 font-drdeco text-[52px] uppercase leading-none tracking-wide text-canvas md:text-[88px]">
                {slide.roman}
              </h1>
              <p className="mt-1 font-ekkamai font-bold text-[18px] leading-snug text-canvas/55 md:text-[22px]">
                {slide.title}
              </p>
              <p className="mt-1 font-cormorant text-[20px] italic text-canvas/70 md:text-[26px]">
                {slide.subtitle}
              </p>
              <p className="mt-3 max-w-md font-sarabun text-sm leading-[1.8] text-canvas/80 md:text-base">
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex shrink-0 items-center gap-4">
            {slides.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                aria-label={`${lang === 'th' ? 'ไปที่สไลด์' : 'Go to slide'} ${s.label}`}
                aria-current={i === active}
                className="font-cormorant text-sm text-canvas/50 transition-colors hover:text-canvas"
              >
                <span className={i === active ? 'text-canvas' : undefined}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[1280px] flex-wrap items-center gap-6">
          <a
            href="#contact"
            className="flex h-11 items-center rounded-full border border-canvas px-7 font-dm-sans text-[13px] tracking-[0.08em] text-canvas transition-colors hover:bg-canvas hover:text-ink"
          >
            {CTA[lang].primary}
          </a>
          <a
            href="#portfolio"
            className="font-dm-sans text-[13px] tracking-[0.08em] text-canvas underline decoration-transparent underline-offset-4 transition-colors hover:decoration-canvas"
          >
            {CTA[lang].secondary}
          </a>
        </div>
      </div>
    </section>
  )
}

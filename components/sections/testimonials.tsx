'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { FadeIn } from '@/components/motion/fade-in'
import { initialsAvatar } from '@/lib/avatar'
import { useLang } from '@/lib/lang'

const TESTIMONIALS = {
  th: [
    {
      name: 'คุณนภัสสร',
      designation: 'เจ้าของบ้าน · บางใหญ่',
      quote: 'ทีมงานสำรวจหน้างานละเอียดมาก ผ้าม่าน Blackout ที่เลือกให้เข้ากับห้องนอนพอดี ติดตั้งเรียบร้อย ไม่มีรอยตำหนิ',
    },
    {
      name: 'คุณธีรภัทร',
      designation: 'เจ้าของคอนโด · ปากเกร็ด',
      quote: 'วอลเปเปอร์ลายธรรมชาติที่แนะนำสวยกว่าที่คิดไว้มาก ช่างติดตั้งเก็บงานเรียบ ไม่มีฟองอากาศเลย',
    },
    {
      name: 'คุณกัญญารัตน์',
      designation: 'รีโนเวทบ้าน · เมืองนนท์',
      quote: 'เลือกกระเบื้องลายหินอ่อนสำหรับห้องครัว ทีมงานให้คำแนะนำเรื่องลายและขนาดได้ตรงใจ ใช้งานมาปีกว่ายังสวยเหมือนวันแรก',
    },
    {
      name: 'คุณอรรถพล',
      designation: 'เจ้าของทาวน์โฮม · ราชพฤกษ์',
      quote: 'ได้ใบเสนอราคาภายในวันเดียวตามที่บอกจริง ราคาชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง',
    },
  ],
  en: [
    {
      name: 'Naphatsorn',
      designation: 'Homeowner · Bang Yai',
      quote: 'The team surveyed every detail on-site. The Blackout curtains they recommended fit the bedroom perfectly — clean installation, zero flaws.',
    },
    {
      name: 'Teeraphat',
      designation: 'Condo Owner · Pak Kret',
      quote: 'The nature-print wallpaper they suggested looked even better than I imagined. The installer finished without a single air bubble.',
    },
    {
      name: 'Kanyarat',
      designation: 'Home Renovation · Mueang Nont',
      quote: 'Chose marble-look tiles for the kitchen — the team nailed the pattern and sizing advice. Over a year later it still looks brand new.',
    },
    {
      name: 'Attaphon',
      designation: 'Townhouse Owner · Ratchaphruek',
      quote: 'Got the detailed quote the same day, just like they promised. Clear pricing, no hidden fees whatsoever.',
    },
  ],
}

const HEADING = {
  th: { eyebrow: 'รีวิวลูกค้า', heading: 'เสียงจากลูกค้า' },
  en: { eyebrow: 'Testimonials', heading: 'What our clients say' },
}

export function Testimonials() {
  const { lang } = useLang()
  const h = HEADING[lang]
  const testimonials = TESTIMONIALS[lang].map((t, i) => ({
    ...t,
    src: initialsAvatar(t.name.replace(/^คุณ/, ''), i % 2 === 0 ? '#3f5b44' : '#b08d57'),
  }))

  const [active, setActive] = useState(0)
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  return (
    <section
      id="testimonials"
      aria-label={lang === 'th' ? 'เสียงจากลูกค้า' : 'Client testimonials'}
      className="mx-auto max-w-[1280px] px-6 py-[72px] md:px-10 md:py-[120px]"
    >
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20">

        {/* Left: heading + navigation */}
        <FadeIn className="flex flex-col">
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">
            {h.eyebrow}
          </p>
          <h2 className={`mt-3 text-[32px] leading-[1.25] text-ink md:text-[40px] ${lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic'}`}>
            {h.heading}
          </h2>

          <div className="mt-10 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label={lang === 'th' ? 'รีวิวก่อนหน้า' : 'Previous review'}
              className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={next}
              aria-label={lang === 'th' ? 'รีวิวถัดไป' : 'Next review'}
              className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`${lang === 'th' ? 'รีวิวที่' : 'Review'} ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-sage' : 'w-2 bg-sand/30'
                }`}
              />
            ))}
          </div>
        </FadeIn>

        {/* Right: quote */}
        <FadeIn>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="font-cormorant text-[72px] leading-none text-sand/50 select-none">"</p>
              <p className="mt-2 font-sarabun text-[17px] leading-[1.9] text-ink/80">
                {testimonials[active].quote}
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-sand/20 pt-8">
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  className="size-12 rounded-sm object-cover"
                />
                <div>
                  <p className="font-ekkamai font-light text-[17px] text-ink">
                    {testimonials[active].name}
                  </p>
                  <p className="mt-0.5 font-dm-sans text-[12px] tracking-[0.08em] text-sage">
                    {testimonials[active].designation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </FadeIn>

      </div>
    </section>
  )
}

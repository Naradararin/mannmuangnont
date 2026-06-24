'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/motion/fade-in'
import { useLang } from '@/lib/lang'

const CONTENT = {
  th: {
    eyebrow: 'เกี่ยวกับเรา',
    heading: 'ตกแต่งบ้าน\nให้เป็นคุณ',
    body: 'ม่านเมืองนนท์ก่อตั้งด้วยความเชื่อว่าบ้านทุกหลังสมควรได้รับการดูแลอย่างพิถีพิถัน ทีมงานของเราผสมผสานประสบการณ์กว่า 20 ปีกับความเข้าใจในรสนิยมของคนไทย เราคัดสรรผ้าม่าน วอลเปเปอร์ และกระเบื้อง จากแหล่งผลิตคุณภาพทั้งในและต่างประเทศ เพื่อให้คุณมั่นใจได้ว่าทุกชิ้นที่ติดตั้งในบ้านจะสวยงามและทนทาน',
    stats: [
      { value: '20+', label: 'ปีประสบการณ์' },
      { value: '500+', label: 'โครงการแล้วเสร็จ' },
      { value: '3', label: 'ผลิตภัณฑ์หลัก' },
    ],
    imageAlt: 'เจ้าของร้านม่านเมืองนนท์',
  },
  en: {
    eyebrow: 'About Us',
    heading: 'Making every\nhome yours.',
    body: 'Maan Mueang Nont was founded on the belief that every home deserves meticulous care. Our team blends over 20 years of expertise with a deep understanding of Thai aesthetics, curating curtains, wallpaper, and tiles from quality sources both local and international — so every piece installed in your home is beautiful and built to last.',
    stats: [
      { value: '20+', label: 'Years Experience' },
      { value: '500+', label: 'Projects Completed' },
      { value: '3', label: 'Core Products' },
    ],
    imageAlt: 'The owners of Maan Mueang Nont',
  },
}

export function About() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section
      id="about"
      aria-label={lang === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}
      className="mx-auto max-w-[1280px] px-6 py-[72px] md:px-10 md:py-[120px]"
    >
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        {/* Image */}
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/hero/16424.jpg"
              alt={c.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">
            {c.eyebrow}
          </p>
          <h2 className={`mt-4 whitespace-pre-line text-[36px] leading-[1.25] text-ink md:text-[52px] ${lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic leading-[1.1]'}`}>
            {c.heading}
          </h2>
          <p className="mt-6 font-sarabun text-sm leading-[1.9] text-ink/70">
            {c.body}
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-sand/30 pt-10">
            {c.stats.map((s) => (
              <div key={s.label}>
                <p className="font-cormorant text-[40px] italic leading-none text-sand">{s.value}</p>
                <p className="mt-2 font-dm-sans text-[11px] tracking-[0.08em] text-ink/55">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

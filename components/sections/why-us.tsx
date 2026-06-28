'use client'

import { ClipboardCheck, Clock, Hammer, Ruler } from 'lucide-react'
import { FadeIn, FadeInItem } from '@/components/motion/fade-in'
import { CountUp } from '@/components/motion/count-up'
import { useLang } from '@/lib/lang'

const CONTENT = {
  th: {
    eyebrow: 'ทำไมต้องเลือกเรา',
    items: [
      { n: 1, icon: ClipboardCheck, label: 'บริการครบวงจร', sub: 'Full Service', desc: 'ตั้งแต่ออกแบบจนถึงติดตั้ง' },
      { n: 2, icon: Ruler, label: 'สำรวจหน้างานฟรี', sub: 'Free Site Visit', desc: 'ทีมงานวัดหน้างานจริงทุกครั้ง' },
      { n: 3, icon: Hammer, label: 'ช่างชำนาญการ', sub: 'Expert Craft', desc: 'ติดตั้งโดยช่างมืออาชีพ' },
      { n: 4, icon: Clock, label: 'ใบเสนอราคา 24 ชม.', sub: 'Fast Quote', desc: 'รับใบเสนอราคาภายในวันเดียว' },
    ],
  },
  en: {
    eyebrow: 'Why Choose Us',
    items: [
      { n: 1, icon: ClipboardCheck, label: 'Full Service', sub: 'Design to installation', desc: 'One team handles everything from advice to fitting.' },
      { n: 2, icon: Ruler, label: 'Free Site Visit', sub: 'No charge, ever', desc: 'We come to your home to measure and advise.' },
      { n: 3, icon: Hammer, label: 'Expert Craft', sub: 'Trained craftsmen', desc: 'Every job is installed by experienced professionals.' },
      { n: 4, icon: Clock, label: 'Quote in 24 hrs', sub: 'Same-day response', desc: 'Receive a clear, itemised quote the same day.' },
    ],
  },
}

export function WhyUs() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section
      aria-label={lang === 'th' ? 'ทำไมต้องเลือกเรา' : 'Why choose us'}
      className="bg-surface"
    >
      <div className="mx-auto max-w-[1280px] px-6 pt-[72px] pb-[40px] md:px-10 md:py-[120px]">
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">
            {c.eyebrow}
          </p>
        </FadeIn>

        <FadeIn stagger className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {c.items.map((item) => (
            <FadeInItem key={item.n}>
              <item.icon className="size-6 text-sage" strokeWidth={1.5} />
              <CountUp value={item.n} className="mt-3 block font-cormorant text-[80px] leading-none text-sand" />
              <h3 className="mt-4 font-sarabun text-lg font-medium text-ink">{item.label}</h3>
              <p className="mt-1 font-dm-sans text-[13px] font-light text-ink/55">{item.sub}</p>
              <p className="mt-3 font-sarabun text-sm leading-[1.8] text-ink/70">{item.desc}</p>
            </FadeInItem>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SiLine } from 'react-icons/si'
import { FadeIn, FadeInItem } from '@/components/motion/fade-in'
import { useLang } from '@/lib/lang'
import { TILES_FAQ as FAQ } from '@/components/sections/tiles-faq'

// ---------------------------------------------------------------------------
// All facts on this page are drawn from the one real completed project in
// lib/portfolio-data.ts and from answers the shop owner gave directly.
// Nothing here is invented — do not add stats or claims without a verified
// source.
// ---------------------------------------------------------------------------

const FEATURES = {
  th: [
    { title: 'กันน้ำ', desc: 'ทนความชื้น ไม่บวมน้ำเมื่อโดนน้ำหกใส่' },
    { title: 'กันปลวก', desc: 'วัสดุสังเคราะห์ ปลวกไม่กัดกิน' },
    { title: 'ทนรอยขีดข่วน', desc: 'ใช้งานได้ทนทาน พื้นผิวไม่เป็นรอยง่าย' },
  ],
  en: [
    { title: 'Waterproof', desc: 'Resists moisture and won\u2019t swell when water is spilled on it' },
    { title: 'Termite-proof', desc: 'Synthetic material that termites cannot damage' },
    { title: 'Scratch-resistant', desc: 'Durable surface that resists scratching' },
  ],
}

const PROCESS = {
  th: [
    { title: 'รื้อพื้นเดิมออกก่อนเสมอ', desc: 'ทุกงานเริ่มจากรื้อพื้นเดิมออกก่อนปูใหม่ ไม่ปูทับพื้นเก่า' },
    { title: 'ปูกระเบื้องยาง SPC ระบบคลิ๊กล็อค', desc: 'ติดตั้งด้วยระบบคลิ๊กล็อค แข็งแรง ทนทาน' },
    { title: 'ระยะเวลาแล้วแต่ขนาดพื้นที่', desc: 'พื้นที่ไม่เกิน 30 ตร.ม. ใช้เวลาไม่เกิน 3 ชม. โดยประมาณ' },
  ],
  en: [
    { title: 'Old flooring is always removed first', desc: 'Every job starts by removing the existing floor — we never install over an old floor.' },
    { title: 'SPC Click-Lock installation', desc: 'Installed with a click-lock system for a strong, durable finish.' },
    { title: 'Time depends on area size', desc: 'For an area up to 30 sqm, installation takes about 3 hours or less.' },
  ],
}

const CONTENT = {
  th: {
    h1: 'กระเบื้องยาง นนทบุรี — ปูพื้น SPC คลิ๊กล็อค โดยม่านเมืองนนท์',
    intro: 'ม่านเมืองนนท์ รับรื้อพื้นเดิมและปูกระเบื้องยาง SPC ระบบคลิ๊กล็อคใหม่ ฐานร้านอยู่บางใหญ่ นนทบุรี รับทั้งบ้านพักอาศัยและงานโครงการ ให้บริการทั้งในนนทบุรีและกรุงเทพฯ สำรวจหน้างานฟรี ให้ใบเสนอราคาภายใน 24 ชม.',
    featuresEyebrow: 'คุณสมบัติกระเบื้องยาง SPC',
    processEyebrow: 'ขั้นตอนการทำงาน',
    scopeEyebrow: 'รับงานแบบไหนบ้าง',
    scopeText: 'รับทั้งบ้านพักอาศัยและงานโครงการ ไม่จำกัดเฉพาะที่พักอาศัย',
    projectEyebrow: 'ผลงานจริง',
    projectTitle: 'งานปูพื้นลายไม้ นนทบุรี',
    projectLinkLabel: 'ดูผลงานจริง →',
    areaEyebrow: 'พื้นที่ให้บริการ',
    areaText: 'ร้านตั้งอยู่ที่บางใหญ่ นนทบุรี ให้บริการในรัศมี 60-70 กม. รอบร้าน ครอบคลุมนนทบุรีทั้งจังหวัดและกรุงเทพฯ ทั่วถึง รวมถึงปริมณฑลใกล้เคียงอย่างปทุมธานี',
    faqEyebrow: 'คำถามที่พบบ่อย',
    ctaEyebrow: 'พร้อมเริ่มแล้วใช่ไหม',
    ctaHeading: 'นัดสำรวจหน้างานฟรี\nวันนี้',
  },
  en: {
    h1: 'Vinyl Flooring in Nonthaburi — SPC Click-Lock Installation by Maan Mueang Nont',
    intro: 'Maan Mueang Nont removes old flooring and installs new SPC click-lock vinyl flooring. Based in Bang Yai, Nonthaburi, we take on both residential homes and larger projects, serving Nonthaburi and Bangkok. Free on-site survey, quote within 24 hours.',
    featuresEyebrow: 'SPC Vinyl Flooring Features',
    processEyebrow: 'Our Process',
    scopeEyebrow: 'What Kind of Jobs We Take',
    scopeText: 'We take on both residential homes and larger projects — not limited to homes alone.',
    projectEyebrow: 'Real Project',
    projectTitle: 'Wood Grain Flooring, Nonthaburi',
    projectLinkLabel: 'View real project →',
    areaEyebrow: 'Service Area',
    areaText: 'Based in Bang Yai, Nonthaburi, we serve within a 60-70 km radius — covering all of Nonthaburi and Bangkok, plus nearby Pathum Thani.',
    faqEyebrow: 'Frequently Asked Questions',
    ctaEyebrow: 'Ready to get started?',
    ctaHeading: 'Book a free site survey\ntoday',
  },
}

export function TilesContent() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const features = FEATURES[lang]
  const process = PROCESS[lang]
  const faq = FAQ[lang]
  const headingFont = lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic'

  return (
    <main className="bg-canvas text-ink">
      {/* Hero / Intro */}
      <section className="mx-auto max-w-[1000px] px-6 pb-10 pt-[140px] md:px-10 md:pt-[168px]">
        <FadeIn>
          <h1 className={`text-[32px] leading-[1.25] text-ink md:text-[48px] ${headingFont}`}>
            {c.h1}
          </h1>
          <p className="mt-6 font-sarabun text-[15px] leading-[1.9] text-ink/70">
            {c.intro}
          </p>
        </FadeIn>
      </section>

      {/* Features */}
      <section aria-label={c.featuresEyebrow} className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.featuresEyebrow}</p>
        </FadeIn>
        <FadeIn stagger className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map(f => (
            <FadeInItem key={f.title}>
              <div className="h-full rounded-sm border border-ink/10 bg-[#FAF9F6] p-6">
                <h3 className="font-sarabun text-base font-medium text-ink">{f.title}</h3>
                <p className="mt-2 font-sarabun text-[13px] leading-[1.8] text-ink/65">{f.desc}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeIn>
      </section>

      {/* Process */}
      <section aria-label={c.processEyebrow} style={{ backgroundColor: '#F4F1EA' }}>
        <div className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.processEyebrow}</p>
            <ol className="mt-6 space-y-5">
              {process.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-cormorant text-2xl italic leading-none text-sand">{i + 1}</span>
                  <div>
                    <p className="font-sarabun text-sm font-medium text-ink">{step.title}</p>
                    <p className="mt-1 font-sarabun text-[13px] leading-[1.7] text-ink/60">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>

      {/* Scope */}
      <section aria-label={c.scopeEyebrow} className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.scopeEyebrow}</p>
          <p className="mt-4 font-sarabun text-[15px] leading-[1.9] text-ink/70">{c.scopeText}</p>
        </FadeIn>
      </section>

      {/* Real project (single featured card — only one verified job so far) */}
      <section aria-label={c.projectEyebrow} style={{ backgroundColor: '#F4F1EA' }}>
        <div className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.projectEyebrow}</p>
            <Link
              href="/portfolio/wood-grain-2026-06"
              className="mt-6 flex items-center justify-between rounded-sm border border-ink/10 bg-[#FAF9F6] p-6 hover:border-sage/40"
            >
              <span className="font-sarabun text-base font-medium text-ink">{c.projectTitle}</span>
              <span className="font-dm-sans text-[13px] text-sage">{c.projectLinkLabel}</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Service area */}
      <section aria-label={c.areaEyebrow} className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.areaEyebrow}</p>
          <p className="mt-4 font-sarabun text-[15px] leading-[1.9] text-ink/70">{c.areaText}</p>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section aria-label={c.faqEyebrow} style={{ backgroundColor: '#F4F1EA' }}>
        <div className="mx-auto max-w-[800px] px-6 py-[56px] md:px-10 md:py-[88px]">
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.faqEyebrow}</p>
          </FadeIn>
          <FadeIn stagger className="mt-8 divide-y divide-ink/10 border-t border-ink/10">
            {faq.map(item => (
              <FadeInItem key={item.q}>
                <div className="py-5">
                  <h3 className="font-sarabun text-[15px] font-medium text-ink">{item.q}</h3>
                  <p className="mt-2 font-sarabun text-[13px] leading-[1.8] text-ink/65">{item.a}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0d150e] text-canvas">
        <div className="mx-auto max-w-[800px] px-6 py-[72px] text-center md:px-10 md:py-[100px]">
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sand">{c.ctaEyebrow}</p>
            <h2 className={`mt-4 whitespace-pre-line text-[32px] leading-[1.25] text-canvas md:text-[44px] ${headingFont}`}>
              {c.ctaHeading}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://line.me/ti/p/Hz-QrG-Dyo"
                className="flex items-center gap-2 rounded-full px-6 py-3 font-dm-sans text-sm"
                style={{ backgroundColor: '#06C755', color: '#fff' }}
              >
                <SiLine size={18} /> LINE
              </a>
              <a
                href="tel:0922294692"
                className="flex items-center gap-2 rounded-full border border-canvas/30 px-6 py-3 font-dm-sans text-sm text-canvas"
              >
                <Phone size={16} /> 092-229-4692
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

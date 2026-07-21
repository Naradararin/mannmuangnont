'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { SiLine } from 'react-icons/si'
import { FadeIn, FadeInItem } from '@/components/motion/fade-in'
import { useLang } from '@/lib/lang'
import { WALLPAPER_FAQ as FAQ } from '@/components/sections/wallpaper-faq'
import { PORTFOLIO } from '@/lib/portfolio-data'

// thep-rak-49 lives on its own standalone page (not in the PORTFOLIO array),
// so it needs an explicit fallback path — same pattern as curtains-content.tsx.
const THEP_RAK_49_FALLBACK = '/images/portfolio/thep-rak-49/Wallpaper/473209.jpg'

function thumbFor(portfolioHref: string): string | undefined {
  const id = portfolioHref.replace('/portfolio/', '')
  if (id === 'thep-rak-49') return THEP_RAK_49_FALLBACK
  return PORTFOLIO.find(p => p.id === id)?.imageUrls[0]
}

// ---------------------------------------------------------------------------
// All facts on this page are drawn from real completed projects in
// lib/portfolio-data.ts and from answers the shop owner gave directly.
// Nothing here is invented — do not add stats or claims without a verified
// source.
// ---------------------------------------------------------------------------

const PROJECTS = {
  th: [
    { name: 'ณิชาตรา กรุงเทพ', desc: 'บ้านเดี่ยว', href: '/portfolio/nichatra-he-2026-02' },
    { name: 'มัณฑนา เวสต์เกต นนทบุรี', desc: 'บ้านเดี่ยว', href: '/portfolio/mantana-westgate-wallpaper-2024-05' },
    { name: 'คฤหาสน์ เทพรักษ์ 49 กรุงเทพ', desc: 'ทำคู่กับผ้าม่าน', href: '/portfolio/thep-rak-49' },
  ],
  en: [
    { name: 'Nichatra, Bangkok', desc: 'Detached House', href: '/portfolio/nichatra-he-2026-02' },
    { name: 'Mantana Westgate, Nonthaburi', desc: 'Detached House', href: '/portfolio/mantana-westgate-wallpaper-2024-05' },
    { name: 'Thep Rak 49 Mansion, Bangkok', desc: 'Paired with curtain installation', href: '/portfolio/thep-rak-49' },
  ],
}

const COMPARE = {
  th: [
    { row: 'พื้นผิวและลวดลาย', wallpaper: 'มีมิติ ลวดลาย และผิวสัมผัสให้เลือกหลากหลาย (มากกว่า 1,000 ลาย)', paint: 'พื้นผิวเรียบสีเดียว ตัวเลือกจำกัดกว่า' },
    { row: 'ระยะเวลาติดตั้ง', wallpaper: 'เฉลี่ยประมาณ 5 ชม. สำหรับพื้นที่ 40 ตร.ม. (รวมลอกของเก่าถ้ามี)', paint: 'ขึ้นอยู่กับพื้นที่และจำนวนรอบทา' },
    { row: 'ความเหมาะสมกับพื้นที่ชื้น', wallpaper: 'ไม่เหมาะกับห้องน้ำ แต่ใช้ได้ในห้องครัว', paint: 'มีสีทนความชื้นเฉพาะสำหรับพื้นที่เปียก' },
  ],
  en: [
    { row: 'Texture & Pattern', wallpaper: 'Rich texture and pattern variety (1,000+ designs)', paint: 'Flat, single-tone finish with fewer options' },
    { row: 'Installation Time', wallpaper: 'Averages about 5 hours for 40 sqm (including stripping old paper if needed)', paint: 'Depends on area and number of coats' },
    { row: 'Suitability for Humid Areas', wallpaper: 'Not suited to bathrooms, but works in kitchens', paint: 'Moisture-resistant paints available for wet areas' },
  ],
}

const CONTENT = {
  th: {
    h1: 'วอลเปเปอร์ นนทบุรี — ติดตั้งใหม่ ลอกของเก่า โดยม่านเมืองนนท์',
    intro: 'ม่านเมืองนนท์ รับติดตั้งวอลเปเปอร์และลอกของเก่าก่อนติดใหม่ ฐานร้านอยู่บางใหญ่ นนทบุรี ให้บริการทั้งในนนทบุรีและกรุงเทพฯ สำรวจหน้างานฟรี ให้ใบเสนอราคาภายใน 24 ชม.',
    servicesEyebrow: 'บริการของเรา',
    services: [
      { title: 'ติดตั้งวอลเปเปอร์ใหม่', desc: 'เลือกจากลายมากกว่า 1,000 แบบ นำเข้าจากยุโรปและเกาหลี ลายที่ลูกค้านิยมมากที่สุดคือลายเรียบ มินิมอล โทนเย็น' },
      { title: 'ลอกของเก่า + ติดตั้งใหม่', desc: 'ลอกวอลเปเปอร์เดิมออกก่อนติดลายใหม่ ทำในงานเดียวกันได้ เฉลี่ยพื้นที่ 40 ตร.ม. ใช้เวลาประมาณ 5 ชม.' },
    ],
    compareEyebrow: 'วอลเปเปอร์ vs ทาสี',
    roomsEyebrow: 'เหมาะกับห้องไหนบ้าง',
    roomsText: 'วอลเปเปอร์เหมาะกับห้องนั่งเล่นและห้องนอนที่ต้องการเพิ่มมิติและลวดลาย ใช้ในห้องครัวได้ แต่ไม่แนะนำสำหรับห้องน้ำเนื่องจากความชื้นสูงเกินไป',
    projectsEyebrow: 'ผลงานจริง',
    areaEyebrow: 'พื้นที่ให้บริการ',
    areaText: 'ร้านตั้งอยู่ที่บางใหญ่ นนทบุรี ให้บริการในรัศมี 60-70 กม. รอบร้าน ครอบคลุมนนทบุรีทั้งจังหวัดและกรุงเทพฯ ทั่วถึง รวมถึงปริมณฑลใกล้เคียงอย่างปทุมธานี',
    faqEyebrow: 'คำถามที่พบบ่อย',
    ctaEyebrow: 'พร้อมเริ่มแล้วใช่ไหม',
    ctaHeading: 'นัดสำรวจหน้างานฟรี\nวันนี้',
  },
  en: {
    h1: 'Wallpaper in Nonthaburi — New Installation & Old Wallpaper Removal by Maan Mueang Nont',
    intro: 'Maan Mueang Nont installs wallpaper and strips old wallpaper before re-installing. Based in Bang Yai, Nonthaburi, we serve both Nonthaburi and Bangkok. Free on-site survey, quote within 24 hours.',
    servicesEyebrow: 'Our Services',
    services: [
      { title: 'New Wallpaper Installation', desc: 'Choose from over 1,000 patterns imported from Europe and Korea. Our clients\u2019 most popular choice is simple, minimal, cool-toned designs.' },
      { title: 'Strip Old + Install New', desc: 'We remove the existing wallpaper before applying the new pattern, in the same job. Averages about 5 hours for a 40 sqm area.' },
    ],
    compareEyebrow: 'Wallpaper vs. Paint',
    roomsEyebrow: 'Which Rooms Suit Wallpaper',
    roomsText: 'Wallpaper suits living rooms and bedrooms that want added texture and pattern. It works in kitchens too, but isn\u2019t recommended for bathrooms due to high humidity.',
    projectsEyebrow: 'Real Projects',
    areaEyebrow: 'Service Area',
    areaText: 'Based in Bang Yai, Nonthaburi, we serve within a 60-70 km radius — covering all of Nonthaburi and Bangkok, plus nearby Pathum Thani.',
    faqEyebrow: 'Frequently Asked Questions',
    ctaEyebrow: 'Ready to get started?',
    ctaHeading: 'Book a free site survey\ntoday',
  },
}

export function WallpaperContent() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const projects = PROJECTS[lang]
  const compare = COMPARE[lang]
  const faq = FAQ[lang]
  const headingFont = lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic'

  return (
    <main className="bg-canvas text-ink">
      {/* Hero / Intro */}
      <section className="mx-auto max-w-[1280px] px-6 pb-10 pt-[140px] md:px-10 md:pt-[168px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <FadeIn>
            <h1 className={`text-[32px] leading-[1.25] text-ink md:text-[48px] ${headingFont}`}>
              {c.h1}
            </h1>
            <p className="mt-6 font-sarabun text-[15px] leading-[1.9] text-ink/70">
              {c.intro}
            </p>
          </FadeIn>
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/portfolio/nichatra-high-end-06-02-26/628420878_1353620610111708_633601835838337285_n.jpg"
                alt={c.h1}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section aria-label={c.servicesEyebrow} className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.servicesEyebrow}</p>
        </FadeIn>
        <FadeIn stagger className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {c.services.map((s, i) => (
            <FadeInItem key={i}>
              <div className="h-full rounded-sm border border-ink/10 bg-[#FAF9F6] p-6">
                <h3 className="font-sarabun text-base font-medium text-ink">{s.title}</h3>
                <p className="mt-2 font-sarabun text-[13px] leading-[1.8] text-ink/65">{s.desc}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeIn>
      </section>

      {/* Wallpaper vs Paint */}
      <section aria-label={c.compareEyebrow} style={{ backgroundColor: '#F4F1EA' }}>
        <div className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.compareEyebrow}</p>
            <div className="mt-8 overflow-hidden rounded-sm border border-ink/10">
              {/* Desktop / tablet: real table */}
              <table className="hidden w-full border-collapse font-sarabun text-[13px] md:table">
                <thead>
                  <tr className="border-b border-ink/10 bg-[#FAF9F6]">
                    <th className="p-4 text-left font-medium text-ink/50">—</th>
                    <th className="p-4 text-left font-medium text-ink">
                      {lang === 'th' ? 'วอลเปเปอร์' : 'Wallpaper'}
                    </th>
                    <th className="p-4 text-left font-medium text-ink">
                      {lang === 'th' ? 'ทาสี' : 'Paint'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map(row => (
                    <tr key={row.row} className="border-b border-ink/10 last:border-0">
                      <td className="w-[180px] p-4 align-top font-medium text-ink/70">{row.row}</td>
                      <td className="p-4 align-top text-ink/70">{row.wallpaper}</td>
                      <td className="p-4 align-top text-ink/70">{row.paint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Mobile: stacked cards — a 3-column table has no room to
                  breathe below ~640px and forces every word onto its own
                  line, so this shows the same data as readable rows instead. */}
              <div className="flex flex-col md:hidden">
                {compare.map(row => (
                  <div key={row.row} className="border-b border-ink/10 p-4 last:border-0">
                    <p className="font-medium text-ink/70">{row.row}</p>
                    <p className="mt-1.5 text-ink">
                      <span className="text-ink/50">{lang === 'th' ? 'วอลเปเปอร์: ' : 'Wallpaper: '}</span>
                      {row.wallpaper}
                    </p>
                    <p className="mt-1 text-ink">
                      <span className="text-ink/50">{lang === 'th' ? 'ทาสี: ' : 'Paint: '}</span>
                      {row.paint}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Which rooms */}
      <section aria-label={c.roomsEyebrow} className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.roomsEyebrow}</p>
          <p className="mt-4 font-sarabun text-[15px] leading-[1.9] text-ink/70">{c.roomsText}</p>
        </FadeIn>
      </section>

      {/* Real projects */}
      <section aria-label={c.projectsEyebrow} style={{ backgroundColor: '#F4F1EA' }}>
        <div className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.projectsEyebrow}</p>
          </FadeIn>
          <FadeIn stagger className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {projects.map((p, i) => {
              const thumb = thumbFor(p.href)
              return (
                <FadeInItem key={i}>
                  <Link href={p.href} className="block h-full overflow-hidden rounded-sm border border-ink/10 bg-[#FAF9F6] hover:border-sage/40">
                    {thumb && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={thumb}
                          alt={p.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-sarabun text-sm font-medium text-ink">{p.name}</h3>
                      <p className="mt-1 font-sarabun text-[12px] text-ink/55">{p.desc}</p>
                    </div>
                  </Link>
                </FadeInItem>
              )
            })}
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
            {faq.map((item, i) => (
              <FadeInItem key={i}>
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

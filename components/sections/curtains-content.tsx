'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SiLine } from 'react-icons/si'
import { FadeIn, FadeInItem } from '@/components/motion/fade-in'
import { useLang } from '@/lib/lang'
import { CURTAINS_FAQ as FAQ } from '@/components/sections/curtains-faq'

// ---------------------------------------------------------------------------
// All facts on this page are drawn from real completed projects in
// lib/portfolio-data.ts and from answers the shop owner gave directly.
// Nothing here is invented — do not add stats, years, or claims without
// a verified source.
// ---------------------------------------------------------------------------

const CURTAIN_TYPES = {
  th: [
    { name: 'ม่านลอน (Ripple-Fold)', desc: 'ประเภทที่เราติดตั้งบ่อยที่สุด ผ้าม่านจับจีบเป็นคลื่นสม่ำเสมอ แขวนบนราง เปิด-ปิดลื่น เหมาะกับห้องนั่งเล่นและห้องนอนคอนโด', href: '/portfolio/atmoz-palacio-2025-09', linkLabel: 'ดูผลงานจริง' },
    { name: 'ม่านจีบ', desc: 'ผ้าม่านจับจีบคลาสสิก ให้ความรู้สึกหรูหราเป็นทางการ นิยมในบ้านเดี่ยวและคอนโดห้องนอนใหญ่', href: '/portfolio/the-centro-rattanathibet-2025-12', linkLabel: 'ดูผลงานจริง' },
    { name: 'ม่านตาไก่', desc: 'ผ้าม่านเจาะรูโลหะร้อยกับราง แขวนตรง ดูทันสมัยเรียบง่าย ดูแลง่าย เหมาะบ้านสไตล์มินิมอล', href: '/portfolio/casa-ville-ratchaphruek-2026-06', linkLabel: 'ดูผลงานจริง' },
    { name: 'ม่านพับ (Roman Shade)', desc: 'ผ้าม่านพับเป็นชั้นเมื่อดึงขึ้น เหมาะห้องขนาดกลาง-เล็กที่ต้องการความเรียบร้อย', href: '/portfolio/baanwangjaru-2026-04a', linkLabel: 'ดูผลงานจริง' },
    { name: 'มู่ลี่ (ไม้ / อลูมิเนียม)', desc: 'ปรับมุมใบเพื่อควบคุมแสงได้ละเอียด เหมาะห้องที่ต้องการความยืดหยุ่นเรื่องแสงตลอดวัน', href: '/portfolio/the-lofts-asoke-2024-12', linkLabel: 'ดูผลงานจริง' },
    { name: 'ม่านม้วน (Roller)', desc: 'ม้วนเก็บเป็นชั้นเดียวเรียบร้อย ประหยัดพื้นที่ เหมาะห้องทำงานและห้องที่ต้องการความเรียบง่าย', href: '/portfolio/chiang-rak-noi-2025-02', linkLabel: 'ดูผลงานจริง' },
    { name: 'ม่านปรับแสง', desc: 'ควบคุมปริมาณแสงที่ลอดผ่านได้โดยไม่ต้องเปิด-ปิดทั้งผืน เหมาะห้องที่โดนแดดตรงบ่อย', href: '/portfolio/nichatra-2025-11', linkLabel: 'ดูผลงานจริง' },
    { name: 'ระบบมอเตอร์ไฟฟ้า (ตัวเลือกเสริม)', desc: 'เปิด-ปิดม่านด้วยรีโมทหรือแอปพลิเคชัน ติดตั้งร่วมกับม่านลอนหรือมู่ลี่ได้ เหมาะบ้านหรูที่ต้องการความสะดวกสูงสุด', href: '/portfolio/thep-rak-49', linkLabel: 'ดูผลงานจริง' },
  ],
  en: [
    { name: 'Ripple-Fold', desc: 'Our most frequently installed style. Even wave pleats hung on a track for smooth gliding — suited to living rooms and condo bedrooms.', href: '/portfolio/atmoz-palacio-2025-09', linkLabel: 'View real project' },
    { name: 'Pleated', desc: 'Classic gathered pleats for a formal, elegant feel. Popular in detached houses and large condo bedrooms.', href: '/portfolio/the-centro-rattanathibet-2025-12', linkLabel: 'View real project' },
    { name: 'Eyelet', desc: 'Metal grommets threaded onto the track for a clean, modern hang. Low maintenance, suited to minimalist homes.', href: '/portfolio/casa-ville-ratchaphruek-2026-06', linkLabel: 'View real project' },
    { name: 'Roman Shade', desc: 'Folds into neat layers when raised. Suited to small and medium rooms wanting a tidy look.', href: '/portfolio/baanwangjaru-2026-04a', linkLabel: 'View real project' },
    { name: 'Venetian Blinds (wood / aluminium)', desc: 'Adjustable slats for fine light control — flexible for rooms that need different light levels through the day.', href: '/portfolio/the-lofts-asoke-2024-12', linkLabel: 'View real project' },
    { name: 'Roller', desc: 'Rolls into a single neat layer, saving space — suited to studies and simple, minimal rooms.', href: '/portfolio/chiang-rak-noi-2025-02', linkLabel: 'View real project' },
    { name: 'Light-Filtering', desc: 'Controls how much light passes through without opening the full curtain — suited to rooms that get direct sun often.', href: '/portfolio/nichatra-2025-11', linkLabel: 'View real project' },
    { name: 'Motorised System (add-on)', desc: 'Open and close by remote or app. Can be added to ripple-fold or blinds — suited to luxury homes wanting maximum convenience.', href: '/portfolio/thep-rak-49', linkLabel: 'View real project' },
  ],
}

const DIRECTIONS = {
  th: [
    { dir: 'ตะวันตก', sun: 'แดดแรงที่สุดช่วงบ่ายถึงเย็น สะสมความร้อนมากที่สุด', fabric: 'ผ้าม่านกันแสง 100% (Blackout) หรือผ้าเคลือบสารกันยูวี สีโทนเข้มหรือสีเย็น เพื่อบล็อกความร้อนและแสงจ้า' },
    { dir: 'ใต้', sun: 'แดดส่องอ้อมตลอดทั้งปี ได้รับแสงช่วงสายถึงบ่าย', fabric: 'ผ้าม่านกันแสง (Dimout) ที่กรองแสงได้ดี หรือผ้าโปร่งซ้อนด้วยผ้าทึบ เพื่อลดความร้อนแต่ยังเปิดรับลมธรรมชาติได้' },
    { dir: 'ตะวันออก', sun: 'แดดอ่อน ๆ ยามเช้า ช่วยปลุกความสดชื่น ไม่สะสมความร้อน', fabric: 'ผ้าม่านแบบกรองแสง (Light Filtering) หรือม่านโปร่งแสง (Sheer Fabric) ให้แสงธรรมชาติส่องเข้ามาอย่างนุ่มนวล' },
    { dir: 'เหนือ', sun: 'ไม่โดนแดดจัดตลอดทั้งปี แสงสว่างสม่ำเสมอและเย็นสบายที่สุด', fabric: 'ผ้าม่านชนิดใดก็ได้ ขึ้นอยู่กับความเป็นส่วนตัว หรือใช้ม่านโปร่งเพื่อเปิดรับแสงสว่างสูงสุด' },
  ],
  en: [
    { dir: 'West', sun: 'Strongest sun in the afternoon to evening, accumulates the most heat.', fabric: '100% blackout, or UV-coated fabric in dark or cool tones to block heat and glare.' },
    { dir: 'South', sun: 'Indirect sun year-round, receiving light from late morning to afternoon.', fabric: 'Dimout fabric that filters light well, or sheer layered with an opaque fabric to reduce heat while still allowing natural airflow.' },
    { dir: 'East', sun: 'Soft morning sun, refreshing and doesn\u2019t build up heat.', fabric: 'Light-filtering fabric or sheer fabric to let natural light in softly.' },
    { dir: 'North', sun: 'Never gets harsh sun year-round — the most even and cool light.', fabric: 'Any fabric works, depending on your privacy preference, or use sheer fabric to maximise brightness.' },
  ],
}

const PROPERTY_TYPES = {
  th: [
    { name: 'คอนโด', desc: 'มีประสบการณ์ทำงานในคอนโดหลายโครงการย่านลาดพร้าว-วังหิน เกษตร-ศรีปทุม และสาทร เข้าใจข้อจำกัดพื้นที่คอนโดและขั้นตอนการติดตั้งร่วมกับนิติบุคคล' },
    { name: 'บ้านเดี่ยว', desc: 'โครงการส่วนใหญ่ของเราอยู่ในกลุ่มนี้ เช่น หมู่บ้านวังจารุ นนทบุรี, ณิชาตรา กรุงเทพ, ชิชากรแก้วอินทร์ นนทบุรี' },
    { name: 'ทาวน์เฮ้าส์', desc: 'ตัวอย่างจริงที่อาคารพาณิชย์ติดแม่น้ำเจ้าพระยา ปทุมธานี' },
    { name: 'บ้านน็อคดาวน์', desc: 'ตัวอย่างจริงที่เดอะ วิลเลจ หทัยราษฎร์-วงแหวนฯ กรุงเทพ' },
    { name: 'บ้านหรู / คฤหาสน์', desc: 'งานพรีเมียมพร้อมระบบมอเตอร์ไฟฟ้าที่เทพรักษ์ 49 กรุงเทพ' },
  ],
  en: [
    { name: 'Condominiums', desc: 'Experienced with multiple condo projects in Ladprao-Wanghin, Kaset-Sriปทุม, and Sathorn — familiar with condo space constraints and juristic-person installation procedures.' },
    { name: 'Detached Houses', desc: 'Most of our projects fall in this group, e.g. Baan Wang Jaru Nonthaburi, Nichatra Bangkok, Chichakorn Kaewin Nonthaburi.' },
    { name: 'Townhouses', desc: 'Real example: a commercial building on the Chao Phraya riverside, Pathum Thani.' },
    { name: 'Knock-down Houses', desc: 'Real example: The Village Hathairat-Wongwaen, Bangkok.' },
    { name: 'Luxury Homes / Mansions', desc: 'A premium project with a full motorised system at Thep Rak 49, Bangkok.' },
  ],
}

const CONTENT = {
  th: {
    h1: 'ผ้าม่าน นนทบุรี — ออกแบบ ตัดเย็บ ติดตั้ง โดยม่านเมืองนนท์',
    intro: 'ม่านเมืองนนท์ รับออกแบบและติดตั้งผ้าม่านครบวงจร ฐานร้านอยู่บางใหญ่ นนทบุรี ให้บริการทั้งในนนทบุรีและกรุงเทพฯ สำรวจหน้างานฟรี ให้ใบเสนอราคาภายใน 24 ชม. ดูผลงานติดตั้งจริงกว่า 25 โครงการด้านล่าง',
    typesEyebrow: 'ประเภทผ้าม่านที่เราติดตั้ง',
    fabricEyebrow: 'เลือกผ้าทึบแสงแบบไหนดี',
    fabricTable: [
      { label: 'Blackout 100%', pct: 'กันแสงเกือบทั้งหมด', use: 'ห้องนอนที่ต้องการความมืดสนิท, โฮมเธียเตอร์', ref: 'คฤหาสน์ เทพรักษ์ 49', href: '/portfolio/thep-rak-49' },
      { label: 'Dimout 80-90%', pct: 'กันแสงจัดส่วนใหญ่ ยังมีแสงรำไรลอดผ่าน', use: 'ห้องนอนทั่วไป ห้องนั่งเล่น — ตัวเลือกที่ลูกค้าเราเลือกมากที่สุด', ref: 'ใช้ในกว่า 20 โครงการที่ผ่านมา', href: null },
    ],
    directionEyebrow: 'เลือกผ้าม่านตามทิศแดด',
    propertyEyebrow: 'ผ้าม่านตามประเภทที่พัก',
    areaEyebrow: 'พื้นที่ให้บริการ',
    areaText: 'ร้านตั้งอยู่ที่บางใหญ่ นนทบุรี ให้บริการในรัศมี 60-70 กม. รอบร้าน ครอบคลุมนนทบุรีทั้งจังหวัดและกรุงเทพฯ ทั่วถึง รวมถึงปริมณฑลใกล้เคียงอย่างปทุมธานี — ผลงานที่ผ่านมาครอบคลุมทั้งย่านในนนทบุรี (บางใหญ่ บางบัวทอง ราชพฤกษ์ รัตนาธิเบศร์) และกรุงเทพฯ (ลาดพร้าว วังหิน สาทร อโศก ประเวศ แจ้งวัฒนะ หทัยราษฎร์)',
    processEyebrow: 'ขั้นตอนการทำงาน',
    process: [
      { title: 'นัดสำรวจหน้างานฟรี', desc: 'ดูพื้นที่จริง วัดขนาด แนะนำประเภทม่านตามทิศแดด' },
      { title: 'เลือกผ้าถึงบ้าน', desc: 'ดูตัวอย่างผ้าและสีจริงก่อนตัดสินใจ' },
      { title: 'ใบเสนอราคาใน 24 ชม.', desc: '' },
      { title: 'ตัดเย็บและติดตั้งโดยทีมช่าง', desc: 'เฉลี่ย 5 ชม./หลังสำหรับการติดตั้ง คิวงานเรียงตามลำดับที่รับเข้ามา' },
    ],
    extraEyebrow: 'บริการเสริม',
    extra: ['ติดตั้งฉากกั้นห้อง', 'ซักผ้าม่านเก่า'],
    faqEyebrow: 'คำถามที่พบบ่อย',
    ctaEyebrow: 'พร้อมเริ่มแล้วใช่ไหม',
    ctaHeading: 'นัดสำรวจหน้างานฟรี\nวันนี้',
  },
  en: {
    h1: 'Curtains in Nonthaburi — Designed, Sewn, and Installed by Maan Mueang Nont',
    intro: 'Maan Mueang Nont offers full-service curtain design and installation. Based in Bang Yai, Nonthaburi, we serve both Nonthaburi and Bangkok. Free on-site survey, quote within 24 hours. See over 25 real installed projects below.',
    typesEyebrow: 'Curtain Styles We Install',
    fabricEyebrow: 'Choosing a Light-Blocking Fabric',
    fabricTable: [
      { label: 'Blackout 100%', pct: 'Blocks nearly all light', use: 'Bedrooms wanting complete darkness, home theatres', ref: 'Thep Rak 49 Mansion', href: '/portfolio/thep-rak-49' },
      { label: 'Dimout 80-90%', pct: 'Blocks most light, a soft glow still passes through', use: 'General bedrooms and living rooms — our clients\u2019 most popular choice', ref: 'Used in 20+ past projects', href: null },
    ],
    directionEyebrow: 'Choosing Curtains by Sun Direction',
    propertyEyebrow: 'Curtains by Property Type',
    areaEyebrow: 'Service Area',
    areaText: 'Based in Bang Yai, Nonthaburi, we serve within a 60-70 km radius — covering all of Nonthaburi and Bangkok, plus nearby Pathum Thani. Past projects span Nonthaburi (Bang Yai, Bang Bua Thong, Ratchaphruek, Rattanathibet) and Bangkok (Ladprao, Wanghin, Sathorn, Asoke, Prawet, Chaengwattana, Hathairat).',
    processEyebrow: 'Our Process',
    process: [
      { title: 'Free Site Survey', desc: 'We assess the space, take measurements, and recommend curtain types based on sun direction.' },
      { title: 'Choose Fabric at Home', desc: 'See real fabric samples and colours before deciding.' },
      { title: 'Quote Within 24 Hours', desc: '' },
      { title: 'Sewing and Installation', desc: 'Installation averages 5 hours per home. Jobs are scheduled in booking order.' },
    ],
    extraEyebrow: 'Additional Services',
    extra: ['Room divider installation', 'Washing old curtains'],
    faqEyebrow: 'Frequently Asked Questions',
    ctaEyebrow: 'Ready to get started?',
    ctaHeading: 'Book a free site survey\ntoday',
  },
}

export function CurtainsContent() {
  const { lang } = useLang()
  const c = CONTENT[lang]
  const types = CURTAIN_TYPES[lang]
  const dirs = DIRECTIONS[lang]
  const props = PROPERTY_TYPES[lang]
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

      {/* Curtain types grid */}
      <section aria-label={c.typesEyebrow} className="mx-auto max-w-[1280px] px-6 py-[56px] md:px-10 md:py-[88px]">
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.typesEyebrow}</p>
        </FadeIn>
        <FadeIn stagger className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {types.map(t => (
            <FadeInItem key={t.name}>
              <div className="flex h-full flex-col rounded-sm border border-ink/10 bg-[#FAF9F6] p-6">
                <h3 className="font-sarabun text-base font-medium text-ink">{t.name}</h3>
                <p className="mt-2 flex-1 font-sarabun text-[13px] leading-[1.8] text-ink/65">{t.desc}</p>
                <Link href={t.href} className="mt-4 font-dm-sans text-[11px] uppercase tracking-[0.1em] text-sage hover:underline">
                  {t.linkLabel} →
                </Link>
              </div>
            </FadeInItem>
          ))}
        </FadeIn>
      </section>

      {/* Blackout vs Dimout */}
      <section aria-label={c.fabricEyebrow} style={{ backgroundColor: '#F4F1EA' }}>
        <div className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.fabricEyebrow}</p>
            <div className="mt-8 overflow-hidden rounded-sm border border-ink/10">
              <table className="w-full border-collapse font-sarabun text-[13px]">
                <tbody>
                  {c.fabricTable.map(row => (
                    <tr key={row.label} className="border-b border-ink/10 last:border-0">
                      <td className="w-[160px] bg-[#FAF9F6] p-4 align-top font-medium text-ink">{row.label}</td>
                      <td className="p-4 align-top text-ink/70">{row.pct}</td>
                      <td className="p-4 align-top text-ink/70">
                        {row.use}
                        {row.href ? (
                          <>
                            {' — '}
                            <Link href={row.href} className="text-sage hover:underline">{row.ref}</Link>
                          </>
                        ) : (
                          <span className="block text-ink/50">{row.ref}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sun direction guide */}
      <section aria-label={c.directionEyebrow} className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.directionEyebrow}</p>
        </FadeIn>
        <FadeIn stagger className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {dirs.map(d => (
            <FadeInItem key={d.dir}>
              <div className="h-full rounded-sm border border-ink/10 p-6">
                <h3 className="font-sarabun text-base font-medium text-ink">{d.dir}</h3>
                <p className="mt-2 font-sarabun text-[13px] leading-[1.8] text-ink/60">{d.sun}</p>
                <p className="mt-3 font-sarabun text-[13px] leading-[1.8] text-ink/80">{d.fabric}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeIn>
      </section>

      {/* Property types */}
      <section aria-label={c.propertyEyebrow} style={{ backgroundColor: '#F4F1EA' }}>
        <div className="mx-auto max-w-[1000px] px-6 py-[56px] md:px-10 md:py-[88px]">
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.propertyEyebrow}</p>
          </FadeIn>
          <FadeIn stagger className="mt-8 space-y-6">
            {props.map(p => (
              <FadeInItem key={p.name}>
                <h3 className="font-sarabun text-base font-medium text-ink">{p.name}</h3>
                <p className="mt-1 font-sarabun text-[13px] leading-[1.8] text-ink/65">{p.desc}</p>
              </FadeInItem>
            ))}
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

      {/* Process + extra services */}
      <section style={{ backgroundColor: '#F4F1EA' }}>
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-14 px-6 py-[56px] md:grid-cols-[2fr_1fr] md:px-10 md:py-[88px]">
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.processEyebrow}</p>
            <ol className="mt-6 space-y-5">
              {c.process.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-cormorant text-2xl italic leading-none text-sand">{i + 1}</span>
                  <div>
                    <p className="font-sarabun text-sm font-medium text-ink">{step.title}</p>
                    {step.desc && <p className="mt-1 font-sarabun text-[13px] leading-[1.7] text-ink/60">{step.desc}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{c.extraEyebrow}</p>
            <ul className="mt-6 space-y-3">
              {c.extra.map(item => (
                <li key={item} className="font-sarabun text-sm text-ink/80">— {item}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section aria-label={c.faqEyebrow} className="mx-auto max-w-[800px] px-6 py-[56px] md:px-10 md:py-[88px]">
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

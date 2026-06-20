'use client'

import { FadeIn } from '@/components/motion/fade-in'
import { useLang } from '@/lib/lang'

const BOKEH = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 97 + 11) % 100}%`,
  top: `${(i * 43 + 7) % 88}%`,
  size: `${12 + (i % 5) * 16}px`,
  color: ['#3f5b44', '#b08d57', '#f5f1e8', '#4a6741', '#8fa87a'][i % 5],
  opacity: (0.04 + (i % 4) * 0.025).toFixed(3),
  duration: `${(14 + ((i * 37) % 16)).toFixed(1)}s`,
  delay: `${((i * 1.8) % 12).toFixed(1)}s`,
}))

const CONTENT = {
  th: {
    eyebrow: 'ติดต่อเรา',
    heading: 'พูดคุยกับเรา\nได้เลย',
    sub: 'ทีมงานพร้อมให้คำปรึกษาเรื่องผ้าม่าน วอลเปเปอร์ และกระเบื้อง — ตอบกลับทุกช่องทางภายใน 24 ชั่วโมง',
    channels: [
      { platform: 'LINE', handle: '@0922294692', href: 'https://line.me/R/ti/p/@0922294692', sub: 'กดแอดและพิมพ์หาเราได้เลย' },
      { platform: 'Facebook', handle: 'ม่านเมืองนนท์', href: 'https://www.facebook.com/', sub: 'กดติดตามและส่งข้อความ' },
      { platform: 'โทรศัพท์', handle: '092-229-4692', href: 'tel:0922294692', sub: '' },
    ],
  },
  en: {
    eyebrow: 'Contact Us',
    heading: 'Talk to us,\nanytime.',
    sub: 'Our team is happy to advise on curtains, wallpaper, and tiles — we reply via every channel within 24 hours.',
    channels: [
      { platform: 'LINE', handle: '@0922294692', href: 'https://line.me/R/ti/p/@0922294692', sub: 'Add and message us anytime' },
      { platform: 'Facebook', handle: 'Maan Mueang Nont', href: 'https://www.facebook.com/', sub: 'Follow and send a message' },
      { platform: 'Phone', handle: '092-229-4692', href: 'tel:0922294692', sub: '' },
    ],
  },
}

const CHANNEL_STYLES = [
  { color: '#06C755', border: 'rgba(6,199,85,0.22)', bg: 'rgba(6,199,85,0.07)' },
  { color: '#1877F2', border: 'rgba(24,119,242,0.22)', bg: 'rgba(24,119,242,0.07)' },
  { color: '#b08d57', border: 'rgba(176,141,87,0.22)', bg: 'rgba(176,141,87,0.07)' },
]

export function Booking() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section
      id="contact"
      aria-label={lang === 'th' ? 'ติดต่อเรา' : 'Contact us'}
      className="relative overflow-hidden bg-[#0d150e] text-canvas"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(63,91,68,0.18) 0%, rgba(63,91,68,0.06) 50%, transparent 75%)',
        }}
      />

      {/* Bokeh particles */}
      {BOKEH.map((b, i) => (
        <div
          key={i}
          aria-hidden
          className="bokeh-particle pointer-events-none absolute rounded-full blur-xl"
          style={
            {
              left: b.left,
              top: b.top,
              width: b.size,
              height: b.size,
              backgroundColor: b.color,
              opacity: b.opacity,
              '--bokeh-duration': b.duration,
              '--bokeh-delay': b.delay,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-[80px] md:px-10 md:py-[120px]">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start md:gap-20">

          {/* Left: heading */}
          <FadeIn>
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sand">
              {c.eyebrow}
            </p>
            <h2 className={`mt-4 whitespace-pre-line text-[36px] leading-[1.25] text-canvas md:text-[50px] ${lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic leading-[1.12]'}`}>
              {c.heading}
            </h2>
            <p className="mt-5 font-sarabun text-sm leading-[1.9] text-canvas/55">
              {c.sub}
            </p>
          </FadeIn>

          {/* Right: contact channels */}
          <FadeIn className="flex flex-col gap-4">
            {c.channels.map((ch, idx) => {
              const s = CHANNEL_STYLES[idx]
              const isExternal = ch.href.startsWith('http')
              return (
                <a
                  key={ch.platform}
                  href={ch.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-5 rounded-sm border p-5 transition-all duration-300 hover:scale-[1.015]"
                  style={{ borderColor: s.border, backgroundColor: s.bg }}
                >
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-full font-dm-sans text-[13px] font-bold text-white"
                    style={{ backgroundColor: s.color }}
                  >
                    {ch.platform === 'LINE' ? 'L' : ch.platform === 'Facebook' ? 'f' : '✆'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-dm-sans text-[10px] uppercase tracking-[0.18em] text-canvas/40">
                      {ch.platform}
                    </p>
                    <p className="mt-0.5 truncate font-ekkamai font-light text-[18px] text-canvas">
                      {ch.handle}
                    </p>
                    <p className="mt-0.5 font-sarabun text-[12px] text-canvas/40">
                      {ch.sub}
                    </p>
                  </div>
                  <span className="shrink-0 font-dm-sans text-[13px] text-canvas/25 transition-colors duration-300 group-hover:text-canvas/70">
                    →
                  </span>
                </a>
              )
            })}
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

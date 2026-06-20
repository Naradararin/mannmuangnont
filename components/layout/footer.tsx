'use client'

import { Phone } from 'lucide-react'
import { SiLine, SiFacebook } from 'react-icons/si'
import { useLang } from '@/lib/lang'

const CONTENT = {
  th: {
    tagline: 'ผ้าม่าน · วอลเปเปอร์ · กระเบื้อง — ตกแต่งบ้านให้เป็นคุณ',
    nav: [
      { label: 'ผ้าม่าน', href: '#collections' },
      { label: 'วอลเปเปอร์', href: '#collections' },
      { label: 'กระเบื้อง', href: '#collections' },
      { label: 'ผลงาน', href: '#portfolio' },
      { label: 'เกี่ยวกับเรา', href: '#about' },
      { label: 'นัดสำรวจฟรี', href: '#booking' },
    ],
    address: ['55/76 หมู่ที่ 1 ต.บางใหญ่', 'อ.บางใหญ่ จ.นนทบุรี 11140'],
    contactHeading: 'ติดต่อเรา',
    lineLabel: 'ไลน์',
    facebookLabel: 'เฟซบุ๊ก',
    phoneLabel: 'โทร',
    copyright: '© 2026 ม่านเมืองนนท์. All rights reserved.',
  },
  en: {
    tagline: 'Curtains · Wallpaper · Tiles — Curated for your home.',
    nav: [
      { label: 'Curtains', href: '#collections' },
      { label: 'Wallpaper', href: '#collections' },
      { label: 'Floor Tiles', href: '#collections' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'About', href: '#about' },
      { label: 'Book a Visit', href: '#booking' },
    ],
    address: ['55/76 Moo 1, Bang Yai Sub-district', 'Bang Yai District, Nonthaburi 11140'],
    contactHeading: 'Contact',
    lineLabel: 'LINE',
    facebookLabel: 'Facebook',
    phoneLabel: 'Call',
    copyright: '© 2026 Maan Mueang Nont. All rights reserved.',
  },
}

export function Footer() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <footer className="bg-ink text-canvas">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-cormorant text-xl italic">ม่านเมืองนนท์</p>
            <p className="mt-4 max-w-xs font-sarabun text-sm leading-[1.8] text-canvas/65">
              {c.tagline}
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            {c.nav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-fit font-dm-sans text-[13px] tracking-[0.08em] text-canvas/65 transition-colors hover:text-canvas"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div>
            <p className="font-dm-sans text-[10px] uppercase tracking-[0.18em] text-sand">
              {c.contactHeading}
            </p>
            <div className="mt-4 font-sarabun text-sm leading-[1.8] text-canvas/65">
              {c.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="mt-3 flex flex-col gap-2.5">
                <a
                  href="tel:0922294692"
                  className="flex w-fit items-center gap-2 transition-colors hover:text-canvas"
                >
                  <Phone size={14} className="shrink-0" />
                  <span>092-229-4692</span>
                </a>
                <a
                  href="https://line.me/ti/p/Hz-QrG-Dyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 transition-colors hover:text-canvas"
                >
                  <SiLine size={14} className="shrink-0" />
                  <span>{c.lineLabel}</span>
                </a>
                <a
                  href="https://www.facebook.com/yandsun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 transition-colors hover:text-canvas"
                >
                  <SiFacebook size={14} className="shrink-0" />
                  <span>{c.facebookLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-sand/30 pt-6">
          <p className="font-dm-sans text-[10px] text-sand">{c.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

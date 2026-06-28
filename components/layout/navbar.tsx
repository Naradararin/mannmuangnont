'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { SiLine, SiFacebook } from 'react-icons/si'
import { useLang } from '@/lib/lang'

const LINKS = {
  th: [
    { label: 'เกี่ยวกับเรา', href: '#about' },
    { label: 'สินค้า', href: '#collections' },
    { label: 'ผลงาน', href: '#portfolio' },
    { label: 'รีวิว', href: '#testimonials' },
    { label: 'ติดต่อ', href: '#contact' },
  ],
  en: [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#collections' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
}

const CTA = {
  th: 'ติดต่อเรา',
  en: 'Contact Us',
}

const SECTION_IDS = ['collections', 'about', 'portfolio', 'testimonials', 'contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const { lang, toggle } = useLang()
  const links = LINKS[lang]

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      // Bias the trigger line toward the upper-middle of the viewport so the
      // active link updates as a section reaches the top under the navbar.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-sand/30 bg-canvas/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/images/brand/logo.png"
            alt="ม่านเมืองนนท์"
            className="h-11 w-auto object-contain md:h-14"
          />
          <span className="font-sov-wong whitespace-nowrap text-xl text-ink sm:text-2xl">
            {lang === 'th' ? 'ม่านเมืองนนท์' : 'Maan Mueang Nont'}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = link.href === `#${activeId}`
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={active ? 'true' : undefined}
                className={`group relative font-dm-sans text-[13px] tracking-[0.08em] transition-colors hover:text-sage ${
                  active ? 'text-sage' : 'text-ink/75'
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left bg-sage transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        {/* Desktop right: lang toggle + contact icons + CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggle}
            aria-label={lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
            className="font-dm-sans text-[11px] tracking-[0.12em] text-ink/50 transition-colors hover:text-ink"
          >
            {lang === 'th' ? 'EN' : 'TH'}
          </button>
          <span className="h-4 w-px bg-ink/15" aria-hidden />
          <div className="flex items-center gap-3">
            <a
              href="tel:0922294692"
              aria-label={lang === 'th' ? 'โทร' : 'Call'}
              className="text-ink/50 transition-colors hover:text-sage"
            >
              <Phone size={15} />
            </a>
            <a
              href="https://line.me/ti/p/Hz-QrG-Dyo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE"
              className="text-ink/50 transition-colors hover:text-[#06C755]"
            >
              <SiLine size={15} />
            </a>
            <a
              href="https://www.facebook.com/yandsun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-ink/50 transition-colors hover:text-[#1877F2]"
            >
              <SiFacebook size={15} />
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-sage px-5 py-2.5 font-dm-sans text-[11px] uppercase tracking-[0.18em] text-canvas transition-opacity hover:opacity-90"
          >
            {CTA[lang]}
          </a>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggle}
            aria-label={lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
            className="font-dm-sans text-[11px] tracking-[0.12em] text-ink/50"
          >
            {lang === 'th' ? 'EN' : 'TH'}
          </button>
          <button
            type="button"
            aria-label={lang === 'th' ? 'เปิดเมนู' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-px w-6 bg-ink transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu — plainly conditionally mounted (no animated reveal).
          It previously used framer-motion's AnimatePresence + a height:0→'auto'
          animation, which never ran in this Next 16 / React 19 stack: the panel
          stayed stuck at its `initial` collapsed state (height ~1px, opacity 0),
          so its links were invisible and taps fell straight through to the hero
          image behind. Rendering a plain block when `open` can't get stuck — the
          panel sits at natural height in the z-50 header, so the anchor scroll +
          onClick close both work. */}
      {open && (
        <div className="border-t border-sand/30 bg-canvas md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => {
                const active = link.href === `#${activeId}`
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={active ? 'true' : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex h-11 items-center gap-2.5 font-dm-sans text-[13px] tracking-[0.08em] transition-colors ${
                      active ? 'text-sage' : 'text-ink/80'
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-3.5 w-px bg-sage transition-opacity ${
                        active ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    {link.label}
                  </a>
                )
              })}
              <div className="mt-1 flex items-center gap-5 px-1">
                <a
                  href="tel:0922294692"
                  aria-label={lang === 'th' ? 'โทร' : 'Call'}
                  className="flex h-11 items-center text-ink/55 transition-colors hover:text-sage"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="https://line.me/ti/p/Hz-QrG-Dyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LINE"
                  className="flex h-11 items-center text-ink/55 transition-colors hover:text-[#06C755]"
                >
                  <SiLine size={18} />
                </a>
                <a
                  href="https://www.facebook.com/yandsun"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 items-center text-ink/55 transition-colors hover:text-[#1877F2]"
                >
                  <SiFacebook size={18} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex h-11 items-center justify-center rounded-full bg-sage font-dm-sans text-[11px] uppercase tracking-[0.18em] text-canvas"
              >
                {CTA[lang]}
              </a>
          </nav>
        </div>
      )}
    </header>
  )
}

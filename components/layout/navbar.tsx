'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import { SiLine, SiFacebook } from 'react-icons/si'
import { useLang } from '@/lib/lang'

const LINKS = {
  th: [
    { label: 'สินค้า', href: '#collections' },
    { label: 'เกี่ยวกับเรา', href: '#about' },
    { label: 'ผลงาน', href: '#portfolio' },
    { label: 'รีวิว', href: '#testimonials' },
    { label: 'ติดต่อ', href: '#contact' },
  ],
  en: [
    { label: 'Products', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
}

const CTA = {
  th: 'ติดต่อเรา',
  en: 'Contact Us',
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
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
            className="h-9 w-auto object-contain"
          />
          <span className="font-sov-wong hidden text-xl text-ink sm:block">
            {lang === 'th' ? 'ม่านเมืองนนท์' : 'Maan Mueang Nont'}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-dm-sans text-[13px] tracking-[0.08em] text-ink/75 transition-colors hover:text-sage"
            >
              {link.label}
            </a>
          ))}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden border-t border-sand/30 bg-canvas md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex h-11 items-center font-dm-sans text-[13px] tracking-[0.08em] text-ink/80"
                >
                  {link.label}
                </a>
              ))}
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

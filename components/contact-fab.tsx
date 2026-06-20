'use client'

import { useState } from 'react'
import type { ComponentType } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X } from 'lucide-react'
import { SiLine, SiFacebook } from 'react-icons/si'
import { useLang } from '@/lib/lang'

type IconProps = { size?: number; className?: string }
type IconComponent = ComponentType<IconProps>

const ITEMS: {
  label: { th: string; en: string }
  href: string
  Icon: IconComponent
  bg: string
  external: boolean
}[] = [
  {
    label: { th: 'ไลน์', en: 'LINE' },
    href: 'https://line.me/ti/p/Hz-QrG-Dyo',
    Icon: SiLine as IconComponent,
    bg: 'bg-[#06C755]',
    external: true,
  },
  {
    label: { th: 'เฟซบุ๊ก', en: 'Facebook' },
    href: 'https://www.facebook.com/yandsun',
    Icon: SiFacebook as IconComponent,
    bg: 'bg-[#1877F2]',
    external: true,
  },
  {
    label: { th: 'โทร', en: 'Call' },
    href: 'tel:0922294692',
    Icon: Phone as IconComponent,
    bg: 'bg-sage',
    external: false,
  },
]

export function ContactFab() {
  const [open, setOpen] = useState(false)
  const { lang } = useLang()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* FAB toggle — first in DOM = bottom in flex-col-reverse */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={
          open
            ? lang === 'th' ? 'ปิด' : 'Close'
            : lang === 'th' ? 'ติดต่อเรา' : 'Contact us'
        }
        className="flex size-14 items-center justify-center rounded-full bg-sage text-canvas shadow-xl"
        whileTap={{ scale: 0.93 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Phone size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Contact options — stack upward above the button */}
      <AnimatePresence>
        {open &&
          ITEMS.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 10, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.9 }}
              transition={{ duration: 0.18, delay: i * 0.05, ease: 'easeOut' }}
              className={`flex items-center gap-2.5 rounded-full px-4 py-2.5 text-white shadow-lg ${item.bg}`}
            >
              <item.Icon size={15} />
              <span className="font-dm-sans text-[12px] tracking-[0.06em]">
                {item.label[lang]}
              </span>
            </motion.a>
          ))}
      </AnimatePresence>
    </div>
  )
}

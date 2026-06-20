import type { Metadata } from 'next'
import { Sarabun, Cormorant_Garamond, DM_Sans, Geist } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from "@/lib/utils"
import { LangProvider } from '@/lib/lang'

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sarabun',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

const ekkamai = localFont({
  src: [
    { path: '../public/fonts/EkkamaiVibe-thin.ttf', weight: '100' },
    { path: '../public/fonts/EkkamaiVibe-light.ttf', weight: '300' },
    { path: '../public/fonts/EkkamaiVibe-Regular.ttf', weight: '400' },
    { path: '../public/fonts/EkkamaiVibe-Bold.ttf', weight: '700' },
    { path: '../public/fonts/EkkamaiVibe-Heavy.ttf', weight: '900' },
  ],
  variable: '--font-ekkamai',
})

const drdeco = localFont({
  src: '../public/fonts/DRdeco.ttf',
  variable: '--font-drdeco',
})

export const metadata: Metadata = {
  title: 'ม่านเมืองนนท์ | ผ้าม่าน วอลเปเปอร์ กระเบื้อง',
  description:
    'ผ้าม่าน วอลเปเปอร์ และกระเบื้องคุณภาพ คัดเลือกและติดตั้งโดยทีมช่างผู้เชี่ยวชาญ — Curated interiors, crafted for your space.',
  openGraph: {
    title: 'ม่านเมืองนนท์ | Curated Interiors',
    description: 'ผ้าม่าน · วอลเปเปอร์ · กระเบื้อง — ตกแต่งบ้านให้เป็นคุณ',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={cn(sarabun.variable, cormorant.variable, dmSans.variable, ekkamai.variable, drdeco.variable, "font-sans", geist.variable)}>
      <body className="font-sarabun antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}

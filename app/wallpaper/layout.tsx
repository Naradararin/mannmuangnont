import type { Metadata } from 'next'
import { WALLPAPER_FAQ } from '@/components/sections/wallpaper-faq'

export const metadata: Metadata = {
  title: 'วอลเปเปอร์ นนทบุรี ติดตั้งใหม่ ลอกของเก่า',
  description:
    'ร้านวอลเปเปอร์ นนทบุรี รับติดตั้งใหม่และลอกของเก่า มีลายกว่า 1,000 แบบ นำเข้ายุโรป-เกาหลี สำรวจหน้างานฟรี ใบเสนอราคาใน 24 ชม.',
  alternates: { canonical: '/wallpaper' },
  openGraph: {
    title: 'วอลเปเปอร์ นนทบุรี ติดตั้งใหม่ ลอกของเก่า | ม่านเมืองนนท์',
    description:
      'รับติดตั้งวอลเปเปอร์และลอกของเก่าก่อนติดใหม่ ครอบคลุมนนทบุรีและกรุงเทพฯ สำรวจหน้างานฟรี',
  },
}

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: WALLPAPER_FAQ.th.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Wallpaper installation and removal',
  name: 'วอลเปเปอร์ นนทบุรี — ม่านเมืองนนท์',
  areaServed: ['นนทบุรี', 'กรุงเทพมหานคร', 'ปทุมธานี'],
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'ม่านเมืองนนท์',
    url: 'https://maanmuangnont.com',
  },
}

export default function WallpaperLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      {children}
    </>
  )
}

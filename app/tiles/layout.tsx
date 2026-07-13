import type { Metadata } from 'next'
import { TILES_FAQ } from '@/components/sections/tiles-faq'

export const metadata: Metadata = {
  title: 'กระเบื้องยาง นนทบุรี ปูพื้น SPC คลิ๊กล็อค',
  description:
    'รับรื้อพื้นเดิมและปูกระเบื้องยาง SPC คลิ๊กล็อค นนทบุรี กรุงเทพฯ กันน้ำ กันปลวก รับทั้งบ้านและโครงการ สำรวจหน้างานฟรี',
  alternates: { canonical: '/tiles' },
  openGraph: {
    title: 'กระเบื้องยาง นนทบุรี ปูพื้น SPC คลิ๊กล็อค | ม่านเมืองนนท์',
    description:
      'รื้อพื้นเดิมและปูกระเบื้องยาง SPC คลิ๊กล็อคใหม่ ครอบคลุมนนทบุรีและกรุงเทพฯ สำรวจหน้างานฟรี',
  },
}

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TILES_FAQ.th.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Vinyl flooring installation',
  name: 'กระเบื้องยาง นนทบุรี — ม่านเมืองนนท์',
  areaServed: ['นนทบุรี', 'กรุงเทพมหานคร', 'ปทุมธานี'],
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'ม่านเมืองนนท์',
    url: 'https://mannmuangnont.vercel.app',
  },
}

export default function TilesLayout({ children }: { children: React.ReactNode }) {
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

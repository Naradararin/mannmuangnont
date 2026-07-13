import type { Metadata } from 'next'
import { CURTAINS_FAQ } from '@/components/sections/curtains-content'

export const metadata: Metadata = {
  title: 'ผ้าม่าน นนทบุรี กรุงเทพ ติดตั้งโดยช่างประจำ',
  description:
    'ร้านผ้าม่าน นนทบุรี รับงานถึงกรุงเทพ ครบทุกแบบ จีบ ลอน ตาไก่ พับ มู่ลี่ ปรับแสง สำรวจหน้างานฟรี ใบเสนอราคาใน 24 ชม.',
  alternates: { canonical: '/curtains' },
  openGraph: {
    title: 'ผ้าม่าน นนทบุรี กรุงเทพ ติดตั้งโดยช่างประจำ | ม่านเมืองนนท์',
    description:
      'รับออกแบบและติดตั้งผ้าม่านครบวงจร ครอบคลุมนนทบุรีและกรุงเทพฯ สำรวจหน้างานฟรี',
  },
}

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CURTAINS_FAQ.th.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Curtain installation',
  name: 'ผ้าม่าน นนทบุรี — ม่านเมืองนนท์',
  areaServed: ['นนทบุรี', 'กรุงเทพมหานคร', 'ปทุมธานี'],
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'ม่านเมืองนนท์',
    url: 'https://mannmuangnont.vercel.app',
  },
}

export default function CurtainsLayout({ children }: { children: React.ReactNode }) {
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

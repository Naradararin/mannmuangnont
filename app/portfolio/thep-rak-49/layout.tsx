import type { Metadata } from 'next'
import { PORTFOLIO } from '@/lib/portfolio-data'

// The Thep Rak 49 page is a client component, so its metadata lives here.
// All values derive from the real portfolio entry — no invented fields.
const entry = PORTFOLIO.find(e => e.detailHref === '/portfolio/thep-rak-49')

export const metadata: Metadata = entry
  ? {
      title: 'ผ้าม่าน วอลเปเปอร์ คฤหาสน์ เทพรักษ์ 49 กรุงเทพ — ผลงานติดตั้งจริง',
      description: entry.description,
      alternates: { canonical: '/portfolio/thep-rak-49' },
      openGraph: {
        title: 'ผ้าม่าน วอลเปเปอร์ คฤหาสน์ เทพรักษ์ 49 กรุงเทพ — ผลงานติดตั้งจริง',
        description: entry.description,
        images: entry.imageUrls.length ? [{ url: entry.imageUrls[0] }] : undefined,
      },
    }
  : {}

export default function ThepRak49Layout({ children }: { children: React.ReactNode }) {
  return children
}

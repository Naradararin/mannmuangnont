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

export const metadata: Metadata = {
  metadataBase: new URL('https://mannmuangnont.vercel.app'),
  title: {
    default: 'ผ้าม่าน นนทบุรี ติดตั้งวอลเปเปอร์ กระเบื้อง | ม่านเมืองนนท์',
    template: '%s | ม่านเมืองนนท์',
  },
  description:
    'ร้านผ้าม่าน นนทบุรี ติดตั้งวอลเปเปอร์และกระเบื้องครบวงจร โดยช่างประจำพื้นที่บางใหญ่ สำรวจหน้างานฟรี ใบเสนอราคาใน 24 ชม.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://mannmuangnont.vercel.app',
    siteName: 'ม่านเมืองนนท์',
    title: 'ผ้าม่าน นนทบุรี ติดตั้งวอลเปเปอร์ กระเบื้อง | ม่านเมืองนนท์',
    description:
      'ผ้าม่าน · วอลเปเปอร์ · กระเบื้อง — ติดตั้งโดยช่างประจำพื้นที่นนทบุรี สำรวจหน้างานฟรี',
    images: [
      {
        url: '/images/hero/473278.jpg',
        width: 1200,
        height: 630,
        alt: 'ผลงานติดตั้งผ้าม่านโดยม่านเมืองนนท์ นนทบุรี',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'ม่านเมืองนนท์',
  description:
    'ร้านผ้าม่าน วอลเปเปอร์ และกระเบื้อง ออกแบบ-ติดตั้งครบวงจรในนนทบุรี สำรวจหน้างานฟรี',
  url: 'https://mannmuangnont.vercel.app',
  telephone: '+66-92-229-4692',
  image: 'https://mannmuangnont.vercel.app/images/brand/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '55/76 หมู่ที่ 1',
    addressLocality: 'บางใหญ่',
    addressRegion: 'นนทบุรี',
    postalCode: '11140',
    addressCountry: 'TH',
  },
  areaServed: ['นนทบุรี', 'บางใหญ่', 'บางบัวทอง', 'ราชพฤกษ์', 'ปากเกร็ด', 'บางกรวย'],
  sameAs: ['https://www.facebook.com/yandsun', 'https://line.me/ti/p/Hz-QrG-Dyo'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={cn(sarabun.variable, cormorant.variable, dmSans.variable, ekkamai.variable, "font-sans", geist.variable)}>
      <body className="font-sarabun antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}

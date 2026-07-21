'use client'

import Image from 'next/image'
import { FadeIn, FadeInItem } from '@/components/motion/fade-in'
import { useLang } from '@/lib/lang'

const COLLECTION_IMAGES = [
  { src: '/images/collection/curtains.png', objectPosition: 'center 40%' },
  { src: '/images/collection/wallpaper.png', objectPosition: 'center center' },
  { src: '/images/collection/tiles.png', objectPosition: 'center 60%' },
]

// Portfolio category (Thai key used by PortfolioGallery's filter), parallel to
// the product order below: Curtains / Wallpaper / Floor Tiles. Kept for any
// other component that still deep-links into the filtered portfolio view.
const COLLECTION_CATS = ['ผ้าม่าน', 'วอลเปเปอร์', 'กระเบื้องยาง']

// Dedicated service page for each collection, in the same order as
// `products` below (Curtains / Wallpaper / Vinyl Flooring). "ดูเพิ่มเติม"
// now sends visitors to the real service page (with its own FAQ + schema)
// instead of a same-page portfolio filter, so these pages stop being orphans.
const COLLECTION_HREFS = ['/curtains', '/wallpaper', '/tiles']

const CONTENT = {
  th: {
    eyebrow: 'คอลเลกชัน',
    products: [
      {
        tag: 'ผ้าม่าน',
        title: 'Curtains',
        desc: 'ม่านจีบ ม่านลอน ม่านม้วน และผ้าทึบ Blackout สั่งตัดตามขนาดหน้าต่าง เลือกเนื้อผ้าลินิน ผ้าฝ้าย และผ้าโปร่งสำหรับกรองแสง พร้อมรางและอุปกรณ์ติดตั้งครบชุด',
        cta: 'ดูเพิ่มเติม →',
      },
      {
        tag: 'วอลเปเปอร์',
        title: 'Wallpaper',
        desc: 'วอลเปเปอร์ลายธรรมชาติ ลายเรขาคณิต และลายผ้าทอ นำเข้าจากยุโรปและเกาหลี ผิวสัมผัสหลากหลายตั้งแต่ผิวด้าน ผิวมุก ไปจนถึงลายนูน 3 มิติ ทนความชื้น ติดตั้งโดยช่างมืออาชีพ',
        cta: 'ดูเพิ่มเติม →',
      },
      {
        tag: 'กระเบื้องยาง',
        title: 'Vinyl Flooring',
        desc: 'กระเบื้องยางลายไม้ ให้สัมผัสอบอุ่นเหมือนพื้นไม้จริง ติดตั้งง่าย ทนทาน ดูแลรักษาง่ายกว่าพื้นไม้จริง เหมาะกับห้องนั่งเล่นและห้องนอน',
        cta: 'ดูเพิ่มเติม →',
      },
    ],
  },
  en: {
    eyebrow: 'Collections',
    products: [
      {
        tag: 'Made to measure',
        title: 'Curtains',
        desc: 'Pleated, ripple-fold, roller, and blackout curtains made to your window measurements. Choose from linen, cotton, and sheer fabrics for light filtering — rails and hardware fully included.',
        cta: 'Learn more →',
      },
      {
        tag: 'European imports',
        title: 'Wallpaper',
        desc: 'Nature prints, geometric patterns, and woven textures imported from Europe and Korea. Available in matte, pearl, and embossed 3D finishes — moisture-resistant and professionally installed.',
        cta: 'Learn more →',
      },
      {
        tag: 'Wood-look vinyl',
        title: 'Vinyl Flooring',
        desc: 'Wood-grain vinyl flooring that captures the warmth of real wood \u2014 easy to install, durable, and simpler to maintain than natural timber. Suited to living rooms and bedrooms.',
        cta: 'Learn more →',
      },
    ],
  },
}

export function Collections() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section
      id="collections"
      aria-label={lang === 'th' ? 'คอลเลกชันสินค้า' : 'Product collections'}
      style={{ backgroundColor: '#F4F1EA' }}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-[72px] md:px-10 md:py-[120px]">
        <FadeIn>
          <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">
            {c.eyebrow}
          </p>
        </FadeIn>

        <FadeIn stagger className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {c.products.map((p, idx) => (
            <FadeInItem key={p.title} className="group h-full">
              <div
                className="flex h-full flex-col overflow-hidden rounded-sm transition-colors duration-300"
                style={{
                  backgroundColor: '#FAF9F6',
                  border: '1px solid rgba(203,185,164,0.30)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(164,141,120,0.50)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(203,185,164,0.30)')}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={COLLECTION_IMAGES[idx % COLLECTION_IMAGES.length].src}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: COLLECTION_IMAGES[idx % COLLECTION_IMAGES.length].objectPosition,
                    }}
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span
                    className="inline-block rounded-full px-3 py-1 font-dm-sans text-[11px] uppercase tracking-[0.1em] text-sage"
                    style={{ backgroundColor: '#E6DAC8' }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-cormorant text-2xl text-ink">{p.title}</h3>
                  <p className="mt-2 font-sarabun text-sm leading-[1.8] text-ink/70">{p.desc}</p>
                  <a
                    href={COLLECTION_HREFS[idx % COLLECTION_HREFS.length]}
                    className="mt-auto inline-flex h-11 items-center pt-4 font-dm-sans text-[13px] tracking-[0.08em] text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-sage"
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}

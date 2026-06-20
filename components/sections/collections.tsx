'use client'

import { FadeIn, FadeInItem } from '@/components/motion/fade-in'
import { useLang } from '@/lib/lang'

const PRODUCT_STYLES = [
  {
    backgroundImage: [
      'repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 44px)',
      'linear-gradient(to bottom right, #d4c4a8, #c0aa82, #9c8860)',
    ].join(', '),
    backgroundSize: 'auto, 100% 100%',
  },
  {
    backgroundImage: [
      'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
      'linear-gradient(to bottom right, #4a6741, #3d5838, #2a4030)',
    ].join(', '),
    backgroundSize: '22px 22px, 100% 100%',
  },
  {
    backgroundImage: [
      'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      'linear-gradient(to bottom right, #b8b5ae, #9e9b93, #7a776f)',
    ].join(', '),
    backgroundSize: '54px 54px, 54px 54px, 100% 100%',
  },
]

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
        tag: 'กระเบื้อง',
        title: 'Floor Tiles',
        desc: 'กระเบื้องลายหินอ่อน ลายไม้ และเซรามิกพื้นผิวด้าน คอลเลกชันนำเข้าจากอิตาลีและสเปน เหมาะกับพื้นที่ใช้งานหนักและกันลื่น มีบริการให้คำปรึกษาเลือกขนาดและลายให้เข้ากับพื้นที่จริง',
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
        tag: 'Italian collection',
        title: 'Floor Tiles',
        desc: 'Marble-look, wood-effect, and matte ceramic tiles from Italian and Spanish collections. Suitable for high-traffic and wet areas. Free consultation on size and pattern selection for your space.',
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
      className="mx-auto max-w-[1280px] px-6 py-[72px] md:px-10 md:py-[120px]"
    >
      <FadeIn>
        <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">
          {c.eyebrow}
        </p>
      </FadeIn>

      <FadeIn stagger className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        {c.products.map((p, idx) => (
          <FadeInItem key={p.title} className="group">
            <div className="overflow-hidden rounded-sm border border-transparent transition-colors duration-300 group-hover:border-sage">
              <div className="aspect-[4/3] overflow-hidden">
                <div
                  className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  style={PRODUCT_STYLES[idx % PRODUCT_STYLES.length]}
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-sage/10 px-3 py-1 font-dm-sans text-[11px] uppercase tracking-[0.1em] text-sage">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-cormorant text-2xl text-ink">{p.title}</h3>
                <p className="mt-2 font-sarabun text-sm leading-[1.8] text-ink/70">{p.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex h-11 items-center font-dm-sans text-[13px] tracking-[0.08em] text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-sage"
                >
                  {p.cta}
                </a>
              </div>
            </div>
          </FadeInItem>
        ))}
      </FadeIn>
    </section>
  )
}

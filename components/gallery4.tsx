'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useLang } from '@/lib/lang'

const ITEMS = {
  th: [
    {
      id: 'curtains-bangyai',
      tag: 'ผ้าม่าน · บางใหญ่',
      title: 'บ้านเดี่ยวสไตล์มินิมอล',
      description: 'ม่านจีบ Blackout เนื้อผ้าลินิน โทนสีธรรมชาติ เข้ากับงานตกแต่งภายในแบบมินิมอล',
    },
    {
      id: 'wallpaper-pakkret',
      tag: 'วอลเปเปอร์ · ปากเกร็ด',
      title: 'คอนโดมิเนียม ลายธรรมชาติ',
      description: 'วอลเปเปอร์ลายใบไม้นำเข้าจากยุโรป ติดผนังห้องนั่งเล่นและห้องนอนใหญ่',
    },
    {
      id: 'tiles-muangnont',
      tag: 'กระเบื้อง · เมืองนนท์',
      title: 'รีโนเวทพื้นที่ครัวและห้องน้ำ',
      description: 'กระเบื้องลายหินอ่อน Italian Collection พื้นผิวกันลื่นสำหรับพื้นที่ใช้งานหนัก',
    },
    {
      id: 'curtains-ratchaphruek',
      tag: 'ผ้าม่าน · ราชพฤกษ์',
      title: 'ทาวน์โฮม 3 ชั้น',
      description: 'ม่านม้วนและม่านลอนผสมผสาน เพื่อควบคุมแสงในแต่ละช่วงเวลาของวัน',
    },
    {
      id: 'wallpaper-bangyai-2',
      tag: 'วอลเปเปอร์ · บางใหญ่',
      title: 'ห้องทำงานโฮมออฟฟิศ',
      description: 'วอลเปเปอร์ลายเรขาคณิตโทนเข้ม สร้างบรรยากาศโฟกัสให้พื้นที่ทำงาน',
    },
  ],
  en: [
    {
      id: 'curtains-bangyai',
      tag: 'Curtains · Bang Yai',
      title: 'Minimalist detached house',
      description: 'Linen Blackout pleated curtains in natural tones, perfectly matched to the minimalist interior.',
    },
    {
      id: 'wallpaper-pakkret',
      tag: 'Wallpaper · Pak Kret',
      title: 'Condominium — nature print',
      description: 'European-imported leaf-print wallpaper installed in the living room and master bedroom.',
    },
    {
      id: 'tiles-muangnont',
      tag: 'Tiles · Mueang Nont',
      title: 'Kitchen & bathroom renovation',
      description: 'Italian Collection marble-look tiles with anti-slip surface for high-traffic wet areas.',
    },
    {
      id: 'curtains-ratchaphruek',
      tag: 'Curtains · Ratchaphruek',
      title: '3-storey townhouse',
      description: 'Combined roller and ripple-fold curtains for precise light control throughout the day.',
    },
    {
      id: 'wallpaper-bangyai-2',
      tag: 'Wallpaper · Bang Yai',
      title: 'Home office workspace',
      description: 'Dark geometric wallpaper creating a focused, professional atmosphere for the work area.',
    },
  ],
}

const HEADING = {
  th: {
    eyebrow: 'Portfolio',
    title: 'ผลงานของเรา',
    desc: 'ตัวอย่างโปรเจกต์ผ้าม่าน วอลเปเปอร์ และกระเบื้องที่เราออกแบบและติดตั้งให้ลูกค้าในพื้นที่นนทบุรีและกรุงเทพฯ',
    cta: 'ดูโปรเจกต์',
  },
  en: {
    eyebrow: 'Portfolio',
    title: 'Our Work',
    desc: 'A selection of curtain, wallpaper, and tile projects we have designed and installed for clients across Nonthaburi and Bangkok.',
    cta: 'View project',
  },
}

const CARD_STYLES = [
  {
    backgroundImage: [
      'repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 44px)',
      'linear-gradient(to bottom right, #d4c4a8, #b8a57a, #8a7250)',
    ].join(', '),
    backgroundSize: 'auto, 100% 100%',
  },
  {
    backgroundImage: [
      'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
      'linear-gradient(to bottom right, #4a6741, #3a5433, #2a3f25)',
    ].join(', '),
    backgroundSize: '22px 22px, 100% 100%',
  },
  {
    backgroundImage: [
      'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      'linear-gradient(to bottom right, #b8b5ae, #908c83, #6e6a62)',
    ].join(', '),
    backgroundSize: '54px 54px, 54px 54px, 100% 100%',
  },
  {
    backgroundImage: [
      'repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 44px)',
      'linear-gradient(to bottom right, #c9b99a, #a8935e, #7a6a40)',
    ].join(', '),
    backgroundSize: 'auto, 100% 100%',
  },
  {
    backgroundImage: [
      'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)',
      'linear-gradient(to bottom right, #2d2d3e, #1f1f2e, #14141e)',
    ].join(', '),
    backgroundSize: 'auto, 100% 100%',
  },
]

const Gallery4 = () => {
  const { lang } = useLang()
  const items = ITEMS[lang]
  const h = HEADING[lang]

  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!carouselApi) return
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }
    updateSelection()
    carouselApi.on('select', updateSelection)
    return () => { carouselApi.off('select', updateSelection) }
  }, [carouselApi])

  return (
    <section id="portfolio" aria-label={lang === 'th' ? 'ผลงานของเรา' : 'Our portfolio'} className="py-[72px] md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <div className="flex flex-col gap-3">
            <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">{h.eyebrow}</p>
            <h2 className={`text-[32px] leading-[1.25] text-ink md:text-[40px] ${lang === 'th' ? 'font-ekkamai font-light tracking-wide' : 'font-cormorant italic'}`}>{h.title}</h2>
            <p className="max-w-lg font-sarabun text-sm leading-[1.8] text-ink/70">{h.desc}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto text-ink hover:bg-surface hover:text-ink"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto text-ink hover:bg-surface hover:text-ink"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{ breakpoints: { '(max-width: 768px)': { dragFree: true } } }}
        >
          <CarouselContent className="ml-0 px-6 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:px-0">
            {items.map((item, idx) => (
              <CarouselItem key={item.id} className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
                <a href="#contact" className="group block rounded-sm">
                  <div
                    className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-sm md:aspect-[5/4] lg:aspect-[16/9]"
                    style={CARD_STYLES[idx % CARD_STYLES.length]}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent transition-opacity duration-300 group-hover:from-ink/80" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-canvas md:p-8">
                      <span className="mb-3 rounded-full bg-canvas/90 px-3 py-1.5 font-dm-sans text-[11px] uppercase tracking-[0.1em] text-ink">
                        {item.tag}
                      </span>
                      <div className={`leading-tight ${lang === 'th' ? 'font-ekkamai font-light text-lg md:text-xl' : 'font-cormorant italic text-xl md:text-2xl'}`}>{item.title}</div>
                      <div className="mt-2 line-clamp-2 font-sarabun text-sm leading-[1.7] text-canvas/80">{item.description}</div>
                      <div className="mt-6 flex items-center font-dm-sans text-[13px] tracking-[0.08em]">
                        {h.cta}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? 'bg-sage' : 'bg-sand/30'}`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`${lang === 'th' ? 'ไปที่ผลงานที่' : 'Go to project'} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Gallery4 }

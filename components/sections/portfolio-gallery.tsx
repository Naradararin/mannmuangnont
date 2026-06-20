import { FadeIn, FadeInItem } from '@/components/motion/fade-in'
import { Placeholder } from '@/components/ui/placeholder'

const PROJECTS = [
  { tag: 'ผ้าม่าน · บางใหญ่', size: 'large' as const },
  { tag: 'วอลเปเปอร์ · ปากเกร็ด', size: 'small' as const },
  { tag: 'กระเบื้อง · เมืองนนท์', size: 'small' as const },
]

export function PortfolioGallery() {
  return (
    <section
      id="portfolio"
      aria-label="ผลงานของเรา"
      className="mx-auto max-w-[1280px] px-6 py-[72px] md:px-10 md:py-[120px]"
    >
      <FadeIn>
        <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage">Portfolio</p>
      </FadeIn>

      <FadeIn stagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <FadeInItem className="group relative aspect-[2/3] overflow-hidden md:row-span-2">
          <Placeholder className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-sage/0 transition-colors duration-300 group-hover:bg-sage/20" />
          <span className="absolute bottom-4 left-4 rounded-full bg-canvas/80 px-3 py-1.5 font-dm-sans text-[11px] uppercase tracking-[0.1em] text-ink">
            {PROJECTS[0].tag}
          </span>
          <span className="absolute inset-0 flex items-center justify-center font-dm-sans text-sm uppercase tracking-[0.15em] text-canvas opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            ดูโปรเจกต์
          </span>
        </FadeInItem>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:contents">
          {PROJECTS.slice(1).map((project) => (
            <FadeInItem key={project.tag} className="group relative aspect-square overflow-hidden">
              <Placeholder className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-sage/0 transition-colors duration-300 group-hover:bg-sage/20" />
              <span className="absolute bottom-4 left-4 rounded-full bg-canvas/80 px-3 py-1.5 font-dm-sans text-[11px] uppercase tracking-[0.1em] text-ink">
                {project.tag}
              </span>
              <span className="absolute inset-0 flex items-center justify-center font-dm-sans text-sm uppercase tracking-[0.15em] text-canvas opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                ดูโปรเจกต์
              </span>
            </FadeInItem>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

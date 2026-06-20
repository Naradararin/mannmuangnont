import { FadeIn } from '@/components/motion/fade-in'

export function CtaBanner() {
  return (
    <section
      id="contact"
      aria-label="ติดต่อเรา"
      className="bg-ink px-6 py-[72px] text-canvas md:py-[120px]"
    >
      <FadeIn className="mx-auto flex max-w-[1280px] flex-col items-start gap-10 md:px-10">
        <h2 className="font-cormorant text-[32px] italic leading-[1.2] md:text-[48px]">
          พร้อมเริ่มตกแต่งบ้านของคุณแล้วหรือยัง?
          <br />
          <span className="not-italic text-canvas/70">Let&apos;s create your space together.</span>
        </h2>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
          <a
            href="https://line.me/R/ti/p/@0922294692"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-full bg-sage px-7 font-dm-sans text-[13px] tracking-[0.08em] text-canvas transition-opacity hover:opacity-90"
          >
            แอด LINE @0922294692
          </a>
          <a
            href="tel:0922294692"
            className="flex h-11 items-center justify-center rounded-full border border-canvas px-7 font-dm-sans text-[13px] tracking-[0.08em] text-canvas transition-colors hover:bg-canvas hover:text-ink"
          >
            โทร 092-229-4692
          </a>
        </div>
      </FadeIn>
    </section>
  )
}

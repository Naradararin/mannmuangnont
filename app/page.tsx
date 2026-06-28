import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ContactFab } from '@/components/contact-fab'
import { HeroGallery } from '@/components/sections/hero-gallery'
import { MarqueeImages } from '@/components/sections/marquee-images'
import { Collections } from '@/components/sections/collections'
import { About } from '@/components/sections/about'
import { WhyUs } from '@/components/sections/why-us'
import { Testimonials } from '@/components/sections/testimonials'
import { Booking } from '@/components/sections/booking'
import { PortfolioGallery } from '@/components/sections/portfolio-gallery'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroGallery />
        <MarqueeImages />
        <About />
        <Collections />
        <WhyUs />
        <PortfolioGallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <ContactFab />
    </>
  )
}

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ContactFab } from '@/components/contact-fab'
import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/sections/marquee'
import { Collections } from '@/components/sections/collections'
import { About } from '@/components/sections/about'
import { WhyUs } from '@/components/sections/why-us'
import { Testimonials } from '@/components/sections/testimonials'
import { Booking } from '@/components/sections/booking'
import { Gallery4 } from '@/components/gallery4'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collections />
        <About />
        <WhyUs />
        <Gallery4 />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <ContactFab />
    </>
  )
}

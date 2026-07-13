import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ContactFab } from '@/components/contact-fab'
import { TilesContent } from '@/components/sections/tiles-content'

export default function TilesPage() {
  return (
    <>
      <Navbar />
      <TilesContent />
      <Footer />
      <ContactFab />
    </>
  )
}

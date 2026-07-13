import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ContactFab } from '@/components/contact-fab'
import { CurtainsContent } from '@/components/sections/curtains-content'

export default function CurtainsPage() {
  return (
    <>
      <Navbar />
      <CurtainsContent />
      <Footer />
      <ContactFab />
    </>
  )
}

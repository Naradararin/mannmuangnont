import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ContactFab } from '@/components/contact-fab'
import { WallpaperContent } from '@/components/sections/wallpaper-content'

export default function WallpaperPage() {
  return (
    <>
      <Navbar />
      <WallpaperContent />
      <Footer />
      <ContactFab />
    </>
  )
}

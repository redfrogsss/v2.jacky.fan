import { Alert, Footer, Navbar } from '@/components'
import { AboutMeSection, ContactMeSection, HeroSection, BottomSection, WorkSection } from '@/components/home/sections'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <WorkSection />
      <ContactMeSection />
      <BottomSection />
      <Footer />
      <Alert />
    </main >
  )
}
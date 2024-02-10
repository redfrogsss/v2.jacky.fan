import { Alert, Footer, Navbar } from '@/components'
import LocomotiveScrollWrappper from '@/components/animation/LocomotiveScrollWrapper'
import { AboutMeSection, ContactMeSection, HeroSection, BottomSection, WorkSection } from '@/components/home/sections'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <LocomotiveScrollWrappper>
        <HeroSection />
        <AboutMeSection />
        <WorkSection />
        <ContactMeSection />
        <BottomSection />
        <Footer />
        <Alert />
      </LocomotiveScrollWrappper>
    </main >
  )
}
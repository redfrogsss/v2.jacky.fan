import { Suspense } from 'react'
import { Alert, Footer, LoadingScreen, Navbar } from '@/components'
import { AboutMeSection, ContactMeSection, HeroSection, BottomSection, WorkSection } from '@/components/home/sections'

export default function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <HeroSection />
        <AboutMeSection />
        <WorkSection />
        <ContactMeSection />
        <BottomSection />
        <Footer />
        <Alert />
      </Suspense>
    </main >
  )
}
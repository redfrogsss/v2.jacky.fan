import { Alert, Footer, Navbar } from '@/components'
import LocomotiveScrollWrappper from '@/components/animation/LocomotiveScrollWrapper'
import { Page } from '@/components/basic'
import { AboutMeSection, ContactMeSection, HeroSection, BottomSection, WorkSection } from '@/components/home/sections'

export default function Home() {
  return (
    <Page reserveNavbarHeight={false}>
      <HeroSection />
      <AboutMeSection />
      <WorkSection />
      <ContactMeSection />
      <BottomSection />
      <Alert />
    </Page>
  )
}
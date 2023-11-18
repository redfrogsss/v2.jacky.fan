import Alert from '@/components/Alert'
import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import AboutMeSection from '@/components/home/AboutMeSection'
import BottomSection from '@/components/home/BottomSection'
import ContactMeSection from '@/components/home/ContactMeSection'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import WorkSection from '@/components/home/WorkSection'

export default function Home() {
  return (
    <main className="relative">
      {/* <LoadingScreen> */}
      <Navbar />
      <Hero />
      <AboutMeSection />
      <WorkSection />
      <ContactMeSection />
      <BottomSection />
      <Footer />
      <Alert />
      {/* </LoadingScreen> */}
    </main >
  )
}
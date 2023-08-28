import Navbar from '@/components/Navbar'
import AboutMeSection from '@/components/home/AboutMeSection'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import WorkSection from '@/components/home/WorkSection'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <AboutMeSection />
      <WorkSection />
      <Footer />
    </main>
  )
}

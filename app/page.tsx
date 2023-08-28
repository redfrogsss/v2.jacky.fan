import Navbar from '@/components/Navbar'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import WorkSection from '@/components/home/WorkSection'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <WorkSection />
      <Footer />
    </main>
  )
}

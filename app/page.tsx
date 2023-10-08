import Alert from '@/components/Alert'
import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import AboutMeSection from '@/components/home/AboutMeSection'
import BottomSection from '@/components/home/BottomSection'
import ContactMeSection from '@/components/home/ContactMeSection'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import WorkSection from '@/components/home/WorkSection'
import { AlertContextProvider } from '@/contexts/AlertContext'
import { RecaptchaProviders } from '@/providers/RecaptchaProvider'

export default function Home() {
  return (
    <main className="relative">
      <RecaptchaProviders>
        <AlertContextProvider>
          <LoadingScreen>
            <Navbar />
            <Hero />
            <AboutMeSection />
            <WorkSection />
            <ContactMeSection />
            <BottomSection />
            <Footer />
            <Alert />
          </LoadingScreen>
        </AlertContextProvider >
      </RecaptchaProviders>
    </main >
  )
}

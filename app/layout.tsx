import './globals.css'
import type { Metadata } from 'next'
import { outfit, patrick_hand, dosis, cabinSketch } from './fonts'

import { AlertContextProvider } from '@/contexts/AlertContext'
import { RecaptchaProviders } from '@/providers/RecaptchaProvider'
import { LoadingScreenProvider } from '@/contexts/LoadingContext'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import LocomotiveScrollWrappper from '@/components/animation/LocomotiveScrollWrapper'
import { LocomotiveScrollPositionProvider } from '@/contexts/LocomotiveScrollPositionContext'

export const metadata: Metadata = {
  title: "Jacky FAN",
  description: 'Hello I am Jacky FAN, a front end developer in Hong Kong who focus on building high-quality websites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${outfit.variable} ${patrick_hand.variable} ${dosis.variable} ${cabinSketch.variable} overflow-x-hidden`}>
        <RecaptchaProviders>
          <AlertContextProvider>
            <LoadingScreenProvider>
              <LocomotiveScrollPositionProvider>
                <LocomotiveScrollWrappper>
                  {children}
                </LocomotiveScrollWrappper>
              </LocomotiveScrollPositionProvider>
            </LoadingScreenProvider>
          </AlertContextProvider >
        </RecaptchaProviders>
      </body>
      <GoogleAnalytics />
    </html>
  )
}

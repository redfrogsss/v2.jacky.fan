import './globals.css'
import type { Metadata } from 'next'
import { outfit, patrick_hand } from './fonts'

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
      <body className={`${outfit.className} ${outfit.variable} ${patrick_hand.variable} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}

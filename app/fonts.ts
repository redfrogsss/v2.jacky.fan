import { Outfit, Patrick_Hand } from "next/font/google";

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
    weight: ["400", "700"],
})

// Handwriting font
export const patrick_hand = Patrick_Hand({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400"],
    variable: '--font-patrick-hand',
})

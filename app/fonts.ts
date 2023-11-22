import { Outfit, Patrick_Hand, Dosis, Cabin_Sketch } from "next/font/google";

export const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
    weight: ["400", "700"],
});

// Handwriting font
export const patrick_hand = Patrick_Hand({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
    variable: "--font-patrick-hand",
});

export const dosis = Dosis({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
    variable: "--font-dosis",
});

export const cabinSketch = Cabin_Sketch({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
    variable: "--font-cabin-sketch",
});

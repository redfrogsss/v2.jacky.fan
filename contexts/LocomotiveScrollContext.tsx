'use client'

import { createContext, useState } from "react"

export const LocomotiveScrollContext = createContext<any>(undefined);

export function LocomotiveScrollProvider({ children }: { children: React.ReactNode }) {
    const [locoScroll, setlocoScroll] = useState<any>(undefined);

    return <LocomotiveScrollContext.Provider value={{locoScroll, setlocoScroll}}>
        {children}
    </LocomotiveScrollContext.Provider>
}
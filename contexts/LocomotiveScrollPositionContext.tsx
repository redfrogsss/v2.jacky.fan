'use client'

import { createContext, useState } from "react"

interface LocomotiveScrollPositionProps {
    limit: { x: number, y: number },
    scroll: { x: number, y: number },
}

interface LocomotiveScrollPositionContextProps {
    scrollPos: LocomotiveScrollPositionProps | undefined,
    setScrollPos: React.Dispatch<React.SetStateAction<LocomotiveScrollPositionProps>> | undefined,
}

export const LocomotiveScrollPositionContext = createContext<LocomotiveScrollPositionContextProps>({scrollPos: undefined, setScrollPos: undefined});

export function LocomotiveScrollPositionProvider({ children }: { children: React.ReactNode }) {
    const defaultScrollPos = {
        limit: {x: 0, y: 0},
        scroll: {x: 0, y: 0},
    }
    const [scrollPos, setScrollPos] = useState<LocomotiveScrollPositionProps>(defaultScrollPos);

    return <LocomotiveScrollPositionContext.Provider value={{scrollPos, setScrollPos}}>
        {children}
    </LocomotiveScrollPositionContext.Provider>
}
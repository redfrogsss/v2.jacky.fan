'use client'

import { createContext, useState } from "react"

export const PageExitContext = createContext<any>(undefined);

export function PageExitContextProvider({ children }: { children: React.ReactNode }) {
    const [pageExit, setPageExit] = useState<boolean>(false);

    return <PageExitContext.Provider value={{pageExit, setPageExit}}>
        {children}
    </PageExitContext.Provider>
}
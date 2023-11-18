'use client'

import LoadingScreenContextProps from "@/interfaces/LoadingProps";
import { createContext, useEffect, useState } from "react";

export const LoadingScreenContext = createContext<LoadingScreenContextProps>({ isLoadingDone: false, setIsLoadingDone: undefined });

export function LoadingScreenProvider({ children }: { children: React.ReactNode }) {
    const [isLoadingDone, setIsLoadingDone] = useState<boolean>(false);

    useEffect(() => {
        console.log("LoadingScreenContext isDone: ", isLoadingDone);
    }, [isLoadingDone])

    return (
        <LoadingScreenContext.Provider value={{ isLoadingDone, setIsLoadingDone }}>
            {children}
        </LoadingScreenContext.Provider>
    );
}
'use client'

import { AlertContextProps, AlertProps } from "@/interfaces/AlertProps";
import { createContext, useState } from "react";

export const AlertContext = createContext<AlertContextProps>({ alert: undefined, setAlert: undefined });

export function AlertContextProvider({ children }: { children: React.ReactNode }) {
    const [alert, setAlert] = useState<AlertProps>({
        show: false,
        message: "Hello World",
        type: "success"
    });

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
}
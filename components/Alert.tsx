'use client'

import { AlertContext } from "@/contexts/AlertContext";
import { AlertProps, AlertContextProps } from "@/interfaces/AlertProps";
import { useContext, useEffect, useState } from "react";

export default function Alert() {

    const { alert, setAlert } = useContext<AlertContextProps>(AlertContext);

    const getAlertClass = () => {
        if (alert === undefined || alert.type === "normal") { return "alert"; }
        else { return `alert alert-${alert.type}`; }
    }

    useEffect(() => {
        console.log(alert)
        if (alert?.show === true) {
            if (setAlert === undefined) { return; }

            setTimeout(() => {
                setAlert({
                    show: false,
                    message: "",
                    type: "normal"
                });
            }, 3000);
        }
    }, [alert]);

    return (
        <div className={`container mx-auto z-10 fixed bottom-0 left-0 right-0 w-full ${alert?.show === true ? "" : "hidden"}`}>
            <div className={getAlertClass()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{alert?.message}</span>
            </div>
        </div>

    );
}
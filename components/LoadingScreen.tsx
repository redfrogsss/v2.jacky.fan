import React from "react"
import Pien from "./icons/Pien";

export default function LoadingScreen() {
    return (
        <>
            <div className="bg-base-300 absolute h-screen w-screen top-0 left-0 z-10">
                <div >
                    <div className="flex flex-col items-center justify-center h-screen w-100">
                        <div >
                            <Pien color="currentColor" className="w-full h-full" />
                        </div>
                        <p className="mt-2">Loading...</p>
                    </div>
                </div >
            </div>
        </>
    )
}
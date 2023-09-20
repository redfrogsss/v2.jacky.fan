'use client'

import React from "react"

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute inset-0 bg-base-100 z-10">
            <div className="flex flex-col items-center justify-center h-screen w-100">
                <img src="/pien.svg" alt="Git" className="w-16 aspect-square text-base-content" />
            </div>
        </div>
    )
}
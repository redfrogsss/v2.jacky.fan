'use client'

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'

export default function ToggleDayNight() {

    const [targetTheme, setTargetTheme] = useState<"night" | "winter">("night");

    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project

        if (document.querySelector("html")?.dataset.theme === "night") {
            setTargetTheme("winter");
        }
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setTargetTheme(targetTheme === "night" ? "winter" : "night");
    }

    return (
        <button
            className=""
            // data-toggle-theme="night,winter"
            data-set-theme={targetTheme}
            onClick={handleClick}
        >
            <SunIcon className="h-5 w-5 text-base-content" />
        </button>
    );
}
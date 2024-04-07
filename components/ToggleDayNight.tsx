'use client'

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'

export default function ToggleDayNight() {

    const [targetTheme, setTargetTheme] = useState<"nord" | "sunset">("nord");

    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project

        if (document.querySelector("html")?.dataset.theme === undefined) {
            setTargetTheme("sunset");
        } else if (document.querySelector("html")?.dataset.theme === "nord") {
            setTargetTheme("sunset");
        } else {
            setTargetTheme("nord");
        }
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setTargetTheme(targetTheme === "nord" ? "sunset" : "nord");
    }

    return (
        <button
            className=""
            // data-toggle-theme="night,winter"
            data-set-theme={targetTheme}
            onClick={handleClick}
            aria-label="Toggle Day/Night Mode"
        >
            {targetTheme === "nord" ?
                <SunIcon className="h-5 w-5 text-base-content" />
                :
                <MoonIcon className="h-5 w-5 text-base-content" />
            }
        </button>
    );
}
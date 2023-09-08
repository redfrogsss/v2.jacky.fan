import { useEffect, useState } from "react";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config'; // Fix the path
import { useWindowSize } from "./useWindowSize";

export function useBreakPoint() {
    const [breakpoint, setBreakpoint] = useState<string>('sm');
    const { width, height } = useWindowSize();

    const fullConfig = resolveConfig(tailwindConfig);

    const getBreakpointValue = (value: string): number =>
        +fullConfig.theme.screens[value].slice(
            0,
            fullConfig.theme.screens[value].indexOf('px')
        );

    const getCurrentBreakpoint = (): string => {
        let currentBreakpoint: string = "sm";
        let biggestBreakpointValue = 0;
        for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
            const breakpointValue = getBreakpointValue(breakpoint);
            if (
                breakpointValue > biggestBreakpointValue &&
                window.innerWidth >= breakpointValue
            ) {
                biggestBreakpointValue = breakpointValue;
                currentBreakpoint = breakpoint;
            }
        }
        return currentBreakpoint;
    };

    useEffect(() => {
        setBreakpoint(getCurrentBreakpoint());
    }, [width]);

    return { breakpoint }
}
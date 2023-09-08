import { useEffect, useState } from "react";

// https://devissuefixer.com/questions/how-to-detect-window-size-in-nextjs-ssr-using-react-hook
export function useWindowSize() {
    // Initialize state with the current window dimensions
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Update state with new window dimensions
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ens that effect is only run on mount and unmount

    return windowSize;
}
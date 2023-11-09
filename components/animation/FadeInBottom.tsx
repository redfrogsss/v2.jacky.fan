'use client'

import { useEffect, useRef, useState } from "react";

export default function FadeInBottom({ children }: { children: React.ReactNode }) {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isIntersecting === false && entry.isIntersecting === true) {
                    setIsIntersecting(entry.isIntersecting);
                }
            },
            {
                rootMargin: '-30% 0px'
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className={isIntersecting ? "fadeInBottom" : "opacity-0"} ref={ref}>
            {children}
        </div>
    );
}
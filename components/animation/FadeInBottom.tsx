'use client'

import { useEffect, useRef, useState } from "react";

export default function FadeInBottom({ children, triggerPoint = "-20%", extraClassName = "" }: { children: React.ReactNode, triggerPoint?: string, extraClassName?: string }) {

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
                rootMargin: `0px 0px ${triggerPoint} 0px`
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
        <div className={`${isIntersecting ? "fadeInBottom" : "opacity-0"} ${extraClassName}`} ref={ref}>
            {children}
        </div>
    );
}
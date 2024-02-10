'use client'

import { LocomotiveScrollPositionContext } from '@/contexts/LocomotiveScrollPositionContext';
import { useContext, useEffect, useRef } from 'react';

function LocomotiveScrollWrappper({ children }: { children: React.ReactNode }) {

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const {scrollPos, setScrollPos} = useContext(LocomotiveScrollPositionContext);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll({
                scrollFromAnywhere: true,
                el: scrollRef.current === null ? undefined : scrollRef.current,
                smooth: true,
                multiplier: 1,
            });

            // Handle Anchor Links because Locomotive Scroll breaks the behavior of anchor scroll
            scrollRef.current?.querySelectorAll("a[href^='#']").forEach(anchor => {
                anchor.addEventListener("click", event => {
                    const anchorTarget = anchor.getAttribute("href") ?? "";

                    event.preventDefault();
                    locomotiveScroll.scrollTo(anchorTarget)
                })
            });

            // Get Scroll Position
            locomotiveScroll.on("scroll", ({limit, scroll}) => {
                let newScrollPos = {limit, scroll};
                if (setScrollPos) setScrollPos(newScrollPos);
            })
        }
        )()
    }, [])

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
}

export default LocomotiveScrollWrappper;
'use client'

import { LocomotiveScrollPositionContext } from '@/contexts/LocomotiveScrollPositionContext';
import { useContext, useEffect, useRef } from 'react';
import { LocomotiveScrollContext } from '@/contexts/LocomotiveScrollContext';

function LocomotiveScrollWrappper({ children }: { children: React.ReactNode }) {

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const {scrollPos, setScrollPos} = useContext(LocomotiveScrollPositionContext);
    const {locoScroll, setlocoScroll} = useContext(LocomotiveScrollContext);

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
            document.querySelectorAll("a[href^='#']").forEach(anchor => {
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
                if (setlocoScroll) setlocoScroll(locomotiveScroll);
            });
            
            locomotiveScroll.on("call", () => {
                if (setlocoScroll) setlocoScroll(locomotiveScroll);
            });
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
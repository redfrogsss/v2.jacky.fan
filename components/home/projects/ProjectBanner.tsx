'use client'

import FadeInBottom from "@/components/animation/FadeInBottom";
import { ActiveLink, SectionContainer } from "@/components/basic";
import { LocomotiveScrollPositionContext } from "@/contexts/LocomotiveScrollPositionContext";
import { clamp } from "@/helpers/clamp";
import Image from 'next/image'
import { useContext, useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useBreakPoint } from '@/hooks/useBreakPoint';

export default function ProjectBanner({
    name = "Project Name",
    description = "Description",
    link = "#",
    img = "",
    posReverse = false,
}: {
    name: string;
    description: string;
    link: string;
    img: string;
    posReverse?: boolean
}) {

    const { scrollPos } = useContext(LocomotiveScrollPositionContext);
    const imgRef = useRef<HTMLDivElement | null>(null);
    const imgWrapperRef = useRef<HTMLDivElement | null>(null);
    const [posPercentage, setPosPercentage] = useState<number>(100);
    const [showImg, setShowImg] = useState<boolean>(true);

    const speed = 50;
    const offset = "-250px";

    const { breakpoint } = useBreakPoint();

    useEffect(() => {
        // setPosPercentage(clamp(((imgWrapperRef.current?.getBoundingClientRect().top ?? 100) / (window.innerHeight * 0.25)) * 100, -200, 0));
        setPosPercentage(((imgWrapperRef.current?.getBoundingClientRect().top ?? 100) / (window.innerHeight * 0.25)) * 100);
        const imgTop = imgRef.current?.getBoundingClientRect().top ?? 0;
        setShowImg(imgTop < -200);
    }, [scrollPos]);

    // debug
    // useEffect(()=>{
    //     console.log(breakpoint);
        
    // }, [breakpoint])

    const isSmallScreen = () => {
        if (breakpoint == "sm" || breakpoint == "md") return true;
        return false;
    }

    return (
        <FadeInBottom>
            <section className={`w-screen ${posReverse? "bg-gradient-to-r" : "bg-gradient-to-l"} from-accent to-primary text-primary-content mb-[80px] lg:mb-[350px] min-h-[38vh]`}>
                <SectionContainer extendRightSpacing={true}>
                    <div className={`flex flex-col-reverse ${posReverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-x-16`}>
                        <div className="flex flex-col gap-y-4 w-full">
                            <h3 className="text-4xl font-bold">
                                {name}
                            </h3>
                            <p>
                                {description}
                            </p>

                            <ActiveLink href={link} className="btn btn-neutral w-fit">
                                View More
                                <MagnifyingGlassIcon className="h-[1.2em] w-[1.2em]" />
                            </ActiveLink>
                        </div>
                        <div className="relative w-full" ref={imgWrapperRef}>
                            {(!posReverse) &&
                                <div className={`relative lg:absolute left-0 w-full lg:w-[calc(50vw-2rem)] max-w-[924px] aspect-video lg:aspect-auto lg:pb-[100%] !sm:max-lg:top-0 transition-opacity ${showImg ? "opacity-50" : "opacity-100"}`} ref={imgRef} style={{ top: isSmallScreen() ? "-32px" : `calc(${speed}px * (${posPercentage} / 100) + ${offset})` }}>
                                    <Image
                                        src={img}
                                        fill={true}
                                        alt="Project Name"
                                        className="object-contain"
                                    />
                                </div>
                            }
                            {posReverse && 
                                <div className={`relative lg:absolute right-0 w-full lg:w-[calc(50vw-2rem)] max-w-[924px] aspect-video lg:aspect-auto lg:pb-[100%] !sm:max-lg:top-0 transition-opacity ${showImg ? "opacity-50" : "opacity-100"}`} ref={imgRef} style={{ top: isSmallScreen() ? "-32px" : `calc(${speed}px * (${posPercentage} / 100) + ${offset})` }}>
                                    <Image
                                        src={img}
                                        fill={true}
                                        alt="Project Name"
                                        className="object-contain"
                                    />
                                </div>
                            }
                        </div>
                    </div>

                </SectionContainer>
            </section>
        </FadeInBottom>
    );
}
'use client'

import { useContext, useEffect, useRef } from "react";
import { PageExitContext } from "@/contexts/PageExitContext";


export default function PageEnterAnimation() {

    const animWrapperRef = useRef<null | HTMLDivElement>(null);
    const animContentRef = useRef<null | HTMLDivElement>(null);

    const { pageExit } = useContext(PageExitContext);

    useEffect(() => {
        setTimeout(() => {
            animWrapperRef.current?.classList.toggle("page-enter-animation--fadeout", true);
            animWrapperRef.current?.classList.toggle("page-enter-animation--faded", false);
        }, (1000));

        setTimeout(() => {
            animContentRef.current?.classList.toggle("page-enter-animation__text--fadeout", true);
        }, (800));
    }, []);

    useEffect(() => {
        if(animWrapperRef.current?.classList.contains("page-enter-animation--faded")) return;
        
        animWrapperRef.current?.classList.toggle("page-enter-animation--fadeout", false);
        animWrapperRef.current?.classList.toggle("page-enter-animation--faded", false);
        animWrapperRef.current?.classList.toggle("page-enter-animation--fadein", true);
    }, [pageExit])

    return (
        <div className="fixed top-0 left-0 w-screen h-[0vh] bg-base-300 z-50 page-enter-animation page-enter-animation--faded overflow-clip" ref={animWrapperRef}>
            <div className="absolute inset-0 m-auto text-2xl w-fit h-fit page-enter-animation__text" ref={animContentRef}>Hello World</div>
        </div>
    );
}
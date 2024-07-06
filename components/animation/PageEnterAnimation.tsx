'use client'

import { useContext, useEffect, useRef, useState } from "react";
import { PageExitContext } from "@/contexts/PageExitContext";


export default function PageEnterAnimation() {

    const animWrapperRef = useRef<null | HTMLDivElement>(null);
    const animContentRef = useRef<null | HTMLDivElement>(null);

    const { pageExit } = useContext(PageExitContext);


    const [emojiDisplay, setEmojiDisplay] = useState("");
    const [quoteDisplay, setQuoteDisplay] = useState("");
    
    useEffect(() => {
        setTimeout(() => {
            animWrapperRef.current?.classList.toggle("page-enter-animation--fadeout", true);
            animWrapperRef.current?.classList.toggle("page-enter-animation--faded", false);

            window.dispatchEvent(new Event("resize"));
        }, (1000));

        setTimeout(() => {
            animContentRef.current?.classList.toggle("page-enter-animation__text--fadeout", true);
        }, (800));

        const emoji = [
            "🥺",
            "💭",
            "🤔",
            "😉",
            "✨",
            "🥹",
            "🧐",
            "🤓",
            "🤤",
            "🥴",
        ];
        const quotes = [
            "Hello World",
        ];

        if (window.location.pathname == "/") {
            setEmojiDisplay("🍙");
            setQuoteDisplay("Welcome to my website");
        } else if (window.location.pathname.includes("/projects")) {
            setEmojiDisplay("😉");
            setQuoteDisplay("Hey look, I made a thing!");
        } else if (window.location.pathname.includes("/about")) {
            setEmojiDisplay("🤔");
            setQuoteDisplay("Who am I?");
        } else {
            setEmojiDisplay(emoji[Math.floor(Math.random() * emoji.length)]);
            setQuoteDisplay(quotes[Math.floor(Math.random() * quotes.length)]);
        }
    }, []);

    useEffect(() => {
        if(animWrapperRef.current?.classList.contains("page-enter-animation--faded")) return;
        
        animWrapperRef.current?.classList.toggle("page-enter-animation--fadeout", false);
        animWrapperRef.current?.classList.toggle("page-enter-animation--faded", false);
        animWrapperRef.current?.classList.toggle("page-enter-animation--fadein", true);
    }, [pageExit])

    return (
        <div className="fixed top-0 left-0 w-screen h-[0vh] bg-base-300 z-50 page-enter-animation page-enter-animation--faded overflow-clip" ref={animWrapperRef}>
            <div className="absolute inset-0 m-auto text-2xl w-fit h-fit page-enter-animation__text" ref={animContentRef}>
                <span className="block text-center text-4xl pb-4">{emojiDisplay}</span>
                <span className="block text-center">{quoteDisplay}</span>
             
            </div>
        </div>
    );
}
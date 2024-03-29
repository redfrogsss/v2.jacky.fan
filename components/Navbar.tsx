'use client'

import { AlertContext, AlertContextProvider } from "@/contexts/AlertContext";
import { useContext, useEffect, useRef, useState } from "react";
import ToggleDayNight from "./ToggleDayNight";
import { LocomotiveScrollPositionContext } from "@/contexts/LocomotiveScrollPositionContext";

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isTop, setIsTop] = useState(true);

    const { alert, setAlert } = useContext(AlertContext);
    const {scrollPos, setScrollPos} = useContext(LocomotiveScrollPositionContext);

    const navbarRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const currentScrollPos = scrollPos?.scroll.y ?? 0;
        const navbarHeight = navbarRef.current?.offsetHeight ?? 0;

        if (!showModal) {
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= navbarHeight);
        }

        setPrevScrollPos(currentScrollPos);
        setIsTop(currentScrollPos <= navbarHeight);
    }, [scrollPos])

    const toggleEmailModal = () => {
        setShowModal(!showModal);
    }

    const copyToClipboard = (text: string = "") => {
        navigator.clipboard.writeText(text);

        if (setAlert) {
            setAlert({
                show: true,
                message: "Copied to clipboard!",
                type: "success"
            })
        }
    }

    return (
        <AlertContextProvider>
            <div className={`navbar bg-base-300 fixed z-50 transition-all w-screen ${visible ? "translate-y-0" : `-translate-y-[110%]`} ${isTop ? "shadow-none" : "shadow-md"}`} ref={navbarRef}>
                <div className="flex-1">
                    <a href="#hero" className="btn btn-ghost normal-case text-xl"><span className="text-primary font-dosis font-medium drop-shadow">🥺 Jacky FAN</span></a>
                </div>
                <div className="flex-none flex md:mx-5">
                    <ul className="menu menu-horizontal px-1">
                        <li className="flex"><ToggleDayNight /></li>
                        <li className="hidden md:flex"><a href="#about">About</a></li>
                        <li className="hidden md:flex"><a href="#work">Work</a></li>
                        <li className="hidden md:flex">
                            <details>
                                <summary>
                                    Quick Links
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li><button onClick={toggleEmailModal}>Email</button></li>
                                    <li><a href="https://github.com/redfrogsss" target="_blank">GitHub</a></li>
                                    <li><a href="https://www.linkedin.com/in/jacky-fan-682516190/" target="_blank">LinkedIn</a></li>
                                    <li><a href="https://blog.jacky.fan" target="_blank">Blog</a></li>
                                    <dialog id="email-modal" className={`modal modal-bottom sm:modal-middle z-30 ${showModal ? "modal-open" : ""}`} open={showModal}>
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Email</h3>
                                            <p className="py-4">Copy to clipboard or Open mail application?</p>
                                            <div className="modal-action justify-between">
                                                <div className="flex flex-row gap-2">
                                                    <button className="btn" onClick={() => { copyToClipboard("contact@jacky.fan"); toggleEmailModal(); }}>Copy</button>
                                                    <a href="mailto:contact@jacky.fan" target="_blank" className="btn">Open App</a>
                                                </div>
                                                <div className="">
                                                    <form method="dialog">
                                                        <button className="btn" onClick={toggleEmailModal}>Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </dialog>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </AlertContextProvider>

    );
}
'use client'

import { AlertContext, AlertContextProvider } from "@/contexts/AlertContext";
import { useContext, useEffect, useRef, useState } from "react";
import ToggleDayNight from "./ToggleDayNight";
import { LocomotiveScrollPositionContext } from "@/contexts/LocomotiveScrollPositionContext";
import Link from "next/link";
import { ActiveLink } from "./basic";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isTop, setIsTop] = useState(true);

    const { alert, setAlert } = useContext(AlertContext);
    const { scrollPos, setScrollPos } = useContext(LocomotiveScrollPositionContext);

    const navbarRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const navbarHeight = navbarRef.current?.offsetHeight ?? 0;

        document.querySelector("html")?.style.setProperty("--navbar-height", `${navbarHeight}px`);
    }, [])

    useEffect(() => {
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
                    <ActiveLink href="/" className="btn btn-ghost normal-case text-xl">
                        <span className="text-primary font-dosis font-semibold">🍙 Jacky FAN</span>
                    </ActiveLink>
                </div>
                <div className="flex-none hidden md:flex md:mx-5">
                    <ul className="menu menu-horizontal px-1">
                        <li className="flex"><ToggleDayNight /></li>
                        <li className="hidden md:flex"><ActiveLink href="/about">About</ActiveLink></li>
                        <li className="hidden md:flex"><ActiveLink href="/projects">Projects</ActiveLink></li>
                        <li className="hidden md:flex"><ActiveLink href="/contact">Contact</ActiveLink></li>
                        <li className="hidden md:flex">
                            <details>
                                <summary>
                                    Quick Links
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    {/* <li><button onClick={toggleEmailModal}>Email</button></li> */}
                                    <li><Link href="https://github.com/redfrogsss" target="_blank">GitHub</Link></li>
                                    <li><Link href="https://www.linkedin.com/in/jacky-fan-682516190/" target="_blank">LinkedIn</Link></li>
                                    <li><Link href="https://blog.jacky.fan" target="_blank">Blog</Link></li>
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
                <div className="flex-none flex md:hidden md:mx-5">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button" aria-label="Open Mobile Menu">
                                <Bars3Icon className="h-5 w-5 text-base-content" />
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ml-0">
                                {/* Sidebar content here */}
                                <p className="ml-4 my-4 font-bold">Pages</p>
                                <li><ActiveLink href="/about">About</ActiveLink></li>
                                <li><ActiveLink href="/projects">Projects</ActiveLink></li>
                                <li><ActiveLink href="/contact">Contact</ActiveLink></li>
                                <hr className="border-base-content my-4 ml-4 mr-8" />
                                <p className="ml-4 my-4 font-bold">Quick Links</p>
                                <li><Link href="https://github.com/redfrogsss" target="_blank">GitHub</Link></li>
                                <li><Link href="https://www.linkedin.com/in/jacky-fan-682516190/" target="_blank">LinkedIn</Link></li>
                                <li><Link href="https://blog.jacky.fan" target="_blank">Blog</Link></li>
                                <li><a href="mailto:contact@jacky.fan">Email</a></li>
                                <hr className="border-base-content my-4 ml-4 mr-8" />
                                <li className="w-fit"><ToggleDayNight /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </AlertContextProvider>

    );
}
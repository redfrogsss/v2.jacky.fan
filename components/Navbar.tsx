'use client'

import { AlertContext, AlertContextProvider } from "@/contexts/AlertContext";
import { useContext, useEffect, useState } from "react";
import ToggleDayNight from "./ToggleDayNight";

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const { alert, setAlert } = useContext(AlertContext);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (!showModal) {
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        }

        setPrevScrollPos(currentScrollPos);
    };

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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    // Debug
    useEffect(() => { console.log({ alert }) }, [alert])

    return (
        <AlertContextProvider>
            <div className={`navbar bg-base-300 fixed z-50 transition-all ${visible ? "visible" : "hidden"} w-screen`}>
                <div className="flex-1">
                    <a href="#hero" className="btn btn-ghost normal-case text-xl"><span className="text-primary font-dosis font-medium drop-shadow">🥺 Jacky FAN</span></a>
                </div>
                <div className="flex-none flex mx-5">
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
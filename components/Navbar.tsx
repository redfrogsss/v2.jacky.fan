'use client'

import { useEffect, useState } from "react";

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);

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
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    return (
        <div className={`navbar bg-base-300 fixed z-50 transition-all ${visible ? "visible" : "hidden"} w-screen`}>
            <div className="flex-1">
                <a href="#hero" className="btn btn-ghost normal-case text-xl"><span className="text-primary font-patrick_hand">Jacky FAN's</span> Website</a>
            </div>
            <div className="flex-none hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li>
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
    );
}
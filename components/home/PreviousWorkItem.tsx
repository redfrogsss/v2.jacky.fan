'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import ClickAwayListener from 'react-click-away-listener';

interface PreviousWorkItemProps {
    item: number;
}

export default function PreviousWorkItem(props: PreviousWorkItemProps) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        setIsClicked(!isClicked);
    };

    const handleClickAway = () => {
        setIsClicked(false);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <motion.a
                href="#!"
                className={`card bg-base-200 shadow-xl relative mx-auto`}
                animate={{
                    width: isClicked ? "100%" : "fit-content",
                }}
            >
                <motion.figure
                    className={`mx-auto relative w-fit`}
                    animate={{
                        marginTop: isClicked ? "-2.5rem" : "0",
                    }}
                    onClick={(e) => { handleClick(e) }}
                >
                    <img src="https://plchldr.co/i/568x378" alt="Shoes" className="rounded-xl" />
                    <h2 className="absolute top-2 text-xl">Project {props.item}</h2>
                    <p className="absolute bottom-2 left-2">React</p>
                    <p className="absolute bottom-2 right-2">27 August 2023</p>
                </motion.figure>
                <motion.div
                    className={`card-body items-center text-center py-6`}
                    animate={{
                        display: isClicked ? "block" : "none",
                    }}
                >
                    <p className="mb-2">A random project with some good propose. </p>
                    <div className="flex justify-between w-full">
                        <div className="flex items-center gap-2 max-1/2 flex-wrap">
                            <div className="badge badge-outline">default</div>
                            <div className="badge badge-outline">default</div>
                            <div className="badge badge-outline">default</div>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn btn-info btn-sm">Info</button>
                            <button className="btn btn-neutral btn-sm">View</button>
                        </div>
                    </div>
                </motion.div>
            </motion.a>
        </ClickAwayListener>
    );
}
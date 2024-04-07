'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import ClickAwayListener from 'react-click-away-listener';
import ProjectInfoProps from '@/interfaces/ProjectInfoProps';
import Image from 'next/image';

export default function PreviousWorkItem({ item }: { item: ProjectInfoProps }) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        setIsClicked(!isClicked);
        window.dispatchEvent(new Event("resize"));
    };

    const handleClickAway = () => {
        setIsClicked(false);
        window.dispatchEvent(new Event("resize"));
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <motion.div
                // href="#!"
                className={`card bg-base-200 shadow-xl relative mx-auto w-5/6 max-w-[640px] cursor-pointer`}
                animate={{
                    // width: isClicked ? "100%" : "fit-content",
                }}
                whileHover={{ scale: isClicked ? 1 : 1.05 }}
            >
                <motion.figure
                    className={`mx-auto relative w-full min-h-[500px] bg-base-300 rounded-xl`}
                    animate={{
                        marginTop: isClicked ? "-2.5rem" : "0",
                    }}
                    onClick={(e) => { handleClick(e) }}
                >
                    <Image src={item.img} alt={item.name} className="rounded-xl object-contain" fill={true} />
                    <h3 className="absolute top-2 text-xl">{item.name}</h3>
                    <p className="absolute bottom-2 left-2">{item.tech}</p>
                    <p className="absolute bottom-2 right-2">{item.date}</p>
                </motion.figure>
                <motion.div
                    className={`card-body items-center text-center py-6`}
                    animate={{
                        display: isClicked ? "block" : "none",
                    }}
                >
                    <p className="mb-2">{item.desc}</p>
                    <div className="flex justify-between w-full">
                        <div className="hidden md:flex items-center gap-2 max-1/2 flex-wrap">
                            {item.tags.map((tag, index) => {
                                return (
                                    <div key={index} className="badge badge-outline">{tag}</div>
                                );
                            })}
                        </div>
                        <div className="flex gap-2">
                            {/* <button className="btn btn-info btn-sm">Info</button> */}
                            {item.viewLinks ? <a href={item.viewLinks} className="btn btn-neutral btn-sm" target="_blank">View</a> : ""}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </ClickAwayListener>
    );
}
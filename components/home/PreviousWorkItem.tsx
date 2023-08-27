'use client'

import { EventHandler, MouseEventHandler, useState } from "react";

interface PreviousWorkItemProps {
    item: number;
}

export default function PreviousWorkItem(props: PreviousWorkItemProps) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        setIsClicked(!isClicked);
    };

    return (
        <a href="#!" onClick={(e) => { handleClick(e) }} className={`card ${isClicked ? "w-full" : "w-fit"} min-h-96 bg-base-200 shadow-xl relative transition-all mx-auto`}>
            <figure className={`mx-auto ${isClicked ? "mt-[-2.5rem]" : "mt-0"} relative w-fit`}>
                <img src="https://plchldr.co/i/568x378" alt="Shoes" className="rounded-xl" />
                <h2 className="absolute top-2 text-xl">Project {props.item}</h2>
                <p className="absolute bottom-2 left-2">React</p>
                <p className="absolute bottom-2 right-2">27 August 2023</p>
            </figure>
            <div className={`card-body items-center text-center py-6 ${isClicked ? "visible" : "hidden"}  transition-all`}>
                <p>A random project with some good propose.</p>
                <div className="flex justify-between w-full">
                    <div className="flex items-center gap-2 max-w-1/2 flex-wrap">
                        <div className="badge badge-outline">default</div>
                        <div className="badge badge-outline">default</div>
                        <div className="badge badge-outline">default</div>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-info btn-sm">Info</button>
                        <button className="btn btn-neutral btn-sm">View</button>
                    </div>
                </div>
            </div>
        </a>
    );
}
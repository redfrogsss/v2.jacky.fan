'use client'

import { motion } from "framer-motion"
import { ArrowLongDownIcon } from "@heroicons/react/24/outline";

interface FloatingArrowProps {
    text: string;
}

export default function FloatingArrow(props: FloatingArrowProps) {

    return (
        <motion.a
            href="#about"
            className="flex flex-col justify-center items-center absolute bottom-[10%] transition-all w-full z-20"
            animate={{
                y: [0, 15, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <p>{props.text}</p>
            <span className="btn btn-circle btn-outline btn-sm border-0 mx-auto">
                <ArrowLongDownIcon className="h-6 w-6 text-base-content" />
            </span>
        </motion.a>
    );

}
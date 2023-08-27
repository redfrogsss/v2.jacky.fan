'use client'

import { motion } from "framer-motion"

export default function FloatingArrow() {

    return (
        <motion.a
            href="#!"
            className="flex flex-col justify-center items-center absolute bottom-12 transition-all"
            animate={{
                y: [0, 15, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <p>About Me</p>
            <span className="btn btn-circle btn-outline btn-sm border-0 mx-auto">
                <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" stroke-linecap="round" strokeLineJoin="round"></path>
                </svg>
            </span>
        </motion.a>
    );

}
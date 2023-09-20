'use client'

import React from "react"
import Pien from "./Pien"
import { motion } from "framer-motion";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
    return (
        <>

            <motion.div className="bg-base-300 absolute h-screen w-screen top-0 left-0 z-10">
                <motion.div
                    className="absolute inset-0 bg-base-100 z-20"
                    animate={{
                        inset: ["0px", "0% 0% 100% 0%"],
                        display: ["block"],
                        opacity: [1, 0],
                        transitionEnd: {
                            // opacity: 0,
                            display: "none",
                        },
                    }}
                    transition={{
                        delay: 1.5 * 3,
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                >
                    <div className="flex flex-col items-center justify-center h-screen w-100">
                        <motion.div
                            className="w-16 aspect-square text-base-content"
                            animate={{
                                rotate: 360,
                                y: [0, -10, 0],
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: 4,
                                ease: "easeInOut",
                            }}
                        >
                            <Pien color="currentColor" className="w-full h-full" />
                        </motion.div>
                        <p className="mt-2">Loading...</p>
                    </div>
                </motion.div >
            </motion.div>
            <motion.div
                className=""
                initial={{
                    display: "none",
                }}
                animate={{
                    display: "block",
                }}
                transition={{
                    delay: 1.5 * 3,
                    duration: 1.5,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.div>
        </>
    )
}
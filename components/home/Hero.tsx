'use client'

import { motion } from "framer-motion";
import FloatingArrow from "./FloatingArrow";

export default function Hero() {

    return (
        <motion.section
            id="hero"
            className="`md:min-h-[900px] h-screen bg-base-300 relative"
            initial={{ opacity: "0%" }}
            // animate={{ opacity: 1 }}
            whileInView={{ opacity: ["0%", "100%"] }}
            viewport={{ once: true }}
            transition={{
                // delay: 1.5 * 3,
                duration: 1.5,
                ease: "easeInOut"
            }}
        >
            <div className="cotainer mx-auto h-full z-10 absolute w-full">
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="">
                        <h1 className="text-5xl md:text-7xl font-bold pr-2 leading-snug mb-4 text-center font-patrick_hand text-primary">Jacky FAN</h1>
                        <hr className="w-full block my-auto border-1.5" />
                        <p className="mt-4 text-md md:text-xl text-center typed">I build websites and eat computer bugs.</p>
                    </div>
                </div>
            </div>
            <FloatingArrow text="About Me" />
        </motion.section>


    );
}
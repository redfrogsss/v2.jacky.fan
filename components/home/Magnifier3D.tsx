'use client'

import { Suspense, useRef, useState, useEffect, useContext } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useMotionValueEvent, useScroll } from "framer-motion"
import { calcRotation } from "@/helpers/calcRotation";
import { motion } from "framer-motion";
import { LoadingScreenContext } from "@/contexts/LoadingContext";
import { LoadingManager } from "three";

export default function Magnifier3D() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    const [modelRotation, setModelRotation] = useState([calcRotation(90), calcRotation(30), calcRotation(0)]);
    const { scrollYProgress } = useScroll();

    const [gltf, setGltf] = useState<any>(undefined);
    const [topValue, setTopValue] = useState(6);

    const { isLoadingDone, setIsLoadingDone } = useContext(LoadingScreenContext);

    useEffect(() => {
        new GLTFLoader().load(`/magnifier.glb`,
            async (gltf) => {
                setGltf(gltf.scene);
                setIsLoadingDone ? setIsLoadingDone(true) : null;
            },
        );
    }, [])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!inView) { return; }
        setModelRotation([calcRotation(latest * 360 / 2 + 210), calcRotation(latest * 360 / 4 - 230), calcRotation(latest * 360 / 4 - 50)]);
        setTopValue(latest * 30);
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                rootMargin: "0px",
                threshold: [0, 1],
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <>
            <motion.div
                ref={ref}
                animate={{
                    top: `-${topValue}rem`,
                }}
                className={`!hidden xl:!grid place-items-center h-full w-2/3 absolute -bottom-4 -right-[20vw] -z-10`}
            >
                <motion.div
                    className="w-full h-full"
                    animate={{
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeIn",
                    }}
                >
                    {inView && (
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            {/* <pointLight position={[0, 1, 1]} intensity={2} />
                            <pointLight position={[0, 0, 1]} intensity={2} />
                            <pointLight position={[0, -1, 1]} intensity={2} />
                            <pointLight position={[0, -2, 1]} intensity={2} />
                            <spotLight intensity={3} />/ */}

                            <ambientLight intensity={0.5} />
                            <directionalLight position={[1, 0, 2]} intensity={2} />
                            <directionalLight position={[-1, 0, 2]} intensity={0.5} />
                            <Suspense fallback={null}>
                                {/* <Model /> */}
                                {gltf && <primitive object={gltf} scale={.0013} rotation={modelRotation} />}

                                {/* although it looks good with env, I removed it to reduce loading time */}
                                {/* <Environment preset="city" /> */}
                                {/* <Environment files="/img/kloofendal_misty_morning_puresky_1k.hdr" /> */}
                            </Suspense>
                            {/* <OrbitControls autoRotate={false} /> */}
                        </Canvas>
                    )}
                </motion.div>
            </motion.div>
        </>
    );
}
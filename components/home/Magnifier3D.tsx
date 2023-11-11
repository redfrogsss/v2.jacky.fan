'use client'

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useMotionValueEvent, useScroll } from "framer-motion"
import { calcRotation } from "@/helpers/calcRotation";
import { motion } from "framer-motion";

export default function Magnifier3D() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    const [modelRotation, setModelRotation] = useState([calcRotation(90), calcRotation(30), calcRotation(0)]);
    const { scrollYProgress } = useScroll();

    const [gltf, setGltf] = useState<any>(undefined);
    const [topValue, setTopValue] = useState(6);

    useEffect(() => {
        new GLTFLoader().load(`/magnifier.glb`, async (gltf) => {
            setGltf(gltf.scene);
        });
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
                            <ambientLight intensity={0.7} />
                            {/* <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
                            <Suspense fallback={null}>
                                {/* <Model /> */}
                                {gltf && <primitive object={gltf} scale={.0013} rotation={modelRotation} />}

                                <Environment preset="city" />
                            </Suspense>
                            {/* <OrbitControls autoRotate={false} /> */}
                        </Canvas>
                    )}
                </motion.div>
            </motion.div>
        </>
    );
}
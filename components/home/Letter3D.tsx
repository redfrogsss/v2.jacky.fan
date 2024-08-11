'use client'

import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Suspense, useRef, useState, useEffect, useContext } from "react";
import { calcRotation } from "@/helpers/calcRotation";
import { motion } from "framer-motion";
import { LocomotiveScrollPositionContext } from "@/contexts/LocomotiveScrollPositionContext";
import { LocomotiveScrollContext } from "@/contexts/LocomotiveScrollContext";

export default function Letter3D() {

    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    const [modelRotation, setModelRotation] = useState([calcRotation(-10), calcRotation(70), calcRotation(-20)]);
    const [gltf, setGltf] = useState<any>(undefined);
    const [topValue, setTopValue] = useState(-10);
    const {scrollPos, setScrollPos} = useContext(LocomotiveScrollPositionContext);
    const {locoScroll, setlocoScroll} = useContext(LocomotiveScrollContext);

    useEffect(() => {
        new GLTFLoader().load(`/letter.glb`, async (gltf) => {
            setGltf(gltf.scene);
        });
    }, [])

    useEffect(()=>{
        if (!inView) { return; }
        let posY = ((scrollPos?.scroll?.y ?? 0) / (scrollPos?.limit?.y ?? 1));
        let scrollY = scrollPos?.scroll?.y ?? 0;
        
        setModelRotation([calcRotation(Math.min(scrollY * 0.2 - 10, 30)), calcRotation(70), calcRotation(-20)]);
        setTopValue(-10 * (posY));

    }, [scrollPos, locoScroll])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                rootMargin: "0px",
                threshold: 0,
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
        <motion.div
            ref={ref}
            animate={{
                top: `${topValue}rem`
            }}
            className="!hidden xl:!grid place-items-center h-full w-2/3 absolute -right-[20vw] -z-10"
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
                {inView &&
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[1, 0, 2]} intensity={2} />
                        <directionalLight position={[-1, 0, 2]} intensity={1} />
                        <Suspense fallback={null}>
                            {gltf && <primitive object={gltf} scale={.9} rotation={modelRotation} />}
                            {/* <Environment preset="city" /> */}
                            {/* <Environment files="/img/kloofendal_misty_morning_puresky_1k.hdr" /> */}
                        </Suspense>
                        {/* <OrbitControls autoRotate={false} /> */}
                    </Canvas>
                }
            </motion.div>

        </motion.div>
    );
}
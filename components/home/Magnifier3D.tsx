'use client'

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

export default function Magnifier3D() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    const [modelRotation, setModelRotation] = useState([calcRotation(90), calcRotation(30), calcRotation(0)]);
    const { scrollYProgress } = useScroll();
    const gltf = useLoader(GLTFLoader, "/magnifier/scene.gltf");

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!inView) { return; }
        setModelRotation([calcRotation(90), calcRotation(latest * 360 / 4 + 10), calcRotation(latest * 360 / 4 - 30)]);
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // console.log("entry.isIntersecting", entry.isIntersecting);
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

    function calcRotation(degrees: number): number {
        return (degrees * Math.PI) / 180;
    }

    return (
        <>
            <div ref={ref} className="grid place-items-center h-full w-2/3 absolute -top-16 -right-72">
                {inView && (
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        {/* <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
                        <Suspense fallback={null}>
                            {/* <Model /> */}
                            <primitive object={gltf.scene} scale={.0015} rotation={modelRotation} />

                            <Environment preset="city" />
                        </Suspense>
                        {/* <OrbitControls autoRotate={false} /> */}
                    </Canvas>
                )}
            </div>
        </>
    );
}
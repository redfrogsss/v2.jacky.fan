
'use client'

import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Suspense, useRef, useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { calcRotation } from "@/helpers/calcRotation";

export default function Letter3D() {

    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    const [modelRotation, setModelRotation] = useState([calcRotation(-30), calcRotation(120), calcRotation(0)]);
    const { scrollYProgress } = useScroll();
    const [gltf, setGltf] = useState<any>(undefined);
    useEffect(() => {
        new GLTFLoader().load(`/letter.glb`, async (gltf) => {
            setGltf(gltf.scene);
        });
    }, [])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!inView) { return; }
        setModelRotation([calcRotation(latest * 360 / 4 + 10), calcRotation(latest * 360 / 4 + 0), calcRotation(latest * 360 / 4 + 180)]);
    })

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
        <div ref={ref} className="hidden xl:grid place-items-center h-full w-2/3 absolute -top-0 -right-80">
            {inView &&
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                    <ambientLight intensity={0.7} />
                    {/* <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
                    <Suspense fallback={null}>
                        <primitive object={gltf} scale={1.1} rotation={modelRotation} />
                        <Environment preset="city" />
                    </Suspense>
                    {/* <OrbitControls autoRotate={false} /> */}
                </Canvas>
            }

        </div>
    );
}
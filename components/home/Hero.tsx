'use client'

import FloatingArrow from "./FloatingArrow";
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Hero() {

    const Model = () => {
        // location of the 3D model
        const gltf = useLoader(GLTFLoader, "/laptop2.glb");
        return (
            <>
                {/* Use scale to control the size of the 3D model */}
                <primitive object={gltf.scene} scale={5} rotation={[.4, 0, 0]} />
            </>
        );
    };

    return (
        <section className="min-h-[900px] h-screen bg-base-200 relative">
            <div className="cotainer mx-auto h-full z-10 absolute w-full">
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="">
                        <h1 className="text-7xl font-bold pr-2 leading-snug mb-4 text-center font-patrick_hand text-primary">Jacky FAN</h1>
                        <hr className="w-full block my-auto border-1.5" />
                        <p className="mt-4 text-xl text-center typed">I build websites and eat computer bugs.</p>
                    </div>
                </div>
            </div>
            <FloatingArrow text="About Me" />
            <div className="grid place-items-center h-full w-full absolute top-0">
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                    <ambientLight intensity={0.7} />
                    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                    <Suspense fallback={null}>
                        <Model />
                        <Environment preset="city" />
                    </Suspense>
                    {/* <OrbitControls autoRotate={false} /> */}
                </Canvas>
            </div>
        </section>


    );
}
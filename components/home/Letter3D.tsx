
'use client'

import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Letter3D() {

    function calcRotation(degrees: number): number {
        return (degrees * Math.PI) / 180;
    }

    const Model = () => {
        // location of the 3D model
        const gltf = useLoader(GLTFLoader, "/letter/scene.gltf");
        return (
            <>
                {/* Use scale to control the size of the 3D model */}
                <primitive object={gltf.scene} scale={1.1} rotation={[calcRotation(-30), calcRotation(120), calcRotation(10)]} />
            </>
        );
    };

    return (
        <div className="grid place-items-center h-full w-1/3 absolute -top-0 -right-24">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.7} />
                {/* <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="city" />
                </Suspense>
                {/* <OrbitControls autoRotate={false} /> */}
            </Canvas>
        </div>
    );
}
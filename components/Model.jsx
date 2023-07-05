"use client";

import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Model() {

    const modelRef = useRef();

    useFrame((state, delta) => {
        modelRef.current.rotation.y += delta * 0.2;
    })

    return (
        <>
            <mesh ref={modelRef}>
                <torusKnotGeometry args={[1, 0.4, 128, 16]}/>
                <meshNormalMaterial />
            </mesh>
        </>
    )
}

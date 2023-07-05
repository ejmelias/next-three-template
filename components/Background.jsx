"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from '@/components/Model'

export default function Background() {
    return (
        <div className='fixed w-full h-full m-0 p-0'>
            <Canvas>
                <OrbitControls />
                <Model />
            </Canvas>
        </div>
    )
}
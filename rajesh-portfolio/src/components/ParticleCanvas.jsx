import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleField() {
    const ref = useRef();
    // Fix: use useMemo so the Float32Array is only created once, not on every render
    const positions = useMemo(() => {
        const arr = new Float32Array(3000 * 3);
        for (let i = 0; i < 3000; i++) {
            const r = 2.2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            arr[i * 3] = r * Math.sin(phi) * Math.cos(theta) + (Math.random() - 0.5) * 4;
            arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * 4;
            arr[i * 3 + 2] = r * Math.cos(phi) + (Math.random() - 0.5) * 2;
        }
        return arr;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.x = Math.sin(t * 0.15) * 0.2;
        ref.current.rotation.y = t * 0.08;
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#818CF8"
                size={0.012}
                sizeAttenuation
                depthWrite={false}
                opacity={0.7}
            />
        </Points>
    );
}

export default function ParticleCanvas() {
    return (
        <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
            <Canvas
                camera={{ position: [0, 0, 4], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <ParticleField />
            </Canvas>
        </div>
    );
}

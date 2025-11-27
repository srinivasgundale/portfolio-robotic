"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Robot() {
    const groupRef = useRef<THREE.Group>(null);
    const headRef = useRef<THREE.Mesh>(null);
    const leftArmRef = useRef<THREE.Group>(null);
    const rightArmRef = useRef<THREE.Group>(null);
    const antennaRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (groupRef.current) {
            // Gentle floating motion
            groupRef.current.position.y = Math.sin(t * 0.5) * 0.2;
            groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
        }

        if (headRef.current) {
            // Head looking around
            headRef.current.rotation.y = Math.sin(t * 0.7) * 0.3;
        }

        if (leftArmRef.current) {
            // Left arm typing motion
            leftArmRef.current.rotation.x = Math.sin(t * 3) * 0.3 - 0.5;
        }

        if (rightArmRef.current) {
            // Right arm typing motion (offset)
            rightArmRef.current.rotation.x = Math.sin(t * 3 + 1) * 0.3 - 0.5;
        }

        if (antennaRef.current) {
            // Antenna blinking
            const material = antennaRef.current.material as THREE.MeshStandardMaterial;
            material.emissiveIntensity = 0.5 + Math.sin(t * 4) * 0.5;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Body */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.2, 1.5, 0.8]} />
                <meshStandardMaterial color="#1a3a4a" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Head */}
            <mesh ref={headRef} position={[0, 1.2, 0]}>
                <boxGeometry args={[0.8, 0.8, 0.8]} />
                <meshStandardMaterial color="#2a5a7a" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Eyes */}
            <mesh position={[-0.2, 1.2, 0.41]}>
                <boxGeometry args={[0.15, 0.15, 0.05]} />
                <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
            </mesh>
            <mesh position={[0.2, 1.2, 0.41]}>
                <boxGeometry args={[0.15, 0.15, 0.05]} />
                <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
            </mesh>

            {/* Antenna */}
            <mesh position={[0, 1.8, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                <meshStandardMaterial color="#3a6a8a" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh ref={antennaRef} position={[0, 2.1, 0]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={1} />
            </mesh>

            {/* Left Arm */}
            <group ref={leftArmRef} position={[-0.8, 0.3, 0]}>
                <mesh position={[0, -0.4, 0]}>
                    <boxGeometry args={[0.25, 0.8, 0.25]} />
                    <meshStandardMaterial color="#2a5a7a" metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh position={[0, -0.9, 0.2]}>
                    <boxGeometry args={[0.2, 0.2, 0.3]} />
                    <meshStandardMaterial color="#1a3a4a" metalness={0.9} roughness={0.1} />
                </mesh>
            </group>

            {/* Right Arm */}
            <group ref={rightArmRef} position={[0.8, 0.3, 0]}>
                <mesh position={[0, -0.4, 0]}>
                    <boxGeometry args={[0.25, 0.8, 0.25]} />
                    <meshStandardMaterial color="#2a5a7a" metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh position={[0, -0.9, 0.2]}>
                    <boxGeometry args={[0.2, 0.2, 0.3]} />
                    <meshStandardMaterial color="#1a3a4a" metalness={0.9} roughness={0.1} />
                </mesh>
            </group>

            {/* Legs */}
            <mesh position={[-0.3, -1.2, 0]}>
                <boxGeometry args={[0.3, 0.8, 0.3]} />
                <meshStandardMaterial color="#1a3a4a" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0.3, -1.2, 0]}>
                <boxGeometry args={[0.3, 0.8, 0.3]} />
                <meshStandardMaterial color="#1a3a4a" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Task indicators floating around */}
            <FloatingTask position={[-2, 1, 0]} delay={0} />
            <FloatingTask position={[2, 0.5, 0]} delay={1} />
            <FloatingTask position={[-1.5, -0.5, 1]} delay={2} />
            <FloatingTask position={[1.5, 1.5, -1]} delay={3} />
        </group>
    );
}

function FloatingTask({ position, delay }: { position: [number, number, number]; delay: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() + delay;

        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(t * 2) * 0.3;
            meshRef.current.rotation.y = t * 0.5;

            // Pulsing glow
            const material = meshRef.current.material as THREE.MeshStandardMaterial;
            material.emissiveIntensity = 0.5 + Math.sin(t * 3) * 0.5;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial
                color="#00ffff"
                emissive="#00ffff"
                emissiveIntensity={1}
                transparent
                opacity={0.6}
                metalness={0.5}
                roughness={0.3}
            />
        </mesh>
    );
}

export default function RobotAnimation() {
    return (
        <div className="w-full h-[400px] md:h-[500px]">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#00ffff" />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00ff88" />
                <spotLight position={[0, 10, 0]} intensity={0.5} color="#00ffff" />

                <Robot />
            </Canvas>
        </div>
    );
}

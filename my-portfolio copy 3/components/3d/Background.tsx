"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CircuitParticles({ count = 2000 }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const lines = useRef<THREE.LineSegments>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 60;
            const speed = 0.002 + Math.random() / 400;
            const xFactor = -60 + Math.random() * 120;
            const yFactor = -60 + Math.random() * 120;
            const zFactor = -60 + Math.random() * 120;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
        }
        return temp;
    }, [count]);

    // Create circuit-like connection lines
    const lineGeometry = useMemo(() => {
        const positions = [];
        for (let i = 0; i < 100; i++) {
            positions.push(
                -50 + Math.random() * 100,
                -50 + Math.random() * 100,
                -50 + Math.random() * 100,
                -50 + Math.random() * 100,
                -50 + Math.random() * 100,
                -50 + Math.random() * 100
            );
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        return geometry;
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;

        const t = state.clock.getElapsedTime();

        particles.forEach((particle, i) => {
            let { t: time, factor, speed, xFactor, yFactor, zFactor } = particle;

            time = particle.t += speed;

            // Grid-like movement pattern
            dummy.position.set(
                xFactor + Math.sin((time / 10) * factor) * 1.5,
                yFactor + Math.cos((time / 10) * factor) * 1.5,
                zFactor + Math.sin((time / 15) * factor) * 1
            );

            // Pulsing scale
            const s = 0.12 + Math.sin(time * 4) * 0.04;
            dummy.scale.set(s, s, s);

            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);

            // Neon cyan/green colors
            const colorChoice = Math.sin(time + i) > 0 ?
                new THREE.Color(0x00ffff) : // Cyan
                new THREE.Color(0x00ff88); // Green

            // Add pulsing effect
            const intensity = 0.5 + Math.sin(time * 2 + i) * 0.5;
            colorChoice.multiplyScalar(intensity);

            mesh.current!.setColorAt(i, colorChoice);
        });

        mesh.current.instanceMatrix.needsUpdate = true;
        if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;

        // Rotate circuit lines slowly
        if (lines.current) {
            lines.current.rotation.y = t * 0.05;
            lines.current.rotation.x = t * 0.03;
        }
    });

    return (
        <>
            <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshBasicMaterial
                    transparent
                    opacity={0.6}
                />
            </instancedMesh>

            <lineSegments ref={lines} geometry={lineGeometry}>
                <lineBasicMaterial color="#00ffff" transparent opacity={0.15} />
            </lineSegments>
        </>
    );
}

export default function Background() {
    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 40], fov: 60 }}>
                {/* Neon lighting */}
                <ambientLight intensity={0.2} />
                <pointLight position={[30, 30, 30]} intensity={1} color="#00ffff" />
                <pointLight position={[-30, -30, -30]} intensity={1} color="#00ff88" />
                <pointLight position={[0, 50, 0]} intensity={0.5} color="#00ffff" />

                {/* Dark fog */}
                <fog attach="fog" args={['#0a1520', 30, 80]} />

                <CircuitParticles />
            </Canvas>
        </div>
    );
}

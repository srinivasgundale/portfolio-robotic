"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/contexts/ThemeContext";

function CircuitParticles({ count = 2000, theme }: { count?: number; theme: string }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Theme-specific colors
    const colors = useMemo(() => {
        switch (theme) {
            case "cyberpunk":
                return {
                    primary: new THREE.Color("#ff00ff"),
                    secondary: new THREE.Color("#ff0080"),
                };
            case "matrix":
                return {
                    primary: new THREE.Color("#00ff00"),
                    secondary: new THREE.Color("#00cc00"),
                };
            case "neon":
                return {
                    primary: new THREE.Color("#ff6b35"),
                    secondary: new THREE.Color("#f7931e"),
                };
            default: // robotic
                return {
                    primary: new THREE.Color("#00ffff"),
                    secondary: new THREE.Color("#00ff88"),
                };
        }
    }, [theme]);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.001 + Math.random() / 500;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

            t = particle.t += speed;

            // Theme-specific movement patterns
            let x, y, z;
            switch (theme) {
                case "cyberpunk":
                    // Chaotic, fast movement
                    x = Math.sin(t * 2) * factor + xFactor;
                    y = Math.cos(t * 3) * factor + yFactor;
                    z = Math.sin(t * 1.5) * factor + zFactor;
                    break;
                case "matrix":
                    // Falling rain effect
                    x = xFactor;
                    y = ((t * 20) % 100) - 50 + yFactor;
                    z = zFactor;
                    break;
                case "neon":
                    // Circular, flowing movement
                    x = Math.cos(t) * factor + xFactor;
                    y = Math.sin(t * 0.5) * factor + yFactor;
                    z = Math.sin(t) * factor + zFactor;
                    break;
                default: // robotic
                    // Grid-like, structured movement
                    x = Math.sin(t) * factor + xFactor;
                    y = Math.cos(t) * factor + yFactor;
                    z = Math.sin(t * 0.5) * factor + zFactor;
            }

            dummy.position.set(x, y, z);

            const s = theme === "matrix" ? 0.3 : 0.5;
            dummy.scale.set(s, s, s);

            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);

            // Color variation
            const color = i % 2 === 0 ? colors.primary : colors.secondary;
            mesh.current!.setColorAt(i, color);
        });

        mesh.current.instanceMatrix.needsUpdate = true;
        if (mesh.current.instanceColor) {
            mesh.current.instanceColor.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial
                emissive={colors.primary}
                emissiveIntensity={0.5}
                toneMapped={false}
            />
        </instancedMesh>
    );
}

export default function Background() {
    const { theme } = useTheme();

    return (
        <div className="canvas-container">
            <Canvas
                camera={{ position: [0, 0, 30], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <CircuitParticles count={2000} theme={theme} />
            </Canvas>
        </div>
    );
}

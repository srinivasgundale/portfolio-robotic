"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/contexts/ThemeContext";

function CircuitParticles({ count = 2000, theme }: { count?: number; theme: string }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const lines = useRef<THREE.LineSegments>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 60;
            const speed = theme === "robotic" ? 0.002 + Math.random() / 400 : 0.001 + Math.random() / 500;
            const xFactor = -60 + Math.random() * 120;
            const yFactor = -60 + Math.random() * 120;
            const zFactor = -60 + Math.random() * 120;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
        }
        return temp;
    }, [count, theme]);

    // Circuit lines only for robotic theme
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

    // Theme colors
    const colors = useMemo(() => {
        switch (theme) {
            case "cyberpunk":
                return { primary: new THREE.Color("#ff00ff"), secondary: new THREE.Color("#ff0080") };
            case "matrix":
                return { primary: new THREE.Color("#00ff00"), secondary: new THREE.Color("#00cc00") };
            case "neon":
                return { primary: new THREE.Color("#ff6b35"), secondary: new THREE.Color("#f7931e") };
            default:
                return { primary: new THREE.Color("#00ffff"), secondary: new THREE.Color("#00ff88") };
        }
    }, [theme]);

    useFrame((state) => {
        if (!mesh.current) return;

        const t = state.clock.getElapsedTime();

        particles.forEach((particle, i) => {
            let { t: time, factor, speed, xFactor, yFactor, zFactor } = particle;
            time = particle.t += speed;

            let x, y, z, s;

            if (theme === "robotic") {
                // Original robotic: Grid-like movement with circuit board feel
                x = xFactor + Math.sin((time / 10) * factor) * 1.5;
                y = yFactor + Math.cos((time / 10) * factor) * 1.5;
                z = zFactor + Math.sin((time / 15) * factor) * 1;
                s = 0.12 + Math.sin(time * 4) * 0.04;
            } else if (theme === "cyberpunk") {
                // Chaotic, fast movement
                x = Math.sin(time * 2) * factor + xFactor;
                y = Math.cos(time * 3) * factor + yFactor;
                z = Math.sin(time * 1.5) * factor + zFactor;
                s = 0.5;
            } else if (theme === "matrix") {
                // Falling rain effect
                x = xFactor;
                y = ((time * 20) % 100) - 50 + yFactor;
                z = zFactor;
                s = 0.3;
            } else { // neon
                // Circular, flowing movement
                x = Math.cos(time) * factor + xFactor;
                y = Math.sin(time * 0.5) * factor + yFactor;
                z = Math.sin(time) * factor + zFactor;
                s = 0.5;
            }

            dummy.position.set(x, y, z);
            dummy.scale.set(s, s, s);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);

            // Color variation
            let color;
            if (theme === "robotic") {
                const colorChoice = Math.sin(time + i) > 0 ? colors.primary : colors.secondary;
                const intensity = 0.5 + Math.sin(time * 2 + i) * 0.5;
                color = colorChoice.clone().multiplyScalar(intensity);
            } else {
                color = i % 2 === 0 ? colors.primary : colors.secondary;
            }
            mesh.current!.setColorAt(i, color);
        });

        mesh.current.instanceMatrix.needsUpdate = true;
        if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;

        // Rotate circuit lines (robotic only)
        if (lines.current && theme === "robotic") {
            lines.current.rotation.y = t * 0.05;
            lines.current.rotation.x = t * 0.03;
        }
    });

    return (
        <>
            <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshBasicMaterial transparent opacity={theme === "robotic" ? 0.6 : 0.8} />
            </instancedMesh>

            {theme === "robotic" && (
                <lineSegments ref={lines} geometry={lineGeometry}>
                    <lineBasicMaterial color="#00ffff" transparent opacity={0.15} />
                </lineSegments>
            )}
        </>
    );
}

export default function Background() {
    const { theme } = useTheme();

    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 40], fov: 60 }}>
                {theme === "robotic" ? (
                    <>
                        <ambientLight intensity={0.2} />
                        <pointLight position={[30, 30, 30]} intensity={1} color="#00ffff" />
                        <pointLight position={[-30, -30, -30]} intensity={1} color="#00ff88" />
                        <pointLight position={[0, 50, 0]} intensity={0.5} color="#00ffff" />
                        <fog attach="fog" args={['#0a1520', 30, 80]} />
                    </>
                ) : (
                    <>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                    </>
                )}
                <CircuitParticles count={2000} theme={theme} />
            </Canvas>
        </div>
    );
}

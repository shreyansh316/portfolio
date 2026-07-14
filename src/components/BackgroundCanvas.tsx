"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Sphere, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function GeometricPrimitives() {
  const { mouse, viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  // Slowly rotate the entire group
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
    
    // Dynamic lighting tracking cursor
    if (lightRef.current) {
      // Map mouse (-1 to 1) to viewport coordinates
      const targetX = (mouse.x * viewport.width) / 2;
      const targetY = (mouse.y * viewport.height) / 2;
      
      // Smoothly interpolate light position
      lightRef.current.position.x += (targetX - lightRef.current.position.x) * 0.05;
      lightRef.current.position.y += (targetY - lightRef.current.position.y) * 0.05;
    }
  });

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#1e3a8a", // Deep cobalt accent
    roughness: 0.7,
    metalness: 0.8,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  }), []);

  return (
    <>
      <ambientLight intensity={0.5} color="#ffffff" />
      <pointLight ref={lightRef} position={[0, 0, 5]} intensity={2} color="#2563eb" distance={20} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#a3a3a3" />

      <group ref={groupRef}>
        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
          <Icosahedron args={[2, 1]} position={[-4, 2, -5]} material={material} />
        </Float>
        <Float speed={0.8} rotationIntensity={0.8} floatIntensity={1.5}>
          <Torus args={[3, 0.2, 16, 100]} position={[4, -3, -8]} material={material} />
        </Float>
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
          <Sphere args={[1.5, 32, 32]} position={[0, 4, -10]} material={material} />
        </Float>
      </group>
    </>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-obsidian to-obsidian-light pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <fog attach="fog" args={["#050505", 5, 20]} />
        <GeometricPrimitives />
      </Canvas>
    </div>
  );
}

"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

// Generate random points on a sphere for geospatial data simulation
const generatePoints = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

const pointPositions = generatePoints(200, 2.05);

function RotatingGlobe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe Sphere */}
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} />
      </Sphere>

      {/* Solid inner core for occlusion */}
      <Sphere args={[1.98, 32, 32]}>
        <meshBasicMaterial color="#050505" />
      </Sphere>

      {/* Geospatial Data Points */}
      <Points positions={pointPositions}>
        <PointMaterial
          transparent
          color="#10b981" // Green glowing dots
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function DataGlobe() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.5}
        />
        <RotatingGlobe />
      </Canvas>
    </div>
  );
}

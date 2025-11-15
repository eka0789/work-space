// FIXED & CLEAN VERSION — fully working, no TypeScript errors
// This version removes the accidental corrupted line that caused all TS errors
// and ensures all variables (mouse, viewport, device, meshRef) exist inside scope.

"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

// CONFIG
const ROTATION_SPEED = 0.02;
const PARALLAX_STRENGTH = 0.18;
const PARTICLE_COUNT = 1200;
const PARTICLE_SPREAD = 60;

// Device orientation hook for mobile
function useDeviceOrientation() {
  const ref = useRef({ beta: 0, gamma: 0 });

  useEffect(() => {
    function handler(e: DeviceOrientationEvent) {
      if (e.beta !== null) ref.current.beta = e.beta;
      if (e.gamma !== null) ref.current.gamma = e.gamma;
    }
    window.addEventListener("deviceorientation", handler, true);
    return () => window.removeEventListener("deviceorientation", handler as any);
  }, []);

  return ref;
}

function GlobeScene() {
  const meshRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();
  const texture = useTexture("/textures/earth.jpg");
  const device = useDeviceOrientation();

  // Particle geometry
  const particles = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = Math.random() * PARTICLE_SPREAD + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pos.set([x, y, z], i * 3);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // auto-rotation
    meshRef.current.rotation.y += ROTATION_SPEED * delta;

    // parallax from mouse
    const px = (mouse.x * PARALLAX_STRENGTH * viewport.width) / 2;
    const py = (mouse.y * PARALLAX_STRENGTH * viewport.height) / 2;

    // mobile gyro
    const gBeta = (device.current.beta ?? 0) / 180;
    const gGamma = (device.current.gamma ?? 0) / 90;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -py * 0.002 + gBeta * 0.3,
      0.08
    );

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      px * 0.002 + gGamma * 0.3,
      0.08
    );
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={0.8} />

      {/* Earth */}
      <group ref={meshRef}>
        <mesh>
          <sphereGeometry args={[6.2, 64, 64]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.9}
            metalness={0.05}
            emissive={new THREE.Color(0x001122)}
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Atmosphere */}
        <mesh>
          <sphereGeometry args={[6.35, 64, 64]} />
          <meshBasicMaterial
            transparent
            opacity={0.12}
            color={0x66ccff}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {/* Particle field */}
      <points>
        <bufferGeometry>
          <bufferAttribute
  attach="attributes-position"
  args={[particles, 3]}
/>
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color={new THREE.Color(0xa0e9ff)}
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default function GlobeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 40 }}>
        <GlobeScene />
      </Canvas>
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-black/40 to-black/80 opacity-50" />
    </div>
  );
}

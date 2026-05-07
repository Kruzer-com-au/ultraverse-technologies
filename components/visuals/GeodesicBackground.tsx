'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Wireframe, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function GeodesicSphere({ color = '#000000', opacity = 0.15 }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  // Subtle mouse parallax
  useFrame((state) => {
    if (!groupRef.current) return
    const { x, y } = state.mouse
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.1, 0.1)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.1, 0.1)
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial 
            color={color} 
            wireframe 
            transparent 
            opacity={opacity} 
          />
        </mesh>
        
        {/* Additional dots for vertices to match the reference */}
        <points>
          <icosahedronGeometry args={[1, 2]} />
          <pointsMaterial 
            color={color} 
            size={0.02} 
            transparent 
            opacity={opacity * 2} 
          />
        </points>
      </Float>
    </group>
  )
}

export default function GeodesicBackground({ 
  className = "fixed inset-0", 
  opacity = 0.4,
  interactive = true 
}: { 
  className?: string, 
  opacity?: number,
  interactive?: boolean
}) {
  return (
    <div className={`${className} pointer-events-none z-0 overflow-hidden`} style={{ opacity }}>
      <Canvas gl={{ alpha: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
        <ambientLight intensity={0.5} />
        
        <GeodesicSphere />
        
        {!interactive && (
          <mesh position={[0, 0, -5]} scale={[20, 20, 1]}>
            <planeGeometry />
            <meshBasicMaterial transparent opacity={0.05} color="#56bfa3" />
          </mesh>
        )}
      </Canvas>
      
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
    </div>
  )
}

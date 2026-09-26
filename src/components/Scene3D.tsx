import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, TorusKnot } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedKnot() {
  const knotRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!knotRef.current) return

    // Continuous smooth rotation
    knotRef.current.rotation.y += delta * 0.35
    knotRef.current.rotation.x += delta * 0.08

    // Mouse interaction
    const targetX = state.pointer.y * 0.25
    const targetY = state.pointer.x * 0.4

    knotRef.current.rotation.x = THREE.MathUtils.lerp(
      knotRef.current.rotation.x,
      targetX,
      0.04
    )

    knotRef.current.rotation.z = THREE.MathUtils.lerp(
      knotRef.current.rotation.z,
      -targetY,
      0.04
    )
  })

  return (
    <TorusKnot
      ref={knotRef}
      args={[1, 0.3, 128, 32]}
    >
      <meshStandardMaterial
        color="#6366f1"
        roughness={0.25}
        metalness={0.6}
      />
    </TorusKnot>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[3, 3, 3]}
          intensity={1.5}
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={0.8}
        />

        <AnimatedKnot />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}
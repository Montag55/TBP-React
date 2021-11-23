import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import './materials/Simple'

function ScreenQuad(props) {
  const ref = useRef()
  const { viewport } = useThree()
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.material.color = clicked ? new THREE.Color(0xffff00) : new THREE.Color(0xff0000)))
  return (
    <mesh {...props} ref={ref} scale={[viewport.width, viewport.height, 1]} onClick={(event) => click(!clicked)}>
      <planeGeometry args={[1, 1, 1]} />
      <simpleMat />
    </mesh>
  )
}

export default function PrevCanvas() {
  return (
    <div id="prev-canvas">
      <Canvas>
        <ambientLight intensity={1.0} />
        <ScreenQuad />
      </Canvas>
    </div>
  )
}

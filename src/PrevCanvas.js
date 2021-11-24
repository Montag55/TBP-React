import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import './materials/Simple'

class PrevCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoUrl: this.props.videoUrl
    }
  }

  render = () => {
    return (
      <div id="prev-canvas">
        <Canvas>
          <ambientLight intensity={1.0} />
          {/* <VidScreenQuad vidUrl={this.state.videoUrl} /> */}
          <ScreenQuad />
        </Canvas>
      </div>
    )
  }
}

function ScreenQuad() {
  const ref = useRef()
  const { viewport } = useThree()
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.material.color = clicked ? new THREE.Color(0xffff00) : new THREE.Color(0xff0000)))
  return (
    <mesh ref={ref} scale={[viewport.width, viewport.height, 1]} onClick={(event) => click(!clicked)}>
      <planeGeometry args={[1, 1, 1]} />
      <simpleMat />
    </mesh>
  )
}

function VidScreenQuad(vidUrl) {
  const [video] = useState(() => {
    const vid = document.createElement('video')
    vid.loop = true
    vid.src = vidUrl
    vid.type = 'video/x-matroska'
    return vid
  })

  const ref = useRef()
  const { viewport } = useThree()
  useEffect(() => void video.play(), [video])
  return (
    <mesh ref={ref} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1]} />
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  )
}

export default PrevCanvas

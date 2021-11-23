import * as THREE from 'three'
import { extend } from '@react-three/fiber'

class SimpleMat extends THREE.ShaderMaterial{
  constructor() {
    super({
      transparent: true,
      uniforms: { color: { value: new THREE.Vector4() } },
      vertexShader: `
      uniform vec4 color
      varying vec4 pass_color;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );
        pass_color = color;
      }`,
      fragmentShader: `
      varying vec4 pass_color;
      void main() {
        gl_FragColor = pass_color;
      }`
    })
  }
}

extend({ SimpleMat })
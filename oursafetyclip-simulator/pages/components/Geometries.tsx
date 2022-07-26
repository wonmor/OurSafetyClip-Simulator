import type { NextPage } from 'next'

import { extend, useThree } from "@react-three/fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { ReactThreeFiber } from '@react-three/fiber'

extend({ OrbitControls })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

interface ObjectProps {
  position?: [number, number, number]
  rotateX?: any
  rotateY?: any
}

export const Controls: NextPage = () => {
  const { camera, gl } = useThree();
  return <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />
}

const Box: NextPage<ObjectProps> = (props) => {
    return (
      <mesh {...props} receiveShadow={true} castShadow={true}>
        <boxBufferGeometry />
        <meshPhysicalMaterial color={"white"} />
      </mesh>
    )
}

export const LightBulb: NextPage<ObjectProps> = (props) => {
  return (
    <mesh {...props} >
      <pointLight castShadow />
    </mesh>
  )
}

export default Box
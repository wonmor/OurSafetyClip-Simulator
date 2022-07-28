import type { NextPage } from 'next'

import { extend, useThree } from "@react-three/fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { ReactThreeFiber } from '@react-three/fiber'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

import { server } from '../index'

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
  scale?: any
}

export const Controls: NextPage = () => {
  const { camera, gl } = useThree();
  return <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />
}

const ClipModel: NextPage<ObjectProps> = (props) => {
  const obj = useLoader(OBJLoader, `${server}/detatched.obj`)

  return (
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <primitive object={obj} />
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

export default ClipModel
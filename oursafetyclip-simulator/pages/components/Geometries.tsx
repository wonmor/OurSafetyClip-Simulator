import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

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

interface GenericRef {
  current?: {
    rotation?: {
      x?: any
    }
  }
}

export const Controls: NextPage = () => {
  const { camera, gl } = useThree();
  return <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />
}

const ClipModel: NextPage<ObjectProps> = (props) => {
  const ref: GenericRef = useRef()
  const obj = useLoader(OBJLoader, `${server}/detatched.obj`)

  // Only runs once upon DOM start...
  useEffect(() => {
    if (ref.current?.rotation) {
      ref.current.rotation.x += -360
    }
  })

  return (
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <primitive ref={ref} object={obj} />
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
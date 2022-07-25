import type { NextPage } from 'next'

import { ObjectProps } from './Globals'

export const Box: NextPage<ObjectProps> = (props) => {
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
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"}  />
    </mesh>
  )
}
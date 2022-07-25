import type { NextPage } from 'next'

interface ObjectProps {
  position: [number, number, number]
}

const Floor: NextPage<ObjectProps> = (props) => {
  return (
    <mesh {...props} receiveShadow={true}>
      <boxBufferGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor
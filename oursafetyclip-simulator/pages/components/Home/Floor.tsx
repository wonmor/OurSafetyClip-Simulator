import type { NextPage } from 'next'

interface FloorProps {
  position: [number, number, number]
}

const Floor: NextPage<FloorProps> = (props) => {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor
import type { NextPage } from 'next'

interface ObjectProps {
  position: [number, number, number]
}

const Floor: NextPage<ObjectProps> = (props) => {
  return (
    <mesh {...props} receiveShadow={true}>
      <boxBufferGeometry args={[20,0.5,10]} />
      <meshBasicMaterial color='white' transparent={true} opacity={0.5} />
    </mesh>
  );
}

export default Floor
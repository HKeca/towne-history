import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'

const Ring = (props) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
    >
      <ringGeometry args={[1, 3, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const RingCanvas = () => (
  <Canvas
    camera={{ fov: 120 }}
  >
    <ambientLight intensity={1.5} />
    <Ring />
  </Canvas>
);

export default RingCanvas;

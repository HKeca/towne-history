import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Box = (props) => {
  const ref = useRef();
  
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.001;
    ref.current.rotation.z += 0.02;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={2}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

const TestCanvas = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <directionalLight color="blue" position={[0, 0, 5]} />
    <spotLight position={[10, 10, 10]} angle={0.30} penumbra={1} />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[3, 0, 2]} />
  </Canvas>
);

export default TestCanvas;

import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Sphere = () => {
  const scene = new THREE.Scene();

  return (
    <mesh>
      <pointLight position={[10, 10, 10]} />
      <sphereGeometry attach="geometry" castshadow />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
};
const Three = () => {
  const [hovered, setHover] = useState(false);

  return (
    <>
      <Canvas>
        <OrbitControls />
        <Sphere />
      </Canvas>
    </>
  );
};

export default Three;

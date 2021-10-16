import React, { useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import * as THREE from "three";
import { TextureLoader } from "three";
import DayMap from "./assets/textures/8k_earth_daymap.jpg";
import SpecularMap from "./assets/textures/8k_earth_specular_map.jpg";
import NormalMap from "./assets/textures/8k_earth_normal_map.jpg";
import DayCloud from "./assets/textures/8k_earth_clouds.jpg";

export function Earth(props) {
  const [mapNormal, mapSpecular, mapDay] = useLoader(TextureLoader, [
    NormalMap,
    SpecularMap,
    DayMap,
  ]);
  return (
    <>
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specular={mapSpecular} />
        <meshStandardMaterial map={mapNormal} mapDay={mapDay} />
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          rotateSpeed={0.5}
          enablePan={true}
          panSpeed={0.4}
          autoRotate={true}
        />
      </mesh>
    </>
  );
}

const Three = () => {
  return (
    <>
      {/* <div style={{ height: "100%", width: "100%" }}> */}
      <Canvas>
        <Suspense fallback={null} />
        <Earth />
      </Canvas>
      {/* </div> */}
    </>
  );
};
export default Three;

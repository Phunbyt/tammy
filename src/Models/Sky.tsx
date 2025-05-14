import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { a } from "@react-spring/three";


import skyScene from "../assets/3d/sky.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
type SkyProps = {
  isRotating: boolean;
};

export function Sky({ isRotating }: SkyProps) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<THREE.Mesh>(null);

  // // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // // It ensures smooth animations by making the rotation frame rate-independent.
  // // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating) {
      if (skyRef.current) {
        skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
      }
    }
  });

  return (
    <a.mesh ref={skyRef}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={sky.scene} />
    </a.mesh>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { a } from "@react-spring/three";
import * as THREE from "three";

import scene from "../assets/3d/fox.glb";

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
type FoxProps = {
  currentAnimation: string;
  [key: string]: any;
};

export function Fox({ currentAnimation, ...props }: FoxProps) {
  const group = useRef<THREE.Group>(null);

  const { nodes, materials, animations } = useGLTF(scene);

  console.log(animations);
  console.log("animations......");

  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (action) {
        action.stop();
      }
    });

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <a.group ref={group} {...props} dispose={null}>
      <a.group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint as THREE.Object3D} />
        <a.skinnedMesh
          name="Object_7"
          geometry={(nodes.Object_7 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_7 as THREE.SkinnedMesh).skeleton}
        />
        <a.skinnedMesh
          name="Object_8"
          geometry={(nodes.Object_8 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_8 as THREE.SkinnedMesh).skeleton}
        />
        <a.skinnedMesh
          name="Object_9"
          geometry={(nodes.Object_9 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_9 as THREE.SkinnedMesh).skeleton}
        />
        <a.skinnedMesh
          name="Object_10"
          geometry={(nodes.Object_10 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_10 as THREE.SkinnedMesh).skeleton}
        />
        <a.skinnedMesh
          name="Object_11"
          geometry={(nodes.Object_11 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_11 as THREE.SkinnedMesh).skeleton}
        />
      </a.group>
    </a.group>
  );
}

useGLTF.preload(scene);

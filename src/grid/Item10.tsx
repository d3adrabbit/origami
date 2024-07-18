import { Center, Instance, Instances } from "@react-three/drei";

import { useRef } from "react";
import gsap from "gsap";
import { CustomeMaterial } from "./material";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";

export const Item10 = () => {
  const refList = useRef<THREE.Mesh[]>([]);

  function getRef(mesh: THREE.Mesh) {
    refList.current.push(mesh);
  }

  useGSAP(() => {
    if (refList.current.length === 0) return;

    refList.current.forEach((mesh, index) => {
      if (mesh) {
        gsap.to(mesh.scale, {
          x: 0.3,
          z: 0.3,
          delay: 0.25 * index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 1,
        });
      }
    });
  }, []);
  return (
    <Center scale={1.2}>
      <mesh position={[0, 1, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[1, 1.41, 4]}></coneGeometry>
        <CustomeMaterial></CustomeMaterial>
      </mesh>
      <mesh position={[0, -1, 0]} rotation={[-Math.PI, 0, 0]}>
        <coneGeometry args={[1, 1.41, 4]}></coneGeometry>
        <CustomeMaterial></CustomeMaterial>
      </mesh>
    </Center>
  );
};

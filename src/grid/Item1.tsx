import { Center, Instance, Instances } from "@react-three/drei";

import { useCallback, useRef } from "react";
import gsap from "gsap";
import { CustomeMaterial } from "./material";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";

export const Item1 = () => {
  const refList = useRef<THREE.Mesh[]>([]);

  const getRef = useCallback((mesh: THREE.Mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  useGSAP(() => {
    if (refList.current.length === 0) return;

    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(
        refList.current.map((item) => item.rotation),
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 1.5,
          stagger: {
            each: 0.15,
          },
        }
      );
  }, []);
  return (
    <Center>
      <group>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <mesh key={index} ref={getRef}>
              <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
              <CustomeMaterial></CustomeMaterial>
            </mesh>
          );
        })}
      </group>
    </Center>
  );
};

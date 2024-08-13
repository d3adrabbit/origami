import { Center } from "@react-three/drei";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef } from "react";
import * as THREE from "three";
import { CustomMaterial } from "./material";

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
              <CustomMaterial></CustomMaterial>
            </mesh>
          );
        })}
      </group>
    </Center>
  );
};

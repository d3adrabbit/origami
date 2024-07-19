import {
  Center,
  Instance,
  Instances,
  OrbitControls,
  RoundedBox,
} from "@react-three/drei";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { CustomeMaterial } from "./material";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";

export const Item7 = () => {
  const refList = useRef<THREE.Mesh[]>([]);

  function getRef(mesh: THREE.Mesh) {
    refList.current.push(mesh);
  }

  useGSAP(() => {
    if (refList.current.length === 0) return;

    gsap.to(
      refList.current.map((i) => i.rotation),
      {
        y: `+=${Math.PI / 2}`,
        repeat: -1,
        ease: "back",
        stagger: {
          each: 0.1,
        },
        duration: 1,
      }
    );
  }, []);

  return (
    <Center scale={3} rotation={[Math.PI / 10, Math.PI / 4, 0]}>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <RoundedBox
            ref={getRef}
            args={[1, 0.1, 1]}
            key={index}
            radius={0.02}
            position={[0, (index - 1) * 0.1, 0]}
          >
            <CustomeMaterial></CustomeMaterial>
          </RoundedBox>
        );
      })}
    </Center>
  );
};

import { Center, Instance, Instances } from "@react-three/drei";

import { useRef } from "react";
import gsap from "gsap";
import { CustomeMaterial } from "./material";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";

export const Item2 = () => {
  const groupRef = useRef<THREE.Group>(null!);

  const refList = useRef<THREE.Mesh[]>([]);

  function getRef(mesh: THREE.Mesh) {
    refList.current.push(mesh);
  }

  useGSAP(() => {
    gsap.to(groupRef.current.rotation, {
      z: Math.PI * 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const radius = 3;

  return (
    <Center>
      <group rotation={[0, 0, Math.PI / 8]}>
        <group rotation={[0, Math.PI / 2, 0]} scale={0.6} ref={groupRef}>
          <Instances>
            <cylinderGeometry args={[1, 1, 0.1, 64]}></cylinderGeometry>
            <CustomeMaterial></CustomeMaterial>
            {Array.from({ length: 20 }).map((_, index) => {
              return (
                <Instance
                  ref={getRef}
                  key={index}
                  position={[
                    Math.cos((index / 20) * 2 * Math.PI) * radius,
                    Math.sin((index / 20) * 2 * Math.PI) * radius,
                    0,
                  ]}
                  rotation={[0, 0, (index / 20) * 2 * Math.PI]}
                />
              );
            })}
          </Instances>
        </group>
      </group>
    </Center>
  );
};

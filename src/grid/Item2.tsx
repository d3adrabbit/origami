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
    gsap
      .timeline()
      .to(
        refList.current.map((item) => item.rotation),
        {
          y: `+=${Math.PI * 2}`,
          repeat: -1,
          duration: 6,

          ease: "none",
        }
      )
      .to(
        groupRef.current.rotation,
        {
          z: Math.PI * 2,
          duration: 24,
          ease: "none",
          repeat: -1,
        },
        0
      );
  }, []);

  const radius = 3;

  return (
    <Center>
      <group rotation={[0, 0, 0]}>
        <group rotation={[0, 0, 0]} scale={0.6} ref={groupRef}>
          <Instances>
            <boxGeometry args={[1, 0.2, 1]}></boxGeometry>
            <CustomeMaterial></CustomeMaterial>
            {Array.from({ length: 20 }).map((_, index) => {
              return (
                <group
                  key={index}
                  rotation={[0, 0, (index / 20) * 2 * Math.PI]}
                  position={[
                    Math.cos((index / 20) * 2 * Math.PI) * radius,
                    Math.sin((index / 20) * 2 * Math.PI) * radius,
                    0,
                  ]}
                >
                  <Instance ref={getRef} />
                </group>
              );
            })}
          </Instances>
        </group>
      </group>
    </Center>
  );
};

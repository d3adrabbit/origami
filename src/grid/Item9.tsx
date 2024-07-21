import { Center, Instance, Instances } from "@react-three/drei";
import { useCallback, useRef } from "react";
import gsap from "gsap";
import { CustomeMaterial } from "./material";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";

export const Item9 = () => {
  const refList = useRef<THREE.Mesh[]>([]);

  const getRef = useCallback((mesh: THREE.Mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

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
    <Center>
      <group rotation={[0, 0, Math.PI / 4]}>
        <group rotation={[0, 0, Math.PI / 2]}>
          <Instances>
            <cylinderGeometry args={[1, 1, 0.2, 64]}></cylinderGeometry>
            <CustomeMaterial></CustomeMaterial>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <Instance
                  ref={getRef}
                  key={index}
                  position={[0, 0.5 * index, 2]}
                />
              );
            })}
          </Instances>
        </group>
      </group>
    </Center>
  );
};

import { useGSAP } from "@gsap/react";
import { Center, RoundedBox } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef } from "react";
import * as THREE from "three";
import { CustomMaterial } from "./material";

export const Item7 = () => {
  const refList = useRef<THREE.Mesh[]>([]);

  const getRef = useCallback((mesh: THREE.Mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

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
            <CustomMaterial></CustomMaterial>
          </RoundedBox>
        );
      })}
    </Center>
  );
};

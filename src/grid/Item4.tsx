import { Center } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { CustomeMaterial } from "./material";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";

export const Item4 = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const cone1Ref = useRef<THREE.Mesh>(null);
  const cone2Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (
      ring1Ref.current &&
      ring2Ref.current &&
      cone1Ref.current &&
      cone2Ref.current &&
      groupRef.current
    ) {
      gsap
        .timeline({
          repeat: -1,
        })
        .to(
          ring1Ref.current.rotation,
          {
            z: `+=${Math.PI * 2}`,
            x: `+=${Math.PI * 2}`,

            duration: 4,
            ease: "none",
          },
          0
        )
        .to(
          ring2Ref.current.rotation,
          {
            z: `-=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,

            ease: "none",
            duration: 4,
          },
          0
        )
        .to(
          groupRef.current.rotation,
          {
            y: Math.PI * 2,
            duration: 4,
            ease: "none",
          },
          0
        );
    }
  }, []);
  return (
    <Center ref={groupRef}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.1, 0.1]}></torusGeometry>
        <CustomeMaterial></CustomeMaterial>
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.1]}></torusGeometry>
        <CustomeMaterial></CustomeMaterial>
      </mesh>
      <group scale={0.8}>
        <mesh position={[0, 1, 0]} rotation={[0, 0, 0]} ref={cone1Ref}>
          <coneGeometry args={[1, 1.41, 4]}></coneGeometry>
          <CustomeMaterial></CustomeMaterial>
        </mesh>
        <mesh position={[0, -1, 0]} rotation={[-Math.PI, 0, 0]} ref={cone2Ref}>
          <coneGeometry args={[1, 1.41, 4]}></coneGeometry>
          <CustomeMaterial></CustomeMaterial>
        </mesh>
      </group>
    </Center>
  );
};

import { Center, Instance, Instances } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { CustomMaterial } from "./material";

const radius = 3;
const count = 8;

function Item(props: GroupProps) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <group {...props}>
      <group ref={ref} rotation={[0, Math.PI / count, Math.PI / 2]}>
        <Instance />
      </group>
    </group>
  );
}

export const Item3 = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z -= 0.01;
    }
  });

  return (
    <Center>
      <group>
        <group scale={0.6} ref={groupRef}>
          <Instances>
            <cylinderGeometry args={[1, 1, 0.1, 64]}></cylinderGeometry>
            <CustomMaterial></CustomMaterial>
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <Item
                  position={[
                    radius *
                      Math.cos((index * 2 * Math.PI) / count + Math.PI / 4),
                    radius *
                      Math.sin((index * 2 * Math.PI) / count + Math.PI / 4),
                    0,
                  ]}
                  rotation={[0, 0, (index * 2 * Math.PI) / count]}
                  key={index}
                ></Item>
              );
            })}
          </Instances>
        </group>
      </group>
    </Center>
  );
};

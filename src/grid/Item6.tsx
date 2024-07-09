import { Center, Instance, Instances } from "@react-three/drei";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { CustomeMaterial } from "./material";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";

export const Item6 = () => {
  return (
    <Center>
      <group>
        <group>
          <mesh>
            <sphereGeometry></sphereGeometry>
            <CustomeMaterial></CustomeMaterial>
          </mesh>
        </group>
      </group>
    </Center>
  );
};

import { Center, Instance, Instances } from "@react-three/drei";

import { useRef } from "react";
import gsap from "gsap";
import { CustomeMaterial } from "./material";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";

const quarterCylinder = () => {
  const quarterCylinder = new THREE.Shape();
  quarterCylinder.moveTo(0, 0);
  quarterCylinder.absarc(0, 0, 2, 0, Math.PI / 2, false);
  quarterCylinder.lineTo(0, 0);
  const extrudeSettings = {
    steps: 1,
    depth: 0.5,
    bevelEnabled: false,
  };
  const geometry = new THREE.ExtrudeGeometry(quarterCylinder, extrudeSettings);

  return geometry;
};

export const Item4 = () => {
  const refList = useRef<THREE.Group[]>([]);

  function getRef(mesh: THREE.Group) {
    refList.current.push(mesh);
  }

  useGSAP(() => {
    if (refList.current.length === 0) return;

    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })

      .to(
        refList.current.map((item) => item.position),
        {
          x: (index) => {
            return `+=${Math.sin((index / 4) * 2 * Math.PI) * 0.5}`;
          },
          z: (index) => {
            return `+=${Math.cos((index / 4) * 2 * Math.PI) * 0.5}`;
          },
          duration: 1.5,
          ease: "power1.out",
        }
      )
      .to(
        refList.current.map((item) => item.rotation),
        {
          z: `+=${Math.PI}`,
          duration: 2,
        },
        0
      )
      .to(
        refList.current.map((item) => item.position),
        {
          x: 0,
          z: 0,
          duration: 1.5,
        },
        1
      );
  }, []);
  return (
    <Center>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group>
          <Instances geometry={quarterCylinder()}>
            <CustomeMaterial side={THREE.DoubleSide}></CustomeMaterial>
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <group
                  ref={getRef}
                  key={index}
                  rotation={[0, (index * Math.PI) / 2, 0]}
                >
                  <Instance rotation={[Math.PI / 2, 0, 0]} />
                </group>
              );
            })}
          </Instances>
        </group>
      </group>
    </Center>
  );
};

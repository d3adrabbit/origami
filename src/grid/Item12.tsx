import { useGSAP } from "@gsap/react";
import { Instance, Instances } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useMemo, useRef } from "react";
import * as THREE from "three";
import { CustomMaterial } from "./material";

export const Item12 = () => {
  const refList = useRef<THREE.Mesh[]>([]);
  const groupRef = useRef<THREE.Group>(null);

  const getRef = useCallback((mesh: THREE.Mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const arrow = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(1, 1);
    shape.lineTo(0.5, 1);
    shape.lineTo(0.5, 2);
    shape.lineTo(-0.5, 2);
    shape.lineTo(-0.5, 1);
    shape.lineTo(-1, 1);
    shape.lineTo(0, 0);

    const extrudeSettings = {
      depth: 0.5,
      bevelEnabled: false,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  useGSAP(() => {
    if (refList.current.length === 0 || !groupRef.current) return;

    gsap
      .timeline({})
      .from(
        refList.current.map((item) => item.rotation),
        {
          x: (index) => {
            return index === 1 ? Math.PI * 2 : index === 3 ? -Math.PI * 2 : 0;
          },
          y: (index) => {
            return index === 0 ? Math.PI * 2 : index === 2 ? -Math.PI * 2 : 0;
          },
          duration: 5,
          repeat: -1,
          ease: "none",
        }
      )
      .to(
        groupRef.current.rotation,
        {
          z: Math.PI * 2,
          duration: 10,
          repeat: -1,
          ease: "none",
        },
        0
      );
  }, []);

  const arrows = useMemo(() => {
    return [
      { position: [0, 2, -0.25], rotation: [0, 0, 0] },
      { position: [2, 0, -0.25], rotation: [0, 0, -Math.PI / 2] },
      { position: [0, -2, -0.25], rotation: [0, 0, -Math.PI] },
      { position: [-2, 0, -0.25], rotation: [0, 0, Math.PI / 2] },
    ];
  }, []);

  return (
    <group scale={0.7} ref={groupRef}>
      <mesh>
        <boxGeometry></boxGeometry>
        <CustomMaterial></CustomMaterial>
      </mesh>
      <Instances geometry={arrow}>
        <CustomMaterial></CustomMaterial>
        {arrows.map((item, index) => {
          return (
            <Instance
              ref={getRef}
              position={[item.position[0], item.position[1], item.position[2]]}
              rotation={[item.rotation[0], item.rotation[1], item.rotation[2]]}
              key={index}
            />
          );
        })}
      </Instances>
    </group>
  );
};

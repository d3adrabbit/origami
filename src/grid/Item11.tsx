import { Instance, Instances } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useMemo, useRef } from "react";
import * as THREE from "three";
import { CustomMaterial } from "./material";

// Inspired by https://www.shadertoy.com/view/sdsXWr
export const Item11 = () => {
  const refList = useRef<THREE.Mesh[]>([]);

  const getRef = useCallback((mesh: THREE.Mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const rotate = useMemo(
    () => (a: number) => {
      const s = Math.sin(a);
      const c = Math.cos(a);
      return new THREE.Matrix3().set(c, -s, 0, s, c, 0, 0, 0, 1);
    },
    []
  );

  useFrame(({ clock }) => {
    if (refList.current.length === 0) return;

    const time = clock.getElapsedTime();
    const angle = Math.sin(time * 4);
    const angle1 = Math.min(0, angle * 0.5);
    const angle5 = Math.max(0, angle * 0.5);

    const positions = [
      {
        sphere: refList.current[0],
        vector: new THREE.Vector3(-4, -4, 0),
        angle: angle1,
      },
      {
        sphere: refList.current[1],
        vector: new THREE.Vector3(-2, -4, 0),
        angle: (angle + angle1) * 0.05,
      },
      {
        sphere: refList.current[2],
        vector: new THREE.Vector3(0, -4, 0),
        angle: angle5 * 0.05,
      },
      {
        sphere: refList.current[3],
        vector: new THREE.Vector3(2, -4, 0),
        angle: (angle + angle5) * 0.05,
      },
      {
        sphere: refList.current[4],
        vector: new THREE.Vector3(4, -4, 0),
        angle: angle5,
      },
    ];

    positions.forEach(({ sphere, vector, angle }) => {
      const newPosition = vector.applyMatrix3(rotate(angle));
      newPosition.y += 3;
      sphere.position.copy(newPosition);
    });
  });

  return (
    <group scale={0.55}>
      <Instances>
        <sphereGeometry args={[1, 32, 32]} />
        <CustomMaterial />
        {Array.from({ length: 5 }).map((_, index) => (
          <Instance
            ref={getRef}
            key={index}
            position={[(index - 2) * 2, 0, 0]}
          />
        ))}
      </Instances>
    </group>
  );
};

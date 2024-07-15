import { Center, Instance, Instances, OrbitControls } from "@react-three/drei";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { CustomeMaterial } from "./material";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import { useFrame, useThree } from "@react-three/fiber";

class SemiCircleCurve extends THREE.Curve<THREE.Vector3> {
  scale: number;
  constructor(scale = 1) {
    super();
    this.scale = scale;
  }

  getPoint(t: number) {
    const radians = t * Math.PI;
    const x = Math.cos(radians) * this.scale;
    const y = Math.sin(radians) * this.scale;
    return new THREE.Vector3(x, y, 0);
  }
}

export const Item6 = () => {
  const path = useMemo(() => {
    return new SemiCircleCurve(2);
  }, []);

  const path2 = useMemo(() => {
    return new SemiCircleCurve(2.02);
  }, []);

  const ballRef = useRef<THREE.Mesh>(null);
  const tubeRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useGSAP(() => {
    if (!ballRef.current) return;
    if (!tubeRef.current) return;

    gsap
      .timeline()
      .to(t, {
        current: 2,
        duration: 1,
        ease: "none",
        repeat: -1,
        onUpdate: () => {
          if (!ballRef.current) return;

          const point = path2.getPoint(t.current);
          ballRef.current.position.set(point.x, point.y, point.z);
        },
      })
      .to(
        tubeRef.current.rotation,
        {
          z: 3 * Math.PI,
          ease: "power1.inOut",
          duration: 2,
          repeat: -1,
        },
        "<"
      );
  }, []);

  return (
    <Center scale={0.8}>
      <mesh ref={ballRef} position={[0, 2, 0]}>
        <sphereGeometry args={[0.7]}></sphereGeometry>
        <CustomeMaterial></CustomeMaterial>
      </mesh>

      <mesh rotation={[0, 0, Math.PI]} ref={tubeRef}>
        <tubeGeometry args={[path, 20, 0.8, 8, false]}></tubeGeometry>
        <CustomeMaterial side={THREE.DoubleSide}></CustomeMaterial>
      </mesh>
    </Center>
  );
};

import { Center, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

import * as THREE from "three";

const Ball = () => {
  const texture = useTexture("/16.png");

  const materialRef = useRef<THREE.MeshMatcapMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      const shader = materialRef.current.userData.shader;

      if (shader) {
        shader.uniforms.uTime.value = clock.getElapsedTime();
      }
    }
  });

  return (
    <mesh>
      <icosahedronGeometry args={[1.8, 64]}></icosahedronGeometry>
      <meshMatcapMaterial
        map={texture}
        ref={materialRef}
        onBeforeCompile={(shader) => {
          shader.uniforms.uTime = { value: 0 };
          shader.vertexShader = `
            uniform float uTime;
            ${shader.vertexShader}
          `;
          shader.vertexShader = shader.vertexShader.replace(
            "#include <beginnormal_vertex>",
            `
              #include <beginnormal_vertex>
              float wave = sin(position.y * 20.0 + uTime * 10.0) * 0.2;
              vec3 displacedPosition = position + normal * wave;
              vec3 displacedNormal = normalMatrix * (displacedPosition - position);
              vNormal = normalize(displacedNormal);
            `
          );

          shader.vertexShader = shader.vertexShader.replace(
            "#include <begin_vertex>",
            `
              #include <begin_vertex>
              transformed = position + normal * wave;
            `
          );

          shader.fragmentShader = `

            ${shader.fragmentShader}
          `;

          shader.fragmentShader = shader.fragmentShader.replace(
            "vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;",
            `
              vec2 uv = vec2( dot( x, vNormal ), dot( y, vNormal ) ) * 0.495 + 0.5;
            `
          );

          console.log(shader);

          if (materialRef.current) {
            materialRef.current.userData = {
              shader,
            };
          }
        }}
      ></meshMatcapMaterial>
    </mesh>
  );
};

export const Item5 = () => {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <Center>
      <group ref={groupRef}>
        <Ball></Ball>
      </group>
    </Center>
  );
};

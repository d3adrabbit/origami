import { useTexture } from "@react-three/drei";
import { MeshMatcapMaterialProps } from "@react-three/fiber";
import { forwardRef, Ref } from "react";
import { MeshMatcapMaterial } from "three";

export const CustomeMaterial = forwardRef<
  MeshMatcapMaterial,
  MeshMatcapMaterialProps
>((props, ref) => {
  const texture = useTexture("/16.png");
  return (
    <meshMatcapMaterial
      {...props}
      ref={ref}
      matcap={texture}
    ></meshMatcapMaterial>
  );
});

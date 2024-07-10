import { useTexture } from "@react-three/drei";
import { MeshMatcapMaterialProps } from "@react-three/fiber";

export const CustomeMaterial = (props: MeshMatcapMaterialProps) => {
  const texture = useTexture("/16.png");
  return <meshMatcapMaterial {...props} matcap={texture}></meshMatcapMaterial>;
};

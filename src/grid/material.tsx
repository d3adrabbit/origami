import { useTexture } from "@react-three/drei";

export const CustomeMaterial = () => {
  const texture = useTexture("/16.png");
  return <meshMatcapMaterial matcap={texture}></meshMatcapMaterial>;
};

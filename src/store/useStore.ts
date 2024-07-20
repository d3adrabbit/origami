import { create } from "zustand";

const textures = ["/metal.png", "/wine.png", "0A0A0A_A9A9A9_525252_747474.png"];

interface Store {
  texture: string;
  getNext: () => void;
}

export const useStore = create<Store>((set) => ({
  texture: textures[0],
  getNext: () =>
    set((state) => ({
      texture:
        textures[(textures.indexOf(state.texture) + 1) % textures.length],
    })),
}));

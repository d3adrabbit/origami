import { create } from "zustand";

const textures = ["1.jpeg", "2.jpeg", "3.jpeg"];

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

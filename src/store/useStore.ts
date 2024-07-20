import { create } from "zustand";

const textures = ["1.jpeg", "2.jpeg", "3.jpeg"];

interface Store {
  index: number;
  texture: string;
  setIndex: (num: number) => void;
}

export const useStore = create<Store>((set) => ({
  index: 0,
  texture: textures[0],
  setIndex: (num: number) => set({ index: num, texture: textures[num] }),
}));

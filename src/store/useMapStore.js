import { create } from 'zustand';

export const useMapStore = create((set) => ({
  isLoaded: false,
  setLoaded: (loaded) => set({ isLoaded: loaded }),
}));

import { create } from 'zustand';

export const useMapStore = create((set) => ({
  isLoaded: false,
  isSideBarOpen: false,
  setLoaded: (loaded) => set({ isLoaded: loaded }),
  setIsSideBarOpen: (isOpen) => set({ isSideBarOpen: isOpen }),
}));

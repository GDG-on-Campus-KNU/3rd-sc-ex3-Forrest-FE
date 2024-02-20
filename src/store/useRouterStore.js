import { create } from 'zustand';

export const useRouterStore = create((set) => ({
  isHomeClicked: false,
  isWarClicked: false,
  setIsHomeClicked: (clicked) =>
    set({
      isHomeClicked: !clicked,
      isWarClicked: clicked,
    }),
  setIsWarClicked: (clicked) =>
    set({
      isHomeClicked: clicked,
      isWarClicked: !clicked,
    }),
}));

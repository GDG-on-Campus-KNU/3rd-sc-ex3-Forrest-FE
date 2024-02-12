import { create } from 'zustand';

export const useRouterStore = create((set) => ({
  isHomeClicked: false,
  isWar1Clicked: false,
  isWar2Clicked: false,
  setIsHomeClicked: (clicked) =>
    set({
      isHomeClicked: !clicked,
      isWar1Clicked: clicked,
      isWar2Clicked: clicked,
    }),
  setIsWar1Clicked: (clicked) =>
    set({
      isHomeClicked: clicked,
      isWar1Clicked: !clicked,
      isWar2Clicked: clicked,
    }),
  setIsWar2Clicked: (clicked) =>
    set({
      isHomeClicked: clicked,
      isWar1Clicked: clicked,
      isWar2Clicked: !clicked,
    }),
}));

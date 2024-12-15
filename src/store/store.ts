import { create } from "zustand";
import {
  UseAdminMenuProps,
  AdminMenuState,
  UseCardStateProps,
} from "@/utils/interface";

export const useAdminMenu = create<UseAdminMenuProps>((set) => ({
  currentState: AdminMenuState.Users,
  setCurrentState: (value) =>
    set(() => ({
      currentState: value,
    })),
}));

export const useCardState = create<UseCardStateProps>((set) => ({
  cardState: false,
  setCardState: (value) =>
    set(() => ({
      cardState: value,
    })),
}));

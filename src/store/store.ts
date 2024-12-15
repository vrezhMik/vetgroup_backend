import { create } from "zustand";
import { UseAdminMenuProps, AdminMenuState } from "@/utils/interface";

export const useAdminMenu = create<UseAdminMenuProps>((set) => ({
  currentState: AdminMenuState.Users,
  setCurrentState: (value) =>
    set(() => ({
      currentState: value,
    })),
}));

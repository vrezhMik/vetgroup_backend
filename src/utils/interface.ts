export enum AdminMenuState {
  Users,
  Settings,
}

export interface UseAdminMenuProps {
  currentState: AdminMenuState;
  setCurrentState: (value: AdminMenuState) => void;
}

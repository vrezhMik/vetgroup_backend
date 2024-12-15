export enum AdminMenuState {
  Users,
  Settings,
}

export interface UseAdminMenuProps {
  currentState: AdminMenuState;
  setCurrentState: (value: AdminMenuState) => void;
}

export interface UseCardStateProps {
  cardState: boolean;
  setCardState: (value: boolean) => void;
}

"use client";
import style from "./userPageMenu.module.scss";
import { useAdminMenu } from "@/store/store";
import { AdminMenuState } from "@/utils/interface";

export default function UserPageMenu() {
  const { currentState, setCurrentState } = useAdminMenu();

  return (
    <div className={`row flex ${style.menu}`}>
      <button
        className={currentState === AdminMenuState.Users ? style.active : ""}
        onClick={() => setCurrentState(AdminMenuState.Users)}
      >
        History
      </button>
      <button
        className={currentState === AdminMenuState.Settings ? style.active : ""}
        onClick={() => setCurrentState(AdminMenuState.Settings)}
      >
        Settings
      </button>
    </div>
  );
}

"use client";
import style from "./userPageMenu.module.scss";
import { useUserPageMenu } from "@/store/store";
import { UserMenu } from "@/utils/Types";

export default function UserPageMenu() {
  const { setActiveState, activeState } = useUserPageMenu();

  return (
    <div className={`row flex ${style.menu}`}>
      <button
        className={activeState === UserMenu.History ? style.active : ""}
        onClick={() => setActiveState(UserMenu.History)}
      >
        History
      </button>
      <button
        className={activeState === UserMenu.Settings ? style.active : ""}
        onClick={() => setActiveState(UserMenu.Settings)}
      >
        Settings
      </button>
    </div>
  );
}

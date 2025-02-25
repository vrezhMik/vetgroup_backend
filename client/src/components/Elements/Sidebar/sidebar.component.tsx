"use client";
import style from "./sidebar.module.scss";
import UserMenu from "../../UserComponents/UserMenu/userMenu.component";
import MainMenu from "../MainMenu/mainMenu.component";
import { CurrentUserType } from "@/utils/Types";
import { useEffect } from "react";
import { useCurrentUser } from "@/store/store";

type SidebarProps = {
  current_user: CurrentUserType | null;
};

export default function Sidebar({ current_user }: SidebarProps) {
  const { user_data, set_current_user } = useCurrentUser();
  useEffect(() => {
    if (current_user) set_current_user(current_user);
  }, [current_user, set_current_user]);

  return (
    <aside className={`flex ${style.sidebar}`}>
      <UserMenu />
      <MainMenu />
    </aside>
  );
}

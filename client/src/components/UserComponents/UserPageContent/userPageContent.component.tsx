"use client";

import HistoryList from "@/components/Elements/HistoryList/historyList.component";
import UserSettings from "../../Elements/UserSettings/userSettings";
import UserPageMenu from "../UserPageMenu/userPageMenu.component";
import style from "./userPageContent.module.scss";
import { useUserPageMenu } from "@/store/store";
import { UserMenu } from "@/utils/Types";

export default function UserPageContent() {
  const { activeState } = useUserPageMenu();
  return (
    <div className={style.content}>
      <UserPageMenu />
      {activeState === UserMenu.Settings && <UserSettings />}
      {activeState === UserMenu.History && <HistoryList />}
    </div>
  );
}

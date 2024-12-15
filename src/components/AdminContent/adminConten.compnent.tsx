"use client";

import { useAdminMenu } from "@/store/store";
import Password from "../Password/password.component";
import UserPageMenu from "../UserPageMenu/userPageMenu.component";
import { AdminMenuState } from "@/utils/interface";
import "./adminComponent.scss";

export default function AdminContent() {
  const { currentState, setCurrentState } = useAdminMenu();
  return (
    <div className="content">
      <UserPageMenu />
      {currentState === AdminMenuState.Settings && <Password />}
    </div>
  );
}

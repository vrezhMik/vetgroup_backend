import style from "./sidebar.module.scss";
import UserMenu from "../UserComponents/UserMenu/userMenu.component";
import MainMenu from "../Elements/MainMenu/mainMenu.component";
export default function Sidebar() {
  return (
    <aside className={`flex ${style.sidebar}`}>
      <UserMenu />
      <MainMenu />
    </aside>
  );
}

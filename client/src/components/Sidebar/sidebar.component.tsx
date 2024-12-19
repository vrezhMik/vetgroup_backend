import LogoSVG from "../Icons/LogoSVG";
import style from "./userMenu.module.scss";

export default function Sidebar() {
  return (
    <div className={`${style.userMenu} flex`}>
      <div className={style.userMenuLogo}>
        <LogoSVG />
      </div>
    </div>
  );
}

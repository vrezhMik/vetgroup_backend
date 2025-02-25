import style from "./userMenu.module.scss";
import Avatar from "../../Elements/Icons/AvatarSVG";
import Link from "next/link";
export default function UserMenu() {
  return (
    <div className={`${style.userMenu} flex`}>
      <div className={style.userMenuAvatar}>
        <Link href={"/user"}>
          <Avatar />
        </Link>
      </div>
    </div>
  );
}

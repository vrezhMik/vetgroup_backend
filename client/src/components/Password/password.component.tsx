import style from "./password.module.scss";

export default function Password() {
  return (
    <div className={style.password}>
      <div className={`flex ${style.passwordInputRow}`}>
        <div className={`${style.passwordInputRowElement}`}>
          <label htmlFor="">Old Password</label>
          <input type="password" name="" id="" />
        </div>
        <div className={`${style.passwordInputRowElement}`}>
          <label htmlFor="">New Password</label>
          <input type="password" name="" id="" />
        </div>
        <div className={`${style.passwordInputRowElement}`}>
          <label htmlFor="">Repeat Password</label>
          <input type="password" name="" id="" />
        </div>
      </div>
      <div className={`${style.passwordButtonRow} flex`}>
        <button>Save</button>
      </div>
    </div>
  );
}

"use client";
import style from "./password.module.scss";
import { useCurrentUser } from "@/store/store";
import { change_password_query } from "@/utils/query";
import Cookies from "js-cookie";
import { useState } from "react";

export default function UserSettings() {
  const { user_data } = useCurrentUser();
  const [form_data, set_form_data] = useState({
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const logout = () => {
    Cookies.remove("jwt");
    Cookies.remove("document");
    window.location.href = "/login";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_form_data({
      ...form_data,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    set_form_data({
      old_password: "",
      new_password: "",
      confirm_new_password: "",
    });
  };

  const change_password = async () => {
    const { new_password, old_password, confirm_new_password } = form_data;
    if (new_password !== confirm_new_password) return;
    await change_password_query(
      old_password,
      new_password,
      confirm_new_password
    );
    clearForm();
  };

  return (
    <div className={style.content}>
      <div className={style.contentLogout}>
        <button onClick={logout}>Log Out</button>
      </div>
      <div className={style.user}>
        <h3 className={style.userName}>
          Name:
          <span>
            {" "}
            {user_data.first_name} {user_data.last_name}
          </span>
        </h3>
        <h3 className={style.userCompany}>
          Company: <span>{user_data.company}</span>
        </h3>
      </div>
      <div className={style.password}>
        <div className={`flex ${style.passwordInputRow}`}>
          <div className={`${style.passwordInputRowElement}`}>
            <label htmlFor="">Old Password</label>
            <input
              type="password"
              value={form_data.old_password}
              onChange={handleChange}
              name="old_password"
            />
          </div>
          <div className={`${style.passwordInputRowElement}`}>
            <label htmlFor="">New Password</label>
            <input
              type="password"
              value={form_data.new_password}
              onChange={handleChange}
              name="new_password"
            />
          </div>
          <div className={`${style.passwordInputRowElement}`}>
            <label htmlFor="">Repeat Password</label>
            <input
              type="password"
              value={form_data.confirm_new_password}
              onChange={handleChange}
              name="confirm_new_password"
            />
          </div>
        </div>
        <div className={`${style.passwordButtonRow} flex`}>
          <button onClick={change_password}>Save</button>
        </div>
      </div>
    </div>
  );
}

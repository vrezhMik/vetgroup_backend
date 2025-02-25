"use client";

import LogoSVG from "../Icons/LogoSVG";
import style from "./login.module.scss";
import { login } from "@/utils/query";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const send_request = async () => {
    if(username && password)
      await login("test@localhost.com", "test1234");
  };

  return (
    <div className={`flex ${style.login}`}>
      <div className={` flex ${style["login-form"]}`}>
        <div className={`row ${style["login-form-logo"]}`}>
          <LogoSVG />
        </div>
        <div className={`row flex`}>
          <input type="text"  placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className={`row flex`}>
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className={`row flex`}>
          <button onClick={send_request}>Log In</button>
        </div>
      </div>
    </div>
  );
}

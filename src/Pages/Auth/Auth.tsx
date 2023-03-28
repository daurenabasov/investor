import React, { FormEvent, useState } from "react";
import s from "./Auth.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterBackground from "../../Assets/registrBackground.png";
import { IAuth } from "../../Interfaces/interfaces";

const Auth = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const getRegister = () => {
    navigate("/registration");
  };

  const postUsers = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<IAuth>("", {
        username,
        password,
      });
      const access: string = response.data.access;
      const refresh: string = response.data.refresh;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      if (response.status === 200 || response.status === 201) {
        return navigate("/");
      } else if (!response.status) {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main id={s.authContainer}>
        <div id="container" className={s.authWrapper}>
          <div className={s.authImg}>
            <img src={RegisterBackground} alt="img" />
          </div>
          <div className={s.authForm}>
            <h1>Добро пожаловать!</h1>
            <div className={s.authRoute}>
              <h3>Вход</h3>
              <h3 onClick={getRegister}>Регистрация</h3>
            </div>
            <form onSubmit={postUsers}>
              <input
                type="text"
                value={username}
                placeholder="Имя пользователя"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Пароль*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Войти</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Auth;

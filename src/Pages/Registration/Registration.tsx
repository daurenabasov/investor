import React, { ChangeEvent, FormEvent, useState } from "react";
import s from "./Registration.module.scss";
import RegisterBackground from "../../Assets/registrBackground.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [usernameDirty, setUsernameDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [emailDirty, setEmailDirty] = useState<boolean>(false);

  const [usernameError, setUsernameError] = useState<string>(
    "Usename не должен был пустым"
  );
  const [passwordError, setPasswordError] = useState<string>(
    "Password не должен был пустым"
  );
  const [emailError, setEmailError] = useState<string>(
    "Email не должен был пустым"
  );
  const navigate = useNavigate();

  const SubmitRegistration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("");

      res.data;
    } catch (error) {}
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Некорректная почта");
    } else {
      setEmailError("");
    }
  };

  const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value.trim() !== "") {
      setUsernameDirty(false);
      setUsernameError("");
    }
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 20) {
      setPasswordError("Пароль должен быть больше 4 и меньше 20 символов");
      if (!e.target.value) {
        setPasswordError(passwordError);
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "username":
        setUsernameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const navigateAuth = () => {
    navigate("/auth");
  };

  return (
    <>
      <main id={s.registrationContainer}>
        <div className={s.registrWrapper}>
          <div className={s.registrImg}>
            <img src={RegisterBackground} alt="img" />
          </div>
          <div className={s.registerForm}>
            <h1>Добро пожаловать!</h1>
            <div className={s.registerRoute}>
              <h3 onClick={navigateAuth}>Вход</h3>
              <h3>Регистрация</h3>
            </div>
            <form>
              <div>
                {usernameDirty && usernameError && (
                  <span style={{ color: "red" }}>{usernameError}</span>
                )}

                <input
                  onBlur={(e) => blurHandler(e)}
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Имя пользователя*"
                  onChange={(e) => usernameHandler(e)}
                />
              </div>
              <div>
                {emailDirty && emailError && (
                  <span style={{ color: "red" }}>{emailError}</span>
                )}

                <input
                  onBlur={(e) => blurHandler(e)}
                  type="mail"
                  name="email"
                  placeholder="Почта*"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    emailHandler(e)
                  }
                />
              </div>
              <div>
                {passwordDirty && passwordError && (
                  <span style={{ color: "red" }}>{passwordError}</span>
                )}

                <input
                  onBlur={(e) => blurHandler(e)}
                  type="password"
                  name="password"
                  placeholder="Пароль*"
                  value={password}
                  onChange={(e) => passwordHandler(e)}
                />
              </div>

              <button type="submit">Регистрация</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registration;

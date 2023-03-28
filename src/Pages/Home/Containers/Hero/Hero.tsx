import s from "./Hero.module.scss";
import React, { FormEvent, ReactNode, useRef, useState } from "react";
import axios from "axios";
import { API_MAIL } from "../../../../Constants/api";
import { Button, message, Space } from "antd";

const Hero = () => {
  const [email, setEmail] = useState<any>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string | null>(null);

  const [messageApi, contextHolder] = message.useMessage();

  const successMessage = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };

  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: "Юзер должен быть авторизированным",
    });
  };

  const sumbitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_MAIL, {
        email,
      });
      setEmail(res.data);
      successMessage();
    } catch (error: any) {
      setError(error);
      errorMessage();
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div id="home">
        <div id="container">
          <div className={s.hero}>
            <h1>
              Инвестируйте в нас, чтобы <br /> улучшить свое будущее
            </h1>
            <p>
              Кыргызская Республика традиционно преуспевает в
              сельскохозяйственном секторе. Однако есть и другие отрасли,
              которые обладают <br /> огромным потенциалом развития.
              Гидроэнергетика, туризм и обработка текстиля среди них.
            </p>
            {contextHolder}
            {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
            <form className={s.btn} onSubmit={sumbitEmail}>
              <input
                type="email"
                name="email"
                placeholder="Введти свою почту"
                onChange={handleChange}
              />
              <button value="send" type="submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import s from "./Hero.module.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const Hero = () => {
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
            <form className={s.btn}>
              <input
                type="email"
                name="user_email"
                placeholder="Введти свою почту"
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

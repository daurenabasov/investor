import s from "./Footer.module.scss";
import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import line1 from "../../../Assets/Line3.png";
import line2 from "../../../Assets/Line4.png";
import line3 from "../../../Assets/Line5.png";
import social1 from "../../../Assets/social1.png";
import social2 from "../../../Assets/social2.png";
import social3 from "../../../Assets/social3.png";
import { API_MAIL } from "../../../Constants/api";
import axios from "axios";

const logo = [
  {
    id: 1,
    img: line1,
  },
  {
    id: 2,
    img: line2,
  },
  {
    id: 3,
    img: line3,
  },
];

const Footer = () => {
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
      <div id="about">
        <div className={s.main_footer}>
          <div className={s.footer}>
            <div className={s.left}>
              <div className={s.logo}>
                {logo.map((logs) => (
                  <img src={logs.img} alt="" />
                ))}
                <h1>InvestInUs</h1>
              </div>
              <p>
                High level experience in web design <br /> and development
                knowledge, <br /> producing quality work.
              </p>
            </div>
            <div className={s.center}>
              <p>
                Subscribe to stay tuned for new web design <br /> and latest
                updates. Let's do it!
              </p>
              {contextHolder}

              <form className={s.btn} onClick={sumbitEmail}>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
                <button value="send" type="submit">
                  Send
                </button>
              </form>
            </div>
            <div className={s.right}>
              <div className={s.icons}>
                <h1>Follow us</h1>
                <div className={s.soc}>
                  <img src={social1} alt="" />
                  <img src={social2} alt="" />
                  <img src={social3} alt="" />
                </div>
              </div>
              <div className={s.number}>
                <h1>Call us</h1>
                <span>+0500500500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

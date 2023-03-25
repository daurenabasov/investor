import React, { useState, useEffect } from "react";
import s from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Burger from "../../UI/Burger/Burger";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/auth");
  };
  const handleSignUp = () => {
    navigate("/registration");
  };
  return (
    <>
      <div id={s.header_container}>
        <div className={s.main_header}>
          <div className={s.header}>
            <div>
              <h1>InvestInUs</h1>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Домой</Link>
                </li>
                <li>
                  <a href="/">Посты</a>
                </li>
                <li>
                  <a href="#about">О нас</a>
                </li>
              </ul>
            </nav>
            <div className={s.busket}>
              <button onClick={handleSignUp}>Sign In</button>
              <button onClick={handleSignIn}>Sign Up</button>
            </div>
            <div className={s.burger} onClick={() => setShowNav(!showNav)}>
              <Burger
                className={`${s.nav_icon_1} ${isOpen ? s.open : ""}`}
                onClick={handleClick}
              ></Burger>
            </div>
          </div>
        </div>
      </div>

      {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
    </>
  );
};

export default Header;

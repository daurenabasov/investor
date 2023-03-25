import React, { FC } from "react";
import { Link } from "react-router-dom";
import cl from "classnames";
import { motion } from "framer-motion";
import s from "./Sidebar.module.scss";

interface ISidebar {
  show: boolean;
  setShowNav: (arg: boolean) => void;
}

const Sidebar: FC<ISidebar> = ({ show, setShowNav }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={cl(s.sidenav, { [s.active]: show })}
    >
      <nav>
        <ul>
          <li onClick={() => setShowNav(false)}>
            <Link className={s.nav_link} to="/">
              Home
            </Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link className={s.nav_link} to="/posts">
              Posts
            </Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link className={s.nav_link} to="auth">
              Sign in
            </Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link className={s.nav_link} to="registration">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;

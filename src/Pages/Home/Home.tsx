import React from "react";
import s from "./Home.module.scss";
import Hero from "./Containers/Hero/Hero";
import Company from "./Containers/Company/Company";
import How from "./Containers/How/How";
import Features from "./Containers/Features/Features";

const Home = () => {
  return (
    <main id={s.home}>
      <Hero />
      <Company />
      <How />
      <Features />
    </main>
  );
};

export default Home;

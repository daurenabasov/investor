import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layouts/Layout/Layout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;

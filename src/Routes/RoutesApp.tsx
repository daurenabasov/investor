import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layouts/Layout/Layout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Auth from "../Pages/Auth/Auth";
import Posts from "../Pages/Posts/Posts";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="auth" element={<Auth />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" />
      </Route>
    </Routes>
  );
};

export default RoutesApp;

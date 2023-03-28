import React, { useEffect, useState } from "react";
import s from "./Posts.module.scss";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("");
    setPosts(res.data);
  };

  useEffect(() => {}, []);

  return (
    <div id="container">
      <h1>Our Posts</h1>
    </div>
  );
};

export default Posts;

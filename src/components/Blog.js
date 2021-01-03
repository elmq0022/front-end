import React from "react";
import BlogMenu from "./BlogMenu";
import BlogArticle from "./BlogArticle";
import { useEffect, useState } from "react";
import blog from "../api/blog";

import Grid from "@material-ui/core/Grid";

const Blog = () => {
  const [currentArticle, setCurrentArticle] = useState("");
  const [articles, setArticles] = useState([]);

  const onMenuClick = (pk) => {
    blog.get("/article/" + pk.toString()).then((response) => {
      setCurrentArticle(response.data);
    });
  };

  useEffect(() => {
    blog.get("/article").then((response) => {
      setArticles(response.data);
      setCurrentArticle(response.data[0]);
    });
  }, []);

  return (
    <div>
      <Grid container spacing={3} direction="row">
        <Grid item xs={2}>
          <BlogMenu onMenuClick={onMenuClick} articles={articles} />
        </Grid>
        <Grid item xs={10}>
          <BlogArticle article={currentArticle} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;

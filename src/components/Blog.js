import React from "react";
import BlogMenu from "./BlogMenu";
import BlogArticle from "./BlogArticle";

const Blog = (props) => {
  return (
    <div>
      <BlogMenu onMenuClick={props.onMenuClick} articles={props.articles} />
      <BlogArticle article={props.article} />
    </div>
  );
};

export default Blog;

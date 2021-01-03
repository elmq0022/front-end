import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import Typography from "@material-ui/core/Typography";

const ArticleMenuItem = (props) => {
  return (
    <MenuItem onClick={props.onMenuClick}>
      <Typography noWrap>{props.article.title}</Typography>
    </MenuItem>
  );
};

const BlogMenu = (props) => {
  const articles = props.articles.map((article) => (
    <ArticleMenuItem
      article={article}
      key={article.pk.toString()}
      onMenuClick={() => props.onMenuClick(article.pk)}
    />
  ));

  return <MenuList>{articles}</MenuList>;
};

export default BlogMenu;

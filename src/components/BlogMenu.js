import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const ArticleMenuItem = (props) => {
  return (
    <MenuItem onClick={props.onMenuClick}>
      <Typography>{props.article.title}</Typography>
    </MenuItem>
  );
};

const BlogMenu = (props) => {
  const classes = useStyles();

  const articles = props.articles.map((article) => (
    <ArticleMenuItem
      article={article}
      key={article.pk.toString()}
      onMenuClick={() => props.onMenuClick(article.pk)}
    />
  ));

  return (
    <div className={classes.root}>
      <MenuList>{articles}</MenuList>
    </div>
  );
};

export default BlogMenu;

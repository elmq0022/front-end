import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import Accordian from "@material-ui/core/Accordion";
import AccordianDetails from "@material-ui/core/AccordionDetails";
import AccordianSummary from "@material-ui/core/AccordionSummary";

const ArticleMenuItem = (props) => {
  return (
    <MenuItem onClick={props.onMenuClick}>
      <Typography noWrap>{props.article.title}</Typography>
    </MenuItem>
  );
};

const ArticleTag = (props) => {
  return <MenuItem>{props.tag}</MenuItem>;
};

const Date = (props) => {
  return <MenuItem>{props.date}</MenuItem>;
};

const BlogMenu = (props) => {
  // const articles = props.articles.map((article) => (
  // <ArticleMenuItem
  //   article={article}
  //   key={article.pk.toString()}
  //   onMenuClick={() => props.onMenuClick(article.pk)}
  // />

  const articleTags = props.tags.map((tag) => {
    return <ArticleTag key={tag.tag} tag={tag.tag} />;
  });

  return (
    <React.Fragment>
      <MenuItem>
        <form>
          <TextField variant="outlined" label="search"></TextField>
        </form>
      </MenuItem>
      <Accordian elevation={0}>
        <AccordianSummary>Tags</AccordianSummary>
        <AccordianDetails>
          <MenuList>{articleTags}</MenuList>
        </AccordianDetails>
      </Accordian>
      <MenuItem>Dates</MenuItem>
    </React.Fragment>
  );
};

export default BlogMenu;

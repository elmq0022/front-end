import React from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import BlogMenu from "./BlogMenu";
import BlogArticles from "./BlogArticles";
import { useEffect, useState } from "react";
import blog from "../api/blog";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import BlogArticle from "./BlogArticle";

const Blog = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    blog.get("/articles/").then((response) => {
      setArticles(response.data.results);
    });

    blog.get("/articles/?featured=true").then((response) => {
      setFeaturedArticles(response.data.results);
    });

    blog.get("/tags/").then((response) => {
      setTags(response.data);
    });
  }, []);

  const drawerWidth = 175;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  let { path, url } = useRouteMatch();

  const Article = () => {
    let { pk } = useParams();
    return <BlogArticle pk={pk} />;
  };

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <BlogMenu articles={articles} tags={tags} />
        </Drawer>
      </Hidden>

      <Switch>
        <Route exact path={path}>
          <main className={classes.content}>
            <BlogArticles
              featuredArticles={featuredArticles}
              articles={articles}
            />
          </main>
        </Route>
        <Route path={`${path}/article/:pk`}>
          <Article />
        </Route>
      </Switch>
    </div>
  );
};

export default Blog;

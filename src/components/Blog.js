import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  const [currentArticle, setCurrentArticle] = useState("");
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  const onMenuClick = (pk) => {
    blog.get("/articles/" + pk.toString()).then((response) => {
      setCurrentArticle(response.data);
    });
  };

  useEffect(() => {
    blog.get("/articles/").then((response) => {
      setArticles(response.data.results);
      setCurrentArticle(response.data.results[0]);
    });

    blog.get("/articles/?featured=true").then((response) => {
      setFeaturedArticles(response.data.results);
    });

    blog.get("/tags/").then((response) => {
      setTags(response.data);
    });
  }, []);

  const drawerWidth = 280;
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
          <BlogMenu onMenuClick={onMenuClick} articles={articles} tags={tags} />
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/blog"
              component={() => {
                return (
                  <BlogArticles
                    featuredArticles={featuredArticles}
                    articles={articles}
                    url="/blog"
                  />
                );
              }}
            />
            <Route
              exact
              path="/blog/article"
              component={() => {
                return <BlogArticle article={currentArticle}></BlogArticle>;
              }}
            />
          </Switch>
        </BrowserRouter>

        {/* <BlogArticles featuredArticles={featuredArticles} articles={articles} />
        <BlogArticle article={currentArticle}></BlogArticle> */}
      </main>
    </div>
  );
};

export default Blog;

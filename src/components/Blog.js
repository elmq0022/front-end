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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    blog.get("/articles/").then((response) => {
      setArticles(response.data.results);
    });

    blog
      .get("/articles/", { params: { featured: "true" } })
      .then((response) => {
        setFeaturedArticles(response.data.results);
      });

    blog.get("/tags/").then((response) => {
      let t = response.data.map((d) => {
        d["checked"] = false;
        return d;
      });
      setTags(t);
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

  const handleTagChange = (event, id) => {
    let t = tags.map((x) => {
      if (x.pk === id) {
        x.checked = event.target.checked;
        return x;
      } else {
        return x;
      }
    });
    setTags(t);
    updateArticles();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateArticles();
  };

  const updateArticles = () => {
    let params = {};

    let selectedTags = tags
      .filter((t) => {
        return t.checked;
      })
      .map((t) => t.pk)
      .join();

    if (selectedTags) {
      params["tags"] = selectedTags;
    }

    if (searchTerm) {
      params["search"] = searchTerm;
    }

    blog.get("/articles/", { params: params }).then((response) => {
      setArticles(response.data.results);
    });
  };

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path={path}>
          <Hidden smDown>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Toolbar />
              <BlogMenu
                tags={tags}
                handleTagChange={handleTagChange}
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
              />
            </Drawer>
          </Hidden>

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

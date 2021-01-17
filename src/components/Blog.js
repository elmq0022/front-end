import div from "react";
import BlogMenu from "./BlogMenu";
import BlogArticle from "./BlogArticle";
import { useEffect, useState } from "react";
import blog from "../api/blog";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
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
          <BlogMenu onMenuClick={onMenuClick} articles={articles} />
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        <BlogArticle article={currentArticle} />
      </main>
    </div>
  );
};

export default Blog;

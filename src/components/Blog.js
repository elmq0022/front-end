import React from "react";
import BlogMenu from "./BlogMenu";
import BlogArticle from "./BlogArticle";

import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';

const Blog = (props) => {
  return (
    <div>
      <Paper>
        <Grid container spacing={3} direction="row">
          <Grid item xs={2}>
            <BlogMenu onMenuClick={props.onMenuClick} articles={props.articles} />
          </Grid>
          <Grid item xs={10}>
            <BlogArticle article={props.article} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Blog;

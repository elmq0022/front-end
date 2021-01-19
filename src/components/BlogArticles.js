import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";

const ArticleCard = (props) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          <Typography
            dangerouslySetInnerHTML={{ __html: props.shortDescription }}
          />
        </CardContent>
        <CardActionArea>
          <Button>Read</Button>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const BlogArticles = (props) => {
  const featuredArticles = props.articles.map((article) => {
    return (
      <ArticleCard
        title={article.title}
        shortDescription={article.short_description}
      />
    );
  });

  const articles = props.articles.map((article) => {
    return (
      <ArticleCard
        title={article.title}
        shortDescription={article.short_description}
      />
    );
  });

  return (
    <React.Fragment>
      <Typography variant="h4">Featured Post</Typography>
      {featuredArticles}
      <Typography variant="h4">Recent Post</Typography>
      <Grid container spacing={4}>
        {articles}
      </Grid>
    </React.Fragment>
  );
};

export default BlogArticles;

import React from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
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
          <Link to={"/blog/article/" + props.pk}>
            <Button>Read</Button>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const BlogArticles = (props) => {
  const featuredArticles = props.featuredArticles.map((article) => {
    return (
      <ArticleCard
        title={article.title}
        shortDescription={article.short_description}
        pk={article.pk}
      />
    );
  });

  const articles = props.articles.map((article) => {
    return (
      <ArticleCard
        title={article.title}
        shortDescription={article.short_description}
        pk={article.pk}
      />
    );
  });

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Typography gutterBottom variant="h4">
          Featured Articles
        </Typography>
        {featuredArticles}
        <Typography gutterBottom variant="h4">
          Recent Articles
        </Typography>
        {articles}
      </Grid>
    </React.Fragment>
  );
};

export default BlogArticles;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ArticleCard = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography>{props.article.title}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.onMenuClick}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

class BlogMenu extends React.Component {
  render() {
    const articles = this.props.articles.map((article) => (
      <ArticleCard
        article={article}
        key={article.pk.toString()}
        onMenuClick={() => this.props.onMenuClick(article.pk)}
      />
    ));

    return <div>{articles}</div>;
  }
}

export default BlogMenu;

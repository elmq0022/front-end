import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from '@material-ui/core/Typography';


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
    <Card key={props.article.id}>
      <CardContent>
        <Typography>{props.article.title}</Typography>
        <br />
        <div dangerouslySetInnerHTML={{ __html: props.article.post }} />
      </CardContent>
      <CardActions>
        <Button size="small">Continue Reading</Button>
      </CardActions>
    </Card>
  );
};

class BlogList extends React.Component {
  render() {
    const articles = this.props.articles.map((article) => (
      <ArticleCard article={article} />
    ));

    return (
      <div>
        <ul>{articles}</ul>
      </div>
    );
  }
}

export default BlogList;

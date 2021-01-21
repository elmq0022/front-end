import React from "react";
import { useEffect, useState } from "react";
import blog from "../api/blog";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const BlogArticle = (props) => {
  console.log(props);

  const [article, setArticle] = useState(null);

  useEffect(() => {
    blog.get("/articles/" + props.pk).then((response) => {
      setArticle(response.data);
    });
  }, []);

  if (article === null) {
    return <div>Loading</div>;
  } else {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="subtitle2">
          First Published: {article.published_date}
        </Typography>
        <Typography dangerouslySetInnerHTML={{ __html: article.post }} />
      </Container>
    );
  }
};

export default BlogArticle;

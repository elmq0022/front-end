import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';


const BlogArticle = props =>{
  
    if(props.article === null){
        return <div>Select an Article</div>
    }
    else {
        return (
            <Container>
                <Typography dangerouslySetInnerHTML={{ __html: props.article.post }} />
            </Container>
        )
    }
}

export default BlogArticle;
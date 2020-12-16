import React from "react";

import Typography from "@material-ui/core/Typography";

const BlogArticle = props =>{
  
    if(props.article === null){
        return <div>Select an Article</div>
    }
    else {
        return (<Typography dangerouslySetInnerHTML={{ __html: props.article.post }} />)
    }
}

export default BlogArticle;
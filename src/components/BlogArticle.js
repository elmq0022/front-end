import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const BlogArticle = props =>{
  
    if(props.article === null){
        return <div>In null</div>
    }
    else {
        return (<Typography dangerouslySetInnerHTML={{ __html: props.article.post }} />)
    }
}

export default BlogArticle;
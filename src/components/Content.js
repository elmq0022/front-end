import React from "react";


import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


const Content = (props) => {
  return (
    <Typography dangerouslySetInnerHTML={{ __html: props.content }} />
  );
};

export default Content;

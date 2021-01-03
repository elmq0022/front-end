import React from "react";
import { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import content from "../api/content";

const Content = (props) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    content.get(props.url).then((response) => {
      setHtml(response.data.content);
    });
  }, []);

  return <Typography dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Content;

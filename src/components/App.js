import React from "react";
import Blog from "./Blog";
import blog from "../api/blog";

import Content from "./Content";
import content from "../api/content";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import "fontsource-roboto";

class App extends React.Component {
  state = {
    articles: [],
    currentArticle: null,
    content: "",
    tabIndex: 0,
  };

  constructor() {
    super();
    blog.get("/article").then((response) => {
      this.setState({
        articles: response.data,
        currentArticle: response.data[0],
      });
    });

    content.get("/about").then((response) => {
      this.setState({ content: response.data.content });
    });
  }

  // for blog menu
  onMenuClick = (pk) => {
    blog.get("/article/" + pk.toString()).then((response) => {
      this.setState({ currentArticle: response.data });
    });
  };

  onTabClick = (index) => {
    this.setState({ tabIndex: index });

    const urlName = {
      0: "/about",
      1: "/projects",
      2: "/resume",
    };

    if (0 <= index < 3) {
      content.get(urlName[index]).then((response) => {
        this.setState({ content: response.data.content });
      });
    }
  };

  Section = () => {
    if (this.state.tabIndex < 3) {
      return (<Content content={this.state.content} />);
    }

    return (
      <Blog
        onMenuClick={this.onMenuClick}
        articles={this.state.articles}
        article={this.state.currentArticle}
      />
    );
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs value={this.state.tabIndex}>
            <Tab label="About" onClick={() => this.onTabClick(0)} />
            <Tab label="Projects" onClick={() => this.onTabClick(1)} />
            <Tab label="Resume" onClick={() => this.onTabClick(2)} />
            <Tab label="Blog" onClick={() => this.onTabClick(3)} />
          </Tabs>
        </AppBar>
        <this.Section />
      </div>
    );
  }
}

export default App;

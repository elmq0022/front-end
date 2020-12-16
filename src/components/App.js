import React from "react";
import Blog from "./Blog";
import blog from "../api/blog";
import "fontsource-roboto";

class App extends React.Component {
  state = {
    articles: [],
    currentArticle: null,
  };

  constructor() {
    super();
    blog.get("/article").then((response) => {
      console.log(response);
      this.setState({
        articles: response.data,
        currentArticle: response.data[0],
      });
    });
  }

  onMenuClick = (pk) => {
    blog.get("/article/" + pk.toString()).then((response) => {
      this.setState({ currentArticle: response.data });
    });
  };

  render() {
    return (
      <div>
        <Blog
          onMenuClick={this.onMenuClick}
          articles={this.state.articles}
          article={this.state.currentArticle}
        />
      </div>
    );
  }
}

export default App;

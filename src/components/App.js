import React from "react";
import BlogList from "./BlogList";
import blog from "../api/blog";

class App extends React.Component {
  state = {
    articles: [],
  };

  constructor() {
    super()
    blog.get("/article").then((response) => {
      console.log(response);
      this.setState({ articles: response.data });
    });
  }

  render() {
    return (
      <div>
        <BlogList articles={this.state.articles} />
      </div>
    );
  }
}

export default App;

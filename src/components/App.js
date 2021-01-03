import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";

import Blog from "./Blog";
import Content from "./Content";
import Header from "./Header";
import HomePage from "../components/HomePage";

import theme from "./Theme";
import "fontsource-roboto";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/about"
              component={() => {
                return <Content url="about" />;
              }}
            />
            <Route
              exact
              path="/projects"
              component={() => {
                return <Content url="projects" />;
              }}
            />
            <Route
              exact
              path="/resume"
              component={() => {
                return <Content url="resume" />;
              }}
            />
            <Route
              exact
              path="/blog"
              component={() => {
                return <Blog />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import Container from "@material-ui/core/Container";

import Blog from "./Blog";
import BlogArticle from "./BlogArticle";
import Content from "./Content";
import Header from "./Header";
import HomePage from "../components/HomePage";

import theme from "./Theme";
import "fontsource-roboto";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
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
              <Route path="/blog">
                <Blog />
              </Route>
            </Switch>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;

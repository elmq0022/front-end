import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

const useStyles = makeStyles({
  toolbarMargin: {
    marginBottom: "5em",
  },
});

const Header = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleTabClick = (event, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/projects" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/resume" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/blog" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Tabs value={value} onChange={handleTabClick}>
            <Tab component={Link} to={"/"} label="Home" />
            <Tab component={Link} to={"/about"} label="About" />
            <Tab component={Link} to={"/projects"} label="Projects" />
            <Tab component={Link} to={"/resume"} label="Resume" />
            <Tab component={Link} to={"/blog"} label="Blog" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
